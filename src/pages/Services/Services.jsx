import React, { useState, useRef } from 'react';
import { 
  Brain, 
  Activity, 
  Settings, 
  Monitor, 
  Radio, 
  Lightbulb,
  Search,         
  FileText,       
  Code2,          
  CheckCircle2,   
  Rocket,         
  Headphones,     
  ArrowRight,
  Zap,
  Layers,
  Cpu,
  Globe,
  Database,       
  Network,        
  Share2,
  Wifi,           
  Smartphone,     
  Server,         
  Compass,        
  Crosshair       
} from 'lucide-react';

import './Services.css';
import './ServicesHero.css';

// Local assets
import bioImg from '../../assets/effective-solutions.webp';


const Services = () => {
  const [activeService, setActiveService] = useState(0);
  
  // Ref for the details section to enable scrolling
  const detailsSectionRef = useRef(null);

  const services = [
    {
      id: 'ai-ml', 
      title: 'AI & Machine Learning',
      shortDescription: 'Intelligent automation and predictive analytics',
      description: 'Transform your business with cutting-edge AI solutions that automate processes, predict outcomes, and unlock insights from your data. We build neural networks that learn from your business patterns.',
      icon: <Brain size={32} />,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Automation',
        'Deep Learning Solutions'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn'],
    },
    {
      id: 'biomedical',
      title: 'Biomedical Technology',
      shortDescription: 'Healthcare innovation and medical devices',
      description: 'Revolutionary healthcare technologies that save lives through AI-powered diagnostics and non-invasive monitoring systems.',
      icon: <Activity size={32} />,
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
      features: [
        'AI-driven Eye Screening (OPHTHA)',
        'Vascular Health Monitoring (JENDO)',
        'Non-invasive Diagnostic Tools',
        'Medical Device Development',
        'Healthcare Analytics',
        'FDA-approved Technologies'
      ],
      technologies: ['Medical AI', 'IoT Sensors', 'Cloud Computing', 'Mobile Apps'],
    },
    {
      id: 'iot',
      title: 'IoT & Smart Systems',
      shortDescription: 'Connected devices and intelligent automation',
      description: 'End-to-end IoT platforms that connect devices, analyze data, and provide intelligent insights for Industry 4.0 transformation.',
      icon: <Settings size={32} />,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      features: [
        'ANANKE IoT Platform',
        'Real-time Data Analytics',
        'Device Management Systems',
        'Industrial Automation',
        'Smart Monitoring',
        'Edge Computing Solutions'
      ],
      technologies: ['Arduino', 'Raspberry Pi', 'AWS IoT', 'Azure IoT'],
    },
    {
      id: 'software',
      title: 'Enterprise Software',
      shortDescription: 'Custom software and digital transformation',
      description: 'Custom software solutions that streamline operations, enhance productivity, and drive digital transformation across industries.',
      icon: <Monitor size={32} />,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      features: [
        'Web Applications',
        'Mobile App Development',
        'E-commerce Platforms',
        'Management Systems',
        'Cloud Solutions',
        'API Development'
      ],
      technologies: ['React', 'Node.js', 'Python', 'MongoDB'],
    },
    {
      id: 'myndrone',
      title: 'MYNDRONE Technology',
      shortDescription: 'Brain-computer interface and neural control',
      description: 'Mind-controlled drone technology using EEG signals for stress reduction and human health improvement in Industry 4.0 applications.',
      icon: <Radio size={32} />,
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80',
      features: [
        'EEG-controlled Systems',
        'Brain-Computer Interface',
        'Stress Reduction Technology',
        'Meditation Applications',
        'Neural Signal Processing',
        'Wellness Monitoring'
      ],
      technologies: ['EEG Sensors', 'Signal Processing', 'Machine Learning', '5G'],
    },
    {
      id: 'consulting',
      title: 'Technology Consulting',
      shortDescription: 'Strategic guidance and technical expertise',
      description: 'Expert consultation services to help you navigate digital transformation, choose the right technologies, and implement best practices.',
      icon: <Lightbulb size={32} />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      features: [
        'Digital Strategy',
        'Technology Assessment', 
        'Implementation Planning',
        'System Integration',
        'Performance Optimization',
        'Training & Support'
      ],
      technologies: ['Cloud Platforms', 'DevOps', 'Security', 'Analytics'],
    },
  ];

  const industries = [
    'Healthcare', 'Wellness', 'eCommerce', 'Fintech', 
    'Restaurants & FMCG', 'Advertising', 'Gaming', 'Education'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your requirements and business goals',
      icon: <Search size={24} />
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Strategic roadmap and technical architecture',
      icon: <FileText size={24} />
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular updates',
      icon: <Code2 size={24} />
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Rigorous quality assurance and optimization',
      icon: <CheckCircle2 size={24} />
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Seamless launch and go-live support',
      icon: <Rocket size={24} />
    },
    {
      step: '06',
      title: 'Support',
      description: 'Ongoing maintenance and enhancement',
      icon: <Headphones size={24} />
    }
  ];

  // Function to handle click: Set active service AND Scroll to details
  const handleServiceClick = (index) => {
    setActiveService(index);
    // Smooth scroll to the details section
    if (detailsSectionRef.current) {
      detailsSectionRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' // Centers the section in the viewport
      });
    }
  };

  // --- RENDER VISUALS FUNCTION (Unchanged) ---
  const renderServiceVisual = (service) => {
    switch (service.id) {
      case 'ai-ml':
        return (
          <div className="visual-card ai-visual-card">
            <div className="ai-ring ring-outer"></div>
            <div className="ai-ring ring-inner"></div>
            <div className="ai-node node-1"><Database size={16} /></div>
            <div className="ai-node node-2"><Network size={16} /></div>
            <div className="ai-node node-3"><Share2 size={16} /></div>
            <div className="core-container">
              <div className="core-pulse brand-pulse"></div>
              <div className="icon-wrapper icon-float">{service.icon}</div>
            </div>
            <div className="visual-overlay">
              <h3>Neural Intelligence</h3>
              <span>Processing Data Models...</span>
            </div>
          </div>
        );
      case 'biomedical':
        return (
          <div className="visual-card bio-visual-card">
            <div className="radar-sweep"></div>
            <div className="bio-node bio-1"><Crosshair size={16} /></div>
            <div className="bio-node bio-2"><Activity size={16} /></div>
            <div className="core-container">
              <div className="core-pulse red-pulse"></div>
              <div className="icon-wrapper icon-heartbeat">{service.icon}</div>
            </div>
            <div className="visual-overlay">
              <h3>Vital Innovation</h3>
              <span>Monitoring Systems Active</span>
            </div>
          </div>
        );
      case 'iot':
        return (
          <div className="visual-card iot-visual-card">
            <div className="orbit-container">
              <div className="orbit-item orbit-1"><Wifi size={14} /></div>
              <div className="orbit-item orbit-2"><Smartphone size={14} /></div>
              <div className="orbit-item orbit-3"><Cpu size={14} /></div>
            </div>
            <div className="core-container">
              <div className="core-pulse cyan-pulse"></div>
              <div className="icon-wrapper icon-spin-slow">{service.icon}</div>
            </div>
            <div className="visual-overlay">
              <h3>Connected Ecosystem</h3>
              <span>Synchronizing Devices...</span>
            </div>
          </div>
        );
      case 'software':
        return (
          <div className="visual-card software-visual-card">
            <div className="stack-layer layer-1"></div>
            <div className="stack-layer layer-2"></div>
            <div className="stack-layer layer-3"></div>
            <div className="code-node code-1"><Code2 size={16} /></div>
            <div className="code-node code-2"><Server size={16} /></div>
            <div className="core-container">
              <div className="core-pulse blue-pulse"></div>
              <div className="icon-wrapper icon-float">{service.icon}</div>
            </div>
            <div className="visual-overlay">
              <h3>Digital Foundations</h3>
              <span>Building Scalable Solutions</span>
            </div>
          </div>
        );
      case 'myndrone':
        return (
          <div className="visual-card myndrone-visual-card">
            <div className="wave-signal signal-1"></div>
            <div className="wave-signal signal-2"></div>
            <div className="wave-signal signal-3"></div>
            <div className="core-container">
              <div className="core-pulse purple-pulse"></div>
              <div className="icon-wrapper icon-float">{service.icon}</div>
            </div>
            <div className="visual-overlay">
              <h3>Neural Interface</h3>
              <span>Acquiring EEG Signals...</span>
            </div>
          </div>
        );
      case 'consulting':
        return (
          <div className="visual-card consulting-visual-card">
            <div className="strategy-orbit">
               <div className="strategy-node strat-1"><Search size={14} /></div>
               <div className="strategy-node strat-2"><Compass size={14} /></div>
            </div>
            <div className="core-container">
              <div className="core-pulse yellow-pulse intense"></div>
              <div className="icon-wrapper icon-float">{service.icon}</div>
            </div>
            <div className="visual-overlay">
              <h3>Strategic Vision</h3>
              <span>Illuminating Pathways</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="visual-card">
            <div className="visual-icon-large">{service.icon}</div>
            <div className="visual-overlay">
              <h3>{service.title}</h3>
              <span>Excellence in Action</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="services-page">
      
      {/* --- HERO SECTION --- */}
      <section className="about-hero">
        <div className="blob blob-blue"></div>
        <div className="blob blob-pink"></div>
        
        <div className="container hero-container">
          <div className="hero-text-area">
            {/* <div className="hero-badge">OUR EXPERTISE</div> */}
            <h1 className="hero-heading">
              Your Vision, Our Tech<br/>
              <span className="gradient-text">Precision & Partnership</span>
            </h1>
            <p className="hero-subtext">
              We combine deep industry expertise with cutting-edge technology to deliver solutions that drive real-world impact.
            </p>
            
            <div className="hero-trust-indicators">
              <div className="trust-item"><Cpu size={20} /><span>Advanced Tech</span></div>
              <div className="trust-item"><Globe size={20} /><span>Global Standards</span></div>
              <div className="trust-item"><Zap size={20} /><span>Rapid Delivery</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES SECTION --- */}
      <section className="industries-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">Industries We Serve</h2>
            <p className="section-subheading">Expertise across diverse sectors</p>
          </div>
          
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <h3>{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID (UPDATED: NO ICONS, PROFESSIONAL LOOK) --- */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">Core Services</h2>
            <p className="section-subheading">Comprehensive technology solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card ${activeService === index ? 'active' : ''}`}
                onClick={() => handleServiceClick(index)}
              >
                {service.image && (
                  <img className="service-card-image" src={service.image} alt={service.title} />
                )}

                <div className="service-content-wrapper">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-short-desc">{service.shortDescription}</p>
                  <p className="service-excerpt">{service.description.slice(0,120)}{service.description.length>120? '...': ''}</p>

                  <div className="service-tags">
                    {service.technologies.slice(0,3).map((tech, i) => (
                      <span key={i} className="service-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="service-arrow-row">
                   <span className="learn-more-text">Explore</span>
                   <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACTIVE SERVICE DETAILS (SCROLL TARGET) --- */}
      {/* Added ref={detailsSectionRef} here */}
      <section className="service-details-section" ref={detailsSectionRef}>
        <div className="container">
          <div className="details-container">
            <div className="details-content">
              <div className="details-text">
                <div className="service-label"><Layers size={16} /> Featured Service</div>
                <h2>{services[activeService].title}</h2>
                <p className="main-desc">{services[activeService].description}</p>
                <div className="features-block">
                  <h4>Key Features</h4>
                  <div className="features-list">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <div className="feature-bullet"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tech-block">
                  <h4>Technologies</h4>
                  <div className="tech-tags">
                    {services[activeService].technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="details-visual">
                {renderServiceVisual(services[activeService])}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEVELOPMENT PROCESS SECTION --- */}
      <section className="process-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">Our Process</h2>
            <p className="section-subheading">Proven methodology for successful delivery</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <span className="process-number">{step.step}</span>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-text">
              <h2>Ready to Transform Your Business?</h2>
              <p>Let's discuss how our innovative solutions can drive your success.</p>
            </div>
            <div className="cta-actions">
              <button className="btn-primary">Get a Quote</button>
              <button className="btn-secondary">View Portfolio</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;