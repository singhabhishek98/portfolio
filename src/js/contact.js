const contactForm = document.querySelector('#contact_form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#send');
const charCounter = document.querySelector('.char-counter');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// EmailJS configuration
const SERVICE_ID = 'service_ga3651o';
const TEMPLATE_ID = 'template_8lfbjzq';
const USER_ID = 'Hrg8hqQiqNUHEGlgf';

// Toast notification function
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast-notification ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 3000);
}

// Character counter for message
if (messageInput && charCounter) {
  messageInput.addEventListener('input', () => {
    const length = messageInput.value.length;
    charCounter.textContent = `${length} / 400`;
  });
}

// Send Email
async function sendEmail(e) {
  e.preventDefault();
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();
  
  // Validation
  if (!name) {
    showToast('Please enter your name', 'warning');
    return;
  }
  
  if (!email || !emailPattern.test(email)) {
    showToast('Please enter a valid email', 'warning');
    return;
  }
  
  if (!subject) {
    showToast('Please enter a subject', 'warning');
    return;
  }
  
  // Show loading
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  
  const templateParams = {
    name: name,
    email: email,
    subject: subject,
    message: message || 'No message provided',
  };
  
  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    showToast('Message sent successfully! 🚀', 'success');
    contactForm.reset();
    if (charCounter) charCounter.textContent = '0 / 400';
  } catch (error) {
    console.error('Failed to send email:', error);
    showToast('Failed to send message. Please try again.', 'error');
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = '<i class="bi bi-send me-2"></i>Send Message';
  }
}

if (contactForm) {
  contactForm.addEventListener('submit', sendEmail);
  contactForm.reset();
}
