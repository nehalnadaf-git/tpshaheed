"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/lib/data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Main Sticky Header ── */}
      <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-xl border-b border-zinc-100 transition-all">
        {/* Thin gold accent line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-80" />

        <div className="mx-auto flex max-w-[1550px] items-center justify-between px-4 py-3.5 sm:px-6 lg:px-10">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <Image
              src="/images/Logo.png"
              alt="TSIT Crest Logo"
              width={60}
              height={60}
              className="h-12 w-auto object-contain sm:h-14 lg:h-15 transition-transform duration-200 group-hover:scale-[1.03]"
              priority
            />
            <div className="leading-[1.15]">
              <div className="text-[9px] font-extrabold tracking-[0.32em] uppercase text-[var(--accent)] sm:text-[10px]">POLYTECHNIC</div>
              <div className="text-xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-2xl lg:text-[1.55rem]">Tippu Shaheed</div>
            </div>
          </Link>

          <div className="mx-4 hidden h-8 w-px bg-zinc-200 lg:block flex-shrink-0 xl:mx-6" />

          {/* ── Desktop Nav ── */}
          <nav className="hidden flex-1 items-center justify-center gap-1 md:flex lg:gap-3 xl:gap-5">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" :
                pathname.startsWith(item.href.split("#")[0]) && item.href.split("#")[0] !== "/";
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative px-2.5 py-2 text-sm font-semibold whitespace-nowrap transition-colors lg:px-3 lg:text-[0.95rem] xl:text-base ${
                    isActive ? "text-zinc-950 font-bold" : "text-zinc-700 hover:text-zinc-950"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-2.5 right-2.5 h-[2.5px] rounded-full bg-[var(--navy)] transition-transform duration-200 lg:left-3 lg:right-3 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden md:flex">
              <Link
                href="/admissions"
                style={{ color: "#ffffff" }}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-5 py-2.5 text-xs font-bold !text-white shadow-lg shadow-[#17255b]/25 transition-all duration-200 hover:bg-[#111f4f] hover:scale-[1.03] lg:px-6 lg:py-3 lg:text-sm"
              >
                <span style={{ color: "#ffffff" }} className="!text-white">Admissions Open</span>
                <span style={{ color: "#ffffff" }} className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] !text-white lg:h-6 lg:w-6 lg:text-xs">↗</span>
              </Link>
            </div>

            {/* Minimal Premium Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen((o) => !o)}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50/90 text-zinc-900 transition-all duration-200 hover:bg-zinc-100 hover:border-zinc-300 active:scale-95"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative flex h-3 w-4 flex-col justify-between">
                  <span className={`block h-[1.5px] w-full rounded-full bg-zinc-900 transition-all duration-300 origin-center ${mobileMenuOpen ? "translate-y-[5.25px] rotate-45" : ""}`} />
                  <span className={`block h-[1.5px] w-full rounded-full bg-zinc-900 transition-all duration-300 origin-center ${mobileMenuOpen ? "-translate-y-[5.25px] -rotate-45" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Full-Screen Mobile Menu Drawer (Anchored below header) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden fixed inset-x-0 bottom-0 top-[75px] z-[90] bg-white flex flex-col justify-between"
          >
            {/* Editorial Nav List */}
            <nav className="flex-1 overflow-y-auto px-6 pt-6 pb-4">
              <ul className="flex flex-col">
                {navItems.map((item, i) => {
                  const isActive =
                    item.href === "/" ? pathname === "/" :
                    pathname.startsWith(item.href.split("#")[0]) && item.href.split("#")[0] !== "/";
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 + i * 0.035, duration: 0.2, ease: "easeOut" }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-center justify-between border-b py-4 transition-colors ${
                          isActive
                            ? "border-zinc-200 text-zinc-950"
                            : "border-zinc-100 text-zinc-500 hover:text-zinc-950"
                        }`}
                      >
                        <span className={`text-[1.5rem] font-semibold tracking-tight leading-none ${
                          isActive ? "text-zinc-950" : "group-hover:text-zinc-950"
                        }`}>
                          {item.label}
                        </span>
                        <span className={`text-base transition-transform group-hover:translate-x-1 ${
                          isActive ? "text-[var(--accent)]" : "text-zinc-300 group-hover:text-zinc-500"
                        }`}>
                          →
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.25, ease: "easeOut" }}
              className="px-6 pb-8 pt-4 flex-shrink-0 border-t border-zinc-100 bg-white"
            >
              <Link
                href="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: "#ffffff" }}
                className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[var(--navy)] px-6 py-4 text-sm font-bold !text-white shadow-xl shadow-[#17255b]/20 transition hover:bg-[#111f4f]"
              >
                Admissions Open 2026–27
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs">↗</span>
              </Link>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                {["Estd. 1980", "AICTE Approved", "Hubli, Karnataka"].map((t) => (
                  <span key={t} className="text-[11px] font-medium text-zinc-400">{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
