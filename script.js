const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.add('active');
    });
}

if (closeIcon) {
    closeIcon.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
}