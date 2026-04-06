"use client";
import React, { useRef, useEffect, useState, useMemo } from 'react';

export const ScrollAnimatedText = ({ text, className }: { text: string, className?: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const isVisible = useRef(false);

  // Memoize the word split so it doesn't re-run on every render
  const words = useMemo(() => text.split(/(\s+)/), [text]);
  const nonSpaceCount = useMemo(() => words.filter(w => w.trim() !== '').length, [words]);

  useEffect(() => {
    let frameId: number;

    const updateProgress = () => {
      if (containerRef.current && isVisible.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = windowHeight * 0.8;
        const scrollDistance = rect.height + (windowHeight * 0.2);
        const currentProgress = (start - rect.top) / scrollDistance;
        setProgress(Math.max(0, Math.min(1, currentProgress)));
      }
      if (isVisible.current) {
        frameId = requestAnimationFrame(updateProgress);
      }
    };

    // Only animate while visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          frameId = requestAnimationFrame(updateProgress);
        }
      },
      { threshold: 0, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        if (word.trim() === '') {
          return <span key={i}>{word}</span>;
        }

        let wordIndex = 0;
        for (let j = 0; j < i; j++) {
          if (words[j].trim() !== '') wordIndex++;
        }

        const startThreshold = wordIndex / nonSpaceCount;
        const endThreshold = (wordIndex + 1) / nonSpaceCount;
        
        let fillPercentage = 0;
        if (progress >= endThreshold) {
          fillPercentage = 100;
        } else if (progress <= startThreshold) {
          fillPercentage = 0;
        } else {
          fillPercentage = ((progress - startThreshold) / (endThreshold - startThreshold)) * 100;
        }

        return (
          <span key={i} className="relative inline-block">
            <span className="text-[#444]">{word}</span>
            <span 
              className="absolute left-0 top-0 text-[#fff] overflow-hidden whitespace-nowrap transition-colors duration-300"
              style={{ width: `${fillPercentage}%` }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </p>
  );
};
