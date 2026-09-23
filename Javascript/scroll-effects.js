// Fade/slide in each text block once it scrolls into view
var textBlocks = document.querySelectorAll('.textblock');

var revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 });

textBlocks.forEach((block) => revealObserver.observe(block));

// Collapse the nav once the user scrolls down, expand it again at the very top
var siteHeader = document.getElementById('site-header');

if (siteHeader) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      siteHeader.classList.add('nav-collapsed');
    } else {
      siteHeader.classList.remove('nav-collapsed');
    }
  });
}

// Show a "back to top" button once the user has scrolled down a bit
var backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
