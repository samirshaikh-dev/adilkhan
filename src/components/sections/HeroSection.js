"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "../../data/site";
import { hasMedia } from "../../lib/media";
import ButtonLink from "../ui/ButtonLink";
import DecorativePanel from "../ui/DecorativePanel";
import { fadeUp } from "./motion";

export default function HeroSection() {
  const heroMedia = site.media?.hero;

  return (
    <motion.section
      id="hero"
      className="section band-dark hero-section"
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
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <p className="eyebrow">MBA student</p>
          <h1 id="hero-title">{site.name}</h1>
          <p className="hero-tagline">{site.tagline}</p>
          <p className="hero-lede">{site.heroText}</p>

          <div className="button-row">
            <ButtonLink href="#achievements" variant="primary-warm">
              View achievements
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost-light">
              Contact
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          {hasMedia(heroMedia) ? (
            <Image
              src={heroMedia.src}
              alt={heroMedia.alt}
              width={heroMedia.width}
              height={heroMedia.height}
              className="hero-portrait"
              priority
              fetchPriority="high"
            />
          ) : (
            <DecorativePanel />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
