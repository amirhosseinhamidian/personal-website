'use client';
import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CustomerReviewItem from '@/components/modules/CustomerReviewItem/CustomerReviewItem';

const CustomerReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      comment:
        'همکاری با این توسعه‌دهنده فوق‌العاده بود. پروژه به موقع تحویل داده شد و کیفیت کار فراتر از انتظار بود.',
      customerImage: '/images/profile1.jpg',
      customerName: 'محمد رضایی',
      customerRole: 'کارفرما',
    },
    {
      id: 2,
      comment:
        'بسیار حرفه‌ای، خلاق و دقیق. در تمام مراحل پروژه همراه بودند و به تمامی جزئیات توجه داشتند.',
      customerImage: '/images/profile1.jpg',
      customerName: 'سارا احمدی',
      customerRole: 'مدیر محصول',
    },
    {
      id: 3,
      comment:
        'نتیجه‌ی کار بسیار رضایت‌بخش بود. تیم ما از کیفیت کدنویسی و بهینه‌سازی انجام شده بسیار راضی است.',
      customerImage: '/images/profile1.jpg',
      customerName: 'علی محمدی',
      customerRole: 'مدیر فنی',
    },
    {
      id: 4,
      comment:
        ' همکاری با ایشان تجربه‌ی خوبی بود. ارتباط موثر و درک عمیق از نیازهای پروژه از ویژگی‌های مثبت این همکاری بود. نتیجه‌ی کار بسیار رضایت‌بخش بود. تیم ما از کیفیت کدنویسی و بهینه‌سازی انجام شده بسیار راضی است.',
      customerImage: '/images/profile1.jpg',
      customerName: 'زهرا نوری',
      customerRole: 'استارتاپ بنیان‌گذار',
    },
    {
      id: 5,
      comment:
        'پشتیبانی عالی، تحویل سریع و کیفیت فوق‌العاده. قطعا برای پروژه‌های بعدی نیز با ایشان همکاری خواهیم کرد.',
      customerImage: '/images/profile1.jpg',
      customerName: 'امیر حسینی',
      customerRole: 'مدیر اجرایی',
    },
  ];
  return (
    <div>
      <GradientTitleH2 text='دیدگاه مشتریان' className='mb-8 mt-14' />

      <Swiper
        dir='rtl'
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass:
            'swiper-pagination-bullet-active custom-bullet-active',
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <CustomerReviewItem review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviewsSection;
