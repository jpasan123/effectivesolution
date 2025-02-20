'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { type TimelineEvent } from '@/lib/timeline-data';
import { Button } from '@/components/ui/button';

export function TimelineEventPage({ event }: { event: TimelineEvent }) {
  return (
    <>
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <Link href="/#about">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/90 backdrop-blur-sm hover:bg-white/70 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Timeline
            </Button>
          </Link>
        </div>

        <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
          {event.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={`/videos/${event.video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
              <p className="text-xl text-white/90">{event.date}</p>
            </motion.div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            {event.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-gray-600 mb-6"
              >
                {paragraph}
              </motion.p>
            ))}

            {event.achievements && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
                <ul className="space-y-4">
                  {event.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="ml-4 text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}