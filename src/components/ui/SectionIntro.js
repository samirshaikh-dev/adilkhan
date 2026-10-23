export default function SectionIntro({
  eyebrow,
  title,
  titleId,
  description,
  wide = false,
}) {
  return (
    <div className={`section-intro ${wide ? "wide" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
