import { site } from "../../data/site";
import {
  LOCATION,
  MAP_URL,
  SEO,
  SITE_LAST_UPDATED,
  SITE_URL,
} from "../../data/seo";

export default function JsonLd() {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const pageId = `${SITE_URL}/#webpage`;
  const placeId = `${SITE_URL}/#vapi`;
  const faqId = `${SITE_URL}/#faq`;
  const occupationId = `${SITE_URL}/#mba-candidate`;
  const credentialId = `${SITE_URL}/#bba-credential`;
  const awardId = `${SITE_URL}/#silver-grappling`;

  const postalAddress = {
    "@type": "PostalAddress",
    addressLocality: LOCATION.city,
    addressRegion: LOCATION.region,
    postalCode: LOCATION.postalCode,
    addressCountry: LOCATION.countryCode,
  };

  const containedInPlace = [
    { "@type": "AdministrativeArea", name: `${LOCATION.district} district` },
    { "@type": "AdministrativeArea", name: LOCATION.region },
    { "@type": "Country", name: LOCATION.country },
  ];

  const place = {
    "@type": ["Place", "City"],
    "@id": placeId,
    name: LOCATION.fullLabel,
    alternateName: LOCATION.city,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: LOCATION.latitude,
      longitude: LOCATION.longitude,
    },
    containedInPlace,
    hasMap: MAP_URL,
  };

  const areaServed = [
    { "@id": placeId },
    { "@type": "AdministrativeArea", name: LOCATION.region },
    { "@type": "Country", name: LOCATION.country },
  ];

  const occupation = {
    "@type": "Occupation",
    "@id": occupationId,
    name: "MBA Candidate",
    description:
      "Pursuing a Master of Business Administration while competing in grappling at national level.",
    occupationLocation: { "@id": placeId },
    skills: [
      "Business Administration",
      "Preparation",
      "Composure Under Pressure",
    ],
  };

  const credential = {
    "@type": "EducationalOccupationalCredential",
    "@id": credentialId,
    name: "Bachelor of Business Administration",
    credentialCategory: "degree",
    competencyRequired: ["Business Administration"],
  };

  const award = {
    "@type": "Award",
    "@id": awardId,
    name: "Silver medal, national-level grappling",
    description:
      "A silver medal won at national-level grappling competition.",
    recipient: { "@id": personId },
  };

  const person = {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    givenName: "Adil",
    familyName: "Khan",
    url: SITE_URL,
    mainEntityOfPage: { "@id": pageId },
    description: SEO.answer,
    jobTitle: "MBA Candidate",
    address: postalAddress,
    homeLocation: { "@id": placeId },
    hasOccupation: { "@id": occupationId },
    hasCredential: { "@id": credentialId },
    knowsAbout: [
      "Business Administration",
      "Master of Business Administration",
      "Bachelor of Business Administration",
      "Grappling",
      "National-Level Sport",
      "Cricket",
      "Strength Training",
      "Preparation",
      "Composure Under Pressure",
      "Progress Through Repetition",
    ],
    award: { "@id": awardId },
  };

  const contactPhone = site.contact?.phoneHref ?? site.contact?.phone;

  if (contactPhone) {
    person.telephone = contactPhone;
    person.contactPoint = {
      "@type": "ContactPoint",
      telephone: contactPhone,
      contactType: "professional inquiries",
      areaServed,
      url: `${SITE_URL}/#contact`,
    };
  }

  const faq = {
    "@type": "FAQPage",
    "@id": faqId,
    url: `${SITE_URL}/#contact`,
    isPartOf: { "@id": pageId },
    inLanguage: "en-IN",
    dateModified: SITE_LAST_UPDATED,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#contact .answer__question", "#contact .answer__text"],
    },
    mainEntity: (site.faq ?? []).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
        url: `${SITE_URL}/#contact`,
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
        alternateName: ["Adil Khan Portfolio", "Adil Khan Vapi"],
        description: SEO.description,
        inLanguage: "en-IN",
        publisher: { "@id": personId },
        about: { "@id": personId },
        copyrightHolder: { "@id": personId },
        copyrightYear: 2026,
        isFamilyFriendly: true,
        keywords: SEO.keywords.join(", "),
      },
      place,
      occupation,
      credential,
      award,
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
        keywords: SEO.keywords.join(", "),
        datePublished: SITE_LAST_UPDATED,
        dateModified: SITE_LAST_UPDATED,
        isAccessibleForFree: true,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            "#hero-title",
            "#hero .hero__intro",
            "#contact .answer__text",
          ],
        },
        audience: {
          "@type": "Audience",
          audienceType:
            "Recruiters, business schools, sports organisations, and collaborators",
        },
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
