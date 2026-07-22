"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import WhyChooseIcon from "@/components/WhyChooseIcon";
import {
  facilitySlides,
  statsCards,
  whyChooseCards,
  newsCards,
  eventCards,
  programItems,
} from "@/lib/data";

/* ── CountUp ─────────────────────────────────────────────────────────────── */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const numericStr = value.replace(/[^\d]/g, "");
  const target = Number.parseInt(numericStr || "0", 10);
  const suffix = value.replace(/[\d,\s]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || !target) return;
    let rafId: number;
    const start = performance.now();
    const duration = 1200;
    const frame = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.round(target * (0.18 + 0.82 * progress)));
      if (progress < 1) rafId = requestAnimationFrame(frame);
    };
    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target]);

  const display = useMemo(() => {
    if (!target) return value;
    return `${count.toLocaleString()}${suffix}`;
  }, [count, suffix, target, value]);

  return <span ref={ref}>{display}</span>;
}

/* ── Field ───────────────────────────────────────────────────────────────── */
function Field({
  label,
  placeholder,
  select,
  textarea,
}: {
  label: string;
  placeholder: string;
  select?: boolean;
  textarea?: boolean;
}) {
  const inputClass =
    "w-full rounded-xl border border-white/0 bg-white px-4 py-3.5 text-base outline-none ring-1 ring-black/5 transition focus:ring-2 focus:ring-[var(--navy)] sm:rounded-2xl sm:text-sm";
  return (
    <label className="grid gap-1.5 text-sm text-zinc-900 sm:gap-2">
      <span className="text-base font-medium tracking-[-0.03em] text-zinc-800 sm:text-lg sm:tracking-[-0.04em]">{label}</span>
      {textarea ? (
        <textarea className={`${inputClass} min-h-32 sm:min-h-44`} placeholder={placeholder} />
      ) : select ? (
        <select className={inputClass}>
          <option>{placeholder}</option>
          <option>Admissions</option>
          <option>Programs &amp; Courses</option>
          <option>Placements</option>
          <option>Campus Facilities</option>
          <option>General Enquiry</option>
        </select>
      ) : (
        <input className={`${inputClass} placeholder:text-zinc-400`} placeholder={placeholder} />
      )}
    </label>
  );
}

/* ── Home Page ───────────────────────────────────────────────────────────── */
export default function Home() {
  const [facilityIndex, setFacilityIndex] = useState(0);
  const facility = facilitySlides[facilityIndex];
  const [statsIndex, setStatsIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"All" | "Events" | "News">("All");

  const currentStatsPair = useMemo(() => {
    const card1 = statsCards[statsIndex % statsCards.length];
    const card2 = statsCards[(statsIndex + 1) % statsCards.length];
    return [card1, card2];
  }, [statsIndex]);

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

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-zinc-900"
        style={{ height: "clamp(55vh, 56.35vw, 90vh)" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/College.webp"
            alt="Tippu Shaheed Institute of Technology campus"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/65" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-7 lg:p-10">
          <div className="mb-4 flex flex-col justify-between gap-4 sm:mb-6 sm:flex-row sm:items-end">
            <Reveal className="rounded-xl border border-white/25 bg-black/30 p-4 text-white backdrop-blur-md sm:rounded-[1.25rem] max-w-lg">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/75 sm:text-xs sm:tracking-[0.28em]">
                Tippu Shaheed Polytechnic · Estd. 1980
              </p>
              <p className="mt-1.5 text-base font-medium leading-snug text-white sm:mt-2 sm:text-lg sm:leading-tight">
                AICTE-approved &amp; DTE-aided polytechnic in Hubli offering 6 diploma engineering branches across a 6-acre green campus.
              </p>
            </Reveal>

            <div className="text-white/95">
              <div className="text-2xl font-medium sm:text-3xl">2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: About ────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-28">
        <section id="about" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
          <Reveal className="max-w-[520px]">
            <p className="mb-3 text-sm italic text-zinc-500">2026&apos;S OVERVIEW</p>
            <h2 className="text-4xl font-semibold tracking-[-0.07em] sm:text-5xl lg:text-7xl">Tippu Shaheed at a Glance</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">A concise view of the institute&apos;s reach, resources, and continued impact across technical education in Hubli.</p>
            <Link href="/about" style={{ color: "#ffffff" }} className="mt-7 inline-flex min-h-0 min-w-0 items-center gap-3 rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-medium !text-white shadow-lg shadow-[#17255b]/20 transition hover:translate-y-[-1px]">
              <span style={{ color: "#ffffff" }} className="!text-white">Learn more</span>
              <span style={{ color: "#ffffff" }} className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 !text-white">↗</span>
            </Link>
          </Reveal>

          <Reveal className="rounded-2xl bg-white/80 p-4 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm sm:rounded-[2rem] sm:p-6">
            <div className="mb-5 flex flex-col gap-1 border-b border-zinc-100 pb-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm italic text-zinc-500">About us</p>
              <p className="max-w-xs text-xs text-zinc-400">Numbers reflecting excellence in technical education.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {currentStatsPair.map((item) => (
                <div key={item.label} className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm sm:rounded-[1.5rem] sm:p-7">
                  <p className="text-base italic text-[var(--accent)] sm:text-lg">{item.label}</p>
                  <div className="mt-8 text-4xl font-semibold tracking-[-0.08em] sm:mt-12 sm:text-5xl lg:text-6xl"><CountUp value={item.value} /></div>
                  <p className="mt-2 text-xs text-zinc-400">{item.description}</p>
                  <div className="mt-4 h-px bg-zinc-100" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setStatsIndex((prev) => (prev - 1 + statsCards.length) % statsCards.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white transition hover:bg-zinc-50 sm:h-11 sm:w-11">‹</button>
              <button onClick={() => setStatsIndex((prev) => (prev + 1) % statsCards.length)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--navy)] text-white transition hover:bg-[#111f4f] sm:h-11 sm:w-11">›</button>
            </div>
          </Reveal>
        </section>
      </div>

      {/* ── Section 3: Facilities ────────────────────────────────────────── */}
      <section id="facilities" className="mt-16 sm:mt-20 lg:mt-28">
        <div
          className="group relative flex flex-col justify-between overflow-hidden text-white shadow-xl"
          style={{ minHeight: "clamp(540px, 62vw, 720px)" }}
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={facilityIndex}
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <Image
                src={facility.image}
                alt={facility.label}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${facilityIndex}`}
              className="relative z-10 flex h-full w-full flex-col justify-between"
              style={{ minHeight: "inherit" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between p-6 sm:p-8 lg:p-10">
                <div className="max-w-xl">
                  <p className="text-xs italic text-white/80 sm:text-sm">Our Facilities</p>
                  <h3 className="mt-1.5 text-xl font-normal leading-snug text-white sm:mt-2 sm:text-3xl lg:text-4xl">{facility.headline}</h3>
                </div>
                <div className="flex flex-col items-end text-right flex-shrink-0 pl-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/70 sm:text-xs leading-tight">AVAILABLE<br />FACILITY</span>
                </div>
              </div>

              <div className="ml-auto max-w-xs px-6 sm:px-8 lg:px-10 text-left -mt-4 sm:-mt-8">
                <h4 className="text-sm font-semibold text-white sm:text-base tracking-tight">{facility.subtitle}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-white/80 sm:text-sm sm:leading-relaxed">{facility.description}</p>
              </div>

              <div className="mt-auto flex flex-col justify-end p-6 sm:p-8 lg:p-10 pb-12 sm:pb-14 pointer-events-none select-none">
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{facility.index.split("/")[0]}</span>
                  <span className="text-sm font-normal text-white/60 sm:text-base">/{facility.index.split("/")[1]}</span>
                </div>
                <div className="mt-1 text-[11vw] font-normal leading-none tracking-[-0.04em] text-white sm:text-[8.5vw] lg:text-[7vw] drop-shadow-md">{facility.label}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="absolute bottom-5 left-6 right-6 z-20 flex items-center gap-2">
            {facilitySlides.map((slide, index) => (
              <button
                key={slide.label}
                onClick={() => setFacilityIndex(index)}
                aria-label={`View ${slide.label} facility`}
                aria-pressed={index === facilityIndex}
                className="group flex min-h-0 min-w-0 flex-1 py-3 border-none outline-none bg-transparent cursor-pointer"
              >
                <span
                  className={`h-[3px] w-full rounded-full transition-all duration-300 ${
                    index === facilityIndex
                      ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.95)]"
                      : "bg-white/30 group-hover:bg-white/65"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="absolute right-6 bottom-12 z-30 flex items-center gap-2 sm:right-10 sm:bottom-14 sm:gap-3">
            <button
              onClick={() => setFacilityIndex((prev) => (prev - 1 + facilitySlides.length) % facilitySlides.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-zinc-900 shadow-lg transition hover:scale-105 sm:h-14 sm:w-14 sm:text-xl"
              aria-label="Previous facility"
            >←</button>
            <button
              onClick={() => setFacilityIndex((prev) => (prev + 1) % facilitySlides.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-zinc-900 shadow-lg transition hover:scale-105 sm:h-14 sm:w-14 sm:text-xl"
              aria-label="Next facility"
            >→</button>
          </div>
        </div>
      </section>

      {/* ── Section 4: Programs ──────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-28">
        <section id="programs">
          <Reveal className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:mb-10">
            <div>
              <p className="text-sm italic text-zinc-500">Our Diploma Courses</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl lg:text-6xl">6 AICTE-Approved Programs</h2>
            </div>
            <Link href="/programs" className="min-h-[44px] inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-950">
              View all programs →
            </Link>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programItems.map((prog, i) => (
              <motion.div
                key={prog.number}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[1.5rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.06 }}
              >
                <div className="relative h-44 w-full overflow-hidden sm:h-52">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-zinc-900 backdrop-blur-sm">{prog.number}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.04em] leading-snug sm:text-xl text-zinc-900">{prog.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-6">{prog.description}</p>
                  </div>
                  <div>
                    <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4 text-xs text-zinc-400">
                      <span>{prog.duration}</span>
                      <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 font-medium text-zinc-600">{prog.seats}</span>
                    </div>
                    <Link
                      href={`/programs/${prog.slug}`}
                      style={{ color: "#ffffff" }}
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--navy)] px-4 py-2.5 text-xs font-semibold !text-white shadow-sm transition hover:bg-[#111f4f]"
                    >
                      <span style={{ color: "#ffffff" }} className="!text-white">View details</span>
                      <span style={{ color: "#ffffff" }} className="text-sm !text-white">↗</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Section 5: Why Choose Us ─────────────────────────────────────── */}
      <section id="why-choose-us" className="relative mt-16 overflow-hidden bg-[var(--dark)] text-white sm:mt-20 lg:mt-28">
        <div className="absolute inset-0 opacity-[0.28] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="relative mx-auto max-w-[1500px] p-5 sm:p-8 lg:p-12">
          <div className="grid gap-6 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <p className="text-sm italic text-white/80">Why Choose us</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.07em] sm:mt-4 sm:text-5xl lg:text-6xl">Established Since 1980 — Serving North Karnataka with Pride</h2>
            </Reveal>

            <div className="flex items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredCard ?? "default"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="max-w-sm"
                >
                  {hoveredCard !== null ? (
                    <>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
                        {whyChooseCards[hoveredCard].number}
                      </p>
                      <WhyChooseIcon
                        id={whyChooseCards[hoveredCard].icon}
                        className="block h-8 w-8 text-white/60 mb-2"
                      />
                      <p className="text-sm font-medium text-white/90 leading-7 mb-2 sm:text-base">{whyChooseCards[hoveredCard].title}</p>
                      <p className="text-xs leading-6 text-white/50 sm:text-sm sm:leading-7">{whyChooseCards[hoveredCard].extraDetail}</p>
                    </>
                  ) : (
                    <p className="text-xs leading-6 text-white/40 sm:text-sm sm:leading-7">
                      From AICTE-approved diploma programs to hands-on engineering labs — discover what makes Tippu Shaheed a trusted institution. Hover any card to learn more.
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 sm:mt-10 xl:grid-cols-4 items-stretch">
            {whyChooseCards.map((card, index) => {
              const isActive = hoveredCard === index;
              const isAnyActive = hoveredCard !== null;
              return (
                <motion.div
                  key={card.title}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  aria-label={`${card.title}: ${card.description}`}
                  className="glow-border flex h-full flex-col justify-between rounded-xl border p-5 cursor-pointer sm:rounded-[1.4rem] sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--dark)]"
                  animate={{
                    y: isActive ? -6 : 0,
                    borderColor: isActive ? "rgba(216,183,122,0.45)" : "rgba(255,255,255,0.10)",
                    backgroundColor: isActive ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
                    opacity: isAnyActive && !isActive ? 0.55 : 1,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: hoveredCard === null ? index * 0.05 : 0 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  onTap={() => setHoveredCard(isActive ? null : index)}
                  onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setHoveredCard(isActive ? null : index); } }}
                >
                  <div>
                    <div className="text-xs font-medium text-[var(--accent)] sm:text-sm">{card.number}</div>
                    <WhyChooseIcon
                      id={card.icon}
                      className="mt-4 block h-10 w-10 text-white/70 sm:mt-6 sm:h-12 sm:w-12"
                    />
                    <h3 className="mt-3 text-lg font-medium tracking-[-0.04em] sm:mt-4 sm:text-xl">{card.title}</h3>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-white/70 sm:mt-4 sm:text-sm sm:leading-6">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 6 & 7: News & Events ────────────────────────────────── */}
      <div id="news" className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-28">
        <Reveal className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:mb-8">
          <div>
            <p className="text-sm italic text-zinc-500">Latest Updates</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl lg:text-6xl">News &amp; Events</h2>
          </div>
          <div className="flex gap-2" role="group" aria-label="Filter news and events">
            {(["All", "Events", "News"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`min-h-[44px] rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeTab === tab ? "bg-zinc-900 text-white" : "border border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredCards.map((card, i) => (
              <motion.article
                key={card.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.32, delay: i * 0.04 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm sm:rounded-[1.5rem]"
              >
                <div className="relative h-44 overflow-hidden sm:h-52">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-medium text-zinc-700 backdrop-blur-sm">{card.type}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-400 sm:text-xs">{card.date}</p>
                    <h3 className="mt-1.5 text-sm font-semibold leading-snug text-zinc-900 sm:text-base sm:leading-snug">{card.title}</h3>
                  </div>
                  {"read" in card && card.type === "News" && (
                    <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 sm:mt-5 sm:text-sm">
                      <span>{card.read}</span>
                      <button className="min-h-[44px] rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium transition hover:bg-zinc-50">Read more →</button>
                    </div>
                  )}
                  {card.type === "Events" && (
                    <div className="mt-4 sm:mt-5">
                      <button className="min-h-[44px] rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium transition hover:bg-zinc-50">View event →</button>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Section 8: Contact ───────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-28">
        <section id="contact" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <Reveal>
            <p className="text-sm italic text-zinc-500">Contact Us</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.07em] sm:text-5xl lg:text-7xl">Have Questions? We&apos;d Love to Hear From You.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">For admissions, campus visits, or general information, reach us at Simla Nagar, Hubli — or use the form below.</p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-zinc-600">
              <span><span aria-hidden="true">📍</span> Simla Nagar, Cite Plots, Dever Gudihal Road, Hubli – 580024</span>
              <span><span aria-hidden="true">📞</span> +91-836-220-5697</span>
              <span><span aria-hidden="true">✉️</span> principal@tippushaheedpolytechnic.com</span>
            </div>
            <Link href="/contact" className="mt-6 inline-flex min-h-0 min-w-0 items-center gap-2 rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50">
              Full Contact Page →
            </Link>
          </Reveal>

          <Reveal className="rounded-2xl bg-zinc-50 p-4 shadow-[0_18px_50px_rgba(17,17,17,0.05)] border border-zinc-100 sm:rounded-[2rem] sm:p-7">
            <form className="grid gap-3 sm:gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <Field label="First name" placeholder="Enter your first name" />
                <Field label="Last name" placeholder="Enter your last name" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <Field label="Email" placeholder="Your email address" />
                <Field label="Phone Number" placeholder="+91" />
              </div>
              <Field label="Subject" placeholder="Select your subject" select />
              <Field label="Message" placeholder="Type your message" textarea />
              <button style={{ color: "#ffffff" }} className="mt-1 inline-flex min-h-0 min-w-0 w-fit items-center gap-3 rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-medium !text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#111f4f] sm:mt-2 sm:py-3.5">
                <span style={{ color: "#ffffff" }} className="!text-white">Send Message</span>
                <span style={{ color: "#ffffff" }} className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 !text-white sm:h-7 sm:w-7">↗</span>
              </button>
            </form>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
