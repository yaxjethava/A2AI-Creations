// Products page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Buy Now button handler
 const buttons = document.querySelectorAll(".buy-now-btn");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const product = button.getAttribute("data-product");
        const price = button.getAttribute("data-price");

        const whatsappNumber = "917623853955";

        const message = `Hello! I am interested in buying the following product:\n\n*Product:* ${product}\n*Price:* ${price}\n\nPlease provide more details.`;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappURL, "_blank");
      });
    });
    // Product image hover effect
    const productImage = document.querySelector('.product-image img');
    
    if (productImage) {
        productImage.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        productImage.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

);