'use client';
import FreeConsultationModal from '@/components/modules/FreeConsultationModal/FreeConsultationModal';
import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import PackageItem from '@/components/modules/PackageItem/PackageItem';
import React, { useState } from 'react';

const PackagesSection = () => {
  const packages = [
    {
      id: 1,
      titleFa: 'اقتصادی',
      titleEn: 'Basic',
      priceTm: 1988000,
      priceDo: 49,
      textColor: 'text-[#3B82F6]',
      description: [
        { id: 1, textFa: 'تحویل در ۷ روز', textEn: 'Delivery in 7 days' },
        {
          id: 2,
          textFa: 'طراحی یک صفحه‌ای (Landing Page)',
          textEn: 'One-page website design (Landing Page)',
        },
        {
          id: 3,
          textFa: 'استفاده از قالب‌های آماده و شخصی‌سازی‌شده',
          textEn: 'Using ready-made and customized templates',
        },
        {
          id: 4,
          textFa: 'سازگاری کامل با موبایل و سئو پایه',
          textEn: 'Fully responsive and basic SEO optimization',
        },
        {
          id: 5,
          textFa: 'مناسب برای وبسایت‌های شخصی و معرفی ساده',
          textEn: 'Suitable for personal and simple showcase websites',
        },
      ],
    },
    {
      id: 2,
      titleFa: 'استاندارد',
      titleEn: 'Standard',
      priceTm: 5988000,
      priceDo: 149,
      textColor: 'text-[#10B981]',
      description: [
        { id: 1, textFa: 'تحویل در ۱۴ روز', textEn: 'Delivery in 14 days' },
        {
          id: 2,
          textFa: 'طراحی وبسایت ۵ صفحه‌ای با طراحی سفارشی',
          textEn: 'Custom-designed 5-page website',
        },
        {
          id: 3,
          textFa: 'سیستم مدیریت محتوا (CMS) برای ویرایش محتوا',
          textEn: 'Content Management System (CMS) for content editing',
        },
        {
          id: 4,
          textFa: 'سازگاری کامل با موبایل و سئو پیشرفته',
          textEn: 'Fully responsive and advanced SEO',
        },
        {
          id: 5,
          textFa: 'مناسب برای کسب‌وکارها و برندها',
          textEn: 'Suitable for businesses and brands',
        },
      ],
    },
    {
      id: 3,
      titleFa: 'حرفه‌ای',
      titleEn: 'Pro',
      priceTm: 14988000,
      priceDo: 369,
      textColor: 'text-[#F59E0B]',
      description: [
        { id: 1, textFa: 'تحویل در ۲۱ روز', textEn: 'Delivery in 21 days' },
        {
          id: 2,
          textFa: 'طراحی وبسایت ۸ تا ۱۲ صفحه، بسته به نیاز',
          textEn: '8 to 12-page website design, based on requirements',
        },
        {
          id: 3,
          textFa: 'طراحی فروشگاه آنلاین با درگاه پرداخت',
          textEn: 'E-commerce store with payment gateway',
        },
        {
          id: 4,
          textFa: 'سیستم مدیریت سفارشات و کاربران',
          textEn: 'Order and user management system',
        },
        {
          id: 5,
          textFa: 'مناسب برای فروشگاه‌های آنلاین و استارتاپ‌ها',
          textEn: 'Suitable for online stores and startups',
        },
      ],
    },
    {
      id: 4,
      titleFa: 'اختصاصی',
      titleEn: 'Custom',
      priceTm: 0,
      priceDo: 0,
      textColor: 'text-[#EF4444]',
      description: [
        {
          id: 1,
          textFa: 'مدت زمان و هزینه بر اساس نیاز سنجیده می‌شود',
          textEn: 'Time and cost are determined based on requirements',
        },
        {
          id: 2,
          textFa: 'طراحی سفارشی با امکانات اختصاصی',
          textEn: 'Custom design with exclusive features',
        },
        {
          id: 3,
          textFa: 'داشبورد مدیریت پیشرفته و API اختصاصی',
          textEn: 'Advanced admin dashboard and custom API',
        },
        {
          id: 4,
          textFa: 'امکان توسعه با React.js / Next.js / Node.js',
          textEn: 'Development with React.js / Next.js / Node.js',
        },
        {
          id: 5,
          textFa: 'مناسب برای پروژه‌های خاص و پیشرفته',
          textEn: 'Suitable for special and advanced projects',
        },
      ],
    },
  ];
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  return (
    <div className='container my-10 flex flex-col items-center gap-4'>
      <GradientTitleH2
        text='وبسایت حرفه ای خود را همین امروز سفارش دهید!'
        className='text-center text-xl xs:text-2xl lg:text-3xl xl:text-4xl'
      />
      <p className='text-center text-xs sm:text-sm lg:max-w-4xl lg:text-base'>
        امروزه داشتن یک وبسایت سریع، مدرن و بهینه برای هر کسب‌وکاری ضروری است.
        با پکیج‌های متنوع طراحی وبسایت، از صفحات شخصی تا فروشگاه‌های آنلاین،
        راهکارهای حرفه‌ای و اختصاصی برای شما ارائه می‌کنم.
      </p>
      <div
        onClick={() => setShowConsultationModal(true)}
        className='inline-block cursor-pointer rounded-es-xl rounded-se-xl bg-green px-12 pt-1 font-digisarvenaz text-lg text-white transition-all duration-700 hover:scale-110 md:text-xl lg:text-2xl'
      >
        مشاوره رایگان!
      </div>
      <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {packages.map((item) => (
          <PackageItem key={item.id} packageItem={item} className='' />
        ))}
      </div>
      {showConsultationModal && (
        <FreeConsultationModal
          onClose={() => setShowConsultationModal(false)}
        />
      )}
    </div>
  );
};

export default PackagesSection;
