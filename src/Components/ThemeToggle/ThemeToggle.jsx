import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${theme === 'dark'
          ? 'bg-zinc-800 text-yellow-400 hover:bg-zinc-700'
          : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-orange-500'
        }
      `}
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-full h-full transition-all duration-300 transform 
                ${theme === 'dark' ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}
            `}
        />
        <Moon
          className={`absolute inset-0 w-full h-full transition-all duration-300 transform 
                ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'}
            `}
        />
      </div>
    </button>
  );
}
