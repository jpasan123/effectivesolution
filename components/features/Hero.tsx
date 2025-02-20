'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const backgroundImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <AnimatePresence mode="sync">
        {backgroundImages.map((image, index) => (
          currentImageIndex === index && (
            <motion.div
              key={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-6">
          Innovative Technology Solutions for a <span className="text-primary">Connected Future</span>
        </motion.h1>
        <motion.p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Empowering businesses with tailored technology solutions that enhance efficiency, connectivity, and growth.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#contact">
            <Button variant="gradient" size="lg" className="group relative">
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}>
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </span>
            </Button>
          </Link>
            <Link href="#portfolio">
            <Button variant="outline" size="lg" className="bg-white/20 border-white/20 text-white hover:bg-white/20 hover:text-blue group relative">
              <span className="relative z-10">
              <span className="text-blue">View Portfolio</span>
              </span>
            </Button>
            </Link>
        </motion.div>
      </div>

      {/* Background navigation dots */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Show background ${index + 0.5}`}
          />
        ))}
      </div> */}

      {/* Scroll indicator repositioned lower */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-15"
        onClick={scrollToNextSection}
        role="button"
        tabIndex={0}
        aria-label="Scroll to next section"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} className="w-2 h-2 bg-white rounded-full" />
        </div>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} className="mt-2">
          <ChevronDown className="w-6 h-6 text-white mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
