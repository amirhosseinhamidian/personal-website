'use client';
import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import SpecialtyItem from '@/components/modules/Specialty/SpecialtyItem';
import { useLanguage } from '@/hooks/useLanguage';
import { mySpecialtyContent } from '@/content/MySpecialtyContent';
import React from 'react';

const MySpecialtySection = () => {
  const { language } = useLanguage();
  const content = mySpecialtyContent[language];

  return (
    <div className='container mt-12 md:mt-16'>
      <GradientTitleH2 text={content.sectionTitle} className='mb-6 md:mb-12' />
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {content.specialties.map((specialty) => (
          <SpecialtyItem key={specialty.id} specialty={specialty} />
        ))}
      </div>
    </div>
  );
};

export default MySpecialtySection;
