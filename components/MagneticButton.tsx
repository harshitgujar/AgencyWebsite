"use client";
import React, { useRef, useCallback } from 'react';

export default function MagneticButton({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !innerRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    
    // Direct DOM manipulation instead of setState to avoid re-renders
    innerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    innerRef.current.style.transition = 'transform 0.1s ease-out';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!innerRef.current) return;
    innerRef.current.style.transform = 'translate3d(0, 0, 0)';
    innerRef.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
  }, []);

  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <div className={className}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="absolute inset-0 scale-[2] z-[60] rounded-full cursor-none"
      />
      
      <div
        ref={innerRef}
        className="w-full h-full relative flex items-center justify-center pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        {children}
      </div>
    </div>
  );
}
