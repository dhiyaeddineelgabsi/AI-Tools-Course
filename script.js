/* === 1. RÉFÉRENCES === */
const slides = document.querySelectorAll('.slide');
const main = document.querySelector('main');

/* === 2. BOUTON RETOUR EN HAUT === */
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      if (!document.body.classList.contains('presentation-mode')) {
        backToTop.style.display = 'block';
      }
    } else {
      backToTop.style.display = 'none';
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* === 3. ANIMATIONS FADE-IN === */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

slides.forEach(slide => fadeObserver.observe(slide));

/* === 4. MODE PRÉSENTATION === */
let currentSlideIndex = 0;

if (main) {
  document.addEventListener('keydown', (e) => {
    if (!document.body.classList.contains('presentation-mode')) return;
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      currentSlideIndex = Math.min(currentSlideIndex + 1, slides.length - 1);
      slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      currentSlideIndex = Math.max(currentSlideIndex - 1, 0);
      slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'Escape') {
      document.body.classList.remove('presentation-mode');
    }
  });
}

/* === 5. VIDÉOS YOUTUBE === */
document.querySelectorAll('.video-placeholder').forEach(placeholder => {
  placeholder.addEventListener('click', () => {
    const src = placeholder.getAttribute('data-src');
    if (!src || src.trim() === '') {
      alert("Veuillez d'abord renseigner le lien YouTube dans le code.");
    } else {
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.setAttribute('allowfullscreen', 'true');
      iframe.setAttribute('frameborder', '0');
      iframe.className = 'yt-iframe';
      placeholder.replaceWith(iframe);
    }
  });
});
