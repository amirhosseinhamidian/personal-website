'use client';
import React from 'react';
import { PiBriefcaseLight } from 'react-icons/pi';
import { GrUserExpert } from 'react-icons/gr';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { PiTarget } from 'react-icons/pi';
import { useLanguage } from '@/hooks/useLanguage';
import { statsContent } from '@/content/StatsContent';

const iconMap = {
  briefcase: <PiBriefcaseLight className='mb-4 text-primary' size={24} />,
  expert: <GrUserExpert className='mb-4 text-primary' size={24} />,
  rocket: <HiOutlineRocketLaunch className='mb-4 text-primary' size={24} />,
  target: <PiTarget className='mb-4 text-primary' size={24} />,
};

const StatsCounterSection = () => {
  const { language } = useLanguage();
  const content = statsContent[language];

  return (
    <div className='grid grid-cols-1 gap-6 rounded-xl border border-border-light bg-surface-light px-5 py-4 dark:border-border-dark dark:bg-surface-dark xs:grid-cols-2 sm:grid-cols-4 md:gap-14'>
      {content.map((item, index) => (
        <div
          key={index}
          className='flex min-h-36 flex-col items-center justify-start text-center'
        >
          {iconMap[item.icon as keyof typeof iconMap]}
          <span className='text-3xl font-semibold xs:text-4xl lg:text-5xl'>
            {item.number}
          </span>
          <span className='max-w-36'>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsCounterSection;
