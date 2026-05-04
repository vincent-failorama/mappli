import Link from 'next/link';

const PLATFORM_COLORS = {
  iOS: 'bg-white/10 text-zinc-300',
  Android: 'bg-emerald-500/10 text-emerald-400',
  Web: 'bg-violet-500/10 text-violet-400',
};

export default function AppCard({ icon, name, tagline, description, platforms = [], href }) {
  return (
    <Link
      href={href}
      className="group relative bg-white/[0.05] border border-white/10 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-4 overflow-hidden
                 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 hover:border-white/25 hover:bg-white/[0.08]
                 transition-all duration-300"
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/0 to-violet-500/0
                      group-hover:from-sky-500/8 group-hover:to-violet-500/6 transition-all duration-300"
      />

      <div className="relative text-5xl">{icon}</div>

      <div className="relative">
        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
          {name}
        </h3>
        <p className="text-zinc-400 text-sm mt-1 font-medium">{tagline}</p>
      </div>

      <p className="relative text-zinc-300 text-sm leading-relaxed flex-1">{description}</p>

      <div className="relative flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {platforms.map((p) => (
            <span
              key={p}
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${PLATFORM_COLORS[p] ?? 'bg-white/10 text-zinc-300'}`}
            >
              {p}
            </span>
          ))}
        </div>
        <span className="text-sky-400 font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
          Découvrir →
        </span>
      </div>
    </Link>
  );
}
