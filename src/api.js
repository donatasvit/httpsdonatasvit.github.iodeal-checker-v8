// =======================
// Deal Checker v8 – API MODULE
// Visi API kvietimai eina pro vieną adapterį
// =======================

// Universalus API adapteris
export async function apiRequest(url, method = "GET", data = null, token = null) {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" }
    };

    if (token) {
      options.headers["Authorization"] = "Bearer " + token;
    }

    if (data) {
      options.body = JSON.stringify(data);
    }

    const res = await fetch(url, options);
    if (!res.ok) throw new Error("API klaida: " + res.status);

    return await res.json();
  } catch (err) {
    return { error: err.message };
  }
}

// =======================
// Valiutų API (PRO ready)
// =======================

export async function fetchRates() {
  const url = "https://api.exchangerate.host/latest?base=EUR";
  return await apiRequest(url);
}

// =======================
// DEMO – transporto tarifas
// =======================

export async function getDemoTariff() {
  // čia tik placeholder demo API
  return await apiRequest("https://jsonplaceholder.typicode.com/posts/1");
}

// =======================
// Demo POST /saveDeal
// =======================

export async function sendDealToServer(deal) {
  return await apiRequest(
    "https://example.com/api/saveDeal",
    "POST",
    deal,
    "DEMO_TOKEN"
  );
}
