// filtered-temples.js
// Array of temple objects (sample + 3 additional temples)
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Additional temples requested by the assignment
    {
        templeName: "Monterrey Mexico",
        location: "Monterrey, Mexico",
        dedicated: "2002, April, 28",
        area: 16498,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/monterrey-mexico-temple/monterrey-mexico-temple-1068-main.jpg"
    },
    {
        templeName: "Miraflores Guatemala City",
        location: "Miraflores, Guatemala City, Guatemala",
        dedicated: "2022, December, 3",
        area: 30000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/miraflores-guatemala-city-guatemala-temple/miraflores-guatemala-city-guatemala-temple-22102-main.jpg"
    },
    {
        templeName: "Orlando Florida",
        location: "Orlando, Florida, United States",
        dedicated: "1994, October, 9",
        area: 70000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/orlando-florida-temple/orlando-florida-temple-51938-main.jpg"
    },
    {
        templeName: "Barranquilla Colombia",
        location: "Barranquilla Colombia",
        dedicated: "2018, December, 9",
        area: 25349,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
    },
    {
        templeName: "Trujillo Peru",
        location: "Trujillo, Peru",
        dedicated: "2015, June, 21",
        area: 28200,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-3717-main.jpg"
    }
    

];

// Utility: parse year from dedicated string like "2005, August, 7"
function yearFromDedicated(dedicated) {
    const y = parseInt(dedicated.split(',')[0], 10);
    return isNaN(y) ? 0 : y;
}

// Render temples into #gallery
function renderTemples(list) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    list.forEach(t => {
        const fig = document.createElement('figure');
        const img = document.createElement('img');
        img.src = t.imageUrl;
        img.alt = t.templeName;
        img.loading = 'lazy';
        img.width = 400;
        img.height = 250;

        const cap = document.createElement('figcaption');
        cap.textContent = t.templeName;

        const meta = document.createElement('div');
        meta.className = 'meta';
        meta.innerHTML = `<p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Size:</strong> ${t.area.toLocaleString()} sq ft</p>`;

        fig.appendChild(img);
        fig.appendChild(cap);
        fig.appendChild(meta);
        gallery.appendChild(fig);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // populate year and last modified
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    const lastEl = document.getElementById('lastModified');
    if (lastEl) lastEl.textContent = document.lastModified;

    // initial render (all)
    renderTemples(temples);

    // filter handlers
    document.querySelectorAll('.navigation a').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = a.dataset.filter || 'all';
            document.querySelectorAll('.navigation a').forEach(x => x.classList.remove('active'));
            a.classList.add('active');
            let result = temples.slice();
            if (filter === 'old') {
                result = temples.filter(t => yearFromDedicated(t.dedicated) < 1900);
            } else if (filter === 'new') {
                result = temples.filter(t => yearFromDedicated(t.dedicated) > 2000);
            } else if (filter === 'large') {
                result = temples.filter(t => t.area > 90000);
            } else if (filter === 'small') {
                result = temples.filter(t => t.area < 10000);
            }
            renderTemples(result);
        });
    });
});
