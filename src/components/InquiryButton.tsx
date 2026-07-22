"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InquiryButton() {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  /* Show button after user scrolls 80px */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Collapse on outside click */
  useEffect(() => {
    if (!expanded) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#inquiry-fab")) setExpanded(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [expanded]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="inquiry-fab"
          initial={{ opacity: 0, scale: 0.85, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 24 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-5 z-[90] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8"
        >
          {/* ── Expanded action cards ── */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="flex flex-col gap-2.5 items-end"
              >

                {/* Call */}
                <a
                  href="tel:+918362205697"
                  aria-label="Call TSIT: +91-836-220-5697"
                  className="group flex items-center gap-3 rounded-2xl bg-[#17255b] px-4 py-3 text-white shadow-2xl shadow-[#17255b]/40 transition-all duration-200 hover:bg-[#111f4f] hover:scale-[1.02]"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">Call Us</p>
                    <p className="text-sm font-bold text-white leading-tight">+91-836-220-5697</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:principal@tippushaheedpolytechnic.com"
                  aria-label="Email TSIT principal"
                  className="group flex items-center gap-3 rounded-2xl bg-[#17255b] px-4 py-3 text-white shadow-2xl shadow-[#17255b]/40 transition-all duration-200 hover:bg-[#111f4f] hover:scale-[1.02]"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">Email Us</p>
                    <p className="text-sm font-bold text-white leading-tight">principal@tippushaheed</p>
                  </div>
                </a>

                {/* Contact form link */}
                <Link
                  href="/contact"
                  aria-label="Go to contact page"
                  className="group flex items-center gap-3 rounded-2xl border border-[#d8b77a]/30 bg-white px-4 py-3 shadow-xl shadow-zinc-200/70 transition-all duration-200 hover:scale-[1.02]"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#17255b]/10">
                    <svg className="h-4 w-4 text-[#17255b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">Contact Form</p>
                    <p className="text-sm font-bold text-[#17255b] leading-tight">Send a Message</p>
                  </div>
                </Link>

              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Main FAB ── */}
          <button
            onClick={() => setExpanded((p) => !p)}
            aria-label={expanded ? "Close enquiry options" : "Open enquiry options"}
            aria-expanded={expanded}
            className="group relative flex h-[58px] items-center overflow-hidden rounded-full shadow-2xl shadow-[#17255b]/40 outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            style={{ background: "linear-gradient(135deg, #17255b 0%, #1e3080 60%, #17255b 100%)", minWidth: "58px" }}
          >

            {/* Icon */}
            <span className="flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center">
              {expanded ? (
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              )}
            </span>

            {/* Label — slides in on hover via CSS max-width trick */}
            <span
              className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold tracking-wide text-white transition-all duration-300 group-hover:max-w-[120px] group-hover:pr-5"
              aria-hidden="true"
            >
              Enquire Now
            </span>


          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
