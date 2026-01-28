import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useLanguage } from '../../context/LanguageContext';
import { identity } from '../../data/identity';

const LanguageGlyph = () => (
  <Globe size={20} className="text-zinc-900 dark:text-zinc-50" />
);

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const links = [
    { nameEn: 'About', nameAr: 'عنَّي', path: '/about' },
    { nameEn: 'Projects', nameAr: 'مشاريعي', path: '/projects' },
    { nameEn: 'Contact', nameAr: 'تواصل معي', path: '/contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
          {language === 'ar' ? identity.nameAr : identity.nameEn}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-wide text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors ${location.pathname === link.path ? 'font-bold text-zinc-900 dark:text-zinc-50' : ''}`}
            >
              {language === 'ar' ? link.nameAr : link.nameEn}
            </Link>
          ))}

          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Language"
          >
            <LanguageGlyph />
          </button>

          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse text-zinc-900 dark:text-zinc-50">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Language"
          >
            <LanguageGlyph />
          </button>

          <ThemeToggle />

          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-4 flex flex-col space-y-4 shadow-lg">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm uppercase tracking-wide py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors ${location.pathname === link.path ? 'font-bold text-zinc-900 dark:text-zinc-50' : ''}`}
            >
              {language === 'ar' ? link.nameAr : link.nameEn}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
