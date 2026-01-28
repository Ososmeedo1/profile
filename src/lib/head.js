import { pageMeta } from '../data/pageMeta';

export const getPageTitle = (key, language) => {
  const entry = pageMeta[key];
  if (!entry) return language === 'ar' ? 'الملف الشخصي' : 'Portfolio';
  return language === 'ar' ? entry.titleAr : entry.titleEn;
};
