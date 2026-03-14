"use client";

import React, { useState, useEffect, useCallback } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  trigger: number;
  duration?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';

export const ScrambleText = ({ text, className, trigger, duration = 1500 }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(text);

  const scramble = useCallback(() => {
    let frame = 0;
    const totalFrames = Math.floor(duration / 16); // ~60fps
    
    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      
      if (frame <= totalFrames) {
        const scrambled = text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            
            // Resolve characters based on progress
            // Each character has a "resolution point" between 0 and 1
            const charResolutionPoint = index / text.length * 0.5; // resolve from left to right over first 50% of progress
            const isResolved = progress > (charResolutionPoint + 0.3); // add some buffer
            
            if (isResolved || Math.random() < 0.1) {
              return char;
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
        
        setDisplayText(scrambled);
        requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
      }
    };

    animate();
  }, [text, duration]);

  useEffect(() => {
    if (trigger > 0) {
      scramble();
    }
  }, [trigger, scramble]);

  return <p className={className}>{displayText}</p>;
};
