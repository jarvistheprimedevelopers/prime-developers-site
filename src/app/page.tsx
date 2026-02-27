import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { StatsStrip } from "@/components/StatsStrip";

const PHONE_DISPLAY = "(437) 669-1543";
const PHONE_TEL = "+14376691543";
const EMAIL = "info@theprimedevelopers.ca";

// TODO: replace with Calendly link when you have it
const CONSULT_URL = "#contact";

const BRAND = {
  name: "The Prime Developers",
  heroHeadline: "Building Value Through Development & Strategic Property Management",
  heroSub:
    "Full-service turnover, renovation, and capital improvement execution for multi-unit residential and commercial assets across the GTA.",
  tagline: "Any problem. Any timeline. Any scale.",
};

const stats = [
  { value: "1000+", label: "UNITS SERVICED" },
  { value: "3500+", label: "PROJECTS COMPLETED" },
  { value: "3", label: "YEARS OPERATING" },
  { value: "7", label: "PM PARTNERS" },
];

const services = [
  {
    title: "Unit Turnovers",
    desc: "Rent-ready execution at speed: scope, schedule, trades, and final punch — delivered clean.",
  },
  {
    title: "Renovation & Capital Improvements",
    desc: "Kitchens, bathrooms, flooring, paint, tile, and common-area upgrades with tight control and quality.",
  },
  {
    title: "Emergency Maintenance",
    desc: "Rapid stabilization and repair for urgent issues to protect the asset and reduce downtime.",
  },
  {
    title: "Insurance Claim Support",
    desc: "Documentation and repair execution aligned to the claim process — clear communication throughout.",
  },
  {
    title: "Maintenance Coordination",
    desc: "Field-level execution partner for PM teams: triage, dispatch, close-out documentation.",
  },
  {
    title: "Multi-Unit Upgrades",
    desc: "Repeatable upgrades across buildings: fixtures, finishes, and standardized scope packages.",
  },
];

const portfolio = [
  { src: "/projects/kitchen-1.png", title: "Kitchen Renovation", meta: "Renovation" },
  { src: "/projects/kitchen-2.png", title: "Kitchen Remodel", meta: "Turnover" },
  { src: "/projects/kitchen-3.png", title: "Modern Kitchen", meta: "Capital Improvement" },
  { src: "/projects/bathroom-1.png", title: "Bathroom Upgrade", meta: "Renovation" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* HERO (Insight-style: background video + overlay) */}
      <header className="pd-hero relative overflow-hidden">
        <video
          className="pd-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          {/*
            Add your file here:
            prime-developers-site/public/hero.mp4
          */}
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="pd-hero-overlay" />

        <div className="pd-container relative z-10 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="pd-pill">HAMILTON-BASED • SERVING THE GTA</div>
            <h1 className="mt-7 text-4xl font-extrabold tracking-tight sm:text-6xl">
              {BRAND.heroHeadline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed pd-muted">
              {BRAND.heroSub}
            </p>
            <p
              className="mt-6 text-sm font-extrabold tracking-widest"
              style={{ color: "var(--accent-ink)" }}
            >
              {BRAND.tagline.toUpperCase()}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="pd-btn pd-btn-primary" href={CONSULT_URL}>
                View Portfolio
              </a>
              <a className="pd-btn pd-btn-ghost" href={CONSULT_URL}>
                Request Consultation
              </a>
            </div>
          </div>

          <div className="mt-14">
            <div className="pd-stats-strip">
              <StatsStrip stats={stats} />
            </div>
          </div>
        </div>
      </header>

      <div className="section-line" />

      {/* SERVICES */}
      <section className="pd-container py-16" id="services">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-extrabold tracking-widest" style={{ color: "var(--accent-ink)" }}>
              SERVICES
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
              Portfolio-grade execution
            </h2>
            <p className="mt-2 max-w-2xl pd-muted">
              We operate as a field-level execution partner for property managers and developers —
              standardized scope, clean close-out, predictable timelines.
            </p>
          </div>
          <Link className="pd-btn pd-btn-primary" href="/services">
            See all services
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="pd-card p-7">
              <div className="text-lg font-extrabold">{s.title}</div>
              <p className="mt-3 text-sm leading-relaxed pd-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-line" />

      {/* PORTFOLIO PREVIEW */}
      <section className="pd-container py-16" id="portfolio">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-extrabold tracking-widest" style={{ color: "var(--accent-ink)" }}>
              PORTFOLIO
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Featured work</h2>
            <p className="mt-2 max-w-2xl pd-muted">
              Renovations, turnovers, and capital upgrades — executed with consistency.
            </p>
          </div>
          <Link className="pd-btn pd-btn-ghost" href="/portfolio">
            View all projects
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((p) => (
            <div key={p.src} className="port-card">
              <div className="relative h-[220px] w-full">
                <Image src={p.src} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="text-xs font-extrabold tracking-widest" style={{ color: "var(--accent-ink)" }}>
                  {p.meta}
                </div>
                <div className="mt-1 text-sm font-extrabold">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-line" />

      {/* CONTACT */}
      <section className="pd-container py-16" id="contact">
        <div className="pd-card-solid p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-extrabold tracking-widest" style={{ color: "var(--accent-ink)" }}>
                REQUEST CONSULTATION
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                Let’s scope your next turnover or upgrade.
              </h2>
              <p className="mt-3 pd-muted">
                Call for urgent issues, or email details for a scoped plan.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a className="pd-btn pd-btn-primary" href={`tel:${PHONE_TEL}`}>
                  Call: {PHONE_DISPLAY}
                </a>
                <a className="pd-btn pd-btn-ghost" href={`mailto:${EMAIL}`}>
                  Email: {EMAIL}
                </a>
              </div>
              <p className="mt-6 text-xs font-extrabold tracking-widest pd-muted2">
                SERVICE AREA: GTA (HAMILTON • BURLINGTON • OAKVILLE • NIAGARA • CAMBRIDGE)
              </p>
            </div>

            <div className="pd-card p-6">
              <div className="text-sm font-extrabold">What to include</div>
              <ul className="mt-3 space-y-2 text-sm pd-muted">
                <li>• Property address / building</li>
                <li>• Unit count (if multi-unit)</li>
                <li>• Timeline / target rent-ready date</li>
                <li>• Scope (turnover / renovation / emergency)</li>
                <li>• Photos / inspection notes</li>
              </ul>
              <div className="mt-6">
                <a className="pd-btn pd-btn-primary w-full" href={`mailto:${EMAIL}?subject=Consultation%20Request%20-%20Prime%20Developers`}>
                  Email scope now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="pd-container py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-extrabold tracking-wider">{BRAND.name.toUpperCase()}</div>
              <div className="mt-1 text-xs pd-muted2">
                Hamilton-based execution partner • Serving the GTA
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm sm:items-end">
              <a className="font-bold pd-muted hover:opacity-90" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
              <a className="font-bold pd-muted hover:opacity-90" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="mt-8 text-xs pd-muted2">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
