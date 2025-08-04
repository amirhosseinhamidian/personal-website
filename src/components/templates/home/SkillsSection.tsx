'use client';
import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import SkillsRow from '@/components/modules/Skills/SkillsRow';
import { skillsContent } from '@/content/SkillsContent';
import { useLanguage } from '@/hooks/useLanguage';
import React from 'react';

const SkillsSection = () => {
  const { language } = useLanguage();
  const skillsList = {
    'front-end': [
      { id: 1, name: 'React.js', level: 90, logo: '/images/skill/react.png' },
      { id: 2, name: 'Next.js', level: 80, logo: '/images/skill/nextjs.png' },
      {
        id: 3,
        name: 'Tailwind CSS',
        level: 90,
        logo: '/images/skill/Tailwind CSS.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        level: 70,
        logo: '/images/skill/TypeScript.png',
      },
      {
        id: 5,
        name: 'JavaScript (ES6+)',
        level: 85,
        logo: '/images/skill/JavaScript.png',
      },
    ],
    'back-end & database': [
      { id: 6, name: 'Node.js', level: 70, logo: '/images/skill/Node.png' },
      { id: 7, name: 'Nest.js', level: 65, logo: '/images/skill/Nest.png' },
      { id: 8, name: 'MongoDB', level: 75, logo: '/images/skill/MongoDB.png' },
      {
        id: 9,
        name: 'PostgreSQL',
        level: 85,
        logo: '/images/skill/PostgresSQL.png',
      },
    ],
    'mobile development': [
      {
        id: 10,
        name: 'Android studio',
        level: 80,
        logo: '/images/skill/Android Studio.png',
      },
      { id: 11, name: 'Kotlin', level: 75, logo: '/images/skill/Kotlin.png' },
      { id: 12, name: 'PWA', level: 70, logo: '/images/skill/pwa.png' },
      {
        id: 13,
        name: 'React Native',
        level: 60,
        logo: '/images/skill/react.png',
      },
    ],
    'tools & devops': [
      { id: 14, name: 'Figma', level: 80, logo: '/images/skill/Figma.png' },
      { id: 15, name: 'XD', level: 95, logo: '/images/skill/Adobe XD.png' },
      {
        id: 16,
        name: 'Git & GitHub',
        level: 85,
        logo: '/images/skill/Git.png',
      },
      { id: 17, name: 'Docker', level: 70, logo: '/images/skill/Docker.png' },
      {
        id: 19,
        name: 'Vercel & Netlify',
        level: 75,
        logo: '/images/skill/Vercel.png',
      },
    ],
  };

  return (
    <div className='container mt-8 flex flex-col items-center sm:mt-10 md:mt-14'>
      <GradientTitleH2 text={skillsContent[language].title} />
      <p className='mt-4 max-w-xl text-center text-xs xs:text-sm sm:text-base'>
        {skillsContent[language].description}
      </p>

      {Object.entries(skillsList).map(([category, skills]) => (
        <SkillsRow
          key={category}
          skillRowTitle={category}
          skills={skills}
          className='mt-14'
        />
      ))}
    </div>
  );
};

export default SkillsSection;
