import { site } from "../../data/site";
import { LOCATION, SEO, SITE_URL } from "../../data/seo";

export function GET() {
  const body = `# ${site.name}

> ${SEO.description}

${site.name} is an MBA student and national-level grappling silver medallist based in ${LOCATION.fullLabel}. This is his official single-page professional portfolio covering his academic background, verified competition result, interests, and contact details.

## Key facts
- Name: ${site.name}
- Location: ${LOCATION.fullLabel}
- Role: MBA Student & Grappling Athlete
- Primary achievement: ${site.achievements.result} - ${site.achievements.title}
- Focus areas: ${site.interests.join(", ")}
- Contact: ${site.contact.email}
- LinkedIn: ${site.contact.linkedin}
- Instagram: ${site.contact.instagram}

## Page sections
- About: ${SITE_URL}/#about
- Education: ${SITE_URL}/#education
- Achievements: ${SITE_URL}/#achievements
- Interests: ${SITE_URL}/#interests
- Contact: ${SITE_URL}/#contact

## Canonical profile
- Website: ${SITE_URL}/
- Sitemap: ${SITE_URL}/sitemap.xml
- Robots: ${SITE_URL}/robots.txt

## Keywords
${SEO.keywords.map((k) => `- ${k}`).join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
