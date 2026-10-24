"use client";

import { motion } from "framer-motion";
import SectionIntro from "../ui/SectionIntro";
import { fadeUp, sectionReveal, staggerContainer } from "./motion";
import { TargetIcon, ShieldCheckIcon, TrendingUpIcon, CompassIcon } from "../icons";

const strengths = [
  {
    icon: TargetIcon,
    title: "Discipline & Preparation",
    desc: "Methodical approach to goals through consistent preparation and attention to detail.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Composure Under Pressure",
    desc: "Calm, decisive thinking when stakes are high and time is limited.",
  },
  {
    icon: CompassIcon,
    title: "Strategic Thinking",
    desc: "Reading situations, anticipating challenges, and adapting with intent.",
  },
  {
    icon: TrendingUpIcon,
    title: "Resilience & Grit",
    desc: "Staying committed through setbacks with a focus on continuous improvement.",
  },
];

export default function StrengthsSection() {
  return (
    <motion.section
      id="strengths"
      className="bg-[#f7f5f2] text-[#263b53] py-16 md:py-20 scroll-mt-[72px]"
      aria-labelledby="strengths-title"
      {...sectionReveal}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 grid gap-8">
        <SectionIntro
          eyebrow="Strengths"
          title="Evidence-based qualities for general management"
          titleId="strengths-title"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {strengths.map((strength) => {
            const IconComponent = strength.icon;
            return (
              <motion.article
                key={strength.title}
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
                <h3 className="text-base font-semibold text-[#263b53] mb-2">
                  {strength.title}
                </h3>
                <p className="text-sm text-[#4a6078] leading-relaxed">
                  {strength.desc}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
