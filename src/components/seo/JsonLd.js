import { site } from "../../data/site";
import { LOCATION, SEO, SITE_URL } from "../../data/seo";

export default function JsonLd() {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const pageId = `${SITE_URL}/#webpage`;
  const placeId = `${SITE_URL}/#vapi`;
  const faqId = `${SITE_URL}/#faq`;

  const postalAddress = {
    "@type": "PostalAddress",
    addressLocality: LOCATION.city,
    addressRegion: LOCATION.region,
    postalCode: LOCATION.postalCode,
    addressCountry: LOCATION.countryCode,
  };

  const areaServed = [
    { "@type": "City", name: LOCATION.city },
    { "@type": "AdministrativeArea", name: LOCATION.region },
    { "@type": "Country", name: LOCATION.country },
  ];

  const place = {
    "@type": "Place",
    "@id": placeId,
    name: LOCATION.fullLabel,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: LOCATION.latitude,
      longitude: LOCATION.longitude,
    },
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
    homeLocation: { "@id": placeId },
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
      description:
        "A silver medal won at national-level grappling competition.",
    },
  };

  const contactPhone = site.contact?.phoneHref ?? site.contact?.phone;

  if (contactPhone) {
    person.telephone = contactPhone;
    person.contactPoint = {
      "@type": "ContactPoint",
      telephone: contactPhone,
      contactType: "professional inquiries",
      areaServed,
    };
  }

  const faq = {
    "@type": "FAQPage",
    "@id": faqId,
    url: `${SITE_URL}/#contact`,
    isPartOf: { "@id": pageId },
    inLanguage: "en-IN",
    mainEntity: (site.faq ?? []).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SEO.title,
        description: SEO.description,
        inLanguage: "en-IN",
        publisher: { "@id": personId },
        about: { "@id": personId },
      },
      place,
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
        hasPart: { "@id": faqId },
        inLanguage: "en-IN",
      },
      faq,
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
