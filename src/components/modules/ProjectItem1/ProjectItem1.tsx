import Tag from '@/components/ui/Tag';
import { projectItem1Content } from '@/content/ProjectItem1Content';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';
import React from 'react';

interface ProjectItem1Props {
  className?: string;
}
const ProjectItem1: React.FC<ProjectItem1Props> = ({ className = '' }) => {
  const { language } = useLanguage();
  const content = projectItem1Content[language];

  return (
    <div
      className={`grid grid-cols-1 gap-6 rounded-xl border border-border-light bg-surface-light p-10 dark:border-border-dark dark:bg-surface-dark sm:gap-10 md:gap-14 lg:grid-cols-2 ${className}`}
    >
      <div className='flex flex-col gap-4 self-center md:my-10 md:gap-10'>
        <span className='text-xs text-secondary md:text-sm'>
          {content.projectType}
        </span>
        <h3 className='text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl'>
          {content.title}
        </h3>
        <p className='text-xs xs:text-sm md:text-base'>{content.description}</p>
        <div className='flex flex-wrap items-center justify-center gap-4 sm:justify-start'>
          {content.tags.map((tag) => (
            <Tag key={tag.id} tag={tag.tag} />
          ))}
          <Link
            href='https://samaneyoga.ir'
            className='cursor-pointer whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm text-white transition-all duration-500 hover:bg-secondaryBackground dark:bg-secondaryBackground hover:dark:bg-primary md:text-base'
          >
            {content.button}
          </Link>
        </div>
      </div>
      <iframe
        src='https://samaneyoga.ir'
        className='hidden h-full min-h-96 w-full rounded-xl sm:block'
      />
    </div>
  );
};

export default ProjectItem1;
