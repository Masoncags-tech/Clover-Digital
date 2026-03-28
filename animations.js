document.addEventListener('DOMContentLoaded', () => {
    // Scroll-triggered fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    });

    // Stagger children for grid layouts
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const children = entry.target.querySelectorAll('.animate-fade-in');
                children.forEach((child, i) => {
                    child.style.animationDelay = `${i * 0.08}s`;
                    child.classList.add('visible');
                });
                staggerObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.02,
        rootMargin: '0px 0px 50px 0px'
    });

    const grids = ['.services-grid', '.why-grid', '.approach-grid', '.faq-grid', '.industries-grid', '.testimonials-grid'];
    const gridSelectors = grids.join(', ');

    // Observe individual elements (not inside grids)
    document.querySelectorAll('.animate-fade-in').forEach(el => {
        let inGrid = false;
        grids.forEach(g => {
            if (el.closest(g)) inGrid = true;
        });
        if (!inGrid) {
            observer.observe(el);
        }
    });

    // Observe grid parents for staggered animations
    document.querySelectorAll(gridSelectors).forEach(grid => {
        staggerObserver.observe(grid);
    });

    // Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 1px 12px rgba(0,0,0,0.06)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }, { passive: true });

    // Fallback: if elements haven't animated after 2s, force them visible
    setTimeout(() => {
        document.querySelectorAll('.animate-fade-in:not(.visible)').forEach(el => {
            el.classList.add('visible');
        });
    }, 2000);
});
