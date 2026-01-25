import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ProjectCard({ project }) {
  const { language } = useLanguage();
  const { titleEn, titleAr, descriptionEn, descriptionAr, category, image, demoUrl, codeUrl } = project;

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-zinc-100 dark:border-zinc-800 flex flex-col h-full group">
      <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={image}
          alt={language === 'ar' ? titleAr : titleEn}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 shadow-sm z-10">
          {category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-50">
          {language === 'ar' ? titleAr : titleEn}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
          {language === 'ar' ? descriptionAr : descriptionEn}
        </p>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={18} />
            <span>{language === 'ar' ? 'معاينة' : 'Live Demo'}</span>
          </a>

          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <Github size={18} />
            <span>{language === 'ar' ? 'الكود' : 'Source Code'}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
