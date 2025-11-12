// Carousel functionality with sliding animation
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let autoplayInterval;

// Initialize carousel
function initCarousel() {
    showSlide(0);
    startAutoplay();
}

// Show specific slide with sliding animation
function showSlide(n) {
    // Handle wrap around
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    
    // Update all slides positioning
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        
        if (index === currentSlide) {
            slide.classList.add('active');
        } else if (index < currentSlide) {
            slide.classList.add('prev');
        }
    });
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Next slide
function nextSlide() {
    showSlide(currentSlide + 1);
    resetAutoplay();
}

// Previous slide
function prevSlide() {
    showSlide(currentSlide - 1);
    resetAutoplay();
}

// Go to specific slide
function goToSlide(n) {
    showSlide(n);
    resetAutoplay();
}

// Autoplay functionality
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 6000); // Change slide every 6 seconds
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
}

// Read More toggle functionality
function toggleReadMore(button) {
    const serviceCard = button.closest('.service-card');
    const fullContent = serviceCard.querySelector('.service-full');
    
    if (fullContent.classList.contains('hidden')) {
        // Show full content
        fullContent.classList.remove('hidden');
        button.textContent = 'Read Less';
        
        // Smooth scroll to show content
        setTimeout(() => {
            fullContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        // Hide full content
        fullContent.classList.add('hidden');
        button.textContent = 'Read More';
        
        // Scroll back to top of card
        setTimeout(() => {
            serviceCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    
    // Pause autoplay when hovering over carousel
    const carousel = document.querySelector('.hero-carousel');
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
});

// Form submission handler (optional - customize as needed)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you soon.');
            contactForm.reset();
        });
    }
});
