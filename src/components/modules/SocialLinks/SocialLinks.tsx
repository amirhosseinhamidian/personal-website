import IconButton from '@/components/ui/IconButton';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  const router = useRouter();
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <IconButton icon={FaXTwitter} />
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
