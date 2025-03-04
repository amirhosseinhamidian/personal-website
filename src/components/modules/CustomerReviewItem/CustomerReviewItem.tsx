import Image from 'next/image';
import React from 'react';

interface Review {
  comment: string;
  customerImage: string;
  customerName: string;
  customerRole: string;
}

interface CustomerReviewsProps {
  className?: string;
  review: Review;
}

const CustomerReviewItem: React.FC<CustomerReviewsProps> = ({
  className = '',
  review,
}) => {
  return (
    <div
      className={`rounded-xl border border-border-light bg-surface-light p-4 dark:border-border-dark dark:bg-surface-dark ${className}`}
    >
      <p className='text-xs xs:text-sm md:text-base'>{review.comment}</p>
      <div className='mt-5 flex flex-row-reverse items-center gap-2'>
        <Image
          src={review.customerImage}
          alt={review.customerName}
          width={200}
          height={200}
          className='h-10 w-10 rounded-full md:h-12 md:w-12'
        />
        <div>
          <h5 className='text-2xs sm:text-xs lg:text-sm'>
            {review.customerName}
          </h5>
          <h5 className='-mt-1.5 text-2xs text-subtext-light dark:text-subtext-dark sm:text-xs lg:text-sm'>
            {review.customerRole}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewItem;
