'use client';
import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { educationExperienceContent } from '@/content/EducationExperienceContent';

const EducationExperienceSection = () => {
  const { language } = useLanguage();
  const content = educationExperienceContent[language];

  return (
    <div className='container mt-12 md:mt-16'>
      <GradientTitleH2 text={content.sectionTitle} className='mb-6 md:mb-12' />
      <div className='grid grid-cols-1 gap-4 rounded-xl border border-border-light bg-surface-light p-12 dark:border-border-dark dark:bg-surface-dark md:grid-cols-2'>
        {/* آموزش‌ها */}
        <div>
          <h2 className='mb-6 text-xl font-bold text-primary dark:text-secondary sm:text-2xl'>
            {content.educationTitle}
          </h2>
          <div
            className={`relative border-gray-300 dark:border-gray-600 ${language === 'fa' ? 'border-r pr-6' : 'border-l pl-6'}`}
          >
            {content.education.map((item) => (
              <div key={item.id} className='relative mb-8'>
                <h3 className='pr-2 text-base font-semibold sm:text-lg'>
                  {item.title}
                </h3>
                <div className='mt-2 flex gap-3'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={200}
                    height={200}
                    className='h-10 w-10 rounded-full'
                  />
                  <div>
                    <p className='text-xs text-subtext-light dark:text-subtext-dark sm:text-sm'>
                      {item.org}
                    </p>
                    <p
                      className={`text-xs text-subtext-light dark:text-subtext-dark sm:text-sm ${language === 'fa' && 'font-pinarpn'}`}
                    >
                      {item.year}
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute top-2 h-4 w-4 rounded-full bg-primary ${language === 'fa' ? '-right-8' : '-left-8'}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* تجربه‌ها */}
        <div>
          <h2 className='mb-6 text-xl font-bold text-primary dark:text-secondary sm:text-2xl'>
            {content.experienceTitle}
          </h2>
          <div
            className={`relative border-gray-300 dark:border-gray-600 ${language === 'fa' ? 'border-r pr-6' : 'border-l pl-6'}`}
          >
            {content.experience.map((exp) => (
              <div key={exp.id} className='relative mb-8'>
                <div
                  className={`absolute top-2 h-4 w-4 rounded-full bg-primary ${language === 'fa' ? '-right-8' : '-left-8'}`}
                />
                <h3 className='text-base font-semibold sm:text-lg'>
                  {exp.title}
                </h3>
                {exp.items.map((item, idx) => (
                  <p
                    key={idx}
                    className={`text-xs text-subtext-light dark:text-subtext-dark sm:text-sm ${language === 'fa' && 'font-pinarpn'}`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperienceSection;
