const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const navbar = document.getElementById('nav-links');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if (closeIcon) {
    closeIcon.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}