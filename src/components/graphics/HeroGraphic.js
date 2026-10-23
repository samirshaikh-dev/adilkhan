"use client";

import React from "react";
import { motion } from "framer-motion";
import { MedalIcon, GraduationCapIcon } from "../icons";

export default function HeroGraphic() {
  return (
    <div className="relative w-full max-w-[420px]" aria-hidden="true">
      {/* Background ambient lighting */}
      <div className="absolute -inset-4 bg-[radial-gradient(circle,rgba(201,162,39,0.2)_0%,rgba(71,120,168,0.12)_50%,transparent_75%)] blur-2xl rounded-2xl pointer-events-none" />

      {/* Main interactive panel */}
      <motion.div
        className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#131d2e] via-[#0d1624] to-[#080d17] flex flex-col justify-between p-6 shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4 }}
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(247,245,242,0.06)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-40" />

        {/* Tactical corner marks */}
        <div className="absolute top-2.5 left-2.5 font-mono text-xs text-[#c9a227]/50 select-none pointer-events-none">
          +
        </div>
        <div className="absolute top-2.5 right-2.5 font-mono text-xs text-[#c9a227]/50 select-none pointer-events-none">
          +
        </div>
        <div className="absolute bottom-2.5 left-2.5 font-mono text-xs text-[#c9a227]/50 select-none pointer-events-none">
          +
        </div>
        <div className="absolute bottom-2.5 right-2.5 font-mono text-xs text-[#c9a227]/50 select-none pointer-events-none">
          +
        </div>

        {/* Top bar info */}
        <div className="flex justify-between items-center relative z-10">
          <span className="inline-flex items-center gap-1.5 text-[0.6875rem] tracking-wider uppercase font-semibold text-[#c9a227]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] animate-pulse" />
            ATHLETIC & EXECUTIVE
          </span>
          <span className="text-[0.6875rem] font-mono tracking-wider text-[#a8b4c4]">
            DIV: 71KG / GI
          </span>
        </div>

        {/* Center Graphic: Championship Medallion & Mat Ring */}
        <div className="relative flex flex-col items-center justify-center my-auto z-10">
          {/* Rotating tactical outer ring */}
          <motion.div
            className="absolute w-56 h-56 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 240 240" className="w-full h-full">
              <circle
                cx="120"
                cy="120"
                r="110"
                stroke="rgba(201, 162, 39, 0.22)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                fill="none"
              />
              <circle
                cx="120"
                cy="120"
                r="95"
                stroke="rgba(247, 245, 242, 0.08)"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </motion.div>

          {/* Counter-rotating inner ring */}
          <motion.div
            className="absolute w-44 h-44 pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle
                cx="100"
                cy="100"
                r="78"
                stroke="rgba(71, 120, 168, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                fill="none"
              />
            </svg>
          </motion.div>

          {/* Central Medallion Shield */}
          <motion.div
            className="relative w-32 h-32 flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="absolute -inset-2.5 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.3)_0%,transparent_70%)] blur-md" />
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#182338] to-[#0c1422] shadow-2xl p-2.5 flex items-center justify-center border border-white/15">
              {/* Laurel Wreath & Shield Emblem */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="silverSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="40%" stopColor="#D8DEE4" />
                    <stop offset="70%" stopColor="#9CAAB8" />
                    <stop offset="100%" stopColor="#6E7E91" />
                  </linearGradient>
                  <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F9E27D" />
                    <stop offset="50%" stopColor="#C9A227" />
                    <stop offset="100%" stopColor="#8A6E14" />
                  </linearGradient>
                </defs>

                {/* Outer disc rim */}
                <circle cx="50" cy="50" r="44" stroke="url(#silverSheen)" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="38" stroke="rgba(201,162,39,0.3)" strokeWidth="1" />

                {/* Stylized Laurel Wreath branches */}
                <path
                  d="M32 64 C24 54, 24 38, 33 28 M30 42 C27 40, 26 36, 28 34 M29 52 C25 50, 24 46, 27 44 M33 60 C30 58, 29 54, 32 52"
                  stroke="url(#goldAccent)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
                <path
                  d="M68 64 C76 54, 76 38, 67 28 M70 42 C73 40, 74 36, 72 34 M71 52 C75 50, 76 46, 73 44 M67 60 C70 58, 71 54, 68 52"
                  stroke="url(#goldAccent)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />

                {/* Central Shield */}
                <path
                  d="M50 26 L62 31 V48 C62 58, 50 67, 50 67 C50 67, 38 58, 38 48 V31 Z"
                  fill="rgba(11, 18, 32, 0.7)"
                  stroke="url(#silverSheen)"
                  strokeWidth="2"
                />

                {/* Star on shield */}
                <polygon
                  points="50,36 52.5,42 59,42.5 54,46.5 56,53 50,49 44,53 46,46.5 41,42.5 47.5,42"
                  fill="url(#goldAccent)"
                />
              </svg>
            </div>
          </motion.div>

          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-[#c9a227] font-medium text-center">
            Discipline · Strategy · Mat
          </p>
        </div>

        {/* Floating Stat Badge 1: Silver Medalist */}
        <motion.div
          className="absolute top-12 -right-2 md:-right-6 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0e1624]/95 backdrop-blur-md border border-white/10 shadow-xl z-20 cursor-default select-none"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 rounded-lg bg-[#c9a227]/15 border border-[#c9a227]/35 flex items-center justify-center shrink-0">
            <MedalIcon size={18} color="#C9A227" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-[#f7f5f2] leading-tight">
              National Silver
            </span>
            <span className="text-[0.6875rem] text-[#a8b4c4] leading-tight">
              6th Grappling Champ
            </span>
          </div>
        </motion.div>

        {/* Floating Stat Badge 2: Academic & Leadership */}
        <motion.div
          className="absolute bottom-12 -left-2 md:-left-6 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0e1624]/95 backdrop-blur-md border border-white/10 shadow-xl z-20 cursor-default select-none"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 rounded-lg bg-[#4778a8]/18 border border-[#4778a8]/35 flex items-center justify-center shrink-0">
            <GraduationCapIcon size={18} color="#4778A8" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-[#f7f5f2] leading-tight">
              MBA Candidate
            </span>
            <span className="text-[0.6875rem] text-[#a8b4c4] leading-tight">
              Strategy & Leadership
            </span>
          </div>
        </motion.div>

        {/* Footer ribbon label */}
        <div className="flex items-center justify-between gap-3 text-[0.6875rem] tracking-wider text-[#a8b4c4] relative z-10">
          <span className="font-medium">VERIFIED MAT ATHLETE</span>
          <span className="flex-1 h-[1px] bg-white/10" />
          <span className="font-medium">EST. 2026</span>
        </div>
      </motion.div>
    </div>
  );
}
