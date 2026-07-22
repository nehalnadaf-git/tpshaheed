import React from "react";

// Maps card icon keys to premium inline SVG icons.
// All icons use crisp stroke-based paths — no emoji, no rasters.

const icons: Record<string, React.ReactNode> = {
  /* Certificate / official badge — AICTE card */
  badge: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
      <rect x="8" y="4" width="32" height="38" rx="4" />
      <path d="M16 14h16M16 20h10" />
      <circle cx="24" cy="33" r="5" />
      <path d="M21 37.5l-2 5 5-2 5 2-2-5" />
    </svg>
  ),

  /* Academic cap / mentor — Faculty card */
  faculty: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
      <path d="M24 8L4 18l20 10 20-10-20-10z" />
      <path d="M12 23.5v9c0 3.5 5.4 6.5 12 6.5s12-3 12-6.5v-9" />
      <line x1="40" y1="18" x2="40" y2="30" />
      <circle cx="40" cy="32" r="2" fill="currentColor" stroke="none" />
    </svg>
  ),

  /* Government pillars / institution — Government card */
  government: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
      <path d="M24 5L4 16h40L24 5z" />
      <rect x="4" y="38" width="40" height="4" rx="1" />
      <rect x="8" y="20" width="5" height="18" rx="1" />
      <rect x="17.5" y="20" width="5" height="18" rx="1" />
      <rect x="27" y="20" width="5" height="18" rx="1" />
      <rect x="36" y="20" width="5" height="18" rx="1" />
    </svg>
  ),

  /* Career rocket — Placement card */
  placement: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
      <path d="M24 4c0 0-12 6-12 22v2l-4 8h32l-4-8v-2C36 10 24 4 24 4z" />
      <circle cx="24" cy="26" r="4" />
      <path d="M14 42s2 4 10 4 10-4 10-4" />
      <path d="M36 14l6-6M12 14l-6-6" />
    </svg>
  ),
};

export default function WhyChooseIcon({ id, className = "" }: { id: string; className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      {icons[id] ?? null}
    </span>
  );
}
