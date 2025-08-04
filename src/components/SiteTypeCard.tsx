import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ImageModal from './ImageModal';

interface SiteImage {
  id: number;
  url: string;
  sourceUrl: string;
  description: string | null;
}

interface SiteType {
  id: number;
  title: string;
  description: string;
  price: number;
  features: string;
  images: SiteImage[];
}

interface SiteTypeCardProps {
  siteType: SiteType;
}

export default function SiteTypeCard({ siteType }: SiteTypeCardProps) {
  const [selectedImage, setSelectedImage] = useState<SiteImage | null>(null);
  const features = JSON.parse(siteType.features) as string[];

  return (
    <div className='overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl'>
      <div className='relative h-64 w-full'>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className='h-full w-full'
        >
          {siteType.images.map((image) => (
            <SwiperSlide key={image.id}>
              <button
                className='h-full w-full'
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.url}
                  alt={image.description || siteType.title}
                  fill
                  className='object-cover'
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='p-6'>
        <h3 className='text-2xl font-bold text-gray-900'>{siteType.title}</h3>
        <p className='mt-2 text-gray-600'>{siteType.description}</p>

        <div className='mt-4'>
          <h4 className='font-semibold text-gray-900'>Features:</h4>
          <ul className='mt-2 list-inside list-disc space-y-1'>
            {features.map((feature, index) => (
              <li key={index} className='text-gray-600'>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-6 flex items-center justify-between'>
          <p className='text-2xl font-bold text-gray-900'>
            ${siteType.price.toFixed(2)}
          </p>
          <button className='rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700'>
            Select
          </button>
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage.url}
          sourceUrl={selectedImage.sourceUrl}
          description={selectedImage.description || undefined}
        />
      )}
    </div>
  );
}
