'use client';
import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { consultingContent } from '@/content/ConsultingContent';

interface ConsultingSectionProps {
  className?: string;
}

const ConsultingSection: React.FC<ConsultingSectionProps> = ({
  className = '',
}) => {
  const { language } = useLanguage();
  return (
    <div
      className={`gap-6 rounded-xl border border-border-light bg-surface-light px-10 pb-4 pt-12 dark:border-border-dark dark:bg-surface-dark sm:gap-10 md:gap-14 ${className}`}
    >
      <h3 className='mb-8 text-base font-semibold sm:text-lg'>
        {consultingContent[language].title}
      </h3>
      <p className='text-sm sm:text-base'>
        {consultingContent[language].description}
      </p>
      <ul className='mt-6 space-y-2 text-sm sm:text-base'>
        {consultingContent[language].points.map((point, index) => (
          <li key={index} className='flex items-center gap-2'>
            <span className='text-primary'>🔹</span> {point}
          </li>
        ))}
      </ul>
      <Image
        src='/images/startup.png'
        alt={consultingContent[language].imageAlt}
        width={800}
        height={800}
      />
    </div>
  );
};

export default ConsultingSection;
