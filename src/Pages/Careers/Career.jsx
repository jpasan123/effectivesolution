import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Users, 
  Briefcase, 
  Search,
  Code,
  Palette,
  BarChart3,
  Target,
  Smartphone,
  Database
} from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const openPositionsRef = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      description: "Join our engineering team to build cutting-edge web applications that serve millions of users worldwide.",
      icon: <Code size={isMobile ? 20 : 24} />,
      color: "#3B82F6"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Tokyo, Japan",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description: "Create intuitive and beautiful user experiences for our healthcare technology solutions.",
      icon: <Palette size={isMobile ? 20 : 24} />,
      color: "#10B981"
    },
    {
      id: 3,
      title: "Data Scientist",
      department: "Data & AI",
      location: "London, England",
      type: "Full-time",
      experience: "3-6 years",
      skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
      description: "Develop AI models and analytics solutions that drive healthcare innovation.",
      icon: <BarChart3 size={isMobile ? 20 : 24} />,
      color: "#8B5CF6"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      experience: "2-5 years",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      description: "Build and maintain scalable infrastructure for our global applications.",
      icon: <Database size={isMobile ? 20 : 24} />,
      color: "#F59E0B"
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      experience: "4-7 years",
      skills: ["Product Strategy", "Analytics", "Agile", "Leadership"],
      description: "Lead product development for our innovative healthcare solutions.",
      icon: <Target size={isMobile ? 20 : 24} />,
      color: "#EF4444"
    },
    {
      id: 6,
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Tokyo, Japan",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["React Native", "iOS", "Android", "Firebase"],
      description: "Develop mobile applications that make healthcare accessible to everyone.",
      icon: <Smartphone size={isMobile ? 20 : 24} />,
      color: "#06B6D4"
    }
  ];

  const departments = ['All', 'Engineering', 'Design', 'Data & AI', 'Product'];

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesDepartment && matchesSearch;
  });

  const scrollToOpenPositions = () => {
    openPositionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Dynamic styles based on screen size
  const getResponsiveStyles = () => {
    const baseStyles = {
      careersPage: {
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: '1.6',
        color: '#1e40af',
      },

      // Hero Section
      heroContainer: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1f2937 0%, #1e3a8a 50%, #4338ca 100%)',
        position: 'relative',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      backgroundElements: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      },

      gridPattern: {
        position: 'absolute',
        inset: '0',
        backgroundImage: 
          'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: isMobile ? '30px 30px' : '50px 50px',
        animation: 'gridMove 20s linear infinite'
      },

      bgElement1: {
        position: 'absolute',
        borderRadius: '50%',
        mixBlendMode: 'multiply',
        filter: 'blur(40px)',
        opacity: 0.2,
        top: isMobile ? '3rem' : '5rem',
        left: isMobile ? '1rem' : '2.5rem',
        width: isMobile ? '4rem' : '8rem',
        height: isMobile ? '4rem' : '8rem',
        backgroundColor: '#3b82f6',
      },

      bgElement2: {
        position: 'absolute',
        borderRadius: '50%',
        mixBlendMode: 'multiply',
        filter: 'blur(40px)',
        opacity: 0.2,
        top: isMobile ? '6rem' : '10rem',
        right: isMobile ? '1rem' : '5rem',
        width: isMobile ? '6rem' : '12rem',
        height: isMobile ? '6rem' : '12rem',
        backgroundColor: '#8b5cf6',
      },

      bgElement3: {
        position: 'absolute',
        borderRadius: '50%',
        mixBlendMode: 'multiply',
        filter: 'blur(40px)',
        opacity: 0.2,
        bottom: isMobile ? '3rem' : '5rem',
        left: isMobile ? '20%' : '33.333333%',
        width: isMobile ? '5rem' : '10rem',
        height: isMobile ? '5rem' : '10rem',
        backgroundColor: '#6366f1',
      },

      heroContent: {
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: isMobile ? '2rem 1rem' : '2rem',
        width: '100%',
      },

      contentWrapper: {
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? '2rem' : '4rem',
        flexDirection: isMobile ? 'column' : 'row',
      },

      contentLeft: {
        flex: 1,
        maxWidth: isMobile ? '100%' : '800px',
        textAlign: 'center',
      },

      heroTitle: {
        fontSize: isMobile ? '2rem' : window.innerWidth <= 1024 ? '2.5rem' : '3.5rem',
        fontWeight: '900',
        color: 'white',
        marginBottom: isMobile ? '1.5rem' : '2rem',
        lineHeight: '1.1',
      },

      titleGradient: {
        background: 'linear-gradient(to right, #60a5fa, #a78bfa, #6366f1)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      },

      heroSubtitle: {
        fontSize: isMobile ? '1rem' : window.innerWidth <= 768 ? '1.125rem' : '1.25rem',
        color: '#dbeafe',
        marginBottom: isMobile ? '1.5rem' : '2rem',
        maxWidth: isMobile ? '100%' : '48rem',
        margin: '0 auto',
        lineHeight: '1.6',
        marginBottom: isMobile ? '1.5rem' : '2rem',
      },

      heroButtons: {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
      },

      heroPrimaryButton: {
        background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
        color: '#1e40af',
        padding: isMobile ? '1rem 1.5rem' : '1rem 2rem',
        margin: isMobile ? '10px 0' : '20px',
        borderRadius: '16px',
        fontWeight: '700',
        fontSize: isMobile ? '1rem' : '1.1rem',
        border: '2px solid rgba(59, 130, 246, 0.2)',
        boxShadow: '0 8px 25px rgba(30, 64, 175, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        outline: 'none',
        width: isMobile ? '100%' : 'auto',
        maxWidth: isMobile ? '300px' : 'none',
        justifyContent: 'center',
      },

      buttonIcon: {
        marginLeft: '0.5rem',
      },

      // Common Styles
      container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 1.5rem',
      },
      
      sectionHeader: {
        textAlign: 'center',
        marginBottom: isMobile ? '2rem' : '4rem',
      },
      
      sectionTitle: {
        fontSize: isMobile ? '1.75rem' : window.innerWidth <= 768 ? '2rem' : '2.5rem',
        fontWeight: '800',
        color: '#1e3a8a',
        marginBottom: '1rem',
      },
      
      sectionSubtitle: {
        fontSize: isMobile ? '1rem' : '1.25rem',
        color: '#2563eb',
        maxWidth: '48rem',
        margin: '0 auto',
        fontWeight: '500',
      },

      // Jobs Section
      jobsSection: {
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        padding: isMobile ? '3rem 0' : '5rem 0',
      },
      
      filters: {
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        border: '2px solid rgba(59, 130, 246, 0.15)',
        boxShadow: '0 12px 35px rgba(30, 64, 175, 0.12)',
        margin: isMobile ? '0 0.5rem 2rem 0.5rem' : '0 1.5rem 3rem 1.5rem',
        borderRadius: '20px',
        padding: isMobile ? '1rem' : '2rem',
        position: 'relative',
        overflow: 'hidden',
      },
      
      filtersGrid: {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : window.innerWidth <= 1024 ? '1fr' : '2fr 1fr 1fr',
        gap: isMobile ? '1rem' : '1.5rem',
        alignItems: 'center',
      },
      
      searchContainer: {
        position: 'relative',
      },
      
      searchIcon: {
        position: 'absolute',
        left: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#6b7280',
        zIndex: 10,
      },
      
      searchInput: {
        width: '100%',
        padding: isMobile ? '0.875rem 0.875rem 0.875rem 2.5rem' : '1rem 1rem 1rem 3rem',
        border: '2px solid rgba(59, 130, 246, 0.2)',
        borderRadius: '12px',
        fontSize: isMobile ? '0.875rem' : '1rem',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        color: '#1e40af',
        transition: 'all 0.3s ease',
        outline: 'none',
        boxSizing: 'border-box',
      },
      
      selectInput: {
        width: '100%',
        padding: isMobile ? '0.875rem' : '1rem',
        border: '2px solid rgba(59, 130, 246, 0.2)',
        borderRadius: '12px',
        fontSize: isMobile ? '0.875rem' : '1rem',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        color: '#1e40af',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        outline: 'none',
        boxSizing: 'border-box',
      },
      
      clearButton: {
        padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1e40af 100%)',
        color: '#ffffff',
        border: 'none',
        borderRadius: '14px',
        fontSize: isMobile ? '0.875rem' : '1rem',
        fontWeight: '700',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        outline: 'none',
        width: isMobile ? '100%' : 'auto',
      },
      
      jobsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '1.5rem' : '2rem',
        padding: isMobile ? '0 0.5rem' : '0 1.5rem',
      },
      
      jobCard: {
        background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
        border: '2px solid rgba(59, 130, 246, 0.12)',
        boxShadow: '0 12px 35px rgba(30, 64, 175, 0.1), 0 5px 15px rgba(30, 64, 175, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        borderRadius: isMobile ? '16px' : '24px',
        padding: isMobile ? '1.5rem 1rem' : window.innerWidth <= 768 ? '2rem 1.5rem' : '2.5rem',
        position: 'relative',
        overflow: 'hidden',
      },
      
      jobCardContent: {
        display: 'flex',
        gap: isMobile ? '1rem' : '2rem',
        alignItems: 'flex-start',
        flexDirection: isMobile || window.innerWidth <= 1024 ? 'column' : 'row',
      },
      
      jobIcon: {
        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
        padding: isMobile ? '1rem' : '1.5rem',
        borderRadius: isMobile ? '16px' : '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)',
        minWidth: isMobile ? '60px' : '80px',
        height: isMobile ? '60px' : '80px',
        flexShrink: 0,
        alignSelf: isMobile ? 'center' : 'flex-start',
      },
      
      jobDetails: {
        flexGrow: 1,
        width: '100%',
      },
      
      jobHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: isMobile ? '1rem' : '2rem',
        flexDirection: isMobile || window.innerWidth <= 1024 ? 'column' : 'row',
      },
      
      jobInfo: {
        flexGrow: 1,
        width: '100%',
      },
      
      jobTitle: {
        color: '#1e3a8a',
        fontWeight: '800',
        fontSize: isMobile ? '1.25rem' : window.innerWidth <= 768 ? '1.5rem' : '1.75rem',
        marginBottom: '1rem',
        lineHeight: '1.2',
      },
      
      jobMeta: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: isMobile ? '0.5rem' : '1rem',
        marginBottom: '1.5rem',
        fontSize: isMobile ? '0.8rem' : '0.95rem',
        fontWeight: '500',
        flexDirection: isMobile ? 'column' : 'row',
      },
      
      jobMetaItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'rgba(59, 130, 246, 0.08)',
        padding: isMobile ? '0.4rem 0.8rem' : '0.6rem 1rem',
        borderRadius: '10px',
        color: '#3b82f6',
        transition: 'all 0.3s ease',
        border: '1px solid rgba(59, 130, 246, 0.1)',
        fontSize: isMobile ? '0.8rem' : '0.95rem',
      },
      
      jobDescription: {
        color: '#2563eb',
        lineHeight: '1.7',
        fontSize: isMobile ? '0.9rem' : '1.1rem',
        marginBottom: '1.5rem',
        fontWeight: '400',
      },
      
      jobSkills: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: isMobile ? '0.5rem' : '0.75rem',
        marginBottom: isMobile ? '1.5rem' : '2rem',
      },
      
      skillTag: {
        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
        color: '#1e40af',
        fontWeight: '600',
        padding: isMobile ? '0.4rem 0.8rem' : '0.6rem 1.2rem',
        borderRadius: '20px',
        fontSize: isMobile ? '0.75rem' : '0.9rem',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
      },
      
      applyButtonContainer: {
        flexShrink: 0,
        display: 'flex',
        alignItems: 'flex-start',
        width: isMobile || window.innerWidth <= 1024 ? '100%' : 'auto',
      },
      
      applyButton: {
        background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
        color: '#ffffff',
        padding: isMobile ? '1rem 1.5rem' : '1rem 2rem',
        borderRadius: '16px',
        fontWeight: '700',
        fontSize: isMobile ? '0.9rem' : '1rem',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        cursor: 'pointer',
        boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        whiteSpace: 'nowrap',
        position: 'relative',
        overflow: 'hidden',
        outline: 'none',
        minWidth: isMobile ? 'auto' : '150px',
        width: isMobile || window.innerWidth <= 1024 ? '100%' : 'auto',
      },
      
      noJobs: {
        textAlign: 'center',
        padding: isMobile ? '2rem 1rem' : '4rem 2rem',
        color: '#3b82f6',
      },
      
      noJobsIcon: {
        margin: '0 auto 2rem',
        color: '#93c5fd',
      },
      
      noJobsTitle: {
        fontSize: isMobile ? '1.25rem' : '1.5rem',
        fontWeight: '600',
        color: '#1e40af',
        marginBottom: '1rem',
      },
      
      noJobsText: {
        color: '#6b7280',
        fontSize: isMobile ? '1rem' : '1.1rem',
        maxWidth: '400px',
        margin: '0 auto',
      },

      // Footer Section
      footerSection: {
        background: '#1e3a8a',
        color: 'white',
        padding: isMobile ? '3rem 0' : '5rem 0',
        textAlign: 'center',
      },

      footerContent: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 1.5rem',
      },

      footerTitle: {
        fontSize: isMobile ? '1.5rem' : window.innerWidth <= 768 ? '1.75rem' : '2rem',
        fontWeight: '700',
        marginBottom: '1rem',
      },

      footerText: {
        fontSize: isMobile ? '1rem' : window.innerWidth <= 768 ? '1.1rem' : '1.25rem',
        color: '#dbeafe',
        lineHeight: '1.6',
      },
    };

    return baseStyles;
  };

  const styles = getResponsiveStyles();

  return (
    <div style={styles.careersPage}>
      {/* Hero Section */}
      <section style={styles.heroContainer}>
        <div style={styles.backgroundElements}>
          <div style={styles.gridPattern}></div>
          <div style={styles.bgElement1}></div>
          <div style={styles.bgElement2}></div>
          <div style={styles.bgElement3}></div>
        </div>

        <div style={styles.heroContent}>
          <div style={styles.contentWrapper}>
            <div style={styles.contentLeft}>
              <h1 style={styles.heroTitle}>
                Join Our Mission to <span style={styles.titleGradient}>Transform Healthcare</span>
              </h1>
              <p style={styles.heroSubtitle}>
                Be part of a team that's revolutionizing healthcare technology and making a global impact. 
                Discover opportunities to grow, innovate, and create meaningful solutions.
              </p>
              <div style={styles.heroButtons}>
                <button 
                  style={styles.heroPrimaryButton}
                  onClick={scrollToOpenPositions}
                >
                  View Open Positions
                  <ArrowRight size={isMobile ? 18 : 20} style={styles.buttonIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section ref={openPositionsRef} style={styles.jobsSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Open Positions</h2>
            <p style={styles.sectionSubtitle}>Find your next opportunity with us</p>
          </div>

          {/* Filters */}
          <div style={styles.filters}>
            <div style={styles.filtersGrid}>
              {/* Search */}
              <div style={styles.searchContainer}>
                <Search style={styles.searchIcon} size={isMobile ? 18 : 20} />
                <input
                  type="text"
                  placeholder={isMobile ? "Search jobs..." : "Search jobs or skills..."}
                  style={styles.searchInput}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Department Filter */}
              <select
                style={styles.selectInput}
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedDepartment('All');
                  setSearchTerm('');
                }}
                style={styles.clearButton}
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Job Cards */}
          <div style={styles.jobsContainer}>
            {filteredJobs.map(job => (
              <div key={job.id} style={styles.jobCard}>
                <div style={styles.jobCardContent}>
                  {/* Job Icon */}
                  <div style={{...styles.jobIcon, color: job.color}}>
                    {job.icon}
                  </div>

                  {/* Job Details */}
                  <div style={styles.jobDetails}>
                    <div style={styles.jobHeader}>
                      <div style={styles.jobInfo}>
                        <h3 style={styles.jobTitle}>{job.title}</h3>
                        <div style={styles.jobMeta}>
                          <span style={styles.jobMetaItem}>
                            <Briefcase size={isMobile ? 14 : 16} />
                            {job.department}
                          </span>
                          <span style={styles.jobMetaItem}>
                            <MapPin size={isMobile ? 14 : 16} />
                            {job.location}
                          </span>
                          <span style={styles.jobMetaItem}>
                            <Clock size={isMobile ? 14 : 16} />
                            {job.type}
                          </span>
                          <span style={styles.jobMetaItem}>
                            <Users size={isMobile ? 14 : 16} />
                            {job.experience}
                          </span>
                        </div>
                        <p style={styles.jobDescription}>{job.description}</p>
                        <div style={styles.jobSkills}>
                          {job.skills.map(skill => (
                            <span key={skill} style={styles.skillTag}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Apply Button */}
                      <div style={styles.applyButtonContainer}>
                        <button style={styles.applyButton}>
                          Apply Now
                          <ArrowRight size={isMobile ? 16 : 18} style={styles.buttonIcon} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div style={styles.noJobs}>
              <div style={styles.noJobsIcon}>
                <Search size={isMobile ? 48 : 64} />
              </div>
              <h3 style={styles.noJobsTitle}>No positions found</h3>
              <p style={styles.noJobsText}>Try adjusting your search criteria or check back later for new opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <section style={styles.footerSection}>
        <div style={styles.container}>
          <div style={styles.footerContent}>
            <h2 style={styles.footerTitle}>Ready to Make an Impact?</h2>
            <p style={styles.footerText}>
              Don't see the perfect role? We're always looking for talented individuals to join our team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;