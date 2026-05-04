'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

function parseStatValue(raw: string): { prefix: string; num: number; suffix: string } {
  const match = /^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/.exec(raw);
  if (!match) return { prefix: '', num: 0, suffix: raw };
  return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
}

export default function StatCounter({ value, label }: { value: string; label: string }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [count, setCount] = useState(0);
  const { prefix, num, suffix } = parseStatValue(value);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) { setCount(num); return; }

    const duration = 1800;
    const start = performance.now();
    let raf: number;

    const tick = (t: number) => {
      const progress = Math.min((t - start) / duration, 1);
      // ease-out expo
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * num));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(num);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, num, prefersReducedMotion]);

  return (
    <div ref={ref}>
      <div className="text-4xl sm:text-5xl font-black gradient-text mb-3">
        {prefix}{count}{suffix}
      </div>
      <div className="text-zinc-400 text-sm font-medium">{label}</div>
    </div>
  );
}
