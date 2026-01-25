import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects, categories } from '../../data/projects';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  useGSAP(() => {
    if (prefersReducedMotion) return;

    // Kill any existing animations on the cards to reset
    gsap.killTweensOf('.project-card');

    // Animate cards when they enter viewport or when filter changes
    gsap.fromTo('.project-card',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

  }, { scope: containerRef, dependencies: [activeCategory, prefersReducedMotion] });

  return (
    <div className="w-full max-w-7xl mx-auto px-4" ref={containerRef}>
      <div className="flex flex-col items-center mb-16 space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-600">
          Featured Projects
        </h2>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-lg transform scale-105'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 hover:shadow-sm'
                }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="min-h-[400px]">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-center animate-in fade-in zoom-in duration-300">
            <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-4">
              No projects found in this category.
            </p>
            <button
              onClick={() => setActiveCategory('All')}
              className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors"
            >
              Clear Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
