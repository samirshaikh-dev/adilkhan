"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import SectionIntro from "../ui/SectionIntro";
import { fadeUp, sectionReveal } from "./motion";
import { GraduationCapIcon, CalendarIcon, BriefcaseIcon } from "../icons";

function isCurrent(period) {
  return /present/i.test(period ?? "");
}

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      className="bg-[#eef1f5] text-[#263b53] py-16 md:py-24 scroll-mt-[72px]"
      aria-labelledby="education-title"
      {...sectionReveal}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 grid gap-10">
        <SectionIntro
          eyebrow="Education"
          title="Academic background"
          titleId="education-title"
        />

        <ol className="relative grid gap-0 list-none p-0 m-0">
          {site.education.map((item, index) => {
            const current = isCurrent(item.period);
            const DegreeIcon = item.degree.toLowerCase().includes("mba")
              ? BriefcaseIcon
              : GraduationCapIcon;

            return (
              <motion.li
                key={item.degree}
                className="grid grid-cols-[32px_1fr] gap-5 md:gap-6 pb-8 relative last:pb-0 before:content-[''] before:absolute before:left-[15px] before:top-9 before:bottom-0 before:w-0.5 before:bg-[#dce3ea] last:before:hidden"
                variants={fadeUp}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 border-[#c9a227] flex items-center justify-center relative shrink-0 mt-1 shadow-sm ${
                    current ? "bg-[#c9a227] text-[#0b1220]" : "bg-[#eef1f5] text-[#c9a227]"
                  }`}
                  aria-hidden="true"
                >
                  <DegreeIcon size={14} />
                  {current && (
                    <span className="absolute -inset-1.5 rounded-full border-2 border-[#c9a227] animate-ping opacity-60" />
                  )}
                </div>

                <motion.article
                  className="p-6 bg-white border border-[#dce3ea] rounded-xl grid gap-2.5 shadow-sm hover:shadow-md hover:border-[#c9a227]/40 transition-all duration-200"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eef1f5] text-xs font-semibold uppercase tracking-wider text-[#3b6794]">
                      <GraduationCapIcon size={14} aria-hidden="true" />
                      <span>{item.degree}</span>
                    </span>

                    {current ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#c9a227]/15 text-[#8a7018]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" aria-hidden="true" />
                        In Progress
                      </span>
                    ) : null}
                  </div>

                  <h3 className="font-semibold text-lg text-[#263b53]">
                    {item.institution}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-[#4a6078]">
                    <CalendarIcon size={15} className="text-[#4778a8]" aria-hidden="true" />
                    <p>{item.period}</p>
                  </div>

                  {item.details ? (
                    <p className="text-sm text-[#4a6078] leading-relaxed">
                      {item.details}
                    </p>
                  ) : null}
                </motion.article>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </motion.section>
  );
}
