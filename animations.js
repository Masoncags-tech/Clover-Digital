// Scroll animations using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add animation class when element is in view
            if (entry.target.classList.contains('animate-fade-up')) {
                entry.target.style.animation = 'fadeUp 0.8s ease-out 0.2s forwards';
            } else if (entry.target.classList.contains('animate-fade-up-delay')) {
                entry.target.style.animation = 'fadeUp 0.8s ease-out 0.4s forwards';
            } else if (entry.target.classList.contains('animate-fade-up-delay-2')) {
                entry.target.style.animation = 'fadeUp 0.8s ease-out 0.6s forwards';
            } else if (entry.target.classList.contains('animate-fade-in')) {
                entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
            }
            
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.animate-fade-up, .animate-fade-up-delay, .animate-fade-up-delay-2, .animate-fade-in'
    );
    
    animatedElements.forEach((element) => {
        observer.observe(element);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Navbar sticky effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});