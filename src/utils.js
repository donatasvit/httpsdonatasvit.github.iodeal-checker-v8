// ===============================
// utils.js — bendri pagalbiniai metodai
// V7 → V9 modernizuotas modulis
// ===============================

export function parseNum(value) {
    if (value === undefined || value === null) return 0;
    let v = value.toString().replace(",", ".").replace(/[^0-9.-]/g, "");
    return v === "" || isNaN(parseFloat(v)) ? 0 : parseFloat(v);
}

export function round(num, decimals = 2) {
    const factor = Math.pow(10, decimals);
    return Math.round(parseNum(num) * factor) / factor;
}

export function formatMoney(num, suffix = "€") {
    let n = round(num, 2).toLocaleString("lt-LT", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return `${n} ${suffix}`;
}

export function formatCBM(num) {
    return round(num, 3).toLocaleString("lt-LT", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    });
}

export function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function getToday() {
    return new Date().toISOString().split("T")[0];
}

export function randomId(prefix = "id") {
    return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
}

export function isEmpty(v) {
    return v === null || v === undefined || v === "" || v.toString().trim() === "";
}

export function escapeHTML(str) {
    if (!str) return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function percent(value, pct) {
    return round(parseNum(value) * (parseNum(pct) / 100));
}

export function clamp(num, min, max) {
    return Math.max(min, Math.min(max, num));
}

export const converters = {
    kgToLb: (kg) => kg * 2.20462,
    lbToKg: (lb) => lb / 2.20462,
    m3ToFt3: (m3) => m3 * 35.3147,
    ft3ToM3: (ft3) => ft3 / 35.3147
};
