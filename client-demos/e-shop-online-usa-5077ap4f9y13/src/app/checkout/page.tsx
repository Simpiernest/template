import { Suspense } from 'react';
import { CheckoutPage } from '@/components/OrderPages';
export default function Page(){return <Suspense fallback={<div className='container page'>Loading…</div>}><CheckoutPage/></Suspense>}
