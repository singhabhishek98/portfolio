// Initialize EmailJS with your User ID
(function () {
  emailjs.init("abhisingh10298@gmail.com"); // Replace with your EmailJS User ID
})();

// Handle form submission
const form = document.getElementById("contact_form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Send the email
  emailjs
    .sendForm("service_ga3651o", "template_8lfbjzq", form) // Replace with your Service ID and Template ID
    .then(
      function (response) {
        console.log("Email sent successfully!", response);
        alert("Message sent successfully!");
        form.reset(); // Reset the form
      },
      function (error) {
        console.log("Failed to send email.", error);
        alert("Failed to send message. Please try again.");
      }
    );
});