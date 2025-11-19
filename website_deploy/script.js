// GARCIA FAMILY MEDICINE - COMPLETE JAVASCRIPT
// All buttons and interactions properly connected

document.addEventListener('DOMContentLoaded', function() {
    console.log('Garcia Family Medicine website loaded! 💙');

    // ========================================
    // HERO CAROUSEL
    // ========================================
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        if (slides[index]) slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Auto-advance carousel every 8 seconds
    let carouselInterval = setInterval(nextSlide, 8000);

    // Left/Right buttons
    const leftButton = document.querySelector('.carousel-button-left');
    const rightButton = document.querySelector('.carousel-button-right');

    if (leftButton) {
        leftButton.addEventListener('click', function() {
            clearInterval(carouselInterval);
            prevSlide();
            carouselInterval = setInterval(nextSlide, 8000);
        });
    }

    if (rightButton) {
        rightButton.addEventListener('click', function() {
            clearInterval(carouselInterval);
            nextSlide();
            carouselInterval = setInterval(nextSlide, 8000);
        });
    }

    // Dot indicators
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            clearInterval(carouselInterval);
            currentSlide = index;
            showSlide(currentSlide);
            carouselInterval = setInterval(nextSlide, 8000);
        });
    });

    // Initialize carousel
    showSlide(0);

    // ========================================
    // READ MORE - TEAM BIOS
    // ========================================
    const bioToggles = document.querySelectorAll('.read-more-toggle');
    
    bioToggles.forEach(button => {
        button.addEventListener('click', function() {
            const teamCard = this.closest('.team-card');
            const shortBio = teamCard.querySelector('.team-bio-short');
            const fullBio = teamCard.querySelector('.team-bio-full');
            
            if (fullBio.classList.contains('hidden')) {
                fullBio.classList.remove('hidden');
                shortBio.classList.add('hidden');
                this.textContent = 'Read Less';
            } else {
                fullBio.classList.add('hidden');
                shortBio.classList.remove('hidden');
                this.textContent = 'Read More';
            }
        });
    });

    // ========================================
    // READ MORE - SERVICES
    // ========================================
    const serviceButtons = document.querySelectorAll('.read-more-btn');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceBox = this.closest('.service-box');
            const shortDesc = serviceBox.querySelector('.service-short');
            const fullDesc = serviceBox.querySelector('.service-full');
            
            if (fullDesc.classList.contains('hidden')) {
                fullDesc.classList.remove('hidden');
                shortDesc.classList.add('hidden');
                this.textContent = 'Read Less';
                
                // Smooth scroll to keep the box in view
                setTimeout(() => {
                    serviceBox.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 100);
            } else {
                fullDesc.classList.add('hidden');
                shortDesc.classList.remove('hidden');
                this.textContent = 'Read More';
            }
        });
    });

    // ========================================
    // CTA BUTTONS - SCROLL TO CONTACT
    // ========================================
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Only prevent default if it's not already a link with href="#contact"
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
            }
            
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });

    // ========================================
    // BACK TO TOP BUTTON
    // ========================================
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========================================
    // CONTACT FORM SUBMISSION
    // ========================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const service = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;
            
            // Create email subject and body
            const subject = encodeURIComponent('Website Contact - ' + service);
            const body = encodeURIComponent(
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n' +
                'Phone: ' + phone + '\n' +
                'Service Interested In: ' + service + '\n\n' +
                'Message:\n' + message
            );
            
            // Open default email client
            window.location.href = 'mailto:contact@garciafamilymedicine.com?subject=' + subject + '&body=' + body;
            
            // Show confirmation
            alert('Thank you for contacting us! Your email client will open with your message. If it doesn\'t open automatically, please call us at (816) 708-0884.');
            
            // Reset form
            this.reset();
        });
    }

    // ========================================
    // EXIT POPUP
    // ========================================
    const exitPopup = document.querySelector('.exit-popup');
    const closePopupButton = document.querySelector('.exit-popup-close');
    const exitSecondaryButton = document.querySelector('.exit-btn-secondary');
    let popupShown = false;

    function showExitPopup() {
        if (!popupShown && exitPopup) {
            exitPopup.classList.remove('hidden');
            popupShown = true;
            console.log('Exit popup displayed');
        }
    }

    function closeExitPopup() {
        if (exitPopup) {
            exitPopup.classList.add('hidden');
        }
    }

    // Show popup when mouse leaves window (going to close tab)
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 0) {
            showExitPopup();
        }
    });

    // Close button
    if (closePopupButton) {
        closePopupButton.addEventListener('click', closeExitPopup);
    }

    // "I'll Look Around First" button
    if (exitSecondaryButton) {
        exitSecondaryButton.addEventListener('click', closeExitPopup);
    }

    // Primary button ("Call Now") - goes to phone
    const exitPrimaryButton = document.querySelector('.exit-btn-primary');
    if (exitPrimaryButton) {
        exitPrimaryButton.addEventListener('click', function() {
            window.location.href = 'tel:+18167080884';
        });
    }

    // Close popup when clicking outside content
    if (exitPopup) {
        exitPopup.addEventListener('click', function(e) {
            if (e.target === this) {
                closeExitPopup();
            }
        });
    }

    // ========================================
    // SPANISH TOGGLE
    // ========================================
    const languageToggle = document.querySelector('.language-toggle');
    let isSpanish = false;

    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            isSpanish = !isSpanish;
            
            if (isSpanish) {
                this.textContent = 'View in English';
                alert('¡Contenido en español próximamente! Por favor llámenos al (816) 708-0884 para asistencia en español.');
            } else {
                this.textContent = 'Ver en Español';
            }
        });
    }

    // ========================================
    // SMOOTH SCROLL FOR ALL ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only handle if it's an actual anchor (not just "#")
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-box, .testimonial-card, .testimonial-card-written, .value-card, .team-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ========================================
    // PHONE BUTTON CLICK TRACKING
    // ========================================
    const phoneButtons = document.querySelectorAll('a[href^="tel:"]');
    phoneButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Phone call initiated: (816) 708-0884');
        });
    });

    // ========================================
    // LOG SUCCESS MESSAGE
    // ========================================
    console.log('✅ All buttons connected successfully!');
    console.log('📞 Phone: (816) 708-0884');
    console.log('💙 Garcia Family Medicine - Treating Spirit, Body, and Soul');

}); // End DOMContentLoaded
