'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { scrollToSection } from '@/utils/scrollToSection';
import { useLanguage } from '@/hooks/useLanguage';

interface NavigationProps {
  onClick?: () => void;
  direction?: 'row' | 'wrap';
}

const labels = {
  fa: {
    intro: 'معرفی',
    skills: 'مهارت های من',
    projects: 'پروژه‌ها',
    blog: 'بلاگ',
    contact: 'ارتباط با من',
  },
  en: {
    intro: 'Intro',
    skills: 'My skills',
    projects: 'Projects',
    blog: 'Blog',
    contact: 'Contact Me',
  },
} as const;

type Language = keyof typeof labels;
type LabelKey = keyof (typeof labels)['fa'];

const Navigation = ({ onClick, direction = 'row' }: NavigationProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { language } = useLanguage();

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
        { key: 'intro', id: 'intro' },
        { key: 'skills', id: 'skills' },
        { key: 'projects', id: 'projects' },
        { key: 'blog', href: '/', id: '' },
        { key: 'contact', id: 'contact' },
      ].map((item, index) =>
        item.href ? (
          <Link key={index} href={item.href} className='nav-link mx-auto'>
            {labels[language as Language][item.key as LabelKey]}
          </Link>
        ) : (
          <button
            key={index}
            onClick={() => handleNavigation(item.id)}
            className='nav-link mx-auto w-fit text-sm lg:text-base'
          >
            {labels[language as Language][item.key as LabelKey]}
          </button>
        )
      )}
    </nav>
  );
};

export default Navigation;
