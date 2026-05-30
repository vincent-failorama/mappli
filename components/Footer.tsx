import EmailLink from './EmailLink';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-[2] bg-white/[0.02] backdrop-blur-sm border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xl font-black text-white">MAPPLI</span>
          <p className="text-zinc-500 text-sm mt-1">Applications mobiles & web sur mesure</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
          <EmailLink className="hover:text-white transition-colors" />
          <Link href="/mentions-legales" className="hover:text-white transition-colors">
            Mentions légales
          </Link>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Confidentialité
          </Link>
          <span>© {new Date().getFullYear()} MAPPLI</span>
        </div>
      </div>
    </footer>
  );
}
