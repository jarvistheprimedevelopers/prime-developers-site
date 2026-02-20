type Stat = { value: string; label: string };

export function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="pd-card p-4">
          <div
            className="text-2xl font-extrabold"
            style={{ color: "var(--accent-ink)", letterSpacing: "-0.02em" }}
          >
            {s.value}
          </div>
          <div className="mt-1 text-xs font-extrabold tracking-widest pd-muted2">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
