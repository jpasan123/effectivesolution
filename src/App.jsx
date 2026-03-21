import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './hooks/LoadingScreen';
import './App.css';
import Navigation from './components/Navigation/navigation';
import Hero from './components/Hero/hero';
import TrustedBy from './components/Trustedby/TrustedBy';
import WhatWeDo from './components/whatwedo/WhatWeDo';
import OurClients from './components/Clients/OurClients';
import FeaturedProject from './components/Featuredprojects/FeaturedProjects';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/About/AboutUs';
import Service from './pages/Services/Services';
// import ProjectsPage from './pages/Projects/Projects';
import Blog from './pages/Blogs/Blogs';
import Careers from './pages/Careers/Career';

import Gallery from './components/Gallery/Gallery';

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

  const ScrollToHash = () => {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === '/' && location.state && location.state.scrollTo) {
        const id = location.state.scrollTo;
        // small delay so page has rendered
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
        // clear history state to avoid repeated scrolls
        window.history.replaceState({}, '', window.location.pathname + window.location.search + window.location.hash);
      }
    }, [location]);
    return null;
  };

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
        <ScrollToHash />
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
