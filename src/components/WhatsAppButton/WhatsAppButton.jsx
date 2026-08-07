import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import './WhatsAppButton.css';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919616366415?text=Hey%20there!%20Let%27s%20connect."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <img className="whatsapp-float__icon" src={whatsappIcon} alt="" aria-hidden="true" />
    </a>
  );
}

export default WhatsAppButton;
