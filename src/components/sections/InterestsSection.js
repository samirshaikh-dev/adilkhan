"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import SectionIntro from "../ui/SectionIntro";
import { sectionReveal } from "./motion";

export default function InterestsSection() {
  return (
    <motion.section
      id="interests"
      className="section band-dark"
      aria-labelledby="interests-title"
      {...sectionReveal}
    >
      <div className="container section-inner">
        <SectionIntro
          eyebrow="Interests"
          title="Beyond the mat"
          titleId="interests-title"
        />

        <ul className="interest-grid">
          {site.interests.map((interest, index) => (
            <motion.li
              key={interest}
              className="interest-tile"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
            >
              {interest}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
