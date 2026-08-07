import React from 'react';
import Skills from '../Skills/Skills';

const aboutParagraphs = [
  'I’m an aspiring and determined Full Stack Web Developer, curious to explore different industry-standard tech stacks and environments.',
  'I build websites using HTML, CSS, JavaScript, React.js, MERN and other libraries.',
  'I am passionate about pursuing my goals, working hard and constantly improving to become the best version of myself.',
  "I'm excited to collaborate with your team to bring your vision to life!",
];

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-grid align-content-center">
            <section
              id="about_section"
              className="my-5 my-lg-0"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-duration="1500"
            >
              <h1>ABOUT ME</h1>
              {aboutParagraphs.map(paragraph => <p key={paragraph}>⚡ {paragraph}</p>)}
            </section>
          </div>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
