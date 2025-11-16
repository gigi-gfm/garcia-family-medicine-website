// =========================
// HERO CAROUSEL
// =========================

const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.carousel-nav .dot');
const heroSection = document.querySelector('.hero-carousel');

let currentSlideIndex = 0;
let slideIntervalId = null;

function showSlide(index) {
  if (!slides.length) return;

  // wrap index around
  currentSlideIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlideIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlideIndex);
  });
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function goToSlide(index) {
  showSlide(index);
}

// expose to inline onclick in HTML
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.goToSlide = goToSlide;

function startCarousel() {
  if (slideIntervalId || !slides.length) return;
  slideIntervalId = setInterval(nextSlide, 7000); // 7 seconds
}

function stopCarousel() {
  if (!slideIntervalId) return;
  clearInterval(slideIntervalId);
  slideIntervalId = null;
}

// Start once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  showSlide(0);
  startCarousel();

  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopCarousel);
    heroSection.addEventListener('mouseleave', startCarousel);
  }
});


// =========================
// READ MORE TOGGLE (SERVICES)
// =========================
// HTML: <div class="service-full hidden"> ... </div>
//       <button onclick="toggleReadMore(this)">Read More</button>

function toggleReadMore(button) {
  const fullBlock = button.previousElementSibling; // .service-full
  if (!fullBlock) return;

  const isHidden = fullBlock.classList.contains('hidden');
  fullBlock.classList.toggle('hidden', !isHidden);

  button.textContent = isHidden ? 'Read Less' : 'Read More';
}

window.toggleReadMore = toggleReadMore;


// =========================
// READ MORE TOGGLE (TEAM BIOS)
// =========================
// HTML: .team-card -> .team-bio-full.hidden + button onclick="toggleTeamBio(this)"

function toggleTeamBio(button) {
  const card = button.closest('.team-card');
  if (!card) return;

  const fullBio = card.querySelector('.team-bio-full');
  if (!fullBio) return;

  const isHidden = fullBio.classList.contains('hidden');
  fullBio.classList.toggle('hidden', !isHidden);

  button.textContent = isHidden ? 'Read Less' : 'Read More';
}

window.toggleTeamBio = toggleTeamBio;


// =========================
// EXIT INTENT POPUP
// =========================
// HTML: <div id="exitPopup" class="exit-popup hidden">...</div>
//       calls closeExitPopup() in onclick

let exitPopupShown = false;

function showExitPopup() {
  const popup = document.getElementById('exitPopup');
  if (!popup) return;
  popup.classList.remove('hidden');
}

function closeExitPopup() {
  const popup = document.getElementById('exitPopup');
  if (!popup) return;
  popup.classList.add('hidden');
}

window.closeExitPopup = closeExitPopup;

// Trigger when mouse leaves at the top of the window (desktop)
document.addEventListener('mouseout', (event) => {
  if (exitPopupShown) return;
  // Only fire when leaving at the top edge
  if (event.clientY > 0) return;

  exitPopupShown = true;
  showExitPopup();
});


// =========================
// BACK TO TOP BUTTON
// =========================
// HTML: <button id="backToTop" onclick="scrollToTop()">...</button>

const backToTopBtn = document.getElementById('backToTop');

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.scrollToTop = scrollToTop;

// Show / hide depending on scroll position
window.addEventListener('scroll', () => {
  if (!backToTopBtn) return;

  if (window.scrollY > 400) {
    backToTopBtn.style.opacity = '1';
    backToTopBtn.style.pointerEvents = 'auto';
  } else {
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.pointerEvents = 'none';
  }
});
