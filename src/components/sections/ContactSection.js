"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import { sectionReveal } from "./motion";

export default function ContactSection() {
  const { email, linkedin, instagram } = site.contact;

  if (!email && !linkedin && !instagram) {
    return null;
  }

  return (
    <motion.section
      id="contact"
      className="section"
      aria-labelledby="contact-title"
      {...sectionReveal}
    >
      <div className="container section-inner narrow">
        <div className="section-heading compact">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Get in touch</h2>
        </div>

        <div className="contact-card">
          {email ? (
            <motion.a
              href={`mailto:${email}`}
              className="contact-link"
              whileHover={{ x: 3 }}
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
              className="contact-link"
              whileHover={{ x: 3 }}
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
              className="contact-link"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.15 }}
            >
              Instagram
            </motion.a>
          ) : null}
        </div>
      </div>
    </motion.section>
  );
}
