'use client';

import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animate');

      const elementInView = (el: Element, scrollOffset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= window.innerHeight - scrollOffset);
      };

      scrollElements.forEach((el) => {
        if (elementInView(el)) {
          el.classList.add('visible');
        }
      });
    };

    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll<HTMLElement>('.parallax-hero');
      const parallaxContent = document.querySelectorAll<HTMLElement>('.parallax-content');

      parallaxElements.forEach((el) => {
        const scrollPosition = window.scrollY;
        // Arka plan için daha yavaş hareket
        el.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      });

      // İçerik için ters yönde daha hafif bir parallax efekti
      parallaxContent.forEach((el) => {
        const scrollPosition = window.scrollY;
        el.style.transform = `translateY(${-scrollPosition * 0.1}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleParallax);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
};
