"use client";

import React from "react";
import { motion } from "framer-motion";
import { MedalIcon } from "../icons";

export default function MedalBadge({ label = "Silver medal" }) {
  return (
    <motion.span
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 border border-[#c9a227]/35 text-xs font-semibold tracking-wider uppercase text-[#8a7018] relative overflow-hidden select-none"
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <span className="inline-flex items-center text-[#c9a227]" aria-hidden="true">
        <MedalIcon size={16} />
      </span>
      <span>{label}</span>
      <span
        className="medal-badge__shine"
        aria-hidden="true"
      />
    </motion.span>
  );
}
