'use client';

import { useSearchParams } from 'next/navigation';
import OrderSectionView from '@/components/modules/OrderSectionView/OrderSectionView';
import BasicInformation from '@/components/templates/order/BasicInformation';
import SiteTypeList from '@/components/SiteTypeList';

type PackageType = 'Economic' | 'Standard' | 'Professional' | 'Custom';

export default function OrderPageContent() {
  const searchParams = useSearchParams();
  const selectedPackage =
    (searchParams.get('package') as PackageType) || 'Economic';

  return (
    <div className='container mx-auto px-4 py-8'>
      <OrderSectionView activeSection={1} className='my-6' />
      <BasicInformation />
      <SiteTypeList selectedPackage={selectedPackage} />
    </div>
  );
}
