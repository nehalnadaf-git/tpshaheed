import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  "Explore TSIT": [
    { label: "About TSIT", href: "/about" },
    { label: "History & Campus", href: "/about#history" },
    { label: "Governance", href: "/about#governance" },
    { label: "Facilities", href: "/facilities" },
  ],
  "Study With Us": [
    { label: "All Programs", href: "/programs" },
    { label: "Eligibility (10th)", href: "/admissions#eligibility" },
    { label: "Fee Structure", href: "/admissions#fees" },
    { label: "State Counseling", href: "/admissions#process" },
  ],
  "Departments": [
    { label: "Electronics & Comm.", href: "/programs" },
    { label: "Computer Science", href: "/programs" },
    { label: "Electrical Engg.", href: "/programs" },
    { label: "Civil & Mechanical", href: "/programs" },
  ],
  "Connect": [
    { label: "Contact Us", href: "/contact" },
    { label: "Placement Cell", href: "/about#placement" },
    { label: "Instagram ↗", href: "https://instagram.com/tippushaheedpolytechnic" },
    { label: "DTE Portal ↗", href: "https://dtek.karnataka.gov.in" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#0a0a0c] text-white overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-5 pt-12 pb-0 sm:px-10 sm:pt-16 lg:px-14 lg:pt-20">

        {/* Top Row: Crest Logo + 4 Link Columns */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">

          {/* Left: University Crest Emblem */}
          <div className="flex flex-col items-start justify-start">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/images/Logo.png"
                alt="TSIT Emblem"
                width={140}
                height={140}
                className="h-24 w-auto object-contain sm:h-32 lg:h-36 filter drop-shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="leading-[1.15]">
                <div className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-[var(--accent)] sm:text-xs">
                  POLYTECHNIC
                </div>
                <div className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Tippu Shaheed
                </div>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-zinc-400 sm:text-sm sm:leading-relaxed">
              Established 1980 · Government-Aided Polytechnic in Hubli, Karnataka. AICTE Approved &amp; DTE Affiliated.
            </p>
          </div>

          {/* Right: 4 Column Navigation Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="mb-4 text-base font-semibold tracking-tight text-white sm:text-lg">{heading}</h3>
                <ul className="space-y-2.5 text-sm text-zinc-400">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="transition-colors hover:text-white">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright & Accreditation Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-zinc-400 text-center sm:flex-row sm:text-left">
          <span className="leading-relaxed">© {new Date().getFullYear()} Tippu Shaheed Institute of Technology, Hubli. All rights reserved.</span>
          <span className="leading-relaxed text-zinc-300 font-medium">Approved by AICTE · Affiliated to DTE Karnataka</span>
        </div>
      </div>

      {/* Giant Brand Watermark */}
      <div className="w-full select-none pointer-events-none pt-4 pb-10 sm:pb-14 lg:pb-16 text-center overflow-hidden">
        <p
          className="font-semibold tracking-[-0.07em] text-white leading-tight block w-full px-2"
          style={{ fontSize: "clamp(38px, 11.5vw, 220px)" }}
        >
          Tippu Shaheed
        </p>
      </div>
    </footer>
  );
}
