import { getSortedPostsData } from '@/utils/markdown';
import HomeClient from '@/components/HomeClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ömer Özbay | Full-Stack Engineer & SaaS Developer — gucluyumhe.dev',
  description: 'Ömer Özbay (gucluyumhe) — Full-Stack Engineer building AI-powered SaaS applications, mobile apps, and modern web experiences. Computer Engineering student at Bandırma 17 Eylül University. Developing the future with React, Next.js, TypeScript, and Node.js.',
  openGraph: {
    title: 'Ömer Özbay | Full-Stack Engineer & SaaS Developer',
    description: 'Full-Stack Engineer building AI-powered SaaS apps and modern web experiences. Explore my portfolio, projects, and technical blog.',
    url: 'https://gucluyumhe.dev',
  },
  alternates: {
    canonical: 'https://gucluyumhe.dev',
  },
};

export default function Home() {
  const allPostsData = getSortedPostsData();

  return <HomeClient recentPosts={allPostsData} />;
}
