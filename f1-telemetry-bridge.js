const dgram = require("dgram");
const fs = require("fs");
const http = require("http");
const path = require("path");

const UDP_PORT = 20777;
const HTTP_PORT = 20778;
const ROOT = __dirname;
const HEADER_SIZE = 29;
const TYRE_SET_SIZE = 10;
const VISUAL_COMPOUNDS = {7:"inter", 8:"wet", 16:"soft", 17:"medium", 18:"hard"};
const MIME_TYPES = {
  ".html":"text/html; charset=utf-8",
  ".js":"text/javascript; charset=utf-8",
  ".css":"text/css; charset=utf-8",
  ".jpg":"image/jpeg",
  ".png":"image/png",
  ".json":"application/json; charset=utf-8",
  ".md":"text/markdown; charset=utf-8"
};

let telemetry = {
  connected:false,
  lastUpdate:null,
  source:"F1 25 UDP Tyre Sets packet",
  compounds:{}
};

function parseTyreSets(message){
  if(message.length < 231) return;
  const packetFormat = message.readUInt16LE(0);
  const packetId = message.readUInt8(6);
  const playerCarIndex = message.readUInt8(27);
  const carIndex = message.readUInt8(HEADER_SIZE);
  if(packetFormat !== 2025 || packetId !== 12 || carIndex !== playerCarIndex) return;

  const compounds = {};
  for(let index = 0; index < 20; index++){
    const offset = HEADER_SIZE + 1 + index * TYRE_SET_SIZE;
    const visual = message.readUInt8(offset + 1);
    const key = VISUAL_COMPOUNDS[visual];
    if(!key) continue;

    const set = {
      wear:message.readUInt8(offset + 2),
      available:message.readUInt8(offset + 3) === 1,
      recommendedSession:message.readUInt8(offset + 4),
      lifeSpan:message.readUInt8(offset + 5),
      usableLife:message.readUInt8(offset + 6),
      lapDeltaMs:message.readInt16LE(offset + 7),
      fitted:message.readUInt8(offset + 9) === 1
    };

    if(!compounds[key]) compounds[key] = {sets:[], availableSets:0};
    compounds[key].sets.push(set);
    if(set.available || set.fitted) compounds[key].availableSets++;
  }

  for(const compound of Object.values(compounds)){
    const usable = compound.sets.filter(set => set.available || set.fitted);
    const source = usable.length ? usable : compound.sets;
    compound.usableLife = Math.max(...source.map(set => set.usableLife));
    compound.lifeSpan = Math.max(...source.map(set => set.lifeSpan));
    compound.lapDeltaMs = Math.min(...source.map(set => set.lapDeltaMs));
    compound.averageWear = Math.round(source.reduce((sum, set) => sum + set.wear, 0) / source.length);
    delete compound.sets;
  }

  telemetry = {
    connected:true,
    lastUpdate:new Date().toISOString(),
    source:"F1 25 UDP Tyre Sets packet",
    compounds
  };
}

function sendJson(response, status, data){
  response.writeHead(status, {
    "Content-Type":"application/json; charset=utf-8",
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Private-Network":"true",
    "Cache-Control":"no-store"
  });
  response.end(JSON.stringify(data));
}

function serveFile(request, response){
  const urlPath = decodeURIComponent(request.url.split("?")[0]);
  const relative = urlPath === "/" ? "index.html" : urlPath.replace(/^\/+/, "");
  const requestedPath = path.resolve(ROOT, relative);
  if(!requestedPath.startsWith(ROOT + path.sep)){
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(requestedPath, (error, data) => {
    if(error){
      response.writeHead(error.code === "ENOENT" ? 404 : 500);
      response.end(error.code === "ENOENT" ? "Not found" : "Server error");
      return;
    }
    response.writeHead(200, {
      "Content-Type":MIME_TYPES[path.extname(requestedPath).toLowerCase()] || "application/octet-stream",
      "Cache-Control":"no-cache"
    });
    response.end(data);
  });
}

const udp = dgram.createSocket("udp4");
udp.on("message", parseTyreSets);
udp.on("error", error => console.error("Errore UDP:", error.message));
udp.bind(UDP_PORT, "0.0.0.0", () => {
  console.log(`In ascolto sulla telemetria F1 25 UDP, porta ${UDP_PORT}.`);
});

const server = http.createServer((request, response) => {
  if(request.method === "OPTIONS"){
    response.writeHead(204, {
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods":"GET, OPTIONS",
      "Access-Control-Allow-Headers":"*",
      "Access-Control-Allow-Private-Network":"true"
    });
    response.end();
    return;
  }
  if(request.url.startsWith("/api/telemetry")){
    sendJson(response, 200, telemetry);
    return;
  }
  serveFile(request, response);
});

server.listen(HTTP_PORT, "127.0.0.1", () => {
  console.log(`Race Engineering Hub: http://127.0.0.1:${HTTP_PORT}`);
  console.log("In F1 25 abilita UDP Telemetry, formato 2025, IP 127.0.0.1, porta 20777.");
});
