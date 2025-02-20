import { timelineEvents } from '@/lib/timeline-data';
import { notFound } from 'next/navigation';
import { TimelineEventPage } from '@/components/features/TimelineEventPage';
import { Metadata } from 'next';

type Props = {
  params: { slug: string }
};

export function generateStaticParams() {
  return timelineEvents.map((event) => ({
    slug: event.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const event = timelineEvents.find(e => e.slug === params.slug);
  
  if (!event) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.'
    };
  }

  return {
    title: `${event.title} - Effective Solutions`,
    description: event.description,
  };
}

export default function TimelineEventPageWrapper({ params }: Props) {
  const event = timelineEvents.find(e => e.slug === params.slug);
  
  if (!event) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <TimelineEventPage event={event} />
        </div>
      </div>
    </div>
  );
}