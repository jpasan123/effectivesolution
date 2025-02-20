'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ 
              scale: 1,
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            className="relative h-40 w-80 mb-8"
          >
            <Image
              src="https://i.ibb.co/Z6cbq3X4/10.jpg"
              alt="Effective Solutions"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.8,
                  duration: 0.5
                }
              }}
              className="text-4xl font-bold text-white mb-4"
            >
              Effective Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 0.5
                }
              }}
              className="text-white/80 text-lg"
            >
              Transforming Ideas Into Digital Reality
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ width: "0%" }}
            animate={{ 
              width: "60%",
              transition: {
                delay: 1.2,
                duration: 0.8,
                ease: "easeInOut"
              }
            }}
            className="absolute bottom-20 h-0.5 bg-white/20"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                transition: {
                  delay: 1.2,
                  duration: 1.5,
                  ease: "easeInOut"
                }
              }}
              className="relative h-full"
            >
              <motion.div
                animate={{
                  x: ["0%", "100%"],
                  transition: {
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear"
                  }
                }}
                className="absolute inset-0 bg-white rounded-full w-24"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}