import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <div className="pd-container py-14">
        <div className="pd-pill">ABOUT</div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Hamilton-based execution partner for GTA portfolios.
        </h1>
        <p className="mt-4 max-w-3xl pd-muted leading-relaxed">
          The Prime Developers operates as a property services and execution partner for
          property management firms, developers, and owners across the GTA. We focus on
          asset preservation, turnover execution, maintenance coordination, building
          upgrades, and capital improvement projects.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="pd-card p-7">
            <div className="text-lg font-extrabold">What we do</div>
            <ul className="mt-4 space-y-2 text-sm pd-muted">
              <li>• Asset preservation & emergency response</li>
              <li>• Turnovers & rent-ready execution</li>
              <li>• Renovation & capital improvement delivery</li>
              <li>• Maintenance coordination & trade oversight</li>
              <li>• Close-out documentation & accountability</li>
            </ul>
          </div>

          <div className="pd-card p-7">
            <div className="text-lg font-extrabold">Service area</div>
            <p className="mt-4 text-sm pd-muted leading-relaxed">
              Serving property management firms across:
            </p>
            <ul className="mt-4 space-y-2 text-sm pd-muted">
              <li>• Hamilton</li>
              <li>• Burlington</li>
              <li>• Oakville</li>
              <li>• Niagara</li>
              <li>• Cambridge</li>
              <li>• Greater Toronto Area</li>
            </ul>
          </div>
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
