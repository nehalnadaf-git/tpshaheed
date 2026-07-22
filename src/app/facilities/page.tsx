import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Campus Facilities",
  description:
    "Explore the campus facilities at TSIT Hubli — library with 5,000+ books, modern engineering labs, auditorium, sports grounds, cafeteria, medical care, and a 6-acre green campus.",
};

const facilities = [
  {
    type: "library",
    label: "Library",
    headline: "5,000+ Books & Technical Journals",
    description:
      "A well-stocked library with over 5,000 books and technical journals covering all six diploma engineering disciplines. Open to students and faculty throughout the academic day.",
    details: ["5,000+ technical books", "Engineering journals & periodicals", "Reference section & reading rooms", "Exam preparation resources"],
    image: "/images/library.webp",
  },
  {
    type: "computer",
    label: "Computer Labs",
    headline: "Modern Computing Infrastructure",
    description:
      "Fully equipped computer labs with internet connectivity, supporting CSE, Electronics, and all other diploma branches in programming, networking, and digital design.",
    details: ["Latest desktop computers", "High-speed internet access", "Programming & simulation software", "Networking lab setup"],
    image: "/images/computer-lab.webp",
  },
  {
    type: "engineering",
    label: "Engineering Labs",
    headline: "Hands-On Departmental Laboratories",
    description:
      "Specialized labs for Electronics, Electrical, Mechanical, Civil, and Automobile engineering — with testing equipment, circuit benches, and workshop tools.",
    details: ["Electronics circuit testing benches", "Electrical machines lab", "Mechanical workshop & CNC area", "Civil materials testing lab", "Automobile servicing bay"],
    image: "/images/engineering-labs.webp",
  },
  {
    type: "auditorium",
    label: "Auditorium",
    headline: "Multipurpose Auditorium & Seminar Hall",
    description:
      "A large multipurpose auditorium used for Annual Day celebrations, seminars, cultural fests (Techno-Management Fest), and industry interaction sessions.",
    details: ["Large seating capacity", "Stage with AV equipment", "Cultural & technical events", "Industry guest lectures"],
    image: "/images/auditorium.webp",
  },
  {
    type: "sports",
    label: "Sports Grounds",
    headline: "Outdoor & Indoor Sports Facilities",
    description:
      "Dedicated sports grounds for cricket, volleyball, basketball, and athletics. TSIT teams compete at district-level inter-polytechnic tournaments each year.",
    details: ["Cricket & volleyball grounds", "Basketball court", "Athletics track area", "District tournament participation"],
    image: "/images/sports-grounds.webp",
  },
  {
    type: "cafeteria",
    label: "Cafeteria",
    headline: "Clean Campus Dining & Refreshments",
    description:
      "A hygienic campus cafeteria serving fresh meals, snacks, and beverages for students, faculty, and visitors throughout the academic day.",
    details: ["Affordable vegetarian meals", "Snacks & beverages", "Hygienic preparation standards", "Open to all students & staff"],
    image: "/images/cafeteria.webp",
  },
  {
    type: "medical",
    label: "Medical Care",
    headline: "On-Campus First Aid & Infirmary",
    description:
      "Basic health facilities and first aid support for students and staff. Emergency medical assistance is available on campus.",
    details: ["First aid kits & trained staff", "Emergency medical support", "Health awareness programs", "Student welfare committee"],
    image: "/images/medical.webp",
  },
  {
    type: "campus",
    label: "Campus Grounds",
    headline: "6-Acre Green Campus in Simla Nagar",
    description:
      "A serene, green, and spacious 6-acre campus located at Simla Nagar, Hubli — behind Siddarudh Math, near the old Hubli bypass road.",
    details: ["6-acre campus area", "Green open spaces", "Simla Nagar, Hubli – 580024", "Accessible by KSRTC bus"],
    image: "/images/campus-grounds.webp",
  },
];

const campusStats = [
  { value: "6 Acres", label: "Campus Area" },
  { value: "5,000+", label: "Library Books" },
  { value: "8+", label: "Facility Types" },
  { value: "1980", label: "Year Established" },
];

export default function FacilitiesPage() {
  return (
    <main className="flex w-full flex-col gap-0 overflow-x-hidden pb-16 lg:pb-24">

      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-blue-50/50 to-white text-zinc-950 border-b border-blue-100">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(186,230,253,0.5),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36">
          <Reveal>
            <p className="text-sm italic font-semibold text-[var(--navy)]/80">Simla Nagar, Hubli · 6-Acre Green Campus</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-6xl lg:text-8xl">Campus Facilities</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              A 6-acre green campus with state-of-the-art engineering laboratories, library with 5,000+ books, multipurpose auditorium, sports grounds, cafeteria, and student medical care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Campus Stats Strip ───────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 -mt-8 relative z-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-white p-6 shadow-xl border border-zinc-100">
          {campusStats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400">{stat.label}</p>
              <p className="mt-1 text-3xl font-extrabold text-[var(--navy)]">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Facilities List ──────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal>
          <p className="text-sm italic text-zinc-500">Everything You Need</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">World-Class Facilities</h2>
        </Reveal>

        <div className="mt-12 space-y-16 sm:mt-16 lg:mt-20">
          {facilities.map((fac, i) => (
            <Reveal key={fac.label} delay={0.05}>
              <div className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""}`}>
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem]" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={fac.image}
                    alt={fac.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[var(--navy)]">
                      {fac.type === "library" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                      {fac.type === "computer" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {fac.type === "engineering" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      )}
                      {fac.type === "auditorium" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                        </svg>
                      )}
                      {fac.type === "sports" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
                        </svg>
                      )}
                      {fac.type === "cafeteria" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v3m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                        </svg>
                      )}
                      {fac.type === "medical" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v7m-3.5-3.5h7" />
                        </svg>
                      )}
                      {fac.type === "campus" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4.5v9L12 21L4 16.5v-9L12 3z" />
                        </svg>
                      )}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">{fac.label}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl lg:text-4xl">{fac.headline}</h3>
                  <p className="mt-4 text-base leading-8 text-zinc-500">{fac.description}</p>
                  <ul className="mt-5 space-y-2">
                    {fac.details.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-sm text-zinc-600">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 text-[10px]">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Location ─────────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal>
          <p className="text-sm italic text-zinc-500">How to Reach Us</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">Campus Location</h2>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <Reveal delay={0.05}>
            <div className="space-y-4 text-sm text-zinc-600">
              <div className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-[var(--navy)] flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div><strong className="text-zinc-900 block">Address</strong>Simla Nagar, Cite Plots, Dever Gudihal Road (Behind Siddarudh Math), Hubli – 580024, Dharwad District, Karnataka</div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-[var(--navy)] flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div><strong className="text-zinc-900 block">Phone</strong>+91-836-220-5697</div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-[var(--navy)] flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div><strong className="text-zinc-900 block">Email</strong>principal@tippushaheedpolytechnic.com</div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-[var(--navy)] flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V3m0 18a9 9 0 040-18m0 0a9 9 0 010 18M12 3a9.004 9.004 0 00-8.716 6.747M12 3a9.004 9.004 0 018.716 6.747" />
                  </svg>
                </span>
                <div><strong className="text-zinc-900 block">GPS Coordinates</strong>Approx. 15.333°N, 75.109°E</div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-[var(--navy)] flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </span>
                <div><strong className="text-zinc-900 block">Transit Support</strong>KSRTC city buses and auto-rickshaws serve the Simla Nagar area from Hubli main bus stand.</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {/* Map embed */}
            <div className="overflow-hidden rounded-2xl border border-zinc-100 shadow-sm sm:rounded-[1.5rem]" style={{ aspectRatio: "16/9" }}>
              <iframe
                title="TSIT Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.123456789!2d75.109!3d15.333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIwJzAwLjAiTiA3NcKwMDYnMzIuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal className="rounded-2xl bg-[var(--navy)] p-8 text-white text-center sm:rounded-[2rem] sm:p-12">
          <h2 className="text-3xl font-semibold tracking-[-0.06em] sm:text-5xl">Visit Our Campus</h2>
          <p className="mt-4 text-white/70 max-w-lg mx-auto">Interested in experiencing the TSIT campus firsthand? Reach out to schedule a campus visit or learn about admissions.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact" style={{ color: "#17255b" }} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium !text-[#17255b] shadow-lg transition hover:scale-[1.02]">
              Contact Us →
            </Link>
            <Link href="/admissions" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Apply Now
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
