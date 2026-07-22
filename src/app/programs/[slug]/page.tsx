import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { programItems } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programItems.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programItems.find((p) => p.slug === slug);
  if (!program) return { title: "Program Not Found" };

  return {
    title: `${program.title} - Diploma Course | TSIT Hubli`,
    description: `Official AICTE approved & DTE Karnataka affiliated 3-Year Diploma in ${program.title} at Tippu Shaheed Institute of Technology, Hubli. Check syllabus, eligibility, lab facilities, and career paths.`,
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = programItems.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const otherPrograms = programItems.filter((p) => p.slug !== slug);

  return (
    <main className="flex w-full flex-col gap-0 overflow-x-hidden pb-16 lg:pb-24">
      {/* ── Breadcrumb & Hero Section ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-blue-50/50 to-white text-zinc-950 border-b border-blue-100">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(186,230,253,0.5),transparent_65%)]" />
        
        <div className="relative mx-auto max-w-[1500px] px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:px-10 lg:pt-20 lg:pb-28">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-zinc-500 sm:text-sm">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-zinc-900 transition-colors">Programs</Link>
            <span>/</span>
            <span className="text-[var(--navy)] font-semibold">{program.title}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <Reveal>
              <p className="text-sm italic font-semibold text-[var(--navy)]/80">{program.code} · {program.seats} Approved Intake</p>
              
              <h1 className="mt-3 text-5xl font-semibold tracking-[-0.07em] text-zinc-950 sm:text-7xl lg:text-8xl">
                Diploma in {program.title}
              </h1>

              <p className="mt-4 text-sm font-semibold text-[var(--navy)] sm:text-base leading-relaxed">
                {program.affiliation}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
                {program.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/admissions"
                  style={{ color: "#ffffff", backgroundColor: "#17255b" }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-7 py-3 text-sm font-semibold !text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#111f4f]"
                >
                  Apply for Admissions →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-7 py-3 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-blue-50/50"
                >
                  Enquire Now
                </Link>
              </div>
            </Reveal>

            {/* Main Program Image */}
            <Reveal className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-2xl">
              <Image
                src={program.image}
                alt={program.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/20">
                ⚡ Departmental practical training and hands-on laboratory work at TSIT Hubli
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Key Highlights Strip ─────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 -mt-8 relative z-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-white p-6 shadow-xl border border-zinc-100">
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Duration</p>
            <p className="mt-1 text-base font-semibold text-zinc-900">{program.duration}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Approved Intake</p>
            <p className="mt-1 text-base font-semibold text-[var(--navy)]">{program.seats}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Affiliation</p>
            <p className="mt-1 text-xs font-medium text-zinc-700">DTE Karnataka / AICTE New Delhi</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Eligibility</p>
            <p className="mt-1 text-xs font-medium text-zinc-700">Pass in 10th (SSLC) with min 35%</p>
          </div>
        </div>
      </div>

      {/* ── Program Overview & Authentic Details ────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
          {/* Main Content Column */}
          <div className="flex flex-col gap-12">
            {/* Overview */}
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-zinc-900 sm:text-4xl">
                Program Overview &amp; Curriculum Design
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-600 sm:text-lg sm:leading-8">
                {program.overview}
              </p>
            </Reveal>

            {/* Eligibility & Admission Standards */}
            <Reveal className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                📋 Official Admission Eligibility &amp; Criteria
              </h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-700">
                <p><strong>Minimum Requirement:</strong> {program.eligibility}</p>
                <p><strong>Admission Process:</strong> Admissions are conducted as per the Directorate of Technical Education (DTE), Government of Karnataka norms through Centralised Counselling &amp; Management Quota.</p>
                <p className="text-xs text-zinc-500 mt-1">
                  * Reserved category candidates (SC/ST/OBC) in Karnataka receive fee concessions and scholarship benefits as per state government rules.
                </p>
              </div>
            </Reveal>

            {/* Semester Wise Course Curriculum */}
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-zinc-900 sm:text-4xl mb-6">
                Semester-by-Semester Curriculum Breakdown (DTE C-20)
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {program.semesters.map((s) => (
                  <div key={s.sem} className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                    <span className="rounded-full bg-[var(--navy)]/10 text-[var(--navy)] px-3 py-1 text-xs font-semibold">
                      {s.sem}
                    </span>
                    <ul className="mt-3 flex flex-col gap-2 text-xs text-zinc-600">
                      {s.courses.map((course) => (
                        <li key={course} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Department Laboratories & Infrastructure */}
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-zinc-900 sm:text-4xl mb-6">
                Departmental Laboratories &amp; Practical Infrastructure
              </h2>
              <div className="grid gap-3">
                {program.labs.map((lab, index) => (
                  <div key={lab} className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-white p-4 text-sm text-zinc-800 shadow-sm">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="font-medium leading-relaxed">{lab}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Lateral Entry (DCET) & Career Opportunities */}
            <Reveal className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                🚀 Higher Education &amp; Lateral Entry (Karnataka DCET)
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700">
                {program.lateralEntry}
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">🏛️ Public &amp; Govt Sector Recruiters</h4>
                  <ul className="flex flex-col gap-1.5 text-xs text-zinc-700">
                    {program.governmentJobs.map((job) => (
                      <li key={job} className="flex items-center gap-1.5">
                        <span className="text-amber-600">✓</span> {job}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">🏢 Private Industry &amp; MNC Opportunities</h4>
                  <ul className="flex flex-col gap-1.5 text-xs text-zinc-700">
                    {program.privateJobs.map((job) => (
                      <li key={job} className="flex items-center gap-1.5">
                        <span className="text-amber-600">✓</span> {job}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sidebar Section */}
          <aside className="flex flex-col gap-6 sticky top-24">
            {/* Quick Summary Card */}
            <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-zinc-900 border-b border-zinc-100 pb-3">
                Course Key Highlights
              </h3>
              <div className="mt-4 flex flex-col gap-3.5 text-xs text-zinc-600">
                <div className="flex justify-between py-1 border-b border-zinc-50">
                  <span className="text-zinc-400">Stream Code</span>
                  <span className="font-semibold text-zinc-900">{program.code.split(":")[1]?.trim()}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-50">
                  <span className="text-zinc-400">Total Semesters</span>
                  <span className="font-semibold text-zinc-900">6 Semesters (3 Years)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-50">
                  <span className="text-zinc-400">Total Sanctioned Intake</span>
                  <span className="font-semibold text-zinc-900">{program.seats}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-50">
                  <span className="text-zinc-400">Approval Authority</span>
                  <span className="font-semibold text-zinc-900">AICTE New Delhi</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-50">
                  <span className="text-zinc-400">Affiliation Board</span>
                  <span className="font-semibold text-zinc-900">DTE Karnataka</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <Link
                  href="/admissions"
                  style={{ color: "#ffffff", backgroundColor: "#17255b" }}
                  className="w-full text-center rounded-xl bg-[var(--navy)] py-3 text-xs font-semibold !text-white shadow transition hover:bg-[#111f4f]"
                >
                  Admissions Information →
                </Link>
                <Link
                  href="/contact"
                  className="w-full text-center rounded-xl border border-zinc-200 py-3 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50"
                >
                  Contact Admissions Office
                </Link>
              </div>
            </div>

            {/* Other Programs Navigation */}
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-6">
              <h4 className="text-sm font-semibold text-zinc-900 mb-3">Explore Other Diploma Branches</h4>
              <div className="flex flex-col gap-2">
                {otherPrograms.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/programs/${p.slug}`}
                    className="flex items-center justify-between rounded-xl bg-white p-3 text-xs font-medium text-zinc-800 shadow-sm border border-zinc-100 hover:border-zinc-300 transition-colors"
                  >
                    <span>{p.title}</span>
                    <span className="text-zinc-400">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
