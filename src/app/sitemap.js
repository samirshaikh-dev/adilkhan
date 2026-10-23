import { SITE_URL } from "../data/seo";

const LAST_UPDATED = "2026-10-23T00:00:00.000Z";

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
