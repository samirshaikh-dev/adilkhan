import { site } from "../../data/site";
import { LOCATION, SEO, SITE_URL } from "../../data/seo";

export function GET() {
  const education = (site.education ?? [])
    .map(
      (e) =>
        `- ${e.degree} - ${e.institution} (${e.period})${e.details ? ` | ${e.details}` : ""}`
    )
    .join("\n");

  const meta = (site.achievements?.meta ?? []).map((m) => `- ${m}`).join("\n");

  const about = (site.about ?? []).map((p) => `> ${p}`).join("\n\n");

  const body = `# ${site.name} - llms-full.txt

> ${SEO.description}

Canonical URL: ${SITE_URL}/
Sitemap: ${SITE_URL}/sitemap.xml
Robots: ${SITE_URL}/robots.txt

## Profile
- Full Name: ${site.name}
- Location: ${LOCATION.fullLabel} (${LOCATION.latitude}, ${LOCATION.longitude})
- Occupation: MBA Student & National-Level Grappling Medallist
- Email: ${site.contact.email}
- Phone: ${site.contact.phone || "Available upon request"}
- LinkedIn: ${site.contact.linkedin}
- Instagram: ${site.contact.instagram}
- Primary Keyword Focus: Adil Khan Vapi Gujarat 396191, MBA student Vapi Gujarat 396191, grappling medallist Vapi Gujarat 396191

## Professional Summary
${about}

## Education
${education}

## Achievements (Verified)
- Title: ${site.achievements?.title || "N/A"}
- Result: ${site.achievements?.result || "N/A"}
- Details:
${meta}
- Proof: ${site.achievements?.proof || "N/A"}

## Interests & Strengths
${(site.interests ?? []).map((i) => (typeof i === "string" ? `- ${i}` : `- ${i.title}: ${i.description}`)).join("\n")}

## On-Page Sections
- Hero: ${SITE_URL}/#hero
- About: ${SITE_URL}/#about
- Education: ${SITE_URL}/#education
- Achievements: ${SITE_URL}/#achievements
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
- Geo Tags: geo.region=IN-${LOCATION.regionCode}, geo.placename=${LOCATION.city}, ${LOCATION.region}, geo.position=${LOCATION.latitude};${LOCATION.longitude}, ICBM=${LOCATION.latitude}, ${LOCATION.longitude}

## Crawling & Indexing Guidance
- Allow all user agents to crawl public assets.
- Prioritize indexing of canonical page ${SITE_URL}/ with English (India) locale.
- Strong local relevance for queries combining "Adil Khan", "Vapi", "Gujarat", "396191", "MBA", "grappling", "medallist", "national championship".
- No private routes exist; sitemap points to canonical homepage.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
