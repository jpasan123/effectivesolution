import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Providers } from '@/components/Providers';
import { ScrollToTop } from '@/components/features/ScrollToTop';
import { Chatbot } from '@/components/features/Chatbot';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EffectiveSolutions - Software Development Company',
  description: 'Leading software development company providing innovative solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <Chatbot />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}