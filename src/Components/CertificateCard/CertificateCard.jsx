import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export default function CertificateCard({ certificate }) {
  const { language } = useLanguage();
  const { titleEn, titleAr, issuerEn, issuerAr, date, verificationUrl, image } = certificate;

  return (
    <div className="group flex items-center gap-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-900 dark:hover:border-zinc-50 transition-colors p-4">
      <div className="flex-shrink-0 w-12 h-12 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={issuerEn} loading="lazy" className="w-full h-full object-cover" />
        ) : (
          <Award className="text-zinc-400" size={20} />
        )}
      </div>

      <div className="flex-grow min-w-0">
        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 truncate">
          {language === 'ar' ? titleAr : titleEn}
        </h3>
        <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
          {language === 'ar' ? issuerAr : issuerEn} · {date}
        </p>
      </div>

      <a
        href={verificationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
        aria-label={language === 'ar' ? 'تحقق من الشهادة' : 'Verify Certificate'}
      >
        <ExternalLink size={18} />
      </a>
    </div>
  );
}