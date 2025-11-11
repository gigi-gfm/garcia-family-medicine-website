/* ===== RESET & BASE STYLES ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background: #fff;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    color: #2C5282;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #E67E22;
}

/* ===== CONTAINER ===== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ===== HEADER ===== */
header {
    background: transparent;
    padding: 20px 0;
    box-shadow: none;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo-container {
    text-align: center;
    background: transparent;
}

.logo {
    max-width: 300px;
    height: auto;
    border: 3px solid white;
    border-radius: 20px;
    padding: 10px;
    animation: flyAcross 10s ease-in-out infinite;
}

/* Hawk Flying Across Animation */
@keyframes flyAcross {
    0% {
        transform: translateX(-150vw) translateY(0px) rotate(-10deg) scaleX(1);
    }
    25% {
        transform: translateX(0vw) translateY(-15px) rotate(0deg) scaleX(1);
    }
    50% {
        transform: translateX(150vw) translateY(0px) rotate(10deg) scaleX(1);
    }
    50.1% {
        transform: translateX(150vw) translateY(0px) rotate(10deg) scaleX(-1);
    }
    75% {
        transform: translateX(0vw) translateY(-15px) rotate(0deg) scaleX(-1);
    }
    100% {
        transform: translateX(-150vw) translateY(0px) rotate(-10deg) scaleX(-1);
    }
}

/* ===== HERO CAROUSEL ===== */
.hero-carousel {
    position: relative;
    height: 600px;
    overflow: hidden;
    background: #2C5282;
}

.hero-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-slide.active {
    opacity: 1;
}

.hero-overlay {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
}

.hero-content {
    text-align: center;
    color: white;
    max-width: 800px;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 300;
}

.hero-description {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.6;
}

.hero-button {
    display: inline-block;
    background: linear-gradient(135deg, #E67E22 0%, #D35400 100%);
    color: white;
    padding: 15px 40px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(230, 126, 34, 0.4);
}

.hero-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(230, 126, 34, 0.6);
    color: white;
}

/* Carousel Controls */
.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.3);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;
}

.carousel-button:hover {
    background: rgba(255, 255, 255, 0.5);
}

.carousel-button-left {
    left: 20px;
}

.carousel-button-right {
    right: 20px;
}

.carousel-dots {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 10;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.dot.active {
    background: white;
    width: 30px;
    border-radius: 6px;
}

/* ===== WELCOME SECTION ===== */
.welcome-section {
    padding: 80px 20px;
    background: #f7fafc;
}

.welcome-section .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.video-container img {
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.welcome-text h2 {
    color: #2C5282;
    font-size: 2.5rem;
    margin-bottom: 25px;
    font-weight: 700;
}

.welcome-text p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a5568;
    margin-bottom: 20px;
}

.availability-box {
    background: linear-gradient(135deg, #E67E22 0%, #D35400 100%);
    color: white;
    padding: 25px;
    border-radius: 10px;
    margin-top: 30px;
    box-shadow: 0 4px 15px rgba(230, 126, 34, 0.3);
}

/* ===== SECTION HEADINGS ===== */
section h2 {
    color: #2C5282;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 15px;
    font-weight: 700;
}

.section-subtitle {
    text-align: center;
    color: #718096;
    font-size: 1.2rem;
    margin-bottom: 50px;
}

/* ===== TEAM SECTION ===== */
.team-section {
    padding: 80px 20px;
    background: white;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-top: 50px;
}

.team-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.team-photo-container {
    width: 100%;
    height: 300px;
    overflow: hidden;
}

.team-photo-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.team-content {
    padding: 30px;
}

.team-name {
    color: #2C5282;
    font-size: 1.8rem;
    margin-bottom: 10px;
    font-weight: 700;
}

.team-title {
    color: #E67E22;
    font-size: 1.1rem;
    margin-bottom: 20px;
    font-weight: 600;
}

.team-statement {
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;
}

.team-bio-preview {
    margin-bottom: 15px;
}

.team-bio-full {
    margin-top: 20px;
}

.team-bio-full p {
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;
    margin-bottom: 15px;
}

.read-more-btn {
    background: transparent;
    border: 2px solid #E67E22;
    color: #E67E22;
    padding: 10px 25px;
    border-radius: 25px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.read-more-btn:hover {
    background: #E67E22;
    color: white;
}

.read-more-btn svg {
    transition: transform 0.3s ease;
}

/* ===== STATS SECTION ===== */
.stats-section {
    padding: 60px 20px;
    background: linear-gradient(135deg, #2C5282 0%, #1a365d 100%);
    color: white;
}

.stats-section .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.stat-card {
    text-align: center;
    padding: 30px;
}

.stat-number {
    font-size: 3.5rem;
    font-weight: 700;
    color: #E67E22;
    margin-bottom: 10px;
}

.stat-card div:last-child {
    font-size: 1.2rem;
    color: white;
}

/* ===== SERVICES SECTION ===== */
.services-section {
    padding: 80px 20px;
    background: #f7fafc;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
    margin-top: 50px;
}

.service-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.service-image-container {
    width: 100%;
    height: 250px;
    overflow: hidden;
}

.service-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.service-image-container iframe {
    width: 100%;
    height: 100%;
}

.service-content {
    padding: 30px;
}

.service-title {
    color: #2C5282;
    font-size: 1.8rem;
    margin-bottom: 10px;
    font-weight: 700;
}

.service-subtitle {
    color: #E67E22;
    font-size: 1.1rem;
    margin-bottom: 15px;
    font-weight: 600;
}

.service-description {
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;
    margin-bottom: 20px;
}

.benefits-list {
    margin: 20px 0;
}

.benefit-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    font-size: 0.95rem;
    color: #4a5568;
}

.checkmark {
    color: #E67E22;
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 10px;
}

.service-button {
    display: inline-block;
    background: linear-gradient(135deg, #2C5282 0%, #1a365d 100%);
    color: white;
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(44, 82, 130, 0.3);
}

.service-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(44, 82, 130, 0.4);
    color: white;
}

/* ===== NOURISH & THRIVE SECTION ===== */
.nourish-thrive-section {
    padding: 80px 20px;
    background: white;
}

.nourish-intro {
    max-width: 900px;
    margin: 0 auto 50px;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a5568;
}

.nourish-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-top: 50px;
}

.nourish-card {
    background: #f7fafc;
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nourish-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.nourish-card img {
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
    border-radius: 50%;
}

.nourish-card h4 {
    color: #2C5282;
    font-size: 1.3rem;
    margin-bottom: 15px;
    font-weight: 600;
}

.nourish-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;
}

.nourish-cta {
    max-width: 800px;
    margin: 60px auto 0;
    text-align: center;
    background: linear-gradient(135deg, #f7fafc 0%, #e6f2ff 100%);
    padding: 40px;
    border-radius: 15px;
}

.nourish-cta h4 {
    color: #2C5282;
    font-size: 1.8rem;
    margin-bottom: 20px;
    font-weight: 700;
}

.nourish-cta p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a5568;
    margin-bottom: 15px;
}

.nourish-button {
    display: inline-block;
    background: linear-gradient(135deg, #E67E22 0%, #D35400 100%);
    color: white;
    padding: 15px 40px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(230, 126, 34, 0.3);
    margin-top: 20px;
}

.nourish-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(230, 126, 34, 0.4);
    color: white;
}

/* ===== GOOGLE REVIEWS SECTION ===== */
.google-reviews-section {
    padding: 60px 20px;
    background: white;
    text-align: center;
}

.google-badge {
    display: inline-flex;
    align-items: center;
    gap: 20px;
    background: #f7fafc;
    padding: 30px 50px;
    border-radius: 15px;
    margin: 30px 0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.google-star {
    font-size: 4rem;
    color: #FBBC04;
}

.rating-number {
    font-size: 3rem;
    font-weight: 700;
    color: #2C5282;
}

.rating-text {
    font-size: 1.1rem;
    color: #718096;
}

.review-link {
    color: #2C5282;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease;
}

.review-link:hover {
    color: #E67E22;
}

/* ===== TESTIMONIALS SECTION ===== */
.testimonials-section {
    padding: 80px 20px;
    background: #f7fafc;
}

.video-testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.testimonial-card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.stars {
    color: #FBBC04;
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.testimonial-text {
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;
    margin-bottom: 15px;
    font-style: italic;
}

.testimonial-author {
    font-size: 0.95rem;
    color: #2C5282;
    font-weight: 600;
}

/* ===== CONTACT SECTION ===== */
.contact-section {
    padding: 80px 20px;
    background: white;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-top: 50px;
}

.contact-item {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.contact-label {
    font-weight: 600;
    color: #2C5282;
    font-size: 1.1rem;
    margin-bottom: 5px;
}

.contact-value {
    color: #4a5568;
    font-size: 1rem;
    line-height: 1.6;
}

.contact-value a {
    color: #2C5282;
}

.contact-value a:hover {
    color: #E67E22;
}

/* Contact Form */
.contact-form {
    background: #f7fafc;
    padding: 40px;
    border-radius: 15px;
}

.form-group {
    margin-bottom: 25px;
}

.form-label {
    display: block;
    font-weight: 600;
    color: #2C5282;
    margin-bottom: 8px;
}

.form-input,
.form-textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
    outline: none;
    border-color: #E67E22;
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

.submit-button {
    background: linear-gradient(135deg, #E67E22 0%, #D35400 100%);
    color: white;
    padding: 15px 40px;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(230, 126, 34, 0.3);
    width: 100%;
}

.submit-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(230, 126, 34, 0.4);
}

/* ===== FOOTER ===== */
footer {
    background: #2C5282;
    color: white;
    padding: 40px 20px;
    text-align: center;
}

.footer-logo {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.footer-tagline {
    font-size: 1.1rem;
    margin-bottom: 15px;
    opacity: 0.9;
}

.footer-address {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
    opacity: 0.8;
}

.footer-copyright {
    font-size: 0.9rem;
    opacity: 0.7;
    margin-top: 20px;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
    /* Hero Section */
    .hero-carousel {
        height: 500px;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    .hero-description {
        font-size: 1rem;
    }
    
    .carousel-button {
        width: 40px;
        height: 40px;
    }
    
    .carousel-button-left {
        left: 10px;
    }
    
    .carousel-button-right {
        right: 10px;
    }
    
    /* Welcome Section */
    .welcome-section .container {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    /* Section Headings */
    section h2 {
        font-size: 2rem;
    }
    
    .section-subtitle {
        font-size: 1rem;
    }
    
    /* Team Grid */
    .team-grid {
        grid-template-columns: 1fr;
    }
    
    /* Services Grid */
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    /* Nourish Grid */
    .nourish-grid {
        grid-template-columns: 1fr;
    }
    
    /* Video Testimonials */
    .video-testimonials-grid {
        grid-template-columns: 1fr;
    }
    
    /* Testimonial Grid */
    .testimonial-grid {
        grid-template-columns: 1fr;
    }
    
    /* Contact Grid */
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    /* Logo */
    .logo {
        max-width: 200px;
    }
    
    /* Stats */
    .stat-number {
        font-size: 2.5rem;
    }
}

@media (max-width: 480px) {
    /* Hero Section */
    .hero-carousel {
        height: 400px;
    }
    
    .hero-title {
        font-size: 1.5rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .hero-description {
        font-size: 0.9rem;
    }
    
    .hero-button {
        padding: 12px 30px;
        font-size: 1rem;
    }
    
    /* Section Headings */
    section h2 {
        font-size: 1.75rem;
    }
    
    /* Padding Adjustments */
    .welcome-section,
    .team-section,
    .services-section,
    .nourish-thrive-section,
    .testimonials-section,
    .contact-section {
        padding: 60px 15px;
    }
    
    /* Contact Form */
    .contact-form {
        padding: 25px;
    }
}
