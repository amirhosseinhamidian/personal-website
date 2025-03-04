import React from 'react';
import SkillsItem from './SkillsItem';

interface Skill {
  id: number;
  name: string;
  level: number;
  logo: string;
}

interface SkillsRowProps {
  className?: string;
  skillRowTitle: string;
  skills: Skill[];
}
const SkillsRow: React.FC<SkillsRowProps> = ({
  className = '',
  skillRowTitle,
  skills,
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className='mb-8 font-medium uppercase text-subtext-light dark:text-subtext-dark'>
        {skillRowTitle}
      </span>
      <div className='flex flex-wrap justify-center gap-4'>
        {skills.map((skill) => (
          <SkillsItem key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsRow;
