'use client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FiArrowUpLeft } from 'react-icons/fi';

interface FreeConsultationModalProps {
  onClose: () => void;
}

const FreeConsultationModal: React.FC<FreeConsultationModalProps> = ({
  onClose,
}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'
      onClick={handleBackgroundClick}
    >
      <div className='mx-4 max-h-screen w-full overflow-y-auto rounded-xl bg-surface-light dark:bg-surface-dark xs:mx-8 sm:mx-16 lg:mx-32'>
        <div className='flex w-full items-center justify-between rounded-t-xl bg-secondary px-6 py-1.5'>
          <h3 className='font-digisarvenaz text-lg text-white sm:text-xl md:text-2xl'>
            مشاوره رایگان!
          </h3>
          <CgClose
            size={24}
            onClick={() => onClose()}
            className='text-white transition-all duration-500 hover:scale-110 md:cursor-pointer'
          />
        </div>
        <div className='px-4 py-8 md:px-8'>
          <p className='text-center text-2xs xs:text-xs sm:text-sm'>
            اگر نمی‌دانید کدام پکیج مناسب شماست، یا به مشاوره تخصصی برای پروژه
            خود نیاز دارید، این فرم را پر کنید.
          </p>
          <p className='mt-1 text-center text-2xs xs:text-xs sm:text-sm'>
            پس از ثبت درخواست، در کمتر از ۲۴ ساعت با شما تماس خواهیم گرفت تا
            نیازهای شما را بررسی کنیم و بهترین راهکار ممکن را پیشنهاد دهیم.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-8 sm:gap-4 md:gap-6 lg:gap-8'>
            <div className='col-span-5'>
              <Input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                fullWidth
                placeholder='نام و نام خانوادگی'
                className='mt-6'
              />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                placeholder='ایمیل'
                type='email'
                className='mt-3'
              />
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                placeholder='شماره تماس'
                type='number'
                className='mt-3'
                maxLength={11}
              />
              <TextArea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                placeholder='موضوع و پیام شما '
                rows={5}
                isShowCounter
                maxLength={1000}
                className='mt-3'
              />
              <Button
                shadow
                icon={FiArrowUpLeft}
                className='mt-9 text-sm sm:text-base'
              >
                درخواست مشاوره
              </Button>
            </div>
            <Image
              src='https://amirhosseinhamidian.storage.c2.liara.space/other/Free%20consultation.png'
              alt='free consultation vector'
              width={597}
              height={445}
              className='col-span-3 hidden self-center sm:block'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultationModal;
