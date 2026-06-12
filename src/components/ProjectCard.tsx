import React from 'react';
import './ProjectCard.css';

type IconVariant = 'blue' | 'green' | 'amber';
type TagVariant = 'live' | 'default';

interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  tag: string;
  tagVariant: TagVariant;
  icon: string;
  iconVariant: IconVariant;
  featured: boolean;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, description, highlights, tech, tag, tagVariant, icon, iconVariant, featured } = project;

  return (
    <article className={`project-card${featured ? ' project-card--featured' : ''}`}>
      <div className="project-card__top">
        <div className={`project-card__icon project-card__icon--${iconVariant}`}>
          <span role="img" aria-hidden="true">{icon}</span>
        </div>
        <span className={`project-card__tag${tagVariant === 'live' ? ' project-card__tag--live' : ''}`}>
          {tag}
        </span>
      </div>

      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>

      {highlights.length > 0 && (
        <ul className="project-card__highlights">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      <div className="project-card__tech">
        {tech.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
