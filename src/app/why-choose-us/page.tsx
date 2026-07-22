import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WhyChooseIcon from "@/components/WhyChooseIcon";
import { whyChooseCards, statsCards } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why Choose Us - Tippu Shaheed Polytechnic Hubli",
  description:
    "Discover why Tippu Shaheed Institute of Technology (TSIT Hubli) is North Karnataka's leading government-aided polytechnic for 3-year diploma engineering education since 1980.",
};

export default function WhyChooseUsPage() {
  return (
    <main className="flex w-full flex-col gap-0 overflow-x-hidden pb-16 lg:pb-24">
      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-blue-50/50 to-white text-zinc-950 border-b border-blue-100">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(186,230,253,0.5),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36">
          <Reveal>
            <p className="text-sm italic font-semibold text-[var(--navy)]/80">Established 1980 · Over 44 Years of Academic Excellence</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-6xl lg:text-8xl">Why Choose TSIT</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              Empowering students across North Karnataka with government-aided technical education, AICTE-approved diploma programs, experienced faculty, state-of-the-art labs, and strong placement pathways.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 -mt-8 relative z-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-white p-6 shadow-xl border border-zinc-100">
          {statsCards.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400">{stat.label}</p>
              <p className="mt-1 text-3xl font-extrabold text-[var(--navy)]">{stat.value}</p>
              <p className="mt-1 text-xs text-zinc-500">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Core Advantages Grid ────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-24">
        <Reveal className="mb-12">
          <p className="text-sm italic text-zinc-500">Key Pillars of TSIT</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.07em] text-zinc-900 sm:text-5xl">What Sets Us Apart</h2>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {whyChooseCards.map((item) => (
            <Reveal key={item.number} className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-[var(--accent)] tracking-widest">{item.number}</span>
                <WhyChooseIcon
                  id={item.icon}
                  className="block h-10 w-10 text-[var(--navy)]"
                />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-zinc-900 tracking-tight">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-zinc-600 font-normal">{item.description}</p>
              
              <div className="mt-5 border-t border-zinc-100 pt-4">
                <p className="text-xs leading-6 text-zinc-500">{item.extraDetail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Additional Benefits ─────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-24">
        <Reveal className="rounded-2xl bg-zinc-50 border border-zinc-200/80 p-8 sm:p-12">
          <h3 className="text-3xl font-bold tracking-tight text-zinc-900">Dedicated Student Support &amp; Scholarships</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-3 text-sm text-zinc-700">
            <div>
              <h4 className="font-bold text-zinc-900 mb-1">🎓 Government Fee Concessions</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                SC/ST/OBC category fee concessions and SSP / NSP portal assistance directly handled by institution staff.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 mb-1">🌳 6-Acre Green Campus</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Located at Simla Nagar, Hubli — offering quiet, serene academic environment with spacious sports grounds and labs.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 mb-1">⚡ DCET Coaching Guidance</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Academic mentoring to help final year diploma students excel in the Karnataka Diploma Common Entrance Test for direct 2nd-year B.E. admission.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-24">
        <Reveal className="rounded-2xl bg-[var(--navy)] p-8 text-white text-center sm:rounded-[2rem] sm:p-12">
          <h2 className="text-3xl font-semibold tracking-[-0.06em] sm:text-5xl">Join North Karnataka&apos;s Preferred Polytechnic</h2>
          <p className="mt-4 text-white/70 max-w-lg mx-auto">Admissions for 2026–27 academic year are open for 10th pass candidates. Explore our programs or contact admissions.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/programs" style={{ color: "#17255b", backgroundColor: "#ffffff" }} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold !text-[#17255b] shadow-lg transition hover:scale-[1.02]">
              Explore Programs →
            </Link>
            <Link href="/admissions" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Admissions Info
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
