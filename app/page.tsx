import AppCard from '../components/AppCard';
import ScrollReveal from '../components/ScrollReveal';
import { APPS, FEATURES, STEPS, STATS, STACK } from './data/homeData';

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
        {/* Floating orbs */}
        <div className="absolute -top-20 -left-32 w-[600px] h-[600px] bg-brand-700/20 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-indigo-700/18 rounded-full blur-3xl animate-float2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-800/12 rounded-full blur-2xl animate-float3 pointer-events-none" />

        {/* Grid */}
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,rgba(9,9,11,0.75)_100%)] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-3 shimmer-badge border border-white/10 text-zinc-300 text-sm px-5 py-2.5 rounded-full mb-10">
            <span
              className="w-2 h-2 bg-emerald-400 rounded-full"
              style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
            />
            Sports Controls disponible sur l&apos;App Store & Play Store
          </div>

          {/* Headline */}
          <h1 className="hero-h1 text-5xl sm:text-[5.5rem] font-black text-white leading-[1.06] tracking-tight mb-7">
            Des apps pensées
            <br />
            pour <span className="gradient-text">les professionnels</span>
          </h1>

          {/* Subtext */}
          <p className="hero-p text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Nous concevons des applications mobiles et web sur mesure, robustes et intuitives, pour
            répondre aux besoins métier des équipes terrain.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex gap-4 justify-center flex-wrap">
            <a
              href="#apps"
              className="btn-primary inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-bold text-lg group"
            >
              Voir nos apps
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="mailto:contact@mappli.fr"
              className="bg-white/5 border border-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─────────────────────────── TECH MARQUEE ─────────────────────────── */}
      <section className="bg-zinc-900 border-y border-white/5 py-5 overflow-hidden select-none">
        <div className="flex items-center">
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap pr-16">
            {[...STACK, ...STACK].map((tech, i) => (
              <span key={i} className="text-zinc-500 font-bold text-xs tracking-[0.15em] uppercase">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── FEATURES ─────────────────────────── */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-brand-600 uppercase tracking-[0.15em] mb-4 block">
                Notre approche
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-5 leading-tight">
                Tout ce qu&apos;il faut.
                <br />
                Rien de superflu.
              </h2>
              <p className="text-zinc-500 text-lg max-w-xl mx-auto">
                Des apps qui fonctionnent vraiment, construites avec les bons outils.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div
                  className="group p-8 rounded-2xl border border-zinc-100 bg-white
                                hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-50 hover:border-brand-100
                                transition-all duration-300 h-full"
                >
                  <div className="text-4xl mb-6">{f.icon}</div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-brand-700 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── APPS ─────────────────────────── */}
      <section id="apps" className="bg-zinc-50 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-brand-600 uppercase tracking-[0.15em] mb-4 block">
                Nos applications
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-5 leading-tight">
                Des outils prêts à l&apos;emploi
              </h2>
              <p className="text-zinc-500 text-lg max-w-xl mx-auto">
                Déployés en production, utilisés par des équipes terrain chaque jour.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPS.map((app, i) => (
              <ScrollReveal key={app.name} delay={i * 100}>
                <AppCard {...app} />
              </ScrollReveal>
            ))}

            {/* Coming soon placeholder */}
            <ScrollReveal delay={100}>
              <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-7 flex flex-col items-center justify-center gap-3 text-center min-h-[280px] bg-white/50">
                <span className="text-4xl">✨</span>
                <p className="font-bold text-zinc-400">Prochaine app</p>
                <p className="text-zinc-300 text-sm">En développement</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── HOW IT WORKS ─────────────────────────── */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-brand-600 uppercase tracking-[0.15em] mb-4 block">
                Process
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-5 leading-tight">
                Comment ça marche ?
              </h2>
              <p className="text-zinc-500 text-lg">
                De l&apos;idée à la mise en production en quelques semaines.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 120}>
                <div
                  className="group flex gap-6 p-8 rounded-2xl border border-zinc-100 bg-white
                                hover:border-brand-100 hover:shadow-xl hover:shadow-brand-50/50
                                transition-all duration-300"
                >
                  <div className="text-6xl font-black text-zinc-100 group-hover:text-brand-100 transition-colors shrink-0 leading-none mt-1 select-none">
                    {step.number}
                  </div>
                  <div className="py-1">
                    <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-brand-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── STATS ─────────────────────────── */}
      <section className="py-28 px-6 bg-gradient-to-br from-zinc-950 via-brand-950/25 to-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div>
                  <div className="text-4xl sm:text-5xl font-black gradient-text mb-3">
                    {stat.value}
                  </div>
                  <div className="text-zinc-500 text-sm font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── CTA ─────────────────────────── */}
      <section className="bg-white py-28 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-zinc-950 rounded-3xl p-14 text-center overflow-hidden">
              {/* Orbs inside card */}
              <div className="absolute -top-10 -left-10 w-52 h-52 bg-brand-700/30 rounded-full blur-3xl animate-float pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-indigo-700/25 rounded-full blur-3xl animate-float2 pointer-events-none" />

              <div className="relative z-10">
                <span className="text-sm font-bold text-brand-400 uppercase tracking-[0.15em] mb-4 block">
                  Parlons-en
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
                  Un projet en tête ?
                </h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  Décrivez-nous votre besoin, nous vous répondons sous 24 h.
                </p>
                <a
                  href="mailto:contact@mappli.fr"
                  className="btn-primary inline-flex items-center gap-2 text-white font-bold px-9 py-4 rounded-xl text-lg group"
                >
                  Envoyer un message
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
