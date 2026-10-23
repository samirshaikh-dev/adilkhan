"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MedalIcon,
  GraduationCapIcon,
  MartialArtsIcon,
  ShieldCheckIcon,
  MapPinIcon,
  CalendarIcon,
} from "../icons";
import { site } from "../../data/site";

export default function HeroGraphic() {
  const achievement = site.achievements;

  return (
    <div className="w-full max-w-[420px] mx-auto select-none" aria-hidden="true">
      {/* Subtle outer ambient glow */}
      <div className="relative">
        <div className="absolute -inset-2 bg-[radial-gradient(circle,rgba(201,162,39,0.15)_0%,rgba(71,120,168,0.1)_50%,transparent_75%)] blur-xl rounded-2xl pointer-events-none" />

        {/* Main Executive Card - Everything cleanly contained inside */}
        <motion.div
          className="relative w-full rounded-2xl border border-white/12 bg-gradient-to-b from-[#141e30] via-[#0d1624] to-[#090e18] p-6 md:p-7 shadow-2xl flex flex-col gap-6 overflow-hidden"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
        >
          {/* Card Top Meta Bar */}
          <div className="flex items-center justify-between gap-2 border-b border-white/8 pb-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#c9a227]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              Verified Competitor
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-mono tracking-wider text-[#a8b4c4] bg-white/5 px-2.5 py-1 rounded-md border border-white/8">
              <MartialArtsIcon size={13} className="text-[#c9a227]" />
              71 KG · GI
            </span>
          </div>

          {/* Central Authentic Medal Emblem */}
          <div className="flex flex-col items-center justify-center py-2 text-center">
            <div className="relative w-28 h-28 flex items-center justify-center my-1">
              {/* Soft radial aura */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.22)_0%,transparent_70%)] blur-md" />

              {/* Refined static circular medal ring */}
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#1e2a40] to-[#0c1422] border-2 border-white/15 shadow-xl p-2 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="silverMedal" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="45%" stopColor="#D8DEE4" />
                      <stop offset="75%" stopColor="#A4B2C1" />
                      <stop offset="100%" stopColor="#738294" />
                    </linearGradient>
                    <linearGradient id="goldLaurel" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FDE68A" />
                      <stop offset="50%" stopColor="#C9A227" />
                      <stop offset="100%" stopColor="#927214" />
                    </linearGradient>
                  </defs>

                  {/* Rim */}
                  <circle cx="50" cy="50" r="44" stroke="url(#silverMedal)" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="39" stroke="rgba(201,162,39,0.35)" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Laurel branches */}
                  <path
                    d="M32 66 C23 54, 23 38, 33 26 M29 42 C26 40, 25 36, 28 34 M28 53 C24 51, 23 47, 26 45 M33 62 C29 60, 28 56, 31 54"
                    stroke="url(#goldLaurel)"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <path
                    d="M68 66 C77 54, 77 38, 67 26 M71 42 C74 40, 75 36, 72 34 M72 53 C76 51, 77 47, 74 45 M67 62 C71 60, 72 56, 69 54"
                    stroke="url(#goldLaurel)"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />

                  {/* Center Shield */}
                  <path
                    d="M50 26 L63 31 V48 C63 59, 50 68, 50 68 C50 68, 37 59, 37 48 V31 Z"
                    fill="rgba(11, 18, 32, 0.85)"
                    stroke="url(#silverMedal)"
                    strokeWidth="2"
                  />

                  {/* Star */}
                  <polygon
                    points="50,36 52.5,42 59,42.5 54,46.5 56,53 50,49 44,53 46,46.5 41,42.5 47.5,42"
                    fill="url(#goldLaurel)"
                  />
                </svg>
              </div>
            </div>

            {/* Achievement Headlines */}
            <div className="mt-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.72rem] font-semibold tracking-wider uppercase text-[#c9a227] bg-[#c9a227]/12 border border-[#c9a227]/30">
                <MedalIcon size={13} className="text-[#c9a227]" />
                {achievement.result}
              </span>

              <h3 className="font-display font-semibold text-lg text-[#f7f5f2] mt-2 leading-snug">
                {achievement.title}
              </h3>

              <p className="text-xs text-[#a8b4c4] mt-1 flex items-center justify-center gap-2">
                <span>National Grappling Association</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span>Mumbai, India</span>
              </p>
            </div>
          </div>

          {/* Bottom Dual Credential Cards - Cleanly stacked inside card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/8">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/4 border border-white/8">
              <div className="w-8 h-8 rounded-lg bg-[#4778a8]/18 border border-[#4778a8]/30 flex items-center justify-center shrink-0 text-[#4778a8]">
                <GraduationCapIcon size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#f7f5f2] truncate">MBA Candidate</p>
                <p className="text-[0.6875rem] text-[#a8b4c4] truncate">Strategy & Leadership</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/4 border border-white/8">
              <div className="w-8 h-8 rounded-lg bg-[#c9a227]/18 border border-[#c9a227]/30 flex items-center justify-center shrink-0 text-[#c9a227]">
                <ShieldCheckIcon size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#f7f5f2] truncate">National Athlete</p>
                <p className="text-[0.6875rem] text-[#a8b4c4] truncate">Discipline & Mat Grit</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
