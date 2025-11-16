// Garcia Family Medicine - Complete JavaScript

// ========================================
// HERO CAROUSEL
// ========================================
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.carousel-nav .dot');
const totalSlides = slides.length;

function showSlide(n) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle wrap around
    currentSlide = (n + totalSlides) % totalSlides;
    
    // Add active class to current slide and dot
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
    }
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
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
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// ========================================
// READ MORE / LESS TOGGLES
// ========================================
function toggleReadMore(button) {
    const serviceContent = button.closest('.service-content');
    const shortContent = serviceContent.querySelector('.service-short');
    const fullContent = serviceContent.querySelector('.service-full');
    
    if (fullContent.classList.contains('hidden')) {
        // Show full content
        shortContent.classList.add('hidden');
        fullContent.classList.remove('hidden');
        button.textContent = 'Read Less';
    } else {
        // Show short content
        fullContent.classList.add('hidden');
        shortContent.classList.remove('hidden');
        button.textContent = 'Read More';
        
        // Scroll back to the service title
        serviceContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function toggleTeamBio(button) {
    const teamInfo = button.closest('.team-info');
    const shortBio = teamInfo.querySelector('.team-bio-short');
    const fullBio = teamInfo.querySelector('.team-bio-full');
    
    if (fullBio.classList.contains('hidden')) {
        // Show full bio
        shortBio.classList.add('hidden');
        fullBio.classList.remove('hidden');
        button.textContent = 'Read Less';
    } else {
        // Show short bio
        fullBio.classList.add('hidden');
        shortBio.classList.remove('hidden');
        button.textContent = 'Read More';
        
        // Scroll back to the team member
        teamInfo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTopButton = document.getElementById('backToTop');

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        if (backToTopButton) {
            backToTopButton.style.display = 'flex';
        }
    } else {
        if (backToTopButton) {
            backToTopButton.style.display = 'none';
        }
    }
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// EXIT INTENT POPUP
// ========================================
const exitPopup = document.getElementById('exitPopup');
let exitIntentShown = false;

// Detect mouse leaving viewport (exit intent)
document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !exitIntentShown) {
        showExitPopup();
    }
});

function showExitPopup() {
    if (exitPopup && !exitIntentShown) {
        exitPopup.classList.remove('hidden');
        exitIntentShown = true;
        
        // Store in sessionStorage so it doesn't show again this session
        sessionStorage.setItem('exitPopupShown', 'true');
    }
}

function closeExitPopup() {
    if (exitPopup) {
        exitPopup.classList.add('hidden');
    }
}

// Check if popup was already shown this session
if (sessionStorage.getItem('exitPopupShown')) {
    exitIntentShown = true;
}

// ========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for # links (like close buttons)
        if (href === '#') {
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

// ========================================
// CONTACT FORM HANDLING
// ========================================
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // Here you would normally send the data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! We will contact you soon.');
        
        // Reset the form
        this.reset();
    });
}

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Make sure first slide is active
    if (slides.length > 0) {
        showSlide(0);
    }
    
    // Log that scripts loaded successfully
    console.log('Garcia Family Medicine - Website initialized successfully');
});
