"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PostMetadata as BlogPost } from '@/utils/markdown';
import { motion } from 'framer-motion';

interface BlogClientProps {
  initialPosts: BlogPost[];
}

export default function BlogClient({ initialPosts }: BlogClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const featuredPost = initialPosts[0];
  
  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [initialPosts, searchTerm, selectedCategory]);
  
  const regularPosts = filteredPosts.slice(1);
  
  // Get unique categories
  const categories = Array.from(new Set(initialPosts.map(post => post.category).filter((cat): cat is string => Boolean(cat))));

  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Hero Header */}
      <header className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-primary text-sm tracking-[0.3em] uppercase"
            >
              Technical Journal // 2026
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface"
            >
              Deep Dives & <span className="text-primary">Technical Insights</span>
            </motion.h1>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
        {/* Articles Feed */}
        <section className="lg:col-span-8 flex flex-col gap-24">
          {/* Featured Article */}
          {featuredPost && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative"
            >
              <Link href={`/blog/${featuredPost.id}`} className="flex flex-col gap-8">
                <div className="relative aspect-[21/9] overflow-hidden rounded-sm bg-surface-container-low border border-outline-variant/15">
                  {featuredPost.coverImage && (
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      priority
                      sizes="100vw"
                      className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-primary/20 backdrop-blur-md text-primary px-3 py-1 text-xs font-mono border border-primary/30 uppercase tracking-widest rounded-sm">Featured</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-on-surface-variant flex-wrap">
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}</span>
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    <span className="text-primary">{featuredPost.category || 'ARCHITECTURE'}</span>
                  </div>
                  <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-headline font-bold group/link mt-4">
                    READ ARTICLE
                    <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Regular Articles */}
          {regularPosts.map((post, index) => (
             <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
             >
              <Link href={`/blog/${post.id}`} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start group">
                <div className="aspect-square overflow-hidden rounded-sm bg-surface-container-low border border-outline-variant/15 relative">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  )}
                </div>
                <div className="md:col-span-2 flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-on-surface-variant flex-wrap">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                    <span className="text-primary uppercase">{post.category || 'ENGINEERING'}</span>
                  </div>
                  <h2 className="text-2xl font-headline font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-12 lg:pl-4">
          
          {/* Minimal Search */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] font-bold">Search Archive</h3>
            </div>
            <div className="relative group">
              <input
                id="search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                aria-label="Search blog posts"
                className="w-full bg-transparent border-b border-outline-variant/30 focus:border-primary text-on-surface font-mono text-sm placeholder:text-outline-variant/50 py-3 pl-2 pr-10 outline-none transition-colors duration-300"
              />
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline-variant/50 group-focus-within:text-primary transition-colors text-xl">search</span>
            </div>
            <div className="h-4">
              {(searchTerm || selectedCategory) && (
                <p className="text-[10px] font-mono text-on-surface-variant transition-opacity">
                  Showing {filteredPosts.length} of {initialPosts.length} posts
                </p>
              )}
            </div>
          </div>

          {/* Minimal Categories (Consolidated) */}
          {categories.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] font-bold">Categories</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1.5 text-[9px] font-mono rounded-full transition-all border ${!selectedCategory ? 'bg-primary text-on-primary-fixed border-primary' : 'bg-transparent text-on-surface-variant border-outline-variant/20 hover:border-primary/40 hover:text-primary'}`}
                >
                  ALL
                </button>
                {categories.map((cat: string) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-[9px] font-mono rounded-full transition-all border ${selectedCategory === cat ? 'bg-primary text-on-primary-fixed border-primary' : 'bg-transparent text-on-surface-variant border-outline-variant/20 hover:border-primary/40 hover:text-primary'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Clean Author Snippet */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] font-bold">Author</h3>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-2xl border border-outline-variant/10 bg-surface-container-low/5 group hover:border-primary/30 hover:bg-surface-container-low/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                {/* Circular Hover Frame around the Image */}
                <div className="p-1 rounded-full border border-outline-variant/20 group-hover:border-primary/50 group-hover:scale-105 transition-all duration-500 shrink-0 shadow-sm">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500">
                     <Image src="/images/author.jpg" alt="Author" fill sizes="64px" className="object-cover" />
                  </div>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-on-surface text-lg group-hover:text-primary transition-colors duration-300">Ömer Özbay</h4>
                  <p className="text-[10px] font-mono text-primary/80 mt-0.5 uppercase tracking-widest">Full-Stack Engineer</p>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed text-center md:text-left mt-2">
                Focused on architectural precision and high-performance system design. Building the future with clean code and rigorous logic.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
