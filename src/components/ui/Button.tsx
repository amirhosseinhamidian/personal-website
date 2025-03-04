'use client';

import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  shadow?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ElementType;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  shadow = false,
  disabled = false,
  isLoading = false,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      type={type}
      onClick={onClick}
      className={`font-main flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-white transition-all duration-500 disabled:cursor-not-allowed disabled:opacity-50 ${shadow ? 'shadow-[1px_5px_14px_rgba(135,80,246,0.5)]' : ''} ${isLoading ? 'cursor-wait' : 'cursor-pointer hover:scale-105'} ${className}`}
    >
      {children}
      {Icon && !isLoading && (
        <Icon className='text-xl transition-transform duration-200 group-hover:scale-110' />
      )}
      {isLoading && <ImSpinner2 className='animate-spin text-xl' />}
    </button>
  );
};

export default Button;
