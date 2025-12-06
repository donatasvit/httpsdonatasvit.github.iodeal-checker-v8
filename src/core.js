// src/core.js
// Deal Checker v9 – visų skaičiavimų variklis

import { parseNum, formatCBM, formatMoney } from "./utils.js";

// ======================= CARGO =======================

export function calcCargoTotals(cargoRows) {
  let totalKG = 0;
  let totalCBM = 0;

  cargoRows.forEach(row => {
    const kg = parseNum(row.kg);
    const l = parseNum(row.l);
    const w = parseNum(row.w);
    const h = parseNum(row.h);
    let cbm = parseNum(row.cbm);

    // Jei yra matmenys → automatinis CBM
    if (l > 0 && w > 0 && h > 0) {
      cbm = (l * w * h) / 1_000_000;
    }

    totalKG += kg;
    totalCBM += cbm;
  });

  return {
    totalKG: Number(totalKG.toFixed(2)),
    totalCBM: Number(totalCBM.toFixed(3))
  };
}

// ======================= AIR =======================

export function calcAir(cargoTotals) {
  const real = cargoTotals.totalKG;
  const cbm = cargoTotals.totalCBM;

  const volumetric = cbm * 167;
  const chargeable = Math.max(real, volumetric);

  return {
    real,
    cbm,
    volumetric: Number(volumetric.toFixed(2)),
    chargeable: Number(chargeable.toFixed(2))
  };
}

// ======================= SEA =======================

export function calcSeaLCL(totalCBM) {
  const used = Math.max(totalCBM, 1);
  return {
    mode: "LCL",
    usedCBM: Number(used.toFixed(3)),
    warning: false
  };
}

export function calcSeaFCL(totalCBM, container) {
  const limits = {
    "20DC": 33,
    "40DC": 67,
    "40HC": 76
  };

  const max = limits[container] ?? 33;

  return {
    mode: "FCL",
    totalCBM: Number(totalCBM.toFixed(3)),
    maxCBM: max,
    warning: totalCBM > max
  };
}

// ======================= MULTIMODAL / COSTS =======================

export function calcMultimodal(segments) {
  let sum = 0;
  segments.forEach(s => {
    sum += parseNum(s.price);
  });
  return Number(sum.toFixed(2));
}

export function calcCosts(costs) {
  let total = 0;
  costs.forEach(c => {
    total += parseNum(c.amount);
  });
  return Number(total.toFixed(2));
}

// ======================= PROFIT =======================

export function calcProfit(totalCosts, marginPercent, manualPrice = null) {
  const suggested = totalCosts * (1 + marginPercent / 100);

  const revenue = manualPrice && manualPrice > 0
    ? manualPrice
    : suggested;

  const balance = revenue - totalCosts;

  const actualMargin =
    totalCosts > 0 ? (balance / totalCosts) * 100 : 0;

  return {
    suggested: Number(suggested.toFixed(2)),
    revenue: Number(revenue.toFixed(2)),
    balance: Number(balance.toFixed(2)),
    actualMargin: Number(actualMargin.toFixed(2))
  };
}

// ======================= DEAL BUILDER =======================

export function buildDeal({ cargo, multimodal, costs, transport, profit, currency, route, notes }) {
  return {
    id: "D" + Date.now(),
    timestamp: new Date().toISOString(),
    cargo,
    multimodal,
    costs,
    transport,
    profit,
    currency,
    route,
    notes
  };
}
