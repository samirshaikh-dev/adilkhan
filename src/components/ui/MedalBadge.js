export default function MedalBadge({ label = "Silver medal" }) {
  return (
    <span className="medal-badge">
      <span className="medal-badge__dot" aria-hidden="true" />
      {label}
    </span>
  );
}
