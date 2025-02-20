import { Hero } from '@/components/features/Hero';
import { Services } from '@/components/features/Services';
import { Portfolio } from '@/components/features/Portfolio';
import { About } from '@/components/features/About';
import { Team } from '@/components/features/Team';
import { Partners } from '@/components/features/Partners';
import { Contact } from '@/components/features/Contact';
import { LoadingScreen } from '@/components/features/LoadingScreen';

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Partners />
      <Contact />
    </main>
  );
}