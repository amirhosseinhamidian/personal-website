'use client';

import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import Navigation from '../Navigation/Navigation';
import { CgMenuRight } from 'react-icons/cg';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* دکمه همبرگری */}
      <button onClick={() => setIsOpen(true)} className='text-3xl md:hidden'>
        <CgMenuRight />
      </button>

      {/* پس‌زمینه تاریک هنگام باز بودن دراور */}
      {isOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/50'
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* منو از بالا باز می‌شود */}
      <div
        className={`fixed left-0 top-0 w-full transform bg-primary p-6 text-white ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } z-50 transition-transform duration-300`}
      >
        {/* دکمه بستن */}
        <button onClick={() => setIsOpen(false)} className='text-3xl'>
          <FiX />
        </button>

        {/* لینک‌ها */}
        <div className='mt-6 flex flex-col gap-4'>
          <Navigation onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </>
  );
};

export default Drawer;
