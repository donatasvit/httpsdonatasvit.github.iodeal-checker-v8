// Universal API adapter

export async function apiRequest(url, method = "GET", data = null, token = null) {
    try {
        const options = {
            method,
            headers: { "Content-Type": "application/json" }
        };

        if (token) options.headers["Authorization"] = "Bearer " + token;

        if (data) options.body = JSON.stringify(data);

        const res = await fetch(url, options);
        if (!res.ok) throw new Error("API klaida: " + res.status);

        return await res.json();
    } catch (err) {
        return { error: err.message };
    }
}

// Example endpoints
export async function fetchRates() {
    return apiRequest("https://api.exchangerate.host/latest?base=EUR");
}

export async function saveDealMock(deal) {
    return apiRequest("/saveDeal", "POST", deal);
}
