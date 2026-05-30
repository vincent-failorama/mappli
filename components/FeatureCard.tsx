'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      className="card-hover-shimmer p-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm h-full flex flex-col"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest:  { y: 0,  boxShadow: '0 0 0 0 rgba(139,92,246,0)' },
        hover: { y: -8, boxShadow: '0 25px 50px -12px rgba(139,92,246,0.2)' },
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Icon */}
      <motion.div
        className="text-4xl mb-6 self-start"
        variants={{
          rest:  { scale: 1,   x: 0, y: 0,  rotate: 0 },
          hover: { scale: 1.2, x: 18, y: -4, rotate: 5 },
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-xl font-bold mb-3"
        variants={{
          rest:  { color: '#ffffff' },
          hover: { color: '#38bdf8' },
        }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>

      <p className="text-zinc-400 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
}
