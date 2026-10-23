"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import { fadeUp, sectionReveal } from "./motion";

export default function AchievementsSection() {
  return (
    <motion.section
      id="achievements"
      className="section"
      aria-labelledby="achievements-title"
      {...sectionReveal}
    >
      <div className="container section-inner">
        <div className="section-heading compact">
          <p className="eyebrow">Achievements</p>
          <h2 id="achievements-title">Competition highlights</h2>
        </div>

        <div className="feature-block">
          <motion.div
            className="feature-visual photo-card large-card"
            aria-label="Grappling achievement placeholder"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -3 }}
          >
            <span>Event Photo</span>
          </motion.div>

          <motion.div
            className="feature-copy"
            variants={fadeUp}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <p className="card-label">Featured result</p>
            <h3>{site.achievements.title}</h3>
            <p className="result-line">{site.achievements.result}</p>

            <ul className="meta-list">
              {site.achievements.meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <motion.a
              href={site.achievements.proof}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.15 }}
            >
              View official result
            </motion.a>
          </motion.div>
        </div>

        <div className="gallery-grid" aria-label="Achievement gallery placeholder">
          {Array.from({ length: 3 }).map((_, index) => (
            <motion.figure
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div
                className="photo-card gallery-card"
                aria-label={`Achievement image ${index + 1}`}
              >
                <span>Photo {index + 1}</span>
              </div>
              <figcaption>Grappling showcase {index + 1}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
