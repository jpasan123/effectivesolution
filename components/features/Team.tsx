'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const team = [
  {
    name: 'Keerthi Kodithuwakku',
    role: 'CEO & Founder',
    image: 'https://i.ibb.co/spNrKHy6/464475539-8493908874024053-2062765657774756386-n-1.jpg',
    education: 'BSc. Eng (HONS)',
    title: 'Co-Founder and Chief Executive Officer',
    linkedin: 'https://www.linkedin.com/in/keerthi-kodithuwakku-b98149219/?originalSubdomain=lk',
    email: 'keerthi@example.com',
    details: [
      'Pursued university studies in University of Moratuwa obtaining BSc in Electronic and Telecommunications Engineering and minor in Entrepreneurship.',
      'Worked as the "Technical Responsible" for the "Accident Data Management System" project in Sri Lanka Police and also worked as the "Team Leader" for the "Government Vehicle Fleet Management system" in Ministry of Finance and Planning during undergraduate studies.',
      'Experienced in working with CMMI level 3 quality standards.',
      'Founded Effective Solutions (Pvt) Ltd and handled many projects under Effective Solutions.'
    ]
  },
  
  {
    name: 'Heminda Jayawardana',
    role: 'Director',
    image: 'https://i.ibb.co/QjKzJxVv/OIP-9.jpg',
    education: 'MA. User Experience Design',
    title: 'Director of User Experience',
    linkedin: 'https://www.linkedin.com/in/heminda/?originalSubdomain=lk',
    email: 'heminda@example.com',
    details: [
      'Award-winning UX designer with 10+ years experience',
      'Expertise in user research and usability testing',
      'Led design teams for Fortune 500 companies',
      'Speaker at international design conferences'
    ]
  },
  {
    name: 'Darshana Priyankara',
    role: 'Senior Lead Developer',
    image: 'https://i.ibb.co/BVcQF90g/darshana.jpg',
    education: 'BSc. Software Engineering',
    title: 'Senior Lead Developer',
    linkedin: 'https://www.linkedin.com/in/mkdpriyankara/?originalSubdomain=lk',
    email: 'darshana@example.com',
    details: [
      'Full-stack development expert with 8+ years experience',
      'Specialized in React and Node.js development',
      'Led development of 20+ enterprise applications',
      'Active contributor to open-source projects'
    ]
  },
  {
    name:'charith Prasanga', 
    role: 'IT Manager',
    image: 'https://i.ibb.co/TD5RqCrd/charith-J-1.jpg',
    education: 'BSc. Software Engineering',
    title: 'IT Manager',
    linkedin: 'https://www.linkedin.com/in/charith-prasanga-jayarathna/?originalSubdomain=au',
    email: 'charith@example.com',
    details: [
      'Full-stack development expert with 8+ years experience',
      'Specialized in React and Node.js development',
      'Led development of 20+ enterprise applications',
      'Active contributor to open-source projects'
    ]
  }
];

export function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our talented team of professionals who make the magic happen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div 
                className="relative w-48 h-48 mb-4 overflow-hidden rounded-full cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={member.linkedin} target="_blank" className="text-white hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-white hover:text-primary transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <div className="flex items-start space-x-6">
                <div className="relative w-32 h-32 flex-shrink-0">
                  {selectedMember && (
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <DialogTitle className="text-2xl font-bold mb-2">
                    {selectedMember?.name}
                    {selectedMember?.education && (
                      <span className="text-primary ml-2 text-lg">
                        {selectedMember.education}
                      </span>
                    )}
                  </DialogTitle>
                  <p className="text-xl text-gray-600 italic mb-4">{selectedMember?.title}</p>
                </div>
              </div>
            </DialogHeader>
            <div className="mt-6">
              <ul className="space-y-4">
                {selectedMember?.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="ml-4 text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center space-x-4 mt-8">
                <a href={selectedMember?.linkedin} target="_blank">
                  <Button asChild variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" /> 
                  </Button>
                </a>
                <a href={`mailto:${selectedMember?.email}`}>
                  <Button asChild variant="outline" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
