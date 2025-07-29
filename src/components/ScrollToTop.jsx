import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Auto scroll to top on route change (for navigation between pages)
  useEffect(() => {
    // Only scroll to top for actual page changes, not hash changes
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname]); // Triggers when route changes

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;