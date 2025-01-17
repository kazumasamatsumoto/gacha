export function RegularTaskIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="w-10 h-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 0L25 5L20 10L15 5L20 0Z" className="fill-yellow-500" />
      <path d="M30 10L35 15L30 20L25 15L30 10Z" className="fill-yellow-600" />
      <path d="M10 10L15 15L10 20L5 15L10 10Z" className="fill-yellow-600" />
      <path d="M20 20L25 25L20 30L15 25L20 20Z" className="fill-yellow-500" />
    </svg>
  );
}

export function PeriodicTaskIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="w-10 h-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 0L40 20L20 40L0 20L20 0Z" className="fill-yellow-600" />
      <path d="M20 10L30 20L20 30L10 20L20 10Z" className="fill-yellow-500" />
      <circle cx="20" cy="20" r="5" className="fill-yellow-400" />
    </svg>
  );
}
