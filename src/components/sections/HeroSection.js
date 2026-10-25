import { site } from "../../data/site";
import ArrowIcon from "../ui/ArrowIcon";

export default function HeroSection() {
  const { hero } = site;

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1 className="hero__title" id="hero-title">
            {hero.title.map((line, index) => (
              <span
                key={line}
                className={`hero__title-line${
                  index === 1 ? " hero__title-line--accent" : ""
                }`}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__intro">{hero.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowIcon />
            </a>
            <a className="btn btn--secondary" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <aside className="hero__aside" aria-label="At a glance">
          <p className="hero__aside-label">At a glance</p>

          <dl className="facts">
            {hero.facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <dt className="fact__label">{fact.label}</dt>
                <dd className="fact__value">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <p className="hero__aside-note">
            Open to conversations about business, sport, and what comes next.
          </p>
        </aside>
      </div>
    </section>
  );
}
