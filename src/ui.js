// =======================
// Deal Checker v8 – UI MODULE
// Visi DOM event'ai ir sąsaja su core + api
// =======================

import {
  parseNum,
  calcCBM,
  calcAirTotals,
  calcSeaTotals,
  calcRevenue
} from "./core.js";

import {
  fetchRates,
  getDemoTariff,
  sendDealToServer
} from "./api.js";

// =======================================
// Būsimas v7 UI perkėlimas eis čia
// =======================================

// Mini logger
function log(msg) {
  console.log("%c[UI]", "color:#2563eb;font-weight:600;", msg);
}

// Inicializacija
export function initUI() {
  log("UI inicializuotas (skeleton mode)");

  // Čia bus:
  // - cargo row rendering
  // - transporto skaičiavimai
  // - costs
  // - multimodal
  // - archive loader
  // - margin logic
  // - client text generator
  // - API jungimai

  // Laikinas test mygtukas (kol nėra tikro UI):
  const testBtn = document.createElement("button");
  testBtn.textContent = "TEST: Gauti valiutas";
  testBtn.style.padding = "10px";
  testBtn.style.marginTop = "20px";
  testBtn.style.fontSize = "16px";

  testBtn.onclick = async () => {
    log("Kviečiam valiutų API…");
    const res = await fetchRates();
    console.log("Gauti kursai:", res);
  };

  document.body.appendChild(testBtn);
}
