import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', count: 25 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8 },
    { id: 'biomedical', name: 'Biomedical Tech', count: 5 },
    { id: 'iot', name: 'IoT & Smart Systems', count: 7 },
    { id: 'software', name: 'Enterprise Software', count: 5 }
  ];

  const projects = [
    {
      id: 1,
      title: 'JENDO - Vascular Health Monitor',
      category: 'biomedical',
      description: 'AI-powered non-invasive vascular health monitoring system using advanced signal processing.',
      image: '/images/projects/jendo.jpg',
      technologies: ['AI/ML', 'Signal Processing', 'IoT', 'Mobile App'],
      status: 'Live',
      client: 'Healthcare Provider',
      duration: '8 months',
      team: '6 experts',
      impact: '95% accuracy in early detection',
      features: [
        'Real-time vascular health monitoring',
        'AI-driven predictive analytics',
        'Non-invasive measurement technology',
        'Mobile app integration',
        'Clinical dashboard'
      ],
      awards: ['Best Innovation Award 2023', 'Healthcare Tech Excellence'],
      link: '#'
    },
    {
      id: 2,
      title: 'OPHTHA - AI Eye Screening',
      category: 'biomedical',
      description: 'Revolutionary AI system for diabetic retinopathy screening and early eye disease detection.',
      image: '/images/projects/ophtha.jpg',
      technologies: ['Computer Vision', 'Deep Learning', 'Medical AI', 'Cloud'],
      status: 'Live',
      client: 'Medical Institute',
      duration: '12 months',
      team: '8 experts',
      impact: '90% reduction in screening time',
      features: [
        'Automated diabetic retinopathy detection',
        'Advanced computer vision algorithms',
        'Cloud-based processing',
        'Integration with medical devices',
        'Comprehensive reporting system'
      ],
      awards: ['Medical Innovation Award', 'AI Excellence Recognition'],
      link: '#'
    },
    {
      id: 3,
      title: 'ANANKE - IoT Platform',
      category: 'iot',
      description: 'Comprehensive IoT platform for industrial automation and smart city applications.',
      image: '/images/projects/ananke.jpg',
      technologies: ['IoT', 'Edge Computing', 'Analytics', 'Cloud'],
      status: 'Live',
      client: 'Smart City Initiative',
      duration: '10 months',
      team: '10 experts',
      impact: '40% efficiency improvement',
      features: [
        'Real-time device management',
        'Edge computing capabilities',
        'Advanced analytics dashboard',
        'Scalable cloud infrastructure',
        'API integration framework'
      ],
      awards: ['IoT Innovation Award', 'Smart City Excellence'],
      link: '#'
    },
    {
      id: 4,
      title: 'MYNDRONE - Brain-Computer Interface',
      category: 'ai-ml',
      description: 'Mind-controlled drone technology using EEG signals for therapeutic applications.',
      image: '/images/projects/myndrone.jpg',
      technologies: ['EEG', 'Machine Learning', 'Drone Control', 'Neurotechnology'],
      status: 'Beta',
      client: 'Research Institution',
      duration: '15 months',
      team: '12 experts',
      impact: '80% stress reduction in patients',
      features: [
        'EEG signal processing',
        'Real-time brain activity monitoring',
        'Drone control interface',
        'Therapeutic application framework',
        'Data visualization tools'
      ],
      awards: ['Innovation Excellence 2024', 'Neurotechnology Pioneer'],
      link: '#'
    },
    {
      id: 5,
      title: 'Smart Agriculture System',
      category: 'iot',
      description: 'IoT-based precision agriculture solution for crop monitoring and yield optimization.',
      image: '/images/projects/agriculture.jpg',
      technologies: ['IoT Sensors', 'ML Analytics', 'Mobile App', 'Cloud'],
      status: 'Live',
      client: 'Agricultural Cooperative',
      duration: '6 months',
      team: '7 experts',
      impact: '30% increase in crop yield',
      features: [
        'Soil moisture monitoring',
        'Weather prediction integration',
        'Automated irrigation control',
        'Crop health analytics',
        'Farmer mobile application'
      ],
      awards: ['AgTech Innovation Award'],
      link: '#'
    },
    {
      id: 6,
      title: 'E-Commerce Analytics Platform',
      category: 'software',
      description: 'Advanced analytics platform for e-commerce businesses with AI-powered insights.',
      image: '/images/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'Python', 'AI Analytics'],
      status: 'Live',
      client: 'E-commerce Company',
      duration: '5 months',
      team: '5 experts',
      impact: '25% increase in conversion rates',
      features: [
        'Real-time sales analytics',
        'Customer behavior insights',
        'Inventory optimization',
        'Predictive analytics',
        'Custom dashboard creation'
      ],
      awards: ['Digital Excellence Award'],
      link: '#'
    },
    {
      id: 7,
      title: 'AI Chatbot for Healthcare',
      category: 'ai-ml',
      description: 'Intelligent chatbot for patient support and medical query assistance.',
      image: '/images/projects/chatbot.jpg',
      technologies: ['NLP', 'Machine Learning', 'React', 'Python'],
      status: 'Live',
      client: 'Healthcare Network',
      duration: '4 months',
      team: '6 experts',
      impact: '60% reduction in support calls',
      features: [
        'Natural language processing',
        'Medical knowledge base',
        'Multi-language support',
        'Appointment scheduling',
        'Symptom assessment tool'
      ],
      awards: ['Healthcare AI Award'],
      link: '#'
    },
    {
      id: 8,
      title: 'Supply Chain Management System',
      category: 'software',
      description: 'Comprehensive supply chain management solution with real-time tracking.',
      image: '/images/projects/supply-chain.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'IoT'],
      status: 'Live',
      client: 'Manufacturing Company',
      duration: '8 months',
      team: '9 experts',
      impact: '35% cost reduction',
      features: [
        'Real-time inventory tracking',
        'Supplier management portal',
        'Predictive maintenance',
        'Quality control system',
        'Analytics and reporting'
      ],
      awards: ['Supply Chain Innovation'],
      link: '#'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="projects-page">
      {/* Hero Section - Using home page hero styles */}
      <section className="heroContainer">
        {/* Animated Background Elements */}
        <div className="backgroundElements">
          <div className="gridPattern"></div>
          <div className="bg-element bg-element-1"></div>
          <div className="bg-element bg-element-2"></div>
          <div className="bg-element bg-element-3"></div>
        </div>

        <div className="heroContent">
          <div className="content-wrapper">
            {/* Left Content */}
            <div className="container">
          <div className="herocontent">
            <h2 className="hero-title">
              Building Trust Through Technology – <span className="title-gradient">Simplifying Tomorrow’s Challenges Today.</span><br />
             
            </h2>
            <p className="herodescription">
              Transforming ideas into digital reality through cutting-edge technology and innovation
            </p>
            
            {/* Scroll indicator */}
            <div className="scroll-indicator">
              <div className="scroll-mouse">
                <div className="scroll-wheel"></div>
              </div>
            </div>
          </div>
        </div>
       </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="categorySection">
        <div className="container">
          <div className="categorycontent">
            <h2>Project Categories</h2>
            <p>Explore our diverse portfolio across different technology domains</p>
            <div className="categories-grid">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`categoryCard ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="categoryInfo">
                    <h3>{category.name}</h3>
                    <span className="project-count">{category.count} Projects</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="projects-Grid-Section">
        <div className="container">
          <div className="section-Header">
            <h2>Featured Projects</h2>
            <p>Innovative solutions that have made a real impact</p>
          </div>
          
          <div className="projects-Grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="project-Card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-Image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-Overlay">
                    <div className="project-Status">
                      <span className={`status-badge ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="project-actions">
                      <button className="view-project-btn">
                        <span>View Project</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="projectContent">
                  <h3 className="project-Title">{project.title}</h3>
                  <p className="projectdescription">{project.description}</p>
                  
                  <div className="project-meta">
                    <div className="meta-item">
                      <span className="meta-label">Client</span>
                      <span className="meta-value">{project.client}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Duration</span>
                      <span className="meta-value">{project.duration}</span>
                    </div>
                  </div>
                  
                  <div className="project_technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="projectImpact">
                    <div className="impactLabel">Key Impact:</div>
                    <div className="impactValue">{project.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="projectModalOverlay" onClick={() => setSelectedProject(null)}>
          <div className="projectModal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modalClose"
              onClick={() => setSelectedProject(null)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2"/>
              </svg>
            </button>
            
            <div className="modal-content">
              <div className="modal-header">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="modal-info">
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.description}</p>
                  <div className="modal-badges">
                    <span className={`status-badge ${selectedProject.status.toLowerCase()}`}>
                      {selectedProject.status}
                    </span>
                    {selectedProject.awards.map((award, index) => (
                      <span key={index} className="award-badge">{award}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="modal-details">
                <div className="detail-section">
                  <h4>Project Details</h4>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-label">Client:</span>
                      <span className="detail-value">{selectedProject.client}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{selectedProject.duration}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Team Size:</span>
                      <span className="detail-value">{selectedProject.team}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Impact:</span>
                      <span className="detail-value">{selectedProject.impact}</span>
                    </div>
                  </div>
                </div>
                
                <div className="detail-section">
                  <h4>Key Features</h4>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-section">
                  <h4>Technologies Used</h4>
                  <div className="technologies-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="modal-actions">
                <button className="btn-primary">
                  <span>View Live Project</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeWidth="2"/>
                  </svg>
                </button>
                <button className="btn-secondary">
                  <span>Start Similar Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Next Project?</h2>
            <p>Let's bring your innovative ideas to life with cutting-edge technology</p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <span>Start Your Project</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">
                <span>Schedule Consultation</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;