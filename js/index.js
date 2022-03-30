const humburger = document.querySelector('.humburger');
const menu = document.querySelector('.nav-menu');
humburger.addEventListener('click', () => {
    humburger.classList.toggle("active");
    menu.classList.toggle("active");
})