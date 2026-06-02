'use client';

import { motion, Variants } from 'framer-motion';

type RevealVariant = 'up' | 'left' | 'right' | 'scale';

const HIDDEN: Record<RevealVariant, Record<string, number>> = {
  up:    { opacity: 0, y: 32 },
  left:  { opacity: 0, x: -36 },
  right: { opacity: 0, x: 36 },
  scale: { opacity: 0, scale: 0.92 },
};

function makeItemVariants(variant: RevealVariant): Variants {
  return {
    hidden: HIDDEN[variant],
    visible: (delayMs: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: variant === 'scale' ? 0.6 : 0.7,
        delay: delayMs / 1000,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };
}

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export function StaggerContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={staggerVariants}
    >
      {children}
    </motion.div>
  );
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  variant = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={makeItemVariants(variant)}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
