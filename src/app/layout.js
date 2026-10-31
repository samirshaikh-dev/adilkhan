import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/seo/JsonLd";
import { site } from "../data/site";
import { LOCATION, SEO, SITE_URL } from "../data/seo";

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const displayFont = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-manrope",
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
    types: {
      "application/rss+xml": "/feed.xml",
      "text/plain": ["/llms.txt", "/llms-full.txt"],
    },
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: SEO.ogTitle,
    description: SEO.ogDescription,
    siteName: site.name,
    locale: SEO.locale,
    countryName: LOCATION.country,
    firstName: "Adil",
    lastName: "Khan",
    ...(site.contact?.phoneHref
      ? { phoneNumbers: [site.contact.phoneHref] }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.ogTitle,
    description: SEO.ogDescription,
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
    statusBarStyle: "default",
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
    "geo.country": LOCATION.countryCode,
    ICBM: `${LOCATION.latitude}, ${LOCATION.longitude}`,
    "DC.language": "en-IN",
    "DC.coverage": LOCATION.fullLabel,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F8F2",
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
        {children}
      </body>
    </html>
  );
}
