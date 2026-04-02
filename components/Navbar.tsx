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
        <svg 
          width="55" 
          height="33" 
          viewBox="0 0 75 45" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[47px] top-[62px] cursor-pointer pointer-events-auto"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <path d="M56.8424 0.00914109C61.3782 0.105 65.9601 -0.0258588 70.5017 0.0400564C71.8604 0.0596949 73.6836 0.124733 75 0C72.2518 5.60153 69.8247 11.4526 67.1236 17.0849C66.2842 18.8358 65.3639 20.7025 64.6216 22.4888C58.8348 22.4782 52.2518 22.3212 46.5197 22.5347C48.114 25.72 49.7228 29.3776 51.2344 32.6412L54.7653 40.3393C55.4202 41.7562 56.3193 43.5664 56.8683 45C50.8286 44.9424 44.7879 44.9399 38.7475 44.9925C35.4703 37.4269 31.7512 29.9949 28.4228 22.4814C27.427 24.9951 26.0739 27.7794 24.9353 30.2479C22.6428 35.1384 20.3804 40.0432 18.1484 44.9622C16.6328 45.0269 14.9464 44.9383 13.411 44.9632C8.99545 45.0348 4.39647 44.8609 0 44.9853C1.03409 42.8616 2.05203 40.5414 3.04871 38.3855C5.01544 34.1812 6.96054 29.9667 8.8841 25.742L20.7312 0.00894527C24.3708 0.144567 28.4377 -0.0363592 32.138 0.0303338C33.5353 0.0556111 37.6662 0.136887 38.8751 0.00184839C36.3914 5.20352 34.0934 10.5303 31.6147 15.7385C30.5735 17.926 29.5437 20.3509 28.4219 22.4823C34.2698 22.434 40.6878 22.3661 46.5168 22.4906C47.6236 19.8095 49.1651 16.7405 50.4036 14.072L56.8424 0.00914109Z" fill="black"/>
        </svg>

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
