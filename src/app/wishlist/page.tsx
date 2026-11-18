import { Suspense } from 'react';
import { WishlistPage } from '@/components/ShoppingPages';
export default function Page(){return <Suspense fallback={<div className='container page'>Loading…</div>}><WishlistPage/></Suspense>}
