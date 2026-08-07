import React from 'react';
import { navigationItems } from '../../data/navigation';
import { footerSocialLinks } from '../../data/socialLinks';

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section copyright">
            <p>Made with by <a href="https://www.linkedin.com/in/itechwala/">Abhishek Singh</a></p>
          </div>

          <div className="footer-section quick-links">
            {navigationItems.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}
          </div>

          <div className="footer-section social-links">
            {footerSocialLinks.map(({ href, icon, label }) => (
              <a href={href} target="_blank" rel="noreferrer" title={label} key={label} aria-label={label}>
                <i className={icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Abhishek Singh | TechWala. <span className="rights">All Rights Reserved.</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
