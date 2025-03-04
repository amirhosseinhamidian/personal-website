import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import Image from 'next/image';
import React from 'react';

const EducationExperienceSection = () => {
  return (
    <div className='container mt-12 md:mt-16'>
      <GradientTitleH2 text='تحصیلات و تجربه کاری' className='mb-6 md:mb-12' />
      <div className='grid grid-cols-1 gap-4 rounded-xl border border-border-light bg-surface-light p-12 dark:border-border-dark dark:bg-surface-dark md:grid-cols-2'>
        {/* بخش آموزش‌ها */}
        <div>
          <h2 className='mb-6 text-xl font-bold text-primary dark:text-secondary sm:text-2xl'>
            آموزش ها
          </h2>
          <div className='relative border-r border-gray-300 pr-3 dark:border-gray-600'>
            <div className='relative mb-8'>
              <h3 className='pr-2 text-base font-semibold sm:text-lg'>
                مدرک برنامه‌نویسی پایتون
              </h3>

              <div className='mt-2 flex gap-3'>
                <Image
                  src='/images/education/Technical and Vocational.png'
                  alt='Logo of the Iranian Technical and Vocational Organization'
                  width={200}
                  height={200}
                  className='h-10 w-10'
                />
                <div>
                  <p className='text-xs text-subtext-light dark:text-subtext-dark sm:text-sm'>
                    سازمان فنی حرفه ای
                  </p>
                  <p className='font-pinarpn text-xs text-subtext-light dark:text-subtext-dark sm:text-sm'>
                    حضور یافته در سال 1402
                  </p>
                </div>
              </div>
              {/* نقطه روی تایم‌لاین */}
              <div className='absolute -right-5 top-2 h-4 w-4 rounded-full bg-primary'></div>
            </div>
            <div className='relative mb-8'>
              <h3 className='pr-2 text-base font-semibold sm:text-lg'>
                {' '}
                مدرک برنامه‌نویسی مقدماتی، پایتون و هوش مصنوعی
              </h3>

              <div className='mt-2 flex gap-3'>
                <Image
                  src='/images/education/Harvard University.png'
                  alt='Harvard University logo'
                  width={200}
                  height={200}
                  className='h-10 w-10 rounded-full'
                />
                <div>
                  <p className='text-xs text-subtext-light dark:text-subtext-dark sm:text-sm'>
                    {' '}
                    CS50 – Harvard
                  </p>
                  <p className='font-pinarpn text-xs text-subtext-light dark:text-subtext-dark sm:text-sm'>
                    حضور یافته در سال 1402
                  </p>
                </div>
              </div>
              {/* نقطه روی تایم‌لاین */}
              <div className='absolute -right-5 top-2 h-4 w-4 rounded-full bg-primary'></div>
            </div>
          </div>
        </div>
        {/* بخش تجربه‌ها */}
        <div>
          <h2 className='mb-6 text-xl font-bold text-primary dark:text-secondary sm:text-2xl'>
            تجربه ها
          </h2>
          <div className='relative border-r border-gray-300 pr-6 dark:border-gray-600'>
            <div className='relative mb-8'>
              {/* نقطه روی تایم‌لاین */}
              <div className='absolute -right-8 top-2 h-4 w-4 rounded-full bg-primary'></div>
              <h3 className='text-base font-semibold sm:text-lg'>
                برنامه‌نویس اندروید
              </h3>
              <p className='font-pinarpn text-xs text-subtext-light dark:text-subtext-dark sm:text-sm'>
                اپلیکیشن بنگاه – مدت: ۳ ماه
              </p>
              <p className='font-pinarpn text-xs text-subtext-light dark:text-subtext-dark sm:text-sm'>
                اپلیکیشن پاساژ – مدت: ۲ سال
              </p>
              <p className='font-pinarpn text-xs text-subtext-light dark:text-subtext-dark sm:text-sm'>
                اپلیکیشن ترک اپ – مدت: ۳ ماه
              </p>
            </div>
            <div className='relative mb-8'>
              <div className='absolute -right-8 top-2 h-4 w-4 rounded-full bg-primary'></div>
              <h3 className='text-base font-semibold sm:text-lg'>
                برنامه نویسی فرانت اند و طراح محصول
              </h3>
              <p className='font-pinarpn text-xs text-subtext-light dark:text-subtext-dark sm:text-sm'>
                Standard Engineering (استارتاپ شخصی)
              </p>
              <p className='font-pinarpn text-xs text-subtext-light dark:text-subtext-dark sm:text-sm'>
                اپ توسعه وب‌اپلیکیشن با React.js
              </p>
            </div>
            <div className='relative mb-8'>
              <div className='absolute -right-8 top-2 h-4 w-4 rounded-full bg-primary'></div>
              <h3 className='text-base font-semibold sm:text-lg'>
                طراح و فول استک دولوپر
              </h3>
              <p className='font-pinarpn text-xs text-subtext-light dark:text-subtext-dark sm:text-sm'>
                سمانه یوگا
              </p>
              <p className='font-pinarpn text-xs text-subtext-light dark:text-subtext-dark sm:text-sm'>
                توسعه فرانت‌اند و بک‌اند با Next.js و PostgreSQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperienceSection;
