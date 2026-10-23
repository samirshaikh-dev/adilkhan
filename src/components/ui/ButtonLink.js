"use client";

import React from "react";
import { motion } from "framer-motion";

const variantStyles = {
  "primary-warm":
    "bg-[#c9a227] hover:bg-[#b8921f] text-[#0b1220] border-[#c9a227] shadow-sm",
  "ghost-light":
    "bg-transparent hover:bg-white/10 text-[#f7f5f2] border-white/20",
  "primary-navy":
    "bg-[#263b53] hover:bg-[#1e354a] text-[#f7f5f2] border-[#263b53]",
  outline:
    "bg-white hover:bg-[#263b53] text-[#263b53] hover:text-[#f7f5f2] border-[#263b53]/25 hover:border-[#263b53] shadow-xs",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary-navy",
  icon: Icon = null,
  iconPosition = "right",
  className = "",
  ...rest
}) {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-md border font-semibold text-sm transition-colors duration-150 gap-2 cursor-pointer group ${
        variantStyles[variant] ?? variantStyles.outline
      } ${className}`.trim()}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      {...rest}
    >
      {Icon && iconPosition === "left" && (
        <span
          className="inline-flex items-center transition-transform duration-200 group-hover:-translate-x-0.5"
          aria-hidden="true"
        >
          <Icon size={16} />
        </span>
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <span
          className="inline-flex items-center transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <Icon size={16} />
        </span>
      )}
    </motion.a>
  );
}
