import { site } from "../../data/site";

export default function ProfileSection() {
  const { profile } = site;

  return (
    <section
      className="section section--paper"
      id="profile"
      aria-labelledby="profile-title"
    >
      <div className="container profile__grid">
        <div className="profile__intro">
          <p className="eyebrow">{profile.eyebrow}</p>
          <h2 className="section-heading" id="profile-title">
            {profile.title}
          </h2>
          <p className="profile__lead">{profile.lead}</p>
          <p className="profile__body">{profile.body}</p>
          <blockquote className="profile__quote">
            &ldquo;{profile.quote}&rdquo;
          </blockquote>
        </div>

        <ol className="insights">
          {profile.strengths.map((strength, index) => (
            <li className="insight" key={strength.title}>
              <span className="insight__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="insight__title">{strength.title}</h3>
                <p className="insight__body">{strength.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
