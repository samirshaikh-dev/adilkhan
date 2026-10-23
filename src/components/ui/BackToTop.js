"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "../icons";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 420);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-7 right-7 z-40 w-11 h-11 rounded-full bg-[#141d2e] border border-[#c9a227]/40 text-[#f7f5f2] flex items-center justify-center shadow-lg hover:border-[#c9a227] hover:shadow-[0_0_20px_rgba(201,162,39,0.35)] transition-colors cursor-pointer"
          aria-label="Scroll back to top"
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpIcon size={18} />
          <span className="sr-only">Top</span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
