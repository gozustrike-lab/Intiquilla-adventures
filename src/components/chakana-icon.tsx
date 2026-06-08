"use client";

interface ChakanaIconProps {
  className?: string;
  size?: number;
}

export function ChakanaIcon({ className = "", size = 24 }: ChakanaIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {/* Center square */}
      <rect x="24" y="24" width="16" height="16" fill="currentColor" rx="1" />
      {/* Top arm */}
      <rect x="27" y="4" width="10" height="22" fill="currentColor" rx="1" />
      {/* Bottom arm */}
      <rect x="27" y="38" width="10" height="22" fill="currentColor" rx="1" />
      {/* Left arm */}
      <rect x="4" y="27" width="22" height="10" fill="currentColor" rx="1" />
      {/* Right arm */}
      <rect x="38" y="27" width="22" height="10" fill="currentColor" rx="1" />
      {/* Inner circle */}
      <circle cx="32" cy="32" r="3.5" fill="#111111" />
      {/* Inner circle ring */}
      <circle cx="32" cy="32" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      {/* Outer decorative dots at arm ends */}
      <circle cx="32" cy="6" r="2" fill="currentColor" />
      <circle cx="32" cy="58" r="2" fill="currentColor" />
      <circle cx="6" cy="32" r="2" fill="currentColor" />
      <circle cx="58" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}
