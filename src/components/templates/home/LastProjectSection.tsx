import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import ProjectItem1 from '@/components/modules/ProjectItem1/ProjectItem1';
import React from 'react';

const LastProjectSection = () => {
  return (
    <div className='container mt-14'>
      <GradientTitleH2 text='پروژه های اخیر' className='mb-4 sm:mb-10' />
      <ProjectItem1 />
    </div>
  );
};

export default LastProjectSection;
