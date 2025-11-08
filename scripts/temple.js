// Menu Toggle
const mainNav = document.querySelector('.navigation');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
  mainNav.classList.toggle('show');
  menuButton.textContent = mainNav.classList.contains('show') ? '✖' : '☰';
});

// Footer Year and Last Modified
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;
