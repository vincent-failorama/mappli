'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const wordVariants: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: i * 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function SplitText({
  text,
  className = '',
  delay = 0,
}: {
  text: string;
  className?: string;
  /** délai global avant le début du stagger, en secondes */
  delay?: number;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const words = text.split(' ');

  // SSR : texte visible immédiatement, pas de flash au chargement
  if (!mounted) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          // Légère compensation de line-height pour que le overflow ne coupe pas les ascendants
          style={{ verticalAlign: 'bottom' }}
          aria-hidden="true"
        >
          <motion.span
            className="inline-block"
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            style={{ originY: 1, transitionDelay: `${delay}s` }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}
