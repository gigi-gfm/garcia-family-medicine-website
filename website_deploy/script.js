// ======================================
// GARCIA FAMILY MEDICINE - SCRIPT.JS
// ======================================

// ==================
// HERO CAROUSEL
// ==================
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.carousel-nav .dot');
let autoSlideTimer;

// Initialize carousel
function initCarousel() {
    if (slides.length > 0) {
        showSlide(0);
        startAutoSlide();
    }
}

// Show specific slide
function showSlide(index) {
    // Remove active classes
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Add active class to current slide
    currentSlideIndex = index;
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Next slide
function nextSlide() {
    showSlide(currentSlideIndex + 1);
    resetAutoSlide();
}

// Previous slide
function prevSlide() {
    showSlide(currentSlideIndex - 1);
    resetAutoSlide();
}

// Go to specific slide
function goToSlide(index) {
    showSlide(index);
    resetAutoSlide();
}

// Auto advance slides
function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
}

// Reset auto slide timer
function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
}

// ==================
// READ MORE TOGGLES
// ==================
function toggleReadMore(button) {
    const serviceContent = button.closest('.service-content');
    const fullContent = serviceContent.querySelector('.service-full');
    
    if (fullContent.classList.contains('hidden')) {
        fullContent.classList.remove('hidden');
        button.textContent = 'Read Less';
    } else {
        fullContent.classList.add('hidden');
        button.textContent = 'Read More';
    }
}

// ==================
// SMOOTH SCROLLING
// ==================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
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

// ==================
// INITIALIZE ON PAGE LOAD
// ==================
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    console.log('Garcia Family Medicine website loaded successfully!');
});

// ==================
// PAUSE CAROUSEL ON HOVER
// ==================
const heroCarousel = document.querySelector('.hero-carousel');
if (heroCarousel) {
    heroCarousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlideTimer);
    });
    
    heroCarousel.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
}
