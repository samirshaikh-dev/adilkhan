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
import {
  ArrowRightIcon,
  SendIcon,
  SparklesIcon,
  MapPinIcon,
  GraduationCapIcon,
  MedalIcon,
} from "../icons";
import { AmbientGlow, SectionGridOverlay } from "../graphics/BackgroundGraphics";

export default function HeroSection() {
  const heroMedia = site.media?.hero;
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const nameRef = useRef(null);

  useGSAP(
    () => {
      if (!headlineRef.current) return;

      const headlineSplit = new SplitType(headlineRef.current, {
        types: "words,chars",
        tagName: "span",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow-elem", {
        opacity: 0,
        y: -12,
        duration: 0.55,
        ease: "back.out(1.5)",
      })
        .from(
          ".hero-name-elem",
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(
          headlineSplit.words,
          {
            opacity: 0,
            y: 24,
            stagger: 0.04,
            duration: 0.65,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .from(
          ".hero-lede-elem",
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(
          ".hero-pills-elem",
          {
            opacity: 0,
            y: 10,
            stagger: 0.08,
            duration: 0.45,
          },
          "-=0.2"
        )
        .from(
          ".hero-cta-btn",
          {
            opacity: 0,
            y: 10,
            stagger: 0.1,
            duration: 0.45,
            ease: "back.out(1.5)",
          },
          "-=0.2"
        );

      return () => {
        headlineSplit.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative overflow-hidden bg-[#0b1220] text-[#f7f5f2] pt-[calc(72px+40px)] pb-16 md:pb-24 min-h-[min(92vh,880px)] flex items-center scroll-mt-[72px]"
      aria-labelledby="hero-title"
    >
      <AmbientGlow color="warm" />
      <SectionGridOverlay />

      <div className="max-w-[1080px] mx-auto px-5 md:px-8 w-full grid grid-cols-1 md:grid-cols-[1.12fr_0.88fr] gap-10 md:gap-14 items-center relative z-10">
        <div className="grid gap-5">
          {/* Eyebrow Chip */}
          <div className="hero-eyebrow-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/25 shadow-[0_0_12px_rgba(201,162,39,0.08)] w-fit">
            <SparklesIcon size={13} className="text-[#c9a227]" />
            <p className="text-xs uppercase tracking-[0.14em] font-semibold text-[#c9a227]">
              MBA Candidate · Grappling Athlete
            </p>
          </div>

          {/* Name & Headline */}
          <div className="grid gap-2">
            <p
              ref={nameRef}
              className="hero-name-elem text-base md:text-lg font-medium text-[#c9a227] tracking-wide"
            >
              {site.name}
            </p>
            <h1
              id="hero-title"
              ref={headlineRef}
              className="font-display text-[clamp(2.15rem,5.5vw,3.35rem)] font-semibold leading-[1.1] tracking-tight text-[#f7f5f2]"
            >
              Discipline in sport. Strategy in business.
            </h1>
          </div>

          {/* Supporting Bio */}
          <p className="hero-lede-elem text-[1.05rem] leading-relaxed text-[#a8b4c4] max-w-[54ch]">
            MBA student and national-level grappling medallist, developing the
            leadership, strategic thinking, and decisive composure to make a
            meaningful impact in competitive business environments.
          </p>

          {/* Key Quick Facts / Credentials Strip */}
          <div className="hero-pills-elem flex flex-wrap items-center gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-[#f7f5f2] bg-white/6 border border-white/10">
              <GraduationCapIcon size={14} className="text-[#4778a8]" />
              MBA (2024–Present)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-[#f7f5f2] bg-white/6 border border-white/10">
              <MedalIcon size={14} className="text-[#c9a227]" />
              National Silver · 71 kg GI
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-[#a8b4c4] bg-white/6 border border-white/10">
              <MapPinIcon size={13} className="text-[#a8b4c4]" />
              {site.location.city}, {site.location.region}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3.5 pt-3">
            <div className="hero-cta-btn">
              <ButtonLink
                href="#achievements"
                variant="primary-warm"
                icon={ArrowRightIcon}
                iconPosition="right"
              >
                Explore achievements
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

        {/* Right Column: Executive Achievement Card */}
        <motion.div
          className="flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {hasMedia(heroMedia) ? (
            <Image
              src={heroMedia.src}
              alt={heroMedia.alt}
              width={heroMedia.width}
              height={heroMedia.height}
              className="w-full max-w-[420px] aspect-[4/5] rounded-xl object-cover shadow-2xl"
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
