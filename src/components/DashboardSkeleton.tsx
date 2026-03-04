export default function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* top 4 cards */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-3xl border border-white/10 bg-zinc-950/40 p-5"
          >
            <div className="h-4 w-24 rounded bg-white/10 animate-pulse" />
            <div className="mt-4 h-10 w-40 rounded bg-white/10 animate-pulse" />
            <div className="mt-3 h-3 w-32 rounded bg-white/10 animate-pulse" />
          </div>
        ))}
      </div>

      {/* middle row */}
      <div className="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-[1fr_520px]">
        <div className="rounded-3xl border border-white/10 bg-zinc-950/40 p-5">
          <div className="h-4 w-40 rounded bg-white/10 animate-pulse" />
          <div className="mt-4 h-[260px] rounded-2xl bg-white/10 animate-pulse" />
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-950/40 p-5">
          <div className="h-4 w-40 rounded bg-white/10 animate-pulse" />
          <div className="mt-4 h-[340px] rounded-2xl bg-white/10 animate-pulse" />
        </div>
      </div>

      {/* recent trades */}
      <div className="rounded-3xl border border-white/10 bg-zinc-950/40 p-5">
        <div className="h-4 w-40 rounded bg-white/10 animate-pulse" />
        <div className="mt-4 space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-10 rounded-2xl bg-white/10 animate-pulse"
            />
          ))}
        </div>

        <div className="mt-4 h-12 rounded-2xl bg-white/10 animate-pulse" />
      </div>
    </div>
  );
}