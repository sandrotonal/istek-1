import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import SplashScreen from "../components/SplashScreen";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00E5FF',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://gucluyumhe.dev'),
  title: {
    default: "Ömer Özbay | Full-Stack Engineer & SaaS Developer",
    template: "%s | Ömer Özbay"
  },
  description: "Ömer Özbay — Computer Engineering student at Bandırma 17 Eylül University. Full-Stack Engineer building AI-powered SaaS applications, mobile apps, and modern web experiences with React, Next.js, TypeScript, and Node.js. Portfolio showcasing projects, technical blog, and expertise.",
  keywords: [
    "Ömer Özbay",
    "Ömer Özbay portfolio",
    "gucluyumhe",
    "gucluyumhe.dev",
    "Full-Stack Developer",
    "Full-Stack Engineer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Node.js Developer",
    "Mobile App Developer",
    "SaaS Developer",
    "AI Integration Developer",
    "Web Development",
    "Turkey Developer",
    "Bandırma",
    "Bandırma 17 Eylül University",
    "Computer Engineering",
    "freelance developer",
    "yazılımcı",
    "web geliştirici",
  ],
  authors: [
    { name: "Ömer Özbay", url: "https://gucluyumhe.dev" }
  ],
  creator: "Ömer Özbay",
  publisher: "Ömer Özbay",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gucluyumhe.dev",
    title: "Ömer Özbay | Full-Stack Engineer & SaaS Developer",
    description: "Full-Stack Engineer building AI-powered SaaS applications and modern web experiences. Explore projects, technical blog, and portfolio.",
    siteName: "Ömer Özbay — gucluyumhe.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ömer Özbay — Full-Stack Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ömer Özbay | Full-Stack Engineer & SaaS Developer",
    description: "Full-Stack Engineer building AI-powered SaaS applications and modern web experiences.",
    creator: "@gucluyumhe",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://gucluyumhe.dev',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="S4AmguZUsl3R0caFt-YZ0ztkck_dYM1yOZPH-j22X_4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
          }
        `}</style>
        {/* JSON-LD: Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ömer Özbay",
              "alternateName": "gucluyumhe",
              "jobTitle": "Full-Stack Engineer",
              "description": "Computer Engineering student and Full-Stack Engineer building AI-powered SaaS applications, mobile apps, and modern web experiences.",
              "url": "https://gucluyumhe.dev",
              "image": "https://gucluyumhe.dev/images/author.jpg",
              "sameAs": [
                "https://github.com/sandrotonal",
                "https://x.com/gucluyumhe",
                "https://t.me/islamakhachev"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Bandırma 17 Eylül University",
                "department": "Computer Engineering"
              },
              "knowsAbout": [
                "Full-Stack Development", "React", "Next.js", "TypeScript", "Node.js", 
                "AI Integration", "SaaS", "PostgreSQL", "Tailwind CSS", "Mobile App Development"
              ],
              "nationality": {
                "@type": "Country",
                "name": "Turkey"
              }
            })
          }}
        />
        {/* JSON-LD: WebSite Schema for Sitelinks Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ömer Özbay Portfolio",
              "alternateName": ["gucluyumhe", "gucluyumhe.dev"],
              "url": "https://gucluyumhe.dev",
              "description": "Full-Stack Engineer portfolio — projects, blog, and expertise by Ömer Özbay.",
              "author": {
                "@type": "Person",
                "name": "Ömer Özbay"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://gucluyumhe.dev/blog?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased min-h-screen flex flex-col bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary-fixed`}
      >
        <SplashScreen />
        <Navbar />
        <Sidebar />
        <main className="flex-grow pt-32 pb-20 px-8 max-w-screen-2xl mx-auto w-full relative">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
