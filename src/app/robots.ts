import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://gucluyumhe.dev/sitemap.xml',
    host: 'https://gucluyumhe.dev',
  };
}
