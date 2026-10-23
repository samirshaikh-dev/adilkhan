"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "../../data/site";
import { MAP_URL } from "../../data/seo";
import SectionIntro from "../ui/SectionIntro";
import ButtonLink from "../ui/ButtonLink";
import { sectionReveal, fadeUp } from "./motion";
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  InstagramIcon,
  ArrowUpRightIcon,
  MapPinIcon,
  SendIcon,
  CopyIcon,
  CheckIcon,
} from "../icons";

export default function ContactSection() {
  const { email, phone, linkedin, instagram, invitation } = site.contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  if (!email && !linkedin && !instagram) {
    return null;
  }

  const invitationText =
    invitation ||
    "Open to meaningful conversations about business, leadership, and collaboration.";

  return (
    <motion.section
      id="contact"
      className="bg-[#f7f5f2] text-[#263b53] py-16 md:py-24 scroll-mt-[72px]"
      aria-labelledby="contact-title"
      {...sectionReveal}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-8 grid gap-8 md:gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading, Invitation & Compact Location Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <SectionIntro
              eyebrow="Contact"
              title="Get in touch"
              titleId="contact-title"
              description={invitationText}
            />

            {/* Active Status Pill */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1e6f3d] bg-[#1e7039]/8 border border-[#1e7039]/20 px-3.5 py-1.5 rounded-full w-fit">
              <span
                className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"
                aria-hidden="true"
              />
              <span>Available for leadership & strategy discussions</span>
            </div>

            {/* Compact Location Card */}
            <address className="not-italic rounded-xl border border-[#dce3ea] bg-white p-4 shadow-xs">
              <p className="text-[11px] uppercase tracking-[0.12em] font-semibold text-[#3b6794]">
                Location
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-[#263b53]">
                <MapPinIcon
                  size={16}
                  className="text-[#c9a227] shrink-0"
                  aria-hidden="true"
                />
                <span>
                  {site.location.city}, {site.location.region}{" "}
                  {site.location.postalCode}, {site.location.country}
                </span>
              </p>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#3b6794] hover:text-[#c9a227] hover:underline transition-colors"
              >
                <span>View on Google Maps</span>
                <ArrowUpRightIcon size={13} aria-hidden="true" />
              </a>
            </address>
          </div>

          {/* Right Column: Prominent Primary Email Card + Secondary Social Links */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Primary Action: Featured Email Card */}
            {email ? (
              <motion.div
                className="p-6 md:p-7 rounded-2xl border border-[#c9a227]/40 bg-white shadow-sm hover:border-[#c9a227]/60 hover:shadow-md transition-all duration-200 flex flex-col gap-4"
                variants={fadeUp}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#c9a227]">
                    Primary Contact
                  </span>
                  <div
                    className="w-9 h-9 rounded-lg bg-[#c9a227]/12 border border-[#c9a227]/25 flex items-center justify-center text-[#8a7018] shrink-0"
                    aria-hidden="true"
                  >
                    <MailIcon size={18} />
                  </div>
                </div>

                <div>
                  <a
                    href={`mailto:${email}`}
                    className="font-display font-semibold text-[clamp(1.2rem,2.5vw,1.65rem)] text-[#263b53] hover:text-[#3b6794] transition-colors leading-snug break-all"
                  >
                    {email}
                  </a>
                  <p className="text-xs text-[#5a718a] mt-1 font-normal">
                    Direct inquiries, collaborations, and professional opportunities.
                  </p>
                </div>

                {/* Email Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#f0f3f6]">
                  <ButtonLink
                    href={`mailto:${email}`}
                    variant="primary-navy"
                    icon={SendIcon}
                    iconPosition="right"
                  >
                    Send email
                  </ButtonLink>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#dce3ea] bg-white text-[#263b53] hover:bg-[#f0f4f8] text-sm font-semibold transition-all duration-150 cursor-pointer shadow-xs"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <CheckIcon size={15} className="text-[#1b5e35]" />
                        <span className="text-[#1b5e35]">Copied to clipboard</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon size={15} className="text-[#3b6794]" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ) : null}

            {/* Secondary Contact Channels: Phone, LinkedIn & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {phone ? (
                <motion.a
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center justify-between p-4 rounded-xl border border-[#dce3ea] bg-white hover:border-[#10b981]/50 hover:shadow-xs transition-all duration-200 group"
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="w-9 h-9 rounded-lg bg-[#10b981]/10 text-[#10b981] flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <PhoneIcon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-[#5a718a] leading-none mb-1">Direct Call</p>
                      <p className="text-sm font-semibold text-[#263b53] group-hover:text-[#10b981] transition-colors truncate">
                        {phone}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-[#64748b] group-hover:text-[#10b981] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-2"
                    aria-hidden="true"
                  >
                    <ArrowUpRightIcon size={16} />
                  </span>
                </motion.a>
              ) : null}

              {linkedin ? (
                <motion.a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-[#dce3ea] bg-white hover:border-[#0a66c2]/50 hover:shadow-xs transition-all duration-200 group"
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="w-9 h-9 rounded-lg bg-[#0a66c2]/10 text-[#0a66c2] flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <LinkedinIcon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-[#5a718a] leading-none mb-1">Professional</p>
                      <p className="text-sm font-semibold text-[#263b53] group-hover:text-[#0a66c2] transition-colors truncate">
                        LinkedIn
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-[#64748b] group-hover:text-[#0a66c2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-2"
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
                  className="flex items-center justify-between p-4 rounded-xl border border-[#dce3ea] bg-white hover:border-[#e1306c]/50 hover:shadow-xs transition-all duration-200 group"
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="w-9 h-9 rounded-lg bg-[#e1306c]/10 text-[#e1306c] flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <InstagramIcon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-[#5a718a] leading-none mb-1">Social</p>
                      <p className="text-sm font-semibold text-[#263b53] group-hover:text-[#e1306c] transition-colors truncate">
                        Instagram
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-[#64748b] group-hover:text-[#e1306c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-2"
                    aria-hidden="true"
                  >
                    <ArrowUpRightIcon size={16} />
                  </span>
                </motion.a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
