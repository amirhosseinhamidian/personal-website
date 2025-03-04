import Image from 'next/image';
import React from 'react';

interface ConsultingSectionProps {
  className?: string;
}

const ConsultingSection: React.FC<ConsultingSectionProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`gap-6 rounded-xl border border-border-light bg-surface-light px-10 pb-4 pt-12 dark:border-border-dark dark:bg-surface-dark sm:gap-10 md:gap-14 ${className}`}
    >
      <h3 className='mb-8 text-base font-semibold sm:text-lg'>
        مشاوره تخصصی طراحی و توسعه وب برای استارتاپ‌ها
      </h3>
      <p className='text-sm sm:text-base'>
        راه‌اندازی یک استارتاپ موفق نیازمند یک وبسایت حرفه‌ای و هدفمند است. با
        ارائه خدمات مشاوره طراحی و توسعه وب، از ایده تا اجرا همراه شما هستم.
      </p>
      <ul className='mt-6 space-y-2 text-sm sm:text-base'>
        <li className='flex items-center gap-2'>
          <span className='text-primary'>🔹</span> طراحی وایرفریم و نقشه راه
          پروژه
        </li>
        <li className='flex items-center gap-2'>
          <span className='text-primary'>🔹</span> تعریف ویژگی‌ها و امکانات
          متناسب با نیاز بازار
        </li>
        <li className='flex items-center gap-2'>
          <span className='text-primary'>🔹</span> فازبندی پروژه تا رسیدن به
          نتیجه مطلوب
        </li>
        <li className='flex items-center gap-2'>
          <span className='text-primary'>🔹</span> بهینه‌سازی تجربه کاربری (UX)
          برای افزایش تعامل کاربران
        </li>
      </ul>
      <Image
        src='/images/startup.png'
        alt='startup logo'
        width={800}
        height={800}
      />
    </div>
  );
};

export default ConsultingSection;
