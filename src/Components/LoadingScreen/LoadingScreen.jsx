import React, { useEffect, useRef } from 'react';
import gsap from '../../lib/gsap';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export default function LoadingScreen({ isReady, onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      gsap.set(textRef.current, { opacity: 1, y: 0 });
      return;
    }

    // Intro animation
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (isReady) {
      if (prefersReducedMotion) {
        onComplete();
        return;
      }

      // Exit animation
      const tl = gsap.timeline({
        onComplete: onComplete
      });

      tl.to(textRef.current,
        { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' }
      )
        .to(containerRef.current,
          { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }
        );
    }
  }, [isReady, onComplete, prefersReducedMotion]);

  return (
    <div ref={containerRef} className="fixed inset-0 flex items-center justify-center bg-zinc-900 text-white z-50">
      <h1 ref={textRef} className="text-4xl font-bold font-main tracking-widest uppercase">
        Portfolio
      </h1>
    </div>
  );
}