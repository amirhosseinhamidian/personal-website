'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // مقدار اولیه از localStorage بخون
  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (stored) {
      setTheme(stored);
    }
  }, []);

  // اعمال کلاس به DOM و ذخیره در localStorage
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new Event('themeChanged'));
  }, [theme]);

  // گوش دادن به تغییر در تب‌های دیگر
  useEffect(() => {
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
