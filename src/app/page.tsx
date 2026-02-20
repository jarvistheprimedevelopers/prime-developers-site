import Image from "next/image";

const PHONE_DISPLAY = "(437) 669-1543";
const PHONE_TEL = "+14376691543";
const EMAIL = "info@theprimedevelopers.ca";

// TODO: replace with your real booking link when ready
const BOOKING_URL = "#";

const services = [
  {
    title: "Renovations",
    desc: "End-to-end renovations with tight scheduling, clean finishes, and clear communication.",
  },
  {
    title: "Emergency Service",
    desc: "Fast response for urgent repairs to protect your property and reduce damage.",
  },
  {
    title: "Handyman Work",
    desc: "Reliable maintenance and small jobs handled properly — no shortcuts.",
  },
  {
    title: "Insurance Claim Support",
    desc: "We help you document, scope, and execute repairs aligned with your claim.",
  },
  {
    title: "Contractor Coordination",
    desc: "We coordinate trusted trades to keep projects moving and accountable.",
  },
];

const stats = [
  { label: "Ontario", value: "Service Area" },
  { label: "Emergency", value: "Response" },
  { label: "Renovation", value: "& Repairs" },
  { label: "Lead", value: "Ready" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <div className="border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-200" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-wider">
                THE PRIME DEVELOPERS
              </div>
              <div className="text-xs text-white/60">Ontario • Real Estate Solutions</div>
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
              href={BOOKING_URL}
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_20%,rgba(212,175,55,0.18),transparent_60%),radial-gradient(700px_450px_at_80%_0%,rgba(249,217,118,0.10),transparent_55%)]" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs font-extrabold tracking-widest text-yellow-200">
                ONTARIO • RENOVATION • EMERGENCY • CLAIMS
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
                Real estate solutions that move fast — and finish clean.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                The Prime Developers helps owners and investors across Ontario with
                renovations, emergency repairs, handyman work, insurance claim support,
                and contractor coordination.
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
                  href={BOOKING_URL}
                >
                  Book a Call
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.value}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-lg font-extrabold text-yellow-200">
                      {s.label}
                    </div>
                    <div className="mt-1 text-xs font-bold tracking-widest text-white/50">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                      Call us or email the details — we’ll respond with next steps.
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
                    href={BOOKING_URL}
                  >
                    Booking Link (add)
                  </a>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
                  <div className="font-extrabold tracking-widest text-white/70">
                    NOTE
                  </div>
                  <p className="mt-2 leading-relaxed">
                    We’ll replace the booking button once you paste your Calendly/booking
                    link.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Services</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              One team to handle the work, coordinate the trades, and keep your property
              moving.
            </p>
          </div>
        </div>

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

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-extrabold tracking-wider">
                THE PRIME DEVELOPERS
              </div>
              <div className="mt-1 text-xs text-white/60">Ontario • Real Estate Solutions</div>
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
            © {new Date().getFullYear()} The Prime Developers. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
