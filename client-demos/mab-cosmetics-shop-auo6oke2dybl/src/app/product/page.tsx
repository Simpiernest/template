import { Suspense } from 'react';
import { ProductPage } from '@/components/ShoppingPages';
export default function Page(){return <Suspense fallback={<div className='container page'>Loading…</div>}><ProductPage/></Suspense>}
