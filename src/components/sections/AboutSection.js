"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "../../data/site";
import { hasMedia } from "../../lib/media";
import SectionIntro from "../ui/SectionIntro";
import { fadeUp, sectionReveal, staggerContainer } from "./motion";
import { FlameIcon, CompassIcon, TrendingUpIcon } from "../icons";

const pillars = [
  {
    icon: FlameIcon,
    title: "Mat Discipline",
    desc: "Preparation, resilience, and consistent effort.",
  },
  {
    icon: CompassIcon,
    title: "Strategic Thinking",
    desc: "Situational awareness and considered decisions.",
  },
  {
    icon: TrendingUpIcon,
    title: "Continuous Growth",
    desc: "Accountability, learning, and measurable progress.",
  },
];

export default function AboutSection() {
  const aboutMedia = site.media?.about;
  const hasAboutPhoto = hasMedia(aboutMedia);

  const introText = site.about[0];
  const philosophyText = site.about[1];
  const closingText = site.about[2];

  return (
    <motion.section
      id="profile"
      className="bg-[#f7f5f2] text-[#263b53] py-16 md:py-20 scroll-mt-[72px]"
      aria-labelledby="about-title"
      {...sectionReveal}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 grid gap-8">
        <SectionIntro
          eyebrow="Profile"
          title="Athletics, academics, and ambition"
          titleId="about-title"
        />

        <div
          className={`grid gap-8 items-start ${
            hasAboutPhoto ? "grid-cols-1 md:grid-cols-[1fr_0.85fr]" : "grid-cols-1"
          }`}
        >
          <div className="grid gap-6 max-w-[72ch]">
            {/* Opening Narrative */}
            <motion.p
              className="text-[1.05rem] md:text-[1.1rem] leading-relaxed text-[#263b53]"
              variants={fadeUp}
              transition={{ duration: 0.35 }}
            >
              {introText}
            </motion.p>

            {/* Personal Philosophy Callout */}
            <motion.div
              className="relative pl-5 py-1.5 border-l-[3px] border-[#c9a227] my-1"
              variants={fadeUp}
              transition={{ duration: 0.35 }}
            >
              <blockquote className="font-display text-[1.125rem] md:text-[1.25rem] font-medium leading-snug text-[#263b53] italic">
                “{philosophyText}”
              </blockquote>
              <p className="text-xs uppercase tracking-wider text-[#a8b4c4] font-medium mt-2">
                A personal philosophy inspired by sport
              </p>
            </motion.div>

            {/* Closing Narrative */}
            <motion.p
              className="text-[1.05rem] md:text-[1.1rem] leading-relaxed text-[#263b53]"
              variants={fadeUp}
              transition={{ duration: 0.35 }}
            >
              {closingText}
            </motion.p>

            {/* Strategic Pillars */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mt-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    className="flex flex-col p-5 rounded-lg bg-white border border-[#dce3ea] h-full"
                    variants={fadeUp}
                    transition={{ duration: 0.35 }}
                  >
                    <div
                      className="w-10 h-10 rounded-md bg-[#eef1f5] border border-[#dce3ea] flex items-center justify-center shrink-0 text-[#3b6794] mb-3"
                      aria-hidden="true"
                    >
                      <IconComponent size={20} />
                    </div>
                    <h4 className="text-base font-semibold text-[#263b53] mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#4a6078] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {hasAboutPhoto ? (
            <motion.div variants={fadeUp} transition={{ duration: 0.4 }}>
              <Image
                src={aboutMedia.src}
                alt={aboutMedia.alt}
                width={aboutMedia.width}
                height={aboutMedia.height}
                className="rounded-xl w-full object-cover shadow-md"
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
