import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 500);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button className="scroll-to-top" type="button" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <i className="bi bi-arrow-up" aria-hidden="true" />
    </button>
  );
}

export default ScrollToTop;
