// src/utils.js
// Bendros pagalbinės funkcijos

export function parseNum(v) {
  const n = parseFloat(v);
  return isNaN(n) ? 0 : n;
}

export function formatMoney(value, decimals = 2) {
  const num = Number(value);
  if (isNaN(num)) return "0.00";
  return num.toFixed(decimals);
}

export function formatCBM(value) {
  const num = Number(value);
  if (isNaN(num)) return "0.000";
  return num.toFixed(3);
}

export function generateId(prefix = "D") {
  return prefix + Date.now();
}

export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
