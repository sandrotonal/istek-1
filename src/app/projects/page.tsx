"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('ALL_SYSTEMS');

  // Get unique categories and flatten them, mapping them to uppercase constants for the tech theme
  const allCategories = ['ALL_SYSTEMS', ...Array.from(new Set(projects.flatMap(p => p.categories))).map(c => c.toUpperCase().replace(/\s+/g, '_'))];

  // Filter projects mapping tech theme constant back to actual category or ALL
  const filteredProjects = filter === 'ALL_SYSTEMS'
    ? projects
    : projects.filter(project => project.categories.map(c => c.toUpperCase().replace(/\s+/g, '_')).includes(filter));

  return (
    <div className="max-w-screen-2xl mx-auto mb-32">
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-primary text-sm tracking-[0.3em] uppercase"
            >
              Engineering Archive // 2025
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface"
            >
              My Engineering Log / <span className="text-primary">Projects</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border ${
                  filter === category
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary bg-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Grid pattern container to match HTML design */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[60vh]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
             // Assign asymmetric bento grid spans based on index to emulate HTML design
             // Pattern: 8, 4, 5, 7, repeat.
             let colSpanClass = 'md:col-span-12';
             const patternIndex = index % 4;
             if (patternIndex === 0) colSpanClass = 'md:col-span-8';
             if (patternIndex === 1) colSpanClass = 'md:col-span-4';
             if (patternIndex === 2) colSpanClass = 'md:col-span-5';
             if (patternIndex === 3) colSpanClass = 'md:col-span-7';

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`${colSpanClass} group`}
              >
                 <Link href={`/projects/${project.id}`} className="block h-full">
                    {/* Different card layouts based on span */}
                    {patternIndex === 0 ? (
                      <div className="glass-card p-8 h-full flex flex-col justify-between">
                         <div>
                            <div className="flex justify-between items-start mb-6">
                              <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface">{project.title}</h2>
                              <div className="flex gap-4">
                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">terminal</span>
                              </div>
                            </div>
                            <p className="text-on-surface-variant text-lg leading-relaxed mb-6 max-w-2xl line-clamp-3">
                                {project.description}
                            </p>
                            <div className="mb-8 p-4 bg-surface-container-lowest border-l-2 border-primary">
                              <h4 className="font-mono text-xs text-primary uppercase tracking-widest mb-2">Technical Focus</h4>
                              <p className="text-sm font-body text-on-surface-variant">Built using modern architecture emphasizing type safety and performance optimization.</p>
                            </div>
                         </div>
                         <div className="flex flex-wrap gap-2 mt-auto">
                           {project.technologies.map(tech => (
                             <span key={tech} className="tech-chip px-3 py-1 text-[10px] font-mono text-on-surface-variant uppercase">{tech}</span>
                           ))}
                         </div>
                      </div>
                    ) : patternIndex === 1 ? (
                        <div className="glass-card p-8 h-full flex flex-col">
                           <div className="aspect-video mb-6 overflow-hidden bg-surface-container-low border border-outline-variant/20 relative">
                                <Image src={project.image} alt={`${project.title} project screenshot`} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"/>
                           </div>
                           <h2 className="text-2xl font-headline font-bold tracking-tight mb-4 text-on-surface">{project.title}</h2>
                           <p className="text-on-surface-variant text-sm mb-6 flex-grow line-clamp-2">{project.description}</p>
                           <div className="flex flex-wrap gap-2 mb-6">
                             {project.technologies.slice(0, 3).map(tech => (
                               <span key={tech} className="tech-chip px-3 py-1 text-[10px] font-mono text-on-surface-variant uppercase">{tech}</span>
                             ))}
                           </div>
                           <div className="flex justify-between items-center mt-auto">
                             <span className="font-mono text-[10px] text-primary">BUILD_STABLE</span>
                             <div className="flex gap-3">
                               <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary">link</span>
                               <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary">code</span>
                             </div>
                           </div>
                        </div>
                    ) : patternIndex === 2 ? (
                         <div className="glass-card p-8 h-full border-primary/30 relative overflow-hidden">
                           <div className="absolute -right-4 -top-4 opacity-10">
                              <span className="material-symbols-outlined text-[120px] text-primary group-hover:rotate-12 transition-transform duration-700">architecture</span>
                           </div>
                           <h2 className="text-2xl font-headline font-bold tracking-tight mb-4 text-on-surface">{project.title}</h2>
                           <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{project.description}</p>
                           <div className="space-y-4 mb-8">
                             <div className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                               <span className="font-mono text-[10px] text-on-surface-variant uppercase">LOAD_SPEED</span>
                               <span className="font-mono text-[10px] text-primary">OPT</span>
                             </div>
                             <div className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                               <span className="font-mono text-[10px] text-on-surface-variant uppercase">STATUS</span>
                               <span className="font-mono text-[10px] text-primary">100%</span>
                             </div>
                           </div>
                           <div className="flex flex-wrap gap-2 mt-auto">
                              {project.technologies.slice(0, 3).map(tech => (
                               <span key={tech} className="tech-chip px-3 py-1 text-[10px] font-mono text-on-surface-variant uppercase">{tech}</span>
                             ))}
                           </div>
                         </div>
                    ) : (
                         <div className="glass-card p-8 h-full bg-surface-container-low/40">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                               <div className="flex flex-col">
                                 <h2 className="text-2xl font-headline font-bold tracking-tight mb-4 text-on-surface">{project.title}</h2>
                                 <p className="text-on-surface-variant text-sm mb-6 line-clamp-3">{project.description}</p>
                                 <ul className="space-y-3 mb-6">
                                   <li className="flex items-center gap-3 text-xs text-on-surface-variant">
                                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                      Custom UI Implementation
                                   </li>
                                   <li className="flex items-center gap-3 text-xs text-on-surface-variant">
                                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                      Responsive Architecture
                                   </li>
                                 </ul>
                                 <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.slice(0, 2).map(tech => (
                                     <span key={tech} className="tech-chip px-3 py-1 text-[10px] font-mono text-on-surface-variant uppercase">{tech}</span>
                                   ))}
                                 </div>
                               </div>
                               <div className="relative rounded-lg overflow-hidden border border-outline-variant/30 hidden md:block">
                                  <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"/>
                                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                               </div>
                             </div>
                         </div>
                    )}
                 </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-on-surface-variant font-mono text-sm"
        >
          {`// NO_SYSTEMS_FOUND`}
        </motion.div>
      )}

{/* Cyber-Minimalist Command Terminal CTA */}
      <section className="mt-32 mb-20 w-full px-4 sm:px-6 flex justify-center">
        <div className="w-full max-w-5xl relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 -z-10"></div>
          
          <div className="relative bg-[#050505]/80 backdrop-blur-md rounded-2xl border border-outline-variant/10 overflow-hidden flex flex-col lg:flex-row hover:border-primary/30 transition-colors duration-500 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            
            <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center relative overflow-hidden min-h-[220px]">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] opacity-30"></div>

               <div className="relative z-10 flex items-center justify-between mb-6">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500"></div>
                 </div>
                 <span className="text-on-surface-variant/40 font-mono text-[10px] tracking-widest uppercase mr-2 flex items-center gap-2"><span className="material-symbols-outlined text-[12px]">vpn_key</span> SSH-CONNECTED</span>
               </div>

               <div className="relative z-10 font-mono text-xs sm:text-sm text-on-surface-variant flex flex-col gap-2.5">
                 <div className="flex items-center flex-wrap">
                   <span className="text-primary font-bold mr-2">root@mainframe:~$</span>
                   <span className="text-on-surface typing-animation inline-block overflow-hidden whitespace-nowrap border-r-2 border-primary pr-1">./deploy_vision.sh</span>
                 </div>
                 <div className="text-on-surface-variant flex items-center gap-2 mt-2 opacity-0 animate-[fade_0.1s_forwards]" style={{animationDelay: '1.5s'}}>
                   <span className="material-symbols-outlined text-[14px] text-green-500">task_alt</span>
                   <span className="truncate">Scanning capabilities [OK]</span>
                 </div>
                 <div className="text-on-surface-variant flex items-center gap-2 opacity-0 animate-[fade_0.1s_forwards]" style={{animationDelay: '2s'}}>
                   <span className="material-symbols-outlined text-[14px] text-green-500">task_alt</span>
                   <span className="truncate">Engineering resources located [OK]</span>
                 </div>
                 <div className="text-[#eee] border-l-2 border-primary pl-3 py-1 bg-primary/5 mt-4 opacity-0 animate-[fade_0.4s_forwards]" style={{animationDelay: '2.8s'}}>
                   <span className="font-bold text-primary animate-pulse">ACTION_REQUIRED:</span> Awaiting your signal to scale infrastructure.
                 </div>
               </div>
            </div>

            <div className="w-full lg:w-[380px] bg-[#080808] border-t lg:border-t-0 lg:border-l border-outline-variant/10 p-6 sm:p-10 flex flex-col justify-center relative">
               <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                 <span className="material-symbols-outlined text-[120px]">fingerprint</span>
               </div>

               <h4 className="text-2xl sm:text-3xl font-headline font-black text-on-surface mb-3 relative z-10 leading-tight">
                  Ready to level up?
               </h4>
               <p className="text-on-surface-variant font-mono text-xs sm:text-sm mb-8 relative z-10 leading-relaxed md:pr-4">
                  Let&apos;s engineer it into reality. Available for bold visions and serious missions.
               </p>

               <div className="w-full space-y-3 relative z-10">
                 <Link href="/contact" className="w-full py-3.5 sm:py-4 bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-[#050505] hover:shadow-[0_0_20px_rgba(var(--color-primary),0.2)] transition-all flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-bold group/link relative overflow-hidden rounded-md">
                   <span className="relative z-10">Establish Ping</span>
                   <span className="material-symbols-outlined text-[16px] relative z-10 group-hover/link:translate-x-1 transition-transform">send</span>
                 </Link>
                 
                 <Link href="/about" className="w-full py-3 text-on-surface-variant/80 bg-surface-container-lowest/50 hover:bg-surface-container-highest border border-outline-variant/20 hover:border-outline-variant/40 hover:text-on-surface transition-all rounded-md flex items-center justify-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest group/link2">
                   <span>View Blueprint (Resume)</span>
                   <span className="material-symbols-outlined text-[14px] opacity-70 group-hover/link2:opacity-100 group-hover/link2:-translate-y-0.5 transition-transform">description</span>
                 </Link>
               </div>
            </div>
            
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: rgba(var(--color-primary), 1) }
          }
          @keyframes fade {
            to { opacity: 1; }
          }
          .typing-animation {
            animation: typing 1s steps(20, end) forwards, blink-caret .75s step-end infinite;
            max-width: 100%;
          }
        `}} />
      </section>
    </div>
  );
}
