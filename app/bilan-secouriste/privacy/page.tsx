import EmailLink from '../../../components/EmailLink';

export const metadata = {
  title: 'Politique de confidentialité — Bilan Secouriste',
  description: "Politique de confidentialité de l'application Bilan Secouriste.",
  robots: { index: false, follow: false },
};

export default function BilanSecouristePrivacy() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16 bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 my-10 shadow-2xl">
      <h1 className="text-3xl font-bold text-white mb-2">Politique de confidentialité</h1>
      <p className="text-slate-400 mb-10">
        Application <strong>Bilan Secouriste</strong> — Dernière mise à jour : mai 2026
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">1. Présentation</h2>
        <p className="text-slate-300 leading-relaxed">
          Bilan Secouriste est une application mobile développée par Vincent Morvezen (mappli.fr).
          Cette politique de confidentialité décrit comment l'application traite vos données
          lorsque vous l'utilisez.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">2. Données collectées</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Bilan Secouriste ne collecte <strong>aucune donnée personnelle</strong> et ne transmet
          aucune information à des serveurs externes.
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>
            <strong>Données de bilan (victimes, constantes, notes) :</strong> saisies par
            l'utilisateur, stockées uniquement sur l'appareil via AsyncStorage. Elles ne quittent
            jamais le téléphone sauf action explicite de partage/export par l'utilisateur.
          </li>
          <li>
            <strong>Photos :</strong> capturées ou importées par l'utilisateur, stockées
            localement. Elles ne sont partagées qu'à l'initiative de l'utilisateur (export PDF).
          </li>
          <li>
            <strong>Localisation GPS :</strong> utilisée ponctuellement pour afficher l'adresse de
            l'intervention dans l'écran de géolocalisation. Non enregistrée, non transmise.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">3. Absence de collecte tierce</h2>
        <p className="text-slate-300 leading-relaxed mb-4">L'application ne contient :</p>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>Aucun SDK de publicité ou de tracking</li>
          <li>Aucun service d'analyse (Google Analytics, Firebase, etc.)</li>
          <li>Aucune connexion à un serveur distant</li>
          <li>Aucun cookie</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">
          4. Permissions Android utilisées
        </h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>
            <strong>LOCALISATION</strong> — affichage de l'adresse GPS de l'intervention (écran
            dédié)
          </li>
          <li>
            <strong>CAMÉRA</strong> — prise de photo des bilans et lésions
          </li>
          <li>
            <strong>STOCKAGE</strong> — lecture/écriture des photos et exports PDF
          </li>
          <li>
            <strong>VIBRATION</strong> — retours haptiques sur les actions critiques
          </li>
          <li>
            <strong>WAKE_LOCK</strong> — maintien de l'écran actif pendant une intervention
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">5. Données médicales</h2>
        <p className="text-slate-300 leading-relaxed">
          Les données de bilan saisies peuvent inclure des informations à caractère médical.
          Ces données restent sur votre appareil et ne sont jamais transmises sans votre action
          explicite (partage PDF via les outils natifs Android). L'utilisateur est responsable de
          la confidentialité de ces informations conformément aux obligations professionnelles
          applicables (secret médical, RGPD).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">6. Mineurs</h2>
        <p className="text-slate-300 leading-relaxed">
          Cette application est destinée à des professionnels ou étudiants du secours à personne.
          Elle ne collecte aucune donnée relative aux mineurs.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">7. Droits RGPD</h2>
        <p className="text-slate-300 leading-relaxed">
          Aucune donnée personnelle n'étant collectée ou transmise, il n'y a pas de traitement
          soumis au RGPD de la part de l'éditeur. Les données stockées localement sur votre
          appareil peuvent être supprimées à tout moment depuis les paramètres de l'application
          Android (Réglages → Applications → Bilan Secouriste → Effacer les données).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-200 mb-3">8. Contact</h2>
        <p className="text-slate-300 leading-relaxed">
          Pour toute question concernant cette politique :<br />
          <strong>Vincent Morvezen</strong>
          <br />
          Email :{' '}
          <EmailLink className="text-sky-400 hover:underline" />
          <br />
          Site :{' '}
          <a href="https://mappli.fr" className="text-brand-400 hover:underline">
            mappli.fr
          </a>
        </p>
      </section>
    </div>
  );
}
