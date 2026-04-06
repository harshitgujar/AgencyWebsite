"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<'default' | 'open'>('default');
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the cursor movement
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Slower spring for the ring to create a trailing 'lag' effect
  const ringSpringConfig = { damping: 15, stiffness: 100, mass: 0.6 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorData = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorData === 'open') {
        setCursorType('open');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      <AnimatePresence mode="wait">
        {cursorType === 'default' ? (
          <React.Fragment key="default-cursor">
            {/* Precision Dot */}
            <motion.div
              className="cur-dot fixed w-2 h-2 bg-white rounded-full"
              style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%'
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            />
            {/* Outer Ring */}
            <motion.div
              className="cur-ring fixed w-8 h-8 border border-white/20 rounded-full"
              style={{
                x: ringX,
                y: ringY,
                translateX: '-50%',
                translateY: '-50%'
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            />
          </React.Fragment>
        ) : (
          <motion.div
            key="open"
            className="cur-open fixed w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-2xl"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 150 }}
          >
            <span className="font-['DiamondGrotesk',sans-serif] text-[20px] font-bold italic tracking-tight text-black mt-1">
              open
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
