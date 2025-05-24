// Home page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Hero image effect
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage) {
        // Add a subtle animation when the page loads
        setTimeout(() => {
            heroImage.style.transform = 'translateY(-10px)';
            
            // Reset after animation
            setTimeout(() => {
                heroImage.style.transform = '';
            }, 500);
        }, 300);
    }
    
    // Benefit cards animation
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    if (benefitCards.length > 0) {
        // Function to check if an element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Initial check for elements in viewport
        benefitCards.forEach(card => {
            if (isInViewport(card)) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
        
        // Check on scroll
        window.addEventListener('scroll', function() {
            benefitCards.forEach(card => {
                if (isInViewport(card)) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        });
    }
    
    // Shop Now button effect
    const shopNowBtn = document.querySelector('.hero-content .btn-primary');
    
    if (shopNowBtn) {
        shopNowBtn.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });
        
        shopNowBtn.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    }
});