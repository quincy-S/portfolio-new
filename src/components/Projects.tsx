import React from 'react';
import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects: React.FC = () => (
  <section id="projects" className="section">
    <div className="section__inner">
      <div className="section__label">Selected work</div>
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
