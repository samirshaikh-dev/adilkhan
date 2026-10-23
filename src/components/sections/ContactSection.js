"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import SectionIntro from "../ui/SectionIntro";
import { sectionReveal } from "./motion";

export default function ContactSection() {
  const { email, linkedin, instagram } = site.contact;

  if (!email && !linkedin && !instagram) {
    return null;
  }

  return (
    <motion.section
      id="contact"
      className="section band-light"
      aria-labelledby="contact-title"
      {...sectionReveal}
    >
      <div className="container section-inner">
        <div className="contact-layout">
          <SectionIntro
            eyebrow="Contact"
            title="Get in touch"
            titleId="contact-title"
          />

          <div className="contact-links">
            {email ? (
              <motion.a
                href={`mailto:${email}`}
                className="contact-pill"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
              >
                {email}
              </motion.a>
            ) : null}

            {linkedin ? (
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
              >
                LinkedIn
              </motion.a>
            ) : null}

            {instagram ? (
              <motion.a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
              >
                Instagram
              </motion.a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
