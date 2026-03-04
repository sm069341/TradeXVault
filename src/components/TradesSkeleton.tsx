export default function TradesSkeleton() {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950/40 p-4 animate-pulse">
      {/* header */}
      <div className="flex items-center justify-between px-2 py-3">
        <div className="h-6 w-40 rounded-xl bg-white/5" />
        <div className="h-9 w-24 rounded-2xl bg-white/5" />
      </div>

      {/* rows */}
      <div className="mt-4 space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-16 rounded-2xl border border-white/10 bg-white/5"
          />
        ))}
      </div>
    </div>
  );
}