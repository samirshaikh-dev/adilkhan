"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import SectionIntro from "../ui/SectionIntro";
import { sectionReveal, fadeUp, staggerContainer } from "./motion";
import {
  MartialArtsIcon,
  CricketIcon,
  DumbbellIcon,
  BookOpenIcon,
  ActivityIcon,
} from "../icons";
import { AmbientGlow, SectionGridOverlay } from "../graphics/BackgroundGraphics";

const iconMap = {
  Grappling: MartialArtsIcon,
  MartialArtsIcon: MartialArtsIcon,
  Cricket: CricketIcon,
  CricketIcon: CricketIcon,
  "Strength training": DumbbellIcon,
  DumbbellIcon: DumbbellIcon,
  "Continuous learning": BookOpenIcon,
  BookOpenIcon: BookOpenIcon,
};

export default function InterestsSection() {
  const intro = site.interestsIntro || {
    eyebrow: "Interests",
    title: "Beyond the mat",
    subtitle: "The pursuits that shape my perspective, discipline, and growth.",
  };

  return (
    <motion.section
      id="interests"
      className="relative overflow-hidden bg-[#0b1220] text-[#f7f5f2] py-16 md:py-24 scroll-mt-[72px]"
      aria-labelledby="interests-title"
      {...sectionReveal}
    >
      <AmbientGlow color="cool" />
      <SectionGridOverlay />

      <div className="max-w-[1080px] mx-auto px-5 md:px-8 grid gap-10 relative z-10">
        <SectionIntro
          eyebrow={intro.eyebrow}
          title={intro.title}
          titleId="interests-title"
          description={intro.subtitle}
        />

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 list-none p-0 m-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {site.interests.map((item) => {
            const isObj = typeof item === "object" && item !== null;
            const title = isObj ? item.title : item;
            const description = isObj ? item.description : "";
            const IconComponent =
              (isObj && iconMap[item.icon]) || iconMap[title] || ActivityIcon;

            return (
              <motion.li
                key={title}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md relative overflow-hidden flex flex-col justify-between min-h-[190px] hover:border-[#c9a227]/45 hover:bg-white/[0.06] hover:shadow-xl transition-all duration-200 group cursor-default"
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <div>
                  {/* Clean Gold Icon Container */}
                  <div
                    className="w-12 h-12 rounded-xl bg-[#c9a227]/12 border border-[#c9a227]/25 flex items-center justify-center text-[#c9a227] group-hover:scale-105 group-hover:bg-[#c9a227]/20 transition-all duration-200 shadow-sm"
                    aria-hidden="true"
                  >
                    <IconComponent size={24} />
                  </div>

                  {/* Clear Interest Title */}
                  <h3 className="font-display font-semibold text-lg text-[#f7f5f2] leading-snug mt-5 tracking-tight">
                    {title}
                  </h3>

                  {/* Concise, Authentic Description */}
                  {description ? (
                    <p className="text-sm text-[#a8b4c4] leading-relaxed mt-2 font-normal">
                      {description}
                    </p>
                  ) : null}
                </div>

                {/* Subtle Bottom Gold Accent Indicator on Hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-hidden="true"
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </motion.section>
  );
}
