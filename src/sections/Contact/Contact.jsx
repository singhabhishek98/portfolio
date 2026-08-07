import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <section>
        <div className="container">
          <h1>CONTACT ME</h1>
          <div className="row">
            <div className="hello mb-4 mb-lg-0 col-12 col-lg-4 d-grid align-content-center" data-aos="fade-right" data-aos-duration="1000">
              <span>Let&apos;s connect</span>
              <p>
                Have an exciting project idea? 🚀 <br />
                Dreaming of an awesome website? 🌟 <br />
                Let&apos;s get in touch today! 💡
              </p>

              <div className="mt-5 more_info">
                <p><i className="bi bi-geo-alt text-accent me-2 fs-5" />Varanasi UP, India</p>
                <p>
                  <a className="contact-icon-link" href="mailto:abhisingh10298@gmail.com" aria-label="Email Abhishek Singh">
                    <i className="bi bi-envelope-fill text-accent" />
                  </a>
                  <a className="contact-text-link" href="mailto:abhisingh10298@gmail.com">abhisingh10298@gmail.com</a>
                </p>
                <p>
                  <a className="contact-icon-link" href="https://www.linkedin.com/in/itechwala/" target="_blank" rel="noreferrer" aria-label="Abhishek Singh on LinkedIn">
                    <i className="bi bi-linkedin" />
                  </a>
                  Abhishek Singh
                </p>
              </div>
            </div>

            <div className="contact_form col-12 col-lg-8 d-grid align-content-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
