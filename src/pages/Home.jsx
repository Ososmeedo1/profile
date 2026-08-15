import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { projects } from '../data/projects';
import { certificates } from '../data/certificates';
import { socials } from '../data/socials';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import CertificateCard from '../Components/CertificateCard/CertificateCard';
import { getPageTitle } from '../lib/head';

export default function Home() {
  const { language } = useLanguage();

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const summaryCertificates = certificates.slice(0, 2);
  const summarySocials = socials.slice(0, 4);

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;
  const pageTitle = getPageTitle('home', language);

  const sectionLabel =
    'text-xs uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 font-bold';

  const btnPrimary =
    'px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-zinc-900 hover:outline hover:outline-1 hover:outline-zinc-900 dark:hover:bg-zinc-950 dark:hover:text-white dark:hover:outline-zinc-50 transition-colors';

  const btnGhost =
    'px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-xs uppercase tracking-[0.2em] font-bold hover:bg-zinc-900 hover:text-white hover:border-zinc-900 dark:hover:bg-white dark:hover:text-zinc-900 dark:hover:border-white transition-colors';

  const viewAllLink =
    'flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors group';

  return (
    <div className="pb-20">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl">
          <p className={sectionLabel + ' mb-6'}>
            {language === 'ar' ? 'مهندس برمجيات' : 'Full Stack Developer'}
          </p>
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
            {language === 'ar' ? 'البرمجة في مسارها الجديد' : 'Coding in its New Path'}
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            {language === 'ar'
              ? 'أهلاً بيك أنا أسامة الجمل أقدر أساعدك في بناء فكرتك البرمجية'
              : 'Hello, I am Osama El-Gamal. I can help you build your software idea.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className={btnPrimary}>
              {language === 'ar' ? 'شاهد أعمالي' : 'View My Work'}
            </Link>
            <Link to="/contact" className={btnGhost}>
              {language === 'ar' ? 'تواصل معي' : 'Contact Me'}
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Summary */}
      <section className="py-16 md:py-20 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {language === 'ar' ? 'أبرز المشاريع' : 'Featured Projects'}
          </h2>
          <Link to="/projects" className={`${viewAllLink} hidden md:flex`}>
            <span>{language === 'ar' ? 'عرض الكل' : 'View All'}</span>
            <ArrowIcon size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="md:hidden flex justify-center mt-8">
          <Link to="/projects" className={viewAllLink}>
            <span>{language === 'ar' ? 'عرض الكل' : 'View All'}</span>
            <ArrowIcon size={16} />
          </Link>
        </div>
      </section>

      {/* Certificates Summary */}
      <section className="py-16 md:py-20 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {language === 'ar' ? 'أحدث الشهادات' : 'Latest Certificates'}
          </h2>
          <Link to="/about#certificates" className={`${viewAllLink} hidden md:flex`}>
            <span>{language === 'ar' ? 'شاهد الكل' : 'View All'}</span>
            <ArrowIcon size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {summaryCertificates.map(cert => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>

        <div className="md:hidden flex justify-center mt-6">
          <Link to="/about#certificates" className={viewAllLink}>
            <span>{language === 'ar' ? 'شاهد الكل' : 'View All'}</span>
            <ArrowIcon size={16} />
          </Link>
        </div>
      </section>

      {/* About & Contact Summary */}
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
        {/* About Summary */}
        <section className="py-16 md:p-20 flex flex-col justify-center">
          <p className={sectionLabel + ' mb-4'}>
            {language === 'ar' ? 'نبذة عني' : 'About'}
          </p>
          <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">
            {language === 'ar' ? 'من أنا؟' : 'Who I Am'}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-lg">
            {language === 'ar'
              ? 'أنا أسامة مهندس برمجيات مقيم في مصر أنفذ المشاريع البرمجية من الصفر للتشغيل'
              : 'I am Osama, a Software Engineer based in Egypt. I build software projects from scratch to deployment.'}
          </p>
          <Link to="/about" className={`${viewAllLink} self-start`}>
            <span>{language === 'ar' ? 'اقرأ المزيد' : 'Read More'}</span>
            <ArrowIcon size={16} />
          </Link>
        </section>

        {/* Contact Summary */}
        <section className="py-16 md:p-20 flex flex-col justify-center">
          <p className={sectionLabel + ' mb-4'}>
            {language === 'ar' ? 'لنعمل معاً' : 'Contact'}
          </p>
          <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">
            {language === 'ar' ? 'هل لديك فكرة؟' : 'Got an Idea?'}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-lg">
            {language === 'ar'
              ? 'مهتم بمناقشة مشروع أو فرصة؟ أنا متاح للدردشة.'
              : 'Interested in discussing a project or opportunity? I\'m available to chat.'}
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            {summarySocials.map(social => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-50 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors"
                  aria-label={social.nameEn}
                >
                  <Icon size={18} />
                </a>
              )
            })}
            <Link
              to="/contact"
              className={`${btnPrimary} px-6 py-3 ml-auto rtl:ml-0 rtl:mr-auto`}
            >
              {language === 'ar' ? 'تواصل' : 'Contact'}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}