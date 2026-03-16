"use client";

import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);
  const currentY = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const setBodyHeight = () => {
      document.body.style.height = `${content.scrollHeight}px`;
    };

    setBodyHeight();
    window.addEventListener('resize', setBodyHeight);
    
    // Check height less frequently – images should load within a few seconds
    const heightInterval = setInterval(setBodyHeight, 3000);

    let rafId: number;
    const lerpFactor = 0.08;

    const smoothScroll = () => {
      scrollY.current = window.scrollY;
      const diff = scrollY.current - currentY.current;

      if (Math.abs(diff) < 0.5) {
        // Snap when close enough and stop the loop
        currentY.current = scrollY.current;
        content.style.transform = `translate3d(0, ${-currentY.current}px, 0)`;
        isScrolling.current = false;
        return; // Stop the rAF loop
      }

      currentY.current += diff * lerpFactor;
      content.style.transform = `translate3d(0, ${-currentY.current}px, 0)`;
      rafId = requestAnimationFrame(smoothScroll);
    };

    const onScroll = () => {
      if (!isScrolling.current) {
        isScrolling.current = true;
        rafId = requestAnimationFrame(smoothScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial position sync
    currentY.current = window.scrollY;
    content.style.transform = `translate3d(0, ${-currentY.current}px, 0)`;

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(heightInterval);
      window.removeEventListener('resize', setBodyHeight);
      window.removeEventListener('scroll', onScroll);
      document.body.style.height = '';
    };
  }, []);

  return (
    <div
      ref={contentRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
