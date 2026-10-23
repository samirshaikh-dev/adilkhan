"use client";

export default function SectionIntro({
  eyebrow,
  title,
  titleId,
  description,
  wide = false,
}) {
  return (
    <div className={`grid gap-3 ${wide ? "max-w-none" : "max-w-[65ch]"}`}>
      {eyebrow ? (
        <p className="text-[13px] tracking-[0.12em] uppercase font-semibold text-[#c9a227]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="font-display text-[clamp(1.75rem,4.5vw,2.35rem)] font-semibold leading-[1.15] tracking-tight text-inherit"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base text-inherit/80 leading-relaxed max-w-[65ch]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
