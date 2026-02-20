import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";

const portfolio = [
  { src: "/projects/kitchen-1.png", title: "Kitchen Renovation", meta: "Renovation" },
  { src: "/projects/kitchen-2.png", title: "Kitchen Remodel", meta: "Turnover" },
  { src: "/projects/kitchen-3.png", title: "Modern Kitchen", meta: "Capital Improvement" },
  { src: "/projects/bathroom-1.png", title: "Bathroom Upgrade", meta: "Renovation" },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <div className="pd-container py-14">
        <div className="pd-pill">PORTFOLIO</div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Featured work
        </h1>
        <p className="mt-4 max-w-2xl pd-muted">
          A small sample of finish level and execution quality.
        </p>

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

        <div className="mt-14">
          <Link className="pd-btn pd-btn-primary" href="/#contact">
            Request Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
