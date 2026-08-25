const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links > a');


// =========================
// MOBILE MENU
// =========================

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


// Close mobile menu when a link is clicked
navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// =========================
// ACTIVE NAV LINK ON SCROLL
// =========================

const sections = document.querySelectorAll('#hero, #services, #intro, #footer');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            navItems.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(
                `.nav-links a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, {
    threshold: 0.4
});

sections.forEach(section => {
    observer.observe(section);
});