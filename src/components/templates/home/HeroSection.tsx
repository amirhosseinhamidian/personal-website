'use client';
import GradientTitleH1 from '@/components/modules/GradientTitle/GradientTitleH1';
import SocialLinks from '@/components/modules/SocialLinks/SocialLinks';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiDownload } from 'react-icons/fi';

const HeroSection = () => {
  const { language } = useLanguage();
  const heroTitle =
    language === 'fa'
      ? 'سلام؛ امیرحسین حمیدیان هستم طراح و توسعه دهنده وب'
      : 'Hello; I am Amirhossein Hamidian, web designer and developer.';
  const heroDesc =
    language === 'fa'
      ? 'با عشق کدنویسی می‌کنم، از خلق ایده‌های خلاقانه لذت می‌برم و زیبایی را در سادگی می‌بینم.'
      : 'I love coding, I enjoy generating creative ideas, and I see beauty in simplicity.';
  return (
    <div className='flex flex-col items-center gap-6 rounded-xl border border-border-light bg-surface-light px-5 py-4 dark:border-border-dark dark:bg-surface-dark sm:flex-row sm:gap-10 md:gap-14'>
      <Image
        src='https://amirhosseinhamidian.storage.c2.liara.space/other/hero.jpg'
        alt='hero amirhossein hamidian'
        width={400}
        height={600}
        priority
        className='h rounded-xl border border-gray-800 sm:h-64 sm:w-52 md:h-80 md:w-64'
      />
      <div className='flex flex-col gap-6'>
        <GradientTitleH1 className='lg:max-w-xl' text={heroTitle} />
        <p className='md:max-w-md'>{heroDesc}</p>
        <div className='flex flex-wrap-reverse justify-center gap-6 sm:justify-start'>
          <Link href='/resume.pdf'>
            <Button shadow icon={FiDownload}>
              {language === 'fa' ? 'رزومه' : 'Resume'}
            </Button>
          </Link>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
