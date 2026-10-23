"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import { fadeUp, sectionReveal } from "./motion";

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      className="section section-surface"
      aria-labelledby="education-title"
      {...sectionReveal}
    >
      <div className="container section-inner">
        <div className="section-heading compact">
          <p className="eyebrow">Education</p>
          <h2 id="education-title">Academic background</h2>
        </div>

        <div className="edu-grid">
          {site.education.map((item, index) => (
            <motion.article
              key={item.degree}
              className="info-card"
              variants={fadeUp}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <p className="card-label">{item.degree}</p>
              <h3>{item.institution}</h3>
              <p>{item.period}</p>
              <p>{item.details}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
