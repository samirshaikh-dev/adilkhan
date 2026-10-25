import { site } from "../../data/site";

export default function InterestsSection() {
  const { interests } = site;

  return (
    <section
      className="section section--ivory"
      id="interests"
      aria-labelledby="interests-title"
    >
      <div className="container">
        <div className="interests__intro">
          <p className="eyebrow">{interests.eyebrow}</p>
          <h2 className="section-heading" id="interests-title">
            {interests.title}
          </h2>
          <p className="section-intro">{interests.intro}</p>
        </div>

        <ul className="interests__list">
          {interests.items.map((item, index) => (
            <li className="interest" key={item.title}>
              <span className="interest__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="interest__title">{item.title}</h3>
              <p className="interest__description">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
