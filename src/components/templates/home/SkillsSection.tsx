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
      {
        id: 1,
        name: 'React.js',
        level: 90,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/React.png',
      },
      {
        id: 2,
        name: 'Next.js',
        level: 80,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/nextjs.png',
      },
      {
        id: 3,
        name: 'Tailwind CSS',
        level: 90,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/Tailwind%20CSS.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        level: 70,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/TypeScript.png',
      },
      {
        id: 5,
        name: 'JavaScript (ES6+)',
        level: 85,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/JavaScript.png',
      },
    ],
    'back-end & database': [
      {
        id: 6,
        name: 'Node.js',
        level: 70,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/Node.png',
      },
      {
        id: 7,
        name: 'Nest.js',
        level: 65,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/Nest.png',
      },
      {
        id: 8,
        name: 'MongoDB',
        level: 75,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/MongoDB.png',
      },
      {
        id: 9,
        name: 'PostgreSQL',
        level: 85,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/PostgresSQL.png',
      },
    ],
    'mobile development': [
      {
        id: 10,
        name: 'Android studio',
        level: 80,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/Android%20Studio.png',
      },
      {
        id: 11,
        name: 'Kotlin',
        level: 75,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/Kotlin.png',
      },
      {
        id: 12,
        name: 'PWA',
        level: 70,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/pwa.png',
      },
      {
        id: 13,
        name: 'React Native',
        level: 60,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/React.png',
      },
    ],
    'tools & devops': [
      {
        id: 14,
        name: 'Figma',
        level: 80,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/Figma.png',
      },
      {
        id: 15,
        name: 'XD',
        level: 95,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/Adobe%20XD.png',
      },
      {
        id: 16,
        name: 'Git & GitHub',
        level: 85,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/Git.png',
      },
      {
        id: 17,
        name: 'Docker',
        level: 70,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/Docker.png',
      },
      {
        id: 19,
        name: 'Vercel & Netlify',
        level: 75,
        logo: 'https://amirhosseinhamidian.storage.c2.liara.space/skill/Vercel.png',
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
