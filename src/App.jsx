import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Home from './pages/Home/Home';

function App() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refreshHard();
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Footer />
      <ThemeToggle />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default App;
