"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { site } from "../../data/site";
import { hasMedia } from "../../lib/media";
import ButtonLink from "../ui/ButtonLink";
import DecorativePanel from "../ui/DecorativePanel";
import { ArrowRightIcon, SendIcon, SparklesIcon } from "../icons";
import { AmbientGlow, SectionGridOverlay } from "../graphics/BackgroundGraphics";

export default function HeroSection() {
  const heroMedia = site.media?.hero;
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);

  useGSAP(
    () => {
      if (!titleRef.current || !taglineRef.current) return;

      const titleSplit = new SplitType(titleRef.current, {
        types: "chars,words",
        tagName: "span",
      });
      const taglineSplit = new SplitType(taglineRef.current, {
        types: "words",
        tagName: "span",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge-elem", {
        opacity: 0,
        y: -14,
        duration: 0.6,
        ease: "back.out(1.6)",
      })
        .from(
          titleSplit.chars,
          {
            opacity: 0,
            y: 35,
            rotateZ: 3,
            stagger: 0.035,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          taglineSplit.words,
          {
            opacity: 0,
            y: 16,
            stagger: 0.04,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-lede-elem",
          {
            opacity: 0,
            y: 14,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".hero-cta-btn",
          {
            opacity: 0,
            y: 12,
            stagger: 0.1,
            duration: 0.5,
            ease: "back.out(1.6)",
          },
          "-=0.3"
        );

      return () => {
        titleSplit.revert();
        taglineSplit.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative overflow-hidden bg-[#0b1220] text-[#f7f5f2] pt-[calc(72px+48px)] pb-20 min-h-[min(92vh,880px)] flex items-center scroll-mt-[72px]"
      aria-labelledby="hero-title"
    >
      <AmbientGlow color="warm" />
      <SectionGridOverlay />

      <div className="max-w-[1080px] mx-auto px-5 md:px-8 w-full grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-12 items-center relative z-10">
        <div className="grid gap-6">
          <div className="hero-badge-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/25 shadow-[0_0_12px_rgba(201,162,39,0.1)] w-fit">
            <SparklesIcon size={14} className="text-[#c9a227] animate-pulse" />
            <p className="text-xs uppercase tracking-[0.12em] font-semibold text-[#c9a227]">
              MBA Candidate · Grappling Athlete
            </p>
          </div>

          <h1
            id="hero-title"
            ref={titleRef}
            className="font-display text-[clamp(2.25rem,7vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-[#f7f5f2]"
          >
            {site.name}
          </h1>

          <p
            ref={taglineRef}
            className="text-[clamp(1.15rem,3vw,1.45rem)] font-medium leading-snug text-[#f7f5f2] max-w-[28ch]"
          >
            {site.tagline}
          </p>

          <p className="hero-lede-elem text-[1.05rem] leading-relaxed text-[#a8b4c4] max-w-[52ch]">
            {site.heroText}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <div className="hero-cta-btn">
              <ButtonLink
                href="#achievements"
                variant="primary-warm"
                icon={ArrowRightIcon}
                iconPosition="right"
              >
                View achievements
              </ButtonLink>
            </div>
            <div className="hero-cta-btn">
              <ButtonLink
                href="#contact"
                variant="ghost-light"
                icon={SendIcon}
                iconPosition="right"
              >
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
    </section>
  );
}
