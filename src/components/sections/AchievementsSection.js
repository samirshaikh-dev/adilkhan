"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "../../data/site";
import { hasMedia } from "../../lib/media";
import ButtonLink from "../ui/ButtonLink";
import MedalBadge from "../ui/MedalBadge";
import SectionIntro from "../ui/SectionIntro";
import { fadeUp, sectionReveal } from "./motion";

export default function AchievementsSection() {
  const featured = site.media?.achievementFeatured;
  const gallery = site.media?.gallery ?? [];
  const showGallery = hasMedia(gallery);

  return (
    <motion.section
      id="achievements"
      className="section band-light"
      aria-labelledby="achievements-title"
      {...sectionReveal}
    >
      <div className="container section-inner">
        <SectionIntro
          eyebrow="Achievements"
          title="Competition highlights"
          titleId="achievements-title"
        />

        {hasMedia(featured) ? (
          <motion.div
            className="feature-visual"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={featured.src}
              alt={featured.alt}
              width={featured.width}
              height={featured.height}
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        ) : null}

        <motion.article
          className="feature-card"
          variants={fadeUp}
          transition={{ duration: 0.4, delay: 0.06 }}
        >
          <div className="feature-card-header">
            <h3 className="feature-title">{site.achievements.title}</h3>
            <MedalBadge label={site.achievements.result} />
          </div>

          <ul className="meta-grid">
            {site.achievements.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {site.achievements.proof ? (
            <ButtonLink
              href={site.achievements.proof}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View official result
            </ButtonLink>
          ) : null}
        </motion.article>

        {showGallery ? (
          <div className="gallery-grid" aria-label="Achievement gallery">
            {gallery.map((item, index) => (
              <motion.figure
                key={item.src}
                className="gallery-item"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
                {item.caption ? <figcaption>{item.caption}</figcaption> : null}
              </motion.figure>
            ))}
          </div>
        ) : null}
      </div>
    </motion.section>
  );
}
