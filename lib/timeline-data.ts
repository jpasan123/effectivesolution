export interface TimelineEvent {
  year: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  video?: string;
  description: string;
  content: string[];
  achievements?: string[];
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2013',
    title: 'Our Humble Beginning',
    slug: 'humble-beginning',
    date: '2013',
    image: 'https://i.ibb.co/DgYj4NHg/OIP-10.jpg',
    // video: 'humble-beginning.mp4',
    description: 'Started as a passionate group of engineering undergraduates at University of Moratuwa.',
    content: [
      'Our journey began in 2013 as a passionate group of engineering undergraduates at the University of Moratuwa, driven by a shared vision to innovate and make a mark in the technology world. With a strong foundation in software and hardware engineering, we were determined to bridge the gap between emerging technologies and real-world applications.',
      'What started as a small team working on university projects soon evolved into a dynamic group dedicated to developing cutting-edge solutions. Our initial focus was on research and experimentation, exploring new technologies, and refining our technical expertise. Through numerous late-night brainstorming sessions, prototype developments, and hands-on collaborations, we nurtured our ambition to create a company that would stand out in the tech industry.',
      'Our motivation was clear—to provide exceptional software and hardware solutions that address real-world challenges while pushing the boundaries of innovation. This commitment laid the groundwork for what would become a journey of continuous growth, learning, and technological excellence.'
    ],
    achievements: [
      'Formed a core team of talented engineering undergraduates',
      'Established initial research and development framework',
      'Successfully completed multiple university-level projects',
      'Built strong industry connections through academic excellence'
    ]
  },
  {
    year: '2014',
    title: 'Company Registration',
    slug: 'company-registration',
    date: '17th July 2014',
    image: 'https://i.ibb.co/0yFBSVH2/350624398-556893939980554-5505952606636385835-n-1.jpg',
    description: 'Officially registered as Effective Solutions (Pvt) Ltd.',
    content: [
      'On 17th July 2014, our vision took a significant leap forward as we officially registered Effective Solutions (Pvt) Ltd, marking a milestone in our journey. This achievement was particularly special, as we became the first-ever undergraduate startup from the University of Moratuwa to be formally recognized as a Private Limited Company.',
      'The registration of our company was not just a legal formality—it was a testament to our unwavering dedication, innovation, and entrepreneurial spirit. Transitioning from a group of passionate university students to an officially recognized business entity required overcoming numerous challenges, from refining our business model to securing the necessary approvals and legal frameworks.',
      'This step solidified our commitment to transforming our ideas into real-world technological solutions. With a clear structure in place, we were now fully equipped to offer cutting-edge software and hardware services to businesses and clients. It was a defining moment that paved the way for future growth, enabling us to scale operations, expand our expertise, and establish ourselves as a trusted name in the tech industry.'
    ],
    achievements: [
      'First undergraduate startup from University of Moratuwa to become a Private Limited Company',
      'Successfully developed comprehensive business model and legal framework',
      'Established formal organizational structure and governance',
      'Created foundation for scalable business operations'
    ]
  },
  {
    year: '2014',
    title: 'First Official Product Launch',
    slug: 'first-product-launch',
    date: 'December 2014',
    image: 'https://i.ibb.co/Q5S00Q3/route-radar-icon-fotor-2025021012456.png',
    video: 'humble-beginning.mp4',
    description: 'Launched Route Radar - Our first mobile tracking platform.',
    content: [
      'December 2014 marked a milestone moment in our journey as we proudly launched our first official product – Route Radar, a revolutionary mobile tracking platform. This was not just a product launch; it was the realization of months of relentless effort, innovation, and teamwork.',
      'Route Radar was designed to provide real-time mobile tracking, offering users a seamless and efficient way to monitor movement, optimize routes, and enhance security. Built with cutting-edge technology, the platform was developed to serve both individuals and businesses, addressing the growing need for accurate location tracking, fleet management, and personal safety.',
      'The launch of Route Radar was a memorable achievement, as it not only validated our capabilities as a young tech startup but also positioned us as pioneers in the industry. The overwhelmingly positive response from users and businesses fueled our confidence, encouraging us to push forward with even more ambitious innovations.',
      'Today, Route Radar stands as one of the most popular and widely used mobile tracking solutions in the country, trusted by thousands for its reliability, accuracy, and advanced features. This launch set the foundation for our future successes, reinforcing our commitment to delivering high-quality, innovative solutions that make a difference.'
    ],
    achievements: [
      'Successfully developed and launched Route Radar mobile tracking platform',
      'Acquired first set of paying customers within launch month',
      'Established market presence in fleet management solutions',
      'Received industry recognition for innovative technology implementation'
    ]
  },
  {
    year: "October 2015",
    title: "Phase Two Expansion",
    slug: "phase-two-expansion",
    date: "October 2015",
    image: "https://i.ibb.co/TBmzBpy1/A-modern-corporate-office-with-a-1.png",
    description: "Rapid expansion with new office space and tripled workforce.",
    content: [
      "October 2015 marked a significant phase in the growth of Effective Solutions as the company expanded rapidly, starting with a move into a new office space.",
      "Within just five months, the company successfully tripled its workforce to 15 employees, accelerating its operational capabilities and market presence.",
      "This period of expansion also saw a remarkable increase in valuation, with Effective Solutions reaching X million Rs., solidifying its position as a fast-growing company in the industry.",
      "The rapid growth during this phase demonstrated the company's strong foundation, strategic planning, and ability to scale effectively within a short timeframe."
    ],
    achievements: [
      "Moved into a larger office space to accommodate growth",
      "Tripled the workforce to 15 employees within five months",
      "Increased company valuation to X million Rs.",
      "Strengthened market position and operational capacity"
    ]
  }    
];