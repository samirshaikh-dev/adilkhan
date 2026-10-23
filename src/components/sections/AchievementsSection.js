"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { parse, format, isValid } from "date-fns";
import { site } from "../../data/site";
import { hasMedia } from "../../lib/media";
import ButtonLink from "../ui/ButtonLink";
import MedalBadge from "../ui/MedalBadge";
import SectionIntro from "../ui/SectionIntro";
import { fadeUp, sectionReveal } from "./motion";
import {
  TrophyIcon,
  ShieldCheckIcon,
  DumbbellIcon,
  MartialArtsIcon,
  MapPinIcon,
  CalendarIcon,
  ExternalLinkIcon,
  AwardIcon,
  LaurelIcon,
} from "../icons";

function getMetaIcon(item) {
  const text = item.toLowerCase();
  if (text.includes("kg")) return DumbbellIcon;
  if (text.includes("gi") || text.includes("division")) return MartialArtsIcon;
  if (text.includes("india") || text.includes("mumbai") || text.includes("city"))
    return MapPinIcon;
  if (
    text.includes("2026") ||
    text.includes("march") ||
    text.includes("date") ||
    /\d{4}/.test(text)
  )
    return CalendarIcon;
  return AwardIcon;
}

function formatMetaText(item) {
  try {
    const parsed = parse(item, "d MMMM yyyy", new Date());
    if (isValid(parsed)) {
      return format(parsed, "MMMM d, yyyy");
    }
  } catch {
    // Keep original string if not a parseable date
  }
  return item;
}

export default function AchievementsSection() {
  const featured = site.media?.achievementFeatured;
  const gallery = site.media?.gallery ?? [];
  const showGallery = hasMedia(gallery);

  return (
    <motion.section
      id="achievements"
      className="bg-[#f7f5f2] text-[#263b53] py-16 md:py-24 scroll-mt-[72px]"
      aria-labelledby="achievements-title"
      {...sectionReveal}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 grid gap-10">
        <SectionIntro
          eyebrow="Achievements"
          title="Competition highlights"
          titleId="achievements-title"
        />

        {hasMedia(featured) ? (
          <motion.div
            className="rounded-xl overflow-hidden mb-6"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={featured.src}
              alt={featured.alt}
              width={featured.width}
              height={featured.height}
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        ) : null}

        <motion.article
          className="grid gap-6 p-6 md:p-8 border border-[#dce3ea] rounded-xl bg-white shadow-sm hover:border-[#c9a227]/45 hover:shadow-lg transition-all duration-200"
          variants={fadeUp}
          transition={{ duration: 0.4, delay: 0.06 }}
          whileHover={{ y: -3 }}
        >
          {/* Card Top Header */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border border-[#c9a227]/35 flex items-center justify-center shrink-0 text-[#8a7018] shadow-sm"
                aria-hidden="true"
              >
                <TrophyIcon size={24} />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] font-semibold text-[#3b6794] mb-1">
                  <LaurelIcon size={14} className="text-[#c9a227]" />
                  National Championship
                </span>
                <h3 className="font-display text-[clamp(1.35rem,3vw,1.75rem)] font-semibold text-[#263b53] leading-snug">
                  {site.achievements.title}
                </h3>
              </div>
            </div>

            <MedalBadge label={site.achievements.result} />
          </div>

          {/* Structured Meta Grid with Contextual Icons & date-fns */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 list-none p-0 m-0">
            {site.achievements.meta.map((item) => {
              const IconComponent = getMetaIcon(item);
              const formatted = formatMetaText(item);

              return (
                <li key={item} className="flex items-center gap-3 text-[#4a6078] text-[0.95rem]">
                  <span
                    className="w-7 h-7 rounded-md bg-[#eef1f5] border border-[#dce3ea] flex items-center justify-center shrink-0 text-[#4778a8]"
                    aria-hidden="true"
                  >
                    <IconComponent size={16} />
                  </span>
                  <span>{formatted}</span>
                </li>
              );
            })}
          </ul>

          {/* Action Row */}
          {site.achievements.proof ? (
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <ButtonLink
                href={site.achievements.proof}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
                icon={ExternalLinkIcon}
                iconPosition="right"
              >
                View official result
              </ButtonLink>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1e7039] bg-[#1e7039]/8 border border-[#1e7039]/20 px-3.5 py-1.5 rounded-full">
                <ShieldCheckIcon size={16} />
                <span>Verified Result</span>
              </div>
            </div>
          ) : null}
        </motion.article>

        {showGallery ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            aria-label="Achievement gallery"
          >
            {gallery.map((item, index) => (
              <motion.figure
                key={item.src}
                className="grid gap-2.5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="rounded-lg w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {item.caption ? (
                  <figcaption className="text-sm text-[#4a6078]">
                    {item.caption}
                  </figcaption>
                ) : null}
              </motion.figure>
            ))}
          </div>
        ) : null}
      </div>
    </motion.section>
  );
}
