import { site } from "../../data/site";
import { LOCATION, SEO, SITE_URL } from "../../data/seo";

export function GET() {
  const body = `# ${site.name}

> ${SEO.description}

${site.name} is an MBA student and national-level grappling silver medallist based in ${LOCATION.fullLabel}. This is his official single-page professional portfolio covering his academic background, verified competition result, interests, and contact details.

## Key facts

- Name: ${site.name}
- Location: ${LOCATION.fullLabel}
- Current study: MBA (in progress)
- Achievement: ${site.achievements.result}, ${site.achievements.title}
- Focus areas: ${site.interests.join(", ")}
- Contact: ${site.contact.email}

## Page sections

- [About](${SITE_URL}/#about)
- [Education](${SITE_URL}/#education)
- [Achievements](${SITE_URL}/#achievements)
- [Interests](${SITE_URL}/#interests)
- [Contact](${SITE_URL}/#contact)

## Canonical profile

${SITE_URL}/
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
