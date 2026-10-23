"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "../../data/site";
import { hasMedia } from "../../lib/media";
import SectionIntro from "../ui/SectionIntro";
import { fadeUp, sectionReveal, staggerContainer } from "./motion";
import { FlameIcon, CompassIcon, TrendingUpIcon } from "../icons";

const PULL_QUOTE_INDEX = 1;

const pillars = [
  {
    icon: FlameIcon,
    title: "Mat Discipline",
    desc: "Rigorous daily training shaping resilience and unshakeable work ethic.",
  },
  {
    icon: CompassIcon,
    title: "Strategic Mindset",
    desc: "Calm situational awareness and tactical execution under pressure.",
  },
  {
    icon: TrendingUpIcon,
    title: "Accountable Growth",
    desc: "Grounded preparation and steady compounding progress toward goals.",
  },
];

export default function AboutSection() {
  const aboutMedia = site.media?.about;
  const hasAboutPhoto = hasMedia(aboutMedia);

  return (
    <motion.section
      id="about"
      className="bg-[#f7f5f2] text-[#263b53] py-16 md:py-24 scroll-mt-[72px]"
      aria-labelledby="about-title"
      {...sectionReveal}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 grid gap-10">
        <SectionIntro
          eyebrow="About"
          title="Professional profile"
          titleId="about-title"
          description={`Based in ${site.location.city}, ${site.location.region} ${site.location.postalCode}, I combine business education with national-level grappling experience.`}
        />

        <div
          className={`grid gap-8 items-start ${
            hasAboutPhoto ? "grid-cols-1 md:grid-cols-[1fr_0.85fr]" : "grid-cols-1"
          }`}
        >
          <div className="grid gap-5 max-w-[65ch]">
            {site.about.map((paragraph, index) =>
              index === PULL_QUOTE_INDEX ? (
                <motion.div
                  key={paragraph}
                  className="relative my-2"
                  variants={fadeUp}
                  transition={{ duration: 0.35 }}
                >
                  <span
                    className="absolute -top-6 -left-2 font-display text-6xl text-[#c9a227]/25 pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <p className="pl-5 border-l-[3px] border-[#c9a227] text-[1.08rem] font-medium leading-relaxed text-[#263b53]">
                    {paragraph}
                  </p>
                </motion.div>
              ) : (
                <motion.p
                  key={paragraph}
                  className="text-[1.05rem] leading-relaxed text-[#263b53]"
                  variants={fadeUp}
                  transition={{ duration: 0.35 }}
                >
                  {paragraph}
                </motion.p>
              )
            )}

            {/* Strategic Pillars with Animated Icons */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6"
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
                    className="flex sm:flex-col lg:flex-row gap-3.5 items-start p-4 rounded-xl bg-white border border-[#dce3ea] hover:border-[#c9a227]/50 hover:shadow-md transition-all duration-200 group cursor-default"
                    variants={fadeUp}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg bg-[#eef1f5] border border-[#dce3ea] flex items-center justify-center shrink-0 text-[#3b6794] group-hover:bg-[#c9a227]/15 group-hover:text-[#8a7018] group-hover:border-[#c9a227]/30 transition-colors"
                      aria-hidden="true"
                    >
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#263b53] mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#4a6078] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
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
                className="rounded-xl w-full object-cover"
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
