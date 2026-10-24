import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/layout/SmoothScroll";
import JsonLd from "../components/seo/JsonLd";
import { site } from "../data/site";
import { LOCATION, SEO, SITE_URL } from "../data/seo";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-display",
  display: "swap",
});

const verification = {};

if (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) {
  verification.google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
}

if (process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION) {
  verification.other = {
    "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
  };
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.title,
    template: `%s | ${site.name}`,
  },
  description: SEO.description,
  keywords: SEO.keywords,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  category: "personal portfolio",
  referrer: "origin-when-cross-origin",
  ...(Object.keys(verification).length > 0 ? { verification } : {}),
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: SEO.ogTitle,
    description: SEO.ogDescription,
    siteName: site.name,
    locale: SEO.locale,
    firstName: "Adil",
    lastName: "Khan",
    username: "adilkhan",
    images: [
      {
        url: `${SITE_URL}/images/adil-social-preview.jpg`,
        width: 1200,
        height: 630,
        alt: "Adil Khan - MBA student and national grappling silver medallist",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.ogTitle,
    description: SEO.ogDescription,
    images: [`${SITE_URL}/images/adil-social-preview.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: site.name,
    capable: true,
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  other: {
    "geo.region": `IN-${LOCATION.regionCode}`,
    "geo.placename": `${LOCATION.city}, ${LOCATION.region}`,
    "geo.position": `${LOCATION.latitude};${LOCATION.longitude}`,
    ICBM: `${LOCATION.latitude}, ${LOCATION.longitude}`,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B1220" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <body>
        <JsonLd />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
