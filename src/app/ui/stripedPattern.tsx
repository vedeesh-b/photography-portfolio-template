export default function StripedBox() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#ABA8A2] relative w-full h-13"
    >
      <defs>
        <pattern
          id="diagonal-stripes"
          patternUnits="userSpaceOnUse"
          width="3"
          height="3"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y="0"
            x2="0"
            y2="3"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
    </svg>
  );
}
