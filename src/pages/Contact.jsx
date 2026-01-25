import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { socials } from '../data/socials';
import { identity } from '../data/identity';
import { ExternalLink } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in duration-500 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
          {language === 'ar' ? 'تواصل معي' : 'Get in Touch'}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-6">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300"
            >
              <div className={`p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 ${social.color} group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={32} />
              </div>

              <div className="flex-grow px-6">
                <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 mb-1">
                  {language === 'ar' ? social.nameAr : social.nameEn}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium tracking-wide">
                  {social.display}
                </p>
              </div>

              <ExternalLink
                size={20}
                className="text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors rtl:rotate-180"
              />
            </a>
          );
        })}
      </div>

      <div className="mt-16 text-center p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800">
        <p className="text-zinc-600 dark:text-zinc-400">
          {language === 'ar'
            ? 'متاح حالياً للعمل الحر والمشاريع الكاملة.'
            : 'Currently available for freelance work and full-time opportunities.'}
        </p>
      </div>
    </div>
  );
}
