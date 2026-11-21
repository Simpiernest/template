import { Suspense } from 'react';
import { ConfirmationPage } from '@/components/OrderPages';
export default function Page(){return <Suspense fallback={<div className='container page'>Loading…</div>}><ConfirmationPage/></Suspense>}
