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
      className="fixed inset-0 z-[9999] bg-[#d8b4fe] overflow-hidden"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Smoky gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none" />
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
      />
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12 text-xs md:text-sm text-black/60 uppercase tracking-[0.3em]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
      >
        ARKEN
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-display)] italic text-black/80"
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
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-6xl md:text-8xl lg:text-9xl font-[family-name:var(--font-display)] text-black tabular-nums leading-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
      >
        {Math.round(progress).toString().padStart(3, "0")}
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-[3px] bg-black/10">
          <motion.div
            className="h-full origin-left"
            style={{
              background: "linear-gradient(90deg, #9333ea 0%, #4c1d95 100%)",
              boxShadow: "0 0 8px rgba(147, 51, 234, 0.35)",
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
