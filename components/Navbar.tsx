'use client';

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 80);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07]"
      animate={{
        height: scrolled ? 52 : 64,
        backgroundColor: scrolled ? 'rgba(2,6,23,0.88)' : 'rgba(255,255,255,0.03)',
        backdropFilter: scrolled ? 'blur(24px)' : 'blur(12px)',
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
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
    </motion.header>
  );
}
