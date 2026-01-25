import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { useTheme } from './hooks/useTheme';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import Nav from './Components/Nav/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function AppContent() {
  const { language } = useLanguage();
  useTheme(); // Initialize theme

  const [isReady, setIsReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsReady(true);
    const timer = setTimeout(() => {
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <div
      className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-main transition-colors duration-300"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {showLoader && (
        <LoadingScreen isReady={isReady} onComplete={handleLoaderComplete} />
      )}

      <div className={showLoader ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000 delay-300'}>
        <Nav />

        <main className="container mx-auto px-4 py-8 pt-24 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
