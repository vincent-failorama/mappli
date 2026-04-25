export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <span>© {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.</span>
        <a
          href="mailto:contact@example.com"
          className="text-brand-600 hover:underline font-medium"
        >
          contact@example.com
        </a>
      </div>
    </footer>
  );
}
