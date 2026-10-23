"use client";

import React from "react";

/**
 * Bespoke Silver Medal Emblem
 * - Premium polished silver disc with authentic metallic gradients
 * - Gold brand accent laurel branches and perimeter ring
 * - Distinguishes 2nd place / Silver medal with executive authority
 */
export default function SilverMedalEmblem({ size = 52, className = "" }) {
  return (
    <div
      className={`relative shrink-0 flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Subtle outer metallic aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-200/40 via-transparent to-[#c9a227]/20 blur-sm pointer-events-none" />

      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          {/* Authentic polished silver gradient with specular highlight */}
          <linearGradient id="emblemSilverDisc" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="22%" stopColor="#EEF2F6" />
            <stop offset="48%" stopColor="#CBD5E1" />
            <stop offset="78%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Frosted silver inner field */}
          <linearGradient id="emblemSilverInner" x1="20%" y1="20%" x2="80%" y2="80%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="45%" stopColor="#E2E8F0" />
            <stop offset="85%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          {/* Brand accent gold for laurel and inner ring */}
          <linearGradient id="emblemGoldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#C9A227" />
            <stop offset="100%" stopColor="#8A7018" />
          </linearGradient>

          {/* Ribbon drape gradient (executive navy with gold edge) */}
          <linearGradient id="emblemRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#263b53" />
            <stop offset="100%" stopColor="#142130" />
          </linearGradient>
        </defs>

        {/* Top Ribbon Drape / Hanger */}
        <path
          d="M24 2 L32 14 L20 14 Z"
          fill="url(#emblemRibbon)"
          stroke="url(#emblemGoldAccent)"
          strokeWidth="0.8"
        />
        <path
          d="M40 2 L44 14 L32 14 Z"
          fill="url(#emblemRibbon)"
          stroke="url(#emblemGoldAccent)"
          strokeWidth="0.8"
        />

        {/* Outer Silver Medallion Disc */}
        <circle
          cx="32"
          cy="36"
          r="24"
          fill="url(#emblemSilverDisc)"
          stroke="#475569"
          strokeWidth="0.5"
        />

        {/* Outer Gold Accent Rim (Site Brand Accent) */}
        <circle
          cx="32"
          cy="36"
          r="21.5"
          stroke="url(#emblemGoldAccent)"
          strokeWidth="1.25"
          strokeDasharray="2 1.5"
          opacity="0.85"
        />

        {/* Inner Silver Relief Plate */}
        <circle
          cx="32"
          cy="36"
          r="19"
          fill="url(#emblemSilverInner)"
          stroke="#94A3B8"
          strokeWidth="0.75"
        />

        {/* Specular Highlight Arc */}
        <path
          d="M17 28 C20 20, 28 17, 36 17"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Left Laurel Branch (Gold Accent) */}
        <path
          d="M20 44 C16 38, 16 30, 22 24 M19 33 C17 32, 16 29, 18 28 M18 39 C16 38, 15 35, 17 34 M21 43 C19 42, 18 39, 20 38"
          stroke="url(#emblemGoldAccent)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Right Laurel Branch (Gold Accent) */}
        <path
          d="M44 44 C48 38, 48 30, 42 24 M45 33 C47 32, 48 29, 46 28 M46 39 C48 38, 49 35, 47 34 M43 43 C45 42, 46 39, 44 38"
          stroke="url(#emblemGoldAccent)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Center Silver Medal Insignia (Numeral '2' in elegant Roman serifs) */}
        <text
          x="32"
          y="41"
          textAnchor="middle"
          fontFamily="Cinzel, Georgia, serif"
          fontSize="14"
          fontWeight="bold"
          fill="#334155"
        >
          2
        </text>

        {/* Sub-label 'SILVER' etched below */}
        <text
          x="32"
          y="48"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="5"
          fontWeight="700"
          letterSpacing="0.8"
          fill="#64748B"
        >
          SILVER
        </text>
      </svg>
    </div>
  );
}
