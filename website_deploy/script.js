// CAROUSEL FUNCTIONALITY
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let autoSlideInterval;

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle wraparound
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Add active class to current slide and dot
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
    resetAutoSlide();
}

function goToSlide(index) {
    showSlide(index);
    resetAutoSlide();
}

function autoSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 5000);
}

// Start automatic slideshow on page load
if (slides.length > 0) {
    autoSlideInterval = setInterval(autoSlide, 5000);
}

// READ MORE / READ LESS FUNCTIONALITY
function toggleService(button) {
    const card = button.closest('.service-card, .team-card');
    const details = card.querySelector('.service-details, .team-details');
    
    if (details.classList.contains('hidden')) {
        // Expand
        details.classList.remove('hidden');
        details.style.maxHeight = details.scrollHeight + 'px';
        button.textContent = 'Read Less';
        
        // Smooth scroll to show full content
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    } else {
        // Collapse
        details.style.maxHeight = '0';
        setTimeout(() => {
            details.classList.add('hidden');
        }, 500);
        button.textContent = 'Read More';
        
        // Scroll back to top of card
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// SMOOTH SCROLLING FOR NAVIGATION LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// BACK TO TOP BUTTON
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// EXIT POPUP FUNCTIONALITY
const exitPopup = document.getElementById('exitPopup');
let popupShown = false;

document.addEventListener('mouseleave', function(e) {
    // Only trigger if mouse leaves from top of page
    if (e.clientY < 10 && !popupShown) {
        exitPopup.classList.remove('hidden');
        popupShown = true;
    }
});

function closePopup() {
    exitPopup.classList.add('hidden');
}

// Close popup if user clicks outside the content
exitPopup.addEventListener('click', function(e) {
    if (e.target === exitPopup) {
        closePopup();
    }
});

// CONTACT FORM HANDLING
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link with form data
        const subject = encodeURIComponent('Website Contact from ' + name);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n\n` +
            `Message:\n${message}`
        );
        
        const mailtoLink = `mailto:gigi@garciafamilymedicine.care?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show confirmation
        alert('Thank you for your message! Your email client will open to send the message.');
        
        // Reset form
        contactForm.reset();
    });
}

// LAZY LOADING FOR VIDEOS
document.addEventListener('DOMContentLoaded', function() {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                if (iframe.dataset.src) {
                    iframe.src = iframe.dataset.src;
                    iframe.removeAttribute('data-src');
                    videoObserver.unobserve(iframe);
                }
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    document.querySelectorAll('iframe[data-src]').forEach(iframe => {
        videoObserver.observe(iframe);
    });
});

// MOBILE MENU TOGGLE (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// PHONE BUTTON BREATHING ANIMATION
const phoneButtons = document.querySelectorAll('.phone-btn');
phoneButtons.forEach(button => {
    setInterval(() => {
        button.style.transform = 'scale(1.05)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 500);
    }, 3000);
});

// ACCESSIBILITY: ESC KEY CLOSES POPUP
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !exitPopup.classList.contains('hidden')) {
        closePopup();
    }
});

// SCROLL ANIMATIONS FOR SECTIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to service cards and team cards
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeInObserver.observe(element);
    });
});

// VIDEO PLAY TRACKING (Optional - for analytics)
function trackVideoPlay(videoTitle) {
    console.log('Video played:', videoTitle);
    // You can add Google Analytics tracking here if needed
}

// FORM VALIDATION HELPER
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\(\)]+$/;
    return re.test(phone);
}

// AUTO-RESIZE TEXTAREAS
const textareas = document.querySelectorAll('textarea');
textareas.forEach(textarea => {
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});

// PREVENT POPUP ON FIRST VISIT FOR 10 SECONDS
let pageLoadTime = Date.now();
document.addEventListener('mouseleave', function(e) {
    const timeOnPage = Date.now() - pageLoadTime;
    if (timeOnPage < 10000) {
        // Don't show popup if user has been on page for less than 10 seconds
        return;
    }
});

// LOG WHEN PAGE IS FULLY LOADED
window.addEventListener('load', function() {
    console.log('Garcia Family Medicine website fully loaded');
    console.log('All videos, images, and scripts ready');
});

// PREVENT LAYOUT SHIFT - Wait for images to load
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', function() {
                loadedImages++;
                if (loadedImages === images.length) {
                    console.log('All images loaded');
                }
            });
        }
    });
});
