import React from 'react';
import { githubCards } from '../../data/githubCards';

function GitHubContributions() {
  return (
    <section id="github-contributions">
      <h1 className="text-center">Github Contribution</h1>
      <div className="container">
        <div className="github-card-grid row row-cols-1 row-cols-lg-2 g-3">
          {githubCards.map(card => (
            <div key={card.alt}>
              <div className="github-card" data-aos="flip-up" data-aos-duration="1000">
                <img
                  className="github-card-image"
                  src={card.src}
                  alt={card.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GitHubContributions;
