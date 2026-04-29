document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const summary = item.querySelector('summary');

        summary.addEventListener('click', (e) => {
            // If it's already animating closed, prevent further clicks to avoid glitch
            if (item.classList.contains('is-closing')) {
                e.preventDefault();
                return;
            }

            // If it's open, intercept the click to animate closing
            if (item.hasAttribute('open')) {
                e.preventDefault();
                item.classList.add('is-closing');

                // Set timeout to match animation duration (0.4s)
                setTimeout(() => {
                    item.removeAttribute('open');
                    item.classList.remove('is-closing');
                }, 400);
            }
        });
    });

    // Mobile Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Floating Buy Button
    const floatingBtn = document.getElementById('floatingBuyBtn');
    const heroSection = document.getElementById('hero');

    if (floatingBtn && heroSection) {
        window.addEventListener('scroll', () => {
            // Show only on mobile screens (max-width: 768px for the button display rule)
            if (window.innerWidth <= 768) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;

                // Show button when hero section is out of viewport
                if (heroBottom < 0) {
                    floatingBtn.classList.add('show');
                } else {
                    floatingBtn.classList.remove('show');
                }
            } else {
                floatingBtn.classList.remove('show');
            }
        });
    }
});
