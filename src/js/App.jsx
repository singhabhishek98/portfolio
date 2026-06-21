import React, { useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import ContactForm from './ContactForm';
import Header from './Header';

function App() {
  const markup = useMemo(() => {
    const template = document.querySelector('#legacy-portfolio-template');
    const content = template.content.cloneNode(true);
    const legacyHeader = content.querySelector('header');
    legacyHeader?.remove();

    const container = document.createElement('div');
    container.append(content);
    return container.innerHTML;
  }, []);

  useEffect(() => {
    const contactContainer = document.querySelector('.contact_form');
    const contactRoot = contactContainer ? createRoot(contactContainer) : null;

    contactRoot?.render(<ContactForm />);
    import('./main');

    return () => contactRoot?.unmount();
  }, []);

  return (
    <>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </>
  );
}

export default App;
