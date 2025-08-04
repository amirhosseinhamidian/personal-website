import { LuMonitor } from 'react-icons/lu';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { MdInsertChartOutlined } from 'react-icons/md';
import { PiLightbulbFilament } from 'react-icons/pi';

export const mySpecialtyContent = {
  fa: {
    sectionTitle: 'تخصص من',
    specialties: [
      {
        id: 1,
        icon: LuMonitor,
        title: 'توسعه وب فول‌استک',
        description:
          'با ترکیب توسعه فرانت‌اند و بک‌اند، وب‌اپلیکیشن‌های سریع، مقیاس‌پذیر و بهینه می‌سازم که تجربه کاربری بی‌نظیری ارائه می‌دهند.',
        tags: [
          { id: 1, tag: 'PostgreSQL' },
          { id: 2, tag: 'Node.js' },
          { id: 3, tag: 'React.js' },
          { id: 4, tag: 'Next.js' },
          { id: 5, tag: 'MongoDB' },
          { id: 6, tag: 'Nest.js' },
        ],
      },
      {
        id: 2,
        icon: IoColorPaletteOutline,
        title: 'طراحی و بهینه‌سازی UI/UX',
        description:
          'ساخت رابط کاربری مدرن و واکنش‌گرا با تمرکز بر تجربه کاربری و اصول طراحی حرفه‌ای برای افزایش تعامل کاربران.',
        tags: [
          { id: 1, tag: 'Figma' },
          { id: 2, tag: 'Adobe XD' },
          { id: 3, tag: 'Tailwind CSS' },
          { id: 4, tag: 'تجربه کاربری (UX) پیشرفته' },
        ],
      },
      {
        id: 3,
        icon: MdInsertChartOutlined,
        title: 'پیاده‌سازی پنل مدیریت و CMS',
        description:
          'ایجاد سیستم‌های مدیریت محتوا (CMS) و پنل‌های پیشرفته برای کنترل کامل روی داده‌ها، کاربران و بهینه‌سازی عملکرد سایت.',
        tags: [{ id: 1, tag: 'داشبورد اختصاصی برای مدیریت محتوا' }],
      },
      {
        id: 4,
        icon: PiLightbulbFilament,
        title: 'مشاوره و اجرای استارتاپ‌های دیجیتال',
        description:
          'با ترکیب توسعه فرانت‌اند و بک‌اند، وب‌اپلیکیشن‌های سریع، مقیاس‌پذیر و بهینه می‌سازم که تجربه کاربری بی‌نظیری ارائه می‌دهند.',
        tags: [
          { id: 1, tag: 'تحلیل پروژه' },
          { id: 2, tag: 'وایرفریمینگ' },
          { id: 3, tag: 'سئو و مقیاس‌پذیری' },
        ],
      },
    ],
  },
  en: {
    sectionTitle: 'My Specialties',
    specialties: [
      {
        id: 1,
        icon: LuMonitor,
        title: 'Full-stack Web Development',
        description:
          'By combining frontend and backend development, I build fast, scalable, and optimized web applications that deliver an exceptional user experience.',
        tags: [
          { id: 1, tag: 'PostgreSQL' },
          { id: 2, tag: 'Node.js' },
          { id: 3, tag: 'React.js' },
          { id: 4, tag: 'Next.js' },
          { id: 5, tag: 'MongoDB' },
          { id: 6, tag: 'Nest.js' },
        ],
      },
      {
        id: 2,
        icon: IoColorPaletteOutline,
        title: 'UI/UX Design & Optimization',
        description:
          'Creating modern and responsive interfaces focused on user experience and professional design principles to maximize engagement.',
        tags: [
          { id: 1, tag: 'Figma' },
          { id: 2, tag: 'Adobe XD' },
          { id: 3, tag: 'Tailwind CSS' },
          { id: 4, tag: 'Advanced UX' },
        ],
      },
      {
        id: 3,
        icon: MdInsertChartOutlined,
        title: 'Admin Panel & CMS Implementation',
        description:
          'Building powerful CMS and admin dashboards to give full control over content, users, and site performance optimization.',
        tags: [{ id: 1, tag: 'Custom content management dashboard' }],
      },
      {
        id: 4,
        icon: PiLightbulbFilament,
        title: 'Startup Consulting & Execution',
        description:
          'By combining frontend and backend development, I build fast, scalable, and optimized web applications that deliver an exceptional user experience.',
        tags: [
          { id: 1, tag: 'Project Analysis' },
          { id: 2, tag: 'Wireframing' },
          { id: 3, tag: 'SEO & Scalability' },
        ],
      },
    ],
  },
};
