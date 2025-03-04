import Image from 'next/image';
import React from 'react';

interface Skill {
  id: number;
  name: string;
  level: number;
  logo: string;
}

interface SkillsItemProps {
  className?: string;
  skill: Skill;
}

const SkillsItem: React.FC<SkillsItemProps> = ({ className = '', skill }) => {
  return (
    <div
      className={`flex flex-col items-center justify-stretch gap-3 text-center ${className}`}
    >
      <div className='group rounded-xl border border-border-light bg-surface-light px-6 py-6 transition-all duration-700 hover:border-secondaryBackground hover:bg-secondaryBackground dark:border-border-dark dark:bg-surface-dark hover:dark:border-primary hover:dark:bg-primary hover:dark:bg-opacity-30'>
        <Image
          src={skill.logo}
          alt={skill.name}
          width={200}
          height={200}
          className='mb-6 h-24 w-24 min-w-28 object-contain p-2 grayscale transition-all duration-700 group-hover:scale-125 group-hover:grayscale-0 lg:p-4'
        />
        <span className='dark:text-sub font-medium text-subtext-light group-hover:text-primary'>
          {skill.level} %
        </span>
      </div>
      <span>{skill.name}</span>
    </div>
  );
};

export default SkillsItem;
