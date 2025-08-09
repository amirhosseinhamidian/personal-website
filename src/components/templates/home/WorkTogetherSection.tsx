'use client';

import React, { useState } from 'react';
import GradientTitleH2 from '@/components/modules/GradientTitle/GradientTitleH2';
import SocialLinks from '@/components/modules/SocialLinks/SocialLinks';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import { FiArrowUpLeft } from 'react-icons/fi';
import { useLanguage } from '@/hooks/useLanguage';
import { workTogetherContent } from '@/content/WorkTogetherContent';
import { createToastHandler } from '@/utils/toastHandler';

type Errors = {
  name?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const irPhoneRegex = /^(?:\+?98|0)?9\d{9}$/; // نمونه ساده برای موبایل ایران

const WorkTogetherSection: React.FC = () => {
  const toast = createToastHandler();
  const { language } = useLanguage();
  const content = workTogetherContent[language];

  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState<boolean>(false);

  const validateInputs = (): boolean => {
    const next: Errors = {};

    if (!name.trim()) {
      next.name =
        language === 'fa'
          ? 'لطفاً نام خود را وارد کنید.'
          : 'Please enter your first name.';
    }
    if (!lastName.trim()) {
      next.lastName =
        language === 'fa'
          ? 'لطفاً نام خانوادگی را وارد کنید.'
          : 'Please enter your last name.';
    }
    if (!email.trim()) {
      next.email =
        language === 'fa' ? 'ایمیل الزامی است.' : 'Email is required.';
    } else if (!emailRegex.test(email.trim())) {
      next.email =
        language === 'fa' ? 'فرمت ایمیل معتبر نیست.' : 'Invalid email format.';
    }
    if (!phone.trim()) {
      next.phone =
        language === 'fa'
          ? 'شماره تماس الزامی است.'
          : 'Phone number is required.';
    } else if (!irPhoneRegex.test(phone.replace(/\s|-/g, ''))) {
      next.phone =
        language === 'fa' ? 'شماره تماس معتبر نیست.' : 'Invalid phone number.';
    }
    if (!message.trim()) {
      next.message =
        language === 'fa'
          ? 'لطفاً پیام خود را وارد کنید.'
          : 'Please enter your message.';
    } else if (message.trim().length < 10) {
      next.message =
        language === 'fa' ? 'پیام خیلی کوتاه است.' : 'Message is too short.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmitForm = async () => {
    if (!validateInputs()) {
      toast.showErrorToast(
        language === 'fa'
          ? 'مقادیر الزامی را به درستی وارد کنید.'
          : 'Please fix the highlighted fields.'
      );
      return;
    }

    setSubmitting(true);

    const promise = fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, lastName, email, phone, message }),
    }).then(async (res) => {
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || 'Request failed');
      }
      return res.json();
    });

    toast.handlePromiseToast(promise, {
      loadingMessage: language === 'fa' ? 'در حال ارسال…' : 'Sending…',
      successMessage:
        language === 'fa'
          ? 'پیام شما با موفقیت ارسال شد.'
          : 'Your message has been sent.',
      errorMessage: (e) =>
        language === 'fa'
          ? `ارسال با خطا مواجه شد: ${e instanceof Error ? e.message : 'خطای نامشخص'}`
          : `Failed to send: ${e instanceof Error ? e.message : 'Unknown error'}`,
    });

    try {
      await promise;
      // پاک‌سازی فرم بعد از موفقیت
      setName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setErrors({});
    } catch {
      // خطا در toast.promise هندل می‌شود
    } finally {
      setSubmitting(false);
    }
  };

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            fullWidth
            placeholder={content.form.name}
            className='mt-6'
            errorMessage={errors.name}
          />

          <Input
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
            fullWidth
            placeholder={content.form.lastName}
            className='mt-3'
            errorMessage={errors.lastName}
          />

          <Input
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            fullWidth
            placeholder={content.form.email}
            type='email'
            className='mt-3'
            errorMessage={errors.email}
          />

          <Input
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              // فقط اعداد و + و فاصله/خط فاصله را قبول کن
              const val = e.target.value.replace(/[^\d+\-\s]/g, '');
              setPhone(val);
            }}
            fullWidth
            placeholder={content.form.phone}
            type='tel'
            className='mt-3'
            errorMessage={errors.phone}
          />

          <TextArea
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            fullWidth
            placeholder={content.form.message}
            rows={5}
            isShowCounter
            maxLength={1000}
            className='mt-3'
            errorMessage={errors.message}
          />

          <Button
            shadow
            icon={FiArrowUpLeft}
            className='mt-9 text-sm sm:text-base'
            onClick={handleSubmitForm}
            isLoading={submitting}
          >
            {content.form.submit}
          </Button>
        </div>
      </div>

      <div className='self-center'>
        <p>{content.available}</p>
        <h3 className='mt-4 cursor-pointer text-base font-medium underline transition-all duration-500 hover:text-primary md:text-lg'>
          <a href='tel:+989339801698'>+989339801698</a>
        </h3>
        <h3 className='mt-4 cursor-pointer text-base font-medium underline transition-all duration-500 hover:text-primary md:text-lg'>
          <a href='mailto:amirhossein611@gmail.com'>amirhossein611@gmail.com</a>
        </h3>
        <SocialLinks className='mt-4' />
      </div>
    </div>
  );
};

export default WorkTogetherSection;
