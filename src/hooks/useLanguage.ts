'use client';

import { useState, useEffect } from 'react';

export function useLanguage() {
  const [language, setLanguage] = useState<'fa' | 'en'>('fa');

  // مقدار اولیه از localStorage
  useEffect(() => {
    const stored = localStorage.getItem('language') as 'fa' | 'en' | null;
    if (stored) {
      setLanguage(stored);
    }
  }, []);

  // اعمال زبان در DOM و ذخیره در localStorage
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
    window.dispatchEvent(new Event('languageChanged'));
  }, [language]);

  // sync زبان بین تب‌ها
  useEffect(() => {
    const syncLanguage = () => {
      const storedLanguage = localStorage.getItem('language') as 'fa' | 'en';
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    };

    window.addEventListener('languageChanged', syncLanguage);
    return () => window.removeEventListener('languageChanged', syncLanguage);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fa' ? 'en' : 'fa'));
  };

  return { language, toggleLanguage };
}
