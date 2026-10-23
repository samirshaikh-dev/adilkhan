"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import { sectionReveal } from "./motion";

export default function InterestsSection() {
  return (
    <motion.section
      id="interests"
      className="section section-surface"
      aria-labelledby="interests-title"
      {...sectionReveal}
    >
      <div className="container section-inner narrow">
        <div className="section-heading compact">
          <p className="eyebrow">Interests</p>
          <h2 id="interests-title">Beyond the mat</h2>
        </div>

        <ul className="interest-list">
          {site.interests.map((interest, index) => (
            <motion.li
              key={interest}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.28, delay: index * 0.06 }}
              whileHover={{ x: 4 }}
            >
              {interest}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
