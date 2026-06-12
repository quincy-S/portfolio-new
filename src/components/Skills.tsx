import React from 'react';
import { skillGroups } from '../data/portfolio';
import './Skills.css';

const Skills: React.FC = () => (
  <section id="skills" className="section">
    <div className="section__inner">
      <div className="section__label">Toolkit</div>
      <h2 className="section__title">Skills</h2>
      <div className="skills__grid">
        {skillGroups.map(group => (
          <div className="skill-group" key={group.label}>
            <div className="skill-group__label">{group.label}</div>
            <div className="skill-group__items">
              {group.skills.map(s => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
