"use client";
import React from 'react';

interface TeamMemberData {
  bio: string;
  instagram?: string;
  linkedin?: string;
}

interface TeamRevealPanelProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMemberData;
  /** Absolute top position to align with the photo */
  top: number;
  /** Absolute left position where the panel starts (right edge of the photo area) */
  left: number;
}

export default function TeamRevealPanel({ isOpen, onClose, member, top, left }: TeamRevealPanelProps) {
  return (
    <div
      className="absolute z-50"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: '420px',
        height: '403px',
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      {/* Panel content sliding from left */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: isOpen
            ? 'inset(0 0 0 0)'
            : 'inset(0 100% 0 0)',
          transition: 'clip-path 0.6s cubic-bezier(0.77, 0, 0.175, 1)',
        }}
      >
        <div className="w-full h-full flex flex-col justify-start gap-6 px-8 py-6">
          {/* Bio text */}
          <p
            className="font-['DiamondGrotesk',sans-serif] text-[13px] text-black leading-[1.7] not-italic"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
            }}
          >
            {member.bio}
          </p>

          {/* Social links */}
          <div
            className="flex items-center gap-6"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.5s ease 0.35s, transform 0.5s ease 0.35s',
            }}
          >
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black text-[12px] font-['DiamondGrotesk',sans-serif] uppercase tracking-wider hover:text-[#666] transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                IG
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black text-[12px] font-['DiamondGrotesk',sans-serif] uppercase tracking-wider hover:text-[#666] transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                IN
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
