import Link from 'next/link';
import FeatureGrid from '../../../components/FeatureGrid';

export const metadata = {
  title: 'Planificateur de Garde — Sapeurs-Pompiers',
  description:
    'Application de génération de planning de garde pour brigades de sapeurs-pompiers. Moteur algorithmique, gestion des qualifications et exports PDF.',
};

const FEATURES = [
  {
    icon: '👥',
    title: 'Gestion du personnel',
    description:
      'Gestion complète des agents, avec attribution des grades (Sapeur à Commandant) et de plus de 23 types de qualifications (CA_TE, COD3, SUAP, INC, etc.).',
  },
  {
    icon: '🚒',
    title: 'Configuration des engins',
    description:
      "Définition personnalisée des engins (VSAV, FPT, VTU, etc.) et configuration des postes (chef d'agrès, conducteur, équipiers) avec leurs qualifications requises.",
  },
  {
    icon: '📅',
    title: 'Grille horaire flexible',
    description:
      'Sélection intuitive des créneaux de garde sur un calendrier, avec support des périodes de 12 heures (jour/nuit) et des cycles multi-semaines.',
  },
  {
    icon: '⚙️',
    title: 'Moteur algorithmique',
    description:
      "Affectation automatique respectant la priorité des engins, l'exclusivité VSAV, le multi-armement, la hiérarchie des grades et l'équité historique.",
  },
  {
    icon: '📄',
    title: 'Export PDF professionnel',
    description:
      'Génération de plannings clairs avec deux mises en page (par engin ou par jour). En-tête personnalisé avec le nom du chef de garde et les dates.',
  },
  {
    icon: '🔒',
    title: '100% Local & Sécurisé',
    description:
      "Fonctionnement sans serveur. Données stockées localement sur l'appareil. Possibilité de synchronisation via Google Drive sur la version bureau.",
  },
];

export default function PompiersPlanificateurPage() {
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
            <div className="text-6xl mb-6">🚒</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              Planificateur de Garde
            </h1>
            <p className="text-xl text-slate-500 mb-6 font-medium">Sapeurs-Pompiers</p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Générez automatiquement le planning d'affectation de votre personnel sur les engins.
              Notre algorithme prend en compte les qualifications, la hiérarchie des grades et
              l'équité pour vous faire gagner un temps précieux à chaque prise de garde.
            </p>
            <div className="flex gap-3 flex-wrap mb-6">
              {['Windows', 'Web'].map((p) => (
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
                href="mailto:contact@mappli.fr?subject=Démo Planificateur Pompier"
                className="bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
              >
                Demander une démo →
              </a>
            </div>
          </div>

          {/* Placeholder screenshot */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl aspect-video flex items-center justify-center border border-red-200">
            <div className="text-center text-red-300">
              <div className="text-6xl mb-3">💻</div>
              <p className="text-sm font-medium">Aperçu du logiciel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Fonctionnalités du Planificateur
            </h2>
            <p className="text-slate-500">
              Conçu spécifiquement pour les contraintes opérationnelles des centres de secours
            </p>
          </div>
          <FeatureGrid features={FEATURES} />
        </div>
      </section>

      {/* Détails Techniques */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Au cœur du moteur de planification
          </h2>

          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Règles d'affectation strictes
              </h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>
                  <strong>Hiérarchie des qualifications :</strong> Une qualification supérieure (ex:
                  CA_TE) couvre automatiquement les besoins inférieurs (ex: CA_VSAV).
                </li>
                <li>
                  <strong>Exclusivité VSAV :</strong> Un agent affecté au VSAV est bloqué sur cet
                  engin et ne peut être double-armé sur le même créneau.
                </li>
                <li>
                  <strong>Multi-armement :</strong> Possibilité d'affecter un même agent sur
                  plusieurs engins secondaires (FPT + VTU).
                </li>
                <li>
                  <strong>Privilège des grades :</strong> Les grades inférieurs (Sapeur, Caporal)
                  sont placés en priorité sur les postes d'équipier pour laisser les Sous-Officiers
                  disponibles pour les postes à responsabilités.
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Architecture & Stack Technique
              </h3>
              <p className="text-slate-600 mb-4">
                Développé par Vincent Morvezen, l'application s'appuie sur une stack moderne et
                performante :
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Next.js 16',
                  'React 19',
                  'TypeScript 5',
                  'Tailwind CSS 4',
                  'shadcn/ui',
                  'Electron',
                  'Capacitor',
                  'Framer Motion',
                  'jsPDF',
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
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Simplifiez vos prises de garde</h2>
        <p className="text-slate-500 mb-8 text-lg">
          Fini les casse-têtes sur tableau blanc. Générez, ajustez et imprimez vos plannings en
          quelques clics.
        </p>
        <a
          href="mailto:contact@mappli.fr?subject=Contact Planificateur Pompier"
          className="inline-block bg-brand-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-700 transition-colors text-lg shadow-lg shadow-brand-200"
        >
          Nous contacter pour ce projet →
        </a>
      </section>
    </>
  );
}
