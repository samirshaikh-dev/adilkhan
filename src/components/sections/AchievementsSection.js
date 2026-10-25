import { site } from "../../data/site";

export default function AchievementsSection() {
  const achievement = site.achievements;
  const resultLines = achievement.result.split(" ");

  return (
    <section
      className="section section--paper"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      <div className="container achievement__grid">
        <div className="achievement__result-wrap">
          <p className="eyebrow">{achievement.eyebrow}</p>

          <p className="achievement__result">
            {resultLines.map((line) => (
              <span className="achievement__result-line" key={line}>
                {line}
              </span>
            ))}
          </p>

          <p className="achievement__context">{achievement.context}</p>
        </div>

        <div className="achievement__copy">
          <h2 className="section-heading" id="achievements-title">
            {achievement.title}
          </h2>
          <p className="section-intro section-intro--large">
            {achievement.description}
          </p>
          <div className="achievement__detail">
            <p>{achievement.detail}</p>
            <p>Result: Silver medal · Sport: Grappling</p>
          </div>
        </div>
      </div>
    </section>
  );
}
