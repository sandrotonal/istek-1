import ContactClient from '@/components/ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Ömer Özbay - Get In Touch',
  description: 'Get in touch with Ömer Özbay — Full-Stack Engineer available for freelance projects, collaborations, and consulting. Reach out via email, Telegram, or X (Twitter).',
  keywords: [
    'Ömer Özbay iletişim', 'Ömer Özbay contact', 'gucluyumhe contact',
    'hire full-stack developer', 'freelance developer Turkey', 'web developer contact',
    'React developer hire', 'SaaS developer contact',
  ],
  openGraph: {
    type: 'website',
    title: 'Contact Ömer Özbay | Full-Stack Engineer',
    description: 'Available for freelance projects, collaborations, and consulting.',
    url: 'https://gucluyumhe.dev/contact',
    siteName: 'Ömer Özbay Portfolio',
    images: [
      {
        url: 'https://gucluyumhe.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Ömer Özbay',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Contact Ömer Özbay',
    description: 'Available for freelance projects, collaborations, and consulting.',
    creator: '@gucluyumhe',
  },
  alternates: {
    canonical: 'https://gucluyumhe.dev/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
