"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Reveal — premium scroll-reveal component.
 *
 * Design goals:
 * - Ultra-short duration (0.45 s) so it feels snappy, never sluggish
 * - Tiny 16 px lift — just enough to be felt, not a full slide-in
 * - Spring-based ease curve (custom cubic-bezier matching CSS spring feel)
 * - `amount: 0.12` threshold → element triggers the moment it peeks into view
 * - `once: true` → never re-animates; zero repaint cost after first view
 * - Respects prefers-reduced-motion for accessibility
 */

// The easing curve: fast-exit spring — sharp acceleration, smooth deceleration.
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: 16 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.45,
        ease: EASE,
        delay: prefersReduced ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
