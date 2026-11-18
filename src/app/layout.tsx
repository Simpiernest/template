import React from 'react';
import './globals.css';
import { StoreProvider } from '@/context/Store';
import { Header, Footer } from '@/components/StoreUI';
export const metadata = { title: 'Shopfinity | Shop the Latest Trends', description: 'Discover fashion, beauty, electronics, and home essentials at Shopfinity.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><StoreProvider><Header/><main>{children}</main><Footer/></StoreProvider></body></html> }
