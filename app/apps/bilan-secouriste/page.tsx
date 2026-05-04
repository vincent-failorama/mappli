import Link from 'next/link';
import FeatureGrid from '../../../components/FeatureGrid';
import { FaHeartbeat, FaBolt, FaUsers, FaFilePdf, FaLock, FaBook } from 'react-icons/fa';

export const metadata = {
  title: 'Bilan Secouriste — Assistant opérationnel pour secouristes',
  description:
    'Application mobile hors-ligne pour pompiers, ambulanciers et secouristes. Bilan victimes, urgences vitales, constantes, export PDF SAMU.',
  keywords: [
    'bilan secouriste',
    'application secours à personne',
    'bilan victime pompiers',
    'ACR arrêt cardiaque application',
    'constantes médicales secouriste',
    'export PDF SAMU',
    'application hors-ligne urgences',
    'PSE1 PSE2 outil',
    'ambulancier application',
  ],
};

const FEATURES = [
  {
    icon: FaBolt,
    title: 'Urgences vitales guidées',
    description:
      'Protocoles ACR (arrêt cardiaque) avec minuteur intégré, hémorragie & garrot, détresse respiratoire, bilan X-ABCDE. Chaque étape est guidée pas à pas.',
  },
  {
    icon: FaHeartbeat,
    title: 'Constantes & surveillance',
    description:
      'Saisie complète : FC, PA, SpO2, glycémie, FR, température, EVA. Mesures horodatées, courbes de tendance en temps réel et bilan neurologique (Glasgow, pupilles).',
  },
  {
    icon: FaUsers,
    title: 'Multi-victimes',
    description:
      'Gestion simultanée de plusieurs victimes sur un même incident. Chaque bilan est indépendant avec son propre suivi de constantes et son historique.',
  },
  {
    icon: FaFilePdf,
    title: 'Export PDF professionnel',
    description:
      "Génération d'un compte rendu d'intervention au format SAMU/Centre 15. Inclut constantes, traumatismes, photos horodatées et géolocalisation.",
  },
  {
    icon: FaLock,
    title: '100% hors-ligne',
    description:
      "Aucune connexion réseau requise. Toutes les données restent sur l'appareil. Fonctionne en zone blanche, dans les tunnels ou sur les interventions les plus isolées.",
  },
  {
    icon: FaBook,
    title: 'Bases médicales de référence',
    description:
      '218 médicaments avec doses toxiques et interactions critiques, 184 pathologies classées par système, toxicologie, brûlures (règle des 9), obstétrique (score de Malinas).',
  },
];

export default function BilanSecouristePage() {
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
              <FaHeartbeat className="inline-block text-red-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Bilan Secouriste
            </h1>
            <p className="text-xl text-slate-400 mb-6 font-medium">
              Assistant opérationnel pour secouristes
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Conçu pour les pompiers, ambulanciers, infirmiers SMUR et secouristes PSE, Bilan
              Secouriste guide de la prise en charge d'une victime jusqu'à la transmission au Centre
              15. Protocoles d'urgences vitales, suivi des constantes, export PDF et bases médicales
              de référence — entièrement hors-ligne.
            </p>
            <div className="flex gap-3 flex-wrap mb-6">
              {['iOS', 'Android'].map((p) => (
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
                href="mailto:contact@mappli.fr?subject=Bilan Secouriste"
                className="btn-primary text-white px-6 py-3 rounded-xl font-semibold"
              >
                Nous contacter →
              </a>
              <Link
                href="/bilan-secouriste/privacy"
                className="border border-white/20 text-slate-300 px-6 py-3 rounded-xl font-semibold hover:border-white/40 transition-colors text-sm flex items-center"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>

          {/* Placeholder screenshot */}
          <div className="bg-gradient-to-br from-red-700/20 to-cyan-600/20 backdrop-blur-md rounded-2xl aspect-video flex items-center justify-center border border-white/10 shadow-2xl">
            <div className="text-center text-red-300">
              <div className="text-6xl mb-3">📱</div>
              <p className="text-sm font-medium">Aperçu de l'application</p>
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
              Fonctionnalités de Bilan Secouriste
            </h2>
            <p className="text-slate-400">
              Conçu pour le terrain, optimisé pour les situations de stress
            </p>
          </div>
          <FeatureGrid features={FEATURES} />
        </div>
      </section>

      {/* Détails Techniques */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Architecture & détails techniques
          </h2>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Outils spécialisés
              </h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>
                  <strong>Géolocalisation GPS :</strong> adresse et coordonnées automatiques pour la
                  transmission au Centre 15.
                </li>
                <li>
                  <strong>Calculateur O₂ :</strong> autonomie bouteille selon débit et volume.
                </li>
                <li>
                  <strong>Guide ECG :</strong> placement des électrodes, dérivations 12 pistes.
                </li>
                <li>
                  <strong>Traumatologie :</strong> lésions par zone anatomique avec photos
                  horodatées (compression automatique 10×).
                </li>
                <li>
                  <strong>Minuteur garrot persistant :</strong> notification en arrière-plan, même
                  application fermée.
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Stack Technique</h3>
              <p className="text-slate-300 mb-4">
                Développé par Vincent Morvezen, l'application s'appuie sur une stack React Native
                moderne :
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'React Native 0.81',
                  'Expo SDK 54',
                  'React Navigation 7',
                  'AsyncStorage',
                  'expo-print',
                  'expo-location',
                  'expo-camera',
                  'react-native-chart-kit',
                  'EAS Build',
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
              <h3 className="text-xl font-bold text-white mb-4">Confidentialité & données</h3>
              <p className="text-slate-300 mb-3">
                Toutes les données (bilans, constantes, photos) sont stockées <strong>uniquement sur
                l'appareil</strong> via AsyncStorage. Aucun serveur, aucun tracker, aucune connexion
                réseau.
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                <li>Zéro collecte de données personnelles</li>
                <li>Pas de SDK publicitaire ni d'analyse</li>
                <li>Partage uniquement à l'initiative explicite de l'utilisateur (export PDF)</li>
                <li>
                  <Link href="/bilan-secouriste/privacy" className="text-brand-400 hover:underline">
                    Lire la politique de confidentialité complète →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Disponible sur iOS & Android</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Pour toute question sur l'application ou un projet similaire, contactez-nous.
        </p>
        <a
          href="mailto:contact@mappli.fr?subject=Bilan Secouriste"
          className="btn-primary inline-block text-white font-bold px-8 py-4 rounded-xl text-lg"
        >
          Nous contacter →
        </a>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'Bilan Secouriste',
              description:
                'Application mobile hors-ligne pour pompiers, ambulanciers et secouristes. Bilan victimes, urgences vitales, constantes, export PDF SAMU.',
              applicationCategory: 'MedicalApplication',
              operatingSystem: 'iOS, Android',
              url: 'https://mappli.fr/apps/bilan-secouriste',
              author: { '@type': 'Organization', name: 'MAPPLI', url: 'https://mappli.fr' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://mappli.fr' },
                { '@type': 'ListItem', position: 2, name: 'Bilan Secouriste' },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
