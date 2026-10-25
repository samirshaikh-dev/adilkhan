import { site } from "../../data/site";
import ArrowIcon from "../ui/ArrowIcon";

export default function ContactSection() {
  const { contact, location } = site;

  return (
    <section
      className="section section--paper"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact__layout">
        <div className="profile__intro">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="section-heading" id="contact-title">
            {contact.title}
          </h2>
          <p className="section-intro section-intro--large">
            {contact.invitation}
          </p>
          <p className="contact__note">
            No form, no gatekeeping. A direct conversation is the best place to
            start.
          </p>
        </div>

        <div className="contact__card">
          <p className="hero__aside-label">Direct line</p>
          <a
            className="contact__phone"
            href={`tel:${contact.phoneHref}`}
            aria-label={`Call Adil Khan on ${contact.phone}`}
          >
            {contact.phone}
            <ArrowIcon direction="up-right" className="contact__phone-arrow" />
          </a>

          <div className="contact__meta">
            <p>
              <strong>Based in</strong>
              <br />
              {location.city}, {location.region}, {location.country}
            </p>
            <p>
              <strong>Open to</strong>
              <br />
              Conversations about business, sport, and future opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
