// Hero Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let autoSlideInterval;

// Show specific slide
function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
}

// Next slide
function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
    resetAutoSlide();
}

// Previous slide
function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
    resetAutoSlide();
}

// Go to specific slide
function goToSlide(index) {
    showSlide(index);
    resetAutoSlide();
}

// Auto-advance slides every 5 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

// Reset auto-slide timer when user interacts
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
    startAutoSlide();
});

// Toggle Dr. Tess Bio Read More
function toggleDrTessBio() {
    const bioFull = document.getElementById('drTessBioFull');
    const btn = document.getElementById('drTessReadMoreBtn');
    const btnText = document.getElementById('drTessReadMoreText');
    const btnIcon = document.getElementById('drTessReadMoreIcon');
    
    if (bioFull.style.display === 'none' || bioFull.style.display === '') {
        // Show full bio
        bioFull.style.display = 'block';
        btnText.textContent = 'Read Less';
        btn.classList.add('expanded');
        
        // Smooth scroll to keep content in view
        setTimeout(() => {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        // Hide full bio
        bioFull.style.display = 'none';
        btnText.textContent = 'Read More';
        btn.classList.remove('expanded');
    }
}
