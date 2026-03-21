import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  Tag,
  CheckCircle 
} from 'lucide-react';
import './Blogs.css';

// --- YOUR IMAGE IMPORTS ---
import blog1 from './blog1.jpg';
import blog2 from './blog2.jpg';
import blog3 from './blog3.jpeg';
import blog4 from './blog4.png';
import blog5 from './blog5.jpg';
import blog6 from './blog6.jpg';
import blog7 from './blog7.png';
import blog8 from './blog8.jpg';
import blog9 from './blog9.jpeg';
import wipoImage from '../about/WIPO3.jpeg'; 

const Blog = () => { 
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'biomedical', name: 'Biomedical Tech' },
    { id: 'industry-40', name: 'Industry 4.0' }
  ];

  // --- FULL BLOG DATA WITH ALL DETAILS ---
  const blogPosts = [
    {
      id: 1,
      title: 'MedTech Entrepreneur Keerthi Kodithuwakku Recognized as the ICT Leader of the Year',
      category: 'biomedical',
      excerpt: 'Jendo Innovations CEO honored with CSSL ICT Leader of the Year 2024 award for pioneering AI-powered vascular disease detection technology.',
      publishDate: 'Oct 23, 2025',
      readTime: '6 min read',
      image: blog9,
      tags: ['ICT', 'MedTech', 'Innovation', 'Leadership', 'Jendo', 'NITC2025'],
      content: {
        intro: "In a significant milestone for Sri Lanka's technology landscape, Keerthi Kodithuwakku was honored with the CSSL ICT Leader of the Year (Male) 2024 award at the National ICT Awards, held during NITC 2025. This prestigious accolade not only celebrates his individual achievements but also highlights the transformative impact of innovation within Sri Lanka's technology sector.",
        tableOfContents: [
          "A Vision for Vascular Healthcare",
          "From University Research to Global Impact",
          "Transforming Early Disease Detection",
          "Sri Lanka's Rising Position in Global Innovation"
        ],
        sections: [
          {
            title: "A Vision for Vascular Healthcare",
            content: "As the CEO of Jendo Innovations, Kodithuwakku has been at the forefront of developing pioneering biomedical technologies designed to revolutionize vascular healthcare. Under his leadership, Jendo Innovations created an AI-powered non-invasive screening system capable of detecting early-stage vascular diseases in just 15 minutes.",
            highlight: "This breakthrough addresses a critical global health challenge by offering a cost-effective, accessible and scalable solution for early disease detection, bridging the gap between advanced medical technology and public health needs."
          },
          {
            title: "From University Research to Global Impact",
            content: "The journey from concept to reality was not without challenges. What began as a university research project has evolved into a groundbreaking medical technology with the potential to save millions of lives worldwide. Jendo Innovations, now a Sri Lankan biomedical startup valued at several million dollars, is tackling one of the world's most pressing health issues.",
            points: [
              { label: "Global Impact", text: "Vascular diseases claim nearly 18 million lives annually, often without prior symptoms." },
              { label: "Innovation Gap", text: "Traditional diagnostic methods such as angiograms and stress tests are invasive, expensive and typically detect disease only after significant damage has occurred." },
              { label: "Breakthrough Solution", text: "Jendo's technology transforms this paradigm by providing a comprehensive vascular health report within minutes, enabling early detection and timely intervention." }
            ]
          },
          {
            title: "Transforming Early Disease Detection",
            content: "Kodithuwakku credits this success to collaboration and collective effort, noting that 'this recognition belongs to every innovator, engineer and dreamer at Jendo who believed in creating technology that heals, empowers and transforms lives.' Their efforts have positioned Sri Lanka as an emerging hub for biomedical innovation in the global technology ecosystem.",
            highlight: "Keerthi's mission is building AI medical devices to transform primary care, ensuring that advanced diagnostics are accessible to every community, not just those in major hospitals."
          },
          {
            title: "Sri Lanka's Rising Position in Global Innovation",
            content: "The CSSL ICT Leader of the Year award stands as a beacon for aspiring technologists and entrepreneurs across the nation. It underscores the importance of leadership, vision and perseverance in driving meaningful technological advancement. Keerthi Kodithuwakku's recognition at NITC 2025 represents more than a personal milestone. It symbolizes Sri Lanka's growing presence in the global innovation arena.",
            highlight: "His journey with Jendo Innovations exemplifies how visionary leadership and scientific excellence can merge to create technologies that transform lives. As Sri Lanka continues to strengthen its innovation ecosystem, his work stands as a lasting legacy of impact that will inspire future generations to build, innovate and lead with purpose."
          }
        ]
      }
    },
    {
      id: 2,
      title: 'The 2025 WIPO - FICPI International Patent Drafting Training Programme',
      category: 'industry-40',
      excerpt: 'Empowered by global knowledge, driven to protect innovations.',
      publishDate: 'July 28, 2025',
      readTime: '5 min read',
      image: wipoImage,
      tags: ['Patentdrafting', 'IP', 'IntellectualProperty', 'WIPOPatentDrafting', 'FICPIPatentDrafting'],
      content: {
        intro: "Geneva, July 2025 – The fourth edition of the prestigious International Patent Drafting Training Programme (IPDTP), jointly developed by the World Intellectual Property Organization (WIPO) and FICPI (International Federation of Intellectual Property Attorneys), has successfully concluded at WIPO headquarters in Geneva. This year's programme brought together 29 participants from over 25 countries, reinforcing its status as a premier global initiative for IP professionals.",
        sections: [
          {
            title: "A Collaborative Effort for Global IP Excellence",
            content: "Led by Eric Le Forestier, President of the FICPI Academy and Of Counsel at HAUTIER IP (France), alongside Anupam Trivedi of K&S Partners (India), the programme also featured contributions from distinguished tutors Anna Tomlinson, Victoria Lovatt, and Robert Sayre. Since its inception, the IPDTP has gained recognition from national IP offices across Africa, Asia, Latin America, and Europe, solidifying its reputation as a benchmark for patent drafting excellence."
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Jendo – Heart Disease Prediction using Machine Learning',
      category: 'biomedical',
      excerpt: 'Discover the revolutionary 15-minute AI-powered heart check system that\'s transforming cardiovascular disease prediction.',
      publishDate: 'July 10, 2025',
      readTime: '12 min read',
      image: blog8,
      tags: ['AI', 'Healthcare', 'Machine Learning', 'Innovation', 'Jendo'],
      subtitle: [
        'Jendo – A 15‑Minute AI‑Powered Heart Check',
        'Clinical Use & Business Context', 
        'Innovation & Expansion Strategy'
      ],
      content: {
        intro: "Discover the revolutionary 15-minute AI-powered heart check system that's transforming cardiovascular disease prediction.",
        sections: [
          {
            title: "Jendo – A 15‑Minute AI‑Powered Heart Check",
            // Using a structured format for the steps to render nicely
            steps: [
              { heading: "Preparation & Setup", text: "A sensor is placed on the patient's thumb featuring red and infrared light emitters.", source: "WIPO" },
              { heading: "5‑Minute Occlusion Test", text: "Blood flow is temporarily stopped via a cuff or similar device for five minutes, simulating stress on the endothelium.", source: "WIPO" },
              { heading: "Release & Data Recording", text: "After releasing the cuff, pulse and temperature signals are captured by the sensor, reflecting how the blood vessels respond.", source: "WIPO" },
              { heading: "Machine‑Learning Analysis", text: "These signals feed into a complex ML algorithm that has been trained to recognize patterns linked to endothelial dysfunction, the earliest stage of vascular disease.", source: "WIPO" },
              { heading: "Risk Prediction Report", text: "The system outputs a risk prediction for cardiovascular issues (and potentially diabetes or kidney disease), and generates a report with personalized lifestyle advice." },
              { heading: "Recommended Environment", text: "Designed to be used under medical supervision, ideally at facilities. Home use is possible if instructions are strictly followed.", source: "WIPO" }
            ]
          },
          {
            title: "Clinical Use & Business Context",
            points: [
              { label: "Scale of testing", text: "Clinically validated on over 800 patients and currently in use at hospitals and labs, though it's not yet commercialized.", source: "WIPO" },
              { label: "Pricing model", text: "The device is planned to retail at US $2,250, with an annual subscription of US $10,000, and a per‑test cost of US $8 — making it a cost‑effective alternative to traditional diagnostics.", source: "WIPO" }
            ]
          },
          {
            title: "Innovation & Expansion Strategy",
            points: [
              { label: "Growth plans", text: "Exploring business setup in Switzerland and Singapore to scale internationally." },
              { label: "Regulatory roadmap", text: "Undergoing review by Sri Lanka's medical regulator, with future plans for FDA approval (USA) and submissions in other jurisdictions." }
            ]
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Mind-Controlled Drone and AI for Diabetic Retinopathy Screening',
      category: 'ai-ml',
      excerpt: 'Explore innovative medical technologies including mind-controlled drones and AI-powered diabetic retinopathy screening systems.',
      publishDate: 'November 30, 2024',
      readTime: '5 min read',
      image: blog7,
      tags: ['AI', 'Healthcare', 'Innovation', 'Medical Technology', 'Startups'],
      content: {
        intro: "Explore innovative medical technologies including mind-controlled drones and AI-powered diabetic retinopathy screening systems.",
        sections: [
          {
            content: "In addition to Jendo Innovations, Keerthi has launched several other startups. Under these companies (Effective Solutions, Optha Innovations), other innovative medical devices and systems are being developed. One of them is Myndrone, which allows the user to control a drone by using his/her brain waves. \"This activity relaxes the brain and the user feels calm after a game session\", Keerthi said. Another product soon to be launched is Ophta-AES, a Human Machine Interface (HMI), an AI-powered system to provide early detection of diabetic retinopathy, which is the most common cause of blindness among diabetic patients worldwide. \"Over 45 percent of diabetic patients worldwide develop diabetic retinopathy and most of them could prevent worsening of the disease with early detection \", Keerthi explained"
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Jendo: AI-Powered Heart Health Monitoring',
      category: 'ai-ml',
      excerpt: 'Explore how Jendo\'s AI-powered technology is revolutionizing cardiovascular health monitoring and disease prevention.',
      publishDate: 'November 30, 2024',
      readTime: '9 min read',
      image: blog6,
      tags: ['AI', 'Healthcare', 'Cardiology', 'Innovation', 'Jendo'],
      subtitle: [
        'AI in cardiology – A Steppingstone for Jendo Innovations',
        'Cardiovascular Diseases: The No.1 Killer in the World', 
        'Endothelial Dysfunction, Disease Tattling'
      ],
      content: {
        intro: "Explore how Jendo's AI-powered technology is revolutionizing cardiovascular health monitoring and disease prevention.",
        tableOfContents: ["AI in cardiology – A Steppingstone for Jendo Innovations", "Cardiovascular Diseases: The No.1 Killer in the World", "Endothelial Dysfunction, Disease Tattling"],
        sections: [
          {
            content: "Keerthi Kodithuwakku is a biomedical engineer, the co-founder and CEO of Jendo Innovations, a bio-medical startup delivering patented healthcare solutions detecting abnormalities in the cardiovascular system and seeking to prevent the risk of cardiovascular diseases. His strong passion for biomedical engineering resisted adverse advice from some senior advisors in the healthcare industry about the lack of prospects in biomedical engineering in Sri Lanka. Along with a like-minded group of engineers, he followed his dream of providing a solution to help solve medical conditions. In their research and entrepreneurial journey, Keerthi said that he found strength and motivation through the strong support of his wife, family, friends, and coworkers in overcoming the obstacles faced when developing Jendo Innovations."
          },
          {
            title: "AI in cardiology – A Steppingstone for Jendo Innovations",
            content: "The key developers of Jendo innovations: Keerthi Kodithuwakku, Isuru Rajakaruna, and Charith Vithanage found the most amount of inspiration towards the end of their tenure in undergraduate studies at the University of Moratuwa. This is when they started working on an artificial intelligence-based device identifying abnormalities in the cardiovascular system to predict the risk of disease. Straight out of university, in 2015, Keerthi co-founded Jendo Innovations with his co-inventors along with Heminda Jayaweera, and Vinod Samarawikrama to commercialize the invention. Keerthi, now 32, said 'another motive behind the formation of a registered company was to create a platform and provide opportunities for upcoming biomedical engineers in Sri Lanka to be a part of the Jendo Innovations journey and make good use of their intellectual resources and improve the overall standard of biomedical engineering in the country.'"
          },
          {
            title: "Cardiovascular Diseases: The No.1 Killer in the World",
            content: "Cardiovascular diseases (CVDs) remain the leading cause of death globally, accounting for an estimated 17.9 million lives each year. This section delves into the alarming statistics surrounding CVDs, the risk factors contributing to their prevalence, and the urgent need for innovative solutions to combat this health crisis."
          },
          {
            title: "Endothelial Dysfunction, Disease Tattling",
            content: "Cardiovascular diseases are silent killers, as they often go unnoticed for 20 to 30 years. The progressive worsening of the patient's conditions goes through multiple stages, from inflammation to the formation of plaque, to the stiffening of walls, ultimately leading to life-threatening blood clots."
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Healthcare Regulatory Compliance Challenges for Medical Technology',
      category: 'biomedical',
      excerpt: '"A patent is key to proving the value of your invention and winning investors\' confidence"',
      publishDate: 'November 30, 2024',
      readTime: '9 min read',
      image: blog5,
      tags: ['AI', 'Healthcare', 'Cardiology', 'Innovation', 'Jendo'],
      subtitle: [
        'Tried and Tested on Patients to Prevent Heart Disease',
      ],
      content: {
        intro: "\"A patent is key to proving the value of your invention and winning investors' confidence\"",
        tableOfContents: ["Tried and Tested on Patients to Prevent Heart Disease"],
        sections: [
          {
            content: "One of the challenges that the company is facing is finding partners in the health ecosystem. The other one is going through the health regulatory process as each country has its regulatory authority. Sri Lanka's regulatory authority is currently reviewing the Jendo system. Once the review is completed, it will allow the commercialization of the device. The company will also apply for the United States Food and Drug Administration (FDA) approval, followed by other countries. Jendo Innovations is also in discussion to establish two business centers outside of Sri Lanka; one in Switzerland, and the other one in Singapore. \"Both countries have a favorable business environment, and growth opportunities,\" according to Keerthi."
          },
          {
            title: "Tried and Tested on Patients to Prevent Heart Disease",
            content: "Jendo's system is not commercialized yet but the device is already being used by hospitals and laboratory chains, and clinically tested on over 800 patients. Under the current business model, the device will be sold at US$2,250 with an annual subscription fee of US$10,000. The test will be charged US$8. According to Keerthi, 'the screening price is affordable in comparison with other established procedures.' The company swiftly proceeded to apply for a patent, first in Sri Lanka (pending), then in the United States (granted: USPTO Patent 10,912,464 B2), and in Japan (Pending), through the WIPO Patent Cooperation Treaty (PCT). According to Keerthi, investors want to make sure the products they invest in is ahead of the competition. \"A patent is key to proving the value of your invention and winning investors' confidence,\" he said."
          }
        ]
      }
    },
    {
      id: 7,
      title: 'Celebrating Innovation: Jendo Wins the John Keells Open Innovation Challenge 2016',
      category: 'biomedical',
      excerpt: 'How Jendo\'s innovative healthcare solution won the prestigious John Keells Open Innovation Challenge and its impact on the industry.',
      publishDate: 'October 29, 2024',
      readTime: '7 min read',
      image: blog4,
      tags: ['Healthcare', 'Innovation', 'Awards', 'Jendo', 'Technology'],
      content: {
        intro: "How Jendo's innovative healthcare solution won the prestigious John Keells Open Innovation Challenge and its impact on the industry.",
        tableOfContents: ["The John Keells Open Innovation Challenge", "About Jendo and Their Mission", "Impacts and Future Prospects for Jendo", "Inspiring Innovation in Healthcare"],
        sections: [
          {
            title: "The John Keells Open Innovation Challenge",
            content1: "Overview: The John Keells Open Innovation Challenge is one of Sri Lanka's premier platforms for fostering innovation and entrepreneurship. It aims to recognize and reward projects that offer novel solutions to pressing challenges in various sectors, including healthcare, technology, and social impact.",
            content2: "Significance of Winning: Winning this challenge places Jendo among the top innovators in the region. It demonstrates the company's ability to develop practical solutions with far-reaching impacts on healthcare and wellness."
          },
          {
            title: "About Jendo and Their Mission",
            content1: "Company Vision: Jendo focuses on harnessing technology to create healthcare solutions that are accessible, effective, and impactful. They aim to address key health challenges through innovations that benefit both medical professionals and patients.",
            content2: "The Winning Project: Details about the project or product that helped Jendo secure this award. For example, if it was a diagnostic tool or health management app, describe how it works and the problem it solves."
          },
          {
            title: "Impacts and Future Prospects for Jendo",
            content1: "Industry Recognition: Winning the John Keells Challenge has provided Jendo with not only recognition but also opportunities to grow and collaborate within the industry.",
            content2: "Looking Ahead: How this win has helped Jendo set new goals, attract investors, or develop future projects. This section can discuss the company's future plans and how it aims to further impact the healthcare sector."
          },
          {
            title: "Inspiring Innovation in Healthcare",
            subsections: [
              {
                title: "Role in Regional Innovation",
                content: "Jendo's achievement contributes to the growth of the tech and healthcare sectors in Sri Lanka and beyond. It sets a benchmark for innovation and encourages others to pursue solutions that can make a tangible difference."
              },
              {
                title: "Message for Innovators",
                content: "The John Keells Open Innovation Challenge and Jendo's success serve as inspiration for budding entrepreneurs. Their journey emphasizes the importance of determination, creativity, and a solution-driven approach in overcoming healthcare challenges."
              }
            ]
          }
        ]
      }
    },
    {
      id: 8,
      title: 'Empowering Voices: How Public Speaking Drives Innovation and Leadership in Business',
      category: 'industry-40',
      excerpt: 'Discover how public speaking skills can transform leaders and drive innovation in business environments.',
      publishDate: 'October 29, 2024',
      readTime: '6 min read',
      image: blog3,
      tags: ['Public Speaking', 'Leadership', 'Communication', 'Business'],
      content: {
        intro: "Discover how public speaking skills can transform leaders and drive innovation in business environments.",
        tableOfContents: ["The Power of Public Speaking in Business", "How Public Speaking Builds Confidence and Credibility", "Real-World Examples: Leaders Who Transform Through Speech", "Tips to Enhance Your Public Speaking Skills"],
        sections: [
          {
            title: "The Power of Public Speaking in Business",
            subsections: [
              {
                title: "Effective Communication as a Leadership Skill",
                content: "Public speaking helps individuals clearly articulate ideas, making it easier for teams to align with a shared vision."
              },
              {
                title: "Inspiring Innovation through Storytelling",
                content: "Storytelling is a powerful tool within public speaking that can turn complex concepts into relatable ideas, sparking creativity and engagement among peers."
              }
            ]
          },
          {
            title: "How Public Speaking Builds Confidence and Credibility",
            subsections: [
              {
                title: "Establishing Authority and Trust",
                content: "Speaking in front of an audience boosts credibility, positioning individuals as thought leaders in their field."
              },
              {
                title: "Confidence-Building through Practice",
                content: "Overcoming the challenges of public speaking allows professionals to build resilience and confidence, which translates into more effective communication in all business interactions."
              }
            ]
          },
          {
            title: "Real-World Examples: Leaders Who Transform Through Speech",
            subsections: [
              {
                title: "Case Study: A Professional's Journey from Hesitance to Leadership",
                content: "Share stories of individuals who started with little confidence in public speaking and eventually used it to become prominent business figures or leaders."
              },
              {
                title: "Impact of Public Speaking on Business Outcomes",
                content: "Look at how strong public communication has directly impacted business success, whether in terms of investor relations, team morale, or client acquisition."
              }
            ]
          },
          {
            title: "Tips to Enhance Your Public Speaking Skills",
            subsections: [
              {
                title: "Crafting a Memorable Message",
                content: "Tips on structuring speeches to ensure they are concise, impactful, and memorable."
              },
              {
                title: "Practice and Feedback",
                content: "Regular practice and seeking feedback can help refine speaking skills, reducing anxiety and improving performance."
              },
              {
                title: "Focus on Body Language and Voice Modulation",
                content: "Non-verbal cues play a significant role in engaging the audience. Understanding body language and tone can enhance the impact of a speech."
              }
            ] 
          }
        ]
      }
    },
    {
      id: 9,
      title: 'Empowering Entrepreneurs: Insights from "Business Best" on Building a Thriving Business',
      category: 'industry-40',
      excerpt: 'Key insights and actionable strategies from "Business Best" to help entrepreneurs build successful and sustainable businesses.',
      publishDate: 'October 29, 2024',
      readTime: '8 min read',
      image: blog2,
      tags: ['Business', 'Leadership', 'Entrepreneurship', 'Strategy'],
      content: {
        intro: "Key insights and actionable strategies from \"Business Best\" to help entrepreneurs build successful and sustainable businesses.",
        tableOfContents: ["Key Lessons for Aspiring Entrepreneurs", "Success Stories: Inspiration from Industry Leaders", "Actionable Tips and Strategies", "The Role of Leadership and Vision in Business Growth"],
        sections: [
          {
            title: "Understanding Market Needs",
            content: "Entrepreneurs must focus on identifying and addressing the unique needs of their target audience, a concept emphasized repeatedly in 'Business Best.' Understanding your market is the foundation of any successful venture."
          },
          {
            title: "Importance of Adaptability and Innovation",
            content: "Insights on how businesses can adapt to rapid changes in the market and embrace innovation as a core value. The most successful entrepreneurs are those who can pivot quickly while maintaining their core vision."
          },
          {
            title: "Success Stories: Inspiration from Industry Leaders",
            subsections: [
              {
                title: "Profiles of Featured Entrepreneurs",
                content: "A look at some inspiring guests on 'Business Best,' detailing how they achieved success and the challenges they overcame."
              },
              {
                title: "Real-World Applications of Business Best Practices",
                content: "Real-life examples of how applying the right strategies can transform business ideas into successful ventures."
              }
            ]
          },
          {
            title: "Actionable Tips and Strategies",
            subsections: [
              {
                title: "Setting Goals and Measuring Success",
                content: "Tips on setting realistic goals and tracking progress to ensure growth aligns with business objectives."
              },
              {
                title: "Traits of Successful Business Leaders",
                content: "From vision to resilience, explore the qualities shared by leaders who make an impact."
              }
            ] 
          }
        ]
      }
    },
    {
      id: 10,
      title: 'Celebrating Start-up Innovation: Highlights from Seedstars Sri Lanka Regional Event',
      category: 'industry-40',
      excerpt: 'Discover how Seedstars empowers start-ups in emerging markets and highlights from the Sri Lanka Regional Event showcasing local innovation.',
      publishDate: 'January 15, 2024',
      readTime: '8 min read',
      image: blog1,
      tags: ['Startups', 'Innovation', 'Entrepreneurship', 'Sri Lanka', 'Seedstars'],
      content: {
        intro: "Discover how Seedstars empowers start-ups in emerging markets and highlights from the Sri Lanka Regional Event showcasing local innovation.",
        tableOfContents: ["The Seedstars Experience: Supporting Innovation in Emerging Markets", "Highlights from the Sri Lanka Regional Event", "The Winning Start-up: Innovation That Stands Out", "Building Sri Lanka's Start-up Ecosystem"],
        sections: [
          {
            title: "About Seedstars and Its Global Mission",
            content: "An overview of Seedstars, an organization focused on empowering start-ups in emerging markets, with a specific look at its commitment to fostering innovation in Sri Lanka. Seedstars has become a global platform connecting entrepreneurs with resources, mentorship, and investment opportunities."
          },
          {
            title: "Why Seedstars Matters for Local Start-ups",
            content: "A discussion on how Seedstars helps start-ups connect with resources, mentorship, and a global network, creating pathways to growth and visibility for early-stage businesses. For Sri Lankan entrepreneurs, this represents an unprecedented opportunity to scale globally."
          },
          {
            title: "Highlights from the Sri Lanka Regional Event",
            content: "The Sri Lanka Regional Event brought together the brightest minds in the local startup ecosystem. Entrepreneurs pitched their solutions to a panel of expert judges, competing for the chance to represent Sri Lanka on the global stage."
          },
          {
            title: "The Winning Start-up: Innovation That Stands Out",
            content: "An in-depth look at the winning start-up, their innovative solution, and what made them stand out among the competition. This section explores their journey, challenges overcome, and future potential."
          },
          {
            title: "Building Sri Lanka's Start-up Ecosystem",
            content: "Discussion on the broader impact of events like Seedstars on Sri Lanka's start-up ecosystem, including how such initiatives contribute to economic growth, job creation, and technological advancement in the region."
          }
        ]
      }
    }
  ];

  // --- GET THE LATEST POST (First item in array) ---
  const latestPost = blogPosts[0];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    // If it's already formatted like "July 28, 2025", return it. 
    // Otherwise, convert it.
    if (dateString.includes(',')) return dateString;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // --- MODAL CONTENT RENDERER ---
  const renderBlogContent = (content) => {
    if (!content || !content.sections) return null;

    return content.sections.map((section, index) => (
      <div key={index} className="modal-content-section">
        {/* Section Title */}
        {section.title && (
          <h2 className="modal-section-title">{section.title}</h2>
        )}
        
        {/* Simple Paragraph Content */}
        {section.content && (
          <div className="modal-section-content">
            <p>{section.content}</p>
          </div>
        )}

        {/* Multiple Paragraphs */}
        {section.content1 && (
          <div className="modal-section-content">
            <p>{section.content1}</p>
          </div>
        )}
        {section.content2 && (
          <div className="modal-section-content">
            <p>{section.content2}</p>
          </div>
        )}

        {/* Highlight Quote */}
        {section.highlight && (
          <blockquote className="section-highlight">
            {section.highlight}
          </blockquote>
        )}

        {/* Structured Steps (for Jendo type posts) */}
        {section.steps && (
          <div className="section-steps">
            {section.steps.map((step, stepIdx) => (
              <div key={stepIdx} className="step-item">
                <h4>{step.heading}</h4>
                <p>{step.text}</p>
                {step.source && <span className="step-source">Source: {step.source}</span>}
              </div>
            ))}
          </div>
        )}

        {/* Structured Points (for Business Context) */}
        {section.points && (
          <div className="section-points">
            {section.points.map((point, pointIdx) => (
              <div key={pointIdx} className="point-item">
                <p><strong>{point.label}:</strong> {point.text}</p>
                {point.source && <span className="point-source">Source: {point.source}</span>}
              </div>
            ))}
          </div>
        )}

        {/* Subsections (for nested content) */}
        {section.subsections && section.subsections.map((sub, subIdx) => (
          <div key={subIdx} className="modal-subsection">
            <h3 className="modal-subsection-title">{sub.title}</h3>
            <div className="modal-subsection-content">
              <p>{sub.content}</p>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="blog-page">
      
      {/* --- HERO SECTION (Dynamic Latest Post) --- */}
      <section className="blog-hero">
        <div className="container">
          <div className="hero-grid-wrapper">
            
            {/* Text Side */}
            <div className="hero-text-side">
              <span className="hero-latest-badge">Latest Article</span>
              <h1 className="hero-main-title">{latestPost.title}</h1>
              
              <div className="hero-meta-row">
                <span className="hero-cat">
                  {categories.find(c => c.id === latestPost.category)?.name}
                </span>
                <span className="separator">•</span>
                <span className="hero-date">{formatDate(latestPost.publishDate)}</span>
                <span className="separator">•</span>
                <span className="hero-time">{latestPost.readTime}</span>
              </div>

              <p className="hero-excerpt">{latestPost.excerpt}</p>
              
              <button 
                className="hero-read-btn"
                onClick={() => setSelectedPost(latestPost)}
              >
                Read Article <ArrowRight size={18} />
              </button>
            </div>

            {/* Image Side */}
            <div className="hero-image-side">
              <div 
                className="hero-img-frame" 
                onClick={() => setSelectedPost(latestPost)}
                style={{ cursor: 'pointer' }}
              >
                <img src={latestPost.image} alt={latestPost.title} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FILTER & SEARCH BAR --- */}
      <section className="blog-filters">
        <div className="container">
          <div className="filter-wrapper">
            <div className="category-list">
              {categories.map((cat) => (
                <button 
                  key={cat.id} 
                  className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            <div className="search-box">
              <Search className="search-icon" size={18} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- BLOG GRID (Calcey Style) --- */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="blog-card"
                onClick={() => setSelectedPost(post)}
              >
                <div className="card-image-wrap">
                  <img src={post.image} alt={post.title} />
                  <span className="card-category-badge">
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <span className="meta-item"><Calendar size={14} /> {formatDate(post.publishDate)}</span>
                    <span className="meta-item"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>
                  
                  <div className="card-footer">
                    <div className="card-tags">
                      {post.tags && post.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="mini-tag"># {tag}</span>
                      ))}
                    </div>
                    <span className="read-more-link">Read Article <ArrowRight size={16} /></span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-results">
              <h3>No articles found</h3>
              <p>Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* --- MODAL FOR READING --- */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedPost(null)}>
              <X size={24} />
            </button>
            <div className="modal-header">
              <img src={selectedPost.image} alt={selectedPost.title} className="modal-hero-img" />
              <div className="modal-header-content">
                <span className="modal-category-tag">
                  {categories.find(c => c.id === selectedPost.category)?.name}
                </span>
                <h1>{selectedPost.title}</h1>
                <div className="modal-meta-row">
                  <span>{formatDate(selectedPost.publishDate)}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>
            <div className="modal-body">
              {/* Introduction Text */}
              {selectedPost.content.intro && (
                <p className="modal-intro">{selectedPost.content.intro}</p>
              )}
              {!selectedPost.content.intro && <p className="modal-intro">{selectedPost.excerpt}</p>}
              
              {/* Subtitles / Table of Contents if available */}
              {selectedPost.subtitle && selectedPost.subtitle.length > 0 && (
                <div className="modal-subtitle-list">
                  <h4>In This Article:</h4>
                  <ul>
                    {selectedPost.subtitle.map((sub, i) => (
                      <li key={i}>{sub}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedPost.content.tableOfContents && (
                <div className="modal-subtitle-list">
                  <h4>In This Article:</h4>
                  <ul>
                    {selectedPost.content.tableOfContents.map((sub, i) => (
                      <li key={i}>{sub}</li>
                    ))}
                  </ul>
                </div>
              )}

              <hr />
              
              <div className="modal-text-content">
                {renderBlogContent(selectedPost.content)}
              </div>
              
              {/* Tags Section */}
              {selectedPost.tags && (
                <div className="modal-tags">
                  <h4>Tags:</h4>
                  <div className="tags-list">
                    {selectedPost.tags.map((tag, index) => (
                      <span key={index} className="modal-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;