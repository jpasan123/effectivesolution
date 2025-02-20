'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'Symfony',
    logo: 'https://i.ibb.co/mrgBW8RB/symfony-logo.png',
    category: 'technology'
  },
  {
    name: 'JENDO',
    logo: 'https://i.ibb.co/PzTRgqc4/jendo-logo.png',
    category: 'partner'
  },
  {
    name: 'eDoctor',
    logo: 'https://i.ibb.co/BVds1SVc/edoctor-logo.png',
    category: 'partner'
  },
  {
    name: 'JLanka Technologies',
    logo: 'https://i.ibb.co/PvJ1NgyG/jlanka-logo.png',
    category: 'partner'
  }
];

export function Partners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Working with leading technologies and trusted partners to deliver exceptional solutions
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-24 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center mt-4"
              >
                <h3 className="text-sm font-medium text-gray-600">{partner.name}</h3>
                <span className="text-xs text-primary capitalize">{partner.category}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <h4 className="text-4xl font-bold text-primary mb-2">10+</h4>
            <p className="text-gray-600">Technology Partners</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <h4 className="text-4xl font-bold text-primary mb-2">15+</h4>
            <p className="text-gray-600">Years of Collaboration</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <h4 className="text-4xl font-bold text-primary mb-2">50+</h4>
            <p className="text-gray-600">Joint Projects</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}