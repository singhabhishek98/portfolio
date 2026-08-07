import React from 'react';
import './ProjectCard.css';

function ProjectCard({
  alt,
  description,
  image,
  liveLabel = 'Live demo',
  liveUrl,
  sourceUrl,
  technologies,
  title,
  type,
}) {
  return (
    <div>
      <article className="project" data-aos="flip-up" data-aos-duration="1000">
        <img src={image} alt={alt} loading="lazy" />
        <div className="project-details">
          <p className="project-heading">{title}</p>
          <div className="project-description text-center">
            {description}
            <br /><strong>Tech Stack:</strong> {technologies}
            <br /><strong>Project Type:</strong> {type}
          </div>
          <div className="links_project">
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" title="Source code" aria-label={`${title} source code`}>
              <i className="bi bi-github" aria-hidden="true" />
            </a>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" title={liveLabel} aria-label={`${title} ${liveLabel}`}>
              <i className="bi bi-eye-fill" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;
