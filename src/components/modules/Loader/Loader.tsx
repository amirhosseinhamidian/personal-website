import React from 'react';

type LoaderProps = {
  fadeOut?: boolean;
};

export default function Loader({ fadeOut = false }: LoaderProps) {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background-light transition-opacity duration-200 dark:bg-background-dark ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className='flex h-full items-center justify-center'>
        <span className='animate-slow-ping bg-gradient-title-light bg-clip-text text-xl text-transparent dark:bg-gradient-title-dark xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl'>
          بــــــــــــارگــــــــــــذاری
        </span>
      </div>
    </div>
  );
}
