// script.js
// ADR Trading - basic interactivity

document.addEventListener('DOMContentLoaded', () => {
  // 1) Slideshow controls on gallery page
  (function () {
    const slides = document.querySelectorAll('.slides img');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    if (!slides.length || !nextBtn || !prevBtn) return;

    let idx = 0;

    function show() {
      slides.forEach((img, i) => {
        img.style.display = i === idx ? 'block' : 'none';
      });
    }

    nextBtn.addEventListener('click', () => {
      idx = (idx + 1) % slides.length;
      show();
    });

    prevBtn.addEventListener('click', () => {
      idx = (idx - 1 + slides.length) % slides.length;
      show();
    });

    // auto-advance every 5 seconds
    setInterval(() => {
      idx = (idx + 1) % slides.length;
      show();
    }, 5000);

    show();
  })();

  // 2) Smooth scroll for in-page links (e.g., "View Trading Services")
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 3) Change header style on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 4) Fake submit handler on contact form
  const contactForm = document.querySelector('#contact-form');
  const statusBox = document.querySelector('.form-status');

  if (contactForm && statusBox) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = contactForm.querySelector('input[name="name"]')?.value || 'Trader';

      statusBox.textContent = `Thanks, ${name}! Your message was received. I’ll reach out soon.`;
      statusBox.classList.add('visible');

      contactForm.reset();
    });
  }
});
