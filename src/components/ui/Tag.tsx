import React from 'react';

interface TagProps {
  className?: string;
  tag: string;
  hint?: string;
}
const Tag: React.FC<TagProps> = ({ tag = '', className = '' }) => {
  return (
    <div
      className={`cursor-pointer whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm text-white transition-all duration-500 hover:bg-secondaryBackground dark:bg-secondaryBackground hover:dark:bg-primary md:text-base ${className}`}
    >
      {tag}
    </div>
  );
};

export default Tag;
