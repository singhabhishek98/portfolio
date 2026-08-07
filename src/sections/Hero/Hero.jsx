import React, { useEffect } from 'react';
import Typed from 'typed.js';
import profileImage from '../../assets/images/profile.png';
import { heroSocialLinks } from '../../data/socialLinks';

const typedHeadlines = [
  'a Front-End Developer!',
  'a MERN Stack Developer!',
  'a Full Stack Developer!',
  'a JavaScript Enthusiast!',
  'a React.js Developer!',
  'a Tech Blogger!',
];

function Hero() {
  useEffect(() => {
    const typed = new Typed('#headline', {
      strings: typedHeadlines,
      typeSpeed: 120,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    import('./curtainEffect');

    return () => typed.destroy();
  }, []);

  return (
    <div id="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mt-lg-0 d-grid align-content-center">
            <section className="text-center text-lg-start" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000">
              <p>Hello! 👋 I&apos;m</p>
              <h1>Abhishek Singh</h1>
              <p><span id="headline" /></p>
              <div className="social-links mx-auto mx-lg-0" aria-label="Social links">
                <div className="row">
                  {heroSocialLinks.map(({ href, icon, label }) => (
                    <div className="col-3" key={label}>
                      <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                        <i className={`bi ${icon}`} aria-hidden="true" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="col-12 col-lg-6 d-grid align-content-center">
            <div
              className="img-container"
              id="img-wrapper"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="2000"
            >
              <div id="canvas" />
              <div className="curtain">
                <img
                  src={profileImage}
                  crossOrigin="anonymous"
                  data-sampler="simplePlaneTexture"
                  width="400"
                  height="400"
                  loading="lazy"
                  alt="Abhishek Singh - Full Stack Web Developer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
