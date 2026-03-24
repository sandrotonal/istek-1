import { getSortedPostsData } from '@/utils/markdown';
import HomeClient from '@/components/HomeClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ömer Özbay | Full-Stack Engineer',
  description: 'Developing the Future with AI & SaaS. I am a 20-year-old Full-Stack Engineer focused on building high-performance digital architectures.',
};

export default function Home() {
  const allPostsData = getSortedPostsData();

  return <HomeClient recentPosts={allPostsData} />;
}
