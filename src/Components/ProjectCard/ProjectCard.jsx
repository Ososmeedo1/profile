import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export default function ProjectCard({ project }) {
  const { language } = useLanguage();
  const { titleEn, titleAr, descriptionEn, descriptionAr, category, image, demoUrl, codeUrl } = project;

  const linkClass =
    'flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors';

  return (
    <article className="group border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-900 dark:hover:border-zinc-50 transition-colors flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={image}
          alt={language === 'ar' ? titleAr : titleEn}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 rtl:right-auto rtl:left-3 bg-white dark:bg-zinc-950 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-50">
          {category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-50">
          {language === 'ar' ? titleAr : titleEn}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-grow">
          {language === 'ar' ? descriptionAr : descriptionEn}
        </p>

        <div className="flex items-center gap-6 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              aria-label={language === 'ar' ? 'معاينة المشروع في تبويب جديد' : 'Open live demo in a new tab'}
            >
              <ExternalLink size={16} />
              <span>{language === 'ar' ? 'معاينة' : 'Demo'}</span>
            </a>
          )}

          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            aria-label={language === 'ar' ? 'عرض الكود المصدري' : 'View source code'}
          >
            <Code2 size={16} />
            <span>{language === 'ar' ? 'الكود' : 'Code'}</span>
          </a>
        </div>
      </div>
    </article>
  );
}