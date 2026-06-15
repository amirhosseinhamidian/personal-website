import type { ProjectsContent } from '@/types/project';
export const projectsContent: ProjectsContent = {
  fa: {
    title: 'آخرین پروژه‌ها',
    projects: [
      {
        id: 1,
        projectType: 'وب اپلیکیشن آموزشی',
        title: 'سمانه یوگا',
        description:
          'سامانه‌ی سمانه یوگا یک پلتفرم آموزشی آنلاین برای مشاهده ویدیوهای یوگا و مدیتیشن است که به‌صورت کاملاً تحت وب طراحی و توسعه داده شده است. این پروژه شامل وبسایت اصلی، پنل مدیریت CMS و پنل اختصاصی سئو می‌باشد که به مدیران سایت امکان کنترل کامل بر محتوای آموزشی و پشتیبانی کاربران را می‌دهد.',
        url: 'https://samaneyoga.ir',
        previewUrl: 'https://samaneyoga.ir',
        button: 'مشاهده نمونه کار',
        tags: [
          { id: 1, key: 'technologies', tag: 'تکنولوژی‌های مورد استفاده' },
          { id: 2, key: 'features', tag: 'ویژگی‌های کلیدی' },
        ],
        details: {
          technologies: {
            title: 'تکنولوژی‌های مورد استفاده',
            items: [
              'Next.js',
              'React',
              'TypeScript',
              'Tailwind CSS',
              'CMS اختصاصی',
              'SEO Panel',
              'Responsive Design',
            ],
          },
          features: {
            title: 'ویژگی‌های کلیدی',
            items: [
              'مشاهده ویدیوهای آموزشی',
              'پنل مدیریت اختصاصی',
              'مدیریت محتوای آموزشی',
              'پنل اختصاصی سئو',
              'طراحی ریسپانسیو',
              'پشتیبانی کاربران',
            ],
          },
        },
      },
      {
        id: 2,
        projectType: 'اپلیکیشن اندروید فروشگاهی',
        title: 'پاساژ',
        description:
          'در پروژه پاساژ به مدت دو سال در بخش توسعه اپلیکیشن اندروید فعالیت داشتم. این پروژه یک پلتفرم فروشگاهی آنلاین با تمرکز بر تجربه خرید ساده، دسترسی سریع کاربران به محصولات و بهبود فرآیند خرید در موبایل بود.',
        url: 'https://epasazh.com/',
        previewUrl: 'https://epasazh.com/',
        button: 'مشاهده نمونه کار',
        tags: [
          { id: 1, key: 'technologies', tag: 'تکنولوژی‌های مورد استفاده' },
          { id: 2, key: 'features', tag: 'ویژگی‌های کلیدی' },
        ],
        details: {
          technologies: {
            title: 'تکنولوژی‌های مورد استفاده',
            items: [
              'Android Development',
              'Java',
              'REST API',
              'UI Implementation',
              'E-commerce App',
              'Performance Optimization',
            ],
          },
          features: {
            title: 'ویژگی‌های کلیدی',
            items: [
              'توسعه اپلیکیشن اندروید',
              'همکاری بلندمدت دو ساله',
              'پیاده‌سازی تجربه خرید موبایلی',
              'اتصال به سرویس‌های فروشگاهی',
              'بهینه‌سازی رابط کاربری اپلیکیشن',
            ],
          },
        },
      },
      {
        id: 3,
        projectType: 'پلتفرم هوش مصنوعی مهندسی',
        title: 'Standard Engineering',
        description:
          'در پروژه Standard Engineering بخش فرانت‌اند سایت را با React.js پیاده‌سازی کردم. این پروژه یک سیستم مبتنی بر هوش مصنوعی و چت‌بات اختصاصی برای دسترسی، تحلیل و استفاده از استانداردهای مختلف مهندسی در فرآیند طراحی بود. به دلیل خصوصی بودن پروژه و مالکیت شرکت گسترش فرآیند شریف، امکان بازدید عمومی از آن وجود ندارد.',
        url: '',
        previewImage: '/images/projects/standard-engineering.jpeg',
        button: 'غیرقابل بازدید عمومی',
        isPrivate: true,
        tags: [
          { id: 1, key: 'technologies', tag: 'تکنولوژی‌های مورد استفاده' },
          { id: 2, key: 'features', tag: 'ویژگی‌های کلیدی' },
        ],
        details: {
          technologies: {
            title: 'تکنولوژی‌های مورد استفاده',
            items: [
              'React.js',
              'Frontend Development',
              'AI Platform',
              'Custom Chatbot',
              'Search Engine',
              'Responsive UI',
            ],
          },
          features: {
            title: 'ویژگی‌های کلیدی',
            items: [
              'پیاده‌سازی فرانت‌اند با React.js',
              'پلتفرم مبتنی بر هوش مصنوعی',
              'چت‌بات اختصاصی مهندسی',
              'جستجو و تحلیل استانداردهای مهندسی',
              'پروژه خصوصی سازمانی',
              'عدم دسترسی عمومی به دلیل محرمانگی',
            ],
          },
        },
      },
      {
        id: 4,
        projectType: 'سایت فروشگاهی وردپرس',
        title: 'خانه آرمانی',
        description:
          'خانه آرمانی یک سایت فروشگاهی وردپرسی برای فروش پارچه مبل است که با طراحی اختصاصی و قالب سفارشی پیاده‌سازی شده است. تمرکز این پروژه روی نمایش حرفه‌ای محصولات، تجربه کاربری ساده، ساختار فروشگاهی مناسب و قابلیت توسعه برای سئو و فروش آنلاین بود.',
        url: 'https://armanihome.shop/',
        previewUrl: 'https://armanihome.shop/',
        button: 'مشاهده نمونه کار',
        tags: [
          { id: 1, key: 'technologies', tag: 'تکنولوژی‌های مورد استفاده' },
          { id: 2, key: 'features', tag: 'ویژگی‌های کلیدی' },
        ],
        details: {
          technologies: {
            title: 'تکنولوژی‌های مورد استفاده',
            items: [
              'WordPress',
              'WooCommerce',
              'Custom Theme',
              'PHP',
              'Elementor',
              'SEO Structure',
              'Responsive Design',
            ],
          },
          features: {
            title: 'ویژگی‌های کلیدی',
            items: [
              'طراحی قالب اختصاصی',
              'فروشگاه پارچه مبل',
              'ساختار فروشگاهی وردپرس',
              'نمایش حرفه‌ای محصولات',
              'طراحی واکنش‌گرا',
              'آماده برای توسعه سئو',
            ],
          },
        },
      },
    ],
  },

  en: {
    title: 'Latest Projects',
    projects: [
      {
        id: 1,
        projectType: 'Educational web application',
        title: 'Samaneh Yoga',
        description:
          'Samaneh Yoga is an online educational platform for watching yoga and meditation videos, fully designed and developed as a web-based system. The project includes the main website, an admin dashboard CMS, and a dedicated SEO panel, enabling full control over educational content and user support.',
        url: 'https://samaneyoga.ir',
        previewUrl: 'https://samaneyoga.ir',
        button: 'View Project',
        tags: [
          { id: 1, key: 'technologies', tag: 'Used technologies' },
          { id: 2, key: 'features', tag: 'Key features' },
        ],
        details: {
          technologies: {
            title: 'Used technologies',
            items: [
              'Next.js',
              'React',
              'TypeScript',
              'Tailwind CSS',
              'Custom CMS',
              'SEO Panel',
              'Responsive Design',
            ],
          },
          features: {
            title: 'Key features',
            items: [
              'Educational video platform',
              'Custom admin dashboard',
              'Content management',
              'Dedicated SEO panel',
              'Responsive design',
              'User support tools',
            ],
          },
        },
      },
      {
        id: 2,
        projectType: 'E-commerce Android Application',
        title: 'Pasazh',
        description:
          'In the Pasazh project, I worked on the Android application development for two years. This project was an online shopping platform focused on improving the mobile shopping experience, product accessibility, and the purchase flow for users.',
        url: 'https://epasazh.com/',
        previewUrl: 'https://epasazh.com/',
        button: 'View Project',
        tags: [
          { id: 1, key: 'technologies', tag: 'Used technologies' },
          { id: 2, key: 'features', tag: 'Key features' },
        ],
        details: {
          technologies: {
            title: 'Used technologies',
            items: [
              'Android Development',
              'Java',
              'REST API',
              'UI Implementation',
              'E-commerce App',
              'Performance Optimization',
            ],
          },
          features: {
            title: 'Key features',
            items: [
              'Android app development',
              'Two-year collaboration',
              'Mobile shopping experience',
              'E-commerce service integration',
              'Application UI optimization',
            ],
          },
        },
      },
      {
        id: 3,
        projectType: 'AI Engineering Platform',
        title: 'Standard Engineering',
        description:
          'For the Standard Engineering project, I developed the frontend using React.js. This project was an AI-based platform with a custom chatbot designed for accessing, analyzing, and working with different engineering standards in the design process. Since the project belongs to the private company Gostareshe Farayand Sharif, it is not publicly accessible.',
        url: '',
        previewImage: '/images/projects/standard-engineering.jpeg',
        button: 'Not publicly available',
        isPrivate: true,
        tags: [
          { id: 1, key: 'technologies', tag: 'Used technologies' },
          { id: 2, key: 'features', tag: 'Key features' },
        ],
        details: {
          technologies: {
            title: 'Used technologies',
            items: [
              'React.js',
              'Frontend Development',
              'AI Platform',
              'Custom Chatbot',
              'Search Engine',
              'Responsive UI',
            ],
          },
          features: {
            title: 'Key features',
            items: [
              'React.js frontend implementation',
              'AI-based engineering platform',
              'Custom engineering chatbot',
              'Engineering standards analysis',
              'Private enterprise project',
              'Not publicly accessible',
            ],
          },
        },
      },
      {
        id: 4,
        projectType: 'WordPress E-commerce Website',
        title: 'Armani Home',
        description:
          'Armani Home is a WordPress e-commerce website for selling sofa fabrics, developed with a custom design and dedicated theme. The project focuses on professional product presentation, a smooth user experience, a solid e-commerce structure, and scalability for SEO and online sales.',
        url: 'https://armanihome.shop/',
        previewUrl: 'https://armanihome.shop/',
        button: 'View Project',
        tags: [
          { id: 1, key: 'technologies', tag: 'Used technologies' },
          { id: 2, key: 'features', tag: 'Key features' },
        ],
        details: {
          technologies: {
            title: 'Used technologies',
            items: [
              'WordPress',
              'WooCommerce',
              'Custom Theme',
              'PHP',
              'Elementor',
              'SEO Structure',
              'Responsive Design',
            ],
          },
          features: {
            title: 'Key features',
            items: [
              'Custom theme design',
              'Sofa fabric e-commerce website',
              'WordPress store structure',
              'Professional product presentation',
              'Responsive design',
              'SEO-ready structure',
            ],
          },
        },
      },
    ],
  },
};