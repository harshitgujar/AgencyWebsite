"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    let scrollStopTimer: any = null;

    const handleScroll = () => {
      // Show navbar when scrolling stops
      if (scrollStopTimer) window.clearTimeout(scrollStopTimer);
      scrollStopTimer = window.setTimeout(() => {
        setIsVisible(true);
        console.log('Navbar visible due to scroll stop'); // Added console log
      }, 500); // Shorter delay for better responsiveness

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Show at top
          if (currentScrollY < 120) {
            setIsVisible(true);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }

          const diff = currentScrollY - lastScrollY.current;

          if (diff > 50) {
            // Scrolling down significantly
            setIsVisible(false);
            lastScrollY.current = currentScrollY;
          } else if (diff < -15) { // Slightly more sensitive up-scroll
            // Scrolling up
            setIsVisible(true);
            lastScrollY.current = currentScrollY;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollStopTimer) window.clearTimeout(scrollStopTimer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100000] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="relative w-full h-[120px]">
        {/* Logo */}
        <p 
          className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[47px] not-italic text-[40px] text-black top-[62px] whitespace-nowrap cursor-pointer pointer-events-auto"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          el
        </p>

        {/* Links */}
        <div className="absolute right-[47px] top-[67px] md:right-[155px] flex gap-[40px] md:gap-[60px] pointer-events-auto">
          {['WORK', 'MANIFESTO', 'TEAM', 'CONTACT'].map((item) => (
            <p
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-['DiamondGrotesk',sans-serif] leading-[normal] not-italic text-black text-[12px] whitespace-nowrap cursor-pointer hover:text-[#d8b4fe] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 origin-center"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
}
