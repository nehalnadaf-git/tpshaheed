import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { programItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Diploma Programs",
  description:
    "Explore all 6 AICTE-approved 3-year diploma engineering programs at TSIT Hubli — Electronics, CSE, Electrical, Civil, Mechanical, and Automobile Engineering.",
};

export default function ProgramsPage() {
  return (
    <main className="flex w-full flex-col gap-0 overflow-x-hidden pb-16 lg:pb-24">

      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-blue-50/50 to-white text-zinc-950 border-b border-blue-100">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(186,230,253,0.5),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36">
          <Reveal>
            <p className="text-sm italic font-semibold text-[var(--navy)]/80">AICTE Approved · DTE Karnataka Affiliated</p>
            <h1 className="mt-3 text-5xl font-semibold tracking-[-0.07em] text-zinc-950 sm:text-7xl lg:text-8xl">Our Programs</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              Six full-time 3-year diploma engineering programs for students who have passed the 10th Standard (SSLC). Total intake: 252 seats.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Programs Grid ────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal>
          <p className="text-sm italic text-zinc-500">All Branches</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">6 Diploma Engineering Programs</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programItems.map((prog, i) => (
            <Reveal key={prog.number} delay={i * 0.06}>
              <div className="group flex flex-col justify-between h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white hover:shadow-xl transition-all duration-300 sm:rounded-[1.5rem]">
                {/* Image Header */}
                <div className="relative h-44 w-full overflow-hidden sm:h-48">
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

                <div className="flex flex-col justify-between flex-1 p-5 sm:p-6">
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.04em] leading-snug text-zinc-900 sm:text-xl">{prog.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-zinc-500 line-clamp-2 sm:text-sm sm:leading-6">{prog.description}</p>

                    {/* Key Subjects - Brief Top 3 */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {prog.subjects.slice(0, 3).map((sub) => (
                        <span key={sub} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600">{sub}</span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-5 border-t border-zinc-100 pt-4">
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span className="font-medium">{prog.duration}</span>
                      <span className="rounded-full bg-[var(--navy)]/10 text-[var(--navy)] px-2.5 py-0.5 font-semibold text-[11px]">{prog.seats}</span>
                    </div>
                    <Link
                      href={`/programs/${prog.slug}`}
                      className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--navy)] px-4 py-2.5 text-xs font-semibold !text-white shadow-sm transition hover:bg-[#111f4f]"
                    >
                      View details <span className="text-sm">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Seats Summary Table ──────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal>
          <p className="text-sm italic text-zinc-500">Intake Summary</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">Program &amp; Seat Summary</h2>
        </Reveal>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-zinc-200">
                <th className="py-3 pr-6 text-left font-semibold text-zinc-700 min-w-[32px]">#</th>
                <th className="py-3 pr-6 text-left font-semibold text-zinc-700 min-w-[180px]">Program</th>
                <th className="py-3 pr-6 text-left font-semibold text-zinc-700 min-w-[90px]">Duration</th>
                <th className="py-3 pr-6 text-left font-semibold text-zinc-700 min-w-[60px]">Seats</th>
                <th className="py-3 text-right font-semibold text-zinc-700 min-w-[80px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {programItems.map((p) => (
                <tr key={p.number} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                  <td className="py-4 pr-6 text-zinc-400 font-medium">{p.number}</td>
                  <td className="py-4 pr-6 font-medium text-zinc-900">{p.title}</td>
                  <td className="py-4 pr-6 text-zinc-500">{p.duration}</td>
                  <td className="py-4 pr-6">
                    <span className="rounded-full bg-zinc-100 px-3 py-0.5 text-xs font-medium text-zinc-700">{p.seats}</span>
                  </td>
                  <td className="py-4 text-right">
                    <Link
                      href={`/programs/${p.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--navy)] hover:underline"
                    >
                      View details ↗
                    </Link>
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-zinc-200 bg-zinc-50">
                <td className="py-4 pr-6 font-bold text-zinc-700" colSpan={3}>Total Intake</td>
                <td className="py-4" colSpan={2}>
                  <span className="rounded-full bg-[var(--navy)] text-white px-3 py-0.5 text-xs font-semibold">252 Seats</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Scholarship Info ─────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal className="rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm text-blue-700 max-w-2xl">
          💡 <strong>SC/ST/OBC students</strong> may be eligible for Post-Metric Scholarship and other state/central government scholarship schemes. Contact the institute for details.
        </Reveal>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal className="rounded-2xl bg-[var(--navy)] p-8 text-white text-center sm:rounded-[2rem] sm:p-12">
          <h2 className="text-3xl font-semibold tracking-[-0.06em] sm:text-5xl">Ready to Apply?</h2>
          <p className="mt-4 text-white/70 max-w-lg mx-auto">Admissions are through the Karnataka POLYCET / DTE counseling process. Check eligibility and apply now.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/admissions" style={{ color: "#17255b" }} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium !text-[#17255b] shadow-lg transition hover:scale-[1.02]">
              Admissions Info →
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
