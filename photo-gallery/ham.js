// console.log(2 + 2);
const lines = document.querySelectorAll('.line');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const checkbox = document.querySelector('input');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const photoGrid = document.querySelector('.photo-grid');
const body = document.querySelector('body');


let darkMode = localStorage.getItem('darkMode');
let ham = true;
if (darkMode === 'enabled') {
    checkbox.checked = true;
    menu.classList.toggle('dark');
    lines.forEach(line => {
        line.classList.toggle('line-dark');
    });
    photoGrid.classList.toggle('grid-dark');
    footer.classList.toggle('dark');
    nav.classList.toggle('dark');
    body.classList.toggle('dark');
}
if (screen.width > 1030)
    menu.classList.remove('dark');

hamburger.addEventListener('click', () => {
    if (ham === true) {
        lines.forEach(line => {
            line.style.width = '28.28px';
        });
        ham = false;
    } else {
        lines.forEach(line => {
            line.style.width = '20px';
        });
        ham = true;
    }
    lines[0].classList.toggle('down');
    lines[1].classList.toggle('none');
    lines[2].classList.toggle('up');
    menu.classList.toggle('menu-open');
});

checkbox.addEventListener('click', () => {
    if (screen.width < 1030)
        menu.classList.toggle('dark');
    else {
        menu.classList.remove('dark');
        menu.style.background = 'transparent';
    }
    lines.forEach(line => {
        line.classList.toggle('line-dark');
    });
    photoGrid.classList.toggle('grid-dark');
    footer.classList.toggle('dark');
    nav.classList.toggle('dark');
    body.classList.toggle('dark');
    if (body.classList.length > 0)
        localStorage.setItem('darkMode', 'enabled');
    else
        localStorage.setItem('darkMode', null);
});