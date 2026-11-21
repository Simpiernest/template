import { Suspense } from 'react';
import { HomePage } from '@/components/ShoppingPages';
export default function Page(){return <Suspense fallback={<div className='container page'>Loading…</div>}><HomePage/></Suspense>}
