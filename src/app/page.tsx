import Image from "next/image";

const PHONE_DISPLAY = "(437) 669-1543";
const PHONE_TEL = "+14376691543";
const EMAIL = "info@theprimedevelopers.ca";

// TODO: replace with your real booking / estimate link (Calendly etc.)
const ESTIMATE_URL = "#";

const BRAND = {
  name: "The Prime Developers",
  tagline: "Real Estate Renovation & Emergency Services",
  serviceArea: "Ontario",
  yearsExperience: "7+",
};

const audiences = [
  {
    title: "Property Developers",
    subtitle: "Fast, clean, accountable repairs",
    desc: "Warranty work, punch lists, unit turns, and ongoing maintenance support — done properly and documented.",
  },
  {
    title: "Property Managers",
    subtitle: "Reliable maintenance, fewer headaches",
    desc: "We help keep buildings running with responsive repairs, clear communication, and professional workmanship.",
  },
  {
    title: "Residential Clients",
    subtitle: "Craftsmanship you can trust",
    desc: "From small fixes to full renovations — we show up, do it right, and leave your home clean.",
  },
];

const gallery = [
  {
    src: "/projects/kitchen-1.png",
    title: "Kitchen Renovation",
    tag: "Renovation",
  },
  {
    src: "/projects/kitchen-2.png",
    title: "Kitchen Remodel",
    tag: "Renovation",
  },
  {
    src: "/projects/kitchen-3.png",
    title: "Modern Kitchen",
    tag: "Renovation",
  },
  {
    src: "/projects/bathroom-1.png",
    title: "Bathroom Refresh",
    tag: "Renovation",
  },
];

const services = [
  {
    title: "Renovations",
    desc: "Kitchens, bathrooms, basements, flooring, paint, tile, and more — scoped clearly and executed cleanly.",
  },
  {
    title: "Emergency Service",
    desc: "Urgent repairs to protect the asset and reduce damage. Clear next steps, fast response.",
  },
  {
    title: "Handyman Work",
    desc: "Doors, trim, drywall, fixtures, mounting, repairs — the small jobs that still need to be done right.",
  },
  {
    title: "Insurance Claim Support",
    desc: "We help document, scope, and complete repairs aligned with your claim process.",
  },
  {
    title: "Contractor Coordination",
    desc: "We coordinate trusted trades and keep the schedule moving with accountability.",
  },
];

// Paste 6–10 real review quotes and we’ll replace these placeholders.
const reviews = [
  {
    quote:
      "Professional, honest, and fast. The communication was clear and the work was done right.",
    name: "Client Review",
  },
  {
    quote:
      "They handled an urgent issue and kept everything moving — no excuses, just solutions.",
    name: "Client Review",
  },
  {
    quote:
      "Great workmanship and clean finish. Will definitely use them again.",
    name: "Client Review",
  },
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="pd-card-soft p-4">
      <div className="text-lg font-extrabold" style={{ color: "var(--accent-ink)" }}>
        {value}
      </div>
      <div className="mt-1 text-xs font-bold tracking-widest pd-muted2">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)" }}>
        <div className="pd-container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-24 sm:w-28">
              <Image
                src="/logo.jpg"
                alt="The Prime Developers"
                width={320}
                height={120}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-wider">
                {BRAND.name.toUpperCase()}
              </div>
              <div className="text-xs pd-muted2">
                {BRAND.serviceArea} • {BRAND.tagline}
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a className="text-sm font-semibold pd-muted hover:text-slate-900" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
            <a className="pd-btn pd-btn-accent" href={ESTIMATE_URL}>
              Request an Estimate
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 20% 10%, rgba(183,243,151,0.35), transparent 60%), radial-gradient(700px 450px at 85% 0%, rgba(134,239,172,0.20), transparent 55%)",
          }}
        />

        <div className="pd-container py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="pd-pill">PROUDLY SERVING {BRAND.serviceArea.toUpperCase()}</div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
                Real estate renovations and emergency repairs — handled fast, finished clean.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed pd-muted">
                {BRAND.name} is an Ontario-wide solution company for real estate: renovation,
                emergency service, handyman work, insurance claim support, and contractor
                coordination.
              </p>

              {/* Hero image strip */}
              <div className="mt-8 pd-card overflow-hidden" style={{ borderRadius: "1.75rem" }}>
                <div className="relative h-[220px] w-full sm:h-[260px]">
                  <Image
                    src={gallery[0].src}
                    alt={gallery[0].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="pd-btn pd-btn-primary" href={`tel:${PHONE_TEL}`}>
                  Call Now: {PHONE_DISPLAY}
                </a>
                <a className="pd-btn pd-btn-accent" href={ESTIMATE_URL}>
                  Request an Estimate
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <Stat label="Years Experience" value={`${BRAND.yearsExperience}`} />
                <Stat label="Service Area" value="Ontario" />
                <Stat label="Emergency" value="Response" />
                <Stat label="Quality" value="You Can Trust" />
              </div>
            </div>

            {/* Quick enquiry card */}
            <div className="relative">
              <div className="pd-card p-6 shadow-xl" style={{ boxShadow: "0 30px 80px rgba(15,23,42,0.10)" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-extrabold tracking-widest" style={{ color: "var(--accent-ink)" }}>
                      QUICK ENQUIRY
                    </div>
                    <div className="mt-2 text-2xl font-extrabold">Need help this week?</div>
                    <p className="mt-2 text-sm pd-muted">
                      Call or email the details — we’ll respond with next steps.
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <div
                      className="h-12 w-12 rounded-2xl"
                      style={{ background: "linear-gradient(135deg, var(--accent) 0%, #ffffff 85%)", border: "1px solid rgba(15,23,42,0.12)" }}
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <a className="pd-card-soft px-4 py-3 text-sm font-bold hover:bg-slate-900/5" href={`tel:${PHONE_TEL}`}>
                    Call: {PHONE_DISPLAY}
                  </a>
                  <a className="pd-card-soft px-4 py-3 text-sm font-bold hover:bg-slate-900/5" href={`mailto:${EMAIL}`}>
                    Email: {EMAIL}
                  </a>
                  <a className="pd-btn pd-btn-accent rounded-2xl" href={ESTIMATE_URL}>
                    Estimate Link (add)
                  </a>
                </div>

                <div className="mt-6 pd-card-soft p-4 text-xs pd-muted">
                  <div className="font-extrabold tracking-widest" style={{ color: "var(--accent-ink)" }}>
                    NEXT
                  </div>
                  <p className="mt-2 leading-relaxed">
                    When you create Calendly, paste the link and I’ll wire it into all
                    “Request an Estimate” buttons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About / credibility */}
      <section className="pd-container py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="text-xs font-extrabold tracking-widest" style={{ color: "var(--accent-ink)" }}>
              QUALITY YOU CAN TRUST
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Your partner in real estate repairs and renovations.
            </h2>
            <p className="mt-4 pd-muted leading-relaxed">
              We’re built for speed, communication, and clean finishes. If it’s an
              emergency, we stabilize the problem and give you a clear plan. If it’s a
              renovation, we scope it right and execute it properly.
            </p>
          </div>

          <div className="pd-card p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "Clear Scope", d: "No confusion. We define what’s included and what’s next." },
                { t: "Fast Response", d: "Especially for urgent items — we move quickly." },
                { t: "Clean Finish", d: "We treat it like an asset — not a shortcut job." },
                { t: "Accountability", d: "Updates, photos, and follow-through." },
              ].map((x) => (
                <div key={x.t} className="pd-card-soft p-4">
                  <div className="text-sm font-extrabold">{x.t}</div>
                  <div className="mt-2 text-sm pd-muted">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pd-container py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Services</h2>
        <p className="mt-2 max-w-2xl pd-muted">
          One team to handle the work, coordinate trades, and keep your property moving.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="pd-card p-6 transition hover:-translate-y-1" style={{ boxShadow: "0 18px 55px rgba(15,23,42,0.07)" }}>
              <div className="flex items-center justify-between">
                <div className="text-lg font-extrabold">{s.title}</div>
                <div
                  className="h-10 w-10 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, var(--accent) 0%, #ffffff 85%)", border: "1px solid rgba(15,23,42,0.12)" }}
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed pd-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience blocks */}
      <section className="pd-container py-16">
        <div>
          <div className="text-xs font-extrabold tracking-widest" style={{ color: "var(--accent-ink)" }}>
            SERVING {BRAND.serviceArea.toUpperCase()}
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Who we work with</h2>
          <p className="mt-2 max-w-2xl pd-muted">
            Developers, property managers, and homeowners — one standard: do it right.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="pd-card p-6">
              <div className="text-lg font-extrabold">{a.title}</div>
              <div className="mt-2 text-sm font-bold" style={{ color: "var(--accent-ink)" }}>
                {a.subtitle}
              </div>
              <p className="mt-3 text-sm leading-relaxed pd-muted">{a.desc}</p>
              <div className="mt-6">
                <a className="pd-btn pd-btn-accent" href={ESTIMATE_URL}>
                  Request an Estimate
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="pd-container py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-extrabold tracking-widest" style={{ color: "var(--accent-ink)" }}>
              RECENT WORK
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Project Gallery</h2>
            <p className="mt-2 max-w-2xl pd-muted">
              A few examples of the finish level we aim for.
            </p>
          </div>
          <a className="pd-btn pd-btn-accent" href={ESTIMATE_URL}>
            Request an Estimate
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g) => (
            <div key={g.src} className="pd-card overflow-hidden">
              <div className="relative h-[220px] w-full">
                <Image src={g.src} alt={g.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="text-xs font-extrabold tracking-widest" style={{ color: "var(--accent-ink)" }}>
                  {g.tag}
                </div>
                <div className="mt-1 text-sm font-extrabold">{g.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="pd-container py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Reviews for {BRAND.name}</h2>
        <p className="mt-2 max-w-2xl pd-muted">
          Paste your Google reviews and we’ll replace these placeholders.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <div key={idx} className="pd-card p-6">
              <div style={{ color: "var(--accent-ink)" }}>★★★★★</div>
              <p className="mt-3 text-sm leading-relaxed pd-muted">“{r.quote}”</p>
              <div className="mt-4 text-xs font-bold tracking-widest pd-muted2">— {r.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pd-container pb-16">
        <div className="pd-card p-8 sm:p-10" style={{ background: "linear-gradient(135deg, rgba(183,243,151,0.18) 0%, rgba(255,255,255,1) 55%)" }}>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Request an estimate</h2>
              <p className="mt-3 pd-muted">Call now for urgent issues or email details for a quote.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a className="pd-btn pd-btn-primary" href={`tel:${PHONE_TEL}`}>
                  Call: {PHONE_DISPLAY}
                </a>
                <a className="pd-btn pd-btn-accent" href={`mailto:${EMAIL}`}>
                  Email: {EMAIL}
                </a>
              </div>
            </div>

            <div className="pd-card p-6" style={{ background: "rgba(255,255,255,0.75)" }}>
              <div className="text-xs font-extrabold tracking-widest" style={{ color: "var(--accent-ink)" }}>
                FAST SETUP
              </div>
              <div className="mt-2 text-lg font-extrabold">Add Calendly in 30 seconds</div>
              <p className="mt-2 text-sm pd-muted">
                Create your Calendly link and paste it here — I’ll wire it to every CTA
                and redeploy.
              </p>
              <a className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border px-4 py-3 text-sm font-extrabold" style={{ borderColor: "rgba(183,243,151,0.75)", background: "rgba(183,243,151,0.22)", color: "var(--accent-ink)" }} href={ESTIMATE_URL}>
                Add Estimate Link
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="pd-container py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-extrabold tracking-wider">{BRAND.name.toUpperCase()}</div>
              <div className="mt-1 text-xs pd-muted2">
                {BRAND.serviceArea} • {BRAND.tagline}
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm sm:items-end">
              <a className="font-bold pd-muted hover:text-slate-900" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
              <a className="font-bold pd-muted hover:text-slate-900" href={`mailto:${EMAIL}`}>
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
