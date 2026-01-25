import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CertificateCard({ certificate }) {
  const { language } = useLanguage();
  const { titleEn, titleAr, issuerEn, issuerAr, date, verificationUrl, image } = certificate;

  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
        {image ? (
          <img src={image} alt={issuerEn} className="w-full h-full object-cover" />
        ) : (
          <Award className="text-zinc-400" size={32} />
        )}
      </div>

      <div className="flex-grow min-w-0">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 truncate">
          {language === 'ar' ? titleAr : titleEn}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {language === 'ar' ? issuerAr : issuerEn} • {date}
        </p>
      </div>

      <a
        href={verificationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 p-2 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label={language === 'ar' ? 'تحقق من الشهادة' : 'Verify Certificate'}
      >
        <ExternalLink size={20} />
      </a>
    </div>
  );
}
