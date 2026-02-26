export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] font-mono">
      <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-4" />
      <h2 className="text-emerald-500 animate-pulse tracking-[0.2em]">
        ESCANEANDO_SECTOR...
      </h2>
      <div className="mt-2 w-48 h-1 bg-slate-800 overflow-hidden">
        <div className="w-full h-full bg-emerald-500 origin-left animate-loading-bar" />
      </div>
    </div>
  );
}