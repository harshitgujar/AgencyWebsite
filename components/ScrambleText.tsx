"use client";

import React, { useRef, useEffect, useCallback } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  trigger: number;
  duration?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';

export const ScrambleText = ({ text, className, trigger, duration = 1500 }: ScrambleTextProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const frameRef = useRef<number>(0);

  const scramble = useCallback(() => {
    let frame = 0;
    const totalFrames = Math.floor(duration / 32); // ~30fps instead of 60fps — still looks smooth, half the work
    
    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      
      if (frame <= totalFrames) {
        const scrambled = text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            const charResolutionPoint = index / text.length * 0.5;
            const isResolved = progress > (charResolutionPoint + 0.3);
            if (isResolved || Math.random() < 0.1) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
        
        // Direct DOM update instead of setState
        if (textRef.current) {
          textRef.current.textContent = scrambled;
        }
        frameRef.current = requestAnimationFrame(animate);
      } else {
        if (textRef.current) {
          textRef.current.textContent = text;
        }
      }
    };

    animate();
  }, [text, duration]);

  useEffect(() => {
    scramble();
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [trigger, scramble]);

  return <p ref={textRef} className={className}>{text}</p>;
};
