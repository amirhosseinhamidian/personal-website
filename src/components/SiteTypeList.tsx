import { useEffect, useState } from 'react';
import SiteTypeCard from './SiteTypeCard';

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
  packageType: 'Economic' | 'Standard' | 'Professional' | 'Custom';
}

interface SiteTypeListProps {
  selectedPackage: 'Economic' | 'Standard' | 'Professional' | 'Custom';
}

export default function SiteTypeList({ selectedPackage }: SiteTypeListProps) {
  const [siteTypes, setSiteTypes] = useState<SiteType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSiteTypes = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch('/api/site-types');

        if (!res.ok) {
          throw new Error('Failed to fetch site types');
        }

        const data = await res.json();
        // Filter site types based on selected package
        const filteredTypes = data.filter(
          (type: SiteType) => type.packageType === selectedPackage
        );
        setSiteTypes(filteredTypes);
      } catch (err) {
        setError('Failed to load site types. Please try again later.');
        console.error('Error fetching site types:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSiteTypes();
  }, [selectedPackage]);

  if (isLoading) {
    return (
      <div className='flex h-64 items-center justify-center'>
        <div className='h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent'></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-red-50 text-red-600 rounded-lg p-4 text-center'>
        {error}
      </div>
    );
  }

  if (siteTypes.length === 0) {
    return (
      <div className='rounded-lg bg-gray-50 p-8 text-center text-gray-600'>
        No website types available for the selected package.
      </div>
    );
  }

  return (
    <div className='mt-8'>
      <h2 className='mb-6 text-2xl font-bold text-gray-900'>
        Available Website Types
      </h2>
      <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {siteTypes.map((siteType) => (
          <SiteTypeCard key={siteType.id} siteType={siteType} />
        ))}
      </div>
    </div>
  );
}
