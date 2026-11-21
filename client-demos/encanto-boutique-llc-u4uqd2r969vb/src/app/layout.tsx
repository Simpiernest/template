import React from 'react';
import { MotionPage } from '@/components/MotionUI';
import './globals.css';
import { StoreProvider } from '@/context/Store';
import { Header, Footer } from '@/components/StoreUI';
export const metadata = {
  title: 'Encanto Boutique LLC – Perfumes & Fragrances in Dallas',
  description: 'Encanto Boutique LLC offers a curated selection of perfumes, fragrance gift sets, samplers and wholesale clothing in Dallas. Message us to ask for prices and availability.',
  openGraph: {
    title: 'Encanto Boutique LLC',
    description: 'Discover perfumes, fragrance gift sets, samplers, and wholesale clothing at Encanto Boutique LLC in Dallas.',
    images: '/assets/logo.svg'
  },
  icons: {
    icon: '/assets/logo.svg',
    shortcut: '/assets/logo.svg'
  }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><head><meta name="robots" content="noindex, nofollow, noarchive"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@400;600;700&display=swap"/></head><body><div id="unifotec-demo-banner" style={{ position: "relative", zIndex: 9999, background: "#111", color: "#fff", font: "13px/1.4 Arial, sans-serif", textAlign: "center", padding: "8px 12px" }}>Unofficial demonstration website created by Unifotec for Encanto Boutique LLC. Not affiliated with or endorsed by the business. Payments, checkout and orders are disabled.</div><StoreProvider><Header/><MotionPage>{children}</MotionPage><Footer/></StoreProvider><script src="/demo-guard.js" defer></script></body></html> }
