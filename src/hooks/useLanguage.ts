'use client';

import { useState, useEffect } from 'react';

export function useLanguage() {
  const [language, setLanguage] = useState<'fa' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as 'fa' | 'en') || 'fa';
    }
    return 'fa'; // مقدار پیش‌فرض در SSR
  });

  useEffect(() => {
    // وقتی زبان تغییر کرد، مقدار `lang` را در `document.documentElement` تنظیم کن
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';

    // تغییر مقدار در localStorage
    localStorage.setItem('language', language);

    // ارسال یک رویداد سفارشی برای اطلاع به سایر کامپوننت‌ها
    window.dispatchEvent(new Event('languageChanged'));
  }, [language]);

  // گوش دادن به رویداد تغییر زبان در سایر تب‌ها
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
