"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "../../data/site";
import { hasMedia } from "../../lib/media";
import ButtonLink from "../ui/ButtonLink";
import DecorativePanel from "../ui/DecorativePanel";
import { fadeUp } from "./motion";
import { ArrowRightIcon, SendIcon, SparklesIcon } from "../icons";
import { AmbientGlow, SectionGridOverlay } from "../graphics/BackgroundGraphics";

export default function HeroSection() {
  const heroMedia = site.media?.hero;

  return (
    <motion.section
      id="hero"
      className="relative overflow-hidden bg-[#0b1220] text-[#f7f5f2] pt-[calc(72px+48px)] pb-20 min-h-[min(92vh,880px)] flex items-center scroll-mt-[72px]"
      aria-labelledby="hero-title"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AmbientGlow color="warm" />
      <SectionGridOverlay />

      <div className="max-w-[1080px] mx-auto px-5 md:px-8 w-full grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-12 items-center relative z-10">
        <motion.div
          className="grid gap-6"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/25 shadow-[0_0_12px_rgba(201,162,39,0.1)] w-fit">
            <SparklesIcon size={14} className="text-[#c9a227] animate-pulse" />
            <p className="text-xs uppercase tracking-[0.12em] font-semibold text-[#c9a227]">
              MBA Candidate · Grappling Athlete
            </p>
          </div>

          <h1
            id="hero-title"
            className="font-display text-[clamp(2.25rem,7vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-[#f7f5f2]"
          >
            {site.name}
          </h1>

          <p className="text-[clamp(1.15rem,3vw,1.45rem)] font-medium leading-snug text-[#f7f5f2] max-w-[28ch]">
            {site.tagline}
          </p>

          <p className="text-[1.05rem] leading-relaxed text-[#a8b4c4] max-w-[52ch]">
            {site.heroText}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink
              href="#achievements"
              variant="primary-warm"
              icon={ArrowRightIcon}
              iconPosition="right"
            >
              View achievements
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="ghost-light"
              icon={SendIcon}
              iconPosition="right"
            >
              Get in touch
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          {hasMedia(heroMedia) ? (
            <Image
              src={heroMedia.src}
              alt={heroMedia.alt}
              width={heroMedia.width}
              height={heroMedia.height}
              className="w-full max-w-[420px] aspect-[4/5] rounded-xl object-cover"
              priority
              fetchPriority="high"
            />
          ) : (
            <DecorativePanel />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
