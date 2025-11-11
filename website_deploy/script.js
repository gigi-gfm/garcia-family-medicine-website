// ===== CAROUSEL FUNCTIONALITY =====
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let autoPlayInterval;

// Show specific slide
function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Wrap around if needed
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Add active class to current slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Next slide
function nextSlide() {
    showSlide(currentSlide + 1);
    resetAutoPlay();
}

// Previous slide
function prevSlide() {
    showSlide(currentSlide - 1);
    resetAutoPlay();
}

// Go to specific slide
function goToSlide(index) {
    showSlide(index);
    resetAutoPlay();
}

// Auto-play functionality
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
    startAutoPlay();
});

// Pause autoplay when user hovers over carousel
const carousel = document.querySelector('.hero-carousel');
if (carousel) {
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
}

// ===== TEAM BIO TOGGLE FUNCTIONALITY =====
function toggleDrTessBio() {
    const bioFull = document.getElementById('drTessBioFull');
    const btnText = document.getElementById('drTessReadMoreText');
    const btnIcon = document.getElementById('drTessReadMoreIcon');
    
    if (bioFull.style.display === 'none' || bioFull.style.display === '') {
        bioFull.style.display = 'block';
        btnText.textContent = 'Read Less';
        btnIcon.style.transform = 'rotate(180deg)';
    } else {
        bioFull.style.display = 'none';
        btnText.textContent = 'Read More';
        btnIcon.style.transform = 'rotate(0deg)';
    }
}

function toggleGigiBio() {
    const bioFull = document.getElementById('gigiBioFull');
    const btnText = document.getElementById('gigiReadMoreText');
    const btnIcon = document.getElementById('gigiReadMoreIcon');
    
    if (bioFull.style.display === 'none' || bioFull.style.display === '') {
        bioFull.style.display = 'block';
        btnText.textContent = 'Read Less';
        btnIcon.style.transform = 'rotate(180deg)';
    } else {
        bioFull.style.display = 'none';
        btnText.textContent = 'Read More';
        btnIcon.style.transform = 'rotate(0deg)';
    }
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty hash or just #
        if (href === '#' || href === '') {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== FORM SUBMISSION HANDLING =====
const contactForm = document.querySelector('form[name="contact"]');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Netlify will handle the actual submission
        // This is just for any additional client-side handling if needed
        console.log('Form submitted');
    });
}

// ===== HEADER SCROLL EFFECT =====
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    }
    
    lastScroll = currentScroll;
});

// ===== LAZY LOADING FOR IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}
