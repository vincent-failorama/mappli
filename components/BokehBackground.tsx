'use client';

import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function BokehBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="bokeh"
      init={init}
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: 40 },
          color: {
            value: ['#0ea5e9', '#8b5cf6', '#6366f1', '#14b8a6'],
          },
          opacity: {
            value: { min: 0.05, max: 0.2 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          size: {
            value: { min: 40, max: 120 },
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
          blur: 80,
        },
        detectRetina: true,
      }}
    />
  );
}
