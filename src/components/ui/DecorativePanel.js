export default function DecorativePanel({ label = "Discipline · Strategy · Mat" }) {
  return (
    <div className="decorative-panel" aria-hidden="true">
      <div className="decorative-panel__accent">{label}</div>
    </div>
  );
}
