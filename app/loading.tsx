export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950">
      <div className="relative flex flex-col items-center">
        {/* Glow effect */}
        <div className="absolute -inset-10 bg-brand-600/20 blur-3xl rounded-full" />

        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div
            className="absolute inset-0 rounded-full border-t-2 border-brand-400 animate-spin"
            style={{ animationDuration: '1s' }}
          />
          <div
            className="absolute inset-2 rounded-full border-r-2 border-indigo-400 animate-spin"
            style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
          />
          <div
            className="absolute inset-4 rounded-full border-b-2 border-blue-400 animate-spin"
            style={{ animationDuration: '2s' }}
          />
        </div>

        <p className="mt-8 text-zinc-400 font-medium tracking-widest uppercase text-sm animate-pulse">
          Chargement...
        </p>
      </div>
    </div>
  );
}
