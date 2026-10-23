"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { site } from "../../data/site";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    try {
      setCurrentYear(format(new Date(), "yyyy"));
    } catch {
      setCurrentYear(String(new Date().getFullYear()));
    }
  }, []);

  const locationText = site.location?.city && site.location?.region
    ? `Based in ${site.location.city}, ${site.location.region}`
    : "Based in Vapi, Gujarat";

  return (
    <footer className="bg-[#0b1220] border-t border-white/10 py-5 md:py-7 relative select-none">
      {/* Delicate gold accent border top line */}
      <div
        className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent w-full absolute top-0 left-0"
        aria-hidden="true"
      />

      <div className="max-w-[1080px] mx-auto px-5 md:px-8">
        <p className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2.5 gap-y-1.5 text-xs sm:text-sm text-[#8fa0b5] leading-relaxed">
          <span>
            © {currentYear}{" "}
            <strong className="font-medium text-[#f7f5f2]">{site.name || "Adil Khan"}</strong>
          </span>

          <span className="text-white/20 select-none" aria-hidden="true">
            ·
          </span>

          <span>{locationText}</span>

          <span className="text-white/20 select-none" aria-hidden="true">
            ·
          </span>

          <span className="text-[#71869e]">
            Designed &amp; built by{" "}
            <a
              href="https://samir-portfolio-dev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a227] hover:text-[#f3cd46] hover:underline font-medium inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220] rounded-xs"
              aria-label="Visit Samir Shaikh's portfolio (opens in a new tab)"
            >
              <span>Samir Shaikh</span>
              <span className="text-[12px] leading-none" aria-hidden="true">
                ↗
              </span>
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
