'use client';

import { useScroll, useTransform, useSpring, motion } from 'framer-motion';

export default function BlobParallax() {
  const { scrollYProgress } = useScroll();

  // b1 (sky-blue, haut gauche) : monte au scroll
  const b1Y = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '-30%']), {
    stiffness: 40,
    damping: 30,
    restDelta: 0.001,
  });

  // b2 (violet, droite) : descend + dérive gauche
  const b2Y = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '18%']), {
    stiffness: 30,
    damping: 30,
    restDelta: 0.001,
  });
  const b2X = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '-10%']), {
    stiffness: 30,
    damping: 30,
    restDelta: 0.001,
  });

  // b3 (bleu, bas centre) : mouvement diagonal montant
  const b3Y = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '-20%']), {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });
  const b3X = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '12%']), {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="blobs">
      <motion.div className="blob b1" style={{ y: b1Y }} />
      <motion.div className="blob b2" style={{ y: b2Y, x: b2X }} />
      <motion.div className="blob b3" style={{ y: b3Y, x: b3X }} />
    </div>
  );
}
