"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import SectionIntro from "../ui/SectionIntro";
import { sectionReveal, fadeUp, staggerContainer } from "./motion";
import {
  CricketIcon,
  DumbbellIcon,
  UsersGroupIcon,
  BookOpenIcon,
  ActivityIcon,
} from "../icons";
import { AmbientGlow, SectionGridOverlay } from "../graphics/BackgroundGraphics";

const interestDetails = {
  Cricket: {
    icon: CricketIcon,
    category: "Athletics & Teamplay",
  },
  "Strength training": {
    icon: DumbbellIcon,
    category: "Physical Conditioning",
  },
  "Team discipline": {
    icon: UsersGroupIcon,
    category: "Leadership & Trust",
  },
  "Continuous learning": {
    icon: BookOpenIcon,
    category: "Intellectual Growth",
  },
};

export default function InterestsSection() {
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
          eyebrow="Interests"
          title="Beyond the mat"
          titleId="interests-title"
        />

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 m-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {site.interests.map((interest) => {
            const detail = interestDetails[interest] || {
              icon: ActivityIcon,
              category: "Focus Area",
            };
            const IconComponent = detail.icon;

            return (
              <motion.li
                key={interest}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md relative overflow-hidden flex flex-col justify-between min-h-[145px] hover:border-[#c9a227]/50 hover:bg-white/[0.06] hover:shadow-xl transition-all duration-200 group cursor-default"
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <div className="flex justify-between items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-lg bg-[#c9a227]/12 border border-[#c9a227]/25 flex items-center justify-center text-[#c9a227] group-hover:scale-110 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    <IconComponent size={22} />
                  </div>
                  <span className="text-[0.72rem] tracking-wider uppercase text-[#a8b4c4] font-medium">
                    {detail.category}
                  </span>
                </div>

                <div className="mt-5">
                  <span className="text-lg font-semibold text-[#f7f5f2] leading-snug">
                    {interest}
                  </span>
                </div>

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
