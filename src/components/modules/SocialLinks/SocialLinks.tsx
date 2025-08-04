import IconButton from '@/components/ui/IconButton';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

import { FaTelegramPlane } from 'react-icons/fa';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  const router = useRouter();
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <IconButton
        icon={FaTelegramPlane}
        onClick={() => router.push('https://t.me/Amirhosseinhamidian')}
      />
      <IconButton icon={FaInstagram} />
      <IconButton
        icon={FaLinkedinIn}
        onClick={() =>
          router.push('https://www.linkedin.com/in/amirhosseinhamidian/')
        }
      />
      <IconButton
        icon={FaGithub}
        onClick={() => router.push('https://github.com/amirhosseinhamidian')}
      />
    </div>
  );
};

export default SocialLinks;
