import { Suspense } from 'react';
import { ShopPage } from '@/components/ShoppingPages';
export default function Page(){return <Suspense fallback={<div className='container page'>Loading…</div>}><ShopPage/></Suspense>}
