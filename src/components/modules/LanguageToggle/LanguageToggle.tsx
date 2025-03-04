'use client';

import { useLanguage } from '@/hooks/useLanguage';

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({
  className = '',
}: LanguageToggleProps) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-primary bg-transparent p-2 text-primary transition-colors duration-300 ${className}`}
    >
      <span className='absolute h-full w-full scale-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-100'></span>

      <span className='relative z-10 translate-y-[2px] text-sm font-medium text-primary group-hover:text-white'>
        {language === 'fa' ? 'EN' : 'FA'}
      </span>
    </button>
  );
}
