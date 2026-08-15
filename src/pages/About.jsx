import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Download } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { certificates } from '../data/certificates';
import { identity } from '../data/identity';
import CertificateCard from '../Components/CertificateCard/CertificateCard';
import { getPageTitle } from '../lib/head';
import { skills } from '../data/skills';

export default function About() {
  const { language } = useLanguage();
  const location = useLocation();
  const pageTitle = getPageTitle('about', language);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const sectionTitle =
    'text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-4';

  const infoRow =
    'flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-4 border-b border-zinc-100 dark:border-zinc-900';

  const infoLabel =
    'sm:w-40 flex-shrink-0 text-xs uppercase tracking-[0.2em] font-bold text-zinc-500 dark:text-zinc-400';

  const infoValue = 'text-zinc-900 dark:text-zinc-50 font-medium';

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className="py-12 md:py-16 border-b border-zinc-200 dark:border-zinc-800 mb-14">
        <p className="text-xs uppercase tracking-[0.25em] font-bold text-zinc-500 dark:text-zinc-400 mb-6">
          {language === 'ar' ? 'نبذة' : 'Profile'}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {language === 'ar' ? 'عنّي' : 'About Me'}
        </h1>
      </div>

      <section id="bio" className="mb-20 scroll-mt-24">
        <h2 className={sectionTitle}>
          {language === 'ar' ? identity.fullNameAr : identity.fullNameEn}
        </h2>

        <div className="border-t border-zinc-200 dark:border-zinc-800">
          <div className={infoRow}>
            <span className={infoLabel}>{language === 'ar' ? 'المسمى الوظيفي' : 'Title'}</span>
            <span className={infoValue}>{language === 'ar' ? identity.titleAr : identity.titleEn}</span>
          </div>
          <div className={infoRow}>
            <span className={infoLabel}>{language === 'ar' ? 'الموقع' : 'Location'}</span>
            <span className={infoValue}>{language === 'ar' ? identity.locationAr : identity.locationEn}</span>
          </div>
          <div className={infoRow}>
            <span className={infoLabel}>{language === 'ar' ? 'التعليم' : 'Education'}</span>
            <span className={infoValue}>
              {language === 'ar' ? identity.universityAr : identity.universityEn} — {language === 'ar' ? identity.majorAr : identity.majorEn}
            </span>
          </div>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg mt-8 mb-10 max-w-2xl">
          {language === 'ar'
            ? 'أنا أسامة الجمل مهندس برمجيات مقيم في مصر تخصصت في ال Full-stack development و حالياً بسعي إني ابدأ أول مشروع برمجي فعلي ليا'
            : 'I am Osama El-Gamal, a Software Engineer based in Egypt. I specialized in Full-stack development and am currently striving to start my first actual software project.'}
        </p>

        <a
          href={identity.cvUrl}
          download
          className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-zinc-900 hover:outline hover:outline-1 hover:outline-zinc-900 dark:hover:bg-zinc-950 dark:hover:text-white dark:hover:outline-zinc-50 transition-colors"
        >
          <Download size={16} />
          <span>{language === 'ar' ? identity.cvLabelAr : identity.cvLabelEn}</span>
        </a>
      </section>

      <section id="skills" className="mb-20 scroll-mt-24">
        <h2 className={sectionTitle}>
          {language === 'ar' ? 'المهارات' : 'Skills'}
        </h2>
        <div className="space-y-10">
          {skills.map(group => (
            <div key={group.id}>
              <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-zinc-500 dark:text-zinc-400 mb-4">
                {language === 'ar' ? group.labelAr : group.labelEn}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill.id}
                    className="px-4 py-2 text-sm font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:border-zinc-900 dark:hover:border-zinc-50 transition-colors"
                  >
                    {language === 'ar' ? skill.labelAr : skill.labelEn}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certificates" className="mb-20 scroll-mt-24">
        <h2 className={sectionTitle}>
          {language === 'ar' ? 'الشهادات' : 'Certificates'}
        </h2>
        <div className="grid gap-4">
          {certificates.map(cert => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </section>
    </div>
  );
}