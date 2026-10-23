"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "../icons";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1220] text-[#a8b4c4] border-t border-white/10 py-8 relative">
      <div
        className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent w-full absolute top-0 left-0"
        aria-hidden="true"
      />
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-4 text-sm">
        <p className="text-[#a8b4c4]">
          © {currentYear} Adil Khan <span aria-hidden="true">·</span> Design and Build by{" "}
          <a
            href="https://samir-portfolio-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9a227] hover:underline"
          >
            Samir Shaikh
          </a>
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs text-[#a8b4c4] hover:text-[#c9a227] cursor-pointer transition-colors group"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUpIcon
            size={14}
            className="group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </button>
      </div>
    </footer>
  );
}
