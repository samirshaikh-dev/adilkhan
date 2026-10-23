"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import { fadeUp } from "./motion";

export default function HeroSection() {
  return (
    <motion.section
      className="section hero-section"
      aria-labelledby="hero-title"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="eyebrow">MBA student</p>
          <h1 id="hero-title">{site.name}</h1>
          <p className="hero-headline">{site.tagline}</p>
          <p className="lede">{site.heroText}</p>

          <div className="button-row">
            <motion.a
              href="#achievements"
              className="button button-primary"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              View achievements
            </motion.a>
            <motion.a
              href="#contact"
              className="button button-secondary"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          aria-label="Adil Khan portrait placeholder"
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <motion.div
            className="portrait-card"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.15 }}
          >
            <span>Portrait</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
