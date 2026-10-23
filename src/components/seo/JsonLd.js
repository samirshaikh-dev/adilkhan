import { site } from "../../data/site";
import { LOCATION, SEO, SITE_URL } from "../../data/seo";

function isPublishedUrl(value) {
  return (
    typeof value === "string" &&
    /^https?:\/\//i.test(value) &&
    !/example\.com/i.test(value)
  );
}

function isPublishedName(value) {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    !/\bsample\b/i.test(value)
  );
}

export default function JsonLd() {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const pageId = `${SITE_URL}/#webpage`;

  const sameAs = [site.contact?.linkedin, site.contact?.instagram].filter(
    isPublishedUrl
  );

  const alumniOf = (site.education ?? [])
    .filter((entry) => isPublishedName(entry.institution))
    .map((entry) => ({
      "@type": "EducationalOrganization",
      name: entry.institution,
      ...(isPublishedUrl(entry.url) ? { url: entry.url } : {}),
    }));

  const postalAddress = {
    "@type": "PostalAddress",
    addressLocality: LOCATION.city,
    addressRegion: LOCATION.region,
    postalCode: LOCATION.postalCode,
    addressCountry: LOCATION.countryCode,
  };

  const person = {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    url: SITE_URL,
    mainEntityOfPage: { "@id": pageId },
    description: SEO.description,
    jobTitle: "MBA Student",
    address: postalAddress,
    homeLocation: {
      "@type": "Place",
      name: LOCATION.fullLabel,
      address: postalAddress,
    },
    knowsAbout: Array.from(
      new Set([
        ...(site.interests ?? []),
        "Business strategy",
        "Leadership",
        "Grappling",
      ])
    ),
  };

  if (sameAs.length > 0) {
    person.sameAs = sameAs;
  }

  if (alumniOf.length > 0) {
    person.alumniOf = alumniOf;
  }

  if (site.achievements?.title) {
    person.award = [
      {
        "@type": "Award",
        name: `${site.achievements.result ?? "Medal"} - ${site.achievements.title}`,
        description: (site.achievements.meta ?? []).join(", "),
        ...(isPublishedUrl(site.achievements.proof)
          ? { url: site.achievements.proof }
          : {}),
      },
    ];
  }

  if (site.media?.hero?.src) {
    person.image = new URL(site.media.hero.src, SITE_URL).toString();
  }

  if (site.contact?.email && !/example\.com/i.test(site.contact.email)) {
    person.email = site.contact.email;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: `${site.name} | MBA Student & Grappling Medallist`,
        description: SEO.description,
        inLanguage: "en-IN",
        publisher: { "@id": personId },
      },
      person,
      {
        "@type": "ProfilePage",
        "@id": pageId,
        url: SITE_URL,
        name: SEO.title,
        description: SEO.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
