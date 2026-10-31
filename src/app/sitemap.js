import { SITE_LAST_UPDATED, SITE_URL } from "../data/seo";

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
