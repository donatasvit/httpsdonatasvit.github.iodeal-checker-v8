// src/ui.js
// Deal Checker v9 – UI inicializacija

export function initUI() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <header>
      <h1>Deal Checker v9</h1>
      <small>Nauja modulinė architektūra • PRO Beta</small>
    </header>

    <main>
      <div class="card placeholder">
        <p><strong>UI skeleto režimas.</strong></p>
        <p>Čia atsiras visas tavo V7 UI, padalintas į komponentus.</p>
        <p>Toliau pjausime ir perkelsime realų interface.</p>
      </div>
    </main>
  `;
}
