'use client';

import React, { useEffect, useState } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';
import Navigation from '../Navigation/Navigation';
import Button from '@/components/ui/Button';
import { FiDownload } from 'react-icons/fi';
import Drawer from '../Drawer/Drawer';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

const Header = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 80 && currentScrollY < prevScrollY) {
        setIsVisible(false); // نمایش هدر هنگام اسکرول بالا
      } else if (currentScrollY > 80 && currentScrollY > prevScrollY) {
        setIsVisible(true); // مخفی کردن هدر هنگام اسکرول پایین
      }
      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (theme === null) return null;

  return (
    <>
      {/* هدر اصلی */}
      <header className='container flex items-center justify-between pb-6 pt-10'>
        <div className='flex items-center gap-2'>
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
          <a
            href='mailto:amirhossein611@gmail.com'
            className='hidden text-sm transition-all duration-300 ease-in hover:text-primary lg:flex'
          >
            amirhossein611@gmail.com
          </a>
        </div>
        <div className='hidden md:flex'>
          <Navigation direction='row' />
        </div>
        <div className='flex items-center gap-3 sm:gap-4'>
          <ThemeToggle />
          <LanguageToggle />
          <Link href='/resume.pdf' className='hidden md:flex'>
            <Button shadow icon={FiDownload}>
              {language === 'fa' ? 'رزومه' : 'Resume'}
            </Button>
          </Link>
        </div>
        <div className='flex items-center md:hidden'>
          <Drawer />
        </div>
      </header>
      <div
        className={`fixed left-0 top-0 z-40 w-full bg-white shadow-[0px_0px_10px_rgba(135,80,246,0.5)] transition-transform duration-300 dark:bg-black ${
          isVisible ? '-translate-y-full shadow-none' : 'translate-y-0'
        }`}
      >
        <header className='container flex items-center justify-between py-6'>
          <div className='flex items-center gap-2'>
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
            <a
              href='mailto:amirhosseinhamidian@info.ir'
              className='hidden text-sm transition-all duration-300 ease-in hover:text-primary lg:flex'
            >
              amirhosseinhamidian@info.ir
            </a>
          </div>
          <div className='hidden md:flex'>
            <Navigation direction='row' />
          </div>
          <div className='flex items-center gap-3 sm:gap-4'>
            <ThemeToggle />
            <LanguageToggle />
            <Link href='/resume.pdf' className='hidden md:flex'>
              <Button shadow icon={FiDownload}>
                {language === 'fa' ? 'رزومه' : 'Resume'}
              </Button>
            </Link>
          </div>
          <div className='flex items-center md:hidden'>
            <Drawer />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
