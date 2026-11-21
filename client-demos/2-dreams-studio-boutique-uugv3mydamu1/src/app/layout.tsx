import React from 'react';
import { MotionPage } from '@/components/MotionUI';
import './globals.css';
import { StoreProvider } from '@/context/Store';
import { Header, Footer } from '@/components/StoreUI';
export const metadata = {
  title: '2 Dreams Studio & Boutique — Curated Women’s Clothing in Dallas',
  description: 'Discover dresses, tops, denim, outerwear and accessories at 2 Dreams Studio & Boutique in Dallas. Message us on WhatsApp to check availability.',
  openGraph: {
    title: '2 Dreams Studio & Boutique',
    description: 'Curated women\'s clothing and accessories with friendly, personalized service in Dallas, TX.',
    images: ['/assets/logo.svg'],
  },
  icons: {
    icon: '/assets/logo.svg',
    apple: '/assets/logo.svg'
  }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><head><meta name="robots" content="noindex, nofollow, noarchive"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@400;600;700&display=swap"/></head><body><div id="unifotec-demo-banner" style={{ position: "relative", zIndex: 9999, background: "#111", color: "#fff", font: "13px/1.4 Arial, sans-serif", textAlign: "center", padding: "8px 12px" }}>Unofficial demonstration website created by Unifotec for 2 Dreams Studio & Boutique. Not affiliated with or endorsed by the business. Payments, checkout and orders are disabled.</div><StoreProvider><Header/><MotionPage>{children}</MotionPage><Footer/></StoreProvider><script src="/demo-guard.js" defer></script></body></html> }
