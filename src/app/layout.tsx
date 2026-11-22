import React from 'react';
import { MotionPage } from '@/components/MotionUI';
import './globals.css';
import { StoreProvider } from '@/context/Store';
import { Header, Footer } from '@/components/StoreUI';
export const metadata = { title: 'Immaculate Cards | Unofficial Storefront Preview', description: 'Independent retail storefront design preview for a retailer in Phoenix, AZ.', robots: { index: false, follow: false } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><StoreProvider><Header/><MotionPage>{children}</MotionPage><Footer/></StoreProvider></body></html> }
