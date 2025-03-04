import React from 'react';
import { PiBriefcaseLight } from 'react-icons/pi';
import { GrUserExpert } from 'react-icons/gr';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { PiTarget } from 'react-icons/pi';

const StatsCounterSection = () => {
  return (
    <div className='flex flex-col flex-wrap items-center justify-around gap-6 rounded-xl border border-border-light bg-surface-light px-5 py-4 dark:border-border-dark dark:bg-surface-dark sm:flex-row sm:gap-10 md:gap-14'>
      <div className='flex flex-col'>
        <PiBriefcaseLight className='mb-4 text-primary' size={24} />
        <span className='text-3xl font-semibold xs:text-4xl lg:text-5xl'>
          05+
        </span>
        <span className='max-w-24'>سال تجربه در برنامه نویسی</span>
      </div>
      <div className='flex flex-col'>
        <GrUserExpert className='mb-4 text-primary' size={24} />
        <span className='text-3xl font-semibold xs:text-4xl lg:text-5xl'>
          01+
        </span>
        <span className='max-w-32'>سال متخصص React & Next.js</span>
      </div>
      <div className='flex flex-col'>
        <HiOutlineRocketLaunch className='mb-4 text-primary' size={24} />
        <span className='text-2xl font-semibold xs:text-3xl lg:text-4xl'>
          اولین
        </span>
        <span className='font-pinarpn max-w-36'>
          پروژه طراحی 0 تا 100 سایت تکمیل شد
        </span>
      </div>
      <div className='flex flex-col'>
        <PiTarget className='mb-4 text-primary' size={24} />
        <span className='text-2xl font-semibold xs:text-3xl lg:text-4xl'>
          هدف
        </span>
        <span className='max-w-32'>توسعه وبسایت‌های سریع و مدرن</span>
      </div>
    </div>
  );
};

export default StatsCounterSection;
