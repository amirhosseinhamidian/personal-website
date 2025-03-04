'use client';

import { useTheme } from '@/hooks/useTheme';
import { LuSun, LuMoon } from 'react-icons/lu';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-primary bg-transparent p-1.5 text-primary transition-colors duration-300 ${className}`}
    >
      <span className='absolute h-full w-full scale-0 rounded-full bg-primary transition-transform duration-300 group-hover:-scale-100'></span>
      <span className='relative z-10 transform text-primary group-hover:text-white'>
        {theme === 'light' ? <LuMoon size={24} /> : <LuSun size={24} />}
      </span>
    </button>
  );
}
