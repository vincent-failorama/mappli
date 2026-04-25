import AppCard from '../components/AppCard';

const APPS = [
  {
    icon: '🏟️',
    name: 'Sports Controls',
    tagline: 'Contrôle des équipements sportifs',
    description:
      'Application mobile et dashboard web pour inspecter, suivre et gérer les équipements sportifs. Rapports PDF automatiques, suivi des anomalies en temps réel, multi-sites.',
    platforms: ['iOS', 'Android', 'Web'],
    href: '/apps/sports-controls',
  },
  // Ajoutez vos autres apps ici
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-sm font-semibold px-4 py-2 rounded-full mb-8">
          Applications mobiles & web
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Des apps pensées pour<br />
          <span className="text-brand-600">les professionnels</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nous concevons des applications mobiles et web sur mesure, robustes et intuitives,
          pour répondre aux besoins métier des équipes terrain.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#apps"
            className="bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200"
          >
            Voir nos apps
          </a>
          <a
            href="mailto:contact@example.com"
            className="bg-white text-slate-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-white border-y border-slate-100 py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { icon: '📱', title: 'Mobile-first', desc: 'iOS & Android natif ou React Native, pensé pour le terrain' },
            { icon: '☁️', title: 'Cloud & temps réel', desc: 'Données synchronisées, accessibles partout, sécurisées' },
            { icon: '🎯', title: 'Sur mesure', desc: 'Chaque app répond à un besoin métier précis' },
          ].map(v => (
            <div key={v.title}>
              <div className="text-4xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-slate-800 mb-2">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Liste des apps */}
      <section id="apps" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Nos applications</h2>
          <p className="text-slate-500">Des outils prêts à l'emploi, déployés en production</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPS.map(app => (
            <AppCard key={app.name} {...app} />
          ))}
        </div>
      </section>

      {/* CTA contact */}
      <section className="bg-brand-600 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Un projet en tête ?</h2>
          <p className="text-brand-100 mb-8 text-lg">
            Décrivez-nous votre besoin, nous vous répondons rapidement.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block bg-white text-brand-700 font-bold px-8 py-4 rounded-xl hover:bg-brand-50 transition-colors text-lg"
          >
            Envoyer un message
          </a>
        </div>
      </section>
    </>
  );
}
