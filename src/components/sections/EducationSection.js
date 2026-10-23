"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import SectionIntro from "../ui/SectionIntro";
import { fadeUp, sectionReveal } from "./motion";

function isCurrent(period) {
  return /present/i.test(period ?? "");
}

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      className="section band-tint"
      aria-labelledby="education-title"
      {...sectionReveal}
    >
      <div className="container section-inner">
        <SectionIntro
          eyebrow="Education"
          title="Academic background"
          titleId="education-title"
        />

        <ol className="timeline">
          {site.education.map((item, index) => {
            const current = isCurrent(item.period);

            return (
              <motion.li
                key={item.degree}
                className={`timeline-item ${current ? "timeline-item--current" : ""}`}
                variants={fadeUp}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <span className="timeline-node" aria-hidden="true" />
                <article className="timeline-card">
                  <div className="timeline-card-meta">
                    <p className="timeline-label">{item.degree}</p>
                    {current ? <span className="timeline-badge">Current</span> : null}
                  </div>
                  <h3>{item.institution}</h3>
                  <p className="timeline-period">{item.period}</p>
                  {item.details ? <p>{item.details}</p> : null}
                </article>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </motion.section>
  );
}
