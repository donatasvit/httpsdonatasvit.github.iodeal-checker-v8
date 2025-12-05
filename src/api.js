// src/api.js
// Universalus API adapteris Deal Checker v9

export async function apiRequest(url, method = "GET", data = null, token = null) {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" }
    };

    if (token) options.headers["Authorization"] = "Bearer " + token;
    if (data) options.body = JSON.stringify(data);

    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`API klaida: ${res.status} (${res.statusText})`);
    }

    return await res.json();
  } catch (err) {
    console.error("API ERROR:", err.message);
    return { error: err.message };
  }
}

// --- Valiutų kursų API ---
export async function fetchFxRates() {
  return apiRequest("https://api.exchangerate.host/latest?base=EUR");
}

// --- Demo transporto tarifas ---
export async function fetchDemoTariff() {
  return apiRequest("https://jsonplaceholder.typicode.com/posts/1");
}

// --- Demo deal POST (ateityje pakeisime realiu) ---
export async function postDealDemo(deal) {
  return apiRequest("https://example.com/api/saveDeal", "POST", deal);
}
