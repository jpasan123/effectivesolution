import React, { useState, useEffect } from 'react';
import logo from './effective-solutions.png'; 
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isMounted, setIsMounted] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Total display time: 3.5 seconds
    // Start fading out at 3.0 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 3000);

    const removeTimer = setTimeout(() => {
      setIsMounted(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 3800); // Wait for the fade transition to finish (0.8s)

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onLoadingComplete]);

  if (!isMounted) return null;

  return (
    <div className={`loading-screen ${isFadingOut ? 'fade-out' : ''}`}>
      
      {/* Background Blobs (Matches your Hero Section) */}
      <div className="loader-blob blob-blue"></div>
      <div className="loader-blob blob-pink"></div>

      <div className="loading-content">
        
        {/* Animated Logo Container */}
        <div className="logo-wrapper">
          {/* Rotating Gradient Rings */}
          <div className="logo-ring ring-outer"></div>
          <div className="logo-ring ring-inner"></div>
          
          {/* The Logo Image */}
          <div className="logo-circle">
            <img className="es-logo-img" src={logo} alt="Effective Solutions" />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-wrapper">
          <h1 className="brand-name">Effective Solutions</h1>
          <p className="tagline">
            Transforming Ideas Into <span className="gradient-text">Digital Reality</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;