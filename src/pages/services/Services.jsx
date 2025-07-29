import React, { useState } from 'react';
import { 
  Brain,           // AI/ML - Artificial Intelligence
  Hospital,        // Biomedical - Hospital/Medical
  Settings,        // IoT - Tools/Settings
  Monitor,         // Software - Computer/Monitor
  Radio,           // MYNDRONE - Radio/Signal transmission (better for drone)
  Lightbulb        // Consulting - Light bulb
} from 'lucide-react';

import './Services.css'; // Import your CSS file for styling

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      shortDescription: 'Intelligent automation and predictive analytics',
      description: 'Transform your business with cutting-edge AI solutions that automate processes, predict outcomes, and unlock insights from your data.',
      icon: <Brain size={32} />,
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Automation',
        'Deep Learning Solutions'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn'],
      overlayText: 'Intelligent Solutions'
    },
    {
      id: 'biomedical',
      title: 'Biomedical Technology',
      shortDescription: 'Healthcare innovation and medical devices',
      description: 'Revolutionary healthcare technologies that save lives through AI-powered diagnostics and non-invasive monitoring systems.',
      icon: <Hospital size={32} />,
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
      features: [
        'AI-driven Eye Screening (OPHTHA)',
        'Vascular Health Monitoring (JENDO)',
        'Non-invasive Diagnostic Tools',
        'Medical Device Development',
        'Healthcare Analytics',
        'FDA-approved Technologies'
      ],
      technologies: ['Medical AI', 'IoT Sensors', 'Cloud Computing', 'Mobile Apps'],
      overlayText: 'Health Innovation'
    },
    {
      id: 'iot',
      title: 'IoT & Smart Systems',
      shortDescription: 'Connected devices and intelligent automation',
      description: 'End-to-end IoT platforms that connect devices, analyze data, and provide intelligent insights for Industry 4.0 transformation.',
      icon: <Settings size={32} />,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
      features: [
        'ANANKE IoT Platform',
        'Real-time Data Analytics',
        'Device Management Systems',
        'Industrial Automation',
        'Smart Monitoring',
        'Edge Computing Solutions'
      ],
      technologies: ['Arduino', 'Raspberry Pi', 'AWS IoT', 'Azure IoT'],
      overlayText: 'Smart Connectivity'
    },
    {
      id: 'software',
      title: 'Enterprise Software',
      shortDescription: 'Custom software and digital transformation',
      description: 'Custom software solutions that streamline operations, enhance productivity, and drive digital transformation across industries.',
      icon: <Monitor size={32} />,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      features: [
        'Web Applications',
        'Mobile App Development',
        'E-commerce Platforms',
        'Management Systems',
        'Cloud Solutions',
        'API Development'
      ],
      technologies: ['React', 'Node.js', 'Python', 'MongoDB'],
      overlayText: 'Digital Excellence'
    },
    {
      id: 'myndrone',
      title: 'MYNDRONE Technology',
      shortDescription: 'Brain-computer interface and neural control',
      description: 'Mind-controlled drone technology using EEG signals for stress reduction and human health improvement in Industry 4.0 applications.',
      icon: <Radio size={32} />,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      features: [
        'EEG-controlled Systems',
        'Brain-Computer Interface',
        'Stress Reduction Technology',
        'Meditation Applications',
        'Neural Signal Processing',
        'Wellness Monitoring'
      ],
      technologies: ['EEG Sensors', 'Signal Processing', 'Machine Learning', '5G'],
      overlayText: 'Neural Innovation'
    },
    {
      id: 'consulting',
      title: 'Technology Consulting',
      shortDescription: 'Strategic guidance and technical expertise',
      description: 'Expert consultation services to help you navigate digital transformation, choose the right technologies, and implement best practices.',
      icon: <Lightbulb size={32} />,
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      features: [
        'Digital Strategy',
        'Technology Assessment', 
        'Implementation Planning',
        'System Integration',
        'Performance Optimization',
        'Training & Support'
      ],
      technologies: ['Cloud Platforms', 'DevOps', 'Security', 'Analytics'],
      overlayText: 'Strategic Guidance'
    }
  ];

  const industries = [
    'Healthcare',
    'Wellness', 
    'eCommerce',
    'Fintech',
    'Restaurants & FMCG',
    'Advertising',
    'Gaming',
    'Education'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your requirements and business goals',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Strategic roadmap and technical architecture',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular updates',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Rigorous quality assurance and optimization',
      icon: '🧪'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Seamless launch and go-live support',
      icon: '🚀'
    },
    {
      step: '06',
      title: 'Support',
      description: 'Ongoing maintenance and enhancement',
      icon: '🛠️'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section - Using same style as home page */}
       <section className="about-hero">
        <div className="hero-background-grid"></div>
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div> 
        
        <div className="container">
          <div className="herocontent">
            <div className="hero-content">
        <div className="content-wrapper">
          {/* Left Content */}
          <div className="content-left">
            <h2 className="hero-title">
              Your Vision, Our Tech – <span className="title-gradient">Built on Precision and Partnership</span><br />
            </h2>
          </div>
        </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="scroll-indicator">
              <div className="scroll-mouse">
                <div className="scroll-wheel"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container">
          <div className="industries-content">
            <h2>We possess expertise both within and across industries</h2>
            <div className="industries-grid">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="industry-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p>Comprehensive technology solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card ${hoveredCard === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveService(index)}
                style={{ 
                  '--service-color': service.color,
                  '--service-gradient': service.gradient 
                }}
              >
                <div className="card-background"></div>
                <div className="card-content">
                  <div className="service-icon" style={{ background: service.gradient }}>
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-short-desc">{service.shortDescription}</p>
                  
                  <div className="card-footer">
                    <button 
                      className="learn-more-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveService(index);
                        // Scroll to the service details section
                        const serviceDetailsSection = document.querySelector('.service-details-section');
                        if (serviceDetailsSection) {
                          serviceDetailsSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }}
                    >
                      <span>Learn More</span>
                      <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details-section">
        <div className="container">
          <div className="service-details">
            <div className="details-content">
              <div className="service-info">
                <div className="service-badge">
                  <span className="badge-icon">{services[activeService].icon}</span>
                  <span>Featured Service</span>
                </div>
                <h2>{services[activeService].title}</h2>
                <p>{services[activeService].description}</p>
                
                <div className="service-highlights">
                  <h4>Key Features</h4>
                  <div className="features-grid">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span style={{
                          display: 'inline-block',
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#10b981',
                          borderRadius: '50%',
                          marginRight: '12px',
                          marginTop: '8px',
                          flexShrink: 0
                        }}></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="technologies">
                  <h4>Technologies We Use</h4>
                  <div className="tech-tags">
                    {services[activeService].technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="service-visual">
                <div className="visual-container">
                  <div 
                    className="service-showcase"
                    style={{ background: services[activeService].gradient }}
                  >
                    <div className="showcase-icon">
                      {services[activeService].icon}
                    </div>
                    <div className="showcase-overlay">
                      <div className="overlay-content">
                        <div className="animated-text">
                          <h3>{services[activeService].overlayText}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Development Process</h2>
            <p>A proven methodology that ensures successful project delivery</p>
          </div>
          
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-connector"></div>
                <div className="step-content">
                  <div className="step-number">{step.step}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Commented out as requested
      <section className="services-CTA">
        <div className="CTA-background">
          <div className="CTA-pattern"></div>
        </div>
        <div className="container">
          <div className="CTA-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how our innovative solutions can drive your success</p>
            <div className="CTA-buttons">
              
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;