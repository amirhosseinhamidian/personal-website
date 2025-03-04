import React from 'react';

interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  icon?: React.ElementType;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className = '',
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-primary bg-transparent p-2 text-primary transition-colors duration-300 ${className}`}
    >
      <span className='absolute h-full w-full scale-0 rounded-full bg-primary transition-transform duration-300 group-hover:-scale-100'></span>
      <span className='relative transform text-primary group-hover:text-white'>
        {Icon && <Icon size={24} />}
      </span>
    </button>
  );
};

export default IconButton;
