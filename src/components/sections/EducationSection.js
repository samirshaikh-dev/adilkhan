import { site } from "../../data/site";

export default function EducationSection() {
  return (
    <section
      className="section section--ivory"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="container education__grid">
        <div className="section__header">
          <p className="eyebrow">Education</p>
          <h2 className="section-heading" id="education-title">
            A business education, in progress.
          </h2>
          <p className="section-intro">
            A BBA foundation, followed by an MBA that is currently underway.
            Both sit alongside a national-level sporting career.
          </p>
        </div>

        <ol className="timeline">
          {site.education.map((item) => (
            <li className="timeline__item" key={item.degree}>
              <div className="timeline__topline">
                <h3 className="timeline__degree">{item.degree}</h3>
                <div className="timeline__status-wrap">
                  <span
                    className={`status${item.current ? " status--current" : ""}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="timeline__details">
                <p className="timeline__meta">{item.degreeFullName}</p>
                <p className="timeline__note">{item.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
