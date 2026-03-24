import { getPostData, getAllPostIds } from '@/utils/markdown';
import BlogPostClient from '@/components/BlogPostClient';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return <BlogPostClient postData={postData} />;
}
