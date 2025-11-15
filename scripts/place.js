// place.js — handles footer dates and windchill calculation

function calculateWindChill(tempC, windKph) {
    // Canadian wind chill formula (metric) — single-line return
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKph, 0.16) + 0.3965 * tempC * Math.pow(windKph, 0.16);
}

document.addEventListener('DOMContentLoaded', () => {
    // Populate current year
    const yearEl = document.getElementById('currentyear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Populate last modified
    const lastEl = document.getElementById('lastModValue');
    if (lastEl) lastEl.textContent = document.lastModified;

    // Static weather inputs (assignment requirement)
    const temp = Number(document.getElementById('temp')?.textContent || 10);
    const wind = Number(document.getElementById('wind')?.textContent || 5);

    const windchillEl = document.getElementById('windchill');

    // Viable wind chill calculation: temp <= 10°C and wind > 4.8 km/h
    if (temp <= 10 && wind > 4.8) {
        const wc = calculateWindChill(temp, wind);
        if (windchillEl) windchillEl.textContent = `${wc.toFixed(1)} °C`;
    } else {
        if (windchillEl) windchillEl.textContent = 'N/A';
    }
});
