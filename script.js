const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    note.textContent = 'Thanks! Your message has been received. We’ll reach out within one business day.';
    form.reset();
  });
}
