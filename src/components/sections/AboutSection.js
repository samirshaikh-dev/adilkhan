"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import { fadeUp, sectionReveal } from "./motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="section"
      aria-labelledby="about-title"
      {...sectionReveal}
    >
      <div className="container section-inner">
        <div className="section-heading compact">
          <p className="eyebrow">About</p>
          <h2 id="about-title">Professional profile</h2>
        </div>

        <div className="two-column-layout">
          <div className="copy-column">
            {site.about.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={fadeUp}
                transition={{ duration: 0.35 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="visual-column"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="photo-card tall-card"
              aria-label="Profile photo placeholder"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.15 }}
            >
              <span>Profile Photo</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
