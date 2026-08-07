import React from 'react';
import './SkillCard.css';

function SkillCard({ icon, iconClassName = '', name }) {
  return (
    <div className="col-6 col-md-4">
      <img className={iconClassName} src={icon} alt="" aria-hidden="true" loading="lazy" />
      <span>{name}</span>
    </div>
  );
}

export default SkillCard;
