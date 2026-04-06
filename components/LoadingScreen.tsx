"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ["Design", "Create", "Inspire"] as const;
const COUNTER_DURATION = 2700;
const COMPLETE_DELAY = 400;

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((prev) => {
        const next = prev + 1;
        if (next >= WORDS.length - 1) clearInterval(id);
        return next;
      });
    }, 900);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let rafId: number;
    let startTime: number | null = null;
    let completed = false;
    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const next = Math.min((elapsed / COUNTER_DURATION) * 100, 100);
      setProgress(next);
      if (next < 100) {
        rafId = requestAnimationFrame(tick);
      } else if (!completed) {
        completed = true;
        setTimeout(() => { onCompleteRef.current(); }, COMPLETE_DELAY);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const ease = [0.4, 0, 0.2, 1] as const;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black overflow-hidden"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Subtle purple glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d8b4fe]/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-screen" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
      />
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12 opacity-60 flex items-center justify-center p-1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
      >
        <svg 
          width="48" 
          height="30" 
          viewBox="0 0 71 45" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M51.4703 5.96775C53.1306 2.34163 56.7871 0.043433 60.7751 0.0222066C63.1411 0.00961365 65.5084 -0.00915784 67.8647 0.0250418C69.8333 0.0534946 71.2585 2.26332 70.4334 4.05084C68.4352 8.3798 66.5401 12.7881 64.4867 17.0699C64.4139 17.2217 64.3405 17.3744 64.2667 17.5278C62.8369 20.4989 59.8343 22.466 56.5372 22.4381C56.0379 22.4338 55.5366 22.4297 55.0342 22.4259C49.812 22.3863 46.4025 27.8874 48.5974 32.6262L52.1284 40.3243C53.1586 42.5534 51.5728 44.9602 49.1172 44.9494C46.5775 44.9383 44.0376 44.9383 41.4977 44.9452C38.2324 44.9559 35.2731 43.0276 33.9176 40.0568C32.415 36.7635 30.8623 33.4867 29.3295 30.2086C27.9884 27.3404 23.6245 27.3578 22.2983 30.2329C20.6761 33.6935 19.069 37.1613 17.477 40.6362C16.2666 43.2783 13.6798 44.901 10.774 44.9481C8.75299 44.9809 6.69355 44.9623 4.63268 44.9443C1.32441 44.9155 -0.976585 41.3735 0.411749 38.3705C2.37848 34.1662 4.32358 29.9516 6.24714 25.727L15.3046 6.05345C16.9937 2.38449 20.7255 0.0633737 24.7644 0.0198707C26.3686 0.00259209 27.9664 -0.0123416 29.5011 0.0153192C32.4378 0.0684452 34.6187 3.42694 33.4021 6.10033C31.9391 9.31526 30.4921 12.5415 28.9777 15.7235C27.5273 18.7708 29.8721 22.4279 33.2469 22.4123C35.041 22.404 36.8428 22.4016 38.6234 22.4103C41.7923 22.4259 44.6864 20.5486 46.0465 17.6863C46.6367 16.4441 47.2301 15.213 47.7666 14.057L51.4703 5.96775Z" fill="#d8b4fe"/>
        </svg>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="text-4xl md:text-6xl lg:text-7xl font-['DiamondGrotesk',sans-serif] font-bold uppercase tracking-tighter text-[#d8b4fe]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-6xl md:text-8xl lg:text-9xl font-['DiamondGrotesk',sans-serif] font-bold text-[#d8b4fe] tabular-nums leading-none tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
      >
        {Math.round(progress).toString().padStart(3, "0")}
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-[4px] bg-white/5">
          <motion.div
            className="h-full origin-left"
            style={{
              background: "linear-gradient(90deg, #d8b4fe 0%, #9333ea 100%)",
              boxShadow: "0 0 15px rgba(216, 180, 254, 0.4)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
