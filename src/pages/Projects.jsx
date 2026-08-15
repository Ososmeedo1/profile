import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../hooks/useLanguage';
import { projects } from '../data/projects';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import { getPageTitle } from '../lib/head';

export default function Projects() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState('All');
  const pageTitle = getPageTitle('projects', language);

  const categories = useMemo(() => {
    return [
      { id: 'All', labelEn: 'All Projects', labelAr: 'كل المشاريع' },
      { id: 'Frontend', labelEn: 'Frontend', labelAr: 'واجهة أمامية' },
      { id: 'Backend', labelEn: 'Backend', labelAr: 'واجهة خلفية' }
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(project => project.category === filter);
  }, [filter]);

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className="py-12 md:py-16 border-b border-zinc-200 dark:border-zinc-800 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-zinc-50">
          {language === 'ar' ? 'مشاريعي' : 'My Projects'}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          {language === 'ar'
            ? 'مجموعة مختارة من أعمالي تبرز مهاراتي في تطوير الويب وتصميم الواجهات.'
            : 'A selection of my work highlighting my skills in web development and interface design.'}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-5 py-2 text-xs uppercase tracking-[0.2em] font-bold border transition-colors ${
              filter === cat.id
                ? 'bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-50'
                : 'bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-900 dark:hover:border-zinc-50 hover:text-zinc-900 dark:hover:text-zinc-50'
            }`}
            aria-pressed={filter === cat.id}
          >
            {language === 'ar' ? cat.labelAr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-zinc-300 dark:border-zinc-700">
          <p className="text-zinc-500 dark:text-zinc-400">
            {language === 'ar' ? 'لا توجد مشاريع في هذه الفئة حالياً.' : 'No projects found in this category yet.'}
          </p>
          <button
            onClick={() => setFilter('All')}
            className="mt-6 px-5 py-2 text-xs uppercase tracking-[0.2em] font-bold border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors"
          >
            {language === 'ar' ? 'عرض الكل' : 'View All'}
          </button>
        </div>
      )}
    </div>
  );
}