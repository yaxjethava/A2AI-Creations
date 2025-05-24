// Contact page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // Contact item hover effects
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.color = 'var(--primary-dark)';
            }
        });
        
        item.addEventListener('mouseout', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = '';
                icon.style.color = '';
            }
        });
    });
    
    // WhatsApp contact button pulse effect
    const whatsappContact = document.querySelector('.whatsapp-contact');
    
    if (whatsappContact) {
        // Add pulse animation class
        whatsappContact.classList.add('pulse-animation');
        
        // Define the animation
        const style = document.createElement('style');
        style.textContent = `
            .pulse-animation {
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0% {
                    box-shadow: 0 0 0 0 rgba(74, 134, 232, 0.4);
                }
                70% {
                    box-shadow: 0 0 0 10px rgba(74, 134, 232, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(74, 134, 232, 0);
                }
            }
        `;
        document.head.appendChild(style);
    }
});