import ProjectsClient from '@/components/ProjectsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Ömer Özbay - Full-Stack Engineer Portfolio',
  description: 'Explore projects by Ömer Özbay — AI-powered SaaS applications, mobile apps, and modern web experiences built with React, Next.js, TypeScript, Node.js, and cutting-edge technologies.',
  keywords: [
    'Ömer Özbay projects', 'gucluyumhe projeler', 'portfolio projects',
    'SaaS projects', 'React projects', 'Next.js portfolio', 'mobile app developer',
    'AI projects', 'full-stack projects', 'web development portfolio Turkey',
  ],
  openGraph: {
    type: 'website',
    title: 'Projects | Ömer Özbay',
    description: 'Explore AI-powered SaaS apps, mobile applications, and modern web projects by Ömer Özbay.',
    url: 'https://gucluyumhe.dev/projects',
    siteName: 'Ömer Özbay Portfolio',
    images: [
      {
        url: 'https://gucluyumhe.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ömer Özbay Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Ömer Özbay',
    description: 'AI-powered SaaS apps, mobile apps, and modern web projects.',
    creator: '@gucluyumhe',
  },
  alternates: {
    canonical: 'https://gucluyumhe.dev/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
