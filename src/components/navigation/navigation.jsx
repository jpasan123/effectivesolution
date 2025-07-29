import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import logo from './effective-solutions.webp';
import './navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection('home');
    }
    closeMenu();
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToSection('call-to-action-section');
    } else {
      window.location.href = '/#call-to-action-section';
    }
    closeMenu();
  };

  // Navigation items configuration
  const navItems = [
    { path: '/', label: 'Home', onClick: handleHomeClick },
    { path: '/about', label: 'About', onClick: closeMenu },
    { path: '/services', label: 'Services', onClick: closeMenu },
    { path: '/blogs', label: 'Blog', onClick: closeMenu },
    { path: '/careers', label: 'Career', onClick: closeMenu }
  ];

  return (
    <nav className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`}>
      <div className="navigation__container">
        <div className="navigation__content">
          {/* Logo */}
          {/* Logo */}
    <Link to="/" className="navigation__logo" onClick={closeMenu}>
      <img className='logo' src={logo} alt="effective solutions logo"/>
      <span className="logo__text">
        <span className="logo__text--blue">EFFECTIVE</span>
        <span className="logo__text--gray">SOLUTIONS</span>
      </span>
    </Link>

          {/* Desktop Menu */}
          <div className="navigation__menu">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`navigation__link ${isActive(item.path) ? 'navigation__link--active' : ''}`}
                onClick={item.onClick}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Info */}
          <div className="navigation__contact">
            <button 
              className="navigation__contact-icon"
              onClick={handleContactClick}
              aria-label="Contact us"
            >
              <Phone size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="navigation__mobile-toggle"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navigation__mobile ${isMenuOpen ? 'navigation__mobile--open' : ''}`}>
          <div className="navigation__mobile-content">
            {navItems.map((item) => (
              <Link 
                key={`mobile-${item.path}`}
                to={item.path} 
                className={`navigation__mobile-link ${isActive(item.path) ? 'navigation__mobile-link--active' : ''}`}
                onClick={item.onClick}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Contact Button */}
            <div className="navigation__mobile-contact">
              <button 
                className="navigation__mobile-contact-button"
                onClick={handleContactClick}
                aria-label="Contact us"
              >
                <Phone size={20} />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="navigation__mobile-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navigation;