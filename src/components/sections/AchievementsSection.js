"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { parse, format, isValid } from "date-fns";
import { site } from "../../data/site";
import { hasMedia } from "../../lib/media";
import ButtonLink from "../ui/ButtonLink";
import MedalBadge from "../ui/MedalBadge";
import SilverMedalEmblem from "../ui/SilverMedalEmblem";
import SectionIntro from "../ui/SectionIntro";
import { fadeUp, sectionReveal } from "./motion";
import {
  ShieldCheckIcon,
  DumbbellIcon,
  MartialArtsIcon,
  MapPinIcon,
  CalendarIcon,
  ExternalLinkIcon,
  AwardIcon,
  LaurelIcon,
} from "../icons";

const REFERENCE_DATE = new Date(0);

function formatMetaDate(dateStr) {
  if (typeof dateStr === "string" && /^\d{1,2}\s+[A-Za-z]+\s+\d{4}$/.test(dateStr.trim())) {
    try {
      const parsed = parse(dateStr.trim(), "d MMMM yyyy", REFERENCE_DATE);
      if (isValid(parsed)) {
        return format(parsed, "MMMM d, yyyy");
      }
    } catch {
      return dateStr;
    }
  }
  return dateStr;
}

export default function AchievementsSection() {
  const featuredMedia = site.media?.achievementFeatured;
  const gallery = site.media?.gallery ?? [];
  const showGallery = hasMedia(gallery);

  const achievement = site.achievements;
  const otherAchievements = Array.isArray(achievement?.other) ? achievement.other : [];

  // Structured detail items with clear separation of Category, Division, Organizer, Venue, and Date
  const detailItems = [
    {
      label: "Weight Category",
      value: achievement.category || "Men's 71 kg",
      icon: DumbbellIcon,
    },
    {
      label: "Competition Division",
      value: achievement.division || "GI Division",
      icon: MartialArtsIcon,
    },
    {
      label: "Sanctioning Body",
      value: achievement.organizer || "National Grappling Association",
      icon: AwardIcon,
    },
    {
      label: "Host Location",
      value: achievement.location || "Mumbai, India",
      icon: MapPinIcon,
    },
    {
      label: "Competition Date",
      value: formatMetaDate(achievement.date || "12 March 2026"),
      icon: CalendarIcon,
    },
  ];

  return (
    <motion.section
      id="achievements"
      className="bg-[#f7f5f2] text-[#263b53] py-16 md:py-20 scroll-mt-[72px]"
      aria-labelledby="achievements-title"
      {...sectionReveal}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 grid gap-8 md:gap-10">
        <SectionIntro
          eyebrow="Achievements"
          title="Competition highlights"
          titleId="achievements-title"
        />

        {hasMedia(featuredMedia) ? (
          <motion.div
            className="rounded-xl overflow-hidden mb-2"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={featuredMedia.src}
              alt={featuredMedia.alt}
              width={featuredMedia.width}
              height={featuredMedia.height}
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        ) : null}

        {/* Featured Achievement Card: Thin Gold Border, Silver Medal Emblem, Tight Spacing */}
        <motion.article
          className="relative p-6 md:p-7 border border-[#c9a227]/35 rounded-2xl bg-white shadow-sm hover:border-[#c9a227]/55 hover:shadow-md transition-all duration-200 flex flex-col gap-5 md:gap-6"
          variants={fadeUp}
          transition={{ duration: 0.4, delay: 0.06 }}
          whileHover={{ y: -3 }}
        >
          {/* Card Top Header: Authentic Silver Medal Emblem + Event Title + Compact Medal Badge */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-3.5 sm:gap-4 min-w-0">
              <SilverMedalEmblem size={52} />
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] font-semibold text-[#3b6794] mb-1">
                  <LaurelIcon size={14} className="text-[#c9a227]" />
                  National Championship
                </span>
                <h3 className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold text-[#263b53] leading-snug">
                  {achievement.title}
                </h3>
              </div>
            </div>

            <MedalBadge label={achievement.result} type={achievement.medalType || "silver"} />
          </div>

          {/* Structured Details Grid with Deliberate Gap & Consistent 36px Icon Containers */}
          <div className="pt-5 border-t border-[#e8edf2]">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 list-none p-0 m-0">
              {detailItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-3.5">
                    <span
                      className="w-9 h-9 rounded-lg bg-[#f0f4f8] border border-[#dce3ea] flex items-center justify-center shrink-0 text-[#3b6794] shadow-xs"
                      aria-hidden="true"
                    >
                      <IconComponent size={18} />
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[0.6875rem] uppercase tracking-wider font-semibold text-[#62778f] leading-none mb-1">
                        {item.label}
                      </span>
                      <span className="text-[0.925rem] font-medium text-[#263b53] leading-snug truncate">
                        {item.value}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Action Row: Outlined Button with Subtle Navy Hover & Trustworthy Muted Green Verification Badge */}
          {(achievement.proof || achievement.verified) && (
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#e8edf2]">
              <div className="flex items-center gap-3">
                {achievement.proof ? (
                  <ButtonLink
                    href={achievement.proof}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={ExternalLinkIcon}
                    iconPosition="right"
                  >
                    {achievement.proofLabel || "View official result"}
                  </ButtonLink>
                ) : null}
                {achievement.proofDocument ? (
                  <span className="text-xs text-[#62778f] hidden sm:inline">
                    {achievement.proofDocument}
                  </span>
                ) : null}
              </div>

              {achievement.verified ? (
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1b5e35] bg-[#1e7039]/8 border border-[#1e7039]/25 px-3 py-1 rounded-full">
                  <ShieldCheckIcon size={14} className="text-[#1b5e35]" />
                  <span>Verified Result</span>
                </div>
              ) : null}
            </div>
          )}
        </motion.article>

        {/* Scalable Multi-Award Support: Consistent Secondary Cards */}
        {otherAchievements.length > 0 ? (
          <div className="grid gap-3.5 mt-2">
            <div className="flex items-center justify-between px-1">
              <h4 className="text-xs uppercase tracking-[0.12em] font-semibold text-[#4a6078]">
                Additional Competitions & Honours
              </h4>
              <span className="text-xs text-[#71869e]">
                {otherAchievements.length} record{otherAchievements.length > 1 ? "s" : ""}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherAchievements.map((item, index) => (
                <motion.div
                  key={item.title + index}
                  className="p-5 rounded-xl bg-white border border-[#dce3ea] hover:border-[#263b53]/35 shadow-xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between gap-4"
                  variants={fadeUp}
                  transition={{ duration: 0.35, delay: 0.08 + index * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-semibold text-[#3b6794] tracking-wider uppercase">
                        {item.period || item.year}
                      </span>
                      <h5 className="font-display font-semibold text-base text-[#263b53] mt-0.5 leading-snug">
                        {item.title}
                      </h5>
                      <p className="text-xs text-[#5a718a] mt-1">
                        {item.organizer} · {item.location}
                      </p>
                    </div>
                    <MedalBadge label={item.result} type={item.medalType} />
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#5a718a] pt-3 border-t border-[#f0f3f6]">
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#263b53]">
                      <MartialArtsIcon size={14} className="text-[#3b6794]" />
                      {item.division}
                    </span>
                    {item.verified ? (
                      <span className="inline-flex items-center gap-1 text-[#1b5e35] font-medium">
                        <ShieldCheckIcon size={13} />
                        Verified
                      </span>
                    ) : item.proof ? (
                      <a
                        href={item.proof}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#3b6794] hover:underline"
                      >
                        <span>Record</span>
                        <ExternalLinkIcon size={12} />
                      </a>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : null}

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
