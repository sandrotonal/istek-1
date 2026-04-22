import { getSortedPostsData } from '@/utils/markdown';
import BlogClient from '@/components/BlogClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Ömer Özbay - Technical Insights & Deep Dives',
  description: 'Technical blog by Ömer Özbay (gucluyumhe) — Deep dives into React, Next.js, TypeScript, Node.js, system architecture, AI integration, and modern full-stack development.',
  keywords: [
    'Ömer Özbay blog', 'gucluyumhe blog', 'technical blog', 'React blog',
    'Next.js tutorials', 'TypeScript articles', 'full-stack blog Turkey',
    'web development blog', 'AI development blog', 'SaaS architecture',
  ],
  openGraph: {
    type: 'website',
    title: 'Blog | Ömer Özbay — Technical Insights',
    description: 'Deep dives into React, Next.js, TypeScript, and modern full-stack development.',
    url: 'https://gucluyumhe.dev/blog',
    siteName: 'Ömer Özbay Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Ömer Özbay',
    description: 'Technical insights and deep dives by Ömer Özbay.',
    creator: '@gucluyumhe',
  },
  alternates: {
    canonical: 'https://gucluyumhe.dev/blog',
  },
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return <BlogClient initialPosts={allPostsData} />;
}
