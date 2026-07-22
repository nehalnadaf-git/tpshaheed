import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { programItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Admissions 2026–27",
  description:
    "Apply to TSIT Hubli for 2026–27 diploma admissions. Eligibility: 10th Standard (SSLC) pass. Admission via Karnataka POLYCET / DTE counselling.",
};

const steps = [
  {
    step: "01",
    title: "Appear in POLYCET",
    description:
      "Register and appear in the Karnataka Polytechnic Common Entrance Test (POLYCET) conducted by the DTE Karnataka. Candidates who have passed 10th SSLC are eligible.",
  },
  {
    step: "02",
    title: "DTE Online Counselling",
    description:
      "After POLYCET results, participate in the DTE Karnataka centralized online counselling. Select TSIT and your preferred branch based on your rank and category.",
  },
  {
    step: "03",
    title: "Document Verification",
    description:
      "Submit original documents at the institute for verification: 10th marksheet, category certificate (if applicable), POLYCET rank card, and passport photos.",
  },
  {
    step: "04",
    title: "Fee Payment & Enrollment",
    description:
      "Complete the fee payment at the institute and finalize your enrollment. Receive your student ID and academic schedule to begin your diploma program.",
  },
];

const eligibilityPoints = [
  "Passed 10th Standard (SSLC) or equivalent from a recognized board",
  "Open merit admission — all qualifying students are eligible to apply",
  "Karnataka domicile preferred (as per DTE state reservation norms)",
  "Must appear in POLYCET for merit-based branch allotment",
  "Age limit as per DTE Karnataka norms (generally 14+ years)",
  "12th pass students also eligible under lateral-entry schemes (2nd year direct entry)",
];

const reservations = [
  { category: "General / Unreserved", percentage: "50%", note: "Open merit seats" },
  { category: "Scheduled Caste (SC)", percentage: "15%", note: "Karnataka state norm" },
  { category: "Scheduled Tribe (ST)", percentage: "3%", note: "Karnataka state norm" },
  { category: "OBC Category I (2A)", percentage: "15%", note: "Backward class category" },
  { category: "OBC Category II (2B, 3A, 3B)", percentage: "12%", note: "Backward class categories" },
  { category: "Physically Handicapped (PH)", percentage: "3%", note: "Horizontal reservation" },
  { category: "NCC / Sports / Ex-servicemen", percentage: "Varies", note: "Supernumerary / horizontal" },
];

const scholarships = [
  {
    name: "Post-Metric SC/ST Scholarship",
    by: "Government of Karnataka / GoI",
    amount: "Full fee reimbursement",
    eligibility: "SC/ST students who have passed 10th and are enrolled",
  },
  {
    name: "OBC Pre/Post Metric Scholarship",
    by: "Backward Classes Dept., Karnataka",
    amount: "Partial tuition support",
    eligibility: "OBC Category I & II students",
  },
  {
    name: "Minority Scholarship (Central)",
    by: "Ministry of Minority Affairs, GoI",
    amount: "Up to ₹10,000/year",
    eligibility: "Minority community students with family income < ₹2L/year",
  },
  {
    name: "Pratibha Puraskar (Merit Award)",
    by: "DTE Karnataka",
    amount: "Cash award",
    eligibility: "Top rankers in POLYCET from govt. aided institutes",
  },
];

const documents = [
  "SSLC / 10th Marksheet (Original + copies)",
  "POLYCET Rank Card",
  "Transfer Certificate (TC) from previous school",
  "Income Certificate (if applying for scholarships)",
  "Caste/Category Certificate (SC/ST/OBC/PH)",
  "Migration Certificate (if from outside Karnataka)",
  "Domicile / Residence Certificate",
  "Passport-size photographs (4–6 copies)",
  "Aadhaar Card (student & parent)",
];

export default function AdmissionsPage() {
  return (
    <main className="flex w-full flex-col gap-0 overflow-x-hidden pb-16 lg:pb-24">

      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-blue-50/50 to-white text-zinc-950 border-b border-blue-100">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(186,230,253,0.5),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36">
          <Reveal>
            <p className="text-sm italic font-semibold text-[var(--navy)]/80">Batch 2026–27 · AICTE &amp; DTE Karnataka</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-6xl lg:text-8xl">Admissions Open</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              Join one of 6 AICTE-approved diploma engineering programs at TSIT Hubli. Admission via Karnataka POLYCET / DTE counselling.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#process" style={{ color: "#ffffff", backgroundColor: "#17255b" }} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-8 py-3 text-sm font-semibold !text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#111f4f]">
                View Admission Process ↓
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-8 py-3 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-blue-50/50">
                Enquire Now
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Quick Stats Strip ────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 -mt-8 relative z-20">
        <div className="grid gap-4 sm:grid-cols-3 rounded-2xl bg-white p-6 shadow-xl border border-zinc-100">
          {[
            { val: "252", sub: "Total Sanctioned Seats" },
            { val: "6 Branches", sub: "AICTE Approved Streams" },
            { val: "10th Pass (SSLC)", sub: "Minimum Entry Requirement" },
          ].map((s) => (
            <div key={s.sub} className="flex flex-col">
              <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400">{s.sub}</p>
              <p className="mt-1 text-3xl font-extrabold text-[var(--navy)]">{s.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Eligibility ──────────────────────────────────────────────────── */}
      <div id="eligibility" className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <Reveal>
            <p className="text-sm italic text-zinc-500">Who Can Apply</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">Eligibility Criteria</h2>
            <p className="mt-4 text-base leading-8 text-zinc-500">TSIT&apos;s diploma programs are open to all students who have completed the 10th standard from any recognized board.</p>
            <ul className="mt-6 space-y-3">
              {eligibilityPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-sm text-zinc-700">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 text-[10px] font-bold">✓</span>
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Available Seats */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-zinc-100 p-6 sm:rounded-[1.5rem] sm:p-8">
              <h3 className="text-xl font-semibold tracking-[-0.04em]">Available Seats (2026–27)</h3>
              <div className="mt-5 space-y-3">
                {programItems.map((p) => (
                  <div key={p.number} className="flex items-center justify-between border-b border-zinc-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-zinc-800">{p.title}</span>
                    <span className="rounded-full bg-[var(--navy)]/10 text-[var(--navy)] px-3 py-0.5 text-xs font-semibold">{p.seats}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t-2 border-zinc-200 pt-3 mt-2">
                  <span className="font-semibold text-zinc-900">Total Intake</span>
                  <span className="rounded-full bg-[var(--navy)] text-white px-4 py-1 text-sm font-semibold">252 Seats</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Admission Process ────────────────────────────────────────────── */}
      <div id="process" className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal>
          <p className="text-sm italic text-zinc-500">Step by Step</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">How to Apply</h2>
          <p className="mt-4 text-base leading-8 text-zinc-500 max-w-xl">Admissions are processed through the Karnataka DTE centralized counselling system via POLYCET scores.</p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Reveal key={s.step} delay={Number(s.step) * 0.06}>
              <div className="rounded-2xl border border-zinc-100 p-6 h-full flex flex-col sm:rounded-[1.5rem]">
                <div className="text-3xl font-semibold text-[var(--accent)] tracking-[-0.06em]">{s.step}</div>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.04em]">{s.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-500 flex-1">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>



      {/* ── Reservation ──────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal>
          <p className="text-sm italic text-zinc-500">Government Norms</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">Reservation Policy</h2>
          <p className="mt-4 text-base text-zinc-500 max-w-lg">TSIT follows Karnataka state government reservation norms for seat allotment through DTE counselling.</p>
        </Reveal>

        <div className="mt-8 grid gap-3 max-w-3xl">
          {reservations.map((r) => (
            <div key={r.category} className="flex items-center justify-between gap-3 rounded-xl border border-zinc-100 px-4 py-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-zinc-800 leading-snug">{r.category}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{r.note}</p>
              </div>
              <span className="flex-shrink-0 rounded-full bg-zinc-100 px-3 py-0.5 text-xs font-semibold text-zinc-700">{r.percentage}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scholarships ─────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal>
          <p className="text-sm italic text-zinc-500">Financial Aid</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">Scholarships Available</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {scholarships.map((s) => (
            <Reveal key={s.name}>
              <div className="rounded-2xl border border-zinc-100 p-6 sm:rounded-[1.5rem]">
                <h3 className="text-base font-semibold text-zinc-900">{s.name}</h3>
                <p className="mt-1 text-xs text-[var(--accent)] font-medium">{s.by}</p>
                <div className="mt-3 space-y-1.5 text-sm">
                  <p className="text-zinc-600"><strong className="text-zinc-800">Amount:</strong> {s.amount}</p>
                  <p className="text-zinc-600"><strong className="text-zinc-800">For:</strong> {s.eligibility}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Documents Required ───────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal>
          <p className="text-sm italic text-zinc-500">Checklist</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">Documents Required</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            {documents.map((doc) => (
              <div key={doc} className="flex items-center gap-3 rounded-xl border border-zinc-100 px-4 py-3 text-sm text-zinc-700">
                <span className="text-[var(--navy)] font-bold">→</span>
                {doc}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal className="rounded-2xl bg-[var(--navy)] p-8 text-white text-center sm:rounded-[2rem] sm:p-12">
          <h2 className="text-3xl font-semibold tracking-[-0.06em] sm:text-5xl">Questions About Admissions?</h2>
          <p className="mt-4 text-white/70 max-w-lg mx-auto">Our admissions team is happy to help with eligibility, scholarship, or program queries.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact" style={{ color: "#17255b" }} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium !text-[#17255b] shadow-lg transition hover:scale-[1.02]">
              Contact Admissions →
            </Link>
            <Link href="/programs" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              View Programs
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
