import Link from 'next/link';

const PLATFORM_COLORS = {
  iOS: 'bg-zinc-100 text-zinc-600',
  Android: 'bg-emerald-50 text-emerald-700',
  Web: 'bg-violet-50 text-violet-700',
};

export default function AppCard({ icon, name, tagline, description, platforms = [], href }) {
  return (
    <Link
      href={href}
      className="group relative bg-white border border-zinc-200 rounded-2xl p-7 flex flex-col gap-4 overflow-hidden
                 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-100/80 hover:border-purple-200
                 transition-all duration-300"
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-50/0 to-indigo-50/0
                      group-hover:from-purple-50/60 group-hover:to-indigo-50/40 transition-all duration-300"
      />

      <div className="relative text-5xl">{icon}</div>

      <div className="relative">
        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-purple-700 transition-colors">
          {name}
        </h3>
        <p className="text-zinc-500 text-sm mt-1 font-medium">{tagline}</p>
      </div>

      <p className="relative text-zinc-600 text-sm leading-relaxed flex-1">{description}</p>

      <div className="relative flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {platforms.map((p) => (
            <span
              key={p}
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${PLATFORM_COLORS[p] ?? 'bg-zinc-100 text-zinc-600'}`}
            >
              {p}
            </span>
          ))}
        </div>
        <span className="text-purple-600 font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
          Découvrir →
        </span>
      </div>
    </Link>
  );
}
