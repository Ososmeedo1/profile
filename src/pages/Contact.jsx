import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../hooks/useLanguage';
import { socials } from '../data/socials';
import { identity } from '../data/identity';
import { ExternalLink } from 'lucide-react';
import { getPageTitle } from '../lib/head';

export default function Contact() {
  const { language } = useLanguage();
  const pageTitle = getPageTitle('contact', language);

  return (
    <div className="max-w-3xl mx-auto">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className="py-12 md:py-16 border-b border-zinc-200 dark:border-zinc-800 mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.25em] font-bold text-zinc-500 dark:text-zinc-400 mb-6">
          {language === 'ar' ? 'التواصل' : 'Contact'}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-zinc-50">
          {language === 'ar' ? 'تواصل معي' : 'Get in Touch'}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'ar'
            ? 'هل لديك فكرة مشروع أو ترغب في مناقشة فرصة عمل؟ لا تتردد في التحدث مع '
            : 'Have a project idea or want to discuss a job opportunity? Feel free to chat with '}
          <span className="font-bold text-zinc-900 dark:text-zinc-50">
            {language === 'ar' ? identity.nameAr : identity.nameEn}
          </span>
          {language === 'ar'
            ? ' عبر أي من المنصات التالية.'
            : ' via any of the following platforms.'}
        </p>
      </div>

      <div className="border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-5 md:p-6 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors"
            >
              <div className={`p-3 ${social.color} group-hover:text-white dark:group-hover:text-zinc-900 transition-colors`}>
                <Icon size={22} />
              </div>

              <div className="flex-grow min-w-0 px-4 md:px-6">
                <h3 className="font-bold text-base md:text-lg mb-1">
                  {language === 'ar' ? social.nameAr : social.nameEn}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-300 dark:group-hover:text-zinc-600 transition-colors">
                  {social.display}
                </p>
              </div>

              <ExternalLink
                size={18}
                className="text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors rtl:rotate-180"
              />
            </a>
          );
        })}
      </div>

      <div className="mt-12 p-8 text-center border border-zinc-200 dark:border-zinc-800">
        <p className="text-xs uppercase tracking-[0.25em] font-bold text-zinc-500 dark:text-zinc-400">
          {language === 'ar'
            ? 'متاح حالياً للعمل الحر والمشاريع الكاملة.'
            : 'Currently available for freelance work and full-time opportunities.'}
        </p>
      </div>
    </div>
  );
}