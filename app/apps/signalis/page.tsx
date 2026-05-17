import Link from 'next/link';
import FeatureGrid from '../../../components/FeatureGrid';
import { FaBuilding, FaMobileAlt, FaChartBar, FaHardHat, FaMoon, FaTractor, FaPlug } from 'react-icons/fa';

export const metadata = {
  title: 'Signalis — Gestion des signalements pour les communes',
  description:
    'Logiciel de signalement mairie : gérez les signalements citoyens, interventions techniques, astreintes et GMAO depuis une seule plateforme SaaS. Essai gratuit 100 jours.',
  keywords: [
    'gestion signalements communes',
    'plateforme SaaS collectivités',
    'signalements citoyens',
    'interventions techniques mairie',
    'GMAO commune',
    'application mairie',
    'gestion astreintes',
    'suivi interventions terrain',
  ],
  alternates: { canonical: '/apps/signalis' },
};

const FEATURES = [
  {
    icon: FaMobileAlt, // Icône de téléphone mobile
    title: 'Signalements citoyens',
    description:
      'Formulaire public sans compte, carte interactive, suivi par email, géolocalisation. Le citoyen suit l\'avancement de sa demande en temps réel.',
  },
  {
    icon: FaChartBar, // Icône de graphique à barres
    title: 'Tableau de bord',
    description:
      'Statistiques en temps réel, alertes automatiques, KPIs avancés. Actualisation instantanée via Supabase Realtime pour ne rien manquer.',
  },
  {
    icon: FaHardHat, // Icône de casque de chantier
    title: 'Gestion des interventions',
    description:
      'Assignation en un clic, photos avant/après, suivi des statuts, exports CSV et PDF. Historique complet par signalement.',
  },
  {
    icon: FaMoon, // Icône de lune
    title: 'Module Astreinte',
    description:
      'Arbre décisionnel pour les urgences nocturnes, checklist d\'intervention, planning interactif sur 12 semaines pour agents et élus.',
  },
  {
    icon: FaTractor, // Icône de tracteur
    title: 'Matériel & Maintenance',
    description:
      'Inventaire du parc, suivi des pannes, calcul du coût de possession, suivi du carburant et kilométrage. Planning de maintenance préventive.',
  },
  {
    icon: FaPlug, // Icône de prise électrique
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
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400 mb-10 transition-colors"
        >
          ← Retour aux apps
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-6xl mb-6">
              <FaBuilding className="inline-block" /> {/* Rendu de l'icône */}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Signalis — Logiciel de gestion des signalements pour les communes
            </h1>
            <p className="text-xl text-slate-400 mb-6 font-medium">
              Plateforme SaaS tout-en-un pour collectivités : signalements citoyens, interventions, GMAO
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
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
                rel="noopener noreferrer"
                className="btn-primary text-white px-6 py-3 rounded-xl font-semibold"
              >
                Tester la démo →
              </a>
              <a
                href="/contact?sujet=D%C3%A9mo+Signalis"
                className="bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
              >
                Demander un devis
              </a>
            </div>
          </div>

          {/* Placeholder screenshot */}
          <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-md rounded-2xl aspect-video flex items-center justify-center border border-white/10 shadow-2xl">
            <div className="text-center text-blue-300">
              <div className="text-6xl mb-3">💻</div>
              <p className="text-sm font-medium">Aperçu de la plateforme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-y border-white/5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">
              Une solution tout-en-un
            </h2>
            <p className="text-slate-400">
              Des modules métiers pensés pour le quotidien des agents, élus et citoyens
            </p>
          </div>
          <FeatureGrid features={FEATURES} />
        </div>
      </section>

      {/* Détails Techniques & Modules */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Conçu pour les collectivités
          </h2>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Points forts de l'architecture
              </h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
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

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Stack Technique
              </h3>
              <p className="text-slate-300 mb-4">
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
                    className="bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Tarification transparente
              </h3>
              <p className="text-slate-300 mb-4">
                Facturation annuelle adaptée aux procédures comptables (CHORUS).
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
                <li><strong>Socle Mairie :</strong> Inclus (Tableau de bord, équipe, annuaire, thème).</li>
                <li><strong>Modules à la carte :</strong> Citoyens (490€), Cimetière (390€), Matériel (290€)...</li>
                <li><strong>Offre "Mairie 100% Numérique" :</strong> 1 290 € / an avec tous les modules.</li>
              </ul>
              <p className="text-sm text-slate-400 italic">Prix indicatifs pour une commune &lt; 2000 habitants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Modernisez votre commune dès aujourd'hui</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Profitez d'un essai gratuit de 100 jours pour valider la solution avec vos équipes, sans engagement.
        </p>
        <div className="flex gap-4 justify-center">
            <a
            href="https://signalis-mu.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-white font-bold px-8 py-4 rounded-xl text-lg"
            >
            Découvrir la démo publique →
            </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Signalis',
              description:
                'Plateforme SaaS de gestion des signalements citoyens et interventions techniques pour les communes françaises.',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web, Mobile',
              url: 'https://mappli.fr/apps/signalis',
              author: { '@type': 'Organization', name: 'MAPPLI', url: 'https://mappli.fr' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://mappli.fr' },
                { '@type': 'ListItem', position: 2, name: 'Signalis' },
              ],
            },
          ]),
        }}
      />
    </>
  );
}