import Link from 'next/link';
import FeatureGrid from '../../../components/FeatureGrid';

export const metadata = {
  title: 'Sports Controls — Contrôle des équipements sportifs',
  description:
    'Application mobile et dashboard web pour inspecter, suivre et gérer les équipements sportifs. Rapports PDF, suivi des anomalies, multi-sites.',
};

const FEATURES = [
  {
    icon: '🔍',
    title: 'Inspections terrain guidées',
    description:
      'Checklist interactive sur iOS & Android. Chaque point de contrôle peut être annoté, photographié et qualifié par gravité.',
  },
  {
    icon: '📄',
    title: 'Rapports PDF automatiques',
    description:
      "Génération instantanée de rapports de contrôle signés, archivés et téléchargeables depuis l'app ou le dashboard web.",
  },
  {
    icon: '⚠️',
    title: 'Suivi des anomalies',
    description:
      'Les anomalies détectées sont tracées en temps réel. Cycle de vie complet : ouverture, suivi, résolution avec délai mesuré.',
  },
  {
    icon: '🌐',
    title: 'Dashboard web multi-sites',
    description:
      "Vue centralisée de tous vos sites, équipements et inspections. Statistiques de conformité, taux d'anomalies, activité des inspecteurs.",
  },
  {
    icon: '🔔',
    title: 'Notifications push & email',
    description:
      "Alertes automatiques sur condamnation, mise sous surveillance ou détection d'anomalie majeure. Zéro information manquée.",
  },
  {
    icon: '👥',
    title: 'Gestion des rôles',
    description:
      'Admins, responsables, agents, lecteurs — chaque utilisateur accède uniquement à ce dont il a besoin.',
  },
];

const PLANS = [
  {
    name: 'Liberté',
    price: '30 € / équipement / an',
    desc: 'Petites communes & associations',
    highlight: false,
  },
  {
    name: 'Essentiel',
    price: '490 € / an',
    desc: '1 agent · 1 catégorie de patrimoine',
    highlight: false,
  },
  { name: 'Performance', price: '1 200 € / an', desc: '5 agents · 3 catégories', highlight: true },
  { name: 'Pro', price: '1 900 € / an', desc: '15 agents · toutes catégories', highlight: false },
  {
    name: 'Expert',
    price: '2 900 € / an',
    desc: '30 agents · toutes catégories',
    highlight: false,
  },
  {
    name: 'Territoire',
    price: '4 800 € / an',
    desc: 'Collectivités & grands comptes',
    highlight: false,
  },
];

export default function SportsControlsPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 mb-10 transition-colors"
        >
          ← Retour aux apps
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-6xl mb-6">🏟️</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              Sports Controls
            </h1>
            <p className="text-xl text-slate-500 mb-6 font-medium">
              Contrôle des équipements sportifs
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Application métier complète pour les gestionnaires d'équipements sportifs :
              inspections terrain, suivi des anomalies, rapports réglementaires et dashboard de
              pilotage multi-sites — tout en un.
            </p>
            <div className="flex gap-3 flex-wrap mb-6">
              {['iOS', 'Android', 'Web'].map((p) => (
                <span
                  key={p}
                  className="bg-slate-100 text-slate-700 text-sm font-semibold px-3 py-1.5 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://sports-controls.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
              >
                Accéder au dashboard →
              </a>
              <a
                href="mailto:contact@example.com"
                className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
              >
                Demander une démo
              </a>
            </div>
          </div>

          {/* Placeholder screenshot */}
          <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl aspect-video flex items-center justify-center border border-brand-200">
            <div className="text-center text-brand-300">
              <div className="text-6xl mb-3">📱</div>
              <p className="text-sm font-medium">Screenshots à venir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Fonctionnalités clés</h2>
            <p className="text-slate-500">
              Tout ce dont vos équipes ont besoin sur le terrain et au bureau
            </p>
          </div>
          <FeatureGrid features={FEATURES} />
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Captures d'écran</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-slate-100 rounded-xl aspect-[9/16] flex items-center justify-center text-slate-300 border border-slate-200"
            >
              <div className="text-center">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-xs font-medium">Screenshot {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-sm mt-4">
          Remplacez les placeholders par vos captures dans <code>public/apps/sports-controls/</code>
        </p>
      </section>

      {/* Tarifs */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Plans tarifaires</h2>
            <p className="text-slate-500">Essai gratuit 3 mois — sans engagement</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 border transition-shadow hover:shadow-md ${
                  plan.highlight
                    ? 'bg-brand-600 border-brand-600 text-white'
                    : 'bg-white border-slate-200 text-slate-800'
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Populaire
                  </span>
                )}
                <h3
                  className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-slate-800'}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${plan.highlight ? 'text-brand-100' : 'text-slate-500'}`}
                >
                  {plan.desc}
                </p>
                <div
                  className={`text-2xl font-extrabold mb-6 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}
                >
                  {plan.price}
                </div>
                <a
                  href="mailto:contact@example.com"
                  className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                    plan.highlight
                      ? 'bg-white text-brand-700 hover:bg-brand-50'
                      : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Nous contacter
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            Essai gratuit 3 mois · Option catégorie supplémentaire : +90 €/an (Liberté &amp;
            Essentiel) ·{' '}
            <a href="mailto:contact@example.com" className="underline hover:text-slate-600">
              Demander un devis personnalisé
            </a>
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Prêt à démarrer ?</h2>
        <p className="text-slate-500 mb-8 text-lg">
          Demandez votre accès d'essai gratuit — configuration en moins de 10 minutes.
        </p>
        <a
          href="mailto:contact@example.com"
          className="inline-block bg-brand-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-700 transition-colors text-lg shadow-lg shadow-brand-200"
        >
          Demander une démo →
        </a>
      </section>
    </>
  );
}
