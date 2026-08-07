import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';

function Projects() {
  return (
    <section id="portfolio">
      <h1 className="mb-md-5">PROJECTS</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-3">
          {projects.map(project => <ProjectCard key={project.title} {...project} />)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
