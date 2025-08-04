'use client';
import Input from '@/components/ui/Input';
import { useEmployerStore } from '@/store/employerStore';
import React from 'react';

const BasicInformation = () => {
  const {
    firstName,
    lastName,
    email,
    phone,
    companyName,
    websiteName,
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setCompanyName,
    setWebsiteName,
  } = useEmployerStore();
  return (
    <div className=''>
      <div className='rounded-xl border border-border-light bg-surface-light p-10 dark:border-border-dark dark:bg-surface-dark'>
        <h3 className='text-base font-semibold md:text-lg'>اطلاعات کارفرما</h3>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8 md:gap-x-10 lg:gap-x-14'>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='نام'
          />
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='نام خانوادگی'
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='ایمیل'
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='شماره همراه'
          />
          <Input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder='نام شرکت، سازمان ، برند'
          />
          <Input
            value={websiteName}
            onChange={(e) => setWebsiteName(e.target.value)}
            placeholder='نام وبسایت مورد نظر شما'
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
