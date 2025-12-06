// =======================
// Deal Checker v8 – CORE
// Visi skaičiavimai vienoje vietoje
// =======================

// Numerio parseris
export function parseNum(v) {
  const n = parseFloat(v);
  return isNaN(n) ? 0 : n;
}

// CBM formulė
export function calcCBM(l, w, h) {
  if (!l || !w || !h) return 0;
  return (l * w * h) / 1_000_000;
}

// Oro transporto logika
export function calcAirTotals(totalKG, totalCBM) {
  const volumetric = totalCBM * 167;
  const chargeable = Math.max(totalKG, volumetric);

  return {
    volumetric,
    chargeable,
    used: chargeable === totalKG ? "realus" : "volumetric"
  };
}

// Jūros logika
export function calcSeaTotals(mode, totalCBM, containerType) {
  if (mode === "LCL") {
    return {
      usedCBM: Math.max(totalCBM, 1),
      overLimit: false
    };
  }

  let limit = 33;
  if (containerType === "40DC") limit = 67;
  if (containerType === "40HC") limit = 76;

  return {
    usedCBM: totalCBM,
    overLimit: totalCBM > limit,
    limit
  };
}

// Marža ir pajamos
export function calcRevenue(costs, marginPercent, manualPrice) {
  const autoPrice = costs * (1 + marginPercent / 100);
  const revenue = manualPrice > 0 ? manualPrice : autoPrice;
  const balance = revenue - costs;
  const marginReal = costs > 0 ? (balance / costs) * 100 : 0;

  return {
    autoPrice,
    revenue,
    balance,
    marginReal
  };
}
