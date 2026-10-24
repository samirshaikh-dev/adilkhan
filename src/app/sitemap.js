import { SITE_URL } from "../data/seo";

const LAST_UPDATED = "2026-10-24T00:00:00.000Z";

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
