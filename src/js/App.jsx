import React, { useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import ContactForm from './ContactForm';

function App() {
  const markup = useMemo(
    () => document.querySelector('#legacy-portfolio-template').innerHTML,
    []
  );

  useEffect(() => {
    const contactContainer = document.querySelector('.contact_form');
    const contactRoot = contactContainer ? createRoot(contactContainer) : null;

    contactRoot?.render(<ContactForm />);
    import('./main');

    return () => contactRoot?.unmount();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

export default App;
