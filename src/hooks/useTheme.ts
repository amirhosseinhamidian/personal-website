'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || null;
  });

  useEffect(() => {
    // اعمال تغییرات در document
    document.documentElement.classList.toggle('dark', theme === 'dark');

    // ذخیره در localStorage
    localStorage.setItem('theme', theme);

    // ارسال رویداد تغییر برای اطلاع به کامپوننت‌های دیگر
    window.dispatchEvent(new Event('themeChanged'));
  }, [theme]);

  useEffect(() => {
    // گوش دادن به تغییرات تم در localStorage (برای هماهنگی بین تب‌ها)
    const syncTheme = () => {
      const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      if (storedTheme) {
        setTheme(storedTheme);
      }
    };

    window.addEventListener('themeChanged', syncTheme);
    return () => window.removeEventListener('themeChanged', syncTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
