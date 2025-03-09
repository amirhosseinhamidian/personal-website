'use client';
import { useLanguage } from '@/hooks/useLanguage';
import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

interface description {
  id: number;
  textFa: string;
  textEn: string;
}

interface packageItem {
  id: number;
  titleFa: string;
  titleEn: string;
  priceTm: number;
  priceDo: number;
  textColor: string;
  description: description[];
}

interface PackageItemProps {
  packageItem: packageItem;
  className?: string;
}

const PackageItem: React.FC<PackageItemProps> = ({
  packageItem,
  className,
}) => {
  const { language } = useLanguage();

  // انتخاب قیمت بر اساس زبان
  const price =
    language === 'fa'
      ? packageItem.priceTm.toLocaleString('fa-IR')
      : packageItem.priceDo.toLocaleString('en-US');

  const title = language === 'fa' ? packageItem.titleFa : packageItem.titleEn;

  return (
    <div
      className={`flex h-full flex-col justify-between rounded-xl border border-border-light bg-surface-light transition-all duration-500 hover:scale-105 dark:border-border-dark dark:bg-surface-dark ${className}`}
    >
      <div className='p-4'>
        <h3
          className={`mb-3 font-digisarvenaz ${packageItem.textColor} ${language === 'fa' ? 'text-base xs:text-lg md:text-xl' : 'text-lg xs:text-xl md:text-2xl'}`}
        >
          {title}
        </h3>

        {packageItem.priceTm === 0 ? (
          <h3 className='text-center font-digisarvenaz text-lg xs:text-xl md:text-2xl'>
            {language === 'fa' ? 'قیمت براساس پروژه' : 'Price Based on Project'}
          </h3>
        ) : (
          <h3 className='text-center font-digisarvenaz text-2xl xs:text-3xl md:text-4xl'>
            {price}{' '}
            {language === 'fa' ? (
              <span className='mr-1 text-2xs xs:text-xs md:text-sm'>تومان</span>
            ) : (
              <span className='ml-1 text-lg xs:text-xl md:text-2xl'>$</span>
            )}
          </h3>
        )}

        {packageItem.description.map((description) => (
          <div key={description.id} className='mt-2 flex items-center gap-2'>
            <GiCheckMark />
            <p className='text-2xs sm:text-xs md:text-xs'>
              {language === 'fa' ? description.textFa : description.textEn}
            </p>
          </div>
        ))}
      </div>

      {/* دکمه همیشه در پایین کارت قرار می‌گیرد */}
      <button className='mt-3 w-fit self-end rounded-ee-xl rounded-ss-xl border border-border-light px-6 font-digisarvenaz text-primary transition-all duration-500 hover:bg-primary hover:text-white dark:border-border-dark'>
        {language === 'fa' ? (
          <p className='py-2'>سفارش دهید</p>
        ) : (
          <p className='text-lg'>Order Now</p>
        )}
      </button>
    </div>
  );
};

export default PackageItem;
