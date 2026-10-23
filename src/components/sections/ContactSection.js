"use client";

import { motion } from "framer-motion";
import { site } from "../../data/site";
import SectionIntro from "../ui/SectionIntro";
import { sectionReveal } from "./motion";
import {
  MailIcon,
  LinkedinIcon,
  InstagramIcon,
  ArrowUpRightIcon,
  SendIcon,
} from "../icons";

export default function ContactSection() {
  const { email, linkedin, instagram } = site.contact;

  if (!email && !linkedin && !instagram) {
    return null;
  }

  return (
    <motion.section
      id="contact"
      className="bg-[#f7f5f2] text-[#263b53] py-16 md:py-24 scroll-mt-[72px]"
      aria-labelledby="contact-title"
      {...sectionReveal}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 grid gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end">
          <div>
            <SectionIntro
              eyebrow="Contact"
              title="Get in touch"
              titleId="contact-title"
            />
            <div className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-[#4a6078] bg-[#eef1f5] px-3.5 py-1.5 rounded-full border border-[#dce3ea] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" aria-hidden="true" />
              <span>Open to strategic & management discussions</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {email ? (
              <motion.a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#dce3ea] bg-white text-[#263b53] font-medium text-[0.95rem] hover:border-[#c9a227] hover:bg-[#eef1f5] hover:shadow-md transition-all duration-200 group"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <span
                  className="w-8 h-8 rounded-full bg-[#4778a8]/12 text-[#4778a8] flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <MailIcon size={18} />
                </span>
                <span>{email}</span>
                <span
                  className="text-[#4a6078] group-hover:text-[#c9a227] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  aria-hidden="true"
                >
                  <SendIcon size={14} />
                </span>
              </motion.a>
            ) : null}

            {linkedin ? (
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#dce3ea] bg-white text-[#263b53] font-medium text-[0.95rem] hover:border-[#c9a227] hover:bg-[#eef1f5] hover:shadow-md transition-all duration-200 group"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <span
                  className="w-8 h-8 rounded-full bg-[#0a66c2]/12 text-[#0a66c2] flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <LinkedinIcon size={18} />
                </span>
                <span>LinkedIn Profile</span>
                <span
                  className="text-[#4a6078] group-hover:text-[#c9a227] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  aria-hidden="true"
                >
                  <ArrowUpRightIcon size={16} />
                </span>
              </motion.a>
            ) : null}

            {instagram ? (
              <motion.a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#dce3ea] bg-white text-[#263b53] font-medium text-[0.95rem] hover:border-[#c9a227] hover:bg-[#eef1f5] hover:shadow-md transition-all duration-200 group"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <span
                  className="w-8 h-8 rounded-full bg-[#e1306c]/12 text-[#e1306c] flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <InstagramIcon size={18} />
                </span>
                <span>Instagram</span>
                <span
                  className="text-[#4a6078] group-hover:text-[#c9a227] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  aria-hidden="true"
                >
                  <ArrowUpRightIcon size={16} />
                </span>
              </motion.a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
