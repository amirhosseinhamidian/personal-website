'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';
import Navigation from '../Navigation/Navigation';

const Footer = () => {
  const { theme } = useTheme();
  if (theme === null) return null;
  return (
    <div className='flex flex-col items-center justify-center gap-10 bg-secondaryBackground px-10 py-14'>
      <Image
        key={theme}
        src={
          theme === 'dark'
            ? 'https://amirhosseinhamidian.storage.c2.liara.space/other/logo-dk.png'
            : 'https://amirhosseinhamidian.storage.c2.liara.space/other/logo-li.png'
        }
        alt='amirhossein hamidian site logo'
        width={600}
        height={540}
        className='max-w-12 sm:max-w-16'
      />
      <Navigation direction='wrap' />
      <p className='text-xs text-primary md:text-sm'>© تمامی حقوق محفوظ است</p>
    </div>
  );
};

export default Footer;
