'use client';
import { useLanguage } from '@/hooks/useLanguage';
import React, { ChangeEvent } from 'react';

interface InputProps {
  className?: string;
  classNameTextArea?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  fullWidth?: boolean;
  errorMessage?: string;
  errorClassName?: string;
  focus?: boolean;
  maxLength?: number;
  rows?: number;
  isShowCounter?: boolean;
}

const TextArea: React.FC<InputProps> = ({
  className = '',
  classNameTextArea = '',
  placeholder = '',
  value,
  onChange,
  fullWidth = false,
  errorMessage = '',
  errorClassName = 'mr-3',
  focus = false,
  maxLength,
  rows = 3,
  isShowCounter = false,
}) => {
  const { language } = useLanguage();
  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''} ${className}`}>
      {/* نمایش شمارنده تعداد کاراکترها */}
      {isShowCounter && maxLength && (
        <div
          className={`absolute top-3 text-xs text-subtext-light dark:text-subtext-dark ${language === 'fa' ? 'left-0 font-pinarpn' : 'right-0'}`}
        >
          {value.length}/{maxLength}
        </div>
      )}

      <textarea
        autoFocus={focus}
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={onChange}
        maxLength={maxLength} // جلوگیری از ورود متن بیشتر از maxLength
        className={`${fullWidth ? 'w-full' : ''} border-b border-subtext-light bg-transparent px-4 py-2 text-xs font-medium outline-none transition-all duration-300 ease-in placeholder:text-subtext-light focus:border-primary focus:outline-none dark:border-subtext-dark placeholder:dark:text-subtext-dark sm:text-sm ${errorMessage ? 'border-red' : ''} ${classNameTextArea}`}
      />

      {/* نمایش پیام خطا در صورت وجود */}
      {errorMessage && (
        <p className={`mt-1 text-xs text-red ${errorClassName}`}>
          *{errorMessage}
        </p>
      )}
    </div>
  );
};

export default TextArea;
