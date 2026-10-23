"use client";

import { motion } from "framer-motion";

const variants = {
  "primary-warm": "btn btn-primary-warm",
  "ghost-light": "btn btn-ghost-light",
  "primary-navy": "btn btn-primary-navy",
  outline: "btn btn-outline",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary-navy",
  ...rest
}) {
  return (
    <motion.a
      href={href}
      className={variants[variant] ?? variants.outline}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
