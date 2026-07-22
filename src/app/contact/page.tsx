// Contact page — Server Component (metadata can be exported)
// The interactive form state lives in <ContactFormSection> below (client component).
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactFormSection from "./ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tippu Shaheed Institute of Technology, Hubli. Address: Simla Nagar, Hubli – 580024. Phone: +91-836-220-5697. Email: principal@tippushaheedpolytechnic.com.",
};

const contactCards = [
  {
    type: "address",
    title: "Address",
    lines: [
      "Simla Nagar, Cite Plots,",
      "Dever Gudihal Road",
      "(Behind Siddarudh Math)",
      "Hubli – 580024",
      "Dharwad Dist., Karnataka",
    ],
  },
  {
    type: "phone",
    title: "Phone",
    lines: ["+91-836-220-5697", "Mon – Sat: 9:00 AM – 5:00 PM"],
  },
  {
    type: "email",
    title: "Email",
    lines: ["principal@tippushaheedpolytechnic.com", "Typically responds within 2 working days"],
  },
  {
    type: "instagram",
    title: "Instagram",
    lines: ["@tippushaheedpolytechnic"],
    link: "https://instagram.com/tippushaheedpolytechnic",
  },
];

export default function ContactPage() {
  return (
    <main className="flex w-full flex-col gap-0 overflow-x-hidden pb-16 lg:pb-24">

      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-blue-50/50 to-white text-zinc-950 border-b border-blue-100">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_right,rgba(186,230,253,0.5),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36">
          <Reveal>
            <p className="text-sm italic font-semibold text-[var(--navy)]/80">Simla Nagar, Hubli · Always Here to Help</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-6xl lg:text-8xl">Contact Us</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              Whether you have questions about admissions, programs, or campus visits — reach out and we&apos;ll get back to you promptly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Main Content: Form + Info ────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">

          {/* Contact Info Cards */}
          <div>
            <Reveal>
              <p className="text-sm italic text-zinc-500">Reach Us</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">Get In Touch</h2>
              <p className="mt-4 text-base leading-8 text-zinc-500 max-w-md">
                For admissions enquiries, campus visits, or any general information about our programs, contact us at the details below.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((card) => (
                <Reveal key={card.title}>
                  <div className="rounded-2xl border border-zinc-100 p-5 sm:rounded-[1.5rem] sm:p-6 hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[var(--navy)]">
                        {card.type === "address" && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                        {card.type === "phone" && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        )}
                        {card.type === "email" && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {card.type === "instagram" && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        )}
                      </span>
                      <h3 className="font-semibold text-zinc-900">{card.title}</h3>
                    </div>
                    {card.link ? (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--navy)] hover:underline"
                      >
                        {card.lines[0]}
                      </a>
                    ) : (
                      <div className="space-y-0.5">
                        {card.lines.map((line, i) => (
                          <p key={i} className={`text-sm break-all ${i === 0 ? "font-medium text-zinc-800" : "text-zinc-500"}`}>{line}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Office Hours */}
            <Reveal delay={0.1}>
              <div className="mt-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-5 sm:rounded-[1.5rem] sm:p-6">
                <h3 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-200/50 text-[var(--navy)]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    ["Monday – Friday", "9:00 AM – 5:00 PM"],
                    ["Saturday", "9:00 AM – 1:00 PM"],
                    ["Sunday & Holidays", "Closed"],
                  ].map(([day, time]) => (
                    <div key={day} className="flex justify-between border-b border-zinc-100 pb-2 last:border-0 last:pb-0">
                      <span className="text-zinc-600">{day}</span>
                      <span className="font-medium text-zinc-800">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Form — client island */}
          <ContactFormSection />
        </div>
      </div>

      {/* ── Map Section ──────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal>
          <p className="text-sm italic text-zinc-500">Find Us</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">Campus Map</h2>
          <p className="mt-3 text-sm text-zinc-500">Simla Nagar, Hubli — Behind Siddarudh Math, near old bypass road. Easily accessible by KSRTC bus and auto-rickshaw.</p>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-zinc-100 shadow-sm sm:rounded-[2rem]" style={{ height: "clamp(280px, 42vw, 520px)" }}>
            <iframe
              title="TSIT Campus Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.5!2d75.1090!3d15.3330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d739834d96e1%3A0x5aceb6c1f2c7a7f4!2sSimla%20Nagar%2C%20Hubli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
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

      {/* ── Quick Links ──────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-28">
        <Reveal>
          <p className="text-sm italic text-zinc-500">You might also be looking for</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">Quick Links</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { href: "/admissions", label: "Admissions 2026–27", desc: "Eligibility, process, and required documents", icon: "🎓" },
            { href: "/programs", label: "Our Programs", desc: "All 6 AICTE-approved diploma programs", icon: "📘" },
            { href: "/facilities", label: "Campus Facilities", desc: "Library, labs, auditorium, sports & more", icon: "🏗️" },
          ].map((l) => (
            <Reveal key={l.href}>
              <Link href={l.href} className="flex items-start gap-4 rounded-2xl border border-zinc-100 p-5 hover:shadow-md hover:border-zinc-200 transition-all sm:rounded-[1.5rem] sm:p-6 group">
                <span className="text-3xl flex-shrink-0" aria-hidden="true">{l.icon}</span>
                <div>
                  <h3 className="font-semibold text-zinc-900 group-hover:text-[var(--navy)] transition-colors">{l.label}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{l.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
