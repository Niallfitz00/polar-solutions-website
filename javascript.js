document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic CTA button effects
    const ctaButton = document.querySelector('.cta-btn');
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transform = 'scale(1.1)';
        ctaButton.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
    });
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.transform = 'scale(1)';
        ctaButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
});
