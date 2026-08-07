import React from 'react';
import SkillCard from '../../components/SkillCard/SkillCard';
import { skills } from '../../data/skills';

function Skills() {
  return (
    <div className="col-12 col-lg-6 d-grid align-content-center">
      <section id="skills_section" className="mb-5 mb-lg-0" data-aos="fade-left" data-aos-duration="1000">
        <h1>SKILLS</h1>
        <div className="row">
          {skills.map(skill => <SkillCard key={skill.name} {...skill} />)}
        </div>
      </section>
    </div>
  );
}

export default Skills;
