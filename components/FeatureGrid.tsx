export default function FeatureGrid({ features }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div key={i} className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rounded-xl p-6 flex gap-4">
          <div className="text-3xl shrink-0">{f.icon}</div>
          <div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{f.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
