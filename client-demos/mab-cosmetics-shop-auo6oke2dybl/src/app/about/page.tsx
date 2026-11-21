import { Suspense } from 'react';
import { AboutPage } from '@/components/ContentPages';
export default function Page(){return <Suspense fallback={<div className='container page'>Loading…</div>}><AboutPage/></Suspense>}
