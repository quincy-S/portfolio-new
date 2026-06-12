import React from 'react';
import './Contact.css';

const Contact: React.FC = () => (
  <section id="contact" className="section">
    <div className="section__inner">
      <div className="contact__card">
        <div className="contact__left">
          <h2 className="contact__heading">Let's build something.</h2>
          <p className="contact__sub">
            Open to full-stack engineering roles — especially teams working on AI-native products,
            developer tooling, or high-throughput systems. Based in Pretoria, South Africa.
          </p>
        </div>
        <div className="contact__links">
          <a href="mailto:quincy.nbsa@gmail.com" className="btn btn--primary contact__btn">
            quincy.nbsa@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/quincy-smith-assan-99083762"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost contact__btn"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
