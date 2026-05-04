import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07] bg-white/[0.03] backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black text-white tracking-tight">
          MAPPLI
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/#apps" className="text-zinc-400 hover:text-white transition-colors">
            Nos apps
          </Link>
          <a
            href="mailto:contact@mappli.fr"
            className="btn-primary text-white px-4 py-2 rounded-xl text-sm font-semibold"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
