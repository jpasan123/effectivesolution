'use client';

import { motion } from 'framer-motion';
import { 
  Monitor, 
  Smartphone, 
  Cloud, 
  Code, 
  Database, 
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Zap
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'CMS Integration'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    features: [
      'Native Performance',
      'Cross-platform Support',
      'Offline Functionality',
      'Push Notifications'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    features: [
      'Auto-scaling',
      'Load Balancing',
      'Disaster Recovery',
      'Cloud Security'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker'],
    color: 'from-cyan-500/20 to-cyan-600/20'
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions to meet your specific business needs.',
    features: [
      'Enterprise Solutions',
      'Process Automation',
      'Legacy Integration',
      'API Development'
    ],
    technologies: ['Java', 'Python', '.NET', 'Go'],
    color: 'from-emerald-500/20 to-emerald-600/20'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient database architecture and management systems.',
    features: [
      'Data Modeling',
      'Performance Tuning',
      'Data Migration',
      'Backup Solutions'
    ],
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    color: 'from-orange-500/20 to-orange-600/20'
  },
  {
    icon: Zap,
    title: 'Machine Learning',
    description: 'Advanced machine learning solutions to drive innovation and efficiency.',
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Keras'],
    color: 'from-yellow-500/20 to-yellow-600/20'
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const statsData = [
  { icon: CheckCircle, value: '500+', label: 'Projects Delivered' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Zap, value: '99%', label: 'Success Rate' },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to help your business thrive in the digital age.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-lg transform transition-transform group-hover:scale-105`} />
              <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12 text-primary" />
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}