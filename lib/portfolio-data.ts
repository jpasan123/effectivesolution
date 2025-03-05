import type { LucideIcon } from 'lucide-react';

export interface ProductFeature {
  icon: any;
  iconName: string;
  title: string;
  description: string;
}

export interface Product {
  title: string;
  category: string;
  slug: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  overview: string[];
  features: ProductFeature[];
  screenshots?: Array<{
    image: string;
    caption: string;
  }>;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  stats?: Array<{
    label: string;
    value: string;
    percentage: number;
  }>;
}

export const products: Product[] = [
  // {
  //   title: 'Route Radar',
  //   category: 'Mobile',
  //   slug: 'route-radar',
  //   description: 'Advanced mobile tracking platform for real-time vehicle monitoring and fleet management',
  //   heroImage: 'https://i.ibb.co/N2mR2Bj7/route-radar-icon.png',
  //   heroVideo: '/videos/humble-beginning.mp4',
  //   overview: [
  //     'Route Radar provides advanced mobile tracking for devices ranging from basic phones to GPS systems.',
  //     'Users can monitor routes, generate reports, and analyze movement patterns.'
  //   ],
  //   features: [
  //     {
  //       iconName: 'MapPin',
  //       title: 'Real-Time Tracking',
  //       description: 'Monitor devices live on Google Maps.',
  //       icon: undefined
  //     },
  //     {
  //       iconName: 'BarChart',
  //       title: 'Route Analysis',
  //       description: 'Analyze movement patterns for optimization.',
  //       icon: undefined
  //     }
  //   ],
  //   screenshots: [
  //     {
  //       image: 'https://i.ibb.co/yBcJcT9h/Whats-App-Image-2025-02-11-at-15-17-16-1404c7a1.jpg',
  //       caption: 'Live Tracking Dashboard'
  //     },
  //     {
  //       image: 'https://i.ibb.co/cchQJk0C/Whats-App-Image-2025-02-11-at-15-19-14-273b8065.jpg',
  //       caption: 'Analytics and Reporting'
  //     },
  //     {
  //       image: 'https://i.ibb.co/d4gST7S8/Whats-App-Image-2025-02-11-at-15-19-14-f2daf10c.jpg',
  //       caption: 'Mobile Application'
  //     },
  //     {
  //       image: 'https://i.ibb.co/20TrFnNW/Whats-App-Image-2025-02-11-at-15-19-39-f5deac84.jpg',
  //       caption: 'Alert Management'
  //     }
  //   ],
  //   technologies: [
  //     'React Native',
  //     'Node.js',
  //     'MongoDB',
  //     'Socket.io',
  //     'Google Maps API',
  //     'AWS'
  //   ],
  //   demoUrl: 'https://routeradar.effectivesolutions.lk',
  //   stats: [
  //     {
  //       label: 'Active Users',
  //       value: '1000+',
  //       percentage: 95
  //     },
  //     {
  //       label: 'Tracking Accuracy',
  //       value: '99.9%',
  //       percentage: 99.9
  //     },
  //     {
  //       label: 'Uptime',
  //       value: '99.99%',
  //       percentage: 99.99
  //     }
  //   ]
  // },
  // {
  //   title: 'ePro1000',
  //   category: 'Cloud',
  //   slug: 'epro-1000',
  //   description: 'Smart energy monitoring system for real-time power consumption tracking',
  //   heroImage: 'https://i.ibb.co/23BPCKg9/Whats-App-Image-2025-02-11-at-11-59-22-0a742ba0.jpg',
  //   heroVideo: '/videos/epro-1000.mp4',
  //   overview: [
  //     'ePro1000 is an innovative IoT platform developed by JLanka Technologies that enables remote monitoring of power consumption for electrical devices connected to the grid. This smart energy monitoring system provides real-time insights and analytics to help businesses and individuals optimize their energy usage.',
  //     'The system combines hardware sensors with a sophisticated web application to deliver detailed visualization of energy consumption patterns, cost analysis, and predictive maintenance alerts. ePro1000 is designed to help users reduce energy costs and maintain efficient operations.'
  //   ],
  //   features: [
  //     {
  //       iconName: 'Zap',
  //       title: 'Power Monitoring',
  //       description: 'Real-time monitoring of power consumption with instant alerts',
  //       icon: undefined
  //     },
  //     {
  //       iconName: 'Activity',
  //       title: 'Usage Analytics',
  //       description: 'Detailed analysis of energy usage patterns and trends',
  //       icon: undefined
  //     },
  //     {
  //       iconName: 'Cloud',
  //       title: 'Cloud Platform',
  //       description: 'Secure cloud-based data storage and processing',
  //       icon: undefined
  //     },
  //     {
  //       iconName: 'Wifi',
  //       title: 'Remote Access',
  //       description: 'Monitor and control devices from anywhere',
  //       icon: undefined
  //     }
  //   ],
  //   screenshots: [
  //     {
  //       image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80',
  //       caption: 'Energy Monitoring Dashboard'
  //     },
  //     {
  //       image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80',
  //       caption: 'Usage Analytics'
  //     },
  //     {
  //       image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80',
  //       caption: 'Device Management'
  //     },
  //     {
  //       image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
  //       caption: 'Reports and Insights'
  //     }
  //   ],
  //   technologies: [
  //     'React',
  //     'Node.js',
  //     'PostgreSQL',
  //     'MQTT',
  //     'TensorFlow',
  //     'AWS IoT'
  //   ],
  //   demoUrl: 'https://epro.jlankatechnologies.com',
  //   stats: [
  //     {
  //       label: 'Devices Monitored',
  //       value: '5000+',
  //       percentage: 92
  //     },
  //     {
  //       label: 'Energy Savings',
  //       value: '30%',
  //       percentage: 85
  //     },
  //     {
  //       label: 'Data Accuracy',
  //       value: '99.9%',
  //       percentage: 99.9
  //     }
  //   ]
  // },
   {
    title: 'Ananke IoT Platform',
    category: 'IoT',
    slug: 'ananke',
    description: 'Ananke is our flagship IoT platform',
    heroImage: 'https://i.ibb.co/C3gpg3NR/Whats-App-Image-2025-02-11-at-11-59-23-030bc0f4.jpg',
    heroVideo: '/videos/ANANKE.mp4',
    overview: [
      'Ananke is our flagship IoT platform designed to seamlessly integrate IoT services with non-IoT machines.',
      'The platform is built to provide real-time monitoring, predictive maintenance, and data analytics for industrial equipment, machinery, and devices.',
      'Ananke helps businesses optimize operations, reduce downtime, and improve productivity using IoT and data analytics.'
    ],
    features: [
      {
        iconName: 'Zap',
        title: 'Power Monitoring',
        description: 'Real-time monitoring of power consumption with instant alerts.',
        icon: undefined
      },
      {
        iconName: 'Activity',
        title: 'Usage Analytics',
        description: 'Detailed analysis of energy usage patterns and trends.',
        icon: undefined
      },
      {
        iconName: 'Cloud',
        title: 'Cloud Platform',
        description: 'Secure cloud-based data storage and processing.',
        icon: undefined
      },
      {
        iconName: 'Wifi',
        title: 'Remote Access',
        description: 'Monitor and control devices from anywhere.',
        icon: undefined
      }
    ],
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'MQTT',
      'TensorFlow',
      'AWS IoT'
    ],
    demoUrl: 'https://anankeiot.com',
    stats: [
      {
        label: 'Devices Monitored',
        value: '5000+',
        percentage: 92
      },
      {
        label: 'Energy Savings',
        value: '30%',
        percentage: 85
      },
      {
        label: 'Data Accuracy',
        value: '99.9%',
        percentage: 99.9
      }
    ]
  },
  {
    title: 'Mission Planning System',
    category: 'Web',
    slug: 'mission-planning',
    description: 'A classified GIS-based Mission Planning System for military operations',
    heroImage: 'https://i.ibb.co/s7wpr7L/ae1510b4-3746-4d27-8521-df5a89ea7730.jpg',
    overview: [
      'Developed in collaboration with the Sri Lankan Army, this GIS-based Mission Planning System enhances military intelligence and strategic operations.',
      'Provides detailed mapping, mission strategy tools, and operational insights using real-time data.'
    ],
    features: [
      {
        iconName: 'Map',
        title: 'GIS Mapping',
        description: 'Accurate real-time terrain mapping for strategic planning.',
        icon: undefined
      },
      {
        iconName: 'Shield',
        title: 'Secure Intelligence',
        description: 'Confidential data encryption and secure access.',
        icon: undefined
      }
    ],
    technologies: [
      'GIS',
      'Python',
      'PostgreSQL',
      'AWS',
      'Java'
    ]
  },
  {
    title: 'SriLanka Etraffic mobiile App',
    category: 'Mobile',
    slug: 'etrafic', // Already lowercase, this is correct
    description: 'Sri Lanka Traffic Police mobile app for traffic management and incident reporting',
    heroImage: 'https://i.ibb.co/NnxhZ3ht/Screenshot-2025-02-19-102711.png',
    overview: [
      'The Sri Lanka Traffic Police mobile app is a comprehensive platform for traffic management and incident reporting.',
      'Users can report accidents, traffic violations, and road hazards to authorities in real-time.'
    ],
    features: [
      {
        iconName: 'MapPin',
        title: 'Incident Reporting',
        description: 'Report accidents, traffic violations, and road hazards.',
        icon: undefined
      },
      {
        iconName: 'Shield',
        title: 'Emergency Alerts',
        description: 'Receive real-time alerts for road closures and emergencies.',
        icon: undefined
      }
    ],
    technologies: [
      'React',
      'Node.js',
      'vue.js',
      'nginx',
      'python',
     
    ],
    demoUrl: 'http://etraffic.police.gov.lk:3000/download-page/',
    stats: [
      {
        label: 'Devices Monitored',
        value: '5000+',
        percentage: 92
      },
      {
        label: 'Energy Savings',
        value: '30%',
        percentage: 85
      },
      {
        label: 'Data Accuracy',
        value: '99.9%',
        percentage: 99.9
      }
    ]
  },
  // {
  //   title: 'Hospital Management System',
  //   category: 'Web',
  //   slug: 'hospital-management',
  //   description: 'A comprehensive digital platform for hospital operations',
  //   heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80',
  //   overview: [
  //     'Our Hospital Management System (HMS) promotes the eHospital concept across Sri Lanka.',
  //     'It streamlines patient care, administrative processes, and resource management.'
  //   ],
  //   features: [
  //     {
  //       iconName: 'Database',
  //       title: 'Patient Records',
  //       description: 'Centralized digital health records for seamless management.',
  //       icon: undefined
  //     },
  //     {
  //       iconName: 'Clipboard',
  //       title: 'Resource Management',
  //       description: 'Optimized staff and facility scheduling.',
  //       icon: undefined
  //     }
  //   ],
  //   technologies: [
  //     'React',
  //     'Node.js',
  //     'PostgreSQL',
  //     'AWS'
  //   ]
  // },
  {
    title: 'Jendo',
    category: 'Mobile',
    slug: 'jendo',
    description: 'AI-driven cardiovascular health prediction system',
    heroImage: 'https://i.ibb.co/S4vVxnwN/Whats-App-Image-2025-02-11-at-15-47-55-69d1f8ca.jpg',
    heroVideo: '/videos/jendo.mp4',
    overview: [
      'Jendo is an advanced health-tech innovation that predicts cardiovascular diseases up to five years in advance using non-invasive methods.',
      'By analyzing endothelial functions through temperature variations and digital volume pulse, Jendo provides early warnings for heart conditions, significantly improving patient outcomes.'
    ],
    features: [
      {
        iconName: 'Heart',
        title: 'Early Detection',
        description: 'Advanced AI algorithms for early cardiovascular disease prediction',
        icon: undefined
      },
      {
        iconName: 'Activity',
        title: 'Health Analytics',
        description: 'Comprehensive analysis of cardiovascular health indicators',
        icon: undefined
      },
      {
        iconName: 'Stethoscope',
        title: 'Non-invasive Testing',
        description: 'Painless and accurate cardiovascular assessment',
        icon: undefined
      },
      {
        iconName: 'Cloud',
        title: 'Cloud Processing',
        description: 'Secure cloud-based analysis and data storage',
        icon: undefined
      }
    ],
    screenshots: [
      {
        image: 'https://i.ibb.co/JFxG99SK/jendo-medical-device-kit-845-1.jpg',
        caption: 'cardiovascular health prediction'
      },
      {
        image: 'https://i.ibb.co/VptLb29d/jendo-medical-device-845-1.jpg',
        caption: 'Jendo AI device'
      },
      {
        image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80',
        caption: 'Device Management'
      },
      {
        image: 'https://i.ibb.co/yn8GV9tc/blood-vessel-evolution-320-1.png',
        caption: 'Reports and Insights'
      }
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'PostgreSQL',
      'AWS',
      'AI/ML',
      'Signal Processing'
    ],
    demoUrl: 'www.jendoinnovations.com',
    stats: [
      {
        label: 'Prediction Accuracy',
        value: '95%',
        percentage: 95
      },
      {
        label: 'Early Detection Rate',
        value: '90%',
        percentage: 90
      },
      {
        label: 'Processing Time',
        value: '< 5 min',
        percentage: 98
      }
    ]
    
  }
];