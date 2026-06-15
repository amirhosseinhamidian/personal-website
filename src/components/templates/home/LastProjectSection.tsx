'use client';

import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import ProjectItem from '@/components/modules/ProjectItem/ProjectItem';
import { projectsContent } from '@/content/ProjectsContent';
import { useLanguage } from '@/hooks/useLanguage';
import React from 'react';

const LastProjectSection = () => {
  const { language } = useLanguage();
  const content = projectsContent[language];

  return (
    <div className="container mt-14">
      <GradientTitleH2
        text={content.title}
        className="mb-4 sm:mb-10"
      />

      <div className="flex flex-col gap-8">
        {content.projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default LastProjectSection;