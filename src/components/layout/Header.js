"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "../../data/site";
import ScrollProgress from "../ui/ScrollProgress";
import { MenuIcon, CloseIcon } from "../icons";

const sectionIds = ["profile", "achievements", "education", "strengths", "interests", "contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setOverHero(false);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.isIntersecting);
      },
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateState = () => {
      // Bottom of page detection for Contact section
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (atBottom) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 200;
      let currentSection = "profile";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    return () => window.removeEventListener("scroll", updateState);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#f7f5f2] focus:text-[#0b1220] focus:rounded-md focus:shadow-md focus:font-medium"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          overHero
            ? "bg-transparent border-b border-transparent text-[#f7f5f2]"
            : "bg-[#f7f5f2]/95 backdrop-blur-md border-b border-[#dce3ea] text-[#263b53]"
        }`}
      >
        <div className="max-w-[1080px] mx-auto px-5 md:px-8 flex items-center justify-between min-h-[72px] relative">
          <a
            href="#top"
            className="font-display font-semibold text-lg flex items-center gap-2.5 tracking-tight group"
            aria-label="Go to top"
          >
            <span
              className="text-[#c9a227] group-hover:rotate-6 transition-transform duration-200"
              aria-hidden="true"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                />
                <path
                  d="M7 17L12 7L17 17"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 13.5H15"
                  stroke="var(--accent-warm)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>{site.name}</span>
          </a>

          {/* Mobile Toggle Button */}
          <motion.button
            type="button"
            className={`md:hidden inline-flex items-center gap-2 min-h-[40px] px-3.5 py-1.5 rounded-md border text-sm font-medium transition-colors ${
              overHero
                ? "border-white/20 text-[#f7f5f2] hover:bg-white/10"
                : "border-[#dce3ea] text-[#263b53] hover:bg-black/5"
            }`}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((open) => !open)}
            whileTap={{ scale: 0.95 }}
          >
            <span aria-hidden="true">
              {menuOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            </span>
            <span>{menuOpen ? "Close" : "Menu"}</span>
          </motion.button>

          {/* Desktop Nav */}
          <nav
            id="main-nav"
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {site.nav.map(({ label, href }) => {
              const isActive = activeSection === href.replace("#", "");

              return (
                <motion.a
                  key={href}
                  href={href}
                  className={`text-sm font-medium relative py-2 transition-colors duration-150 ${
                    isActive
                      ? overHero
                        ? "text-[#f7f5f2]"
                        : "text-[#263b53]"
                      : overHero
                      ? "text-[#f7f5f2]/80 hover:text-[#c9a227]"
                      : "text-[#4a6078] hover:text-[#4778a8]"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.15 }}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className={`absolute left-0 right-0 -bottom-1 h-0.5 ${
                        overHero ? "bg-[#c9a227]" : "bg-[#263b53]"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>
        </div>

        {/* Mobile Animated Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className={`md:hidden absolute top-[calc(100%+8px)] left-5 right-5 flex flex-col gap-1 p-4 rounded-xl border shadow-2xl z-50 ${
                overHero
                  ? "bg-[#141d2e] border-white/10 text-[#f7f5f2]"
                  : "bg-[#f7f5f2] border-[#dce3ea] text-[#263b53]"
              }`}
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              aria-label="Mobile navigation"
            >
              {site.nav.map(({ label, href }, index) => {
                const isActive = activeSection === href.replace("#", "");

                return (
                  <motion.a
                    key={href}
                    href={href}
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? overHero
                          ? "bg-white/10 text-[#f7f5f2]"
                          : "bg-black/5 text-[#263b53]"
                        : overHero
                        ? "hover:bg-white/5 text-[#f7f5f2]/80"
                        : "hover:bg-black/5 text-[#4a6078]"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" aria-hidden="true" />
                    )}
                  </motion.a>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
