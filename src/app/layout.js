import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "Adil Khan | MBA Student & Grappling Medallist",
  description:
    "Portfolio for Adil Khan, an MBA student and national-level grappling medallist.",
  openGraph: {
    title: "Adil Khan | MBA Student & Grappling Medallist",
    description:
      "Portfolio for Adil Khan, an MBA student and national-level grappling medallist.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0B1220",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
