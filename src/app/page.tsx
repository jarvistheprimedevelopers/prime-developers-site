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

// NOTE: I can’t reliably pull Google reviews from that Google search link.
// Paste 6–10 review quotes and we’ll replace these placeholders.
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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-lg font-extrabold text-yellow-200">{value}</div>
      <div className="mt-1 text-xs font-bold tracking-widest text-white/50">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-200" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-wider">
                {BRAND.name.toUpperCase()}
              </div>
              <div className="text-xs text-white/60">
                {BRAND.serviceArea} • {BRAND.tagline}
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              className="text-sm font-semibold text-white/80 hover:text-white"
              href={`tel:${PHONE_TEL}`}
            >
              {PHONE_DISPLAY}
            </a>
            <a
              className="rounded-full border border-yellow-500/40 px-4 py-2 text-sm font-bold text-yellow-200 hover:bg-yellow-500/10"
              href={ESTIMATE_URL}
            >
              Request an Estimate
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_20%,rgba(212,175,55,0.20),transparent_60%),radial-gradient(700px_450px_at_80%_0%,rgba(249,217,118,0.10),transparent_55%)]" />

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs font-extrabold tracking-widest text-yellow-200">
                PROUDLY SERVING {BRAND.serviceArea.toUpperCase()}
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
                Real estate renovations and emergency repairs — handled fast, finished clean.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                {BRAND.name} is an Ontario-wide solution company for real estate: renovation,
                emergency service, handyman work, insurance claim support, and contractor
                coordination.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-black hover:bg-white/90"
                  href={`tel:${PHONE_TEL}`}
                >
                  Call Now: {PHONE_DISPLAY}
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-extrabold text-white/90 hover:bg-white/5"
                  href={ESTIMATE_URL}
                >
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
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-extrabold tracking-widest text-yellow-200/90">
                      QUICK ENQUIRY
                    </div>
                    <div className="mt-2 text-2xl font-extrabold">
                      Need help this week?
                    </div>
                    <p className="mt-2 text-sm text-white/70">
                      Call or email the details — we’ll respond with next steps.
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-200" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <a
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm font-bold text-white/90 hover:bg-black/30"
                    href={`tel:${PHONE_TEL}`}
                  >
                    Call: {PHONE_DISPLAY}
                  </a>
                  <a
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm font-bold text-white/90 hover:bg-black/30"
                    href={`mailto:${EMAIL}`}
                  >
                    Email: {EMAIL}
                  </a>
                  <a
                    className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm font-extrabold text-yellow-200 hover:bg-yellow-500/15"
                    href={ESTIMATE_URL}
                  >
                    Estimate Link (add)
                  </a>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
                  <div className="font-extrabold tracking-widest text-white/70">
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
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="text-xs font-extrabold tracking-widest text-yellow-200/90">
              QUALITY YOU CAN TRUST
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Your partner in real estate repairs and renovations.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              We’re built for speed, communication, and clean finishes. If it’s an
              emergency, we stabilize the problem and give you a clear plan. If it’s a
              renovation, we scope it right and execute it properly.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm font-extrabold">Clear Scope</div>
                <div className="mt-2 text-sm text-white/70">
                  No confusion. We define what’s included and what’s next.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm font-extrabold">Fast Response</div>
                <div className="mt-2 text-sm text-white/70">
                  Especially for urgent items — we move quickly.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm font-extrabold">Clean Finish</div>
                <div className="mt-2 text-sm text-white/70">
                  We treat it like an asset — not a shortcut job.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm font-extrabold">Accountability</div>
                <div className="mt-2 text-sm text-white/70">
                  Updates, photos, and follow-through.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight">Services</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          One team to handle the work, coordinate trades, and keep your property moving.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-yellow-500/30"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-extrabold">{s.title}</div>
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-yellow-500/80 to-yellow-200/80 opacity-70 transition group-hover:opacity-100" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience blocks */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-extrabold tracking-widest text-yellow-200/90">
              SERVING {BRAND.serviceArea.toUpperCase()}
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
              Who we work with
            </h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Developers, property managers, and homeowners — one standard: do it right.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-lg font-extrabold">{a.title}</div>
              <div className="mt-2 text-sm font-bold text-yellow-200/90">
                {a.subtitle}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{a.desc}</p>
              <div className="mt-6">
                <a
                  href={ESTIMATE_URL}
                  className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-extrabold text-yellow-200 hover:bg-yellow-500/15"
                >
                  Request an Estimate
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Reviews for {BRAND.name}
        </h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Paste your Google reviews and we’ll replace these placeholders.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-yellow-200">★★★★★</div>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                “{r.quote}”
              </p>
              <div className="mt-4 text-xs font-bold tracking-widest text-white/50">
                — {r.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-black p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Request an estimate
              </h2>
              <p className="mt-3 text-white/70">
                Call now for urgent issues or email details for a quote.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-black hover:bg-white/90"
                  href={`tel:${PHONE_TEL}`}
                >
                  Call: {PHONE_DISPLAY}
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-extrabold text-white/90 hover:bg-white/5"
                  href={`mailto:${EMAIL}`}
                >
                  Email: {EMAIL}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <div className="text-xs font-extrabold tracking-widest text-yellow-200/90">
                FAST SETUP
              </div>
              <div className="mt-2 text-lg font-extrabold">
                Add Calendly in 30 seconds
              </div>
              <p className="mt-2 text-sm text-white/70">
                Create your Calendly link and paste it here — I’ll wire it to every CTA
                and redeploy.
              </p>
              <a
                className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm font-extrabold text-yellow-200 hover:bg-yellow-500/15"
                href={ESTIMATE_URL}
              >
                Add Estimate Link
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-extrabold tracking-wider">
                {BRAND.name.toUpperCase()}
              </div>
              <div className="mt-1 text-xs text-white/60">
                {BRAND.serviceArea} • {BRAND.tagline}
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm sm:items-end">
              <a className="font-bold text-white/80 hover:text-white" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
              <a className="font-bold text-white/80 hover:text-white" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="mt-8 text-xs text-white/40">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
