/**
 * GARCIA FAMILY MEDICINE - JAVASCRIPT
 * Medical Practice Website Functionality
 */

// Wait for DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
    
    /* ==========================================
       CAROUSEL FUNCTIONALITY
       ========================================== */
    
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.carousel-button-left');
    const nextButton = document.querySelector('.carousel-button-right');
    let currentSlide = 0;
    let carouselInterval;
    
    // Only initialize carousel if elements exist
    if (slides.length > 0 && dots.length > 0) {
        
        /**
         * Navigate to a specific slide
         * @param {number} n - Slide index to navigate to
         */
        function goToSlide(n) {
            if (slides[currentSlide]) {
                slides[currentSlide].classList.remove('active');
            }
            if (dots[currentSlide]) {
                dots[currentSlide].classList.remove('active');
            }
            
            currentSlide = n;
            
            if (slides[currentSlide]) {
                slides[currentSlide].classList.add('active');
            }
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        }
        
        /**
         * Move to the next slide
         */
        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            goToSlide(nextIndex);
        }
        
        /**
         * Move to the previous slide
         */
        function prevSlide() {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prevIndex);
        }
        
        /**
         * Start auto-advance carousel
         */
        function startCarousel() {
            carouselInterval = setInterval(nextSlide, 5000);
        }
        
        /**
         * Stop auto-advance carousel
         */
        function stopCarousel() {
            if (carouselInterval) {
                clearInterval(carouselInterval);
            }
        }
        
        // Add click handlers to navigation dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                stopCarousel();
                goToSlide(index);
                startCarousel();
            });
        });
        
        // Add click handler to previous button
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                stopCarousel();
                prevSlide();
                startCarousel();
            });
        }
        
        // Add click handler to next button
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                stopCarousel();
                nextSlide();
                startCarousel();
            });
        }
        
        // Start the carousel auto-advance
        startCarousel();
        
        // Pause carousel on hover for better UX
        const carouselContainer = document.querySelector('.hero-carousel');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopCarousel);
            carouselContainer.addEventListener('mouseleave', startCarousel);
        }
    }
    
    /* ==========================================
       FORM SUBMISSION HANDLING
       ========================================== */
    
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            
            // Show success message
            alert(`Thank you${name ? ', ' + name : ''}! We will contact you shortly.`);
            
            // Reset the form
            contactForm.reset();
            
            // Optional: Scroll to top of page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    /* ==========================================
       SMOOTH SCROLLING FOR ANCHOR LINKS
       ========================================== */
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore empty hash or just "#"
            if (!href || href === '#') {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                // Get header height for offset (if you have a fixed header)
                const headerOffset = 0; // Adjust if you have a fixed header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    /* ==========================================
       FADE-IN ANIMATION ON SCROLL (OPTIONAL)
       ========================================== */
    
    // Add fade-in effect for elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in class (you can add this class to elements in HTML)
    document.querySelectorAll('.fade-in').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    /* ==========================================
       MOBILE MENU TOGGLE (IF YOU ADD A MENU)
       ========================================== */
    
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
                mobileMenu.classList.remove('active');
                mobileMenuButton.classList.remove('active');
            }
        });
    }
    
    /* ==========================================
       CONSOLE INFO (OPTIONAL - REMOVE IN PRODUCTION)
       ========================================== */
    
    console.log('✅ Garcia Family Medicine - Website loaded successfully');
    console.log('📞 Contact: (816) 427-5320');
    console.log('📧 Email: admin@garciafamilymedicine.care');
    
});

/* ==========================================
   UTILITY FUNCTIONS
   ========================================== */

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
 */
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

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element to check
 * @returns {boolean}
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
