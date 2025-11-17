// Garcia Family Medicine - Complete JavaScript Functionality

// ============================================================================
// CAROUSEL FUNCTIONALITY
// ============================================================================

let currentSlide = 0;
let autoSlideInterval;

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    initBackToTop();
    initSmoothScroll();
    initExitPopup();
});

function initCarousel() {
    showSlide(currentSlide);
    startAutoSlide();
}

function showSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Wrap around
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
}

function nextSlide() {
    stopAutoSlide();
    showSlide(currentSlide + 1);
    startAutoSlide();
}

function prevSlide() {
    stopAutoSlide();
    showSlide(currentSlide - 1);
    startAutoSlide();
}

function goToSlide(index) {
    stopAutoSlide();
    showSlide(index);
    startAutoSlide();
}

function startAutoSlide() {
    stopAutoSlide(); // Clear any existing interval
    autoSlideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 8000); // 8 seconds
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
}

// ============================================================================
// READ MORE / READ LESS TOGGLE (For Services)
// ============================================================================

function toggleReadMore(button) {
    const serviceBox = button.closest('.service-box');
    const fullContent = serviceBox.querySelector('.service-full');
    
    if (fullContent) {
        if (fullContent.classList.contains('hidden')) {
            // Show full content
            fullContent.classList.remove('hidden');
            button.textContent = 'Read Less';
        } else {
            // Hide full content
            fullContent.classList.add('hidden');
            button.textContent = 'Read More';
            
            // Scroll to top of service box
            serviceBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// ============================================================================
// TEAM BIO TOGGLE (For Team Members)
// ============================================================================

function toggleTeamBio(button) {
    const teamCard = button.closest('.team-card');
    const fullBio = teamCard.querySelector('.team-bio-full');
    
    if (fullBio) {
        if (fullBio.classList.contains('hidden')) {
            // Show full bio
            fullBio.classList.remove('hidden');
            button.textContent = 'Read Less';
        } else {
            // Hide full bio
            fullBio.classList.add('hidden');
            button.textContent = 'Read More';
            
            // Scroll to top of team card
            teamCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// ============================================================================
// BACK TO TOP BUTTON
// ============================================================================

function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (!backToTopButton) return;
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================================================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================================================

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================================================
// EXIT INTENT POPUP
// ============================================================================

let exitPopupShown = false;

function initExitPopup() {
    const exitPopup = document.getElementById('exitPopup');
    
    if (!exitPopup) return;
    
    // Track mouse movement to detect exit intent
    document.addEventListener('mouseleave', (e) => {
        // Check if mouse is leaving from the top of the page
        if (e.clientY <= 0 && !exitPopupShown) {
            showExitPopup();
        }
    });
    
    // Also show on tab visibility change (user switching tabs)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && !exitPopupShown) {
            // Don't show immediately on tab switch
            // Could be annoying
        }
    });
}

function showExitPopup() {
    const exitPopup = document.getElementById('exitPopup');
    if (exitPopup && !exitPopupShown) {
        exitPopup.classList.remove('hidden');
        exitPopupShown = true;
        
        // Set a cookie/localStorage so it doesn't show again
        localStorage.setItem('exitPopupShown', 'true');
    }
}

function closeExitPopup() {
    const exitPopup = document.getElementById('exitPopup');
    if (exitPopup) {
        exitPopup.classList.add('hidden');
    }
}

// Check if popup was already shown in this session
if (localStorage.getItem('exitPopupShown') === 'true') {
    exitPopupShown = true;
}

// ============================================================================
// FORM HANDLING
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const interest = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !interest) {
                alert('Please fill in all required fields (Name, Email, and Interest).');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real implementation, you would send this data to a server
            // For now, just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
});

// ============================================================================
// LANGUAGE TOGGLE (Basic Implementation)
// ============================================================================

// Note: The full translation functionality is in the HTML inline script
// This is a placeholder for any additional language-related JS

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle animations on scroll
function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-box, .testimonial-card');
    
    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animated elements (REMOVED team-card to keep bios visible!)
    const animatedElements = document.querySelectorAll('.service-box, .testimonial-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s, transform 0.5s';
    });
    
    // Trigger animations on scroll
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Initial check
    handleScrollAnimations();
});

// ============================================================================
// MOBILE MENU TOGGLE (If needed in future)
// ============================================================================

// Placeholder for mobile menu functionality
// Can be expanded if mobile hamburger menu is added

// ============================================================================
// CONSOLE LOG (For debugging - remove in production)
// ============================================================================

console.log('Garcia Family Medicine - Website Loaded Successfully');
console.log('Carousel initialized with ' + document.querySelectorAll('.hero-slide').length + ' slides');
