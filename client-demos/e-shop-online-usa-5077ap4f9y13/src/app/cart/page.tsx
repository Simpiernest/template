import { Suspense } from 'react';
import { CartPage } from '@/components/OrderPages';
export default function Page(){return <Suspense fallback={<div className='container page'>Loading…</div>}><CartPage/></Suspense>}
