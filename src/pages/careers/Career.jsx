import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  CheckCircle,
  Briefcase,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import './Career.css';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('values');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const jobsRef = useRef(null);

  const scrollToJobs = () => {
    jobsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- EFFECTIVE SOLUTIONS CORE VALUES ---
  const values = [
    {
      title: "Radical Innovation",
      desc: "We don't just write code; we solve complex problems. We bridge the gap between abstract ideas and functional digital reality."
    },
    {
      title: "Uncompromising Quality",
      desc: "Quality is our yardstick. We believe in building robust, scalable, and secure solutions that stand the test of time."
    },
    {
      title: "Transparent Communication",
      desc: "We value honesty over comfort. We keep our clients and our team in the loop with clear, direct, and respectful communication."
    },
    {
      title: "End-User Empathy",
      desc: "We build for humans. Every line of code is written with the final user's experience and well-being in mind."
    },
    {
      title: "Disciplined Craftsmanship",
      desc: "We respect the craft of engineering. We sweat the small details because we know they make the big difference."
    },
    {
      title: "Ownership & Accountability",
      desc: "We don't make excuses. We take full responsibility for our work, our mistakes, and our successes."
    }
  ];

  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Hybrid",
      type: "Full-time"
    },
    {
      id: 3,
      title: "Data Scientist (AI/ML)",
      department: "Data & AI",
      location: "London, UK",
      type: "Full-time"
    },
    {
      id: 4,
      title: "Product Project Manager",
      department: "Product",
      location: "Colombo, Sri Lanka",
      type: "Full-time"
    },
    {
      id: 5,
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time"
    }
  ];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobListings 
    : jobListings.filter(job => job.department === selectedDepartment);

  const handleApply = (job) => {
    const subject = `Application for ${job.title}`;
    window.location.href = `mailto:careers@effectivesolutions.lk?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div className="careers-page">
      
      {/* --- MASTER GRADIENT WRAPPER (Hero + Values) --- */}
      <div className="gradient-wrapper">
        
        {/* HERO SECTION */}
        <section className="careers-hero">
          <div className="container hero-row">
            {/* Title on Left */}
            <h1 className="hero-title">
              Shape the future of <br />
              <span>Technology.</span>
            </h1>
            
            {/* Badge on Right */}
            <div className="hero-badge">Careers at Effective Solutions</div>
          </div>
        </section>

        {/* VALUES / SIDEBAR SECTION */}
        <section className="values-section">
          <div className="container">
            <div className="values-layout">
              
              {/* Left Sidebar Menu */}
              <div className="values-sidebar">
                <ul className="sidebar-menu">
                  <li 
                    className={activeTab === 'values' ? 'active' : ''} 
                    onClick={() => setActiveTab('values')}
                  >
                    <div className="dot"></div> Our values
                  </li>
                  <li 
                    className={activeTab === 'process' ? 'active' : ''} 
                    onClick={() => setActiveTab('process')}
                  >
                    <div className="dot"></div> Our hiring process
                  </li>
                  <li 
                    className={activeTab === 'perks' ? 'active' : ''} 
                    onClick={() => setActiveTab('perks')}
                  >
                    <div className="dot"></div> Work perks
                  </li>
                </ul>

                <button className="view-jobs-btn" onClick={scrollToJobs}>
                  View open positions <ArrowRight size={18} />
                </button>
              </div>

              {/* Right Content Grid */}
              <div className="values-content">
                {/* Values view */}
                {activeTab === 'values' && (
                  <div className="values-grid">
                    {values.map((val, index) => (
                      <div key={index} className="value-item">
                        <h3>{val.title}</h3>
                        <p>{val.desc}</p>
                        <div className="dashed-line"></div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Hiring process view */}
                {activeTab === 'process' && (
                  <div className="process-content">
                    <ol className="process-list">
                      <li className="process-step">
                        <div className="step-number">1</div>
                        <div className="step-body">
                          <h4>Send us your application</h4>
                          <p>Upload your CV through the form provided. We’re an equal opportunity employer and are committed to creating an inclusive environment for everyone.</p>
                        </div>
                      </li>

                      <li className="process-step">
                        <div className="step-number">2</div>
                        <div className="step-body">
                          <h4>We shortlist applications</h4>
                          <p>If shortlisted, we will contact you to schedule two rounds of interviews. If you’re not shortlisted, we will still keep your application and match it with future openings.</p>
                        </div>
                      </li>

                      <li className="process-step">
                        <div className="step-number">3</div>
                        <div className="step-body">
                          <h4>Let’s talk</h4>
                          <p>Attend two rounds of interviews where we'll evaluate your skills and fit with our team.</p>
                        </div>
                      </li>

                      <li className="process-step">
                        <div className="step-number">4</div>
                        <div className="step-body">
                          <h4>Join us</h4>
                          <p>You will receive an offer of employment. Once accepted, you officially become part of the Effective Solutions team.</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                )}

                {/* Work perks view */}
                {activeTab === 'perks' && (
                  <div className="perks-content">
                    <ul className="perks-list">
                      <li>Competitive salary and benefits</li>
                      <li>Flexible working arrangements</li>
                      <li>Learning & development budget</li>
                      <li>Health and wellbeing support</li>
                    </ul>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* --- OPEN POSITIONS SECTION (White Background) --- */}
      <section className="jobs-section" ref={jobsRef}>
        <div className="container">
          <h2 className="section-title">Open positions</h2>
          
          <div className="jobs-layout-grid">
            {/* Job Filter Sidebar */}
            <div className="jobs-sidebar">
              <span className="filter-label">Filter:</span>
              <div className="filter-buttons">
                <button 
                  className={`filter-btn ${selectedDepartment === 'All' ? 'active' : ''}`}
                  onClick={() => setSelectedDepartment('All')}
                >
                  All
                </button>
                <button 
                  className={`filter-btn ${selectedDepartment === 'Engineering' ? 'active' : ''}`}
                  onClick={() => setSelectedDepartment('Engineering')}
                >
                  Engineering
                </button>
                <button 
                  className={`filter-btn ${selectedDepartment === 'Design' ? 'active' : ''}`}
                  onClick={() => setSelectedDepartment('Design')}
                >
                  Design
                </button>
              </div>
            </div>

            {/* Job List */}
            <div className="jobs-list">
              {filteredJobs.map(job => (
                <div key={job.id} className="job-row">
                  <div className="job-info">
                    <h3>{job.title}</h3>
                    <span className="job-type">{job.type}</span>
                  </div>

                  <div className="job-actions">
                    <div className="job-location">{job.location}</div>
                    <button
                      className="apply-btn"
                      onClick={() => handleApply(job)}
                      aria-label={`Apply for ${job.title}`}
                    >
                      <span className="apply-text">Apply</span>
                      <span className="apply-icon"><ArrowUpRight size={14} /></span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="career-bottom-cta">
        <div className="container">
          <p className="footer-note">
            Don't see a fit? We are always looking for exceptional talent. <br/>
            Send your CV to <a href="mailto:careers@effectivesolutions.lk">careers@effectivesolutions.lk</a>
          </p>
        </div>
      </section>

    </div>
  );
};

export default Careers;