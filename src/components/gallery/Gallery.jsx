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
  const [speed, setSpeed] = useState('normal');
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
  { id: 1, title: 'Startup Meeting', description: 'TRACE innovation hub', image: gallery1 },
  { id: 2, title: 'Innovation Session', description: 'Tech collaboration space', image: gallery2 },
  { id: 3, title: 'Global Partnership', description: 'International cooperation', image: gallery3 },
  { id: 5, title: 'Medical Conference', description: 'Neurological innovation', image: gallery5 },
  { id: 6, title: 'Medical Conference', description: 'Neurological innovation', image: gallery6 },
  { id: 7, title: 'Tech Presentation', description: 'Jendo innovations showcase', image: gallery7 },
  { id: 8, title: 'Agreement Signing', description: 'Strategic partnership', image: gallery8 },
];

  useEffect(() => {
    // Preload images using img.image
    const imagePromises = images.map(img => {
      return new Promise((resolve) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = resolve;
        image.src = img.image;
      });
    });

    Promise.all(imagePromises).then(() => {
      setTimeout(() => setImagesLoaded(true), 500);
    });
  }, []);

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const handleImageClick = (image) => {
    console.log(`Clicked on: ${image.title}`);
    // Add your custom click handler here
  };

  const renderImageItem = (image, index) => (
    <div 
      key={`${image.id}-${index}`} 
      className="image-item"
      onClick={() => handleImageClick(image)}
    >
      <img 
        src={image.image}
        alt={image.title}
        style={{ opacity: imagesLoaded ? 1 : 0 }}
      />
      <div className="image-overlay">
        <div className="image-title">{image.title}</div>
        <div className="image-description">{image.description}</div>
      </div>
    </div>
  );

  return (
    <div className="gallery-container">
      <div className="controls">
        <button 
          className={`control-btn ${speed === 'slow' ? 'active' : ''}`}
          onClick={() => handleSpeedChange('slow')}
        >
          Slow
        </button>
        <button 
          className={`control-btn ${speed === 'normal' ? 'active' : ''}`}
          onClick={() => handleSpeedChange('normal')}
        >
          Normal
        </button>
        <button 
          className={`control-btn ${speed === 'fast' ? 'active' : ''}`}
          onClick={() => handleSpeedChange('fast')}
        >
          Fast
        </button>
      </div>

      <div className={`scroll-container speed-${speed}`}>
        <div className="scroll-track">
          {/* First complete set of images */}
          {images.map((image, index) => renderImageItem(image, index))}
          {/* Second complete set for seamless loop - this ensures first image appears immediately after last image */}
          {images.map((image, index) => renderImageItem(image, index + images.length))}
        </div>
      </div>

      {!imagesLoaded && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Loading images...</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;