"use client";

import React from "react";
import { motion } from "framer-motion";

export function AmbientGlow({ color = "warm", className = "" }) {
  const isWarm = color === "warm";

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className={`absolute rounded-full blur-[80px] ${
          isWarm
            ? "w-[420px] h-[420px] -top-20 -right-16 bg-[#c9a227]/16"
            : "w-[400px] h-[400px] top-[5%] left-[10%] bg-[#4778a8]/18"
        }`}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
          x: [0, 15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute rounded-full blur-[80px] ${
          isWarm
            ? "w-[380px] h-[380px] bottom-[5%] -left-20 bg-[#4778a8]/18"
            : "w-[360px] h-[360px] bottom-[10%] right-[5%] bg-[#c9a227]/14"
        }`}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function SectionGridOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-60 z-0" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tactical-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(247, 245, 242, 0.03)"
              strokeWidth="1"
            />
            <circle cx="40" cy="0" r="1" fill="rgba(201, 162, 39, 0.15)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tactical-grid)" />
      </svg>
    </div>
  );
}
