export const metadata = {
  title: 'Politique de confidentialité — Sports Controls',
  description: "Politique de confidentialité de l'application Sports Controls.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16 bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 my-10 shadow-2xl">
      <h1 className="text-3xl font-bold text-white mb-2">Politique de confidentialité</h1>
      <p className="text-slate-400 mb-10">
        Application <strong>Sports Controls</strong> — Dernière mise à jour : 20 mars 2026
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">1. Présentation</h2>
        <p className="text-slate-300 leading-relaxed">
          Sports Controls est une application mobile de gestion et d'inspection d'équipements
          sportifs destinée aux professionnels. La présente politique de confidentialité décrit
          comment nous collectons, utilisons et protégeons vos données personnelles dans le cadre de
          l'utilisation de l'application.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">2. Données collectées</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Nous collectons uniquement les données nécessaires au fonctionnement de l'application :
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>
            <strong>Données de compte :</strong> nom, adresse e-mail, rôle au sein de
            l'organisation.
          </li>
          <li>
            <strong>Données d'inspection :</strong> résultats des contrôles, photos de
            justificatifs, notes et observations.
          </li>
          <li>
            <strong>Données d'équipements :</strong> nom, type, localisation, photos, numéro de
            série.
          </li>
          <li>
            <strong>Token de notification push :</strong> pour l'envoi d'alertes liées aux
            équipements.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">
          3. Utilisation de l'appareil photo
        </h2>
        <p className="text-slate-300 leading-relaxed mb-3">
          L'application demande l'accès à l'appareil photo de votre appareil pour deux usages
          exclusifs :
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>
            <strong>Scanner les QR codes :</strong> l'appareil photo est utilisé pour lire les QR
            codes associés aux équipements sportifs, permettant d'accéder rapidement à la fiche d'un
            équipement et de démarrer une inspection.
          </li>
          <li>
            <strong>Prendre des photos de justificatifs :</strong> lors d'une inspection,
            l'utilisateur peut photographier un équipement pour documenter son état. Ces photos sont
            stockées de manière sécurisée sur nos serveurs et accessibles uniquement aux membres
            autorisés de votre organisation.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed mt-3">
          L'accès à l'appareil photo n'est actif que lorsque vous utilisez explicitement ces
          fonctionnalités. Aucune photo ni vidéo n'est collectée ou transmise sans action volontaire
          de votre part.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">
          4. Utilisation de la galerie photos
        </h2>
        <p className="text-slate-300 leading-relaxed">
          L'application peut demander l'accès à votre galerie photos pour vous permettre de
          sélectionner une image existante comme photo de justificatif ou photo de profil
          d'équipement. Cet accès est limité aux photos que vous sélectionnez explicitement.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">
          5. Stockage et sécurité des données
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Vos données sont stockées sur les serveurs sécurisés de Google Firebase (Cloud Firestore
          et Firebase Storage), hébergés en Europe. Nous appliquons des contrôles d'accès stricts :
          chaque utilisateur n'accède qu'aux données de son organisation. Les communications entre
          l'application et nos serveurs sont chiffrées via HTTPS/TLS.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">6. Partage des données</h2>
        <p className="text-slate-300 leading-relaxed">
          Nous ne vendons ni ne partageons vos données personnelles avec des tiers à des fins
          commerciales. Les données peuvent être partagées uniquement avec les prestataires
          techniques nécessaires au fonctionnement de l'application (Google Firebase, services
          d'envoi de notifications), dans le strict respect du RGPD.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">7. Conservation des données</h2>
        <p className="text-slate-300 leading-relaxed">
          Vos données sont conservées pendant la durée de votre abonnement actif et supprimées dans
          un délai de 30 jours suivant la résiliation de votre compte, sauf obligation légale
          contraire.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">8. Vos droits (RGPD)</h2>
        <p className="text-slate-300 leading-relaxed mb-3">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des
          droits suivants :
        </p>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          <li>Droit d'accès à vos données personnelles</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement ("droit à l'oubli")</li>
          <li>Droit à la portabilité des données</li>
          <li>Droit d'opposition au traitement</li>
        </ul>
        <p className="text-slate-300 leading-relaxed mt-3">
          Pour exercer ces droits, contactez-nous à l'adresse indiquée ci-dessous.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-200 mb-3">9. Contact</h2>
        <p className="text-slate-300 leading-relaxed">
          Pour toute question relative à cette politique de confidentialité ou à l'exercice de vos
          droits, contactez-nous à :<br />
          <a href="mailto:contact@sports-controls.fr" className="text-brand-400 hover:underline">
            contact@sports-controls.fr
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-200 mb-3">10. Modifications</h2>
        <p className="text-slate-300 leading-relaxed">
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
          Toute modification sera notifiée via l'application ou par e-mail. La date de dernière mise
          à jour est indiquée en haut de ce document.
        </p>
      </section>
    </div>
  );
}
