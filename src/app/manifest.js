import { SEO } from "../data/seo";

export default function manifest() {
  return {
    id: "/",
    name: "Adil Khan | MBA Candidate & National-Level Athlete",
    short_name: "Adil Khan",
    description: SEO.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui"],
    background_color: "#F7F8F2",
    theme_color: "#F7F8F2",
    lang: "en-IN",
    dir: "ltr",
    orientation: "any",
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
    shortcuts: [
      {
        name: "Contact Adil Khan",
        short_name: "Contact",
        description: "Call or connect with Adil Khan in Vapi, Gujarat.",
        url: "/#contact",
      },
      {
        name: "Achievements",
        short_name: "Achievements",
        description:
          "View Adil Khan's national-level grappling achievement.",
        url: "/#achievements",
      },
    ],
  };
}
