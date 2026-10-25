import { site } from "../../data/site";
import { LOCATION, SEO, SITE_URL } from "../../data/seo";

export function GET() {
  const education = (site.education ?? [])
    .map((item) => `- ${item.degree} — ${item.degreeFullName} (${item.status})`)
    .join("\n");

  const profile = [
    site.profile?.lead,
    site.profile?.body,
    `"${site.profile?.quote}"`,
  ]
    .filter(Boolean)
    .join("\n\n");

  const strengths = (site.profile?.strengths ?? [])
    .map((item) => `- ${item.title}: ${item.body}`)
    .join("\n");

  const interests = (site.interests?.items ?? [])
    .map((item) => `- ${item.title}: ${item.description}`)
    .join("\n");

  const body = `# ${site.name} — llms-full.txt

> ${SEO.description}

Canonical URL: ${SITE_URL}/
Sitemap: ${SITE_URL}/sitemap.xml
Robots: ${SITE_URL}/robots.txt

## Profile
- Full Name: ${site.name}
- Location: ${LOCATION.fullLabel}
- Role: MBA candidate and national-level athlete
- Education: BBA completed; MBA in progress
- Sport: Grappling
- Phone: ${site.contact.phone}

## Profile Summary
${profile}

## Education
${education}

## Achievement
- Result: ${site.achievements.result}
- Level: ${site.achievements.context}

## Transferable Strengths
${strengths}

## Interests
${interests}

## On-Page Sections
- Hero: ${SITE_URL}/#hero
- Achievements: ${SITE_URL}/#achievements
- Education: ${SITE_URL}/#education
- Profile: ${SITE_URL}/#profile
- Interests: ${SITE_URL}/#interests
- Contact: ${SITE_URL}/#contact

## SEO Metadata
- Title: ${SEO.title}
- Description: ${SEO.description}
- OG Title: ${SEO.ogTitle}
- OG Description: ${SEO.ogDescription}
- Locale: ${SEO.locale}
- Keywords (${SEO.keywords.length}): ${SEO.keywords.join(", ")}

## Structured Data
- Schema: JSON-LD Person + WebSite + ProfilePage on ${SITE_URL}/

## Crawling & Indexing Guidance
- Allow all user agents to crawl public assets.
- Prioritize indexing of canonical page ${SITE_URL}/ with English (India) locale.
- No private routes exist; the sitemap points to the canonical homepage.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
