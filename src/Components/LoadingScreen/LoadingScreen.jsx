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
    <div ref={containerRef} className="fixed inset-0 flex items-center justify-center bg-zinc-900 text-white z-50 p-4">
      <div ref={textRef} className="flex flex-col items-center text-center space-y-6 max-w-2xl">
        <p className="font-main font-bold text-lg md:text-2xl text-zinc-300 leading-relaxed" dir="rtl">
          لما تيجي تدخل هتلاقي الموقع الخاص بيا باللغة العربية بشكل إفتراضي و ده محاولة مني للحفاظ علي الهوية العربية
        </p>
        <p className="font-arabic text-lg md:text-2xl text-zinc-300 leading-relaxed">
          When you enter, you will find the site in Arabic by default — an attempt to preserve the Arab identity.
          If you cannot read Arabic, you can switch to English using the language toggle in the top left corner.
        </p>
      </div>
    </div>
  );
}