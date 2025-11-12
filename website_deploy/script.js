// ===================================
// CAROUSEL FUNCTIONALITY
// ===================================
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

// Show specific slide
function showSlide(n) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Wrap around if out of bounds
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    
    // Add active class to current slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Next/Previous controls
function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Indicator controls
function currentSlide(n) {
    showSlide(n);
}

// Auto-advance carousel every 6 seconds
setInterval(() => {
    changeSlide(1);
}, 6000);

// Initialize first slide
showSlide(0);

// ===================================
// READ MORE TOGGLE FUNCTIONALITY
// ===================================
function toggleReadMore(detailsId) {
    const details = document.getElementById(detailsId);
    const button = details.previousElementSibling;
    
    if (details.classList.contains('active')) {
        details.classList.remove('active');
        button.textContent = 'Read More';
    } else {
        details.classList.add('active');
        button.textContent = 'Read Less';
    }
}

// ===================================
// EXIT INTENT POPUP
// ===================================
const popup = document.getElementById('exitPopup');
let popupShown = false;

// Check if popup was already shown (cookie/localStorage)
function hasSeenPopup() {
    return localStorage.getItem('weightLossPopupSeen') === 'true';
}

// Mark popup as seen
function markPopupSeen() {
    localStorage.setItem('weightLossPopupSeen', 'true');
    // Set expiration for 30 days
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    localStorage.setItem('weightLossPopupExpiration', expirationDate.toISOString());
}

// Check if popup has expired
function isPopupExpired() {
    const expiration = localStorage.getItem('weightLossPopupExpiration');
    if (!expiration) return true;
    
    const expirationDate = new Date(expiration);
    const now = new Date();
    return now > expirationDate;
}

// Show popup
function showPopup() {
    if (!popupShown && (!hasSeenPopup() || isPopupExpired())) {
        popup.classList.add('active');
        popupShown = true;
        markPopupSeen();
    }
}

// Close popup
function closePopup() {
    popup.classList.remove('active');
}

// Exit intent detection
document.addEventListener('mouseleave', (e) => {
    // Only trigger if mouse leaves from the top of the page
    if (e.clientY <= 0) {
        showPopup();
    }
});

// Close popup when clicking outside
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
        closePopup();
    }
});

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

// ===================================
// CONTACT FORM HANDLING
// ===================================
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For now, we'll just show an alert
        alert('Thank you for your interest! We will contact you shortly.');
        
        // Reset the form
        this.reset();
    });
}

// ===================================
// MOBILE MENU HANDLING (if needed later)
// ===================================
// You can add mobile menu toggle functionality here if needed

// ===================================
// SCROLL REVEAL ANIMATIONS (optional enhancement)
// ===================================
// Add scroll-based animations to service cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Garcia Family Medicine website loaded successfully!');
    
    // Add any additional initialization code here
    
    // Add active class to current nav item based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    window.addEventListener('scroll', debounce(() => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, 100));
});

// ===================================
// PERFORMANCE MONITORING (optional)
// ===================================
window.addEventListener('load', () => {
    // Log page load time
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});
