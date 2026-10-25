import { site } from "../../data/site";
import { LOCATION, SEO, SITE_URL } from "../../data/seo";

export function GET() {
  const body = `# ${site.name}

> ${SEO.description}

${site.name} is an MBA candidate, BBA graduate, and national-level grappling silver medallist based in ${LOCATION.fullLabel}. This is his single-page professional portfolio.

## Key facts
- Name: ${site.name}
- Location: ${LOCATION.fullLabel}
- Role: MBA candidate and national-level athlete
- Education: BBA completed; MBA in progress
- Achievement: ${site.achievements.result} at national-level grappling
- Interests: ${(site.interests?.items ?? []).map((item) => item.title).join(", ")}
- Phone: ${site.contact.phone}

## Page sections
- Achievements: ${SITE_URL}/#achievements
- Education: ${SITE_URL}/#education
- Profile: ${SITE_URL}/#profile
- Interests: ${SITE_URL}/#interests
- Contact: ${SITE_URL}/#contact

## Canonical profile
- Website: ${SITE_URL}/
- Sitemap: ${SITE_URL}/sitemap.xml
- Robots: ${SITE_URL}/robots.txt

## Keywords
${SEO.keywords.map((keyword) => `- ${keyword}`).join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
