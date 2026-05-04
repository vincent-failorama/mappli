'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BlobParallax() {
  useGSAP(() => {
    const b1 = document.querySelector('.b1');
    const b2 = document.querySelector('.b2');
    const b3 = document.querySelector('.b3');
    if (!b1 || !b2 || !b3) return;

    // b1 (sky-blue, haut gauche) : monte au scroll
    gsap.to(b1, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    });

    // b2 (violet, droite) : descend légèrement + dérive vers la gauche
    gsap.to(b2, {
      yPercent: 18,
      xPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
      },
    });

    // b3 (bleu, bas centre) : mouvement diagonal montant
    gsap.to(b3, {
      yPercent: -20,
      xPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    ScrollTrigger.refresh();
  });

  return null;
}
