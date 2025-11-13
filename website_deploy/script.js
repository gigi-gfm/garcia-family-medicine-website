// ===================================
// CAROUSEL FUNCTIONALITY
// ===================================
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let autoPlayInterval;

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Mark previous slide
    if (currentSlide !== index) {
        slides[currentSlide].classList.add('prev');
    }
    
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
    resetAutoPlay();
}

function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
    resetAutoPlay();
}

function goToSlide(index) {
    showSlide(index);
    resetAutoPlay();
}

function autoPlay() {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlay();
}

// Start auto-play when page loads
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
    autoPlay();
});

// ===================================
// SERVICE READ MORE TOGGLE
// ===================================
function toggleReadMore(button) {
    const serviceBox = button.closest('.service-box');
    const shortContent = serviceBox.querySelector('.service-short');
    const fullContent = serviceBox.querySelector('.service-full');
    
    if (fullContent.classList.contains('hidden')) {
        fullContent.classList.remove('hidden');
        if (shortContent) {
            shortContent.style.display = 'none';
        }
        button.textContent = 'Read Less';
        
        // Smooth scroll to the service box
        serviceBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        fullContent.classList.add('hidden');
        if (shortContent) {
            shortContent.style.display = 'block';
        }
        button.textContent = 'Read More';
        
        // Smooth scroll back to top of service box
        serviceBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// ===================================
// TEAM BIO READ MORE TOGGLE
// ===================================
function toggleTeamBio(button) {
    const teamCard = button.closest('.team-card');
    const shortBio = teamCard.querySelector('.team-bio-short');
    const fullBio = teamCard.querySelector('.team-bio-full');
    
    if (fullBio.classList.contains('hidden')) {
        fullBio.classList.remove('hidden');
        button.textContent = 'Read Less';
        
        // Smooth scroll to the team card
        teamCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        fullBio.classList.add('hidden');
        button.textContent = 'Read More';
        
        // Smooth scroll back to top of team card
        teamCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// ===================================
// SMOOTH SCROLLING FOR NAVIGATION
// ===================================
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
