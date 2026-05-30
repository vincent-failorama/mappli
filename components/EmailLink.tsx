'use client';

import { useEffect, useRef } from 'react';

export default function EmailLink({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const u = 'contact';
    const d = 'mappli.fr';
    ref.current.href = `mailto:${u}@${d}`;
    ref.current.textContent = `${u}@${d}`;
  }, []);

  // Le HTML rendu côté serveur ne contient aucune adresse
  return (
    <a ref={ref} className={className} aria-label="Envoyer un email à MAPPLI">
      &#9679;&#9679;&#9679;
    </a>
  );
}
