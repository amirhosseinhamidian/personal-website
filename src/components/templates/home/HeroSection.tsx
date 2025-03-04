'use client';
import GradientTitleH1 from '@/components/modules/GradientTitle/GradientTitleH1';
import SocialLinks from '@/components/modules/SocialLinks/SocialLinks';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';
import { FiDownload } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center gap-6 rounded-xl border border-border-light bg-surface-light px-5 py-4 dark:border-border-dark dark:bg-surface-dark sm:flex-row sm:gap-10 md:gap-14'>
      <Image
        src='/images/hero.jpg'
        alt='hero amirhossein hamidian'
        width={400}
        height={600}
        className='h rounded-xl border border-gray-800 sm:h-64 sm:w-52 md:h-80 md:w-64'
      />
      <div className='flex flex-col gap-6'>
        <GradientTitleH1
          className='lg:max-w-xl'
          text={`سلام؛ امیرحسین حمیدیان هستم طراح و توسعه دهنده وب`}
        />
        <p className='md:max-w-md'>
          با عشق کدنویسی می‌کنم، از خلق ایده‌های خلاقانه لذت می‌برم و زیبایی را
          در سادگی می‌بینم.
        </p>
        <div className='flex flex-wrap-reverse justify-center gap-6 sm:justify-start'>
          <Button shadow icon={FiDownload}>
            رزومه
          </Button>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
