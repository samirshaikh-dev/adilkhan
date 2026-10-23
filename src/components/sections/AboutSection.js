"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "../../data/site";
import { hasMedia } from "../../lib/media";
import SectionIntro from "../ui/SectionIntro";
import { fadeUp, sectionReveal } from "./motion";

const PULL_QUOTE_INDEX = 1;

export default function AboutSection() {
  const aboutMedia = site.media?.about;
  const hasAboutPhoto = hasMedia(aboutMedia);

  return (
    <motion.section
      id="about"
      className="section band-light"
      aria-labelledby="about-title"
      {...sectionReveal}
    >
      <div className="container section-inner">
        <SectionIntro
          eyebrow="About"
          title="Professional profile"
          titleId="about-title"
        />

        <div className={`about-layout ${hasAboutPhoto ? "has-media" : ""}`}>
          <div className="about-content">
            {site.about.map((paragraph, index) =>
              index === PULL_QUOTE_INDEX ? (
                <motion.p
                  key={paragraph}
                  className="pull-quote"
                  variants={fadeUp}
                  transition={{ duration: 0.35 }}
                >
                  {paragraph}
                </motion.p>
              ) : (
                <motion.p
                  key={paragraph}
                  variants={fadeUp}
                  transition={{ duration: 0.35 }}
                >
                  {paragraph}
                </motion.p>
              )
            )}
          </div>

          {hasAboutPhoto ? (
            <motion.div variants={fadeUp} transition={{ duration: 0.4 }}>
              <Image
                src={aboutMedia.src}
                alt={aboutMedia.alt}
                width={aboutMedia.width}
                height={aboutMedia.height}
                className="about-photo"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ) : null}
        </div>
      </div>
    </motion.section>
  );
}
