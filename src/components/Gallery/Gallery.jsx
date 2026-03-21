import React, { useState, useEffect } from 'react';
import './Gallery.css';
import gallery1 from './gallery1.jpeg';
import gallery2 from './gallery2.jpeg';
import gallery3 from './gallery3.jpeg';
import gallery4 from './gallery4.jpeg';
import gallery5 from './gallery5.jpeg';
import gallery6 from './gallery6.jpeg';
import gallery7 from './gallery7.jpeg';
import gallery8 from './gallery8.jpeg';

const Gallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    { id: 1, before: '01.', title: 'Startup Meeting', category: 'TRACE innovation hub', image: gallery1 },
    { id: 2, before: '02.', title: 'Innovation Session', category: 'Tech collaboration space', image: gallery2 },
    { id: 3, before: '03.', title: 'Global Partnership', category: 'Events', image: gallery3 },
    { id: 4, before: '04.', title: 'Team Culture', category: 'People', image: gallery4 },
    { id: 5, before: '05.', title: 'Medical Tech', category: 'Impact', image: gallery5 },
    { id: 6, before: '06.', title: 'Brainstorming', category: 'Process', image: gallery6 },
    { id: 7, before: '07.', title: 'Tech Showcase', category: 'Demo', image: gallery7 },
    { id: 8, before: '08.', title: 'Strategic Growth', category: 'Business', image: gallery8 },
  ];

  useEffect(() => {
    const imagePromises = images.map(img => {
      return new Promise((resolve) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = resolve; 
        image.src = img.image;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  const renderImageItem = (image, index) => (
    <div key={`${image.id}-${index}`} className="gallery-card">
      <div className="gallery-card-image-wrapper">
        <img 
          src={image.image}
          alt={image.title}
          loading="lazy"
        />
        {/* Hover Overlay with Text */}
        <div className="gallery-card-overlay">
          <span className="gallery-card-before">{image.before}</span>
          <h3 className="gallery-card-title">{image.title}</h3>
          <span className="gallery-card-category">{image.category}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="gallery-section" style={{ marginTop: '0px', marginBottom: '4rem' }}>
      
      {/* --- BLUE GRADIENT STATS BAR --- */}
        <div className="stats-header-wrapper" style={{ marginBottom: '7rem' }}>
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-desc">
              Global Projects<br />Delivered Successfully
            </span>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-desc">
              Client Satisfaction<br />& Retention Rate
            </span>
          </div>
        </div>
      </div>

      {/* --- Intro Text --- */}
      <div className="gallery-intro">
        <h2 className="gallery-section-title">Life at Effective Solutions</h2>
        <p className="gallery-section-subtitle">
           We work with startups and companies of all sizes to build custom apps and software which make a real difference.
        </p>
      </div>

      {/* --- Seamless Infinite Scroll --- */}
      <div className="gallery-track-container">
        <div className="gallery-track">
          {images.map((image, index) => renderImageItem(image, index))}
          {images.map((image, index) => renderImageItem(image, index + images.length))}
          {images.map((image, index) => renderImageItem(image, index + images.length * 2))}
        </div>
      </div>

      {!imagesLoaded && (
        <div className="gallery-loader">
          <div className="loader-spinner"></div>
        </div>
      )}
    </section>
  );
};

export default Gallery;