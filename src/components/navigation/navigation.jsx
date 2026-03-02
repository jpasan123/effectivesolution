import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Removed 'Send' icon import
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/effective-icon.png';
import './navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const isActive = (path) => location.pathname === path;

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
      scrollToSection('contact');
    } else {
      // Navigate to home and include state so Home can scroll to the contact section
      navigate('/', { state: { scrollTo: 'contact' } });
    }
    closeMenu();
  };

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
          
          {/* Logo Section */}
          <Link to="/" className="navigation__logo" onClick={closeMenu}>
            <img className='logo' src={logo} alt="effective solutions logo"/>
            <span className="logo__text">
              <span className="logo__text--main">Effective</span>
              <span className="logo__text--sub">Solutions</span>
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

          {/* Desktop Contact - Text Only Pill Button */}
          <div className="navigation__contact">
            <button 
              className="navigation__contact-link"
              onClick={handleContactClick}
              aria-label="Contact us"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="navigation__mobile-toggle"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
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
            
            <div className="navigation__mobile-contact">
              <button 
                className="navigation__mobile-contact-button"
                onClick={handleContactClick}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;