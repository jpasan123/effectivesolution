import React from 'react';
import { 
  Award, 
  Zap, 
  Microscope, 
  Brain, 
  Target, 
  Globe, 
  Heart,
  Shield, 
  CheckCircle,
  Network,
  Database,
  Camera,
  ArrowUpRight
} from 'lucide-react';
import './FeaturedProjects.css';

// Import your images
import jendo from './jendo.jpg';
import myndrone from './mind-drone.png';
import ophtha from './optha.jpg';
import datamanagement from './slamds.jpg';
import armyIMG from './military-geographic.png'; 
import networkpng from './planning-management.png'; 

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "JENDO",
      subtitle: "Vascular Health Innovation",
      description: "Revolutionary non-invasive cardiovascular health monitoring technology that analyzes endothelial dysfunction to predict future cardiovascular risks.",
      image: jendo,
      tags: ["AI", "MedTech", "Patented"],
      highlights: [
        { icon: Award, text: "Patented in USA, Japan & Sri Lanka" },
        { icon: Zap, text: "Cloud-based AI Processing" },
        { icon: Microscope, text: "PPG & Temperature Analysis" }
      ]
    },
    {
      id: 2,
      title: "SLADMS",
      subtitle: "National Accident Data System",
      description: "National road traffic accident monitoring system developed in collaboration with WHO and Sri Lanka Police to establish comprehensive reporting mechanisms.",
      image: datamanagement,
      tags: ["WHO", "Government", "Big Data"],
      highlights: [
        { icon: Award, text: "First Private-WHO Partnership" },
        { icon: Shield, text: "Government-Grade Security" },
        { icon: CheckCircle, text: "Continuous WHO Funding" }
      ]
    },
    {
      id: 3,
      title: "OPHTHA",
      subtitle: "AI Eye Screening",
      description: "AI-driven diabetes retinopathy detection system using fundus images for clinical-level diagnostics and early intervention.",
      image: ophtha,
      tags: ["Computer Vision", "Healthcare", "AI"],
      highlights: [
        { icon: Globe, text: "Japan METI Funded" },
        { icon: Heart, text: "Clinical Grade Accuracy" }
      ]
    },
    {
      id: 4,
      title: "MYNDRONE",
      subtitle: "EEG Controlled UAV",
      description: "Mind-controlled drone technology using EEG signals for stress reduction and human health improvement in Industry 4.0 applications.",
      image: myndrone,
      tags: ["BCI", "IoT", "Robotics"],
      highlights: [
        { icon: Brain, text: "Brain-Computer Interface" },
        { icon: Target, text: "Stress Reduction Focus" }
      ]
    },
    {
      id: 5,
      title: "Military GIS",
      subtitle: "Defense Intelligence System",
      description: "Advanced GIS solution for Sri Lanka Army enabling military training and intelligent mission planning based on British military standards.",
      image: armyIMG,
      tags: ["Defense", "GIS", "Security"],
      highlights: [
        { icon: Award, text: "British Military Standards" },
        { icon: Zap, text: "Mandatory Soldier Training" }
      ]
    },
    {
      id: 6,
      title: "ANTOMS",
      subtitle: "Network Operations",
      description: "Cloud-based system and mobile application for fiber operation planning, execution, and monitoring in telecommunications infrastructure.",
      image: networkpng,
      tags: ["Telecom", "Cloud", "Mobile"],
      highlights: [
        { icon: Network, text: "Fiber-to-Home Tech" },
        { icon: Database, text: "1.5M+ Images Processed" },
        { icon: Camera, text: "Real-time Monitoring" }
      ]
    }
  ];

  return (
    <section className="featured-projects-section">
      
      {/* Liquid Background Elements */}
      <div className="fp-background-blobs">
        <div className="fp-blob fp-blob-1"></div>
        <div className="fp-blob fp-blob-2"></div>
        <div className="fp-blob fp-blob-3"></div>
      </div>

      <div className="fp-container">
        
        {/* Header - Clean & Minimal */}
        <div className="fp-header">
          <span className="fp-kicker">Our Work</span>
          <h2 className="fp-title">Featured Projects</h2>
          <p className="fp-subtitle">
            Pioneering solutions built on <span className="fp-text-gradient">intelligent innovation.</span>
          </p>
        </div>
        
        {/* Glass Grid */}
        <div className="fp-grid">
          {projects.map((project) => (
            <div key={project.id} className="fp-card">
              
              {/* Image Area */}
              <div className="fp-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="fp-image"
                />
              </div>

              {/* Glass Content Area */}
              <div className="fp-content">
                <div className="fp-meta">
                  <div className="fp-title-group">
                    <h3 className="fp-project-title">{project.title}</h3>
                    <span className="fp-project-subtitle">{project.subtitle}</span>
                  </div>
                  <div className="fp-tags">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="fp-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <p className="fp-description">{project.description}</p>

                <div className="fp-divider"></div>

                <div className="fp-highlights">
                  {project.highlights.map((highlight, index) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={index} className="fp-highlight-item">
                        <div className="fp-icon-box">
                          <Icon size={14} />
                        </div>
                        <span>{highlight.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;