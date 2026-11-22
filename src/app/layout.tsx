import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import './preview.css';

export const metadata: Metadata = {
  title: 'Broadway Bazaar Vintage | Independent Website Preview',
  description: 'An independently created storefront design preview for a Denver vintage shop.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="vintage">
    <header>
      <p className="preview-note">Unofficial design preview · Independently created · No affiliation or endorsement</p>
      <div className="container nav preview-nav">
        <Link className="logo" href="/">Broadway Bazaar Vintage</Link>
        <nav aria-label="Main navigation"><Link href="/shop">Browse</Link><Link href="/about">About</Link><Link href="/contact">Visit</Link></nav>
      </div>
    </header>
    {children}
    <footer><div className="container">Broadway Bazaar Vintage · Independent concept by Unifotec · No orders or payments</div></footer>
  </body></html>;
}
