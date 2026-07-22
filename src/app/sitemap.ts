import type { MetadataRoute } from "next";
const BASE = "https://www.tippushaheedpolytechnic.com";
const slugs = [
  "electronics-communication",
  "computer-science",
  "electrical-engineering",
  "civil-engineering",
  "mechanical-engineering",
  "automobile-engineering",
];
export default function sitemap(): MetadataRoute.Sitemap {
  const fixed: MetadataRoute.Sitemap = [
    { url: BASE,                     lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: BASE + "/about",          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.8 },
    { url: BASE + "/programs",       lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/admissions",     lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: BASE + "/facilities",     lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: BASE + "/why-choose-us",  lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: BASE + "/news",           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: BASE + "/contact",        lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
  ];
  const progs: MetadataRoute.Sitemap = slugs.map((s) => ({
    url: BASE + "/programs/" + s,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));
  return [...fixed, ...progs];
}
