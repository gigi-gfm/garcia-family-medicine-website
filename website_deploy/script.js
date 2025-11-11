// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Wrap around if necessary
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    
    // Show the current slide
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(n) {
    showSlide(n);
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

// Bio toggle functions
function toggleDrTessBio() {
    const bioFull = document.getElementById('drTessBioFull');
    const btn = document.getElementById('drTessReadMoreBtn');
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
    const btn = document.getElementById('gigiReadMoreBtn');
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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});
