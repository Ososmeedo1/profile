import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
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
    <div className="container mx-auto px-4 animate-in fade-in duration-500">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">
          {language === 'ar' ? 'مشاريعي' : 'My Projects'}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          {language === 'ar'
            ? 'مجموعة مختارة من أعمالي تبرز مهاراتي في تطوير الويب وتصميم الواجهات.'
            : 'A selection of my work highlighting my skills in web development and interface design.'}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat.id
              ? 'bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 shadow-md transform scale-105'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
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
        <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border-dashed border-2 border-zinc-200 dark:border-zinc-800">
          <p className="text-zinc-500">
            {language === 'ar' ? 'لا توجد مشاريع في هذه الفئة حالياً.' : 'No projects found in this category yet.'}
          </p>
        </div>
      )}
    </div>
  );
}
