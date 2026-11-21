import React from 'react';
import { MotionPage } from '@/components/MotionUI';
import './globals.css';
import { StoreProvider } from '@/context/Store';
import { Header, Footer } from '@/components/StoreUI';
export const metadata = {
  title: 'MAB COSMETICS SHOP — Authentic Beauty Essentials in Accra',
  description: 'MAB COSMETICS SHOP offers a curated selection of authentic cosmetics, skincare, and personal care products in Accra. Message us on WhatsApp to check stock and get personalised advice.',
  icons: {
    icon: '/assets/logo.svg',
    apple: '/assets/logo.svg'
  },
  openGraph: {
    title: 'MAB COSMETICS SHOP',
    description: 'Authentic beauty essentials and personalised service in Accra. Message us on WhatsApp for stock and advice.',
    images: ['/assets/logo.svg']
  }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><head><meta name="robots" content="noindex, nofollow, noarchive"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Open+Sans:wght@400;600;700&display=swap"/></head><body><div id="unifotec-demo-banner" style={{ position: "relative", zIndex: 9999, background: "#111", color: "#fff", font: "13px/1.4 Arial, sans-serif", textAlign: "center", padding: "8px 12px" }}>Unofficial demonstration website created by Unifotec for MAB COSMETICS SHOP. Not affiliated with or endorsed by the business. Payments, checkout and orders are disabled.</div><StoreProvider><Header/><MotionPage>{children}</MotionPage><Footer/></StoreProvider><script src="/demo-guard.js" defer></script></body></html> }
