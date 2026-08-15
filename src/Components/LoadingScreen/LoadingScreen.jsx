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
    <div ref={containerRef} className="fixed inset-0 flex items-center justify-center bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 z-50 p-6">
      <div ref={textRef} className="flex flex-col items-center text-center space-y-8 max-w-2xl">
        <p className="text-2xl md:text-4xl font-bold uppercase tracking-[0.2em]">Osama</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed" dir="rtl">
          لما تيجي تدخل هتلاقي الموقع الخاص بيا باللغة العربية بشكل إفتراضي و ده محاولة مني للحفاظ علي الهوية العربية
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          When you enter, you will find the site in Arabic by default — an attempt to preserve the Arab identity.
          If you cannot read Arabic, you can switch to English using the language toggle in the top left corner.
        </p>
      </div>
    </div>
  );
}