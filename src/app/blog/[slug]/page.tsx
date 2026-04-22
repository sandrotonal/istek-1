import { getPostData, getAllPostIds } from '@/utils/markdown';
import BlogPostClient from '@/components/BlogPostClient';
import { Metadata } from 'next';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

// Dynamic SEO metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const postData = await getPostData(slug);
    const baseUrl = 'https://gucluyumhe.dev';

    return {
      title: `${postData.title} | Ömer Özbay Blog`,
      description: postData.excerpt || `Read "${postData.title}" by Ömer Özbay — Technical insights on full-stack development, architecture, and modern web technologies.`,
      keywords: [
        postData.title,
        ...(postData.tags || []),
        postData.category || 'Development',
        'Ömer Özbay',
        'gucluyumhe',
        'Full-Stack',
        'Blog',
      ],
      authors: [{ name: 'Ömer Özbay', url: baseUrl }],
      openGraph: {
        type: 'article',
        title: postData.title,
        description: postData.excerpt || `Technical article by Ömer Özbay`,
        url: `${baseUrl}/blog/${slug}`,
        siteName: 'Ömer Özbay Portfolio',
        images: [
          {
            url: postData.coverImage || `${baseUrl}/og-image.png`,
            width: 1200,
            height: 630,
            alt: postData.title,
          },
        ],
        publishedTime: postData.date,
        authors: ['Ömer Özbay'],
        tags: postData.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: postData.title,
        description: postData.excerpt || `Technical article by Ömer Özbay`,
        creator: '@gucluyumhe',
        images: [postData.coverImage || `${baseUrl}/og-image.png`],
      },
      alternates: {
        canonical: `${baseUrl}/blog/${slug}`,
      },
    };
  } catch {
    return {
      title: 'Blog Post | Ömer Özbay',
      description: 'Technical insights by Ömer Özbay',
    };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return <BlogPostClient postData={postData} />;
}
