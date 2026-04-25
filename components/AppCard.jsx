import Link from 'next/link';

const PLATFORM_COLORS = {
  iOS:     'bg-slate-100 text-slate-600',
  Android: 'bg-green-50 text-green-700',
  Web:     'bg-blue-50 text-blue-700',
};

export default function AppCard({ icon, name, tagline, description, platforms = [], href }) {
  return (
    <Link
      href={href}
      className="group bg-white border border-slate-200 rounded-2xl p-7 hover:border-brand-300 hover:shadow-lg transition-all duration-200 flex flex-col gap-4"
    >
      <div className="text-5xl">{icon}</div>

      <div>
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
        <p className="text-slate-500 text-sm mt-1 font-medium">{tagline}</p>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed flex-1">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {platforms.map(p => (
            <span key={p} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${PLATFORM_COLORS[p] ?? 'bg-slate-100 text-slate-600'}`}>
              {p}
            </span>
          ))}
        </div>
        <span className="text-brand-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Découvrir →
        </span>
      </div>
    </Link>
  );
}
