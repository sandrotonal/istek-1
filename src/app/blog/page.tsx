import { getSortedPostsData } from '@/utils/markdown';
import BlogClient from '@/components/BlogClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Ömer Özbay - Technical Insights',
  description: 'Deep Dives & Technical Insights by Ömer Özbay',
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return <BlogClient initialPosts={allPostsData} />;
}
