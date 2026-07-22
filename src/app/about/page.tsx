import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About TSIT",
  description:
    "Learn about Tippu Shaheed Institute of Technology — its history since 1980, governance, 6-acre campus in Simla Nagar Hubli, AICTE approval, and DTE Karnataka affiliation.",
};

const timeline = [
  { year: "1980", event: "Institute founded by Railway Muslim Employees Education Association (RMEEA) as a tribute to Tipu Sultan." },
  { year: "1985", event: "First batch of Electronics & Civil Engineering diploma graduates. Strong placement in local industries." },
  { year: "1995", event: "Expanded to include Computer Science & Automobile Engineering programs. Faculty strength reaches 30+." },
  { year: "2005", event: "New lab infrastructure commissioned. Computer centre and modern library established." },
  { year: "2015", event: "Total intake capacity reaches 252 seats across 6 diploma programs. AICTE renewal completed." },
  { year: "2024", event: "44th anniversary. ~400 active students, 34 faculty members, 6 AICTE-approved branches." },
  { year: "2026", event: "Admissions open for 2026–27 batch. Digital presence expanded, new lab equipment inducted." },
];


const approvals = [
  { body: "AICTE", status: "Approved", remarks: "All 6 diploma programs approved by AICTE, New Delhi" },
  { body: "DTE Karnataka", status: "Affiliated", remarks: "Karnataka Directorate of Technical Education" },
];

export default function AboutPage() {
  return (
    <main className="flex w-full flex-col gap-0 overflow-x-hidden pb-16 lg:pb-24">

      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-blue-50/50 to-white text-zinc-950 border-b border-blue-100">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(186,230,253,0.5),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36">
          <Reveal>
            <p className="text-sm italic font-semibold text-[var(--navy)]/80">Est. 1980 · Serving North Karnataka</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-6xl lg:text-8xl">About TSIT</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              Tippu Shaheed Institute of Technology — an AICTE-approved aided polytechnic in Hubli, Karnataka, serving the technical education needs of North Karnataka since 1980.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── History & Mission ────────────────────────────────────────────── */}
      <div id="history" className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <Reveal>
            <p className="text-sm italic text-zinc-500">Our Story</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl lg:text-6xl">Founded in 1980, Built on Purpose</h2>
            <p className="mt-5 text-base leading-8 text-zinc-500 sm:text-lg sm:leading-9">
              TSIT was established in 1980 by the <strong className="text-zinc-800">Railway Muslim Employees Education Association (RMEEA)</strong> as a tribute to the 18th-century ruler Tipu Sultan — known as &ldquo;Tippu Shaheed.&rdquo;
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-500 sm:text-lg">
              The institute was created to advance technical education in Hubli and the wider Dharwad district, with a focus on making quality engineering diploma education accessible and affordable for students from all backgrounds.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-500 sm:text-lg">
              Registered as a <strong className="text-zinc-800">government-aided polytechnic</strong> under the Karnataka DTE, TSIT operates on a 6-acre campus in Simla Nagar, Hubli — located behind Siddarudh Math, near the old Hubli bypass road.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 sm:rounded-[2rem] sm:p-8">
              <h3 className="text-xl font-semibold tracking-[-0.04em]">Quick Facts</h3>
              <ul className="mt-5 space-y-4">
                {[
                  ["Founded", "1980"],
                  ["Type", "Government-Aided Polytechnic"],
                  ["Managing Society", "Railway Muslim Employees Education Association (RMEEA)"],
                  ["Principal", "M. S. Mulla"],
                  ["Chairman", "G. H. Beopari"],
                  ["Campus Area", "6 Acres"],
                  ["Location", "Simla Nagar, Hubli – 580024, Dharwad Dist., Karnataka"],
                  ["Students", "~400"],
                  ["Faculty", "34+"],
                  ["Phone", "+91-836-220-5697"],
                  ["Email", "principal@tippushaheedpolytechnic.com"],
                ].map(([key, val]) => (
                  <li key={key} className="grid grid-cols-[120px_1fr] gap-x-3 gap-y-0.5 text-sm border-b border-zinc-100 pb-3 last:border-0 last:pb-0">
                    <span className="font-medium text-zinc-700 leading-relaxed">{key}</span>
                    <span className="text-zinc-500 break-words min-w-0">{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Timeline ────────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal>
          <p className="text-sm italic text-zinc-500">Milestones</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">History &amp; Timeline</h2>
        </Reveal>

        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200 sm:left-6" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <div className="flex gap-6 sm:gap-8">
                  <div className="relative flex flex-col items-center">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-white text-xs font-bold sm:h-12 sm:w-12 sm:text-sm z-10">
                      {item.year.slice(2)}
                    </div>
                  </div>
                  <div className="pt-1 pb-2">
                    <p className="text-[var(--accent)] text-sm font-semibold">{item.year}</p>
                    <p className="mt-1 text-base text-zinc-600 leading-7">{item.event}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Governance ──────────────────────────────────────────────────── */}
      <div id="governance" className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal>
          <p className="text-sm italic text-zinc-500">Leadership</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">Governance &amp; Affiliations</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-500">
            TSIT is governed by the RMEEA managing committee, under the oversight of the Karnataka DTE and AICTE.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {approvals.map((row) => (
            <div key={row.body} className="rounded-2xl border border-zinc-100 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-base font-semibold text-zinc-900">{row.body}</span>
                <span className="rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-700 flex-shrink-0">{row.status}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{row.remarks}</p>
            </div>
          ))}
        </div>
      </div>


      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal className="rounded-2xl bg-[var(--navy)] p-8 text-white sm:rounded-[2rem] sm:p-12 text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.06em] sm:text-5xl">Ready to Join TSIT?</h2>
          <p className="mt-4 text-white/70 max-w-lg mx-auto">Explore our 6 AICTE-approved diploma engineering programs and begin your engineering career in Hubli.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/admissions" style={{ color: "#17255b" }} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium !text-[#17255b] shadow-lg transition hover:scale-[1.02]">
              Apply for Admissions →
            </Link>
            <Link href="/programs" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              View All Programs
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
