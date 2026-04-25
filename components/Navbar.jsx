import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-slate-800 tracking-tight">
          Votre Entreprise
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/#apps" className="hover:text-brand-600 transition-colors">Nos apps</Link>
          <a href="mailto:contact@example.com" className="bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
