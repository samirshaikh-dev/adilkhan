"use client";

import React from "react";

/**
 * Base Icon wrapper for uniform sizing, stroke, and accessibility.
 */
function createIcon(displayName, renderPaths) {
  const IconComponent = ({
    size = 20,
    color = "currentColor",
    strokeWidth = 2,
    className = "",
    ...props
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`inline-block shrink-0 align-middle transition-transform duration-200 ${className}`.trim()}
        aria-hidden="true"
        {...props}
      >
        {renderPaths()}
      </svg>
    );
  };

  IconComponent.displayName = displayName;
  return IconComponent;
}

// ---------------------------------------------------------
// Navigation, UI & Action Icons
// ---------------------------------------------------------

export const MenuIcon = createIcon("MenuIcon", () => (
  <>
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </>
));

export const CloseIcon = createIcon("CloseIcon", () => (
  <>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </>
));

export const ArrowRightIcon = createIcon("ArrowRightIcon", () => (
  <>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </>
));

export const ArrowDownIcon = createIcon("ArrowDownIcon", () => (
  <>
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </>
));

export const ArrowUpIcon = createIcon("ArrowUpIcon", () => (
  <>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </>
));

export const ArrowUpRightIcon = createIcon("ArrowUpRightIcon", () => (
  <>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </>
));

export const ChevronRightIcon = createIcon("ChevronRightIcon", () => (
  <polyline points="9 18 15 12 9 6" />
));

export const CheckIcon = createIcon("CheckIcon", () => (
  <polyline points="20 6 9 17 4 12" />
));

export const ExternalLinkIcon = createIcon("ExternalLinkIcon", () => (
  <>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </>
));

export const CopyIcon = createIcon("CopyIcon", () => (
  <>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </>
));

export const SparklesIcon = createIcon("SparklesIcon", () => (
  <>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    <path d="M18 4v4" />
    <path d="M20 6h-4" />
  </>
));

// ---------------------------------------------------------
// Martial Arts, Grappling & Athletics Icons
// ---------------------------------------------------------

export const MedalIcon = createIcon("MedalIcon", () => (
  <>
    <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
    <path d="M11 12 5.12 2.2" />
    <path d="m13 12 5.88-9.8" />
    <circle cx="12" cy="17" r="5" />
    <path d="m12 15 1 2-2-1 2-1-1 2" strokeWidth={1.5} />
  </>
));

export const TrophyIcon = createIcon("TrophyIcon", () => (
  <>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </>
));

export const ShieldCheckIcon = createIcon("ShieldCheckIcon", () => (
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </>
));

export const MartialArtsIcon = createIcon("MartialArtsIcon", () => (
  <>
    {/* Crossed athletic belt knot / grappling grip symbol */}
    <path d="M4 8h16" />
    <path d="M4 16h16" />
    <circle cx="12" cy="12" r="3" />
    <path d="m9 12-4 6" />
    <path d="m15 12 4 6" />
    <path d="M9 12 5 6" />
    <path d="m15 12 4-6" />
  </>
));

export const DumbbellIcon = createIcon("DumbbellIcon", () => (
  <>
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1a2.83 2.83 0 0 0 0-4l-1-1-4 4 1 1a2.83 2.83 0 0 0 4 0l1 1Z" />
    <path d="m3 3 1 1a2.83 2.83 0 0 0 4 0l1 1-4 4-1-1a2.83 2.83 0 0 0 0-4L3 3Z" />
    <path d="m18 11 2-2" />
    <path d="m13 16 2-2" />
    <path d="m8 7 2-2" />
    <path d="m3 12 2-2" />
  </>
));

export const ActivityIcon = createIcon("ActivityIcon", () => (
  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
));

export const FlameIcon = createIcon("FlameIcon", () => (
  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
));

export const CricketIcon = createIcon("CricketIcon", () => (
  <>
    {/* Cricket bat & ball minimalist outline */}
    <path d="M6 3 3 6l9 9 4-1-1-4L6 3Z" />
    <path d="M14 13l6 6" />
    <circle cx="18" cy="7" r="3" />
    <path d="M16 6a2 2 0 0 1 3 2" />
  </>
));

// ---------------------------------------------------------
// Academic, Business & Strategy Icons
// ---------------------------------------------------------

export const GraduationCapIcon = createIcon("GraduationCapIcon", () => (
  <>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </>
));

export const BriefcaseIcon = createIcon("BriefcaseIcon", () => (
  <>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </>
));

export const BookOpenIcon = createIcon("BookOpenIcon", () => (
  <>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </>
));

export const TargetIcon = createIcon("TargetIcon", () => (
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </>
));

export const CompassIcon = createIcon("CompassIcon", () => (
  <>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </>
));

export const TrendingUpIcon = createIcon("TrendingUpIcon", () => (
  <>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </>
));

export const UsersGroupIcon = createIcon("UsersGroupIcon", () => (
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>
));

export const CalendarIcon = createIcon("CalendarIcon", () => (
  <>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </>
));

export const MapPinIcon = createIcon("MapPinIcon", () => (
  <>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </>
));

export const AwardIcon = createIcon("AwardIcon", () => (
  <>
    <circle cx="12" cy="8" r="6" />
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.2 0l-3.58 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
  </>
));

export const ScaleIcon = createIcon("ScaleIcon", () => (
  <>
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </>
));

// ---------------------------------------------------------
// Contact & Communication Icons
// ---------------------------------------------------------

export const MailIcon = createIcon("MailIcon", () => (
  <>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </>
));

export const LinkedinIcon = createIcon("LinkedinIcon", () => (
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </>
));

export const InstagramIcon = createIcon("InstagramIcon", () => (
  <>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </>
));

export const SendIcon = createIcon("SendIcon", () => (
  <>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </>
));
