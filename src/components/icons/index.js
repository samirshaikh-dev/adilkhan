"use client";

import React from "react";

// Official Lucide React Icons
import {
  Menu as LucideMenu,
  X as LucideClose,
  ArrowRight as LucideArrowRight,
  ArrowDown as LucideArrowDown,
  ArrowUp as LucideArrowUp,
  ArrowUpRight as LucideArrowUpRight,
  ChevronRight as LucideChevronRight,
  Check as LucideCheck,
  ExternalLink as LucideExternalLink,
  Copy as LucideCopy,
  Sparkles as LucideSparkles,
  Medal as LucideMedal,
  Trophy as LucideTrophy,
  ShieldCheck as LucideShieldCheck,
  Dumbbell as LucideDumbbell,
  Activity as LucideActivity,
  Flame as LucideFlame,
  GraduationCap as LucideGraduationCap,
  Briefcase as LucideBriefcase,
  BookOpen as LucideBookOpen,
  Target as LucideTarget,
  Compass as LucideCompass,
  TrendingUp as LucideTrendingUp,
  Users as LucideUsers,
  Calendar as LucideCalendar,
  MapPin as LucideMapPin,
  Award as LucideAward,
  Scale as LucideScale,
  Mail as LucideMail,
  Send as LucideSend,
} from "lucide-react";

// Official React Icons (FontAwesome6, Game Icons, Material Design)
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { GiKimono, GiLaurelCrown } from "react-icons/gi";
import { MdSportsCricket } from "react-icons/md";

function adaptLucide(IconComponent, displayName) {
  const Wrapped = ({
    size = 20,
    className = "",
    strokeWidth = 2,
    ...props
  }) => (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={`inline-block shrink-0 align-middle transition-transform duration-200 ${className}`.trim()}
      {...props}
    />
  );
  Wrapped.displayName = displayName;
  return Wrapped;
}

function adaptReactIcon(IconComponent, displayName) {
  const Wrapped = ({
    size = 20,
    className = "",
    color = "currentColor",
    ...props
  }) => (
    <IconComponent
      size={size}
      color={color}
      className={`inline-block shrink-0 align-middle transition-transform duration-200 ${className}`.trim()}
      {...props}
    />
  );
  Wrapped.displayName = displayName;
  return Wrapped;
}

// ---------------------------------------------------------
// Navigation, UI & Action Icons (Lucide)
// ---------------------------------------------------------

export const MenuIcon = adaptLucide(LucideMenu, "MenuIcon");
export const CloseIcon = adaptLucide(LucideClose, "CloseIcon");
export const ArrowRightIcon = adaptLucide(LucideArrowRight, "ArrowRightIcon");
export const ArrowDownIcon = adaptLucide(LucideArrowDown, "ArrowDownIcon");
export const ArrowUpIcon = adaptLucide(LucideArrowUp, "ArrowUpIcon");
export const ArrowUpRightIcon = adaptLucide(LucideArrowUpRight, "ArrowUpRightIcon");
export const ChevronRightIcon = adaptLucide(LucideChevronRight, "ChevronRightIcon");
export const CheckIcon = adaptLucide(LucideCheck, "CheckIcon");
export const ExternalLinkIcon = adaptLucide(LucideExternalLink, "ExternalLinkIcon");
export const CopyIcon = adaptLucide(LucideCopy, "CopyIcon");
export const SparklesIcon = adaptLucide(LucideSparkles, "SparklesIcon");

// ---------------------------------------------------------
// Martial Arts, Grappling & Athletics Icons (Lucide & React-Icons)
// ---------------------------------------------------------

export const MedalIcon = adaptLucide(LucideMedal, "MedalIcon");
export const TrophyIcon = adaptLucide(LucideTrophy, "TrophyIcon");
export const ShieldCheckIcon = adaptLucide(LucideShieldCheck, "ShieldCheckIcon");
export const DumbbellIcon = adaptLucide(LucideDumbbell, "DumbbellIcon");
export const ActivityIcon = adaptLucide(LucideActivity, "ActivityIcon");
export const FlameIcon = adaptLucide(LucideFlame, "FlameIcon");

// Authentic Gi kimono from React-Icons Gi and Cricket from Md
export const MartialArtsIcon = adaptReactIcon(GiKimono, "MartialArtsIcon");
export const CricketIcon = adaptReactIcon(MdSportsCricket, "CricketIcon");
export const LaurelIcon = adaptReactIcon(GiLaurelCrown, "LaurelIcon");

// ---------------------------------------------------------
// Academic, Business & Strategy Icons (Lucide)
// ---------------------------------------------------------

export const GraduationCapIcon = adaptLucide(LucideGraduationCap, "GraduationCapIcon");
export const BriefcaseIcon = adaptLucide(LucideBriefcase, "BriefcaseIcon");
export const BookOpenIcon = adaptLucide(LucideBookOpen, "BookOpenIcon");
export const TargetIcon = adaptLucide(LucideTarget, "TargetIcon");
export const CompassIcon = adaptLucide(LucideCompass, "CompassIcon");
export const TrendingUpIcon = adaptLucide(LucideTrendingUp, "TrendingUpIcon");
export const UsersGroupIcon = adaptLucide(LucideUsers, "UsersGroupIcon");
export const CalendarIcon = adaptLucide(LucideCalendar, "CalendarIcon");
export const MapPinIcon = adaptLucide(LucideMapPin, "MapPinIcon");
export const AwardIcon = adaptLucide(LucideAward, "AwardIcon");
export const ScaleIcon = adaptLucide(LucideScale, "ScaleIcon");

// ---------------------------------------------------------
// Contact & Communication Icons (Lucide & React-Icons)
// ---------------------------------------------------------

export const MailIcon = adaptLucide(LucideMail, "MailIcon");
export const SendIcon = adaptLucide(LucideSend, "SendIcon");
export const LinkedinIcon = adaptReactIcon(FaLinkedinIn, "LinkedinIcon");
export const InstagramIcon = adaptReactIcon(FaInstagram, "InstagramIcon");
