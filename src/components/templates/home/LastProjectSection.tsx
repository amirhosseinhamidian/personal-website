'use client';
import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import ProjectItem1 from '@/components/modules/ProjectItem1/ProjectItem1';
import { lastProjectsContent } from '@/content/LastProjectsContent';
import { useLanguage } from '@/hooks/useLanguage';
import React from 'react';

const LastProjectSection = () => {
  const { language } = useLanguage();

  return (
    <div className='container mt-14'>
      <GradientTitleH2
        text={lastProjectsContent[language].title}
        className='mb-4 sm:mb-10'
      />
      <ProjectItem1 />
    </div>
  );
};

export default LastProjectSection;
