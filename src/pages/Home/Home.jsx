import React from 'react';
import About from '../../sections/About/About';
import Contact from '../../sections/Contact/Contact';
import GitHubContributions from '../../sections/GitHubContributions/GitHubContributions';
import Hero from '../../sections/Hero/Hero';
import Projects from '../../sections/Projects/Projects';

function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Projects />
        <GitHubContributions />
        <Contact />
      </main>
    </>
  );
}

export default Home;
