"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {currentYear} Adil Khan <span aria-hidden="true">·</span> Design and
          Build by{" "}
          <a
            href="https://samir-portfolio-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Samir Shaikh
          </a>
        </p>
      </div>
    </footer>
  );
}
