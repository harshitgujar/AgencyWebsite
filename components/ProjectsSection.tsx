"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

/* ───────────────────────────────────────────
   Types
   ─────────────────────────────────────────── */
interface Project {
  num: string;
  category: string;
  subCategory: string;
  campaign: string;
  title: string;
  image: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
  /** Absolute top position inside the parent container (px) */
  top?: number;
  /** Total scrollable height allocated for this section (px). 
   *  Should be roughly (N+1) * viewport height. */
  height?: number;
}

/* ───────────────────────────────────────────
   Default Projects
   ─────────────────────────────────────────── */
const DEFAULT_PROJECTS: Project[] = [
  {
    num: "01",
    category: "VIDEO PRODUCTION",
    subCategory: "CULTURAL BRIDGE",
    campaign: "CAMPAIGN",
    title: "CONCEPT SERIES REDEFINED",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000&auto=format&fit=crop",
  },
  {
    num: "02",
    category: "ARCHITECTURE",
    subCategory: "3D VISUALIZATION",
    campaign: "COMMERCIAL",
    title: "ARCHITECTURAL VISTA BERLIN",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
  },
  {
    num: "03",
    category: "UI/UX DESIGN",
    subCategory: "INTERACTIVE MOTION",
    campaign: "DIGITAL",
    title: "DIGITAL FRONTIER EXPERIENCE",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    num: "04",
    category: "STRATEGY",
    subCategory: "BRAND IDENTITY",
    campaign: "REBRAND",
    title: "MONOLITH STUDIO GLOBAL",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
  },
];

/* ───────────────────────────────────────────
   Component

   This section is designed to sit inside an
   absolutely-positioned parent that uses a
   SmoothScroll (fixed + translate3d) wrapper.
   
   Since CSS `position: sticky` doesn't work
   inside a fixed-position container, we use
   window.scrollY to compute a manual "pin"
   offset for the viewport-sized card stack.
   ─────────────────────────────────────────── */
export default function ProjectsSection({
  projects,
  top: sectionTop = 900,
  height: sectionHeight,
}: ProjectsSectionProps) {
  const items = projects ?? DEFAULT_PROJECTS;
  const N = items.length;

  // If no explicit height, use (N+1) viewports worth
  const [viewportH, setViewportH] = useState(800);
  useEffect(() => {
    setViewportH(window.innerHeight);
    const onResize = () => setViewportH(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const totalHeight = sectionHeight ?? (N + 0.3) * viewportH;

  // Scroll progress through this section: 0 → 1
  const [progress, setProgress] = useState(0);
  // How far into the section the viewport top is → used for "sticky" offset
  const [pinOffset, setPinOffset] = useState(0);

  // Cache ref to the SmoothScroll container so we don't query the DOM every frame
  const smoothContainerRef = useRef<HTMLElement | null>(null);

  /**
   * Read the SmoothScroll container's actual translateY from its CSS
   * transform. This gives us the *visual* scroll position (after lerp),
   * eliminating the drift that occurs when using window.scrollY directly.
   */
  const getSmoothScrollY = useCallback((): number => {
    // Lazily find the SmoothScroll container (position:fixed div with transform)
    if (!smoothContainerRef.current) {
      smoothContainerRef.current = document.querySelector<HTMLElement>(
        '[style*="position: fixed"]'
      );
    }
    const el = smoothContainerRef.current;
    if (!el) return window.scrollY;

    const transform = el.style.transform;
    if (!transform) return window.scrollY;

    // Parse translate3d(0, -Ypx, 0)
    const match = transform.match(/translate3d\(\s*[^,]+,\s*([^,]+)/);
    if (!match) return window.scrollY;

    return -parseFloat(match[1]);
  }, []);

  useEffect(() => {
    let rafId: number;

    const tick = () => {
      const smoothY = getSmoothScrollY();
      const scrolled = smoothY - sectionTop;
      const scrollable = totalHeight - viewportH;

      if (scrollable > 0) {
        const p = Math.max(0, Math.min(1, scrolled / scrollable));
        setProgress(p);

        const maxPin = totalHeight - viewportH;
        const pin = Math.max(0, Math.min(maxPin, scrolled));
        setPinOffset(pin);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [getSmoothScrollY, sectionTop, totalHeight, viewportH]);

  /* ── Per-card progress ── */
  const getCardProgress = (index: number) => {
    const segmentSize = 1 / N;
    const cardStart = index * segmentSize;
    return Math.max(
      0,
      Math.min(1, (progress - cardStart) / segmentSize)
    );
  };



  return (
    <div
      className="absolute left-0 w-full"
      style={{ top: `${sectionTop}px`, height: `${totalHeight}px` }}
    >
      {/* Inner "sticky" viewport — pinned via JS offset */}
      <div
        className="absolute left-0 w-full overflow-hidden"
        style={{
          top: `${pinOffset}px`,
          height: `${viewportH}px`,
        }}
      >
        {/* Section header removed */}



        {/* Card stack */}
        <div className="relative w-full h-full flex items-center justify-center">
          {items.map((project, index) => {
            const cardP = getCardProgress(index);

            // Don't render cards that haven't started
            if (index > 0 && cardP <= 0) return null;

            // Cards being covered by the next one
            const nextP = index < N - 1 ? getCardProgress(index + 1) : 0;
            const scale = 1 - nextP * 0.05;
            const dimOpacity = 1 - nextP * 0.4;
            const blur = nextP * 2;

            // Entry animation: slide up from bottom
            const slideY = index === 0 ? 0 : (1 - cardP) * 100;

            return (
              <div
                key={project.num}
                className="absolute w-[calc(100%-320px)] max-w-[1000px] overflow-hidden group/card cursor-none"
                data-cursor="open"
                style={{
                  aspectRatio: "16 / 9",
                  zIndex: index + 1,
                  transform: `translateY(${slideY}%) scale(${scale})`,
                  opacity: dimOpacity,
                  filter: blur > 0.1 ? `blur(${blur}px)` : "none",
                  willChange: "transform, opacity, filter",
                  transition: "filter 0.1s ease-out",
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  {/* Subtle overlay for text readability if needed */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Card UI Overlay */}
                <div className="relative z-10 w-full h-full p-12 flex flex-col justify-between text-white uppercase font-['DiamondGrotesk',sans-serif]">
                  
                  {/* Top Header */}
                  <div className="flex justify-between items-start">
                    {/* Top Left: Category */}
                    <div className="text-[14px] leading-tight tracking-[0.1em] font-medium">
                      <p>{project.category}</p>
                      <p>{project.subCategory}</p>
                    </div>

                    {/* Top Center: Campaign */}
                    <div className="absolute left-1/2 -translate-x-1/2 text-[18px] tracking-[0.2em] font-light">
                      / {project.campaign}
                    </div>

                    {/* Top Right: Index Circle */}
                    <div className="flex flex-col items-center">
                      <div className="size-8 bg-white rounded-full mb-2" />
                      <span className="text-[18px] font-medium">{project.num}</span>
                    </div>
                  </div>

                  {/* Bottom: Main Title */}
                  <div className="flex flex-col items-center mb-4">
                    <h3 className="text-[clamp(24px,4vw,64px)] font-bold tracking-tight text-center leading-none">
                      ( {project.title} )
                    </h3>
                  </div>

                </div>

                {/* Inner Border Frame */}
                <div className="absolute inset-8 border border-white/20 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
