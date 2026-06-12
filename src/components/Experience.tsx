import React from 'react';
import { experience } from '../data/portfolio';
import './Experience.css';

const Experience: React.FC = () => (
  <section id="experience" className="section">
    <div className="section__inner">
      <div className="section__label">Career</div>
      <h2 className="section__title">Experience</h2>

      <div className="timeline">
        {experience.map((item, i) => (
          <div className="timeline__item" key={i}>
            <div className="timeline__dot" />
            <div className="timeline__meta">
              <span className="timeline__role">{item.role}</span>
              <span className="timeline__sep">·</span>
              <span className="timeline__company">{item.company}</span>
              <span className="timeline__date">{item.date}</span>
            </div>

            <p className="timeline__desc">{item.description}</p>

            {item.bullets.length > 0 && (
              <ul className="timeline__bullets">
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}

            {item.tech.length > 0 && (
              <div className="timeline__tags">
                {item.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
