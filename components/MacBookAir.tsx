"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ScrambleText } from './ScrambleText';
import { ScrollAnimatedText } from './ScrollAnimatedText';
import MagneticButton from './MagneticButton';
import TeamRevealPanel from './TeamRevealPanel';
import SmokyHeroBackground from './SmokyHeroBackground';
const imgRectangle18 = "https://www.figma.com/api/mcp/asset/98cd0bd3-9a08-4874-9be9-28c67899b9e8";
const imgRectangle20 = "https://www.figma.com/api/mcp/asset/d0475214-bda9-433a-aa3f-8a7c79d9d6d4";
const imgRectangle21 = "https://www.figma.com/api/mcp/asset/a1a2fe64-41fa-4651-a52c-4f7ced9b1f37";
const imgRectangle22 = "https://www.figma.com/api/mcp/asset/b97819a8-8c51-4863-828d-e53c165b9989";
const img4305Fdf59819D6Ff1590B9F5C7B0F8131 = "https://www.figma.com/api/mcp/asset/29a54dd2-dda7-46be-b616-258d4a5b70fd";
const imgRectangle26 = "https://www.figma.com/api/mcp/asset/fc8e20c0-f31f-4eb0-a9ac-8a08b71c1804";
const imgPolygon1 = "https://www.figma.com/api/mcp/asset/ad19b2a6-01a2-42c5-a10b-db4ef12f9381";
const imgVector = "https://www.figma.com/api/mcp/asset/0aca210c-61dd-4118-b3dd-268c24610652";
const imgArrow1 = "https://www.figma.com/api/mcp/asset/1c681b0c-0959-4101-b46f-99c7cbc550e6";
const imgArrow2 = "https://www.figma.com/api/mcp/asset/cfd72fe8-9c51-400a-bce6-54bed42af5f9";
const imgFrame = "https://www.figma.com/api/mcp/asset/01345086-177a-45c3-ae84-ab578226e8b2";

export default function MacBookAir() {
  const [scrambleTrigger, setScrambleTrigger] = useState(0);
  const scramblePhrases = [
    ["MAKE", "WORK", "THAT", "MATTERS", "TO", "YOU"],
    ["MAKE", "WORK", "THAT", "MATTERS", "TO", "PLANET"],
    ["MAKE", "WORK", "THAT", "MATTERS", "TO", "US"]
  ];
  const currentPhrase = scramblePhrases[scrambleTrigger % scramblePhrases.length];
  const [openPanel, setOpenPanel] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<number>(0);
  const [showGreenSection, setShowGreenSection] = useState(false);
  const greenSectionRef = useRef<HTMLDivElement>(null);
  const studentLedRef = useRef<HTMLDivElement>(null);
  const [studentLedTrigger, setStudentLedTrigger] = useState(0);

  const teamMembers = [
    {
      bio: 'Harshit Gujar is a visionary creative director and branch leader. With a keen eye for design and storytelling, he drives the creative vision across all projects. His clients include global brands and emerging startups alike, pushing boundaries in art direction, visual production, and event planning.',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
    {
      bio: 'Amaan Ahmed is a multi-disciplinary designer and creative strategist. Specializing in brand identity and digital experiences, he brings a unique perspective to every project. His work spans across motion design, UI/UX, and creative direction for leading brands worldwide.',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
    {
      bio: 'Mukunda Bhanot brings technical excellence and creative innovation to the team. With expertise in 3D visualization and interactive experiences, he creates immersive digital worlds that captivate audiences and push the boundaries of what\'s possible in digital design.',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  ];

  useEffect(() => {
    // 2 seconds of original text + 1.5 seconds for animation
    const interval = setInterval(() => {
      setScrambleTrigger((prev: number) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: "01",
      title: "MARKETING STRATEGY",
      description: "We don't just follow trends; we make them look like ancient history. In a world drowning in static, quiet brands don't just fade—they die. Your brand deserves to be unignorable, and we're here to turn up the volume until the competition is just background noise.\n\n It's time to stop blending in and start getting loud. Just send a simple \"hi\" our way, and we'll show you exactly ",
      subtext: "Complete solution\nfrom 0 to 100%"
    },
    {
      id: "02",
      title: "UI/UX DESIGN",
      description: "Design that speaks louder than words. We create intuitive, high-impact interfaces that don't just look good—they feel right. From wireframes to premium visual experiences, we ensure your users are hooked from the first click. Stop settling for mediocre layouts and start leading with design that dominates.",
      subtext: "User-Centric\nExperiences"
    },
    {
      id: "03",
      title: "WEB-DEVELOPMENT",
      description: "Performance-driven web solutions that push the boundaries of what's possible on the internet. We build fast, scalable, and visually stunning websites that aren't just tools—they're experiences. Whether it's a high-performance landing page or a complex web app, we deliver code that wins.",
      subtext: "Modern\nTech Stack"
    },
    {
      id: "04",
      title: "APP DEVELOPMENT",
      description: "Mobile experiences that stay in your users' pockets and minds. We develop robust, high-performance applications for iOS and Android that combine seamless logic with cutting-edge design. Turn your idea into a powerful mobile tool that people actually love to use every single day.",
      subtext: "Native &\nCross-Platform"
    },
    {
      id: "05",
      title: "BRANDING",
      description: "Your brand is your identity, and we're here to make it legendary. We craft unique visual languages and narratives that resonate and endure. From logo design to comprehensive brand guidelines, we build the foundation that makes your business unignorable and sets you apart from the crowd.",
      subtext: "Identity &\nStorytelling"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowGreenSection(true);
        } else {
          setShowGreenSection(false);
        }
      },
      { threshold: 0.2 }
    );

    if (greenSectionRef.current) {
      observer.observe(greenSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Initial trigger when entering viewport
          setStudentLedTrigger(prev => prev + 1);
          
          // Start repeating interval (2s stable + 1.5s animation = 3.5s total)
          if (!interval) {
            interval = setInterval(() => {
              setStudentLedTrigger(prev => prev + 1);
            }, 3500);
          }
        } else {
          // Stop interval when leaving viewport to save performance
          if (interval) {
            clearInterval(interval);
            interval = null;
          }
        }
      },
      { threshold: 0.1 }
    );

    if (studentLedRef.current) {
      observer.observe(studentLedRef.current);
    }

    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="bg-transparent relative w-screen overflow-x-hidden" 
      style={{ height: '9160px', willChange: 'scroll-position' }}
      data-name="MacBookAir - 2" 
      data-node-id="7:29"
    >
      <div 
        className="absolute h-[688px] left-0 top-0 w-full overflow-hidden" 
        data-node-id="7:31"
      >
        {/* Only the background is masked to fade at the bottom */}
        <div 
          className="absolute inset-0"
          style={{ 
            maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        >
          <SmokyHeroBackground />
        </div>

        {/* Text remains fully visible and sits on top */}
        <h1 className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[calc(50%-645px)] not-italic text-[150px] text-black top-[calc(50%+179px)] whitespace-nowrap z-10" data-node-id="7:33">
          UNITED,UNBOUND
        </h1>
        <ScrambleText
          text={currentPhrase[0]}
          className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[calc(50%-538px)] not-italic text-[16px] text-black top-[475px] whitespace-nowrap"
          trigger={scrambleTrigger}
        />
        <ScrambleText
          text={currentPhrase[1]}
          className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[calc(50%-331px)] not-italic text-[16px] text-black top-[475px] whitespace-nowrap"
          trigger={scrambleTrigger}
        />
        <ScrambleText
          text={currentPhrase[2]}
          className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[calc(50%-119px)] not-italic text-[16px] text-black top-[475px] whitespace-nowrap"
          trigger={scrambleTrigger}
        />
        <ScrambleText
          text={currentPhrase[3]}
          className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[calc(50%+84px)] not-italic text-[16px] text-black top-[475px] whitespace-nowrap"
          trigger={scrambleTrigger}
        />
        <ScrambleText
          text={currentPhrase[4]}
          className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[calc(50%+319px)] not-italic text-[16px] text-black top-[475px] whitespace-nowrap"
          trigger={scrambleTrigger}
        />
        <ScrambleText
          text={currentPhrase[5]}
          className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[calc(50%+504px)] not-italic text-[16px] text-black top-[475px] whitespace-nowrap"
          trigger={scrambleTrigger}
        />
      </div>
      
      {/* Sticky Project Progress Track */}
      <div 
        className="absolute left-0 w-full pointer-events-none" 
        style={{ top: '957px', height: '1836px' }}
      >
        <div className="sticky top-[107px]">
          {/* Polygon Head */}
          <div className="absolute flex items-center justify-center left-[130px] size-[8px] top-0">
            <div className="flex-none rotate-90">
              <div className="relative size-[8px]" data-node-id="27:26">
                <div className="absolute bottom-1/4 left-[15.83%] right-[15.83%] top-[12.5%]">
                  <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Clean vertical track */}
          <div className="absolute left-[144px] top-[3px] h-[600px] w-px bg-black/10" />
          <div className="absolute left-[144px] top-[3px] h-[40px] w-px bg-black" />
        </div>
      </div>
      <div className="absolute h-[421px] left-[266px] top-[993px] w-[811px]" data-node-id="27:27">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle18} />
      </div>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[266px] not-italic text-[20px] text-black top-[1434px] whitespace-nowrap" data-node-id="27:58">
        CONCEPT SERIES, WEB DEVELOPMENT WITH ENTIRE BRANDING
      </p>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[1152px] not-italic text-[32px] text-black top-[1202px] whitespace-nowrap" data-node-id="27:73">
        01
      </p>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[266px] not-italic text-[#6e6d6d] text-[14px] top-[1461px] uppercase w-[771px]" data-node-id="27:123">{`Creative Direction, Artist Curation, Art Direction, Key Visual & Video Production, Event Planning, Event Production`}</p>

      {/* Project 02 */}
      <div className="absolute h-[421px] left-[266px] top-[1593px] w-[811px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/project_2.png" />
      </div>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[266px] not-italic text-[20px] text-black top-[2034px] whitespace-nowrap">
        ARCHITECTURAL VISTA, MINIMALIST SPATIAL DESIGN
      </p>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[266px] not-italic text-[#6e6d6d] text-[14px] top-[2061px] uppercase w-[771px]">{`3D Visualization, Spatial Planning, Interior Curation, Lighting Design, Material Sourcing`}</p>

      {/* Project 03 */}
      <div className="absolute h-[421px] left-[266px] top-[2193px] w-[811px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/project_3.png" />
      </div>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[266px] not-italic text-[20px] text-black top-[2634px] whitespace-nowrap">
        DIGITAL FRONTIER, INTERACTIVE EXPERIENCES
      </p>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[266px] not-italic text-[#6e6d6d] text-[14px] top-[2661px] uppercase w-[771px]">{`UI/UX Research, Prototyping, Motion Graphics, Web Interaction, Brand Innovation`}</p>
      <div id="work" className="absolute top-[847px] left-[147px]">
        <p className="font-['DiamondGrotesk',sans-serif] leading-[normal] not-italic text-[24px] text-black whitespace-nowrap" data-node-id="27:117">
          WHAT WE DO
        </p>
      </div>
      <div id="team" className="absolute top-[6403px] left-[147px]">
        <p className="font-['DiamondGrotesk',sans-serif] leading-[normal] not-italic text-[24px] text-black whitespace-nowrap" data-node-id="27:121">
          TEAM
        </p>
      </div>
      <MagneticButton
        onClick={() => scrollToSection('work')}
        className="-translate-x-1/2 absolute left-1/2 top-[2879px] group"
      >
        <div
          className="bg-[#d8b4fe] h-[46px] rounded-[40px] w-[256px] flex items-center justify-center transition-all duration-500 group-hover:bg-black"
          data-node-id="27:119"
        >
          <p
            className="font-['DiamondGrotesk',sans-serif] leading-none not-italic text-[16px] text-black group-hover:text-white whitespace-nowrap transition-colors duration-500"
            data-node-id="27:120"
          >
            DISCOVER ALL PROJECTS
          </p>
        </div>
      </MagneticButton>
      <MagneticButton
        className="absolute left-[670px] top-[4015px] flex items-center gap-2 group cursor-none"
        onClick={() => scrollToSection('contact')}
      >
        <p className="font-['DiamondGrotesk',sans-serif] text-[14px] text-[#444] group-hover:text-black transition-colors underline decoration-solid whitespace-nowrap">
          JUST SAY HII
        </p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#444] group-hover:text-black transition-colors transform rotate-0"
        >
          <line x1="7" y1="7" x2="17" y2="17" />
          <polyline points="17 7 17 17 7 17" />
        </svg>
      </MagneticButton>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[266px] not-italic text-[#6e6d6d] text-[14px] top-[1461px] uppercase w-[771px]" data-node-id="27:123">{`Creative Direction, Artist Curation, Art Direction, Key Visual & Video Production, Event Planning, Event Production`}</p>
      <div className="absolute overflow-hidden h-[403px] left-[452px] top-[6493px] w-[311px]" data-node-id="27:128">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle20} />
      </div>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[452px] not-italic text-[14px] text-black top-[6903px] uppercase whitespace-nowrap" data-node-id="27:134">
        (01)
      </p>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[122.96500396728516%] left-[739px] not-italic text-[32px] text-black top-[6609px] uppercase w-[189px]" data-node-id="27:135">
        HARSHIT GUJAR
      </p>
      <MagneticButton className="absolute h-[75px] left-[739px] top-[6725px] w-[76px] flex items-center justify-center" data-node-id="33:2" onClick={() => setOpenPanel(openPanel === 0 ? null : 0)}>
        <div className="absolute inset-0 rounded-full border-[0.2px] border-black" />
        <svg className="w-10 h-10 text-black relative z-10 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.6" style={{ transform: openPanel === 0 ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
        </svg>
      </MagneticButton>
      <TeamRevealPanel
        isOpen={openPanel === 0}
        onClose={() => setOpenPanel(null)}
        member={teamMembers[0]}
        top={6810}
        left={775}
      />
      <div className="absolute overflow-hidden h-[403px] left-[164px] top-[7180px] w-[311px]" data-node-id="33:4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle21} />
      </div>
      <div className="absolute font-['DiamondGrotesk',sans-serif] leading-[122.96500396728516%] left-[451px] not-italic text-[32px] text-black top-[7297px] uppercase w-[189px] whitespace-pre-wrap" data-node-id="33:5">
        <p className="mb-0">{`aMAAN `}</p>
        <p>AHMED</p>
      </div>
      <MagneticButton className="absolute h-[75px] left-[451px] top-[7413px] w-[76px] flex items-center justify-center" data-node-id="33:7" onClick={() => setOpenPanel(openPanel === 1 ? null : 1)}>
        <div className="absolute inset-0 rounded-full border-[0.2px] border-black" />
        <svg className="w-10 h-10 text-black relative z-10 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.6" style={{ transform: openPanel === 1 ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
        </svg>
      </MagneticButton>
      <TeamRevealPanel
        isOpen={openPanel === 1}
        onClose={() => setOpenPanel(null)}
        member={teamMembers[1]}
        top={7498}
        left={487}
      />
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[164px] not-italic text-[14px] text-black top-[7590px] uppercase whitespace-nowrap" data-node-id="33:8">
        (02)
      </p>
      <div className="absolute overflow-hidden h-[403px] left-[452px] top-[7894px] w-[311px]" data-node-id="33:12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle22} />
      </div>
      <div className="absolute font-['DiamondGrotesk',sans-serif] leading-[122.96500396728516%] left-[739px] not-italic text-[32px] text-black top-[8010px] uppercase w-[189px] whitespace-pre-wrap" data-node-id="33:13">
        <p className="mb-0">{`MUKUNDA `}</p>
        <p>BHANOT</p>
      </div>
      <MagneticButton className="absolute h-[75px] left-[739px] top-[8126px] w-[76px] flex items-center justify-center" data-node-id="33:15" onClick={() => setOpenPanel(openPanel === 2 ? null : 2)}>
        <div className="absolute inset-0 rounded-full border-[0.2px] border-black" />
        <svg className="w-10 h-10 text-black relative z-10 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.6" style={{ transform: openPanel === 2 ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
        </svg>
      </MagneticButton>
      <TeamRevealPanel
        isOpen={openPanel === 2}
        onClose={() => setOpenPanel(null)}
        member={teamMembers[2]}
        top={8210}
        left={775}
      />
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[452px] not-italic text-[14px] text-black top-[8304px] uppercase whitespace-nowrap" data-node-id="33:16">
        (03)
      </p>
      <div className="-translate-y-1/2 absolute aspect-[194.28570556640625/77.02499389648438] left-[-9.53%] right-[107.03%] top-[calc(50%-512.5px)]" data-name="Vector" data-node-id="27:114">
        <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute left-[367px] size-[736px] top-[-1124px]" data-name="4305fdf59819d6ff1590b9f5c7b0f813 1" data-node-id="7:46">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4305Fdf59819D6Ff1590B9F5C7B0F8131} />
      </div>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[453px] not-italic text-black text-[14px] top-[6468px] uppercase whitespace-nowrap" data-node-id="27:129">
        Branch Director, CREATIVE Director
      </p>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[165px] not-italic text-black text-[14px] top-[7156px] uppercase whitespace-nowrap" data-node-id="33:9">
        Branch Director, CREATIVE Director
      </p>
      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[453px] not-italic text-black text-[14px] top-[7869px] uppercase whitespace-nowrap" data-node-id="33:17">
        Branch Director, CREATIVE Director
      </p>
      <div id="contact" className="absolute w-full bg-[#fdfdfd] text-black flex flex-col items-center overflow-hidden" style={{ top: '8449px', height: '711px' }}>
        <div className="w-full max-w-[1200px] h-full flex flex-col py-16 px-8 justify-between relative">
          
          {/* Top Info Section */}
          <div className="flex justify-between items-start w-full uppercase font-['DiamondGrotesk'] text-[12px] font-medium leading-[1.4]">
            <div className="w-[180px]">
              <p>WE CAN&apos;T WAIT TO</p>
              <p>MEET YOU IN PARIS,</p>
              <p>SEE YOU SOON!</p>
            </div>
            <div className="text-right">
              <p>35.6762° N, 139.6503° E</p>
              <p>51.5072° N, 0.1276° W</p>
              <p>40.7128° N, 74.0060° W</p>
            </div>
          </div>

          {/* Main Headline */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <h2 className="font-['DiamondGrotesk'] font-bold text-[140px] leading-[0.8] text-center uppercase cursor-default select-none">
              <span className="inline-block whitespace-nowrap">
                {"LET'S".split('').map((char, i) => (
                  <span key={i} className="inline-block transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:-translate-y-3 hover:text-[#d8b4fe] px-[2px]">
                    {char}
                  </span>
                ))}
              </span>
              <div className="italic relative inline-block mx-12">
                <span className="absolute -inset-x-12 top-1/2 -translate-y-1/2 text-[180px] font-light opacity-20 pointer-events-none">(</span>
                <span className="relative z-10">
                  {"WORK".split('').map((char, i) => (
                    <span key={i} className="inline-block transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:-translate-y-3 hover:text-[#d8b4fe] px-[2px]">
                      {char}
                    </span>
                  ))}
                </span>
                <span className="absolute -inset-x-12 top-1/2 -translate-y-1/2 text-[180px] font-light opacity-20 pointer-events-none">)</span>
              </div>
              <span className="inline-block whitespace-nowrap">
                {"TOGETHER".split('').map((char, i) => (
                  <span key={i} className="inline-block transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:-translate-y-3 hover:text-[#d8b4fe] px-[2px]">
                    {char}
                  </span>
                ))}
              </span>
            </h2>
            
            <a 
              href="mailto:contact@us.in" 
              className="mt-12 font-['DiamondGrotesk'] text-[24px] font-medium transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:-translate-y-2 border-b border-black pb-1 inline-block"
            >
              contact@us.in
            </a>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-between items-center w-full uppercase font-['DiamondGrotesk'] text-[11px] font-bold tracking-tighter pt-8">
            <a href="#" className="hover:underline transition-all">X</a>
            <a href="#" className="hover:underline transition-all">INSTAGRAM</a>
            <a href="#" className="hover:underline transition-all">LINKEDIN</a>
            <a href="#" className="hover:underline transition-all">PRIVACY & COOKIE POLICY</a>
            
            <MagneticButton className="relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex items-center gap-3 border border-black rounded-full px-5 py-2.5 hover:bg-black hover:text-white transition-all duration-500 group/top">
                <span className="text-[11px]">BACK TO THE TOP</span>
                <div className="size-2 bg-current rounded-full transition-transform duration-500 group-hover/top:scale-125" />
              </div>
            </MagneticButton>
          </div>

        </div>
      </div>
      <ScrollAnimatedText
        className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[147px] not-italic text-[64px] top-[3257px] w-[763px] whitespace-pre-wrap"
        text={`We don't follow trends; we make them ancient history. In a world of static, quiet brands die—we make yours unignorable. Stop blending in and get loud. Just say "hi" to see exactly how we'll dominate together.`}
      />
      <div className="absolute flex h-[10px] items-center justify-center left-[311px] top-[873px] w-[11px]">
        <div className="flex-none rotate-[42.27deg]">
          <div className="h-0 relative w-[14.866px]" data-node-id="50:80">
            <div className="absolute inset-[-7.36px_-6.73%_-7.36px_0]">
              <img alt="" className="block max-w-none size-full brightness-0" src={imgArrow1} />
            </div>
          </div>
        </div>
      </div>
      <div id="manifesto" className="absolute top-[3147px] left-[147px]">
        <p className="font-['DiamondGrotesk',sans-serif] leading-[normal] not-italic text-[24px] text-black whitespace-nowrap" data-node-id="50:81">
          MANIFESTO
        </p>
      </div>
      <div className="absolute flex h-[10px] items-center justify-center left-[296px] top-[3170px] w-[11px]">
        <div className="flex-none rotate-[42.27deg]">
          <div className="h-0 relative w-[14.866px]" data-node-id="50:82">
            <div className="absolute inset-[-7.36px_-6.73%_-7.36px_0]">
              <img alt="" className="block max-w-none size-full brightness-0" src={imgArrow2} />
            </div>
          </div>
        </div>
      </div>
      {/* Removed static frame arrow, now unified in MagneticButton above */}
      <div className="absolute left-[217px] size-[27px] top-[6414px]" data-name="Frame" data-node-id="59:163">
        <img alt="" className="absolute block max-w-none size-full brightness-0" src={imgFrame} />
      </div>
      <div ref={greenSectionRef} className="absolute left-[123px] size-[680px] top-[4233px]" data-node-id="50:99">
        {/* Base border */}
        <div className="absolute inset-0 rounded-full border-[2px] border-[#d8b4fe]/15" />
        {/* Fill border */}
        <div
          className="absolute inset-0 rounded-full border-[2px] border-[#d8b4fe]/60 transition-all ease-out"
          style={{
            clipPath: showGreenSection ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
            boxShadow: 'none',
            transitionDuration: showGreenSection ? '1200ms' : '300ms',
            transitionDelay: showGreenSection ? '0ms' : '400ms',
            transform: 'translateZ(0)',
            willChange: 'clip-path'
          }}
        />
      </div>
      <div className="absolute left-[476px] size-[680px] top-[4233px]" data-node-id="50:100">
        <div className="absolute inset-0 rounded-full border-[2px] border-[#d8b4fe]/15" />
        <div
          className="absolute inset-0 rounded-full border-[2px] border-[#d8b4fe]/60 transition-all ease-out"
          style={{
            clipPath: showGreenSection ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
            boxShadow: 'none',
            transitionDuration: showGreenSection ? '1200ms' : '300ms',
            transitionDelay: showGreenSection ? '300ms' : '300ms'
          }}
        />
      </div>
      <div className="absolute flex h-[403.699px] items-center justify-center left-0 top-[4517px] w-[1279.046px]">
        <div className="flex-none rotate-[17.52deg]">
          {/* Base line */}
          <div className="h-[2px] w-[1341.243px] bg-[#d8b4fe]/15" />
          {/* Fill line */}
          <div
            className="absolute top-0 left-0 h-[2px] w-[1341.243px] bg-[#d8b4fe]/60 transition-all ease-out"
            style={{
              clipPath: showGreenSection ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
              transitionDuration: showGreenSection ? '1200ms' : '300ms',
              transitionDelay: showGreenSection ? '600ms' : '200ms'
            }}
          />
        </div>
      </div>
      <div className="absolute flex h-[403.699px] items-center justify-center left-[0.63px] top-[4372px] w-[1279.046px]">
        <div className="-scale-y-100 flex-none rotate-[-17.52deg]">
          {/* Base line */}
          <div className="h-[2px] w-[1341.243px] bg-[#d8b4fe]/15" />
          {/* Fill line */}
          <div
            className="absolute top-0 left-0 h-[2px] w-[1341.243px] bg-[#d8b4fe]/60 transition-all ease-out"
            style={{
              clipPath: showGreenSection ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)',
              transitionDuration: showGreenSection ? '1200ms' : '300ms',
              transitionDelay: showGreenSection ? '900ms' : '100ms'
            }}
          />
        </div>
      </div>
      <div className="absolute h-[2px] left-[0.93px] top-[4647px] w-[1279.141px]" data-node-id="50:108">
        {/* Base line */}
        <div className="absolute inset-0 bg-[#d8b4fe]/15" />
        {/* Fill line */}
        <div
          className="absolute inset-0 bg-[#d8b4fe]/60 transition-all ease-out"
          style={{
            clipPath: showGreenSection ? 'inset(0 0 0 0)' : 'inset(0 50% 0 50%)',
            transitionDuration: showGreenSection ? '1200ms' : '300ms',
            transitionDelay: showGreenSection ? '1200ms' : '0ms'
          }}
        />
      </div>
      <div ref={studentLedRef} className="absolute inset-0 pointer-events-none" style={{ top: '4503px', height: '100px' }} />
      <div className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[218px] not-italic text-[20px] text-black top-[4503px] whitespace-nowrap" data-node-id="54:109">
        <ScrambleText text="WE'RE SMALL" trigger={studentLedTrigger} className="mb-0" />
        <ScrambleText text="STUDENT-LED" trigger={studentLedTrigger} />
      </div>
      <div className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[948px] not-italic text-[20px] text-black top-[4503px] whitespace-nowrap" data-node-id="54:111">
        <ScrambleText text="AND WE'RE" trigger={studentLedTrigger} className="mb-0" />
        <ScrambleText text="INDIA BORN" trigger={studentLedTrigger} />
      </div>
      <div className="-translate-x-1/2 absolute overflow-hidden group h-[434px] left-[calc(50%-0.5px)] top-[4342px] w-[369px]" data-node-id="54:110">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 ease-out group-hover:scale-110" src={imgRectangle26} />
      </div>
      <div className="absolute font-['DiamondGrotesk',sans-serif] font-bold leading-[0.9] left-[calc(50%-560px)] text-[140px] text-black top-[5133px] w-[1100px] whitespace-pre-wrap" data-node-id="56:115" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">
          WHAT <span className="text-[20px] font-medium text-black/40 align-top inline-block ml-6 mt-10 tracking-[0.2em] transform -translate-y-2">(SRVS)</span>
        </p>
        <p>WE CAN DO</p>
      </div>

      <p className="absolute font-['DiamondGrotesk',sans-serif] leading-[normal] left-[calc(50%+102px)] not-italic text-black text-[24px] top-[5186px] w-[452px]" data-node-id="56:116">{`"Turning static into substance. Tech solutions that refuse to blend in."`}</p>
      <div className="absolute left-0 top-[5504px] w-full flex flex-col items-center">
        {services.map((service, index) => {
          const isExpanded = expandedService === index;
          return (
            <div
              key={service.id}
              className="relative w-[1190px] border-t border-[rgba(0,0,0,0.1)] cursor-pointer group hover:bg-[rgba(216,180,254,0.03)]"
              style={{
                height: isExpanded ? '288px' : '98px',
                transition: 'height 0.6s cubic-bezier(0.77, 0, 0.175, 1), background-color 0.4s ease',
                transform: 'translateZ(0)',
                willChange: 'height, background-color'
              }}
              onClick={() => setExpandedService(index)}
            >
              <div className="flex items-start justify-between py-8">
                <div className="flex items-start">
                  <p className="font-['DiamondGrotesk',sans-serif] text-[36px] text-black leading-none w-[73px]">
                    {service.id}
                  </p>
                  <p className="font-['DiamondGrotesk',sans-serif] text-[36px] text-black leading-none uppercase ml-[178px]">
                    {service.title}
                  </p>
                </div>

                <div className="flex items-start gap-10">
                  <div
                    className="overflow-hidden"
                    style={{
                      width: isExpanded ? '444px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                      filter: isExpanded ? 'blur(0px)' : 'blur(4px)',
                      transform: isExpanded ? 'translateX(0)' : 'translateX(20px)',
                      transition: isExpanded
                        ? 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease 0.2s, filter 0.8s ease 0.2s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                        : 'width 0.6s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.2s ease, filter 0.2s ease, transform 0.2s ease'
                    }}
                  >
                    <p className="font-['DiamondGrotesk',sans-serif] text-[20px] text-black leading-[1.11] whitespace-pre-wrap">
                      {service.description}
                    </p>
                  </div>

                  <div
                    className="relative size-[30px] transition-transform duration-700 flex items-center justify-center"
                    style={{
                      transform: isExpanded ? 'rotate(135deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                    }}
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#d8b4fe" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-10 left-0 right-0 flex items-center"
              >
                <div
                  className="font-['DiamondGrotesk',sans-serif] text-[16px] text-black leading-[0.821] w-[251px]"
                  style={{
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? 'translateY(0)' : 'translateY(15px)',
                    filter: isExpanded ? 'blur(0px)' : 'blur(2px)',
                    transition: isExpanded
                      ? 'opacity 0.6s ease 0.5s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, filter 0.6s ease 0.5s'
                      : 'opacity 0.2s ease',
                  }}
                >
                  {service.subtext.split('\n').map((line, i) => (
                    <p key={i} className={i === 0 ? 'mb-0' : ''}>{line}</p>
                  ))}
                </div>

                <div
                  style={{
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.9)',
                    transition: isExpanded
                      ? 'opacity 0.8s ease 0.65s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.65s'
                      : 'opacity 0.2s ease',
                  }}
                >
                  <MagneticButton
                    className="relative group/btn"
                  >
                    <div className="bg-[#d8b4fe] h-[45px] px-8 rounded-[38px] flex items-center justify-center transition-all duration-500 group-hover/btn:bg-black">
                      <p className="font-['DiamondGrotesk',sans-serif] text-[16px] leading-none text-black group-hover/btn:text-white uppercase whitespace-nowrap transition-colors duration-500">
                        LEAVE A REQUEST
                      </p>
                    </div>
                  </MagneticButton>
                </div>
              </div>
            </div>
          );
        })}
        {/* Bottom line for the last item */}
        <div className="w-[1190px] h-0 border-t border-[rgba(0,0,0,0.15)]" />
      </div>

    </div>
  );
}
