import React from 'react';
import './Footer.css';
import companylogo from './companylogo.webp';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Single line navigation matching the navbar */}
        <div className="footer-nav">
          <div className="footer-logo">
            <img src={companylogo} alt="Effective Solutions" />
          </div>
          <nav className="footer-links">
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About</a>
            <a href="/services" className="footer-link">Services</a>
            <a href="/blogs" className="footer-link">Blog</a>
            <a href="/careers" className="footer-link">Career</a>
          </nav> 
        </div>

        {/* Footer bottom with copyright and social links */}
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Effective Solutions</p>
          <div className="footer-social">
            <a href="https://web.facebook.com/ESPvtLtd?mibextid=wwXIfr&rdid=bpqIIq0IbMwA4t7V&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F17A8FW6AKR%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr#" 
               className="social-link" 
               aria-label="Facebook"
               target="_blank"
               rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A7797046&keywords=Effective%20Solutions%20(Pvt)%20Ltd&origin=ENTITY_SEARCH_HOME_HISTORY&sid=m!%2C" 
               className="social-link" 
               aria-label="LinkedIn"
               target="_blank"
               rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;