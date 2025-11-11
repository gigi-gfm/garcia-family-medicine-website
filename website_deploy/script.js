// ===== CAROUSEL FUNCTIONALITY =====

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let autoplayInterval;

// Show specific slide
function showSlide(n) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle wrap around
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    
    // Add active class to current slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Next slide
function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

// Previous slide
function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Go to specific slide
function goToSlide(n) {
    currentSlide = n;
    showSlide(n);
}

// Start auto-play
function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 8000); // Change slide every 8 seconds
}

// Stop auto-play
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start autoplay
    startAutoplay();
    
    // Get carousel buttons
    const leftButton = document.querySelector('.carousel-button-left');
    const rightButton = document.querySelector('.carousel-button-right');
    
    // Add click handlers that pause autoplay temporarily
    if (leftButton) {
        leftButton.addEventListener('click', () => {
            stopAutoplay();
            setTimeout(startAutoplay, 10000); // Resume after 10 seconds
        });
    }
    
    if (rightButton) {
        rightButton.addEventListener('click', () => {
            stopAutoplay();
            setTimeout(startAutoplay, 10000); // Resume after 10 seconds
        });
    }
    
    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            stopAutoplay();
            setTimeout(startAutoplay, 10000); // Resume after 10 seconds
        });
    });
    
    // Pause on hover (optional)
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
    }
});
