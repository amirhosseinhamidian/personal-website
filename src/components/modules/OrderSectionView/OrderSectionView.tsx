import React from 'react';

interface OrderSectionViewProps {
  className?: string;
  activeSection: number;
}

const OrderSectionView: React.FC<OrderSectionViewProps> = ({
  className,
  activeSection,
}) => {
  const handleBackgroundColor = (section: number) => {
    if (activeSection === 1) {
      return section === 1 ? 'bg-primary' : 'bg-border-light';
    } else if (activeSection === 2) {
      return section === 1
        ? 'bg-green'
        : section === 2
          ? 'bg-primary'
          : 'bg-border-light';
    } else if (activeSection === 3) {
      return section === 1 || section === 2 ? 'bg-green' : 'bg-primary';
    }
    return 'bg-border-light';
  };

  return (
    <div
      className={`flex flex-col items-center justify-center sm:flex-row ${className}`}
    >
      <div
        className={`whitespace-nowrap rounded-full text-white ${handleBackgroundColor(1)} px-4 py-1 text-center text-2xs sm:text-xs lg:text-sm`}
      >
        اطلاعات اولیه
      </div>
      <div className='h-4 border border-border-light dark:border-border-dark sm:h-0 sm:w-full sm:border-b-2'></div>
      <div
        className={`whitespace-nowrap rounded-full text-white ${handleBackgroundColor(2)} px-4 py-1 text-center text-2xs sm:text-xs lg:text-sm`}
      >
        تأیید طراحی و انتخاب ویژگی‌ها
      </div>
      <div className='h-4 border border-border-light dark:border-border-dark sm:h-0 sm:w-full sm:border-b-2'></div>
      <div
        className={`whitespace-nowrap rounded-full text-white ${handleBackgroundColor(3)} px-4 py-1 text-center text-2xs sm:text-xs lg:text-sm`}
      >
        نمایش خلاصه سفارش و تأیید نهایی
      </div>
    </div>
  );
};

export default OrderSectionView;
