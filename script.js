document.addEventListener('DOMContentLoaded', () => {

    /* ==================== CHANGE HEADER BACKGROUND ON SCROLL ==================== */
    const header = document.getElementById('header');
    function scrollHeader() {
        // When the scroll is greater than 50 pixels, add the .scroll-header class
        if (this.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }
    window.addEventListener('scroll', scrollHeader);


    /* ==================== MOBILE NAV TOGGLE ==================== */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');

    const toggleMenu = () => {
        navMenu.classList.toggle('show-menu');
        navToggle.classList.toggle('open');
    };

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show-menu')) {
                toggleMenu();
            }
        });
    });

    /* ==================== ACTIVE LINK ON SCROLL ==================== */
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = document.getElementById('header').offsetHeight;

    const observerOptions = {
        root: null,
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0.5
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${id}"]`);

            if (entry.isIntersecting) {
                document.querySelectorAll('.nav__link').forEach(link => {
                    link.classList.remove('active-link');
                });
                if (navLink) {
                    navLink.classList.add('active-link');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    /* ==================== DYNAMIC FLOATING AVATAR ==================== */
    const floatingAvatar = document.getElementById('floating-avatar');
    const heroSection = document.getElementById('home');

    const avatarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                floatingAvatar.classList.add('visible');
            } else {
                floatingAvatar.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });

    if (heroSection) {
        avatarObserver.observe(heroSection);
    }
});
