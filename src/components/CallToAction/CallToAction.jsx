import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  Phone, 
  Mail, 
  ArrowRight, 
  Loader2 
} from 'lucide-react';
import './CallToAction.css';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'consultation'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // REPLACE with your actual Service/Template/Key
      await emailjs.send(
        'service_6e49vg7',   
        'template_iqvfph8',  
        formData,
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        service: 'consultation',
      });

    } catch (err) {
      console.error('Error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cta-section" id="contact">
      
      {/* Decorative Gradient Orbs for that "Beautiful" touch */}
      <div className="cta-orb cta-orb-blue"></div>
      <div className="cta-orb cta-orb-pink"></div>

      <div className="cta-container">
        <div className="cta-grid">
          
          {/* --- Left Column: Value Proposition --- */}
          <div className="cta-content">
            <span className="cta-badge">Let's Build the Future</span>
            <h2 className="cta-title">
              Ready to Transform <br />
              <span className="cta-gradient-text">Your Business?</span>
            </h2>
            <p className="cta-description">
              Connect with our engineering team to discuss how our AI & IoT solutions can be tailored to your specific industry needs.
            </p>

            <div className="cta-benefits">
              <div className="cta-benefit-item">
                <div className="cta-icon-box">
                  <CheckCircle2 size={20} />
                </div>
                <span>Free technical feasibility consultation</span>
              </div>
              <div className="cta-benefit-item">
                <div className="cta-icon-box">
                  <Zap size={20} />
                </div>
                <span>Proprietary AI & IoT Platform Access</span>
              </div>
              <div className="cta-benefit-item">
                <div className="cta-icon-box">
                  <TrendingUp size={20} />
                </div>
                <span>End-to-end development & support</span>
              </div>
            </div>

            <div className="cta-contacts">
              <div className="cta-contact-item">
                <span className="contact-label">Call us directly</span>
                <a href="tel:+94766210120" className="contact-link">
                  <Phone size={18} /> +94 76 621 0120
                </a>
              </div>
              <div className="cta-contact-item">
                <span className="contact-label">Email us</span>
                <a href="mailto:careers@effectivesolutions.lk" className="contact-link">
                  <Mail size={18} /> careers@effectivesolutions.lk
                </a>
              </div>
            </div>
          </div>

          {/* --- Right Column: The Form --- */}
          <div className="cta-form-wrapper">
            <div className="cta-form-card">
              <div className="form-header"> 
                <h3>Get Started</h3>
                <p>Fill out the form below and we'll reply within 24 hours.</p>
              </div>

              {submitStatus === 'success' && (
                <div className="form-alert success">
                  <CheckCircle2 size={18} />
                  <span>Message sent! We'll be in touch shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="cta-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Effective Solutions Ltd"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Service Needed</label>
                  <div className="select-wrapper">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="consultation">General Consultation</option>
                      <option value="ai-solutions">AI & Machine Learning</option>
                      <option value="iot-development">IoT Development</option>
                      <option value="biomedical">Biomedical Engineering</option>
                      <option value="software">Software Development</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Details</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project goals..."
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="cta-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="spinner" size={20} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>
              
              <div className="form-footer">
                Your data is secure and never shared.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;