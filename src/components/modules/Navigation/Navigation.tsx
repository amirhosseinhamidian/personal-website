'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { scrollToSection } from '@/utils/scrollToSection';

interface NavigationProps {
  onClick?: () => void;
  direction?: 'row' | 'wrap';
}

const Navigation = ({ onClick, direction = 'row' }: NavigationProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (id: string) => {
    if (pathname === '/') {
      scrollToSection(id);
    } else {
      router.push(`/?scrollTo=${id}`);
    }
    if (onClick) onClick();
  };

  return (
    <nav
      className={`flex gap-6 text-sm md:text-base ${
        direction === 'wrap'
          ? 'flex-wrap justify-center text-text-dark'
          : 'flex-col md:flex-row'
      }`}
    >
      {[
        { name: 'معرفی', id: 'intro' },
        { name: 'پروژه‌ها', id: 'projects' },
        { name: 'بلاگ', href: '/blog', id: '' },
        { name: 'پلن‌های همکاری', id: 'plans' },
        { name: 'ارتباط با من', id: 'contact' },
      ].map((item, index) =>
        item.href ? (
          <Link key={index} href={item.href} className='nav-link mx-auto'>
            {item.name}
          </Link>
        ) : (
          <button
            key={index}
            onClick={() => handleNavigation(item.id)}
            className='nav-link mx-auto w-fit'
          >
            {item.name}
          </button>
        )
      )}
    </nav>
  );
};

export default Navigation;
