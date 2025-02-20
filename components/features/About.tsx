'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Briefcase, Globe, Rocket, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { timelineEvents } from '@/lib/timeline-data';

const stats = [
  { icon: CheckCircle, value: '500+', label: 'Projects Completed' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: Users, value: '20+', label: 'Team Members' },
  { icon: Briefcase, value: '10+', label: 'Years Experience' },
];

const features = [
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'Operations spanning across Sri Lanka, Japan, and England, serving clients worldwide.',
  },
  {
    icon: Rocket,
    title: 'Innovation Focus',
    description: 'Delivering cutting-edge solutions that drive technological advancement.',
  },
  {
    icon: Target,
    title: 'Industry Excellence',
    description: 'Award-winning technology solutions across various sectors.',
  },
];

const backgroundImages = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1664575601786-b00156752b61?auto=format&fit=crop&q=80',
];

export function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A decade of excellence in delivering innovative software solutions
          </p>
        </div>

        {/* Company Overview with Auto-transitioning Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Our Story</h3>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6">
                  Effective Solutions (Pvt) Ltd is an award-winning technology company in Sri Lanka, 
                  renowned for delivering high-quality, innovative solutions across various industries. 
                  Founded in 2013 by five engineering graduates from the University of Moratuwa, 
                  the company has expanded its global footprint to Japan and England, transforming 
                  business requirements into functional digital solutions.
                </p>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto overflow-hidden">
              {backgroundImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentImageIndex === index ? 1 : 0,
                    transition: { duration: 1 }
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={image}
                    alt={`Company image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
                </motion.div>
              ))}
              
              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {backgroundImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-white w-4' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Global Presence & Commitment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Our Global Presence</h3>
            <p className="text-gray-600 mb-6">
              To better serve our clients and stay at the forefront of technological advancements, 
              we have established a global presence with operations in Japan and England. This 
              expansion allows us to transform diverse business requirements into functional digital 
              solutions, catering to a broad spectrum of industries.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary">Sri Lanka</h4>
                <p className="text-sm text-gray-600">Headquarters</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary">Japan</h4>
                <p className="text-sm text-gray-600">Regional Office</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary">England</h4>
                <p className="text-sm text-gray-600">Regional Office</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
            <p className="text-gray-600 mb-6">
              At Effective Solutions, we are committed to delivering innovative technological 
              solutions that drive efficiency and growth. Our journey reflects our dedication 
              to excellence and our passion for transforming ideas into impactful solutions.
            </p>
            <p className="text-gray-600 mb-6">
              We invite you to explore our services and discover how we can collaborate to 
              innovate your business.
            </p>
            <Link 
              href="#contact"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <span>Get in touch</span>
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="ml-2"
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Timeline line - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
          
          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${
                  index % 2 === 0 
                    ? 'md:flex-row' 
                    : 'md:flex-row-reverse'
                } relative`}
              >
                {/* Mobile Timeline Marker */}
                <div className="md:hidden absolute left-0 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2" />
                
                {/* Desktop Timeline Marker */}
                <div className={`hidden md:block absolute top-0 ${
                  index % 2 === 0 ? 'right-0' : 'left-0'
                } transform ${
                  index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'
                } -translate-y-1/4 w-4 h-4 bg-primary rounded-full`} />

                {/* Content Container */}
                <Link 
                  href={`/about/${event.slug}`}
                  className={`w-full md:w-1/2 group relative ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                    index % 2 === 0 ? 'ml-6 md:ml-0' : 'ml-6 md:ml-0'
                  }`}>
                    <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-primary-foreground font-bold">{event.year}</span>
                        <h3 className="text-xl font-semibold text-white mt-1">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 line-clamp-3">{event.description}</p>
                    <div className="mt-4 flex items-center text-primary font-medium">
                      <span>Read more</span>
                      <motion.span
                        className="ml-2"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}