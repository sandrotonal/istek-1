"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [githubData, setGithubData] = useState<{isPrimary: boolean; opacity: number}[]>([]);
  
  useEffect(() => {
    // Generate random data only on client side to avoid hydration mismatch
    const data = Array.from({ length: 84 }).map(() => {
      const isPrimary = Math.random() > 0.4;
      const opacity = isPrimary ? [20, 40, 60, 80, 90][Math.floor(Math.random() * 5)] : 0;
      return { isPrimary, opacity };
    });
    setGithubData(data);
  }, []);
  
  return (
    <div className="pt-32 pb-20 px-6 max-w-screen-xl mx-auto relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 hidden md:block"></div>
      <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -z-10 hidden md:block"></div>

      {/* Section 1: The Architect behind the Code */}
      <section className="mb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-primary text-sm tracking-[0.3em] uppercase"
              >
                Profile // 2025
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface"
              >
                The Architect <span className="text-primary">behind the Code</span>
              </motion.h1>
            </div>
            <div className="relative group/bio">
              {/* Decorative Corner Accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary/30 z-20"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary/30 z-20"></div>

              <div className="glass-card rounded-2xl border border-outline-variant/10 overflow-hidden bg-surface-container-low/40 backdrop-blur-xl">
                {/* Card Header/Terminal Bar */}
                <div className="bg-surface-container-high/50 border-b border-outline-variant/10 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                    <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">BIO_DATA_ARCHIVE // 0x1A4</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-outline-variant/30"></div>
                    <div className="w-1 h-1 rounded-full bg-outline-variant/30"></div>
                  </div>
                </div>

                <div className="p-6 md:p-10 space-y-6 md:space-y-8">
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-lg md:text-2xl font-headline font-medium text-on-surface leading-tight tracking-tight">
                      I am a developer based in <span className="text-primary underline decoration-primary/20 decoration-2 underline-offset-4">Ağrı, Turkey</span>, 
                      studying Computer Engineering at <span className="text-primary underline decoration-primary/20 decoration-2 underline-offset-4">Bandırma 17 Eylül University</span>.
                    </p>
                    <div className="h-[1px] w-full bg-gradient-to-r from-outline-variant/20 to-transparent"></div>
                    <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                      I focus on engineering digital environments that merge <span className="text-primary font-medium">high-performance SaaS architecture</span> with <span className="text-secondary font-medium">intuitive AI intelligence</span>. My approach is architectural: I don&apos;t just write code; I design systems.
                    </p>
                    <p className="text-on-surface-variant/80 leading-relaxed text-sm md:text-base font-light italic border-l-2 border-primary/10 pl-4 md:pl-6 py-1 md:py-2">
                      Specializing in the modern web ecosystem, I build scalable applications that solve complex problems through clean typography, rigorous logic, and cutting-edge tech stacks.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 justify-between border-t border-outline-variant/5">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">architecture</span>
                      </div>
                      <div>
                        <div className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest opacity-50">Philosophy</div>
                        <div className="font-mono text-[10px] text-primary uppercase tracking-wider font-bold">Technical Authority & Precision</div>
                      </div>
                    </div>
                    <div className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest text-right opacity-40 hidden md:block">
                      System_Operational_v2.0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative group mt-12 lg:mt-0">
            <div className="absolute -inset-4 border border-primary/20 rounded-xl group-hover:border-primary/40 transition-colors duration-500"></div>
            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-lg shadow-2xl relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Portrait of Ömer Özbay" className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="/images/profile.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
            {/* Technical Label Overlay */}
            <div className="absolute -bottom-6 -right-2 md:-right-6 glass-card p-4 md:p-6 rounded-lg shadow-2xl border-primary/30 z-10">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-primary uppercase">Status: Operational</span>
                <span className="font-headline font-bold text-base md:text-lg text-on-surface">Ömer Özbay</span>
                <span className="font-mono text-[10px] md:text-xs text-on-surface-variant">Full-Stack Engineer // Student</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Technical Stack */}
      <section className="mb-32">
        <div className="mb-12">
          <span className="font-mono text-secondary text-sm tracking-widest uppercase mb-4 block">02 / Ecosystem</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface">Technical Stack</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="surface-container border border-outline-variant/15 p-6 rounded-lg flex flex-col gap-4 hover:border-primary/50 transition-all group bg-surface-container-low">
            <div className="w-10 h-10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">terminal</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface">TypeScript</h4>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase">Type Safety &amp; Logic</p>
            </div>
          </div>
          <div className="surface-container border border-outline-variant/15 p-6 rounded-lg flex flex-col gap-4 hover:border-primary/50 transition-all bg-surface-container-low">
            <div className="w-10 h-10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">frame_source</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface">React / Next.js</h4>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase">UI/UX Architecture</p>
            </div>
          </div>
          <div className="surface-container border border-outline-variant/15 p-6 rounded-lg flex flex-col gap-4 hover:border-primary/50 transition-all bg-surface-container-low">
            <div className="w-10 h-10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">css</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface">Tailwind CSS</h4>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase">Atomic Styling</p>
            </div>
          </div>
          <div className="surface-container border border-outline-variant/15 p-6 rounded-lg flex flex-col gap-4 hover:border-primary/50 transition-all bg-surface-container-low">
            <div className="w-10 h-10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">database</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface">Node.js</h4>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase">Runtime Infrastructure</p>
            </div>
          </div>
          <div className="surface-container border border-outline-variant/15 p-6 rounded-lg flex flex-col gap-4 hover:border-primary/50 transition-all bg-surface-container-low">
            <div className="w-10 h-10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface">AI &amp; LLMs</h4>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase">AI Implementation</p>
            </div>
          </div>
          <div className="surface-container border border-outline-variant/15 p-6 rounded-lg flex flex-col gap-4 hover:border-primary/50 transition-all bg-surface-container-low">
            <div className="w-10 h-10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">architecture</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface">PostgreSQL / DB</h4>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase">Data Architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Timeline of Experience */}
      <section className="mb-32">
        <div className="mb-12 px-4 md:px-0 text-center md:text-left">
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">03 / Journey</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface">Timeline</h2>
        </div>
        <div className="relative px-4 md:px-0">
          {/* Timeline Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 hidden md:block"></div>

          {/* Timeline Entry 1: Most Recent - University */}
          <div className="relative mb-12 md:mb-24 md:flex justify-between items-center group">
            <div className="md:w-[45%] mb-8 md:mb-0">
              <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/40 transition-all relative overflow-hidden group/card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-[10px] text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-md border border-primary/10 w-fit">Education // 0x01</span>
                  <span className="font-mono text-[10px] text-on-surface-variant opacity-50">2023 — PRES</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface group-hover/card:text-primary transition-colors">Bandırma 17 Eylül University</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Computer Engineering student. Building real-world SaaS projects and AI-integrated applications alongside studies.
                </p>
                <div className="mt-6 pt-6 border-t border-outline-variant/5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest">Active Status</span>
                </div>
              </div>
            </div>
            
            {/* Center Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-background border border-primary/50 rounded-full z-10 hidden md:block">
              <div className="absolute inset-0.5 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>

            <div className="md:w-[45%] hidden md:block">
              <div className="font-mono text-[11px] text-on-surface-variant uppercase tracking-[0.4em] opacity-30 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-700">
                Academic_Foundation
              </div>
            </div>
          </div>

          {/* Timeline Entry 2 */}
          <div className="relative mb-12 md:mb-24 md:flex justify-between items-center flex-row-reverse group">
            <div className="md:w-[45%] mb-8 md:mb-0">
              <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 hover:border-secondary/40 transition-all relative overflow-hidden group/card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-[10px] text-secondary uppercase tracking-wider bg-secondary/10 px-2.5 py-1 rounded-md border border-secondary/10 w-fit">Experience // 0x02</span>
                  <span className="font-mono text-[10px] text-on-surface-variant opacity-50">2022 — 2023</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface group-hover/card:text-secondary transition-colors">AI Integration Specialist</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Custom GPT-based solutions for content management systems. Improved output efficiency by 40% through specialized prompt engineering.
                </p>
                <div className="mt-6 pt-6 border-t border-outline-variant/5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest">Completed Cycle</span>
                </div>
              </div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-background border border-secondary/50 rounded-full z-10 hidden md:block">
              <div className="absolute inset-0.5 bg-secondary rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>

            <div className="md:w-[45%] hidden md:block text-right">
              <div className="font-mono text-[11px] text-on-surface-variant uppercase tracking-[0.4em] opacity-30 group-hover:opacity-100 group-hover:-translate-x-4 transition-all duration-700">
                AI_Implementation
              </div>
            </div>
          </div>

          {/* Timeline Entry 3: Oldest */}
          <div className="relative mb-12 md:mb-24 md:flex justify-between items-center group">
            <div className="md:w-[45%] mb-8 md:mb-0">
              <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/40 transition-all relative overflow-hidden group/card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-[10px] text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-md border border-primary/10 w-fit">Foundation // 0x03</span>
                  <span className="font-mono text-[10px] text-on-surface-variant opacity-50">2020 — 2022</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface group-hover/card:text-primary transition-colors">Frontend Engineering Studies</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  UI physics, responsive frameworks, JavaScript fundamentals. Developed core understanding of digital interface logic.
                </p>
                <div className="mt-6 pt-6 border-t border-outline-variant/5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest">Base Established</span>
                </div>
              </div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-background border border-primary/50 rounded-full z-10 hidden md:block">
              <div className="absolute inset-0.5 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>

            <div className="md:w-[45%] hidden md:block">
              <div className="font-mono text-[11px] text-on-surface-variant uppercase tracking-[0.4em] opacity-30 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-700">
                Core_Logic_Design
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: GitHub Activity */}
      <section className="mb-20">
        <div className="surface-container-low rounded-2xl p-6 md:p-12 relative overflow-hidden border border-outline-variant/10">
          <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
            <span className="material-symbols-outlined text-9xl">terminal</span>
          </div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">04 / Contributions</span>
                <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-4 text-on-surface">Open Source Vitality</h2>
                <p className="text-on-surface-variant max-w-xl text-sm md:text-base">A glimpse into the daily architectural maintenance of digital systems. My GitHub activity reflects a commitment to consistency and technical excellence.</p>
              </div>
              <div className="flex flex-col items-start md:items-end w-full md:w-auto">
                <div className="text-3xl font-headline font-bold text-primary">1,248+</div>
                <div className="font-mono text-[10px] text-on-surface-variant uppercase">Total Contributions this year</div>
              </div>
            </div>

            {/* Stylized GitHub Graph */}
            <div className="grid grid-cols-10 sm:grid-cols-14 md:grid-cols-21 lg:grid-cols-28 gap-1 md:gap-2">
              {githubData.length > 0 ? (
                githubData.map((item, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-[2px] ${item.isPrimary ? 'bg-primary' : 'bg-surface-variant'}`}
                    style={item.isPrimary ? { opacity: item.opacity / 100 } : {}}
                  ></div>
                ))
              ) : (
                // Placeholder while loading (server-side)
                Array.from({ length: 84 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-[2px] bg-surface-variant"
                  ></div>
                ))
              )}
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <Link href="https://github.com/sandrotonal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:text-on-primary transition-colors py-3 px-6 border border-primary/30 hover:bg-primary rounded-lg group">
                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                EXPLORE REPOSITORIES
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
