import { Suspense } from 'react';
import { ContactPage } from '@/components/ContentPages';
export default function Page(){return <Suspense fallback={<div className='container page'>Loading…</div>}><ContactPage/></Suspense>}
