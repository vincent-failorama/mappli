import Link from 'next/link';
import FeatureGrid from '../../../components/FeatureGrid';

export const metadata = {
  title: 'Signalis — Gestion des signalements pour les communes',
  description:
    'Plateforme SaaS de gestion des signalements citoyens et interventions techniques pour les communes françaises.',
};

const FEATURES = [
  {
    icon: '📱',
    title: 'Signalements citoyens',
    description:
      'Formulaire public sans compte, carte interactive, suivi par email, géolocalisation. Le citoyen suit l\'avancement de sa demande en temps réel.',
  },
  {
    icon: '📊',
    title: 'Tableau de bord',
    description:
      'Statistiques en temps réel, alertes automatiques, KPIs avancés. Actualisation instantanée via Supabase Realtime pour ne rien manquer.',
  },
  {
    icon: '👷‍♂️',
    title: 'Gestion des interventions',
    description:
      'Assignation en un clic, photos avant/après, suivi des statuts, exports CSV et PDF. Historique complet par signalement.',
  },
  {
    icon: '🌙',
    title: 'Module Astreinte',
    description:
      'Arbre décisionnel pour les urgences nocturnes, checklist d\'intervention, planning interactif sur 12 semaines pour agents et élus.',
  },
  {
    icon: '🚜',
    title: 'Matériel & Maintenance',
    description:
      'Inventaire du parc, suivi des pannes, calcul du coût de possession, suivi du carburant et kilométrage. Planning de maintenance préventive.',
  },
  {
    icon: '🔌',
    title: 'Interopérabilité GMAO',
    description:
      'API REST v1 sécurisée pour intégration avec vos logiciels existants. Synchronisation des matériels, pannes et maintenances.',
  },
];

export default function SignalisPage() {
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
            <div className="text-6xl mb-6">🏛️</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              Signalis
            </h1>
            <p className="text-xl text-slate-500 mb-6 font-medium">
              Plateforme SaaS pour les communes
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Centralisez toute la chaîne de gestion technique de votre commune : du signalement citoyen jusqu'à l'intervention de l'agent. Fini les demandes perdues et le manque de traçabilité. Opérationnel en une journée, sans formation.
            </p>
            <div className="flex gap-3 flex-wrap mb-6">
              {['Web', 'Mobile', 'SaaS', 'API'].map((p) => (
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
                href="https://signalis-mu.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
              >
                Tester la démo →
              </a>
              <a
                href="mailto:contact@mappli.fr?subject=Démo Signalis"
                className="bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
              >
                Demander un devis
              </a>
            </div>
          </div>

          {/* Placeholder screenshot */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl aspect-video flex items-center justify-center border border-blue-200">
            <div className="text-center text-blue-300">
              <div className="text-6xl mb-3">💻</div>
              <p className="text-sm font-medium">Aperçu de la plateforme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Une solution tout-en-un
            </h2>
            <p className="text-slate-500">
              Des modules métiers pensés pour le quotidien des agents, élus et citoyens
            </p>
          </div>
          <FeatureGrid features={FEATURES} />
        </div>
      </section>

      {/* Détails Techniques & Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Conçu pour les collectivités
          </h2>

          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Points forts de l'architecture
              </h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  <strong>Multi-tenant :</strong> Chaque commune dispose de données strictement isolées (Row Level Security).
                </li>
                <li>
                  <strong>Permissions granulaires (RBAC) :</strong> Matrice de permissions par rôle avec exceptions individuelles.
                </li>
                <li>
                  <strong>Photos optimisées :</strong> Compression côté client avant upload, réduisant les coûts de stockage de 70%.
                </li>
                <li>
                  <strong>Zéro maintenance :</strong> Hébergement managé sur Vercel et Supabase. Mises à jour transparentes.
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Stack Technique
              </h3>
              <p className="text-slate-600 mb-4">
                Une base technologique moderne assurant performance, sécurité et maintenabilité :
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Next.js 14',
                  'TailwindCSS',
                  'shadcn/ui',
                  'Supabase',
                  'PostgreSQL',
                  'Resend',
                  'Sentry',
                  'GitHub Actions',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white border border-slate-200 text-slate-600 text-xs font-semibold px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Tarification transparente
              </h3>
              <p className="text-slate-600 mb-4">
                Facturation annuelle adaptée aux procédures comptables (CHORUS).
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
                <li><strong>Socle Mairie :</strong> Inclus (Tableau de bord, équipe, annuaire, thème).</li>
                <li><strong>Modules à la carte :</strong> Citoyens (490€), Cimetière (390€), Matériel (290€)...</li>
                <li><strong>Offre "Mairie 100% Numérique" :</strong> 1 290 € / an avec tous les modules.</li>
              </ul>
              <p className="text-sm text-slate-500 italic">Prix indicatifs pour une commune &lt; 2000 habitants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Modernisez votre commune dès aujourd'hui</h2>
        <p className="text-slate-500 mb-8 text-lg">
          Profitez d'un essai gratuit de 100 jours pour valider la solution avec vos équipes, sans engagement.
        </p>
        <div className="flex gap-4 justify-center">
            <a
            href="https://signalis-mu.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-brand-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-700 transition-colors text-lg shadow-lg shadow-brand-200"
            >
            Découvrir la démo publique →
            </a>
        </div>
      </section>
    </>
  );
}