import "./globals.css";

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
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
