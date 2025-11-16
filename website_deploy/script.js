// Garcia Family Medicine - Complete JavaScript

// ===== Carousel Functionality =====
let currentSlide = 0;
let autoPlayInterval;

function goToSlide(n) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Remove active class from current slide
    if (slides[currentSlide]) {
        slides[currentSlide].classList.remove('active');
    }
    if (dots[currentSlide]) {
        dots[currentSlide].classList.remove('active');
    }
    
    // Set new current slide
    currentSlide = (n + slides.length) % slides.length;
    
    // Add active class to new slide
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
    }
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 8000); // 8 seconds
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
    startAutoPlay();
    
    // Pause on hover
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }
});

// ===== Read More Toggle =====
function toggleReadMore(button) {
    const serviceBox = button.closest('.service-box') || button.closest('.service-card');
    if (!serviceBox) return;
    
    const shortContent = serviceBox.querySelector('.service-short');
    const fullContent = serviceBox.querySelector('.service-full');
    
    if (fullContent && fullContent.classList.contains('hidden')) {
        fullContent.classList.remove('hidden');
        button.textContent = 'Read Less';
    } else if (fullContent) {
        fullContent.classList.add('hidden');
        button.textContent = 'Read More';
    }
}

function toggleTeamBio(button) {
    const teamCard = button.closest('.team-card');
    if (!teamCard) return;
    
    const shortBio = teamCard.querySelector('.team-bio-short');
    const fullBio = teamCard.querySelector('.team-bio-full');
    
    if (fullBio && fullBio.classList.contains('hidden')) {
        fullBio.classList.remove('hidden');
        if (shortBio) shortBio.classList.add('hidden');
        button.textContent = 'Read Less';
    } else if (fullBio) {
        fullBio.classList.add('hidden');
        if (shortBio) shortBio.classList.remove('hidden');
        button.textContent = 'Read More';
    }
}

// ===== Back to Top Button =====
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide back to top button on scroll
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
});

// ===== Smooth Scrolling for Navigation =====
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerOffset = 100;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== Contact Form Handling =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // You would typically send this to a server
            // For now, just show a confirmation
            alert('Thank you for your interest! We will contact you soon.');
            this.reset();
        });
    }
});

// ===== Exit Intent Popup =====
let exitPopupShown = false;

function showExitPopup() {
    const popup = document.getElementById('exitPopup');
    if (popup && !exitPopupShown) {
        popup.classList.remove('hidden');
        exitPopupShown = true;
    }
}

function closeExitPopup() {
    const popup = document.getElementById('exitPopup');
    if (popup) {
        popup.classList.add('hidden');
    }
}

// Detect exit intent
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mouseout', function(e) {
        // If mouse leaves through top of viewport
        if (e.clientY < 0 && !exitPopupShown) {
            showExitPopup();
        }
    });
    
    // Close popup when clicking overlay
    const overlay = document.querySelector('.exit-popup-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeExitPopup);
    }
});

// ===== Language Toggle (if needed) =====
function toggleLanguage() {
    // Language toggle functionality
    const langButtons = document.querySelectorAll('.lang-en, .lang-es');
    langButtons.forEach(btn => {
        btn.classList.toggle('hidden');
    });
    
    // You would implement full language switching here
    console.log('Language toggle clicked');
}

// ===== Mobile Menu Toggle (if needed) =====
function toggleMobileMenu() {
    const nav = document.querySelector('header nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}

// ===== Initialize all functionality =====
console.log('Garcia Family Medicine website loaded successfully!');
