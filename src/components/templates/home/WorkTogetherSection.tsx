'use client';

import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import SocialLinks from '@/components/modules/SocialLinks/SocialLinks';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import React, { useState } from 'react';
import { FiArrowUpLeft } from 'react-icons/fi';
import { useLanguage } from '@/hooks/useLanguage';
import { workTogetherContent } from '@/content/WorkTogetherContent';

const WorkTogetherSection = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const { language } = useLanguage();
  const content = workTogetherContent[language];

  return (
    <div className='grid grid-cols-1 gap-10 rounded-xl border border-border-light bg-surface-light px-10 py-8 dark:border-border-dark dark:bg-surface-dark sm:grid-cols-2 sm:gap-8 lg:gap-14'>
      <div>
        <GradientTitleH2
          text={content.title}
          className='max-w-28 p-3 xs:max-w-32 lg:max-w-40 lg:p-5 xl:max-w-48'
        />
        <p className='text-xs xs:text-sm lg:text-base'>{content.subtitle}</p>
        <div>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            placeholder={content.form.name}
            className='mt-6'
          />
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            placeholder={content.form.lastName}
            className='mt-3'
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            placeholder={content.form.email}
            type='email'
            className='mt-3'
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            placeholder={content.form.phone}
            type='number'
            className='mt-3'
            maxLength={11}
          />
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            placeholder={content.form.message}
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
            {content.form.submit}
          </Button>
        </div>
      </div>
      <div className='self-center'>
        <p>{content.available}</p>
        <h3 className='mt-4 cursor-pointer text-base font-medium underline transition-all duration-500 hover:text-primary md:text-lg'>
          <a href='tel:+989339801698'>989339801698+</a>
        </h3>
        <h3 className='mt-4 cursor-pointer text-base font-medium underline transition-all duration-500 hover:text-primary md:text-lg'>
          <a href='mailto:amirhosseinhamidian@info.ir'>
            amirhosseinhamidian@info.ir
          </a>
        </h3>
        <SocialLinks className='mt-4' />
      </div>
    </div>
  );
};

export default WorkTogetherSection;
