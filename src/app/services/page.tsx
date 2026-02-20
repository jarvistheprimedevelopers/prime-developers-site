import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";

const services = [
  {
    title: "Unit Turnovers / Rent-Ready",
    items: [
      "Scope & estimate",
      "Scheduling & trade coordination",
      "Punch list close-out",
      "Photo documentation",
    ],
  },
  {
    title: "Renovation & Capital Improvements",
    items: [
      "Bathrooms & kitchens",
      "Flooring, paint, tile",
      "Common-area upgrades",
      "Standardized scope packages",
    ],
  },
  {
    title: "Emergency Maintenance",
    items: [
      "Rapid stabilization",
      "Damage mitigation",
      "Repair execution",
      "Clear next steps",
    ],
  },
  {
    title: "Maintenance Coordination",
    items: [
      "Triage & dispatch",
      "Vendor / trade oversight",
      "Close-out reporting",
      "Repeatable workflows",
    ],
  },
  {
    title: "Insurance Claim Support",
    items: [
      "Documentation support",
      "Scope alignment",
      "Repair execution",
      "Communication updates",
    ],
  },
  {
    title: "Multi-Unit Upgrades",
    items: [
      "Batch upgrades",
      "Unit standards",
      "Fixture/finish packages",
      "Timeline control",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <div className="pd-container py-14">
        <div className="pd-pill">SERVICES</div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Built for portfolios.
        </h1>
        <p className="mt-4 max-w-2xl pd-muted">
          We execute turnovers, renovations, and upgrades with standardized scope and clean close-out.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="pd-card p-7">
              <div className="text-lg font-extrabold">{s.title}</div>
              <ul className="mt-4 space-y-2 text-sm pd-muted">
                {s.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link className="pd-btn pd-btn-primary" href="/#contact">
            Request Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
