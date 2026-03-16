"use client";

import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let frameId: number;
    let isMoving = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Use transform instead of top/left to avoid layout recalculations
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
      
      if (!isMoving) {
        isMoving = true;
        frameId = requestAnimationFrame(updateRingPosition);
      }
    };

    const updateRingPosition = () => {
      const speed = 0.2;
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }

      if (Math.abs(mouseX - ringX) > 0.5 || Math.abs(mouseY - ringY) > 0.5) {
        frameId = requestAnimationFrame(updateRingPosition);
      } else {
        isMoving = false;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div className="cur" ref={dotRef} />
      <div className="cur-r" ref={ringRef} />
    </>
  );
}
