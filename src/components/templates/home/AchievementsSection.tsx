'use client';
import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import Button from '@/components/ui/Button';
import React from 'react';
import { FiArrowUpLeft } from 'react-icons/fi';

interface AchievementsSection {
  className?: string;
}

const AchievementsSection: React.FC<AchievementsSection> = ({
  className = '',
}) => {
  return (
    <div
      className={`gap-6 rounded-xl border border-border-light bg-surface-light px-10 py-4 dark:border-border-dark dark:bg-surface-dark sm:gap-10 md:gap-14 ${className}`}
    >
      <GradientTitleH2 text='دستاوردهای زندگی حرفه ای من' />
      <p className='my-6 text-sm sm:text-base'>
        در طول 5 سال گذشته، مسیر من در دنیای تکنولوژی از توسعه اپلیکیشن‌های
        اندروید آغاز شد و به تدریج به طراحی و توسعه وب با React و Next.js گسترش
        یافت. اولین پروژه فول استک خود را با موفقیت اجرا کردم و همواره در جستجوی
        فرصت‌های جدید برای بهبود مهارت‌ها و رویارویی با چالش‌های نوین هستم.
        علاوه بر برنامه‌نویسی، با علاقه‌مندی در یوتیوب محتوای مرتبط با تاریخچه
        اشیا تولید می‌کنم و همواره به دنبال یادگیری و رشد فردی و حرفه‌ای هستم.
      </p>
      <Button icon={FiArrowUpLeft} className='mb-4 mt-10 text-sm sm:text-base'>
        تماس با من
      </Button>
    </div>
  );
};

export default AchievementsSection;
