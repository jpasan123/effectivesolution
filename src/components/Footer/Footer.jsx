import React from 'react';
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram, 
  MapPin, 
  Mail, 
  Phone 
} from 'lucide-react';
import './Footer.css';
import companylogo from '../../assets/effective-icon.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* --- Top Area: Brand & Columns --- */}
        <div className="footer-top">
          
          {/* Column 1: Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={companylogo} alt="Effective Solutions" />
            </div>
            <p className="footer-desc">
              Pioneering Industry 4.0 solutions with AI, IoT, and biomedical engineering. Transforming ideas into global realities.
            </p>
            <div className="footer-contact-info">
              <div className="contact-row">
                <MapPin size={16} className="contact-icon" />
                <span>Colombo, Sri Lanka</span>
              </div>
              <div className="contact-row">
                <Mail size={16} className="contact-icon" />
                <a href="mailto:info@effectivesolutions.lk">info@effectivesolutions.lk</a>
              </div>
              <div className="contact-row">
                <Phone size={16} className="contact-icon" />
                <a href="tel:+94766210120">+94 76 621 0120</a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-menu">
              <li><a href="/services/ai">AI Solutions</a></li>
              <li><a href="/services/iot">IoT Development</a></li>
              <li><a href="/services/biomedical">Biomedical Tech</a></li>
              <li><a href="/services/software">Software Dev</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Social */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Connect</h4>
            <p className="footer-connect-text">
              Follow our journey and stay updated with the latest tech innovations.
            </p>
            <div className="footer-social">
              <a 
                href="https://web.facebook.com/ESPvtLtd" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="social-btn"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/effective-solutions-pvt-ltd" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="social-btn"
              >
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-btn" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-btn" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* --- Bottom Area: Copyright & Legal --- */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Effective Solutions (Pvt) Ltd. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="/terms">Terms of Service</a>
              <span className="separator">•</span>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;