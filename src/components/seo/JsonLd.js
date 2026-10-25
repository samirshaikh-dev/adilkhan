import { site } from "../../data/site";
import { LOCATION, SEO, SITE_URL } from "../../data/seo";

export default function JsonLd() {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const pageId = `${SITE_URL}/#webpage`;

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
    jobTitle: "MBA Candidate",
    address: postalAddress,
    homeLocation: {
      "@type": "Place",
      name: LOCATION.fullLabel,
      address: postalAddress,
    },
    knowsAbout: [
      "Business Administration",
      "Master of Business Administration",
      "Bachelor of Business Administration",
      "Grappling",
      "Cricket",
      "Strength Training",
      "Preparation",
      "Composure Under Pressure",
    ],
    award: {
      "@type": "Award",
      name: "Silver medal, national-level grappling",
    },
  };

  if (site.contact?.phone) {
    person.telephone = site.contact.phone;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: `${site.name} | MBA Candidate & National-Level Athlete`,
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
