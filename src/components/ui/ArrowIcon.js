export default function ArrowIcon({
  direction = "right",
  className = "btn__arrow",
}) {
  const path =
    direction === "up-right"
      ? "M5 19 19 5M8 5h11v11"
      : "M4 12h16m-6-6 6 6-6 6";

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} />
    </svg>
  );
}
