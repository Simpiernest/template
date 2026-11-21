'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Overlay, ScrollReveal } from './MotionUI';
import { animationConfig } from '@/data/branding';
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
export function Logo() { return <Link className="logo" href="/"><img src="/assets/logo.svg" alt="Sister's Design Boutique" style={{height:32}}/> <span className="sr-only">Sister's Design Boutique</span></Link>; }
export function Header() {
    const { count } = useStore();
    const reduced = useReducedMotion();
    const [cartOpen, setCartOpen] = useState(false);
    const closeCart = useCallback(() => setCartOpen(false), []);
    const path = usePathname();
    const router = useRouter();
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [query, setQuery] = useState('');
    const links = [['Home', '/'], ['Shop', '/shop'], ['Collections', '/shop#categories'], ['About', '/about'], ['Contact', '/contact']];
    return <header><div className="announcement"><span><Users />Personal fittings by appointment</span><i /><span><Mail />Email: sisdesing2020@gmail.com</span><i /><span className="secure"><ShieldCheck />In-house alterations</span></div><div className="nav container"><button className="icon mobile-menu" aria-label="Toggle navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button><Logo /><nav className="desktop-nav">{links.map(([name, url]) => <Link key={name} className={path === url ? 'active' : ''} href={url}>{name}</Link>)}</nav><div className="nav-icons"><button aria-label="Search products" className="icon" onClick={() => setSearch(!search)}><Search /></button><Link aria-label="Wishlist" href="/wishlist"><Heart /></Link><Link aria-label="My account" href="/account"><User /></Link><a aria-label="WhatsApp" href="https://wa.me/12149410300?text=Hello%20Sister's%20Design%20Boutique%2C%20I%20would%20like%20to%20book%20a%20fitting." target="_blank" rel="noreferrer" className="icon whatsapp">WA</a><button aria-label={`Cart, ${count} items`} onClick={() => setCartOpen(true)} className="cart-icon"><ShoppingCart /><b key={count}>{count}</b></button></div></div><AnimatePresence>{menu && <motion.nav initial={reduced || animationConfig.navigation.mobileMenu === 'none' ? false : {opacity:0,x:-24}} animate={{opacity:1,x:0}} exit={{opacity:0,x:reduced ? 0 : -24}} transition={{duration:reduced ? 0 : .3}} className="mobile-drawer">{[...links, ['My Account', '/account']].map(([name, url]) => <Link key={name} href={url} onClick={() => setMenu(false)}>{name}</Link>)}</motion.nav>}</AnimatePresence>{search && <form className="search-bar container" onSubmit={e => { e.preventDefault(); router.push('/shop?q=' + encodeURIComponent(query)); setSearch(false); }}><Search /><input aria-label="Search products" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search dresses, categories and more…" autoFocus/><button className="btn">Search</button><button className="icon" type="button" aria-label="Close search" onClick={() => setSearch(false)}><X /></button></form>}<AnimatePresence>{cartOpen && <CartDrawer close={closeCart}/>}</AnimatePresence></header>;
}
export function Newsletter({ compact = false }: {
    compact?: boolean;
}) { const [done, setDone] = useState(false); return <div className={compact ? 'newsletter-compact' : 'newsletter'}>{!compact && <div><h2>Stay in the Loop</h2><p>Book fittings, learn about new arrivals, and get boutique updates.</p></div>}<form onSubmit={e => { e.preventDefault(); setDone(true); }}><Mail /><input type="email" required aria-label="Newsletter email" placeholder="Enter your email address"/><button className="btn" aria-label="Subscribe">{compact ? <ArrowRight /> : <>Subscribe <ArrowRight size={16}/></>}</button></form>{done && <p role="status">Thanks! Your preference is saved for this demo. No email has been sent.</p>}</div>; }
export function Footer() { const [wide, setWide] = useState(true); useEffect(() => { const media = window.matchMedia('(min-width:701px)'); const sync = () => setWide(media.matches); sync(); media.addEventListener('change', sync); return () => media.removeEventListener('change', sync); }, []); const groups = [{ title: 'Shop', links: [['All Dresses', '/shop'], ...categories.slice(0, 6).map(c => [c.name, '/shop?category=' + c.id])] }, { title: 'Help', links: [['Contact Us', '/contact'], ['Book a Fitting', '/contact#message'], ['Alterations', '/shop?category=alterations']] }, { title: 'About', links: [['About Us', '/about'], ['Our Story', '/about#story'], ['Privacy Policy', '/info/privacy'], ['Terms & Conditions', '/info/terms']] }]; return <footer><div className="container footer-grid"><div className="footer-brand"><Logo /><p>Local bridal and formal dress specialists serving Dallas with personalised fittings and in-house tailoring.</p><div className="socials">{[[Instagram, 'Instagram'], [Youtube, 'YouTube'], [Facebook, 'Facebook']].map(([Icon, name]: any) => <Link key={name} href={'/info/social?channel=' + name} aria-label={name}><Icon size={20}/></Link>)}</div></div>{groups.map(g => <details key={g.title} open={wide}><summary>{g.title}<ChevronDown size={14}/></summary><div>{g.links.map(([label, url]) => <Link key={label} href={url}>{label}</Link>)}</div></details>)}<details open={wide}><summary>Contact<ChevronDown size={14}/></summary><div><p><Mail /> <a href="mailto:sisdesing2020@gmail.com">sisdesing2020@gmail.com</a></p><p><Phone /> <a href="tel:+12149410300">+1 214-941-0300</a></p><p><MapPin /> <a href="https://www.google.com/maps/search/?api=1&query=Sister's%20Design%20Boutique&query_place_id=ChIJqTphT46ZToYR-BJZKau1AZw" target="_blank" rel="noreferrer">215 W Jefferson Blvd Suite B, Dallas, TX</a></p><a className="btn" href="https://wa.me/12149410300?text=Hello%20Sister's%20Design%20Boutique%2C%20I%20have%20a%20question." target="_blank" rel="noreferrer">Message on WhatsApp</a></div></details></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Sister's Design Boutique. All rights reserved.</span><div className="payments"><b>In-store</b></div></div><div className="container footer-note"><small>Unofficial demonstration website created by Unifotec. Not affiliated with or endorsed by Sister's Design Boutique.</small></div></footer>; }
export function Benefits({ dark = false }: {
    dark?: boolean;
}) { return <div className={'benefits ' + (dark ? 'dark' : '')}>{(dark ? [[ShoppingBag, 'Why Choose Us?', 'Personal fittings & local tailoring'], [ShieldCheck, 'Careful Alterations', 'In-house tailoring for the perfect fit'], [Tag, 'Complete Packages', 'Dress & coordinated items — confirm contents in store'], [Users, 'Friendly Service', 'Warm, attentive staff'] ] : [[Truck, 'Book a Fitting', 'Message to arrange an appointment'], [RotateCcw, 'Alterations', 'In-house tailoring'], [ShieldCheck, 'Trusted Local Service', 'Serving Oak Cliff and Jefferson Blvd'], [Headphones, 'Contact', 'Email, phone or WhatsApp']]).map(([Icon, title, desc]: any) => <div key={title}><Icon /><span><strong>{title}</strong><small>{desc}</small></span></div>)}</div>; }
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
}) { return <div id="categories" className={'categories ' + (all ? 'with-all' : '')}>{all && <Link className="category active" href="/shop"><LayoutGrid /><strong>All Dresses</strong></Link>}{categories.map(c => <Link className="category" key={c.id} href={'/shop?category=' + c.id}><Picture art={c.art} label={c.name}/><strong>{c.name}</strong></Link>)}{!all && <Link className="category mobile-category" href="/shop"><LayoutGrid /><strong>All Categories</strong></Link>}</div>; }
export function ProductCard({ product: p, index = 0 }: {
    product: Item; index?: number;
}) { const { add, wish, wishlist } = useStore(); const [quick, setQuick] = useState(false); const close = useCallback(() => setQuick(false), []); return <><ScrollReveal delay={(index % 4) * animationConfig.scroll.stagger} className="product-reveal"><article className="product-card"><div className="product-art">{animationConfig.productCards.quickView && <button className="quick-view-trigger" onClick={() => setQuick(true)}>Quick View</button>}<Link href={'/product/' + p.id}><Picture art={p.art} label={p.name}/></Link><button className={'heart icon ' + (wishlist.includes(p.id) ? 'selected' : '')} aria-label={(wishlist.includes(p.id) ? 'Remove ' : 'Save ') + p.name + ' ' + (wishlist.includes(p.id) ? 'from' : 'to') + ' wishlist'} aria-pressed={wishlist.includes(p.id)} onClick={() => wish(p.id)}><Heart /></button></div><div className="product-copy"><div className="rating"><Star /><b>{p.rating}</b> <span>({p.reviews})</span></div><Link className="product-name" href={'/product/' + p.id}>{p.name}</Link><div className="price"><strong>{money(p.price)}</strong><del>{money(p.old)}</del></div><AddButton onAdd={() => add(p)}/></div></article></ScrollReveal><AnimatePresence>{quick && <QuickView product={p} close={close}/>}</AnimatePresence></>; }
export function ProductGrid({ products = items.slice(0, 4), five = false }: {
    products?: Item[];
    five?: boolean;
}) { return <div className={'product-grid ' + (five ? 'five' : '')}>{products.map((p, i) => <ProductCard key={p.id} product={p} index={i}/>)}</div>; }
export function Qty({ value, onChange, label = 'Quantity' }: {
    value: number;
    onChange: (n: number) => void;
    label?: string;
}) { return <div className="quantity"><button aria-label={'Decrease ' + label} disabled={value <= 1} onClick={() => onChange(value - 1)} type="button"><Minus size={15}/></button><output aria-label={label} aria-live="polite"><span key={value}>{value}</span></output><button type="button" aria-label={'Increase ' + label} disabled={value >= 99} onClick={() => onChange(value + 1)}><Plus size={15}/></button></div>; }
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
}) { const store = useStore(); const s = order || store; return <div className="totals"><div><span>Subtotal{!order ? ' (' + store.count + ' items)' : ''}</span><b>{money(s.subtotal)}</b></div>{s.discount > 0 && <div><span>Discount</span><b>−{money(s.discount)}</b></div>}<div><span>Shipping</span><b className="green">{(order ? order.shipping : shipping) === 0 ? 'TBD' : money(order ? order.shipping : shipping)}</b></div><div><span>Tax (Estimated)</span><b>{money(s.tax)}</b></div><div className="total"><strong>Total</strong><strong>{money(order ? order.total : store.total + shipping)}</strong></div></div>; }
export function Empty({ title = 'Your cart is empty.' }: {
    title?: string;
}) { return <div className="empty"><ShoppingBag size={44}/><h2>{title}</h2><p>Discover beautiful dresses in our collections and contact us to book a fitting.</p><Link className="btn" href="/shop">Browse Dresses <ArrowRight size={17}/></Link></div>; }
export function Banner({ title, description, art, children, className = '' }: {
    title: string;
    description?: string;
    art: Crop;
    children?: React.ReactNode;
    className?: string;
}) { return <section className={'banner ' + className}><div className="banner-copy"><h1>{title}</h1>{description && <p>{description}</p>}{children}</div><Picture art={art}/></section>; }

export function AddButton({ onAdd }: { onAdd: () => void }) {
  const [added, setAdded] = useState(false);
  useEffect(() => { if (!added) return; const timer = setTimeout(() => setAdded(false), 1600); return () => clearTimeout(timer); }, [added]);
  return <button className={'btn add ' + (added ? 'added' : '')} onClick={() => { onAdd(); setAdded(true); }}>{added ? <Check size={16}/> : <ShoppingCart size={16}/>}<span aria-live="polite">{added ? 'Added to Cart' : 'Add to Cart'}</span></button>;
}
function QuickView({ product: p, close }: { product: Item; close: () => void }) {
  const { add, wish, wishlist } = useStore();
  const [count,setCount] = useState(1), [color,setColor] = useState(p.colors?.[0] || ''), [size,setSize] = useState(p.sizes?.[0] || '');
  return <Overlay label={'Quick View: '+p.name} close={close}><button className="icon overlay-close" aria-label="Close quick view" onClick={close}><X/></button><Picture art={p.art} label={p.name}/><div><h2>{p.name}</h2><p className="stars">★ {p.rating} ({p.reviews})</p><div className="price"><strong>{money(p.price)}</strong><del>{money(p.old)}</del></div><p>{p.description || 'Beautiful selection from our boutique collection.'}</p>{p.colors && <label>Color<select value={color} onChange={e=>setColor(e.target.value)}>{p.colors.map(c=><option key={c}>{c}</option>)}</select></label>}{p.sizes && <label>Size<select value={size} onChange={e=>setSize(e.target.value)}>{p.sizes.map(s=><option key={s}>{s}</option>)}</select></label>}<Qty value={count} onChange={setCount}/><AddButton onAdd={()=>add(p,count,color,size)}/><button className="btn outline" aria-pressed={wishlist.includes(p.id)} onClick={()=>wish(p.id)}><Heart className={wishlist.includes(p.id)?'selected':''}/>{wishlist.includes(p.id)?'Saved to Wishlist':'Add to Wishlist'}</button><Link href={'/product/'+p.id} onClick={close}>View full product details →</Link></div></Overlay>;
}
function CartDrawer({ close }: { close: () => void }) {
  const store = useStore();
  return <Overlay drawer label="Shopping cart" close={close}><div className="spread"><h2>Your Cart ({store.count})</h2><button className="icon" aria-label="Close cart" onClick={close}><X/></button></div><div className="drawer-lines">{store.cart.length ? store.cart.map(line=>{ const p=items.find(p=>p.id===line.id)!; return <div className="drawer-line" key={line.key}><Link href={'/product/'+p.id} onClick={close}><Picture art={p.art} label={p.name}/></Link><div><b>{p.name}</b><small>{[line.color,line.size].filter(Boolean).join(' · ')}</small><Qty value={line.quantity} onChange={n=>store.quantity(line.key,n)}/><strong>{money(p.price*line.quantity)}</strong></div><button className="icon" aria-label={'Remove '+p.name} onClick={()=>store.quantity(line.key,0)}><X size={16}/></button></div>; }) : <p>Your cart is empty. Find something you love.</p>}</div>{!!store.cart.length && <><Totals/><a className="btn" href="https://wa.me/12149410300?text=I%20would%20like%20to%20purchase%20items%20from%20my%20cart." onClick={close} target="_blank" rel="noreferrer">Contact to Order <ArrowRight size={16}/></a></>}<Link className="btn outline" href="/cart" onClick={close}>View Cart</Link><button onClick={close}>Continue Browsing</button></Overlay>;
}
