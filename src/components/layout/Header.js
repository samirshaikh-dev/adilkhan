"use client";

import { useEffect, useState } from "react";
import { site } from "../../data/site";

const sectionIds = ["about", "education", "achievements", "interests", "contact"];

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
      const scrollPosition = window.scrollY + 180;
      let currentSection = "about";

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

  const headerClass = overHero
    ? "site-header site-header--hero"
    : "site-header site-header--solid";

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header className={headerClass}>
        <div className="container nav-bar">
          <a href="#top" className="brand-link" aria-label="Go to top">
            {site.name}
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>

          <nav
            id="main-nav"
            className={`site-nav ${menuOpen ? "open" : ""}`}
            aria-label="Main navigation"
          >
            {site.nav.map(({ label, href }) => {
              const isActive = activeSection === href.replace("#", "");

              return (
                <a
                  key={href}
                  href={href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
