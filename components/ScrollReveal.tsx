'use client';

import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delayMs: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: delayMs / 1000,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

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
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={itemVariants}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
