'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className={cn(
        'absolute inset-0 pointer-events-none',
        isScrolled
          ? 'bg-gradient-to-r from-primary/5 to-primary/10'
          : 'bg-gradient-to-b from-black/20 to-transparent'
      )} />
      
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-12 w-12"
            >
              <Image
                src="https://i.ibb.co/Z6cbq3X4/10.jpg"
                alt="Effective Solutions"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-250"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden sm:block"
            >
              <h1 className={cn(
                "text-xl font-bold",
                isScrolled ? "text-gray-900" : "text-white"
              )}>
                Effective
                <span className={isScrolled ? "text-primary" : "text-primary-foreground"}> Solutions</span>
              </h1>
              <p className={cn(
                "text-xs",
                isScrolled ? "text-gray-600" : "text-white/70"
              )}>
                Transforming Ideas Into Reality
              </p>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ href, label }, index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-primary/10',
                    isScrolled
                      ? activeSection === href.substring(1)
                        ? 'text-primary'
                        : 'text-gray-600 hover:text-primary'
                      : activeSection === href.substring(1)
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                  )}
                >
                  {label}
                  {activeSection === href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className={cn(
                        "absolute bottom-0 left-0 right-0 h-0.5 rounded-full",
                        isScrolled ? "bg-primary" : "bg-white"
                      )}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden relative z-50 p-2 rounded-full hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={cn(
                    "w-6 h-6",
                    isScrolled ? "text-gray-900" : "text-white"
                  )} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={cn(
                    "w-6 h-6",
                    isScrolled ? "text-gray-900" : "text-white"
                  )} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg"
            >
              <div className="container mx-auto px-6 py-4">
                {navItems.map(({ href, label }, index) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={href}
                      className={cn(
                        'flex items-center space-x-2 py-3 px-4 rounded-lg transition-colors',
                        activeSection === href.substring(1)
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{label}</span>
                      <ChevronDown className="w-4 h-4 opacity-50" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}