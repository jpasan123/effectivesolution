import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
import award1 from '../../assets/award1.jpeg';
import award2 from '../../assets/award2.jpeg';
import ceo from '../../pages/About/ceo&founder.jpg';
import director from '../../pages/About/director.jpg';
// removed SSE image import since we'll use a letter avatar instead

const Hero = () => {
  const awards = [
    {
      img: award1,
      heading: 'MedTech Entrepreneur Keerthi Kodithuwakku Recognized as the ICT Leader of the Year',
      category: 'INDUSTRY LEADER • Awards',
      desc: 'Proprietary Neural Frameworks',
    },
    {
      img: award2,
      heading: 'CEO of the Year Award 2022 — Artificial Intelligence Category',
      category: 'TECH INNOVATION • Awards',
      desc: 'Industrial IoT & Edge Solutions',
    },
  ];

  const [awardIndex, setAwardIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      const t = setTimeout(() => {
        setAwardIndex((i) => (i + 1) % awards.length);
        setIsFading(false);
        clearTimeout(t);
      }, 620);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section exact-hero" id="home">
      <div className="hero-inner">

        {/* LEFT: Title + Subtitle + Globe */}
        <div className="hero-left">
          <div className="title-block">
            <span className="pre">We are</span>

            <h1 className="main-title">
              <span className="word-effective">Effective</span>
              <span className="word-solutions">Solutions.</span>
            </h1>

            <div className="subtitle">
              <span className="subtitle-line">Turning Complex Challenges into</span>
              <span className="subtitle-line"><span className="seamless">Seamless</span> IoT Solutions, AI Integration, Biomedical Solutions</span>
              

              <p className="hero-tagline">“We solve. We simplify. We’re effective”</p>

              {/* Leadership row */}
              <div className="leadership-row">
                <div className="avatar-stack" role="list" aria-label="Leadership">
                  <Link to="/about#team" className="avatar" role="listitem" aria-label="Keerthi Kodithuwakku">
                    <img src={ceo} alt="Keerthi Kodithuwakku" />
                  </Link>
                  <Link to="/about#team" className="avatar" role="listitem" aria-label="Heminda Jayaweera">
                    <img src={director} alt="Heminda Jayaweera" />
                  </Link>
                  <Link to="/about#team" className="avatar letter-avatar" role="listitem" aria-label="R">
                    <span>R</span>
                  </Link>
                  <Link to="/about#team" className="avatar avatar-count" role="listitem" aria-label="Meet the team" title="Meet the team">
                    <span className="count">20+</span>
                    <span className="sr-only">Meet the team behind our success</span>
                  </Link>
                </div>

                <div className="leadership-label">
                  <Link to="/about#team" className="label-text link">Meet the leadership</Link>
                </div>
              </div>
            </div>

          </div>


        </div>

        {/* RIGHT: Industry recognition */}
        <div className="hero-right">
          <div className="industry-header">
            <span className="line"></span>
            <span className="label">HONORS & RECOGNITION</span>
            <span className="line"></span>
          </div>

          <h3 className="award-heading">{awards[awardIndex].heading}</h3>

          <div className="award-display" aria-live="polite">
            <div className={`award-card ${isFading ? 'fade-out' : 'fade-in'}`}>
              <img src={awards[awardIndex].img} alt={awards[awardIndex].heading} className="award-thumb" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;