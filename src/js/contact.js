const contactForm = document.querySelector('#contact_form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#send');
const thanksMessage = document.querySelector('.thanks');
const spinner = document.querySelector('.spinner-border');
const charCounter = document.querySelector('.valid-feedback');

const emailPattern = new RegExp("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$");

// EmailJS configuration
const SERVICE_ID = 'service_ga3651o';
const TEMPLATE_ID = 'template_8lfbjzq'; // Replace with your actual template ID
const USER_ID = 'Hrg8hqQiqNUHEGlgf'; // Your public key

const warningClass = 'is-invalid';
const successClass = 'is-valid';

// function to add/remove classes
function setUpClasses(e, isValid) {
  const input = e.target;

  if (isValid) {
    input.classList.add(successClass);
    input.classList.remove(warningClass);
  } else {
    input.classList.add(warningClass);
    input.classList.remove(successClass);
  }
}

nameInput.addEventListener('keyup', e => {
  setUpClasses(e, e.target.value.trim().length > 1 ? true : false);
  checkAllInputs();
});

emailInput.addEventListener('keyup', e => {
  setUpClasses(e, e.target.value.trim().match(emailPattern) ? true : false);
  checkAllInputs();
});

subjectInput.addEventListener('keyup', e => {
  setUpClasses(e, e.target.value.trim().length > 2 ? true : false);
  checkAllInputs();
});

messageInput.addEventListener('keyup', e => {
  setUpClasses(e, e.target.value.trim().length >= 2 ? true : false);
  checkAllInputs();
  charCounter.textContent = `${messageInput.value.length} / 400`;
});

// disable submitButton if the inputs have not achieved the conditions
function checkAllInputs() {
  submitButton.disabled =
    nameInput.value.trim().length > 1 &&
    emailInput.value.trim().match(emailPattern) &&
    subjectInput.value.trim().length > 2 &&
    messageInput.value.trim().split(' ').length > 1
      ? false
      : true;
}

// Send Email
async function sendEmail(e) {
  e.preventDefault();
  submitButton.style.display = 'none';
  spinner.style.display = 'inline-block';

  const templateParams = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    subject: subjectInput.value.trim(),
    message: messageInput.value.trim(),
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    thanksMessage.style.display = 'block';
    e.target.reset();
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      input.classList.remove(successClass);
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    alert('Failed to send email. Please try again later.');
  } finally {
    spinner.style.display = 'none';
    submitButton.style.display = 'block';
  }
}

contactForm.addEventListener('submit', sendEmail);

// clear form on load page
contactForm.reset();
