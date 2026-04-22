import AboutClient from '@/components/AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Ömer Özbay - Full-Stack Engineer',
  description: 'Learn about Ömer Özbay — Computer Engineering student at Bandırma 17 Eylül University. Full-Stack Engineer building AI-powered SaaS applications, mobile apps, and modern web experiences with React, Next.js, TypeScript, and Node.js.',
  keywords: [
    'Ömer Özbay hakkında', 'Ömer Özbay about', 'gucluyumhe', 'Full-Stack Engineer Turkey',
    'Computer Engineering student', 'Bandırma 17 Eylül', 'React developer', 'Next.js developer',
    'TypeScript developer', 'SaaS developer Turkey', 'AI developer', 'web developer portfolio',
  ],
  openGraph: {
    type: 'profile',
    title: 'About Ömer Özbay | Full-Stack Engineer',
    description: 'Computer Engineering student building AI-powered SaaS applications and modern web experiences.',
    url: 'https://gucluyumhe.dev/about',
    siteName: 'Ömer Özbay Portfolio',
    images: [
      {
        url: 'https://gucluyumhe.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ömer Özbay - Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ömer Özbay | Full-Stack Engineer',
    description: 'Computer Engineering student building AI-powered SaaS and modern web experiences.',
    creator: '@gucluyumhe',
  },
  alternates: {
    canonical: 'https://gucluyumhe.dev/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
