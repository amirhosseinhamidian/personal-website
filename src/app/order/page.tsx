import OrderPageContent from '@/components/templates/order/OrderPageContent';
import { Suspense } from 'react';

export default function OrderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderPageContent />
    </Suspense>
  );
}
