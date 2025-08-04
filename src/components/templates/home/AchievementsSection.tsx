'use client';
import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import Button from '@/components/ui/Button';
import { achievementsContent } from '@/content/AchievementsContent';
import { useLanguage } from '@/hooks/useLanguage';
import { scrollToSection } from '@/utils/scrollToSection';
import React from 'react';
import { FiArrowUpLeft } from 'react-icons/fi';

interface AchievementsSection {
  className?: string;
}

const AchievementsSection: React.FC<AchievementsSection> = ({
  className = '',
}) => {
  const { language } = useLanguage();
  return (
    <div
      className={`gap-6 rounded-xl border border-border-light bg-surface-light px-10 py-4 dark:border-border-dark dark:bg-surface-dark sm:gap-10 md:gap-14 ${className}`}
    >
      <GradientTitleH2 text={achievementsContent[language].title} />
      <p className='my-6 text-sm sm:text-base'>
        {achievementsContent[language].description}
      </p>
      <Button
        icon={FiArrowUpLeft}
        className='mb-4 mt-10 text-sm sm:text-base'
        onClick={() => scrollToSection('contact')}
      >
        {achievementsContent[language].button}
      </Button>
    </div>
  );
};

export default AchievementsSection;
