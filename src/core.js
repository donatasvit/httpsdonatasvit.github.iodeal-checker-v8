// Core calculation engine (skeleton)

import { parseNum, formatCBM } from "./utils.js";

export function calcCargoCBM(row) {
    const L = parseNum(row.L);
    const W = parseNum(row.W);
    const H = parseNum(row.H);
    return formatCBM(L, W, H);
}

export function calcTotals(cargoRows) {
    let totalKG = 0;
    let totalCBM = 0;

    cargoRows.forEach(r => {
        totalKG += parseNum(r.KG);
        totalCBM += calcCargoCBM(r);
    });

    return { totalKG, totalCBM };
}

export function calcBalance(revenue, costs) {
    return revenue - costs;
}

export function calcMargin(revenue, costs) {
    if (costs === 0) return 0;
    return ((revenue - costs) / costs) * 100;
}
