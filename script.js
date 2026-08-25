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

const sections = [
    {
        id: 'hero',
        link: '#hero'
    },
    {
        id: 'services',
        link: '#services'
    },
    {
        id: 'intro',
        link: '#intro'
    },
    {
        id: 'review',
        link: '#intro'
    },
    {
        id: 'newsletter',
        link: '#intro'
    },
    {
        id: 'footer',
        link: '#footer'
    }
];


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navItems.forEach(link => {
                link.classList.remove('active');
            });

            const section = sections.find(
                section => section.id === entry.target.id
            );


            if (section) {

                const activeLink = document.querySelector(
                    `.nav-links a[href="${section.link}"]`
                );

                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        }
    });

}, {
    threshold: 0.4
});



sections.forEach(section => {

    const element = document.getElementById(section.id);

    if (element) {
        observer.observe(element);
    }

});