import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { certificates } from '../data/certificates';
import { identity } from '../data/identity';
import CertificateCard from '../Components/CertificateCard/CertificateCard';
import { getPageTitle } from '../lib/head';
import { skills } from '../data/skills';

export default function About() {
  const { language } = useLanguage();
  const location = useLocation();
  const pageTitle = getPageTitle('about', language);

  // Handle hash scrolling
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

  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in duration-500 max-w-4xl">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <h1 className="text-4xl font-bold mb-12 text-zinc-900 dark:text-zinc-50">
        {language === 'ar' ? 'عنَّي' : 'About Me'}
      </h1>

      <section id="bio" className="mb-20">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">
              {language === 'ar' ? identity.fullNameAr : identity.fullNameEn}
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 mb-6 space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  {language === 'ar' ? 'المسمى الوظيفي:' : 'Title:'}
                </span>
                {language === 'ar' ? identity.titleAr : identity.titleEn}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  {language === 'ar' ? 'الموقع:' : 'Location:'}
                </span>
                {language === 'ar' ? identity.locationAr : identity.locationEn}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  {language === 'ar' ? 'التعليم:' : 'Education:'}
                </span>
                {language === 'ar' ? identity.universityAr : identity.universityEn} - {language === 'ar' ? identity.majorAr : identity.majorEn}
              </p>
            </div>

            <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg mb-8">
              <p>
                {language === 'ar'
                  ? 'أنا أسامة الجمل شاب عشريني دخلت كلية حاسبات و معلومات و مقيم في مصر تخصصت في ال Full-stack development و حالياً بسعي إني ابدأ أول مشروع برمجي فعلي ليا '
                  : 'I am Osama El-Gamal, a young man in my twenties who entered the Faculty of Computer Science and resides in Egypt. I specialized in Full-stack development and am currently striving to start my first actual software project.'}
              </p>
            </div>

            <a
              href={identity.cvUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={20} />
              <span>{language === 'ar' ? identity.cvLabelAr : identity.cvLabelEn}</span>
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="mb-20 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          {language === 'ar' ? 'المهارات' : 'Skills'}
        </h2>
        <div className="space-y-8">
          {skills.map(group => (
            <div key={group.id} className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                {language === 'ar' ? group.labelAr : group.labelEn}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map(skill => (
                  <span
                    key={skill.id}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
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
        <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-4">
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
