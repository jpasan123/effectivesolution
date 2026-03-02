import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Whatwedo.css';

// Ensure images are in your project folder
import health from './health.png';
import enterprisesoftwares from './enterprise-softwares.png';

const WhatWeDo = () => {
  const [expanded, setExpanded] = useState(null);

  const services = [
    {
      id: 'biomedical',
      title: 'Biomedical Solutions',
      description: 'Revolutionary healthcare technologies that save lives through AI-powered diagnostics and non-invasive monitoring systems.',
      extra: [
        'AI-driven eye screening (OPHTHA)',
        'Vascular health monitoring (JENDO)',
        'MINDRONE - Mind-controlled drone using EEG brain signals',
        'Non-invasive diagnostic tools',
        'FDA-approved technologies'
      ],
      image: health,
      link: '/services/biomedical'
    },
    {
      id: 'software',
      title: 'Enterprise Software',
      description: 'Custom software solutions that streamline operations, enhance productivity, and drive digital transformation across industries.',
      extra: [
        'E-commerce platforms',
        'Management systems',
        'Mobile applications',
        'Cloud-based solutions'
      ],
      image: enterprisesoftwares,
      link: '/services/enterprise'
    }
  ];

  return (
    <section className="what-we-do-section">
      <div className="who-container">
        <h2 className="who-title">Transforming Industries Through Innovation</h2>
        <p className="who-subtitle">
          We specialize in cutting-edge technologies that solve real-world problems and drive meaningful change across healthcare, industry, and society.
        </p>

        <div className="service-cards">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.title} className="card-img" />
              <div className="card-details">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.description}</p>
                {service.extra && (
                  <>
                    <button
                      className={`expand-btn ${expanded === service.id ? 'open' : ''}`}
                      onClick={() => setExpanded(prev => (prev === service.id ? null : service.id))}
                      aria-label={expanded === service.id ? 'Collapse' : 'Learn more'}
                    >
                      Learn more <ArrowRight size={20} />
                    </button>
                    {expanded === service.id && (
                      <ul className="extra-content">
                        {service.extra.map((line, idx) => <li key={idx}>{line}</li>)}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;