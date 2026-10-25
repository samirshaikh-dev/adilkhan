"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "../../data/site";

const sectionIds = site.nav
  .map((item) => item.href.replace("#", ""))
  .filter(Boolean);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    let frame = null;

    const updateActiveSection = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 96;

      if (atBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      const marker = window.scrollY + 160;
      let current = "";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && marker >= section.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    const handleScroll = () => {
      if (frame !== null) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        updateActiveSection();
        frame = null;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" ref={headerRef}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="container site-header__inner">
        <a className="wordmark" href="#top" aria-label="Adil Khan, back to top">
          <span className="wordmark__mark" aria-hidden="true">
            AK
          </span>
          <span>{site.name}</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          {site.nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <a
                key={item.href}
                className={`nav__link${isActive ? " is-active" : ""}`}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="menu-toggle__icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="site-menu"
          className="mobile-menu"
          aria-label="Mobile navigation"
        >
          <div className="mobile-menu__inner">
            {site.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={item.href}
                  className={`mobile-menu__link${isActive ? " is-active" : ""}`}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
