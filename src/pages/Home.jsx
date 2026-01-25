import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { certificates } from '../data/certificates';
import { socials } from '../data/socials';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import CertificateCard from '../Components/CertificateCard/CertificateCard';

export default function Home() {
  const { language } = useLanguage();

  // Data slices
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const summaryCertificates = certificates.slice(0, 2);
  const summarySocials = socials.slice(0, 4); // Display first 4 social icons

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-24 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl">
          <p className="text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase mb-4">
            {language === 'ar' ? 'مهندس برمجيات' : 'Full Stack Developer'}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-zinc-900 dark:text-zinc-50 leading-tight">
            {language === 'ar' ? 'البرمجة في مسارها الجديد' : 'Coding in its New Path'}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-2xl">
            {language === 'ar'
              ? 'أهلاً بيك أنا أسامة الجمل أقدر أساعدك في بناء فكرتك البرمجية'
              : 'Hello, I am Osama El-Gamal. I can help you build your software idea.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              {language === 'ar' ? 'شاهد أعمالي' : 'View My Work'}
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              {language === 'ar' ? 'تواصل معي' : 'Contact Me'}
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Summary */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {language === 'ar' ? 'أبرز المشاريع' : 'Featured Projects'}
          </h2>
          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors group"
          >
            <span>{language === 'ar' ? 'عراض الكل' : 'View All'}</span>
            <ArrowIcon size={18} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="md:hidden flex justify-center">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <span>{language === 'ar' ? 'عراض الكل' : 'View All'}</span>
            <ArrowIcon size={18} />
          </Link>
        </div>
      </section>

      {/* Certificates Summary */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {language === 'ar' ? 'أحدث الشهادات' : 'Latest Certificates'}
          </h2>
          <Link
            to="/about#certificates"
            className="hidden md:flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors group"
          >
            <span>{language === 'ar' ? 'شاهد الكل' : 'View All'}</span>
            <ArrowIcon size={18} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {summaryCertificates.map(cert => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>

        <div className="md:hidden flex justify-center mt-6">
          <Link
            to="/about#certificates"
            className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <span>{language === 'ar' ? 'شاهد الكل' : 'View All'}</span>
            <ArrowIcon size={18} />
          </Link>
        </div>
      </section>

      {/* About & Contact Summary */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* About Summary */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-8 md:p-12 h-full flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">{language === 'ar' ? 'نبذة عني' : 'About Summary'}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-lg">
            {language === 'ar'
              ? 'أنا أسامة شاب عشريني من كلية حاسبات و معلومات مقيم في مصر أنفذ المشاريع البرمجية من الصفر للتشغيل'
              : 'I am Osama, a young developer in my twenties from the Faculty of Computer Science, based in Egypt. I build software projects from scratch to deployment.'}
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline group">
            <span>{language === 'ar' ? 'اقرأ المزيد' : 'Read More'}</span>
            <ArrowIcon size={18} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </section>

        {/* Contact Summary */}
        <section className="bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 rounded-2xl p-8 md:p-12 h-full flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">{language === 'ar' ? 'لنعمل معاً' : 'Let\'s Work Together'}</h2>
          <p className="text-zinc-400 dark:text-zinc-600 mb-8 max-w-lg">
            {language === 'ar'
              ? 'مهتم بمناقشة مشروع أو فرصة؟ أنا متاح للدردشة.'
              : 'Interested in discussing a project or opportunity? I\'m available to chat.'}
          </p>

          <div className="flex gap-4">
            {summarySocials.map(social => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 dark:bg-zinc-200/50 rounded-full hover:bg-white/20 dark:hover:bg-zinc-200 transition-colors"
                >
                  <Icon size={20} />
                </a>
              )
            })}
            <Link
              to="/contact"
              className="px-6 py-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full font-medium hover:opacity-90 transition-opacity ml-auto rtl:ml-0 rtl:mr-auto"
            >
              {language === 'ar' ? 'تواصل' : 'Contact'}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
