import React from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
  return (
    <section className="trusted-section">
      
      {/* --- BLUE GRADIENT HEADER BAR (FULL WIDTH) --- */}
      <div className="trusted-gradient-bar-full">
        <div className="trusted-container">
          <div className="trusted-header-content">
            <div className="header-left">
              <h2 className="trusted-title">
                Trusted by Industry<br />
                Leaders Worldwide.
              </h2>
            </div>
            <div className="header-right">
              <p className="trusted-subtitle">
                From global organizations to innovative startups, we've earned the trust 
                of clients across healthcare, government, and technology sectors by delivering 
                patented, high-performance solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Container for Grid --- */}
      <div className="trusted-container">
        {/* --- Achievements Grid --- */}
        <div className="achievements-grid">
          
          {/* Card 1 */}
          <div className="achievement-card">
            <div className="icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                <path d="M4 22h16"/>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>National Partnership</h3>
              <p>First Private Organization in Sri Lanka to partner with WHO for a national project.</p>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="achievement-card">
            <div className="icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                <path d="M2 12h20"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>Global IP Protection</h3>
              <p>Patents secured in USA, Japan, and Sri Lanka for cutting-edge innovations.</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="achievement-card">
            <div className="icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>Industry 4.0 Pioneer</h3>
              <p>Leading technological innovation in biomedical engineering and IoT solutions.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;