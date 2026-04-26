export const APPS = [
  {
    icon: '🏛️',
    name: 'Signalis',
    tagline: 'Gestion des signalements communaux',
    description:
      'Plateforme SaaS centralisant la gestion des signalements citoyens et interventions techniques pour les communes. Suivi public, dispatching des agents, astreintes et GMAO.',
    platforms: ['Web', 'Mobile'],
    href: '/apps/signalis',
  },
  {
    icon: '🏟️',
    name: 'Sports Controls',
    tagline: 'Contrôle des équipements sportifs',
    description:
      'Application mobile et dashboard web pour inspecter, suivre et gérer les équipements sportifs. Rapports PDF automatiques, suivi des anomalies en temps réel, multi-sites.',
    platforms: ['iOS', 'Android', 'Web'],
    href: '/apps/sports-controls',
  },
  {
    icon: '🚒',
    name: 'Planificateur de Garde',
    tagline: 'Sapeurs-Pompiers',
    description:
      "Génération automatique de plannings d'affectation sur engins. Respect des qualifications, des grades et de l'équité. Export PDF et gestion multi-postes.",
    platforms: ['Windows', 'Web'],
    href: '/apps/pompiers-planificateur',
  },
];

export const FEATURES = [
  {
    icon: '📱',
    title: 'Mobile-first',
    desc: 'iOS & Android natif ou React Native, pensé pour le terrain. Interface optimisée pour les agents, pas pour les développeurs.',
  },
  {
    icon: '☁️',
    title: 'Cloud & temps réel',
    desc: 'Données synchronisées instantanément, accessibles partout. Infrastructure scalable, sécurisée et haute disponibilité.',
  },
  {
    icon: '🎯',
    title: 'Sur mesure',
    desc: 'Chaque app répond à un besoin métier précis. Pas de fonctionnalités inutiles, juste ce qui compte pour vos équipes.',
  },
];

export const STEPS = [
  {
    number: '01',
    title: 'On écoute votre besoin',
    desc: 'Un appel suffit pour comprendre votre contexte, vos contraintes et vos objectifs opérationnels.',
  },
  {
    number: '02',
    title: 'On conçoit la solution',
    desc: 'Maquettes, architecture, stack technique : on vous présente un plan clair avant de coder la moindre ligne.',
  },
  {
    number: '03',
    title: 'On livre et on accompagne',
    desc: 'Déploiement, formation, support. On reste à vos côtés bien après la mise en production.',
  },
];

export const STATS = [
  { value: '1+', label: 'App en production' },
  { value: '100%', label: 'Mobile-first' },
  { value: '60j', label: 'Délai moyen de livraison' },
  { value: '0€', label: 'Commission sur vos revenus' },
];

export const STACK = [
  'Next.js',
  'React Native',
  'Supabase',
  'Firebase',
  'Expo',
  'Tailwind CSS',
  'TypeScript',
  'PostgreSQL',
  'Vercel',
  'AWS',
];
