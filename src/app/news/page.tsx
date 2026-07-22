"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { newsCards, eventCards } from "@/lib/data";

// Note: metadata cannot be exported from a "use client" file.
// This is intentional — the page metadata is set via the nearest server-rendered layout.
// To add page-specific metadata, convert to a server-component wrapper (a future improvement).

export default function NewsAndEventsPage() {
  const [activeTab, setActiveTab] = useState<"All" | "News" | "Events">("All");

  const allCards = useMemo(
    () => [
      ...newsCards.map((c) => ({ ...c, type: "News" as const })),
      ...eventCards.map((c) => ({ ...c, type: "Events" as const })),
    ],
    []
  );

  const filteredCards = useMemo(
    () => (activeTab === "All" ? allCards : allCards.filter((c) => c.type === activeTab)),
    [activeTab, allCards]
  );

  return (
    <main className="flex w-full flex-col gap-0 overflow-x-hidden pb-16 lg:pb-24">

      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-blue-50/50 to-white text-zinc-950 border-b border-blue-100">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(186,230,253,0.5),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36">
          <Reveal>
            <p className="text-sm italic font-semibold text-[var(--navy)]/80">TSIT Updates &amp; Campus Bulletin</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-6xl lg:text-8xl">News &amp; Events</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              Stay updated with recent achievements, admissions notifications, technical symposiums, sports tournaments, and campus celebrations at Tippu Shaheed Institute of Technology, Hubli.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Content Grid & Filter ────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16 lg:mt-20">
        
        {/* Filter Controls */}
        <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-200 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500">Filter Category</span>
            <h2 className="mt-1 text-2xl font-semibold tracking-[-0.06em] text-zinc-900 sm:text-3xl">All Bulletins &amp; Happenings</h2>
          </div>
          
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter news and events">
            {(["All", "News", "Events"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`min-h-[44px] rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeTab === tab
                    ? "bg-[var(--navy)] text-white shadow-md"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                {tab} ({tab === "All" ? allCards.length : allCards.filter(c => c.type === tab).length})
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredCards.map((card, i) => (
              <motion.article
                key={card.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.32, delay: i * 0.04 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 sm:rounded-[1.5rem]"
              >
                <div className="relative h-52 overflow-hidden sm:h-60">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm ${
                      card.type === "News" ? "bg-blue-600/90 text-white" : "bg-amber-600/90 text-white"
                    }`}>
                      {card.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-400 font-medium mb-2">
                      <span>{card.date}</span>
                      {"author" in card && <span>By {card.author}</span>}
                      {"place" in card && <span>📍 {card.place}</span>}
                    </div>
                    <h3 className="text-lg font-bold leading-snug text-zinc-900 sm:text-xl group-hover:text-[var(--navy)] transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 text-xs text-zinc-500">
                    {"read" in card ? (
                      <span className="font-medium">{card.read}</span>
                    ) : (
                      <span className="font-medium">TSIT Campus Event</span>
                    )}
                    <span className="font-semibold text-[var(--navy)] group-hover:underline">
                      Read full article ↗
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Admissions CTA Banner */}
        <div className="mt-16 sm:mt-20">
          <Reveal className="rounded-2xl bg-[var(--navy)] p-8 text-white text-center sm:rounded-[2rem] sm:p-12">
            <h2 className="text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">Interested in Joining TSIT Hubli?</h2>
            <p className="mt-4 text-white/80 max-w-lg mx-auto text-sm sm:text-base">Admissions for 2026–27 are open for all 6 AICTE-approved diploma engineering programs.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/admissions" style={{ color: "#17255b", backgroundColor: "#ffffff" }} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold !text-[#17255b] shadow-lg transition hover:scale-[1.02]">
                Admissions Portal →
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                Contact Desk
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
