'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ShoppingBag, ShoppingCart, Search, Heart, User, Menu, X, ChevronDown, ArrowRight, Truck, RotateCcw, ShieldCheck, Headphones, Star, LayoutGrid, Mail, Tag, Users, Instagram, Facebook, Youtube, Check, Minus, Plus } from 'lucide-react';
import { Crop, Item, items, categories, crop, money } from '@/data/catalog';
import { useStore } from '@/context/Store';
export function Picture({ art, label = '', className = '', style = {} }: {
    art: Crop;
    label?: string;
    className?: string;
    style?: React.CSSProperties;
}) {
    const w = art.w || 1024, h = art.h || 1536;
    return <div role="img" aria-label={label || undefined} aria-hidden={!label} className={'picture ' + className} style={{ aspectRatio: art.width + '/' + art.height, ...style }}><svg viewBox={[art.x,art.y,art.width,art.height].join(' ')} preserveAspectRatio="xMidYMid slice" aria-hidden="true"><image href={'/assets/'+art.file+'.png'} width={w} height={h}/>{art.clean && <rect x={art.x+art.width-34} y={art.y} width={34} height={29} fill="#f7f3f2"/>}</svg></div>;
}
export function Logo() { return <Link className="logo" href="/"><ShoppingBag />Shopfinity</Link>; }
export function Header() {
    const { count } = useStore();
    const path = usePathname();
    const router = useRouter();
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [query, setQuery] = useState('');
    const links = [['Home', '/'], ['Shop', '/shop'], ['Categories', '/shop#categories'], ['New Arrivals', '/shop?sort=new'], ['Deals', '/shop?deals=true'], ['About', '/about']];
    return <header><div className="announcement"><span><Truck />Free Shipping on Orders Over $50</span><i /><span><RotateCcw />30-Day Easy Returns</span><i /><span className="secure"><ShieldCheck />Secure Payment</span><i /><span><Headphones />24/7 Support</span></div><div className="nav container"><button className="icon mobile-menu" aria-label="Toggle navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button><Logo /><nav className="desktop-nav">{links.map(([name, url]) => <Link key={name} className={path === url ? 'active' : ''} href={url}>{name}{['Shop', 'Categories'].includes(name) && <ChevronDown size={13}/>}</Link>)}</nav><div className="nav-icons"><button aria-label="Search products" className="icon" onClick={() => setSearch(!search)}><Search /></button><Link aria-label="Wishlist" href="/wishlist"><Heart /></Link><Link aria-label="My account" href="/account"><User /></Link><Link aria-label={`Cart, ${count} items`} href="/cart" className="cart-icon"><ShoppingCart /><b>{count}</b></Link></div></div>{menu && <nav className="mobile-drawer">{[...links, ['Contact', '/contact'], ['My Account', '/account']].map(([name, url]) => <Link key={name} href={url} onClick={() => setMenu(false)}>{name}</Link>)}</nav>}{search && <form className="search-bar container" onSubmit={e => { e.preventDefault(); router.push('/shop?q=' + encodeURIComponent(query)); setSearch(false); }}><Search /><input aria-label="Search products" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products, categories and more…" autoFocus/><button className="btn">Search</button><button className="icon" type="button" aria-label="Close search" onClick={() => setSearch(false)}><X /></button></form>}</header>;
}
export function Newsletter({ compact = false }: {
    compact?: boolean;
}) { const [done, setDone] = useState(false); return <div className={compact ? 'newsletter-compact' : 'newsletter'}>{!compact && <div><h2>Stay in the Loop</h2><p>Get exclusive offers, new arrivals, and shopping tips.</p></div>}<form onSubmit={e => { e.preventDefault(); setDone(true); }}><Mail /><input type="email" required aria-label="Newsletter email" placeholder="Enter your email address"/><button className="btn" aria-label="Subscribe">{compact ? <ArrowRight /> : <>Subscribe <ArrowRight size={16}/></>}</button></form>{done && <p role="status">Thanks! Your preference is saved for this demo. No email has been sent.</p>}</div>; }
export function Footer() { const [wide, setWide] = useState(true); useEffect(() => { const media = window.matchMedia('(min-width:701px)'); const sync = () => setWide(media.matches); sync(); media.addEventListener('change', sync); return () => media.removeEventListener('change', sync); }, []); const groups = [{ title: 'Shop', links: [['All Products', '/shop'], ...categories.slice(0, 5).map(c => [c.name, '/shop?category=' + c.id])] }, { title: 'Customer Care', links: [['Contact Us', '/contact'], ['FAQs', '/contact#faq'], ['Shipping & Returns', '/info/shipping'], ['Track Your Order', '/account?tab=orders'], ['Payment Methods', '/info/payments'], ['Warranty', '/info/warranty']] }, { title: 'Company', links: [['About Us', '/about'], ['Our Story', '/about#story'], ['Careers', '/info/careers'], ['Press & Media', '/info/press'], ['Privacy Policy', '/info/privacy'], ['Terms & Conditions', '/info/terms']] }]; return <footer><div className="container footer-grid"><div className="footer-brand"><Logo /><p>Your trusted destination for quality products across fashion, beauty, electronics, home, and more.</p><div className="socials">{[[Instagram, 'Instagram'], [Youtube, 'YouTube'], [Facebook, 'Facebook']].map(([Icon, name]: any) => <Link key={name} href={'/info/social?channel=' + name} aria-label={name}><Icon size={20}/></Link>)}</div></div>{groups.map(g => <details key={g.title} open={wide}><summary>{g.title}<ChevronDown size={14}/></summary><div>{g.links.map(([label, url]) => <Link key={label} href={url}>{label}</Link>)}</div></details>)}<details open={wide}><summary>Stay in the Loop<ChevronDown size={14}/></summary><p>Get exclusive offers, new arrivals, and shopping tips.</p><Newsletter compact/></details></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Shopfinity. All rights reserved.</span><div className="payments"><b>VISA</b><b className="mastercard">●●</b><b>PayPal</b><b> Pay</b><b>G Pay</b></div></div></footer>; }
export function Benefits({ dark = false }: {
    dark?: boolean;
}) { return <div className={'benefits ' + (dark ? 'dark' : '')}>{(dark ? [[ShoppingBag, 'Why Shop with Shopfinity?', ''], [ShieldCheck, 'Premium Quality', 'Handpicked products'], [Tag, 'Great Prices', 'Best value always'], [Truck, 'Fast Delivery', 'Nationwide shipping'], [Users, 'Trusted by Thousands', '5★ reviews & happy customers']] : [[Truck, 'Free Shipping', 'Orders over $50'], [RotateCcw, 'Easy Returns', '30-day policy'], [ShieldCheck, 'Secure Payment', '100% protected'], [Headphones, '24/7 Support', 'Always here for you']]).map(([Icon, title, desc]: any) => <div key={title}><Icon /><span><strong>{title}</strong><small>{desc}</small></span></div>)}</div>; }
export function Breadcrumb({ name }: {
    name: string;
}) { return <div className="breadcrumb"><Link href="/">Home</Link><span>/</span>{name}</div>; }
export function SectionTitle({ children, href = '/shop', label = 'View All' }: {
    children: React.ReactNode;
    href?: string;
    label?: string;
}) { return <div className="section-title"><h2>{children}</h2><Link href={href}>{label} <ArrowRight size={16}/></Link></div>; }
export function Categories({ all = false }: {
    all?: boolean;
}) { return <div id="categories" className={'categories ' + (all ? 'with-all' : '')}>{all && <Link className="category active" href="/shop"><LayoutGrid /><strong>All Products</strong></Link>}{categories.map(c => <Link className="category" key={c.id} href={'/shop?category=' + c.id}><Picture art={c.art} label={c.name}/><strong>{c.name}</strong></Link>)}{!all && <Link className="category mobile-category" href="/shop"><LayoutGrid /><strong>All Categories</strong></Link>}</div>; }
export function ProductCard({ product: p }: {
    product: Item;
}) { const { add, wish, wishlist } = useStore(); return <article className="product-card"><div className="product-art"><Link href={'/product/' + p.id}><Picture art={p.art} label={p.name}/></Link><button className={'heart icon ' + (wishlist.includes(p.id) ? 'selected' : '')} aria-label={(wishlist.includes(p.id) ? 'Remove ' : 'Save ') + p.name + ' ' + (wishlist.includes(p.id) ? 'from' : 'to') + ' wishlist'} aria-pressed={wishlist.includes(p.id)} onClick={() => wish(p.id)}><Heart /></button></div><div className="product-copy"><div className="rating"><Star /><b>{p.rating}</b> <span>({p.reviews})</span></div><Link className="product-name" href={'/product/' + p.id}>{p.name}</Link><div className="price"><strong>{money(p.price)}</strong><del>{money(p.old)}</del><span className="discount">-{Math.round((1 - p.price / p.old) * 100)}%</span></div><button className="btn add" onClick={() => add(p)}><ShoppingCart size={16}/>Add to Cart</button></div></article>; }
export function ProductGrid({ products = items.slice(0, 4), five = false }: {
    products?: Item[];
    five?: boolean;
}) { return <div className={'product-grid ' + (five ? 'five' : '')}>{products.map(p => <ProductCard key={p.id} product={p}/>)}</div>; }
export function Qty({ value, onChange, label = 'Quantity' }: {
    value: number;
    onChange: (n: number) => void;
    label?: string;
}) { return <div className="quantity"><button aria-label={'Decrease ' + label} disabled={value <= 1} onClick={() => onChange(value - 1)} type="button"><Minus size={15}/></button><output aria-label={label}>{value}</output><button type="button" aria-label={'Increase ' + label} disabled={value >= 99} onClick={() => onChange(value + 1)}><Plus size={15}/></button></div>; }
export function Promo() { const { update, promo, notify } = useStore(); const [code, setCode] = useState(promo); return <form className="promo" onSubmit={e => { e.preventDefault(); if (code.trim().toUpperCase() === 'WELCOME10') {
    update({ promo: 'WELCOME10' });
    notify('10% discount applied');
}
else
    notify('Code not found. Try WELCOME10 for 10% off.'); }}><label htmlFor="promo">Have a Promo Code?</label><div><input id="promo" value={code} onChange={e => setCode(e.target.value)} placeholder="Enter promo code"/><button className="btn">Apply</button></div>{promo && <small>WELCOME10 applied <button type="button" onClick={() => { update({ promo: '' }); setCode(''); }}>Remove</button></small>}</form>; }
export function Totals({ shipping = 0, order }: {
    shipping?: number;
    order?: {
        subtotal: number;
        discount: number;
        tax: number;
        shipping: number;
        total: number;
    };
}) { const store = useStore(); const s = order || store; return <div className="totals"><div><span>Subtotal{!order ? ' (' + store.count + ' items)' : ''}</span><b>{money(s.subtotal)}</b></div>{s.discount > 0 && <div><span>Discount</span><b>−{money(s.discount)}</b></div>}<div><span>Shipping</span><b className="green">{(order ? order.shipping : shipping) === 0 ? 'Free' : money(order ? order.shipping : shipping)}</b></div><div><span>Tax (Estimated)</span><b>{money(s.tax)}</b></div><div className="total"><strong>Total</strong><strong>{money(order ? order.total : store.total + shipping)}</strong></div></div>; }
export function Empty({ title = 'Your cart is empty.' }: {
    title?: string;
}) { return <div className="empty"><ShoppingBag size={44}/><h2>{title}</h2><p>Discover something you’ll love in our collection.</p><Link className="btn" href="/shop">Continue Shopping <ArrowRight size={17}/></Link></div>; }
export function Banner({ title, description, art, children, className = '' }: {
    title: string;
    description?: string;
    art: Crop;
    children?: React.ReactNode;
    className?: string;
}) { return <section className={'banner ' + className}><div className="banner-copy"><h1>{title}</h1>{description && <p>{description}</p>}{children}</div><Picture art={art}/></section>; }
