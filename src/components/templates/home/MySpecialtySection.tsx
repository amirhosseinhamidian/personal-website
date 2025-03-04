import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import React from 'react';
import { LuMonitor } from 'react-icons/lu';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { MdInsertChartOutlined } from 'react-icons/md';
import { PiLightbulbFilament } from 'react-icons/pi';
import SpecialtyItem from '@/components/modules/Specialty/SpecialtyItem';

const MySpecialtySection = () => {
  const specialties = [
    {
      id: 1,
      icon: LuMonitor,
      title: 'توسعه وب فول‌استک',
      description:
        'با ترکیب توسعه فرانت‌اند و بک‌اند، وب‌اپلیکیشن‌های سریع، مقیاس‌پذیر و بهینه می‌سازم که تجربه کاربری بی‌نظیری ارائه می‌دهند.',
      tags: [
        {
          id: 1,
          tag: 'PostgreSQL',
        },
        {
          id: 2,
          tag: 'Node.js',
        },
        {
          id: 3,
          tag: 'React.js',
        },
        {
          id: 4,
          tag: 'Next.js',
        },
        {
          id: 5,
          tag: 'MongoDB',
        },
        {
          id: 6,
          tag: 'Nest.js',
        },
      ],
    },
    {
      id: 2,
      icon: IoColorPaletteOutline,
      title: 'طراحی و بهینه‌سازی UI/UX',
      description:
        'ساخت رابط کاربری مدرن و واکنش‌گرا با تمرکز بر تجربه کاربری و اصول طراحی حرفه‌ای برای افزایش تعامل کاربران.',
      tags: [
        {
          id: 1,
          tag: 'Figma',
        },
        {
          id: 2,
          tag: 'Adobe XD',
        },
        {
          id: 3,
          tag: 'Tailwind CSS',
        },
        {
          id: 4,
          tag: 'تجربه کاربری (UX) پیشرفته',
        },
      ],
    },
    {
      id: 3,
      icon: MdInsertChartOutlined,
      title: 'پیاده‌سازی پنل مدیریت و CMS',
      description:
        'ایجاد سیستم‌های مدیریت محتوا (CMS) و پنل‌های پیشرفته برای کنترل کامل روی داده‌ها، کاربران و بهینه‌سازی عملکرد سایت.',
      tags: [
        {
          id: 1,
          tag: 'داشبورد اختصاصی برای مدیریت محتوا',
        },
      ],
    },
    {
      id: 4,
      icon: PiLightbulbFilament,
      title: 'مشاوره و اجرای استارتاپ‌های دیجیتال',
      description:
        'با ترکیب توسعه فرانت‌اند و بک‌اند، وب‌اپلیکیشن‌های سریع، مقیاس‌پذیر و بهینه می‌سازم که تجربه کاربری بی‌نظیری ارائه می‌دهند.',
      tags: [
        {
          id: 1,
          tag: ' تحلیل پروژه',
        },
        {
          id: 2,
          tag: 'وایرفریمینگ',
        },
        {
          id: 3,
          tag: 'سئو و مقیاس‌پذیری',
        },
      ],
    },
  ];
  return (
    <div className='container mt-12 md:mt-16'>
      <GradientTitleH2 text='تخصص من' className='mb-6 md:mb-12' />
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {specialties.map((specialty) => (
          <SpecialtyItem key={specialty.id} specialty={specialty} />
        ))}
      </div>
    </div>
  );
};

export default MySpecialtySection;
