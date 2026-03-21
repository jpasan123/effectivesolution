import React from 'react';
import { 
  Award, 
  Zap, 
  Users, 
  Shield, 
  Box, 
  Star 
} from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: Award,
      title: "Proven Track Record",
      description: "Successfully delivered 15+ enterprise projects with global patents and recognition from international organizations."
    },
    {
      id: 2,
      icon: Zap,
      title: "Cutting-Edge Innovation",
      description: "Pioneering Industry 4.0 solutions with expertise in AI, IoT, Biomedical technology, and advanced software."
    },
    {
      id: 3,
      icon: Users,
      title: "Expert Team",
      description: "Passionate Sri Lankan innovators collaborating with university research centers and investing in master degree programs."
    },
    {
      id: 4,
      icon: Shield,
      title: "Trusted by Leaders",
      description: "First private organization in Sri Lanka to partner with WHO, trusted by government institutions and global corporations."
    },
    {
      id: 5,
      icon: Box,
      title: "End-to-End Solutions",
      description: "Complete system design, development, implementation, and ongoing support with proprietary IoT platform ANANKE."
    },
    {
      id: 6,
      icon: Star,
      title: "International Standards",
      description: "Developed solutions meeting British military standards, Japanese industry requirements, and international healthcare protocols."
    }
  ];

  return (
    <section className="wcu-section">
      {/* Decorative Blur Orbs for extra 'Liquid' feel */}
      <div className="wcu-orb wcu-orb-1"></div>
      <div className="wcu-orb wcu-orb-2"></div>

      <div className="wcu-container">
        
        {/* --- Header --- */}
        <div className="wcu-header">
          <span className="wcu-pre-title">Our Value</span>
          <h2 className="wcu-title">
            Why Choose <span className="wcu-highlight">Effective Solutions</span>
          </h2>
          <p className="wcu-subtitle">
            Leading the future of technology with proven expertise and innovation
          </p>
        </div>
        
        {/* --- Grid --- */}
        <div className="wcu-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="wcu-card">
                <div className="wcu-icon-wrapper">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="wcu-card-title">{feature.title}</h3>
                <p className="wcu-card-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;