// navbar
import { Collapse } from 'bootstrap';

// scroll spy
import { ScrollSpy } from 'bootstrap';

const navigation = document.querySelector('#toggleMobileMenu');

if (navigation) {
  ScrollSpy.getOrCreateInstance(document.body, {
    target: '#toggleMobileMenu',
    rootMargin: '0px 0px -35%',
  });
}

// dark/light mode
import './themes';

// typed js
import './typed';


// from functions
import './contact';

// scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true
});
