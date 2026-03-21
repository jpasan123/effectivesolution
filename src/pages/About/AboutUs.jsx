import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  CheckCircle, 
  Trophy, 
  Users, 
  Globe, 
  Rocket, 
  Target, 
  Award, 
  Zap, 
  Star, 
  MapPin, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Clock 
} from 'lucide-react';

import './AboutUs.css';

// --- YOUR IMAGE IMPORTS ---
import jendo_1 from './IMG1.jpg';
import img1 from './IMG-1.jpg';
import img2 from './effective-solutions.webp';
import img3 from './IMG-2.jpg';
import img4 from './IMG-4.jpg';
import img5 from './jendo.png';
import img6 from './IMG-7.jpg';
import ceo from './ceo&founder.jpg';
import director from './director.jpg';

// Professional team image from Unsplash
const ourstory = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

// Gallery Imports
import WIPO1 from './WIPO1.jpeg';
import WIPO2 from './WIPO2.jpeg';
import WIPO3 from './WIPO3.jpeg';
import WIPO4 from './WIPO4.jpeg';
import WIPO5 from './WIPO5.jpeg'; 
import ophtha1 from './oph.jpeg';
import ophtha3 from './ophtha3.jpeg';
import image1 from './image1.jpg'; 
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image from './image8.jpg';

const AboutUs = () => {
  const timelineRef = useRef(null);
  
  const [activeCategory, setActiveCategory] = useState('innovation-focus');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  // Scroll to #team when navigated with a hash
  useEffect(() => {
    if (location && location.hash === '#team') {
      // give the page a moment to render
      const t = setTimeout(() => {
        const el = document.getElementById('team');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => clearTimeout(t);
    }
  }, [location]);

  // --- JOURNEY MILESTONES ---
  const journeyMilestones = [
    {
      year: "2013",
      title: "Our Humble Beginning",
      description: "Started as a passionate group of engineering undergraduates at University of Moratuwa.",
      icon: <Rocket size={20} />,
      achievements: ["Founded by 5 engineering graduates", "First office in Moratuwa"],
      image: img1 
    },
    {
      year: "2014",
      title: "Company Registration",
      description: "Officially registered as Effective Solutions (Pvt) Ltd.",
      icon: <Zap size={20} />,
      achievements: ["First undergrad startup to become Pvt Ltd", "Established business framework"],
      image: img2 
    },
    {
      year: "2014",
      title: "First Product Launch",
      description: "Launched Route Radar - Our first mobile tracking platform.",
      icon: <Globe size={20} />,
      achievements: ["Acquired paying customers in first month", "Established market presence"],
      image: img3 
    },
    {
      year: "2015",
      title: "Phase Two Expansion",
      description: "Rapid expansion with new office space and tripled workforce.",
      icon: <Trophy size={20} />,
      achievements: ["Tripled workforce", "Increased company valuation"],
      image: img4 
    },
    {
      year: "2021",
      title: "Technology Leadership",
      description: "Launched JENDO, OPHTHA, and MYNDRONE healthcare solutions.",
      icon: <Target size={20} />,
      achievements: ["Patented JENDO vascular test", "Clinical grade OPHTHA screening"],
      image: img5 
    },
    {
      year: "2024",
      title: "Industry 4.0 Pioneer",
      description: "Leading the transformation of industries through AI, IoT, and advanced software solutions.",
      icon: <Star size={20} />,
      achievements: ["500+ projects completed", "Global team of experts"],
      image: img6 
    }
  ];

  const values = [
    {
      icon: <Globe size={32} />,
      title: "Global Presence",
      description: "Operations spanning across Sri Lanka, Japan, and England, serving clients worldwide."
    },
    {
      icon: <Rocket size={32} />,
      title: "Innovation Focus",
      description: "Delivering cutting-edge solutions that drive technological advancement."
    },
    {
      icon: <Target size={32} />,
      title: "Industry Excellence",
      description: "Award-winning technology solutions across various sectors."
    }
  ];

  const teamMembers = [
    {
      name: "Keerthi Kodithuwakku",
      position: "CEO & Founder",
      linkedin: "https://www.linkedin.com/in/keerthi-kodithuwakku-b98149219/",
      email: "keerthi.effectivesolutions@gmail.com",
      image: ceo,
      bio: "Founder and CEO with a background in engineering from the University of Moratuwa. Keerthi leads product vision and growth, driving international expansion and award-winning solutions across mobile and web platforms. Passionate about mentoring engineers and building impactful products."
    },
    {
      name: "Heminda Jayaweera",
      position: "Director",
      linkedin: "https://www.linkedin.com/in/heminda/",
      email: "#",
      image: director,
      bio: "Director focused on business operations, client partnerships and strategic growth. Heminda has led key projects that expanded the company's footprint into regional markets and strengthened delivery processes for scalable software services."
    }
  ];

  const locations = [
    { name: "Sri Lanka", type: "Headquarters" },
    { name: "Japan", type: "Regional Office" },
    { name: "England", type: "Regional Office" }
  ];

  // --- GALLERY DATA ---
  const galleryData = {
    'innovation-focus': {
      title: 'Innovation Focus',
      icon: <Rocket size={20} />,
      images: [jendo_1, ophtha1, ophtha3]
    },
    'global-presence': {
      title: 'Global Presence',
      icon: <Globe size={20} />,
      images: [img5, WIPO1, WIPO2, WIPO3, WIPO4, WIPO5]
    },
    'awards': {
      title: 'Awards & Recognition',
      icon: <Trophy size={20} />,
      images: [image1, image2, image3, image4, image6, image7, image8, image]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentImages = galleryData[activeCategory].images;
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    if (category === activeCategory) return;
    setIsLoading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setCurrentImageIndex(0);
      setIsLoading(false);
    }, 400);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => observer.observe(item));

    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <div className="about-page">
      
      {/* --- HERO SECTION --- */}
      <section className="about-hero">
        <div className="blob blob-blue"></div>
        <div className="blob blob-pink"></div>
        
        <div className="container hero-container">
          <div className="hero-text-area">
            {/* <div className="hero-badge">Who We Are</div> */}
            <h1 className="hero-heading">
              Building Trust Through <br/>
              <span className="gradient-text">Innovation</span>
            </h1>
            <p className="hero-subtext">
              Transforming ideas into digital reality through cutting-edge technology. 
              We are the bridge between complex challenges and simple, effective solutions.
            </p>
            <div className="hero-cta-row">
              <a href="#story" className="hero-btn primary-btn">Our Story <ArrowRight size={18} /></a>
              <a href="#team" className="hero-btn secondary-btn">Meet the Team</a>
            </div>
            <div className="hero-trust-indicators">
              <div className="trust-item">
                <Trophy size={20} />
                <span>Award Winning</span>
              </div>
              <div className="trust-item">
                <Globe size={20} />
                <span>Global Reach</span>
              </div>
              <div className="trust-item">
                <Users size={20} />
                <span>50+ Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR STORY --- */}
      <section className="our-story-section" id="story">
        <div className="container">
          <div className="story-layout">
            {/* Image and Stats First */}
            <div className="story-image-col">
              <div className="image-frame">
                <img src={ourstory} alt="Our Story" />
                <div className="frame-decoration"></div>
              </div>
              
              <div className="story-stats-row">
                <div className="stat-box">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Experts</span>
                </div>
              </div>
            </div>
            
            {/* Story Text Below */}
            <div className="story-content-col">
              <h2 className="section-heading">Our Story</h2>
              <div className="heading-line"></div>
              <p className="story-paragraph">
                Effective Solutions (Pvt) Ltd is an award-winning technology company in Sri Lanka, 
                renowned for delivering high-quality, innovative solutions across various industries.
              </p>
              <p className="story-paragraph">
                Founded in 2013 by five engineering graduates from the University of Moratuwa, the 
                company has expanded its global footprint to Japan and England, transforming 
                business requirements into functional digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="values-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">Core Values</h2>
            <p className="section-subheading">The principles that drive our innovation</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOURNEY TIMELINE (CLEAN PROFESSIONAL DESIGN) --- */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">Our Journey</h2>
            <p className="section-subheading">Milestones of excellence and growth</p>
          </div>

          <div className="journey-timeline" ref={timelineRef}>
            {journeyMilestones.map((milestone, index) => (
              <div key={index} className="journey-card">
                <div className="journey-year">{milestone.year}</div>
                <div className="journey-image">
                  <img src={milestone.image} alt={milestone.title} />
                </div>
                <div className="journey-info">
                  <div className="journey-icon">{milestone.icon}</div>
                  <h3 className="journey-title">{milestone.title}</h3>
                  <p className="journey-desc">{milestone.description}</p>
                  <div className="journey-achievements">
                    {milestone.achievements.slice(0, 2).map((ach, i) => (
                      <span key={i} className="journey-tag">
                        <CheckCircle size={12} /> {ach}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="team-section" id="team">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">Leadership</h2>
            <p className="section-subheading">The visionaries behind Effective Solutions</p>
          </div>

          <div className="leadership-list">
            {teamMembers.map((member, index) => (
              <div key={index} className="leadership-row">
                <div className="team-photo-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-details">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.position}</span>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-socials">
                    {member.linkedin && <a href={member.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /></a>}
                    {member.email && member.email !== '#' && <a href={`mailto:${member.email}`}><Mail size={18} /></a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT / GLOBAL PRESENCE --- */}
      <section className="global-section">
        <div className="container">
          <div className="global-grid">
            <div className="global-text">
              <h2>Global Reach</h2>
              <p>With headquarters in Sri Lanka and offices in Japan and England, we are truly global.</p>
              <div className="locations-list">
                {locations.map((loc, idx) => (
                  <div key={idx} className="location-item">
                    <MapPin size={20} className="loc-icon" />
                    <div>
                      <strong>{loc.name}</strong>
                      <span>{loc.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="global-contact-card">
              <h3>Start a Conversation</h3>
              <p>Ready to innovate? Let's talk.</p>
              <div className="contact-links">
                <a href="mailto:careers@effectivesolutions.lk" className="contact-row">
                  <Mail size={18} /> careers@effectivesolutions.lk
                </a>
                <a href="tel:+94112345678" className="contact-row">
                  <ArrowRight size={18} /> +94 11 234 5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;