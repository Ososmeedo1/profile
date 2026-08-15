import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useLanguage } from '../../hooks/useLanguage';
import { identity } from '../../data/identity';

const LanguageGlyph = () => (
  <Globe size={16} />
);

const iconBtn =
    'p-2 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const links = [
    { nameEn: 'About', nameAr: 'عنّي', path: '/about' },
    { nameEn: 'Projects', nameAr: 'مشاريعي', path: '/projects' },
    { nameEn: 'Contact', nameAr: 'تواصل معي', path: '/contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
        <Link to="/" className="text-base font-bold uppercase tracking-[0.15em] text-zinc-900 dark:text-zinc-50 truncate max-w-[50vw]">
          {language === 'ar' ? identity.nameAr : identity.nameEn}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 rtl:gap-8">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-[0.2em] transition-colors ${
                location.pathname === link.path
                  ? 'text-zinc-900 dark:text-zinc-50 font-bold underline underline-offset-8'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
              }`}
            >
              {language === 'ar' ? link.nameAr : link.nameEn}
            </Link>
          ))}

          <button
            onClick={toggleLanguage}
            className={iconBtn}
            aria-label="Toggle Language"
          >
            <LanguageGlyph />
          </button>

          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 rtl:gap-4">
          <button
            onClick={toggleLanguage}
            className={iconBtn}
            aria-label="Toggle Language"
          >
            <LanguageGlyph />
          </button>

          <ThemeToggle />

          <button onClick={toggleMenu} aria-label="Toggle Menu" className="p-2 border border-zinc-200 dark:border-zinc-800">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 text-sm uppercase tracking-[0.2em] border-b border-zinc-100 dark:border-zinc-900 ${
                location.pathname === link.path
                  ? 'font-bold text-zinc-900 dark:text-zinc-50'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
              }`}
            >
              {language === 'ar' ? link.nameAr : link.nameEn}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}