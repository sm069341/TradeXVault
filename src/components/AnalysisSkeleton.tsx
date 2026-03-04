export default function AnalysisSkeleton() {
  return (
    <div className="space-y-6 animate-pulse overflow-x-hidden">
      <div className="h-12 rounded-2xl border border-white/10 bg-white/5" />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-28 rounded-3xl border border-white/10 bg-white/5"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[420px_1fr]">
        <div className="h-[280px] rounded-3xl border border-white/10 bg-white/5" />
        <div className="h-[280px] rounded-3xl border border-white/10 bg-white/5" />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-[260px] rounded-3xl border border-white/10 bg-white/5"
          />
        ))}
      </div>

      <div className="h-[420px] rounded-3xl border border-white/10 bg-white/5" />
    </div>
  );
}