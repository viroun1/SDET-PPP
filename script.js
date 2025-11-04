// === MOBILE MENU TOGGLE ===
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('nav ul');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}

// === CONTACT FORM VALIDATION & SUCCESS MESSAGE ===
const contactForm = document.querySelector('form');
const successMessage = document.getElementById('success-message');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // stop page reload

    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    // Display a success message
    successMessage.textContent = '✅ Thank you! Your message has been sent successfully.';
    contactForm.reset();

    // Hide message after 4 seconds
    setTimeout(() => {
      successMessage.textContent = '';
    }, 4000);
  });
}
