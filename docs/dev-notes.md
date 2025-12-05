# Deal Checker v8 – Developer Notes

## Architektūros principai

### 1. Core (src/core.js)
- Visi skaičiavimai
- Be DOM
- Lengvai testuojama

### 2. UI (src/ui.js)
- UI įvykiai
- DOM valdymas
- Kvietimai į core ir api

### 3. API (src/api.js)
- Universalus API adapteris
- Valiutų kursų kvietimas
- Pavyzdiniai POST endpointai

### 4. Utils (src/utils.js)
- parseNum
- formatMoney
- formatCBM

## Projekto struktūra

