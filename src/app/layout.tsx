import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryButton from "@/components/InquiryButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.tippushaheedpolytechnic.com";

export const metadata: Metadata = {
  title: {
    default: "Tippu Shaheed Institute of Technology, Hubli | AICTE Approved Polytechnic",
    template: "%s | TSIT Hubli",
  },
  description:
    "Tippu Shaheed Institute of Technology (TSIT) is an AICTE-approved aided polytechnic in Hubli, Karnataka. Offering 6 diploma engineering programs since 1980.",
  keywords: ["TSIT", "Tippu Shaheed", "Polytechnic Hubli", "AICTE Diploma", "DTE Karnataka", "Engineering Diploma Hubli"],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tippu Shaheed Institute of Technology, Hubli",
    description: "AICTE-approved aided polytechnic in Hubli offering 6 diploma engineering programs since 1980.",
    url: SITE_URL,
    siteName: "TSIT Hubli",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tippu Shaheed Institute of Technology campus in Hubli, Karnataka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tippu Shaheed Institute of Technology, Hubli",
    description: "AICTE-approved aided polytechnic in Hubli offering 6 diploma engineering programs since 1980.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Tippu Shaheed",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-950">
        {/* Skip to main content — visible on keyboard focus only */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-xl focus:bg-[var(--navy)] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Tippu Shaheed Institute of Technology",
              alternateName: "TSIT Hubli",
              url: SITE_URL,
              logo: `${SITE_URL}/images/Logo.png`,
              description: "AICTE-approved aided polytechnic in Hubli, Karnataka offering 6 diploma engineering programs.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Simla Nagar, Cite Plots, Dever Gudihal Road",
                addressLocality: "Hubli",
                addressRegion: "Karnataka",
                postalCode: "580024",
                addressCountry: "IN",
              },
              telephone: "+91-836-220-5697",
              email: "principal@tippushaheedpolytechnic.com",
              foundingDate: "1980",
              sameAs: ["https://instagram.com/tippushaheedpolytechnic", "https://dtek.karnataka.gov.in"],
            }),
          }}
        />

        <Header />
        <div id="main-content" className="flex-1">{children}</div>
        <Footer />
        <InquiryButton />
      </body>
    </html>
  );
}
