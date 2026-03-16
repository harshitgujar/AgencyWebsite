"use client";
import React from 'react';

export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 w-[100vw] h-[100vh] pointer-events-none z-[-1] bg-white overflow-hidden">
      
      {/* Refined Mesh - Fewer, larger, softer blobs for a premium feel */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[100vw] h-[100vw] rounded-full blur-[150px] opacity-20" 
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[90vw] h-[90vw] rounded-full blur-[150px] opacity-25" 
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 75%)' }}
      />
      <div 
        className="absolute top-[30%] left-[20%] w-[110vw] h-[110vw] rounded-full blur-[180px] opacity-15" 
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 65%)' }}
      />
      
      {/* Soft White Overlays */}
      <div className="absolute top-[10%] left-[15%] w-[60vw] h-[60vw] bg-white rounded-full blur-[140px] opacity-40" />

      {/* Subtle Noise Overlay */}
      <div 
        className="absolute inset-0 w-full h-full z-20 pointer-events-none opacity-0.08"
        style={{
          mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
