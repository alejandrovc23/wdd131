function pad(n) { return n < 10 ? '0' + n : n }

function formatDateTime(d) {
    try {
        const dd = pad(d.getDate());
        const mm = pad(d.getMonth() + 1);
        const yyyy = d.getFullYear();
        const hh = pad(d.getHours());
        const min = pad(d.getMinutes());
        const ss = pad(d.getSeconds());
        return `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`;
    } catch (e) {
        return '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // current year
    const y = new Date().getFullYear();
    const yearEl = document.getElementById('currentyear');
    if (yearEl) yearEl.textContent = y;

    // last modified
    const lastEl = document.getElementById('lastModValue');
    let lm = document.lastModified;
    let parsed = lm ? new Date(lm) : new Date();
    if (lastEl) lastEl.textContent = formatDateTime(parsed);
});
