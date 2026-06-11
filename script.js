const tracks = {
  bahrain:    {name:"Bahrain - Sakhir",      laps:57, wearMod:1.25, passing:"media",      type:"rear",      downforce:34, speed:30,  traction:85, braking:70, kerb:35, note:"Alta usura posteriore. Serve trazione pulita."},
  saudi:      {name:"Arabia Saudita - Jeddah",laps:50,wearMod:0.90, passing:"media",      type:"speed",     downforce:24, speed:90,  traction:55, braking:60, kerb:25, note:"Serve velocità e stabilità nei curvoni veloci."},
  australia:  {name:"Australia - Melbourne",  laps:58, wearMod:0.95, passing:"media",      type:"balanced",  downforce:36, speed:60,  traction:60, braking:65, kerb:45, note:"Serve compromesso tra trazione e velocità."},
  japan:      {name:"Giappone - Suzuka",      laps:53, wearMod:1.20, passing:"bassa",      type:"front",     downforce:42, speed:45,  traction:55, braking:55, kerb:35, note:"Proteggi gomme anteriori nelle curve veloci."},
  china:      {name:"Cina - Shanghai",        laps:56, wearMod:1.05, passing:"media",      type:"front",     downforce:40, speed:55,  traction:60, braking:65, kerb:35, note:"Curve lunghe: proteggi anteriore sinistra."},
  miami:      {name:"Miami",                  laps:57, wearMod:1.05, passing:"media",      type:"rear",      downforce:33, speed:65,  traction:70, braking:75, kerb:40, note:"Trazione e stabilità in frenata importanti."},
  imola:      {name:"Imola",                  laps:63, wearMod:1.00, passing:"bassa",      type:"traction",  downforce:44, speed:40,  traction:75, braking:65, kerb:70, note:"Serve stabilità sui cordoli e trazione."},
  monaco:     {name:"Monaco",                 laps:78, wearMod:0.80, passing:"bassissima", type:"downforce", downforce:50, speed:10,  traction:90, braking:70, kerb:80, note:"Massimo carico, massima trazione."},
  canada:     {name:"Canada - Montréal",      laps:70, wearMod:0.95, passing:"alta",       type:"braking",   downforce:28, speed:78,  traction:65, braking:90, kerb:75, note:"Frenata e cordoli molto importanti."},
  spain:      {name:"Spagna - Barcellona",    laps:66, wearMod:1.25, passing:"media",      type:"front",     downforce:43, speed:45,  traction:60, braking:60, kerb:35, note:"Degrado alto, soprattutto anteriori."},
  austria:    {name:"Austria - Red Bull Ring",laps:71, wearMod:1.10, passing:"alta",       type:"braking",   downforce:30, speed:80,  traction:70, braking:90, kerb:70, note:"Pit corto, serve trazione e frenata."},
  silverstone:{name:"Gran Bretagna - Silverstone",laps:52,wearMod:1.15,passing:"media",   type:"front",     downforce:41, speed:55,  traction:50, braking:55, kerb:30, note:"Curve veloci, proteggi anteriori."},
  belgium:    {name:"Belgio - Spa",           laps:44, wearMod:0.95, passing:"alta",       type:"speed",     downforce:29, speed:90,  traction:55, braking:60, kerb:45, note:"Velocità sul dritto e meteo variabile."},
  hungary:    {name:"Ungheria - Hungaroring", laps:70, wearMod:1.10, passing:"bassa",      type:"downforce", downforce:48, speed:20,  traction:80, braking:65, kerb:45, note:"Alto carico e trazione."},
  netherlands:{name:"Olanda - Zandvoort",     laps:72, wearMod:1.05, passing:"bassa",      type:"downforce", downforce:46, speed:30,  traction:65, braking:60, kerb:35, note:"Track position e stabilità."},
  monza:      {name:"Italia - Monza",         laps:53, wearMod:0.85, passing:"alta",       type:"speed",     downforce:18, speed:100, traction:55, braking:95, kerb:80, note:"Velocità massima, frenata e cordoli."},
  baku:       {name:"Azerbaijan - Baku",      laps:51, wearMod:0.90, passing:"alta",       type:"speed",     downforce:22, speed:95,  traction:70, braking:80, kerb:40, note:"Rettilineo lunghissimo e trazione lenta."},
  singapore:  {name:"Singapore - Marina Bay", laps:62, wearMod:1.15, passing:"bassa",      type:"downforce", downforce:50, speed:15,  traction:90, braking:85, kerb:70, note:"Trazione, carico e gestione gomme."},
  usa:        {name:"USA - Austin",           laps:56, wearMod:1.15, passing:"media",      type:"front",     downforce:38, speed:60,  traction:70, braking:75, kerb:60, note:"Degrado medio-alto e curve miste."},
  mexico:     {name:"Messico",                laps:71, wearMod:0.95, passing:"media",      type:"balanced",  downforce:45, speed:65,  traction:60, braking:75, kerb:45, note:"Aria rarefatta: serve più ala."},
  brazil:     {name:"Brasile - Interlagos",   laps:71, wearMod:1.05, passing:"alta",       type:"mixed",     downforce:36, speed:70,  traction:75, braking:70, kerb:70, note:"Meteo variabile, trazione importante."},
  lasvegas:   {name:"Las Vegas",              laps:50, wearMod:0.85, passing:"alta",       type:"speed",     downforce:20, speed:100, traction:65, braking:75, kerb:25, note:"Scarico, ma attenzione alle gomme fredde."},
  qatar:      {name:"Qatar - Lusail",         laps:57, wearMod:1.30, passing:"media",      type:"front",     downforce:44, speed:50,  traction:45, braking:50, kerb:25, note:"Usura alta e curve veloci."},
  abudhabi:   {name:"Abu Dhabi - Yas Marina", laps:58, wearMod:1.00, passing:"media",      type:"balanced",  downforce:35, speed:65,  traction:65, braking:70, kerb:45, note:"Assetto bilanciato."}
};

const tyreBase = {
  soft:   {name:"Soft",       cssClass:"tyre-soft",   lifeRatio:0.31, pace:0.00, degradation:0.060, warmup:0.10},
  medium: {name:"Medium",     cssClass:"tyre-medium", lifeRatio:0.50, pace:0.42, degradation:0.038, warmup:0.35},
  hard:   {name:"Hard",       cssClass:"tyre-hard",   lifeRatio:0.72, pace:0.82, degradation:0.025, warmup:1.10},
  inter:  {name:"Intermedie", cssClass:"tyre-inter",  lifeRatio:0.52, pace:0.00, degradation:0.045, warmup:0.45},
  wet:    {name:"Full Wet",   cssClass:"tyre-wet",    lifeRatio:0.62, pace:0.00, degradation:0.035, warmup:0.65}
};

let f1TelemetryCalibration = null;

/* -----------------------------------------------
   UTILITY
----------------------------------------------- */
function clamp(v, min, max){ return Math.min(Math.max(v, min), max); }

function tag(t){
  const b = tyreBase[t];
  if(!b) return t;
  return `<span class="tyre-tag ${b.cssClass}">${b.name}</span>`;
}

function aiProfile(diff){
  if(diff <= 30)  return {name:"Rookie",    pitShift:-2, aggr:0.6};
  if(diff <= 50)  return {name:"Amateur",   pitShift:-1, aggr:0.75};
  if(diff <= 70)  return {name:"Intermedio",pitShift:0,  aggr:0.85};
  if(diff <= 85)  return {name:"Pro",       pitShift:1,  aggr:0.95};
  if(diff <= 95)  return {name:"Elite",     pitShift:2,  aggr:1.05};
  return                 {name:"Leggendario",pitShift:3, aggr:1.15};
}

function wetTyre(level){
  if(level === "heavy") return "wet";
  if(level === "medium") return "inter";
  return "inter";
}

const sessionNames = {
  sprintShootout: "Qualifica Sprint",
  sprint: "Gara Sprint",
  qualy: "Qualifica GP",
  race: "Gara"
};

function sessionLabel(session){
  return sessionNames[session] || "Gara";
}

function isQualifyingSession(session){
  return session === "qualy" || session === "sprintShootout";
}

function normalizePlan(plan, laps){
  const tyres = Array.isArray(plan.tyres) ? plan.tyres.filter(Boolean) : [];
  const rawPits = Array.isArray(plan.pits) ? plan.pits : [];
  const maxStops = Math.max(0, Math.min(tyres.length - 1, laps - 1));
  const pits = [];

  for(const rawPit of rawPits){
    if(rawPit === null || rawPit === undefined || rawPit === "") continue;
    const pitNumber = Number(rawPit);
    if(!Number.isFinite(pitNumber) || laps <= 1) continue;

    const pit = clamp(Math.round(pitNumber), 1, laps - 1);
    if(pit > 0 && pit < laps && !pits.includes(pit)) pits.push(pit);
  }

  pits.sort((a, b) => a - b);

  return {
    ...plan,
    tyres: tyres.slice(0, Math.max(1, Math.min(tyres.length, pits.slice(0, maxStops).length + 1))),
    pits: pits.slice(0, maxStops)
  };
}

function normalizePlans(plans, laps){
  return plans
    .filter(Boolean)
    .map(plan => normalizePlan(plan, laps))
    .filter(plan => plan.tyres.length > 0);
}

function orderPlans(plans, strategyStyle, startPos){
  const safePlans = plans.filter(Boolean);
  if(strategyStyle === "aggressive" && safePlans[2]) return [safePlans[2], safePlans[0], safePlans[1]].filter(Boolean);
  if(strategyStyle === "conservative" && safePlans[1]) return [safePlans[1], safePlans[0], safePlans[2]].filter(Boolean);
  if(startPos > 10 && safePlans[1]) return [safePlans[1], safePlans[0], safePlans[2]].filter(Boolean);
  return safePlans;
}

function tyreLife(tyreKey, track, wear, driverStyle){
  const telemetryTyre = f1TelemetryCalibration && f1TelemetryCalibration.compounds
    ? f1TelemetryCalibration.compounds[tyreKey]
    : null;
  if(telemetryTyre && Number.isFinite(telemetryTyre.usableLife) && telemetryTyre.usableLife > 0){
    return telemetryTyre.usableLife;
  }

  const tyre = tyreBase[tyreKey] || tyreBase.medium;
  const base = Math.max(8, track.laps * tyre.lifeRatio);
  let wearFactor = track.wearMod || 1.0;
  if(wear === "low") wearFactor *= 0.86;
  if(wear === "high") wearFactor *= 1.18;
  if(driverStyle === "aggressive") wearFactor *= 1.08;
  if(driverStyle === "smooth") wearFactor *= 0.94;
  if(driverStyle === "assisted") wearFactor *= 0.96;
  return Math.max(5, Math.round(base / wearFactor));
}

function sessionAdvice(session, weather){
  if(session === "qualy"){
    return weather !== "dry"
      ? "Qualifica in bagnato: punta il giro veloce con intermedie o wet fresh."
      : "Qualifica asciutta: massimizza ala e bilanciamento freni per il giro singolo.";
  }
  if(session === "sprint") return "Sprint: nessun pit obbligatorio, gestisci gomme, scia e DRS.";
  if(session === "sprintShootout") return "Qualifica Sprint: giro secco, massima carica aerodinamica.";
  return weather !== "dry"
    ? "Gara: mantieni flessibilità sulle mescole wet e occhio alla finestra meteo."
    : "Gara: esegui il piano di pit calcolato, adatta alle Safety Car.";
}

function passingLabel(track){
  if(track.passing === "bassissima" || track.passing === "bassa") return "sorpasso difficile";
  if(track.passing === "alta") return "sorpasso possibile";
  return "sorpasso medio";
}

function lapWindow(center, before = 3, after = 2){
  if(!center) return "nessuna finestra pianificata";
  const start = Math.max(1, center - before);
  const end = Math.max(start, center + after);
  return start === end ? `giro ${start}` : `giri ${start}-${end}`;
}

function tyreStressTarget(track){
  if(track.type === "front") return "proteggi soprattutto l'anteriore: ingresso curva più morbido e meno cordoli";
  if(track.type === "rear" || track.type === "traction") return "proteggi il posteriore: acceleratore progressivo e meno pattinamento";
  if(track.type === "braking") return "proteggi freni e gomme: evita bloccaggi e attacchi troppo lunghi";
  return "guida pulita: niente slide e cordoli solo quando servono";
}

/* -----------------------------------------------
   SETUP BUILDER
----------------------------------------------- */
function buildSetup(track, weather, rainLevel, driverStyle, target, wear, aiDiff){
  const isWet = weather !== "dry";
  const t = track;

  // Aero
  let frontWing = clamp(t.downforce + 1 + (isWet ? 5 : 0), 1, 50);
  let rearWing  = clamp(Math.round(t.downforce * 0.95) + 2 + (isWet ? 5 : 0), 1, 50);

  // Differential
  let diffOn  = clamp(62 + Math.round((t.traction - 60) * 0.22) + (isWet ? -10 : 0), 50, 90);
  let diffOff = clamp(50 + Math.round((t.traction - 60) * 0.16) + (isWet ? -8 : 0), 40, 82);
  if(driverStyle === "aggressive"){ diffOn = clamp(diffOn + 4, 50, 90); diffOff = clamp(diffOff + 3, 40, 82); }
  if(driverStyle === "smooth"){ diffOn = clamp(diffOn - 3, 50, 90); diffOff = clamp(diffOff - 3, 40, 82); }
  if(driverStyle === "assisted"){ diffOn = clamp(diffOn - 6, 50, 90); diffOff = clamp(diffOff - 5, 40, 82); }

  // Engine brake
  let engineBrake = clamp(39 + Math.round(t.braking * 0.16) + (isWet ? -5 : 0), 30, 62);

  // Camber
  let frontCamber = isWet ? -2.4 : (t.type === "front" ? -3.0 : -2.7);
  let rearCamber  = isWet ? -1.4 : -1.7;

  // Toe
  let frontToe = isWet ? 0.05 : (t.type === "speed" ? 0.03 : 0.06);
  let rearToe  = isWet ? 0.30 : (t.type === "speed" ? 0.26 : 0.34);

  // Suspension
  let frontSusp = clamp(3 + Math.round(t.kerb * 0.04) + (isWet ? -1 : 0), 1, 11);
  let rearSusp  = clamp(4 + Math.round(t.kerb * 0.035) + (isWet ? -1 : 0), 1, 11);

  // ARB
  let frontARB = clamp(7 - Math.round(t.kerb * 0.03) + (isWet ? -2 : 0), 1, 11);
  let rearARB  = clamp(4 - Math.round(t.kerb * 0.02) + (isWet ? -1 : 0), 1, 11);

  // Ride height
  let frontHeight = isWet ? 6 : clamp(4 + Math.round(t.kerb * 0.03), 1, 8);
  let rearHeight  = isWet ? 8 : clamp(6 + Math.round(t.kerb * 0.035), 2, 11);

  // Brakes
  let brakePressure = clamp(85 + Math.round(t.braking * 0.04) + (isWet ? -5 : 0), 75, 96);
  let brakeBias     = clamp(57 + (t.type === "rear" ? -1 : (t.type === "front" ? 2 : 0)) + (isWet ? -1 : 0), 52, 64);

  // Pressures (PSI)
  let frontPressure = isWet ? 22.8 : (t.type === "front" ? 23.2 : 23.6);
  let rearPressure  = isWet ? 21.3 : 21.8;

  if(driverStyle === "aggressive"){
    frontWing = clamp(frontWing - 1, 1, 50);
    diffOn = clamp(diffOn + 2, 50, 90);
    engineBrake = clamp(engineBrake + 2, 30, 62);
    frontSusp = clamp(frontSusp + 1, 1, 11);
    frontARB = clamp(frontARB + 1, 1, 11);
    brakePressure = clamp(brakePressure + 2, 75, 96);
  }

  if(driverStyle === "smooth"){
    rearWing = clamp(rearWing + 1, 1, 50);
    rearSusp = clamp(rearSusp - 1, 1, 11);
    rearARB = clamp(rearARB - 1, 1, 11);
    rearPressure = Math.max(20.5, rearPressure - 0.1);
  }

  if(driverStyle === "assisted"){
    frontWing = clamp(frontWing + 1, 1, 50);
    rearWing = clamp(rearWing + 2, 1, 50);
    engineBrake = clamp(engineBrake - 3, 30, 62);
    frontSusp = clamp(frontSusp - 1, 1, 11);
    rearSusp = clamp(rearSusp - 2, 1, 11);
    frontARB = clamp(frontARB - 1, 1, 11);
    rearARB = clamp(rearARB - 2, 1, 11);
    frontHeight = clamp(frontHeight + 1, 1, 8);
    rearHeight = clamp(rearHeight + 1, 2, 11);
    brakePressure = clamp(brakePressure - 3, 75, 96);
    brakeBias = clamp(brakeBias + 1, 52, 64);
    frontPressure = Math.max(22.0, frontPressure - 0.1);
    rearPressure = Math.max(20.5, rearPressure - 0.2);
  }

  let styleNote = "";
  if(driverStyle === "aggressive") styleNote = "Assetto per assistenze attive e stile aggressivo controllato: risposta pronta, ma differenziale e retrotreno restano gestibili.";
  else if(driverStyle === "smooth") styleNote = "Assetto per assistenze attive e guida fluida: trazione progressiva, retrotreno stabile e gomme protette.";
  else if(driverStyle === "assisted") styleNote = "Assetto per assistenze tutte attive e massima stabilità: diff morbido, auto prevedibile e frenata sicura.";
  else styleNote = "Assetto per assistenze tutte attive e guida normale: bilanciamento stabile senza rendere l'auto lenta.";

  if(isWet) styleNote += " - Setup adattato per condizioni bagnate/variabili.";

  return {
    setup: {
      frontWing, rearWing, diffOn, diffOff, engineBrake,
      frontCamber: frontCamber.toFixed(1), rearCamber: rearCamber.toFixed(1),
      frontToe: frontToe.toFixed(2), rearToe: rearToe.toFixed(2),
      frontSusp, rearSusp, frontARB, rearARB, frontHeight, rearHeight,
      brakePressure, brakeBias,
      frontPressure: frontPressure.toFixed(1), rearPressure: rearPressure.toFixed(1)
    },
    styleNote
  };
}

/* -----------------------------------------------
   WEATHER ANALYSIS
----------------------------------------------- */
function getWeatherBlocks(){
  return [1,2,3,4,5,6,7,8].map(i => document.getElementById("w"+i).value);
}

function weatherIcon(w){
  if(w === "dry")        return "SUN";
  if(w === "cloudy")     return "CLD";
  if(w === "light_rain") return "LGT";
  if(w === "rain")       return "RAN";
  return "HVY";
}

function weatherName(w){
  if(w === "dry")        return "Sole";
  if(w === "cloudy")     return "Nuvolo";
  if(w === "light_rain") return "Leggera";
  if(w === "rain")       return "Pioggia";
  return "Forte";
}

function weatherBlockClass(w){
  if(w === "light_rain") return "wet-block";
  if(w === "rain")       return "rain-block";
  if(w === "heavy_rain") return "heavy-block";
  return "";
}

function blockLapRange(index, laps){
  const start = Math.floor((index / 8) * laps) + 1;
  const end   = Math.floor(((index + 1) / 8) * laps);
  return {start, end: Math.max(start, end)};
}

function analyzeWeatherBlocks(blocks, laps){
  const wetTypes = ["light_rain","rain","heavy_rain"];
  const wetBlocks = blocks.map((w,i) => ({w, i, range: blockLapRange(i, laps)})).filter(x => wetTypes.includes(x.w));
  const firstWet = wetBlocks.length ? wetBlocks[0].i : -1;
  const lastWet  = wetBlocks.length ? wetBlocks[wetBlocks.length-1].i : -1;

  let rainLevel = "light";
  if(blocks.includes("heavy_rain")) rainLevel = "heavy";
  else if(blocks.includes("rain"))  rainLevel = "medium";

  let weather = "dry";
  if(wetBlocks.length === 0)                           weather = "dry";
  else if(wetBlocks.length === 8)                      weather = "full_rain";
  else if(firstWet >= 5)                               weather = "rain_end";
  else if(firstWet <= 1 && lastWet <= 4)               weather = "rain_start";
  else if(firstWet <= 1 && lastWet >= 6)               weather = "full_rain";
  else                                                  weather = "mixed";

  const rainLap    = firstWet === -1 ? Math.round(laps * 0.50) : wetBlocks[0].range.start;
  const rainEndLap = lastWet  === -1 ? null : wetBlocks[wetBlocks.length-1].range.end;

  return {weather, rainLevel, rainLap, rainEndLap, firstWet, lastWet, wetBlocks, blocks};
}

function weatherWindowText(analysis, laps){
  if(analysis.firstWet === -1) return "Nessuna pioggia - sessione asciutta";
  const start = analysis.rainLap;
  const end   = analysis.rainEndLap;
  if(start === 1 && end >= laps - 1) return `Pioggia per tutta la gara (giri ${start}-${end})`;
  return `Pioggia dal giro ${start} al giro ${end}`;
}

/* -----------------------------------------------
   SETUP TEMPERATURE ADJUSTMENT
----------------------------------------------- */
function tempSetupAdjustment(setup, trackTemp){
  if(trackTemp === "hot"){
    setup.frontPressure = (Math.max(22.0, Number(setup.frontPressure) - 0.2)).toFixed(1);
    setup.rearPressure  = (Math.max(20.0, Number(setup.rearPressure)  - 0.2)).toFixed(1);
    setup.diffOn = clamp(setup.diffOn - 2, 50, 100);
  }
  if(trackTemp === "cold"){
    setup.frontPressure = (Math.min(25.0, Number(setup.frontPressure) + 0.2)).toFixed(1);
    setup.rearPressure  = (Math.min(23.0, Number(setup.rearPressure)  + 0.2)).toFixed(1);
    setup.brakePressure = clamp(setup.brakePressure + 1, 80, 100);
  }
  return setup;
}

/* -----------------------------------------------
   STRATEGY BUILDER
----------------------------------------------- */
function estimatedPitLoss(track){
  let loss = 19.5 + (100 - track.speed) * 0.045 + track.downforce * 0.025;
  if(track.passing === "bassissima") loss += 1.8;
  if(track.type === "speed") loss -= 0.8;
  return Number(clamp(loss, 18.0, 25.5).toFixed(1));
}

function strategyWearFactor(track, wear, driverStyle){
  let factor = track.wearMod || 1;
  if(wear === "low") factor *= 0.86;
  if(wear === "high") factor *= 1.18;
  if(driverStyle === "aggressive") factor *= 1.08;
  if(driverStyle === "smooth") factor *= 0.94;
  if(driverStyle === "assisted") factor *= 0.96;
  return factor;
}

function stintTimeCost(tyreKey, length, context){
  const tyre = tyreBase[tyreKey] || tyreBase.medium;
  const telemetryTyre = f1TelemetryCalibration && f1TelemetryCalibration.compounds
    ? f1TelemetryCalibration.compounds[tyreKey]
    : null;
  const life = tyreLife(tyreKey, context.track, context.wear, context.driverStyle);
  const wearFactor = strategyWearFactor(context.track, context.wear, context.driverStyle);
  const ageCost = tyre.degradation * wearFactor * length * Math.max(0, length - 1) / 2;
  const ratio = length / Math.max(1, life);
  const cliffCost = ratio > 0.88 ? Math.pow((ratio - 0.88) * 12, 2) * (tyreKey === "soft" ? 1.1 : 0.78) : 0;
  const warmupCost = tyre.warmup * (context.trackTemp === "cold" ? 1.25 : 1);
  const pace = telemetryTyre && Number.isFinite(telemetryTyre.normalizedDelta)
    ? telemetryTyre.normalizedDelta
    : tyre.pace;
  return pace * length + ageCost + cliffCost + warmupCost;
}

function sequenceAvailable(sequence){
  if(!f1TelemetryCalibration || !f1TelemetryCalibration.compounds) return true;
  const counts = {};
  for(const tyre of sequence) counts[tyre] = (counts[tyre] || 0) + 1;
  return Object.entries(counts).every(([tyre, count]) => {
    const data = f1TelemetryCalibration.compounds[tyre];
    return !data || !Number.isFinite(data.availableSets) || count <= data.availableSets;
  });
}

function strategyBias(sequence, context){
  const stops = sequence.length - 1;
  const first = sequence[0];
  const hasSoft = sequence.includes("soft");
  let bias = 0;

  if(context.startPos <= 5 && first === "hard") bias += 3.2;
  if(context.startPos > 10 && first === "hard") bias -= 1.4;
  if(context.startPos > 10 && first === "soft" && context.track.passing === "alta") bias -= 0.8;
  if((context.track.passing === "bassa" || context.track.passing === "bassissima") && stops > 1) bias += 4.5;

  if(context.strategyStyle === "aggressive"){
    if(hasSoft) bias -= 1.8;
    if(stops > 1) bias -= 0.9;
  }
  if(context.strategyStyle === "conservative"){
    if(first === "hard" || first === "medium") bias -= 1.2;
    if(stops > 1) bias += 3.5;
    if(hasSoft) bias += 1.6;
  }

  if(context.wear === "high" && stops === 1) bias += 2.2;
  if(context.wear === "low" && stops > 1) bias += 2.5;
  if(context.track.wearMod < 0.96 && stops > 1) bias += 4.0;
  return bias;
}

function optimizeSequence(sequence, laps, context){
  const stintCount = sequence.length;
  const memo = new Map();

  function solve(index, remaining){
    const key = index + ":" + remaining;
    if(memo.has(key)) return memo.get(key);
    if(index === stintCount - 1){
      if(remaining < 1) return null;
      const result = {cost:stintTimeCost(sequence[index], remaining, context), lengths:[remaining]};
      memo.set(key, result);
      return result;
    }

    const remainingStints = stintCount - index - 1;
    let best = null;
    for(let length = 2; length <= remaining - remainingStints * 2; length++){
      const tail = solve(index + 1, remaining - length);
      if(!tail) continue;
      const cost = stintTimeCost(sequence[index], length, context) + context.pitLoss + tail.cost;
      if(!best || cost < best.cost) best = {cost, lengths:[length, ...tail.lengths]};
    }
    memo.set(key, best);
    return best;
  }

  const optimized = solve(0, laps);
  if(!optimized) return null;

  let total = 0;
  const pits = [];
  for(let i = 0; i < optimized.lengths.length - 1; i++){
    total += optimized.lengths[i];
    pits.push(total);
  }

  const adjustedScore = optimized.cost + strategyBias(sequence, context);
  const windows = pits.map((pit, index) => {
    const tyre = sequence[index];
    const spread = tyre === "soft" ? 2 : 3;
    return [Math.max(1, pit - spread), Math.min(laps - 1, pit + spread)];
  });

  return {
    tyres:[...sequence],
    pits,
    windows,
    lengths:optimized.lengths,
    rawScore:optimized.cost,
    score:adjustedScore
  };
}

function sequenceReason(plan, context){
  const stops = plan.pits.length;
  const first = plan.tyres[0];
  if(stops === 0) return "Nessuna sosta prevista: priorità alla posizione in pista.";
  if(first === "hard") return "Primo stint lungo per guadagnare flessibilità e sfruttare Safety Car o aria libera.";
  if(first === "soft") return "Partenza aggressiva e finestra undercut anticipata.";
  if(stops > 1) return "Stint più corti per mantenere passo e temperature sotto controllo.";
  if(context.track.passing === "bassa" || context.track.passing === "bassissima") return "Una sola sosta per proteggere la posizione in pista.";
  return "Miglior compromesso stimato tra passo, degrado e tempo perso ai box.";
}

function strategyPlanName(plan, index){
  if(index === 0) return "Strategia consigliata";
  if(plan.tyres[0] === "hard") return "Alternativa lunga";
  if(plan.tyres.includes("soft")) return "Attacco / undercut";
  if(plan.pits.length === 1) return "Track position";
  return "Alternativa";
}

function selectDiversePlans(candidates, context){
  const sorted = candidates.filter(Boolean).sort((a, b) => a.score - b.score);
  if(!sorted.length) return [];
  const selected = [sorted[0]];

  for(const candidate of sorted.slice(1)){
    const duplicate = selected.some(plan =>
      plan.pits.length === candidate.pits.length &&
      plan.tyres[0] === candidate.tyres[0] &&
      plan.tyres.join("-") === candidate.tyres.join("-")
    );
    const addsChoice = selected.some(plan =>
      plan.pits.length !== candidate.pits.length || plan.tyres[0] !== candidate.tyres[0]
    );
    if(!duplicate && addsChoice) selected.push(candidate);
    if(selected.length === 3) break;
  }

  for(const candidate of sorted){
    if(selected.length === 3) break;
    if(!selected.includes(candidate)) selected.push(candidate);
  }

  const reference = selected[0].score;
  return selected.map((plan, index) => ({
    ...plan,
    name:strategyPlanName(plan, index),
    delta:Number(Math.max(0, plan.score - reference).toFixed(1)),
    reason:sequenceReason(plan, context)
  }));
}

function buildDryRaceStrategies(track, laps, wear, startPos, aiDifficulty, strategyStyle, driverStyle, sessionType){
  const context = {
    track, wear, startPos, aiDifficulty, strategyStyle, driverStyle,
    pitLoss:estimatedPitLoss(track)
  };

  if(sessionType === "sprint"){
    const candidates = [["soft"],["medium"],["hard"]].map(sequence => optimizeSequence(sequence, laps, context));
    const bestNoStop = selectDiversePlans(candidates, context);
    return bestNoStop.map((plan, index) => ({
      ...plan,
      name:index === 0 ? "Sprint consigliata" : plan.tyres[0] === "soft" ? "Sprint attacco" : "Sprint gestione"
    }));
  }

  if(laps <= 5){
    return selectDiversePlans([["soft"],["medium"],["hard"]].map(sequence => optimizeSequence(sequence, laps, context)), context);
  }

  const oneStop = [
    ["soft","medium"],["medium","soft"],["soft","hard"],
    ["hard","soft"],["medium","hard"],["hard","medium"]
  ];
  const twoStop = [
    ["soft","medium","soft"],["medium","soft","medium"],["medium","hard","medium"],
    ["hard","medium","hard"],["soft","medium","hard"],["medium","hard","soft"],
    ["hard","medium","soft"],["soft","hard","soft"],["soft","hard","medium"],
    ["hard","soft","medium"]
  ];
  const distanceRatio = laps / Math.max(1, track.laps);
  const highStress = strategyWearFactor(track, wear, driverStyle) > 1.20;
  const sequences = [...oneStop, ...twoStop];

  if(distanceRatio > 0.82 && highStress){
    sequences.push(
      ["soft","medium","medium","soft"],
      ["medium","hard","medium","soft"],
      ["soft","medium","hard","soft"]
    );
  }

  return selectDiversePlans(sequences.filter(sequenceAvailable).map(sequence => optimizeSequence(sequence, laps, context)), context);
}

function dryTyreForWeatherSegment(length, track, wear, driverStyle, profile){
  const softLife = tyreLife("soft", track, wear, driverStyle);
  const mediumLife = tyreLife("medium", track, wear, driverStyle);
  if(profile === "attack") return length <= softLife * 1.05 ? "soft" : "medium";
  if(profile === "safe") return length <= mediumLife * 0.82 ? "medium" : "hard";
  if(length <= softLife * 0.72) return "soft";
  if(length <= mediumLife * 1.02) return "medium";
  return "hard";
}

function weatherTyreForBlock(weather, profile){
  if(weather === "heavy_rain") return "wet";
  if(weather === "rain") return profile === "safe" ? "wet" : "inter";
  if(weather === "light_rain") return "inter";
  return null;
}

function buildWeatherPlan(track, laps, analysis, wear, driverStyle, profile){
  const timeline = new Array(laps).fill(null);
  const blocks = analysis.blocks || [];

  for(let index = 0; index < blocks.length; index++){
    const range = blockLapRange(index, laps);
    const wetTyreKey = weatherTyreForBlock(blocks[index], profile);
    for(let lap = range.start; lap <= range.end; lap++) timeline[lap - 1] = wetTyreKey;
  }

  let cursor = 0;
  while(cursor < laps){
    if(timeline[cursor]){
      cursor++;
      continue;
    }
    const start = cursor;
    while(cursor < laps && !timeline[cursor]) cursor++;
    const length = cursor - start;
    const dryTyre = dryTyreForWeatherSegment(length, track, wear, driverStyle, profile);
    for(let lap = start; lap < cursor; lap++) timeline[lap] = dryTyre;
  }

  const tyres = [];
  const lengths = [];
  for(const tyre of timeline){
    if(tyres[tyres.length - 1] === tyre) lengths[lengths.length - 1]++;
    else {
      tyres.push(tyre);
      lengths.push(1);
    }
  }

  const expandedTyres = [];
  const expandedLengths = [];
  for(let index = 0; index < tyres.length; index++){
    const tyre = tyres[index];
    const length = lengths[index];
    const life = tyreLife(tyre, track, wear, driverStyle);
    const stints = Math.max(1, Math.ceil(length / Math.max(5, life * 1.08)));
    let remaining = length;
    for(let stint = 0; stint < stints; stint++){
      const stintLength = Math.round(remaining / (stints - stint));
      expandedTyres.push(tyre);
      expandedLengths.push(stintLength);
      remaining -= stintLength;
    }
  }

  const pits = [];
  let total = 0;
  for(let index = 0; index < expandedLengths.length - 1; index++){
    total += expandedLengths[index];
    const transition = expandedTyres[index] !== expandedTyres[index + 1];
    const bias = transition ? (profile === "safe" ? -1 : profile === "attack" ? 1 : 0) : 0;
    pits.push(clamp(total + bias, 1, laps - 1));
  }

  const windows = pits.map((pit, index) => {
    const transition = expandedTyres[index] !== expandedTyres[index + 1];
    return transition ? [Math.max(1, pit - 1), Math.min(laps - 1, pit + 1)] : [Math.max(1, pit - 2), Math.min(laps - 1, pit + 2)];
  });

  const profileCost = profile === "balanced" ? 0 : profile === "safe" ? 2.4 : 1.6;
  return {
    tyres:expandedTyres,
    lengths:expandedLengths,
    pits,
    windows,
    score:pits.length * estimatedPitLoss(track) + profileCost,
    name:profile === "balanced" ? "Strategia meteo consigliata" : profile === "safe" ? "Crossover prudente" : "Crossover aggressivo",
    reason:profile === "balanced"
      ? "Segue i punti di crossover previsti tra slick, intermedie e full wet."
      : profile === "safe"
        ? "Anticipa la gomma da bagnato per ridurre il rischio quando il grip cala."
        : "Ritarda il cambio per sfruttare più a lungo la mescola più veloce.",
    delta:profileCost
  };
}

function buildStrategies(track, laps, weatherAnalysis, wear, startPos, aiDifficulty, strategyStyle, sessionType, driverStyle = "normal"){
  const weather = weatherAnalysis.weather;
  const wet = wetTyre(weatherAnalysis.rainLevel);

  if(isQualifyingSession(sessionType)){
    const qualyTyre = weather === "dry" ? "soft" : wet;
    return [
      {name:"Run principale", tyres:[qualyTyre], pits:[], windows:[], delta:0, reason:"Gomma nuova e pista libera per il giro push."},
      {name:"Secondo tentativo", tyres:[qualyTyre], pits:[], windows:[], delta:0, reason:"Conserva un secondo set per l'evoluzione della pista."},
      {name:"Backup meteo", tyres:[weather === "dry" ? "soft" : wet], pits:[], windows:[], delta:0, reason:"Esci prima del cambio condizioni previsto."}
    ];
  }

  if(weather === "dry"){
    return buildDryRaceStrategies(track, laps, wear, startPos, aiDifficulty, strategyStyle, driverStyle, sessionType);
  }

  return ["balanced","safe","attack"].map(profile =>
    buildWeatherPlan(track, laps, weatherAnalysis, wear, driverStyle, profile)
  );
}

/* -----------------------------------------------
   LOAD TRACK DEFAULTS
----------------------------------------------- */
function loadTrackDefaults(){
  const key = document.getElementById("track").value;
  if(!key){ document.getElementById("laps").value = ""; return; }
  document.getElementById("laps").value = tracks[key].laps;
}

function setInvalidFields(ids){
  const fields = ["track","laps","startPos","aiDifficulty","driverStyle","wear","strategyStyle","sessionType","w1","w2","w3","w4","w5","w6","w7","w8"];

  for(const id of fields){
    const el = document.getElementById(id);
    if(el) el.classList.toggle("is-invalid", ids.includes(id));
  }
}

function normalizeTelemetryCalibration(data){
  if(!data || !data.connected || !data.compounds) return null;
  const compounds = {};
  const deltas = Object.values(data.compounds)
    .map(compound => Number(compound.lapDeltaMs))
    .filter(Number.isFinite);
  const minimumDelta = deltas.length ? Math.min(...deltas) : 0;

  for(const [key, compound] of Object.entries(data.compounds)){
    compounds[key] = {
      ...compound,
      normalizedDelta:Number.isFinite(Number(compound.lapDeltaMs))
        ? Math.max(0, (Number(compound.lapDeltaMs) - minimumDelta) / 1000)
        : null
    };
  }
  return {...data, compounds};
}

function updateTelemetryStatus(message, connected = false){
  const status = document.getElementById("telemetryStatus");
  if(!status) return;
  status.classList.toggle("connected", connected);
  status.innerHTML = `<i></i> ${message}`;
}

async function connectF1Telemetry(){
  updateTelemetryStatus("Ricerca telemetria F1 25...");
  try{
    const response = await fetch("http://127.0.0.1:20778/api/telemetry", {cache:"no-store"});
    if(!response.ok) throw new Error("Bridge non disponibile");
    const data = await response.json();
    const calibration = normalizeTelemetryCalibration(data);
    if(!calibration){
      f1TelemetryCalibration = null;
      updateTelemetryStatus("Bridge attivo, in attesa di F1 25");
      return;
    }
    f1TelemetryCalibration = calibration;
    const dryCompounds = ["soft","medium","hard"].filter(key => calibration.compounds[key]).length;
    updateTelemetryStatus(`Telemetria F1 25 attiva · ${dryCompounds}/3 mescole`, true);
  } catch(error){
    f1TelemetryCalibration = null;
    updateTelemetryStatus("Modello stimato attivo");
  }
}

/* -----------------------------------------------
   HTML OUTPUT
----------------------------------------------- */
function forecastHTML(blocks, laps){
  let html = '<div class="forecast-row">';
  for(let i = 0; i < 8; i++){
    const r = blockLapRange(i, laps);
    const cls = weatherBlockClass(blocks[i]);
    html += `
      <div class="forecast-block ${cls}">
        <span class="f-num">${i+1}</span>
        <span class="f-icon">${weatherIcon(blocks[i])}</span>
        <span class="f-laps">${r.start}-${r.end}</span>
      </div>`;
  }
  html += '</div>';
  return html;
}

function strategiesHTML(plans, stopHeader = "Pit stop"){
  let rows = "";
  for(let i = 0; i < plans.length; i++){
    const p = plans[i];
    const isPrimary = i === 0;
    const stopText = p.windows && p.windows.length
      ? p.windows.map(([start, end]) => start === end ? "Giro " + start : "Giri " + start + "-" + end).join(" / ")
      : p.pits.length
        ? p.pits.map(x => "Giro " + x).join(" / ")
      : (stopHeader === "Run" ? "Run diretto" : "Nessun pit");
    const deltaText = isPrimary || !Number.isFinite(p.delta) || p.delta === 0 ? "Riferimento" : `+${p.delta.toFixed(1)} s`;
    rows += `<tr>
      <td class="plan-name ${isPrimary ? 'primary' : ''}">
        ${isPrimary ? 'P1 ' : ''}${p.name}
        ${p.reason ? `<span class="plan-reason">${p.reason}</span>` : ""}
      </td>
      <td>${p.tyres.map(tag).join('<span class="arrow-sep">→</span>')}</td>
      <td class="pit-lap">${stopText}</td>
      <td class="delta-time ${isPrimary ? 'primary' : ''}">${deltaText}</td>
    </tr>`;
  }
  return `<table class="data-table">
    <thead><tr><th>Piano</th><th>Mescole</th><th>${stopHeader === "Run" ? "Run" : "Finestra box"}</th><th>Delta stimato</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function stintHTML(plan, track, wear, driverStyle, laps){
  let current = 1;
  let rows = "";
  for(let i = 0; i < plan.tyres.length; i++){
    const end   = plan.pits[i] ? plan.pits[i] : laps;
    const stint = Math.max(1, end - current + 1);
    const life  = tyreLife(plan.tyres[i], track, wear, driverStyle);
    const pct   = Math.round((stint / life) * 100);
    const barWidth = clamp(pct, 0, 100);
    const barClass = pct < 65 ? "ok" : pct < 90 ? "warn" : "danger";
    rows += `<tr>
      <td><strong>${i+1}</strong></td>
      <td style="font-family:'JetBrains Mono',monospace;font-size:12px">${current}-${end}</td>
      <td>${tag(plan.tyres[i])}</td>
      <td>
        <div class="wear-bar-wrap">
          <span class="wear-pct">${pct}%</span>
          <div class="wear-bar"><div class="wear-bar-fill ${barClass}" style="width:${barWidth}%"></div></div>
        </div>
      </td>
    </tr>`;
    current = end + 1;
  }
  return `<table class="data-table">
    <thead><tr><th>Stint</th><th>Giri</th><th>Gomma</th><th>Usura stimata</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function runHTML(plan, sessionType, weatherAnalysis){
  const tyre = plan.tyres[0] || "soft";
  const timing = weatherAnalysis.weather === "dry"
    ? "Pista libera, gomme in finestra e spazio pulito davanti."
    : "Aspetta il momento con meno acqua o meno intensità di pioggia.";

  return `<table class="data-table">
    <thead><tr><th>Fase</th><th>Indicazione</th></tr></thead>
    <tbody>
      <tr><td class="plan-name">Mescola</td><td>${tag(tyre)}</td></tr>
      <tr><td class="plan-name">Sequenza</td><td>Out lap - giro push - in lap</td></tr>
      <tr><td class="plan-name">Priorità</td><td>${sessionType === "sprintShootout" ? "Massimo grip per il giro secco Sprint." : "Massimo grip per il giro secco GP."}</td></tr>
      <tr><td class="plan-name">Timing</td><td>${timing}</td></tr>
    </tbody>
  </table>`;
}

function liveAdviceHTML(track, laps, weatherAnalysis, mainPlan, sessionType, wear, startPos, strategyStyle){
  const firstPit = mainPlan.pits[0] || null;
  const lastPit = mainPlan.pits.length ? mainPlan.pits[mainPlan.pits.length - 1] : null;
  const firstTyre = mainPlan.tyres[0] || "medium";
  const wet = wetTyre(weatherAnalysis.rainLevel);
  const nextTyre = mainPlan.tyres[1] || (weatherAnalysis.weather === "dry" ? (firstTyre === "soft" ? "medium" : "hard") : wet);
  const advice = [];
  const isSprint = sessionType === "sprint";
  const trackPositionTrack = track.passing === "bassissima" || track.passing === "bassa";
  const earlyRaceWindow = `giri 1-${Math.max(3, Math.round(laps * 0.18))}`;
  const lateRaceWindow = `dopo giro ${Math.max(1, Math.round(laps * 0.78))}`;

  if(isQualifyingSession(sessionType)){
    advice.push(
      ["Traffico nel giro push", "Alza il piede, crea spazio e prepara un altro giro se la gomma è ancora in finestra.", "Abortisci se perdi oltre 3 decimi nel primo settore o trovi auto lenta davanti."],
      ["Pioggia in arrivo", `Esci prima della finestra bagnata e chiudi il giro con ${tag(firstTyre)} finché la pista tiene.`, "Se compaiono gocce ma il grip resta alto, completa il push lap."],
      ["Gomma fredda", "Out lap più aggressivo su frenata e trazione, ma senza scivolare in curva veloce.", "Non iniziare il push lap se il posteriore pattina già in uscita lenta."]
    );
  } else {
    advice.push(
      ["Safety Car o VSC", firstPit ? `Se entra in ${lapWindow(firstPit, 5, 3)}, fai pit e monta ${tag(nextTyre)}. Se è molto presto (${earlyRaceWindow}), resta fuori salvo danni o traffico pesante.` : `Con piano senza pit, fermati solo per danni, pioggia o gomma oltre limite; monta ${tag(nextTyre)} se il pit è quasi gratis.`, "Con VSC conviene fermarsi se sei entro 4-5 giri dalla finestra; con Safety Car puoi anticipare un po' di più."],
      ["Usura gomme alta", `${tyreStressTarget(track)}. Se il passo cala oltre 0.8s per due giri, anticipa il pit di 2-4 giri e passa a mescola più dura.`, wear === "high" ? "Questo scenario è probabile con l'usura selezionata." : "Reagisci solo se inizi a scivolare o le temperature restano alte."],
      ["Gomme migliori del previsto", firstPit ? `Allunga lo stint fino a ${lapWindow(firstPit, 0, 5)} se hai aria pulita. Prova overcut solo se non rientri nel traffico.` : "Mantieni track position e non creare una sosta inutile.", trackPositionTrack ? "Qui la posizione in pista vale più della gomma fresca." : "Con pista sorpassabile puoi estendere per avere gomma più fresca nel finale."],
      ["Bloccato nel traffico", firstPit ? `Se resti sotto 0.8s da chi ti precede senza sorpassare, anticipa a ${lapWindow(firstPit, 4, 0)} e cerca aria pulita.` : "Cambia passo nelle zone DRS; evita pit extra se non hai gomma nettamente più veloce.", `${passingLabel(track)}: valuta undercut più aggressivo solo se il rientro è libero.`],
      ["Rivali fanno undercut", firstPit ? `Se un rivale diretto si ferma prima della tua finestra, spingi il giro successivo e copri al massimo entro ${lapWindow(firstPit, 1, 2)}.` : "Non copiare una sosta avversaria se il tuo piano è no-stop e il passo resta stabile.", "Copri solo chi corre per la tua posizione, non auto fuori strategia."],
      ["Danno ala anteriore", `Danno leggero: resta fuori fino alla finestra se perdi meno di 0.5s. Danno pesante: box subito e monta ${tag(nextTyre)}.`, "Se arriva Safety Car, combina riparazione e cambio gomme immediatamente."],
      ["Errore o testacoda", "Non rientrare subito per rabbia: controlla danni, temperature e traffico. Se le gomme sono surriscaldate, fai un giro di gestione.", "Pit solo con danni, gomma rossa o perdita di passo stabile oltre 1s."],
      ["Attacco e difesa", "Prepara il sorpasso con uscita curva pulita, DRS e scia; difendi l'interno solo contro il rivale diretto.", strategyStyle === "aggressive" ? "Con strategia aggressiva spingi nei due giri prima e dopo ogni pit." : "Non consumare gomma inutilmente prima della finestra pit."]
    );

    if(startPos > 10){
      advice.push(["Partenza da metà gruppo", "Primo stint pulito: evita contatti, resta nel DRS e prepara undercut su chi degrada davanti.", "Se perdi tempo in trenino, anticipa solo quando puoi rientrare in aria libera."]);
    } else {
      advice.push(["Partenza davanti", "Difendi track position: copri il primo rivale reale e non inseguire strategie aggressive di auto dietro nel traffico.", "Se sei leader su pista con sorpasso difficile, priorità assoluta a non regalare pit extra."]);
    }

    if(isSprint){
      advice.push(["Sprint senza pit obbligatorio", "Evita soste salvo pioggia, danni o gomma ingestibile. La priorità è posizione in pista e uscita curva pulita.", "Se entra Safety Car tardi, pit solo se puoi rientrare senza perdere troppe posizioni."]);
    }

    if(weatherAnalysis.weather === "dry"){
      advice.push(["Pioggia non prevista", `Non montare ${tag(wet)} alla prima goccia. Aspetta perdita grip reale, AI che rientra o tempi più lenti di 1.5s-2.0s.`, "Se la pioggia cresce in due settori consecutivi, box alla fine del giro."]);
    }

    if(weatherAnalysis.weather === "rain_end" || weatherAnalysis.weather === "mixed"){
      advice.push(["Pioggia in arrivo", `Preparati intorno al giro ${weatherAnalysis.rainLap}. Se inizi a perdere trazione, passa a ${tag(wet)} anche 1-2 giri prima.`, "Se il grip resta asciutto, aspetta: fermarsi troppo presto distrugge le intermedie."]);
    }

    if((weatherAnalysis.weather === "rain_start" || weatherAnalysis.weather === "mixed") && weatherAnalysis.rainEndLap){
      advice.push(["Pista che si asciuga", `Dopo giro ${weatherAnalysis.rainEndLap}, passa a slick quando le intermedie scaldano troppo o i rivali su slick fanno settori verdi.`, "Se manca poco al traguardo, resta su bagnato se il pit non recupera il tempo perso."]);
    }

    if(weatherAnalysis.weather === "full_rain"){
      advice.push(["Pioggia per tutta la gara", `Resta su ${tag(wet)} e cerca grip fuori traiettoria solo in uscita lenta. Non montare slick finché la previsione resta bagnata.`, "Se la pioggia diventa forte, privilegia Full Wet rispetto alle Intermedie."]);
    }

    if(lastPit && lastPit > laps * 0.65){
      advice.push(["Finale di gara", `Dopo l'ultima sosta al giro ${lastPit}, usa DRS e scia per difesa/attacco e non surriscaldare la gomma nei primi due giri.`, lateRaceWindow + ": se sei sotto attacco, difendi interno e massimizza uscita curva prima del DRS."]);
    }
  }

  const items = advice.map(([event, action, trigger]) => `
    <div class="live-call">
      <div class="live-event">${event}</div>
      <div class="live-action">${action}</div>
      <div class="live-trigger">${trigger}</div>
    </div>
  `).join("");

  return `<div class="live-grid">${items}</div>`;
}

function setupHTML(s){
  const items = [
    ["Ala anteriore",      s.frontWing],
    ["Ala posteriore",     s.rearWing],
    ["Diff. ON",           s.diffOn + "%"],
    ["Diff. OFF",          s.diffOff + "%"],
    ["Freno motore",       s.engineBrake + "%"],
    ["Camber ant.",        s.frontCamber],
    ["Camber post.",       s.rearCamber],
    ["Toe ant.",           s.frontToe],
    ["Toe post.",          s.rearToe],
    ["Sosp. ant.",         s.frontSusp],
    ["Sosp. post.",        s.rearSusp],
    ["Barra ant.",         s.frontARB],
    ["Barra post.",        s.rearARB],
    ["Altezza ant.",       s.frontHeight],
    ["Altezza post.",      s.rearHeight],
    ["Press. freni",       s.brakePressure + "%"],
    ["Bilanciam. freni",   s.brakeBias + "%"],
    ["Press. gomme ant.",  s.frontPressure],
    ["Press. gomme post.", s.rearPressure]
  ];
  return '<div class="setup-grid">' + items.map(([l, v]) =>
    `<div class="setup-item"><div class="si-label">${l}</div><span class="si-value">${v}</span></div>`
  ).join('') + '</div>';
}

/* -----------------------------------------------
   MAIN CALCULATE
----------------------------------------------- */
function calculateAll(){
  const out = document.getElementById("output");

  const trackKey     = document.getElementById("track").value;
  const laps         = Number(document.getElementById("laps").value);
  const startPos     = Number(document.getElementById("startPos").value);
  const aiDifficulty = Number(document.getElementById("aiDifficulty").value);
  const driverStyle  = document.getElementById("driverStyle").value;
  const wear         = document.getElementById("wear").value;
  const strategyStyle= document.getElementById("strategyStyle").value;
  const sessionType  = document.getElementById("sessionType").value;

  // Validation
  const problems = [];
  const invalidIds = [];
  function addProblem(id, label){
    problems.push(label);
    invalidIds.push(id);
  }

  if(!trackKey || !tracks[trackKey]) addProblem("track", "Circuito");
  if(!Number.isInteger(laps) || laps <= 0) addProblem("laps", "Giri gara validi");
  if(!Number.isInteger(startPos) || startPos < 1 || startPos > 22) addProblem("startPos", "Posizione di partenza 1-22");
  if(!Number.isInteger(aiDifficulty) || aiDifficulty < 0 || aiDifficulty > 110) addProblem("aiDifficulty", "Difficoltà IA 0-110");
  if(!driverStyle) addProblem("driverStyle", "Stile di guida");
  if(!wear) addProblem("wear", "Usura gomme");
  if(!strategyStyle) addProblem("strategyStyle", "Approccio strategico");
  if(!sessionType) addProblem("sessionType", "Sessione");

  const weatherBlocks = getWeatherBlocks();
  const emptyWeather = weatherBlocks
    .map((w,i) => ({w, id:"w"+(i+1), label:"Riquadro "+(i+1)}))
    .filter(x => !x.w);

  for(const item of emptyWeather) addProblem(item.id, item.label);

  setInvalidFields(invalidIds);

  if(problems.length > 0){
    out.className = "has-result";
    out.innerHTML = `<div class="out-error"><strong>Controlla questi campi:</strong><br>${problems.join(" · ")}</div>`;
    return;
  }

  const track = tracks[trackKey];
  const weatherAnalysis = analyzeWeatherBlocks(weatherBlocks, laps);
  const weather  = weatherAnalysis.weather;
  const rainLap  = weatherAnalysis.rainLap;
  const ai = aiProfile(aiDifficulty);

  const plans = buildStrategies(track, laps, weatherAnalysis, wear, startPos, aiDifficulty, strategyStyle, sessionType, driverStyle);
  const main  = plans[0];

  const isQualy = isQualifyingSession(sessionType);
  const pitCall = main.pits.length
    ? main.pits.map(p => "Giro " + p).join(" / ")
    : (isQualy ? "Run diretto" : "Nessun pit programmato");
  const planTitle = isQualy ? "Piani Qualifica" : (sessionType === "sprint" ? "Piani Sprint" : "Piani Strategici");
  const stintTitle = isQualy ? "Piano Run - Piano principale" : "Analisi stint - Piano principale";
  const stintBody = isQualy ? runHTML(main, sessionType, weatherAnalysis) : stintHTML(main, track, wear, driverStyle, laps);
  const liveTitle = isQualy ? "Suggerimenti Live Sessione" : "Suggerimenti Live in Gara";
  const liveBody = liveAdviceHTML(track, laps, weatherAnalysis, main, sessionType, wear, startPos, strategyStyle);
  const stopHeader = isQualy ? "Run" : "Pit stop";
  const calculationNote = isQualy
    ? "Ogni riquadro meteo aiuta a scegliere il momento migliore per il giro push."
    : "I pit stop sono calcolati sui giri reali della sessione.";

  let radio = "Mantieni ritmo costante, evita sovrasterzo in uscita e conserva gomma per difesa/attacco dopo la sosta.";
  if(isQualy){
    radio = "Prepara bene l'out lap: gomme in temperatura e spazio libero prima del giro push.";
  } else if(sessionType === "sprint"){
    radio = "Sprint: niente pit obbligatorio. Proteggi la gomma nei primi giri e usa scia e DRS per sorpasso o difesa.";
  }
  if(trackKey === "china" && weather === "rain_end"){
    radio = "Cina con pioggia finale: non fare una sosta inutile per Soft. Medium - Hard - Intermedie è la chiamata più sicura.";
  }

  out.className = "has-result";
  out.innerHTML = `

    <!-- SUMMARY -->
    <div class="out-section">
      <div class="out-title"><span class="title-index">01</span> Strategia consigliata</div>
      <div class="summary-grid">
        <div class="summary-item"><div class="s-label">Circuito</div><div class="s-value">${track.name}</div></div>
        <div class="summary-item"><div class="s-label">Sessione</div><div class="s-value">${sessionLabel(sessionType)}</div></div>
        <div class="summary-item"><div class="s-label">Assistenze</div><div class="s-value good">Tutte attive</div></div>
        <div class="summary-item"><div class="s-label">IA Avversari</div><div class="s-value">${ai.name} (${aiDifficulty})</div></div>
        <div class="summary-item"><div class="s-label">Dati gomme</div><div class="s-value ${f1TelemetryCalibration ? "good" : "warn"}">${f1TelemetryCalibration ? "Telemetria F1 25" : "Modello stimato"}</div></div>
        <div class="summary-item"><div class="s-label">Finestra meteo</div><div class="s-value warn">${weatherWindowText(weatherAnalysis, laps)}</div></div>
        <div class="summary-item"><div class="s-label">Piano principale</div><div class="s-value">${main.tyres.map(tag).join('<span class="arrow-sep">→</span>')}</div></div>
        <div class="summary-item"><div class="s-label">${isQualy ? "Run" : "Pit stop"}</div><div class="s-value highlight">${pitCall}</div></div>
        <div class="summary-item summary-wide"><div class="s-label">Perché è la strategia migliore</div><div class="s-value strategy-reason">${main.reason || "Miglior compromesso stimato per la sessione."}</div></div>
      </div>
      <p style="font-size:12px;color:var(--muted);margin-top:8px">
        Ogni riquadro meteo vale circa <strong style="color:var(--text)">${Math.round(laps/8)}</strong> giri. ${calculationNote}
      </p>
    </div>

    <!-- FORECAST -->
    <div class="out-section">
      <div class="out-title"><span class="title-index">02</span> Riquadri meteo F1 25</div>
      ${forecastHTML(weatherBlocks, laps)}
    </div>

    <!-- STRATEGIES TABLE -->
    <div class="out-section">
      <div class="out-title"><span class="title-index">03</span> ${planTitle}</div>
      ${strategiesHTML(plans, stopHeader)}
    </div>

    <!-- STINT ANALYSIS -->
    <div class="out-section">
      <div class="out-title"><span class="title-index">04</span> ${stintTitle}</div>
      ${stintBody}
    </div>

    <!-- LIVE ADVICE -->
    <div class="out-section">
      <div class="out-title"><span class="title-index">05</span> ${liveTitle}</div>
      ${liveBody}
    </div>

    <!-- RADIO -->
    <div class="out-section">
      <div class="out-title"><span class="title-index">06</span> Chiamata radio</div>
      <div class="radio-box">${radio}</div>
    </div>

  `;
}

function initializeApp(){
  const trackSelect = document.getElementById("track");
  const calculateBtn = document.getElementById("calculateBtn");
  const telemetryBtn = document.getElementById("connectTelemetryBtn");

  if(trackSelect) trackSelect.addEventListener("change", loadTrackDefaults);
  if(calculateBtn) calculateBtn.addEventListener("click", calculateAll);
  if(telemetryBtn) telemetryBtn.addEventListener("click", connectF1Telemetry);
  if(telemetryBtn) connectF1Telemetry();
}

document.addEventListener("DOMContentLoaded", initializeApp);
