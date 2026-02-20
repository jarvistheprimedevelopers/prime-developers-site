import Image from "next/image";
import Link from "next/link";

export function SiteNav() {
  return (
    <div className="sticky top-0 z-40 border-b" style={{ borderColor: "var(--border)", background: "rgba(11,15,13,0.78)", backdropFilter: "blur(10px)" }}>
      <div className="pd-container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-28">
            <Image
              src="/logo.jpg"
              alt="The Prime Developers"
              width={360}
              height={120}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="hidden leading-tight sm:block">
            <div className="text-xs font-extrabold tracking-widest" style={{ color: "var(--accent-ink)" }}>
              HAMILTON-BASED • GTA COVERAGE
            </div>
            <div className="text-sm font-extrabold tracking-wide">EXECUTION PARTNER</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-extrabold sm:flex">
          <Link className="hover:opacity-90" href="/services">
            Services
          </Link>
          <Link className="hover:opacity-90" href="/portfolio">
            Portfolio
          </Link>
          <Link className="hover:opacity-90" href="/about">
            About
          </Link>
          <Link className="pd-btn pd-btn-primary" href="#contact">
            Request Consultation
          </Link>
        </nav>

        <div className="sm:hidden">
          <Link className="pd-btn pd-btn-primary" href="#contact">
            Consult
          </Link>
        </div>
      </div>
    </div>
  );
}
