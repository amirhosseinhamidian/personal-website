import Tag from '@/components/ui/Tag';
import React from 'react';
import { IconType } from 'react-icons';

interface Tag {
  id: number;
  tag: string;
}

interface Specialty {
  id: number;
  icon: IconType; // چون `icon` از react-icons می‌آید
  title: string;
  description: string;
  tags: Tag[];
}

interface SpecialtyItemProps {
  className?: string;
  specialty: Specialty;
}

const SpecialtyItem: React.FC<SpecialtyItemProps> = ({
  className = '',
  specialty,
}) => {
  return (
    <div
      className={`flex h-full flex-col justify-between rounded-xl border border-border-light bg-surface-light dark:border-border-dark dark:bg-surface-dark ${className}`}
    >
      <div className='flex grow flex-col'>
        <div className='flex items-center gap-3 rounded-t-xl bg-primary p-4 dark:bg-secondaryBackground'>
          <div className='bg-gradient-icon-light rounded-xl p-2'>
            <specialty.icon size={36} className='text-white' />
          </div>
          <h3 className='text-base font-medium text-white sm:text-lg xl:text-xl'>
            {specialty.title}
          </h3>
        </div>
        <p className='tex-xs p-4 sm:text-sm lg:text-base'>
          {specialty.description}
        </p>
      </div>
      <div className='mt-auto flex flex-wrap gap-3 p-4'>
        {specialty.tags.map((tag) => (
          <Tag key={tag.id} tag={tag.tag} className='text-xs md:text-sm' />
        ))}
      </div>
    </div>
  );
};

export default SpecialtyItem;
