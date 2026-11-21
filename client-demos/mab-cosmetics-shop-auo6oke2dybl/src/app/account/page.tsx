import { Suspense } from 'react';
import { AccountPage } from '@/components/ContentPages';
export default function Page(){return <Suspense fallback={<div className='container page'>Loading…</div>}><AccountPage/></Suspense>}
