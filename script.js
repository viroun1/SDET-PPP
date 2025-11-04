// Basic interactivity: nav toggle, slider, form validation, year injection
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in all year spans
  document.querySelectorAll('[id^="year"]').forEach(el => el.textContent = new Date().getFullYear());

  // Nav toggle (hamburger) - targets the nearest nav inside the same header
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn => {
    // ensure nav is initially hidden on small screens
    btn.addEventListener('click', () => {
      const headerInner = btn.closest('.header-inner');
      if (!headerInner) return;
      const nav = headerInner.querySelector('nav');
      if (!nav) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      // Use aria-hidden to indicate visibility; toggle it explicitly
      const hidden = nav.getAttribute('aria-hidden') === 'true';
      nav.setAttribute('aria-hidden', String(!hidden));
    });
  });

  // Enhanced slider with keyboard support
  const slider = document.getElementById('projectSlider');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('.slide'));
    let index = 0;
    const show = (i) => {
      slides.forEach((s, idx) => {
        const visible = idx === i;
        s.setAttribute('aria-hidden', String(!visible));
        s.classList.toggle('active', visible);
      });
    };
    show(index);
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    prev && prev.addEventListener('click', () => { index = (index-1+slides.length)%slides.length; show(index); prev.focus(); });
    next && next.addEventListener('click', () => { index = (index+1)%slides.length; show(index); next.focus(); });

    // keyboard navigation when slider has focus
    slider.tabIndex = 0;
    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { index = (index-1+slides.length)%slides.length; show(index); }
      if (e.key === 'ArrowRight') { index = (index+1)%slides.length; show(index); }
    });
  }

  // Contact form validation and simple submit handler
  const form = document.getElementById('contactForm');
  if (form) {
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const message = form.elements['message'].value.trim();

      // helper validators
      const isEmpty = v => !v || v.length === 0;
      const isEmail = v => /^\S+@\S+\.\S+$/.test(v);

      // validate and focus first invalid
      if (isEmpty(name)) { showStatus('Please enter your name', true); form.elements['name'].focus(); return; }
      if (!isEmail(email)) { showStatus('Please enter a valid email', true); form.elements['email'].focus(); return; }
      if (isEmpty(message)) { showStatus('Please enter a message', true); form.elements['message'].focus(); return; }

      // demo send
      showStatus('Thanks! Your message was sent (demo).', false);
      form.reset();
    });
    function showStatus(msg, isError){
      status.textContent = msg;
      status.style.color = isError ? 'crimson' : 'green';
    }
  }
});
