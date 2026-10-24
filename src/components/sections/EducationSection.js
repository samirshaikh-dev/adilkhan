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
      className="bg-[#eef1f5] text-[#263b53] py-16 md:py-20 scroll-mt-[72px]"
      aria-labelledby="education-title"
      {...sectionReveal}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 grid gap-8">
        <SectionIntro
          eyebrow="Education"
          title="Academic background"
          titleId="education-title"
        />

        <ol className="relative grid gap-0 list-none p-0 m-0 max-w-[800px]">
          {site.education.map((item, index) => {
            const current = isCurrent(item.period);
            const DegreeIcon = item.degree.toLowerCase().includes("mba")
              ? BriefcaseIcon
              : GraduationCapIcon;

            return (
              <motion.li
                key={item.degree}
                className="grid grid-cols-[28px_1fr] gap-4 md:gap-6 pb-8 relative last:pb-0 before:content-[''] before:absolute before:left-[13px] before:top-8 before:bottom-0 before:w-0.5 before:bg-[#dce3ea] last:before:hidden"
                variants={fadeUp}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                {/* Intentional, Compact Timeline Node */}
                <div
                  className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 relative mt-1.5 ${
                    current
                      ? "border-[#c9a227] bg-[#c9a227] text-[#0b1220] shadow-sm"
                      : "border-[#4a6078]/35 bg-[#eef1f5] text-[#4a6078]"
                  }`}
                  aria-hidden="true"
                >
                  <DegreeIcon size={13} />
                </div>

                {/* Structured Education Card */}
                <motion.article
                  className={`p-5 md:p-6 bg-white rounded-xl grid gap-2.5 shadow-xs transition-all duration-200 ${
                    current
                      ? "border border-[#c9a227]/40 hover:border-[#c9a227]/70 hover:shadow-sm"
                      : "border border-[#dce3ea] hover:border-[#4a6078]/30 hover:shadow-xs"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {/* Top Meta Row: Degree Badge + Status + Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#eef1f5] pb-2.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold tracking-wider uppercase ${
                          current
                            ? "bg-[#c9a227]/15 text-[#8a7018]"
                            : "bg-[#eef1f5] text-[#3b6794]"
                        }`}
                      >
                        {item.degree}
                      </span>

                      {current ? (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#10b981]/10 text-[#0f766e]">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-[#10b981]"
                            aria-hidden="true"
                          />
                          In progress
                        </span>
                      ) : null}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs md:text-sm text-[#4a6078] font-medium">
                      <CalendarIcon
                        size={14}
                        className={current ? "text-[#c9a227]" : "text-[#4778a8]"}
                        aria-hidden="true"
                      />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Primary Heading: Institution Name */}
                  <h3 className="font-semibold text-lg md:text-xl text-[#263b53] tracking-tight">
                    {item.institution}
                  </h3>

                  {/* Degree Full Title */}
                  {item.degreeFullName ? (
                    <p className="text-sm font-medium text-[#3b6794]">
                      {item.degreeFullName}
                    </p>
                  ) : null}

                  {/* Specialization / Academic Details */}
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
