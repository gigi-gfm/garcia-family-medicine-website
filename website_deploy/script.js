// Garcia Family Medicine - JavaScript Functions

// ============================================================================
// CAROUSEL AUTO-ROTATION (8 seconds)
// ============================================================================

let currentSlideIndex = 0;
let autoRotateInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    // Stop auto-rotation when user manually changes slides
    clearInterval(autoRotateInterval);
    
    showSlide(currentSlideIndex + direction);
    
    // Restart auto-rotation after manual change
    startAutoRotate();
}

function currentSlide(index) {
    // Stop auto-rotation when user clicks a dot
    clearInterval(autoRotateInterval);
    
    showSlide(index);
    
    // Restart auto-rotation after manual change
    startAutoRotate();
}

function startAutoRotate() {
    autoRotateInterval = setInterval(() => {
        showSlide(currentSlideIndex + 1);
    }, 8000); // 8 seconds
}

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
    startAutoRotate();
});


// ============================================================================
// READ MORE / READ LESS TOGGLE
// ============================================================================

function toggleReadMore(button) {
    const card = button.closest('.team-card, .service-box');
    const fullContent = card.querySelector('.team-bio-full, .service-full');
    
    if (fullContent.classList.contains('hidden')) {
        // Show full content
        fullContent.classList.remove('hidden');
        button.textContent = 'Read Less';
    } else {
        // Hide full content
        fullContent.classList.add('hidden');
        button.textContent = 'Read More';
    }
}


// ============================================================================
// BACK TO TOP BUTTON
// ============================================================================

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('backToTop');
    
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Scroll to top smoothly when button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// ============================================================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
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
});


// ============================================================================
// FORM VALIDATION (Optional - can be enhanced)
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;
            
            if (name && email && message) {
                // Form is valid - you can add your form submission logic here
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});
