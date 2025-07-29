import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './hooks/LoadingScreen';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/hero';
import TrustedBy from './components/trustedby/TrustedBy';
import WhatWeDo from './components/whatwedo/WhatWeDo';
import OurClients from './components/clients/OurClients';
import FeaturedProject from './components/featuredprojects/FeaturedProjects';
import WhyChooseUs from './components/whychooseus/WhyChooseUs';
import CallToAction from './components/calltoaction/CallToAction';
import Footer from './components/footer/Footer';
import AboutUs from './pages/about/AboutUs';
import Service from './pages/services/Services';
// import ProjectsPage from './pages/projects/Projects';
import Blog from './pages/blogs/Blogs';
import Careers from './pages/careers/Career';

import Gallery from './components/gallery/Gallery';

import ScrollToTop from './components/ScrollToTop';


// create page components
const HomePage = () => (
  <>
    <Hero />
    <Gallery/>
    <TrustedBy />
    <WhatWeDo />
    <OurClients />
    <FeaturedProject />
    <WhyChooseUs />
    <CallToAction />
   </>
);


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  // Preload critical resources
  useEffect(() => {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Preload images (add your actual image paths)
    const imagesToPreload = [
      '/images/logo.png',
      '/images/hero-bg.jpg',
      '/images/about-bg.jpg',
      // Add more critical images
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    return () => {
      // Cleanup if needed
      if (fontLink.parentNode) {
        fontLink.parentNode.removeChild(fontLink);
      }
    };
  }, []);

  return (
    <Router>
      <div className="App">
         {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
        <Navigation />
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Service/>} />
          {/* <Route path="/projects" element={<ProjectsPage />} /> */}
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<CallToAction />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
