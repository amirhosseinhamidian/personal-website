import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/modules/Header/Header';
import Footer from '@/components/modules/Footer/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'امیرحسین حمیدیان - توسعه‌دهنده فرانت‌اند',
  description: 'نمونه‌کارها، پروژه‌ها و تجربیات توسعه وب من را اینجا ببینید.',
  keywords: [
    'امیرحسین حمیدیان',
    'توسعه‌دهنده',
    'فرانت‌اند',
    'Next.js',
    'Portfolio',
  ],
  authors: [
    { name: 'امیرحسین حمیدیان', url: 'https://amirhosseinhamidian.ir' },
  ],
  creator: 'امیرحسین حمیدیان',
  metadataBase: new URL('https://amirhosseinhamidian.ir'),
  openGraph: {
    title: 'امیرحسین حمیدیان - توسعه‌دهنده فرانت‌اند',
    description:
      'برنامه‌نویس فرانت‌اند با تمرکز بر Next.js و طراحی رابط کاربری مدرن.',
    url: 'https://amirhosseinhamidian.ir',
    siteName: 'امیرحسین حمیدیان',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'پیش‌نمایش سایت امیرحسین حمیدیان',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'امیرحسین حمیدیان - توسعه‌دهنده فرانت‌اند',
    description: 'طراحی و پیاده‌سازی وب‌سایت‌های حرفه‌ای با Next.js',
    creator: '@AmirhosseinHdm',
    images: ['/images/hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa'>
      <body
        className={`bg-background-light font-pinar font-normal text-text-light antialiased dark:bg-background-dark dark:text-text-dark`}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
