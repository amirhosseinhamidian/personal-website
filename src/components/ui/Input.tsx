'use client';
import React, { ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  errorMessage?: string;
  errorClassName?: string;
  focus?: boolean;
  maxLength?: number;
  isShowCounter?: boolean;
  onEnterPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  className = '',
  type = 'text',
  placeholder = '',
  value,
  onChange,
  fullWidth = false,
  errorMessage = '',
  errorClassName = 'mr-3',
  focus = false,
  maxLength,
  isShowCounter = false,
  onEnterPress,
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onEnterPress) {
      onEnterPress(event);
    }
  };

  return (
    <div className={`flex flex-col ${fullWidth ? 'w-full' : ''}`}>
      {/* نمایش شمارنده تعداد کاراکترها */}
      {isShowCounter && maxLength && (
        <div className='ml-4 text-xs text-subtext-light dark:text-subtext-dark'>
          {value.length}/{maxLength}
        </div>
      )}

      <input
        autoFocus={focus}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        maxLength={maxLength} // جلوگیری از ورود متن بیشتر از maxLength
        className={`border-b border-subtext-light bg-transparent px-4 py-2 text-xs font-medium outline-none transition-all duration-300 ease-in placeholder:text-subtext-light focus:border-primary focus:outline-none dark:border-subtext-dark placeholder:dark:text-subtext-dark sm:text-sm ${errorMessage ? 'border-red' : ''} ${className}`}
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

export default Input;
