const setupFieldIds = [
  "setupTrack", "setupSession", "setupWeather"
];

const setupLabels = {
  timeTrial: "Prova a tempo",
  qualifying: "Qualifica",
  sprint: "Sprint",
  race: "Gara",
  dry: "Asciutto",
  damp: "Umido / intermedie",
  wet: "Pioggia intensa"
};

function setupValue(id){
  const element = document.getElementById(id);
  return element ? element.value : "";
}

function roundToStep(value, step){
  return Math.round(value / step) * step;
}

function setupNumber(value, min, max, step = 1){
  return clamp(roundToStep(value, step), min, max);
}

function buildTechnicalSetup(track, profile){
  const damp = profile.weather === "damp";
  const wet = profile.weather === "wet";
  const wetLevel = wet ? 2 : damp ? 1 : 0;
  const gamepad = profile.device === "gamepad";
  const highFuel = profile.fuel === "high";
  const lowFuel = profile.fuel === "low";
  const stable = profile.priority === "stability";
  const rotation = profile.priority === "rotation";
  const topSpeed = profile.priority === "topSpeed";
  const preserve = profile.tyreFocus === "preserve";
  const pace = profile.tyreFocus === "pace";
  const aggressive = profile.driverStyle === "aggressive";
  const smooth = profile.driverStyle === "smooth";
  const heavyKerbs = profile.kerbs === "high";
  const lightKerbs = profile.kerbs === "low";
  const lowGrip = profile.grip === "low";
  const highGrip = profile.grip === "high";

  let frontWing = track.downforce
    + wetLevel * 3
    + (stable ? 1 : 0)
    + (rotation ? 2 : 0)
    - (topSpeed ? 5 : 0)
    + (lowGrip ? 2 : 0)
    - (highGrip ? 1 : 0);

  let rearWing = track.downforce
    - Math.round(track.speed * 0.13)
    + Math.round(track.traction * 0.04)
    + wetLevel * 4
    + (stable ? 3 : 0)
    - (rotation ? 1 : 0)
    - (topSpeed ? 4 : 0)
    + (gamepad ? 1 : 0);

  if(profile.session === "timeTrial"){
    frontWing -= 1;
    rearWing -= 1;
  }

  let diffOn = 72 + (track.speed - 50) * 0.16;
  diffOn += profile.tractionControl === "off" ? -20 : profile.tractionControl === "medium" ? -8 : 5;
  diffOn += wetLevel * -10;
  diffOn += aggressive ? 5 : smooth ? -5 : 0;
  diffOn += preserve ? -5 : pace ? 5 : 0;

  let diffOff = 35
    + wetLevel * 7
    + (stable ? 10 : 0)
    - (rotation ? 10 : 0)
    + (gamepad ? 5 : 0)
    + (highFuel ? 5 : 0);

  let engineBrake = 70
    + (track.braking >= 80 ? 10 : 0)
    + (rotation ? 10 : 0)
    - (stable ? 10 : 0)
    - wetLevel * 10
    - (profile.abs === "off" ? 10 : 0)
    - (gamepad ? 10 : 0);

  let frontCamber = pace ? -3.5 : preserve ? -3.2 : -3.4;
  let rearCamber = pace ? -2.2 : preserve ? -2.0 : -2.1;
  if(wetLevel){
    frontCamber += wetLevel * 0.15;
    rearCamber += wetLevel * 0.15;
  }
  if(heavyKerbs){
    frontCamber += 0.1;
    rearCamber += 0.1;
  }

  let frontToe = 0.01
    + (stable ? 0.02 : 0)
    + (gamepad ? 0.01 : 0)
    + wetLevel * 0.01
    - (topSpeed ? 0.01 : 0);
  let rearToe = 0.00
    + (stable ? 0.03 : 0)
    + (gamepad ? 0.02 : 0)
    + wetLevel * 0.01;

  let frontSusp = 38
    + track.speed * 0.03
    - track.kerb * 0.07
    - wetLevel * 3
    - (gamepad ? 3 : 0)
    + (aggressive ? 2 : 0)
    - (heavyKerbs ? 3 : 0)
    + (lightKerbs ? 2 : 0);
  let rearSusp = 4
    + track.speed * 0.04
    - track.kerb * 0.02
    - wetLevel
    - (stable ? 1 : 0)
    + (rotation ? 2 : 0)
    + (aggressive ? 1 : 0);

  let frontARB = 12
    + track.downforce * 0.12
    + track.speed * 0.03
    - track.kerb * 0.05
    - wetLevel * 2
    - (gamepad ? 1 : 0)
    + (rotation ? 1 : 0);
  let rearARB = 12
    + track.traction * 0.08
    - track.kerb * 0.04
    - wetLevel * 2
    - (stable ? 3 : 0)
    + (rotation ? 3 : 0)
    + (aggressive ? 1 : 0);

  let frontHeight = 19
    + track.kerb * 0.07
    + wetLevel * 3
    + (highFuel ? 2 : 0)
    - (lowFuel ? 1 : 0)
    - (topSpeed ? 1 : 0)
    + (heavyKerbs ? 2 : 0);
  let rearHeight = 43
    + track.downforce * 0.18
    + track.kerb * 0.08
    + wetLevel * 4
    + (highFuel ? 3 : 0)
    + (rotation ? 3 : 0)
    - (topSpeed ? 2 : 0)
    + (heavyKerbs ? 2 : 0);

  let brakePressure = (profile.abs === "on" ? 100 : 95)
    - wetLevel * 2
    - (gamepad ? 1 : 0)
    - (stable ? 1 : 0);
  let brakeBias = 53
    + (track.braking >= 80 ? 1 : 0)
    + (profile.abs === "off" ? 2 : 0)
    + wetLevel
    + (stable ? 1 : 0)
    - (rotation ? 1 : 0);

  const temperatureDelta = profile.trackTemp - 32;
  let frontPressure = 28.5
    + track.speed * 0.012
    - track.downforce * 0.012
    - temperatureDelta * 0.045
    - (preserve ? 0.5 : 0)
    + (pace ? 0.3 : 0)
    - (lowGrip ? 0.3 : 0)
    + (profile.session === "timeTrial" ? 0.3 : 0);
  let rearPressure = 25.1
    + track.speed * 0.012
    - track.traction * 0.008
    - temperatureDelta * 0.04
    - (preserve ? 0.5 : 0)
    + (pace ? 0.3 : 0)
    - (lowGrip ? 0.3 : 0);

  if(wetLevel){
    frontPressure -= 0.2 * wetLevel;
    rearPressure -= 0.2 * wetLevel;
  }

  const setup = {
    frontWing: setupNumber(frontWing, 0, 50),
    rearWing: setupNumber(rearWing, 0, 50),
    diffOn: setupNumber(diffOn, 10, 100, 5),
    diffOff: setupNumber(diffOff, 10, 100, 5),
    engineBrake: setupNumber(engineBrake, 0, 100, 10),
    frontCamber: setupNumber(frontCamber, -3.5, -2.5, 0.1).toFixed(2),
    rearCamber: setupNumber(rearCamber, -2.2, -1.0, 0.1).toFixed(2),
    frontToe: setupNumber(frontToe, 0, 0.10, 0.01).toFixed(2),
    rearToe: setupNumber(rearToe, 0, 0.20, 0.01).toFixed(2),
    frontSusp: setupNumber(frontSusp, 1, 41),
    rearSusp: setupNumber(rearSusp, 1, 41),
    frontARB: setupNumber(frontARB, 1, 21),
    rearARB: setupNumber(rearARB, 1, 21),
    frontHeight: setupNumber(frontHeight, 10, 35),
    rearHeight: setupNumber(rearHeight, 40, 100),
    brakePressure: setupNumber(brakePressure, 80, 100),
    brakeBias: setupNumber(brakeBias, 50, 70),
    frontRightPressure: setupNumber(frontPressure, 22.5, 29.5, 0.1).toFixed(1),
    frontLeftPressure: setupNumber(frontPressure, 22.5, 29.5, 0.1).toFixed(1),
    rearRightPressure: setupNumber(rearPressure, 20.5, 26.5, 0.1).toFixed(1),
    rearLeftPressure: setupNumber(rearPressure, 20.5, 26.5, 0.1).toFixed(1)
  };

  const scores = {
    "Carico aero": Math.round(clamp(((setup.frontWing + setup.rearWing) / 100) * 100, 0, 100)),
    "Velocità": Math.round(clamp(105 - ((setup.frontWing + setup.rearWing) / 100) * 85, 0, 100)),
    "Stabilità": Math.round(clamp(48 + setup.rearWing * 0.55 + setup.diffOff * 0.22 - setup.rearARB * 0.35, 0, 100)),
    "Rotazione": Math.round(clamp(45 + (setup.frontWing - setup.rearWing) * 1.4 + setup.rearARB * 0.6 - setup.diffOff * 0.16, 0, 100)),
    "Gestione gomme": Math.round(clamp(72 - (pace ? 12 : 0) + (preserve ? 18 : 0) - (aggressive ? 8 : 0) + wetLevel * 4, 0, 100))
  };

  return {setup, scores};
}

function setupCategory(title, items){
  return `
    <section class="setup-category">
      <div class="setup-category-title"><span>${title[0]}</span>${title[1]}</div>
      <div class="setup-sheet-grid">
        ${items.map(([label, value, unit]) => `
          <div class="setup-sheet-item">
            <span>${label}</span>
            <strong>${value}<small>${unit || ""}</small></strong>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function setupSheetHTML(setup){
  return [
    setupCategory(["01", "Aerodinamica"], [
      ["Aerodinamica ala anteriore", setup.frontWing, ""],
      ["Aerodinamica ala posteriore", setup.rearWing, ""]
    ]),
    setupCategory(["02", "Trasmissione"], [
      ["Regolazione differenziale acceleratore", setup.diffOn, "%"],
      ["Regolazione differenziale rilascio acceleratore", setup.diffOff, "%"],
      ["Freno motore", setup.engineBrake, "%"]
    ]),
    setupCategory(["03", "Geometria sospensioni"], [
      ["Campanatura anteriore", setup.frontCamber, "°"],
      ["Campanatura posteriore", setup.rearCamber, "°"],
      ["Convergenza anteriore", setup.frontToe, "°"],
      ["Convergenza posteriore", setup.rearToe, "°"]
    ]),
    setupCategory(["04", "Sospensioni"], [
      ["Sospensioni anteriori", setup.frontSusp, ""],
      ["Sospensioni posteriori", setup.rearSusp, ""],
      ["Barra antirollio anteriore", setup.frontARB, ""],
      ["Barra antirollio posteriore", setup.rearARB, ""],
      ["Altezza da terra anteriore", setup.frontHeight, ""],
      ["Altezza da terra posteriore", setup.rearHeight, ""]
    ]),
    setupCategory(["05", "Freni"], [
      ["Pressione freni", setup.brakePressure, "%"],
      ["Bilanciamento freni anteriore", setup.brakeBias, "%"]
    ]),
    setupCategory(["06", "Pressione pneumatici"], [
      ["Pressione pneumatico anteriore destro", setup.frontRightPressure, " psi"],
      ["Pressione pneumatico anteriore sinistro", setup.frontLeftPressure, " psi"],
      ["Pressione pneumatico posteriore destro", setup.rearRightPressure, " psi"],
      ["Pressione pneumatico posteriore sinistro", setup.rearLeftPressure, " psi"]
    ])
  ].join("");
}

function setupScoresHTML(scores){
  return Object.entries(scores).map(([label, score]) => `
    <div class="score-row">
      <span>${label}</span>
      <div class="score-track"><i style="width:${score}%"></i></div>
      <strong>${score}</strong>
    </div>
  `).join("");
}

function setupRationale(track, profile){
  const wetText = profile.weather === "dry"
    ? "Pista asciutta: altezze e carico sono ottimizzati per efficienza e precisione."
    : "Pista bagnata: più carico, telaio più permissivo e altezze maggiori aumentano il controllo.";
  const sessionText = profile.session === "race"
    ? "Gara: configurazione stabile, attenta al degrado e al carico carburante."
    : profile.session === "sprint"
      ? "Sprint: compromesso tra passo immediato e stabilità."
      : "Sessione da giro veloce: risposta più diretta ed efficiente.";

  return [
    ["Circuito", track.note],
    ["Condizioni", wetText],
    ["Sessione", sessionText],
    ["Temperatura", `Pressioni iniziali calibrate per una pista a ${profile.trackTemp} °C.`]
  ];
}

function setupPdfSections(setup){
  return [
    ["01 / AERODINAMICA", [
      ["Aerodinamica ala anteriore", setup.frontWing],
      ["Aerodinamica ala posteriore", setup.rearWing]
    ]],
    ["02 / TRASMISSIONE", [
      ["Regolazione differenziale acceleratore", `${setup.diffOn}%`],
      ["Regolazione differenziale rilascio acceleratore", `${setup.diffOff}%`],
      ["Freno motore", `${setup.engineBrake}%`]
    ]],
    ["03 / GEOMETRIA SOSPENSIONI", [
      ["Campanatura anteriore", `${setup.frontCamber} gradi`],
      ["Campanatura posteriore", `${setup.rearCamber} gradi`],
      ["Convergenza anteriore", `${setup.frontToe} gradi`],
      ["Convergenza posteriore", `${setup.rearToe} gradi`]
    ]],
    ["04 / SOSPENSIONI", [
      ["Sospensioni anteriori", setup.frontSusp],
      ["Sospensioni posteriori", setup.rearSusp],
      ["Barra antirollio anteriore", setup.frontARB],
      ["Barra antirollio posteriore", setup.rearARB],
      ["Altezza da terra anteriore", setup.frontHeight],
      ["Altezza da terra posteriore", setup.rearHeight]
    ]],
    ["05 / FRENI", [
      ["Pressione freni", `${setup.brakePressure}%`],
      ["Bilanciamento freni anteriore", `${setup.brakeBias}%`]
    ]],
    ["06 / PRESSIONE PNEUMATICI", [
      ["Pressione pneumatico anteriore destro", `${setup.frontRightPressure} psi`],
      ["Pressione pneumatico anteriore sinistro", `${setup.frontLeftPressure} psi`],
      ["Pressione pneumatico posteriore destro", `${setup.rearRightPressure} psi`],
      ["Pressione pneumatico posteriore sinistro", `${setup.rearLeftPressure} psi`]
    ]]
  ];
}

function pdfSafeText(value){
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, "")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function pdfText(text, x, y, size, color = "0 0 0", font = "F1"){
  return `BT /${font} ${size} Tf ${color} rg 1 0 0 1 ${x} ${y} Tm (${pdfSafeText(text)}) Tj ET\n`;
}

function pdfRect(x, y, width, height, color){
  return `${color} rg ${x} ${y} ${width} ${height} re f\n`;
}

function pdfStrokeRect(x, y, width, height, color, lineWidth = 1){
  return `${color} RG ${lineWidth} w ${x} ${y} ${width} ${height} re S\n`;
}

function pdfLine(x1, y1, x2, y2, color, lineWidth = 1){
  return `${color} RG ${lineWidth} w ${x1} ${y1} m ${x2} ${y2} l S\n`;
}

function pdfSetupSection(title, items, topY){
  const sectionHeight = 31 + items.length * 28;
  const bottomY = topY - sectionHeight;
  let stream = pdfRect(34, bottomY, 527, sectionHeight, "0.071 0.071 0.090");
  stream += pdfStrokeRect(34, bottomY, 527, sectionHeight, "0.18 0.18 0.22", 0.7);
  stream += pdfRect(34, topY - 31, 527, 31, "0.10 0.10 0.125");
  stream += pdfRect(34, topY - 31, 4, 31, "0.882 0.024 0");
  stream += pdfText(title, 48, topY - 20, 10, "0.97 0.97 0.98", "F3");

  items.forEach(([label, value], index) => {
    const rowTop = topY - 31 - index * 28;
    const rowBottom = rowTop - 28;
    if(index % 2 === 1) stream += pdfRect(39, rowBottom, 517, 28, "0.086 0.086 0.106");
    stream += pdfLine(39, rowBottom, 556, rowBottom, "0.16 0.16 0.20", 0.45);
    stream += pdfText(label, 48, rowBottom + 10, 8.2, "0.64 0.64 0.68");
    stream += pdfRect(468, rowBottom + 5, 78, 18, "0.13 0.13 0.16");
    stream += pdfText(value, 479, rowBottom + 11, 9.2, "1 1 1", "F3");
  });

  return {stream, nextY:bottomY - 12};
}

function createSetupPdfBlob(setup, track, profile){
  const colors = {
    background:"0.020 0.020 0.027",
    surface:"0.055 0.055 0.071",
    red:"0.882 0.024 0",
    text:"0.97 0.97 0.98",
    muted:"0.57 0.57 0.62",
    line:"0.14 0.14 0.18"
  };
  const sectionGroups = [
    setupPdfSections(setup).slice(0, 3),
    setupPdfSections(setup).slice(3)
  ];
  const pageStreams = sectionGroups.map((sections, pageIndex) => {
    let stream = pdfRect(0, 0, 595, 842, colors.background);
    for(let x = 34; x <= 561; x += 32) stream += pdfLine(x, 64, x, 744, "0.055 0.055 0.072", 0.35);
    for(let y = 64; y <= 744; y += 32) stream += pdfLine(34, y, 561, y, "0.055 0.055 0.072", 0.35);

    stream += pdfRect(0, 752, 595, 84, colors.surface);
    stream += `${colors.red} rg 0 752 m 190 752 l 226 836 l 0 836 l h f\n`;
    stream += pdfRect(0, 836, 190, 6, colors.red);
    stream += pdfRect(190, 836, 28, 6, "1 1 1");
    stream += pdfRect(218, 836, 377, 6, colors.red);
    stream += pdfText("RACE ENGINEERING", 34, 792, 26, "1 1 1", "F2");
    stream += pdfText("F1 25 PERFORMANCE HUB", 36, 770, 8, "1 1 1", "F3");
    stream += pdfText("SETUP LAB / 02", 425, 806, 9, colors.red, "F3");
    stream += pdfText(`REPORT ${String(pageIndex + 1).padStart(2, "0")} / ${String(sectionGroups.length).padStart(2, "0")}`, 425, 784, 8, colors.muted, "F3");

    stream += pdfText(pageIndex === 0 ? "ASSETTO COMPLETO" : "ASSETTO / CONTINUA", 34, 713, 25, colors.text, "F2");
    stream += pdfText(track.name.toUpperCase(), 34, 687, 14, colors.red, "F3");
    stream += pdfLine(34, 671, 561, 671, colors.line, 0.8);

    const metadata = [
      ["SESSIONE", setupLabels[profile.session]],
      ["CONDIZIONI", setupLabels[profile.weather]],
      ["PISTA", `${profile.trackTemp} C`]
    ];
    metadata.forEach(([label, value], index) => {
      const x = 34 + index * 178;
      stream += pdfRect(x, 617, 171, 40, "0.071 0.071 0.090");
      stream += pdfStrokeRect(x, 617, 171, 40, "0.16 0.16 0.20", 0.6);
      stream += pdfText(label, x + 11, 642, 6.5, colors.muted, "F3");
      stream += pdfText(value, x + 11, 626, 9.5, colors.text, "F2");
    });

    let y = 596;
    for(const [title, items] of sections){
      const rendered = pdfSetupSection(title, items, y);
      stream += rendered.stream;
      y = rendered.nextY;
    }

    stream += pdfLine(34, 50, 561, 50, colors.line, 0.7);
    stream += pdfRect(34, 25, 4, 13, colors.red);
    stream += pdfText("VALORI ORDINATI COME NEL MENU ASSETTO PERSONALIZZATO DI F1 25", 47, 29, 6.8, colors.muted, "F3");
    stream += pdfText(`${String(pageIndex + 1).padStart(2, "0")} / ${String(sectionGroups.length).padStart(2, "0")}`, 521, 29, 7.5, colors.text, "F3");
    return stream;
  });

  const objects = [];
  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
  objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";
  objects[5] = "<< /Type /Font /Subtype /Type1 /BaseFont /Courier-Bold >>";
  const pageReferences = [];

  pageStreams.forEach((stream, index) => {
    const pageObject = 6 + index * 2;
    const streamObject = pageObject + 1;
    pageReferences.push(`${pageObject} 0 R`);
    objects[pageObject] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents ${streamObject} 0 R >>`;
    objects[streamObject] = `<< /Length ${stream.length} >>\nstream\n${stream}endstream`;
  });
  objects[2] = `<< /Type /Pages /Kids [${pageReferences.join(" ")}] /Count ${pageReferences.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for(let index = 1; index < objects.length; index++){
    offsets[index] = pdf.length;
    pdf += `${index} 0 obj\n${objects[index]}\nendobj\n`;
  }
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for(let index = 1; index < objects.length; index++){
    pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return new Blob([pdf], {type:"application/pdf"});
}

function downloadSetupPdf(setup, track, profile){
  const blob = createSetupPdfBlob(setup, track, profile);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const filename = track.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  link.href = url;
  link.download = `assetto-f1-25-${filename}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function calculateSetup(){
  const output = document.getElementById("setupOutput");
  const missing = setupFieldIds.filter(id => !setupValue(id));

  setupFieldIds.forEach(id => {
    document.getElementById(id).classList.toggle("is-invalid", missing.includes(id));
  });

  if(missing.length){
    output.className = "setup-output has-result";
    output.innerHTML = `<div class="out-error"><strong>Dati incompleti.</strong><br>Compila tutti i campi evidenziati per calcolare un assetto coerente.</div>`;
    output.scrollIntoView({behavior: "smooth", block: "start"});
    return;
  }

  const track = tracks[setupValue("setupTrack")];
  const profile = {
    session: setupValue("setupSession"),
    weather: setupValue("setupWeather"),
    trackTemp: Number(setupValue("setupTrackTemp")),
    fuel: setupValue("setupSession") === "race" ? "high" : setupValue("setupSession") === "sprint" ? "medium" : "low",
    priority: "balanced",
    grip: "normal",
    kerbs: track.kerb >= 65 ? "high" : track.kerb <= 35 ? "low" : "normal",
    tyreFocus: setupValue("setupSession") === "race" ? "preserve" : setupValue("setupSession") === "timeTrial" ? "pace" : "balanced",
    device: "wheel",
    driverStyle: "balanced",
    tractionControl: "medium",
    abs: "on"
  };
  const result = buildTechnicalSetup(track, profile);
  const rationale = setupRationale(track, profile);

  output.className = "setup-output has-result";
  output.innerHTML = `
    <div class="setup-result-header">
      <div>
        <span class="result-code">SETUP REPORT / F1 25</span>
        <h2>${track.name}</h2>
        <p>${setupLabels[profile.session]} · ${setupLabels[profile.weather]} · ${profile.trackTemp} °C</p>
      </div>
      <button class="download-button" id="downloadSetupPdfBtn" type="button">Scarica PDF assetto</button>
    </div>

    <div class="result-dashboard">
      <section class="result-panel">
        <div class="out-title"><span class="title-index">01</span> Profilo dinamico</div>
        <div class="score-list">${setupScoresHTML(result.scores)}</div>
      </section>
      <section class="result-panel">
        <div class="out-title"><span class="title-index">02</span> Brief tecnico</div>
        <div class="brief-grid">
          <div><span>Circuito</span><strong>${track.name}</strong></div>
          <div><span>Sessione</span><strong>${setupLabels[profile.session]}</strong></div>
          <div><span>Meteo</span><strong>${setupLabels[profile.weather]}</strong></div>
          <div><span>Pista</span><strong>${profile.trackTemp} °C</strong></div>
        </div>
      </section>
    </div>

    <section class="out-section setup-sheet">
      <div class="out-title"><span class="title-index">03</span> Modalità trascrizione F1 25</div>
      <p class="transcription-note">Apri la schermata Assetto personalizzato in F1 25 e inserisci i valori seguendo le sei sezioni qui sotto, nello stesso ordine.</p>
      ${setupSheetHTML(result.setup)}
    </section>

    <section class="out-section">
      <div class="out-title"><span class="title-index">04</span> Perché funziona</div>
      <ul class="info-list">
        ${rationale.map(([key, text]) => `<li><span class="li-key">${key}</span><span>${text}</span></li>`).join("")}
      </ul>
    </section>

    <section class="out-section">
      <div class="out-title"><span class="title-index">05</span> Protocollo di verifica</div>
      <div class="validation-grid">
        <article><span>Run 1</span><strong>Baseline</strong><p>Completa 3 giri puliti e controlla stabilità in frenata, trazione e cordoli.</p></article>
        <article><span>Run 2</span><strong>Correzione</strong><p>Modifica un solo parametro per volta di 1-2 click, seguendo il problema percepito.</p></article>
        <article><span>Run 3</span><strong>Conferma</strong><p>Verifica passo e temperature con carburante coerente alla sessione scelta.</p></article>
      </div>
    </section>

    <p class="result-disclaimer">Il modello genera una base tecnica coerente con F1 25. Stile personale, aggiornamenti del gioco e comportamento della singola vettura possono richiedere una rifinitura.</p>
  `;

  document.getElementById("downloadSetupPdfBtn").addEventListener("click", event => {
    downloadSetupPdf(result.setup, track, profile);
    event.currentTarget.textContent = "PDF scaricato";
    setTimeout(() => { event.currentTarget.textContent = "Scarica PDF assetto"; }, 1800);
  });

  output.scrollIntoView({behavior: "smooth", block: "start"});
}

function initializeSetupPage(){
  const calculateButton = document.getElementById("calculateSetupBtn");
  const temperature = document.getElementById("setupTrackTemp");
  const temperatureValue = document.getElementById("setupTrackTempValue");

  if(temperature && temperatureValue){
    temperature.addEventListener("input", () => {
      temperatureValue.value = `${temperature.value} °C`;
      temperatureValue.textContent = `${temperature.value} °C`;
    });
  }
  if(calculateButton) calculateButton.addEventListener("click", calculateSetup);
}

document.addEventListener("DOMContentLoaded", initializeSetupPage);
