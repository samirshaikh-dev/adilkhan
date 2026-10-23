"use client";

import React from "react";
import { motion } from "framer-motion";
import { MedalIcon } from "../icons";

const badgeVariants = {
  silver:
    "bg-gradient-to-r from-slate-100 via-slate-50 to-slate-200 border-slate-300/90 text-slate-800 shadow-xs",
  gold:
    "bg-gradient-to-r from-[#c9a227]/18 to-[#c9a227]/8 border-[#c9a227]/35 text-[#8a7018] shadow-xs",
  bronze:
    "bg-gradient-to-r from-amber-700/15 to-amber-700/8 border-amber-700/30 text-amber-900 shadow-xs",
};

const iconColors = {
  silver: "text-slate-500",
  gold: "text-[#c9a227]",
  bronze: "text-amber-700",
};

export default function MedalBadge({
  label = "Silver medal",
  type = null,
  className = "",
}) {
  const normalized = (type || label || "").toLowerCase();
  const medalType = normalized.includes("gold")
    ? "gold"
    : normalized.includes("bronze")
    ? "bronze"
    : "silver";

  const variantClass = badgeVariants[medalType] || badgeVariants.silver;
  const iconColor = iconColors[medalType] || iconColors.silver;

  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wider uppercase relative overflow-hidden select-none shrink-0 ${variantClass} ${className}`.trim()}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <span className={`inline-flex items-center ${iconColor}`} aria-hidden="true">
        <MedalIcon size={14} />
      </span>
      <span>{label}</span>
      <span className="medal-badge__shine" aria-hidden="true" />
    </motion.span>
  );
}

