import React from 'react';
import './Hero.css';

const stackPills = [
  { label: 'C# / .NET', accent: true },
  { label: 'TypeScript', accent: true },
  { label: 'React', accent: true },
  { label: 'Node.js', accent: true },
  { label: 'Claude API', accent: true },
  { label: 'PostgreSQL', accent: false },
  { label: 'SQL Server', accent: false },
  { label: 'AWS', accent: false },
  { label: 'Docker', accent: false },
  { label: 'Kafka', accent: false },
];

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__eyebrow">Full-Stack Software Engineer</div>

        <h1 className="hero__name">
          Quincy<br />
          <span className="hero__name--accent">Smith-Assan</span>
        </h1>

        <p className="hero__tagline">
          5+ years building <strong>production-grade systems</strong>, from API design
          and data modelling to cloud deployment and AI integration. I own work
          end-to-end, move fast without dropping quality, and care about what ships.
        </p>

        <div className="hero__stack">
          {stackPills.map(p => (
            <span key={p.label} className={`pill${p.accent ? ' pill--accent' : ''}`}>
              {p.label}
            </span>
          ))}
        </div>

        <div className="hero__cta">
          <button className="btn btn--primary" onClick={() => scrollTo('#contact')}>
            Get in touch
          </button>
          <button className="btn btn--ghost" onClick={() => scrollTo('#projects')}>
            See the work ↓
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
