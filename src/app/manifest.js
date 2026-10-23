import { SEO } from "../data/seo";

export default function manifest() {
  return {
    name: "Adil Khan | MBA Student & Grappling Medallist",
    short_name: "Adil Khan",
    description: SEO.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7f5f2",
    theme_color: "#0b1220",
    lang: "en-IN",
    dir: "ltr",
    categories: ["portfolio", "education", "sports"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
