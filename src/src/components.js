// src/components.js
// Deal Checker v9 – UI komponentų saugykla

export const Components = {
  CargoSection() {
    return `
      <div class="card placeholder">
        <h2>Cargo Section</h2>
        <p>Čia ateis pilnas Cargo UI iš V7.</p>
      </div>
    `;
  },

  TransportSection() {
    return `
      <div class="card placeholder">
        <h2>Transport Section</h2>
        <p>Čia bus AUTO / ORAS / JŪRA / MULTIMODAL UI.</p>
      </div>
    `;
  },

  CostsSection() {
    return `
      <div class="card placeholder">
        <h2>Costs Section</h2>
        <p>Čia bus išlaidų lentelė ir multimodal.</p>
      </div>
    `;
  },

  RevenueSection() {
    return `
      <div class="card placeholder">
        <h2>Revenue / Profit Section</h2>
        <p>Čia bus marža, pajamos ir balansas.</p>
      </div>
    `;
  },

  ClientTextSection() {
    return `
      <div class="card placeholder">
        <h2>Client Text Section</h2>
        <p>Čia bus laiško generavimas klientui.</p>
      </div>
    `;
  },

  ArchiveSection() {
    return `
      <div class="card placeholder">
        <h2>Archive Section</h2>
        <p>Čia bus LocalStorage archyvas.</p>
      </div>
    `;
  },

  ApiDemoSection() {
    return `
      <div class="card placeholder">
        <h2>API Demo Section</h2>
        <p>Čia bus valiutų ir tarifų API.</p>
      </div>
    `;
  }
};

