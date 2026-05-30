'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

// Caractères normaux : flip 3D depuis le haut
const normalVariants: Variants = {
  hidden: { rotateX: 90, opacity: 0, y: 40, filter: 'blur(12px)', scale: 0.8 },
  visible: (custom: { i: number; delay: number }) => ({
    rotateX: 0,
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1], // Cubic-bezier pour un effet "smooth-stop"
      delay: custom.delay + custom.i * 0.02,
    },
  }),
};

// Gradient text : 2D uniquement — rotateX casse background-clip:text
const gradientVariants: Variants = {
  hidden: { y: 20, opacity: 0, filter: 'blur(8px)' },
  visible: (custom: { i: number; delay: number }) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 340,
      damping: 14,
      delay: custom.delay + custom.i * 0.04,
    },
  }),
};

export default function SplitText({
  text,
  className = '',
  delay = 0,
  gradient = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <span className={className}>{text}</span>;
  }

  const chars = text.split('');
  const variants = gradient ? gradientVariants : normalVariants;

  let charIdx = 0;

  return (
    <span className={`inline ${className}`} aria-label={text}>
      {chars.map((char, i) => {
        if (char === ' ') {
          return (
            <span
              key={i}
              aria-hidden="true"
              style={{ display: 'inline-block', width: '0.3em' }}
            />
          );
        }

        const idx = charIdx++;

        return (
          <span
            key={i}
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              perspective: gradient ? undefined : '400px',
              verticalAlign: 'bottom',
            }}
          >
            <motion.span
              className={gradient ? 'gradient-text' : ''}
              style={{
                display: 'inline-block',
                transformOrigin: gradient ? '50% 50%' : '50% 0%',
              }}
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={{ i: idx, delay }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
