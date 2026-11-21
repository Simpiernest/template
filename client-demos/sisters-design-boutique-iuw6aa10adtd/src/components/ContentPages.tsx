'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, Plus, Minus, ShieldCheck, Tag, Headphones, ShoppingBag, Package, Heart, Settings, Home, User, CreditCard, Bell, LogOut, Pencil, Trash2, X, Check } from 'lucide-react';
import { crop, findItem, items, money } from '@/data/catalog';
import { useStore } from '@/context/Store';
import { Picture, Newsletter, Benefits, Breadcrumb, SectionTitle, Categories, ProductGrid, Empty, Banner } from './StoreUI';
const model = crop('about', 545, 98, 465, 277);

export function AboutPage() {
  return <div className="container page about-page">
    <Banner title={"Beautiful dresses and personalised fittings in Dallas"} description={"Sister's Design Boutique offers bridal, quinceañera and formal dress services with patient, one-on-one attention, complete packages and in-house alterations. Visit us for fittings, customised options and friendly advice."} art={model}>
      <Breadcrumb name="About Us"/>
      <span className="pill">Sister's Design Boutique</span>
      <div className="actions">
        <Link className="btn" href="/shop">View Our Collections <ArrowRight size={17}/></Link>
        <a className="btn outline" href="#story">Our Story</a>
      </div>
    </Banner>
    <section id="story" className="story">
      <Picture art={crop('about', 29, 394, 463, 205)} label="Boutique fittings"/>
      <div>
        <span className="pill">Our Story</span>
        <h2>Personal, Local Dress Specialists in Dallas</h2>
        <p>Sister's Design Boutique is a neighbourhood dress store serving brides, quinceañera families and clients seeking formal wear in the Oak Cliff / Jefferson Blvd area of Dallas.</p>
        <p>We focus on warm, attentive service — one-on-one fittings by appointment, in-house alterations, and complete dress packages. Confirm package contents and colour choices in-store before purchase.</p>
      </div>
    </section>
    <div className="mission-grid">
      <div>
        <div>
          <span className="pill pink">Our Approach</span>
          <h2>Warm & Attentive</h2>
          <p>We provide patient, personalised fittings and styling guidance so you can feel confident on your special day.</p>
        </div>
        <Picture art={crop('about', 291, 620, 212, 182)}/>
      </div>
      <div>
        <div>
          <span className="pill">Value & Care</span>
          <h2>Reasonable Pricing</h2>
          <p>We offer a range of packages and alterations with transparent guidance — please request a quote for pricing details.</p>
        </div>
        <Picture art={crop('about', 820, 620, 190, 182)}/>
      </div>
    </div>
    <h2>What We Offer</h2>
    <div className="values">{[[ShieldCheck, 'Personal Fittings', 'Individual appointments for accurate measurements and styling.'], [Tag, 'Complete Packages', 'Coordinated dress and accessories—confirm contents before purchase.'], [Headphones, 'Alterations', 'In-house tailoring to perfect the fit.'], [ShieldCheck, 'Local Service', 'Serving Dallas with friendly, local expertise.']].map(([Icon, title, desc]: any) => <div key={title}><Icon /><span><b>{title}</b><small>{desc}</small></span></div>)}</div>
    <SectionTitle label="View All Categories">Shop by Category</SectionTitle>
    <Categories />
    <Newsletter />
    <Benefits dark/>
  </div>;
}

const faqs = [['How can I book a fitting?', "Call, email, or message us on WhatsApp to book a fitting appointment."], ['Do you offer alterations?', 'Yes — we provide in-house alterations for dresses purchased at the boutique.'], ['Can I request a package quote?', 'Please contact us to request a quote. Package contents should be confirmed in person before purchase.']];

export function ContactPage() {
  const [faq, setFaq] = useState(-1);
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState('');
  return <div className="contact-page"><div className="container page">
    <Banner title="Contact & Bookings" description="Message us to book a fitting, request a package quote, or inquire about alterations." art={model}>
      <Breadcrumb name="Contact"/>
      <div className="actions">
        <a className="btn" href="#message">Send a message <ArrowRight size={16}/></a>
        <a className="btn outline" href="#faq">View FAQs</a>
      </div>
    </Banner>

    <Benefits />

    <div className="contact-layout">
      <section className="panel message-panel" id="message">
        <h2>Send Us a Message</h2>
        <p>If you'd like to book a fitting, request a quote, or ask about alterations, use the form below. This is a frontend demonstration — the form does not send data.</p>
        {sent ? <div className="form-success" role="status"><Check /><h3>Message prepared</h3><p>This is a frontend demo, so your message has not been sent. Please email us or message via WhatsApp.</p><button className="btn" onClick={() => setSent(false)}>Write Another Message</button></div> : <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <div className="field-grid">{[['First Name', 'given-name', 'text'], ['Last Name', 'family-name', 'text'], ['Email Address', 'email', 'email'], ['Phone Number', 'tel', 'tel']].map(([label, name, type]) => <label className="field" key={name}>{label}{name !== 'tel' && <span className="required"> *</span>}<input required={name !== 'tel'} name={name} type={type} placeholder={'Enter your ' + label.toLowerCase()}/></label>)}</div>
          <label className="field">Subject <span className="required">*</span>
            <select required defaultValue="">
              <option disabled value="">Select a subject</option>
              {[ 'Book a fitting', 'Package quote', 'Alterations', 'Other' ].map(s => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label className="field">Message <span className="required">*</span>
            <textarea required maxLength={500} value={message} onChange={e => setMessage(e.target.value)} placeholder="Write your message here..." rows={5}/>
            <small className="counter">{message.length} / 500</small>
          </label>
          <button className="btn wide"><Send size={18}/>Prepare Message</button>
        </form>}
      </section>

      <aside>
        <div className="support-banner">
          <div>
            <span className="pill">Visit Us</span>
            <h2>Book an In-Store Fitting</h2>
            <p>Fittings are by appointment. Message us on WhatsApp to arrange a time.</p>
            <a className="btn" href="https://wa.me/12149410300?text=Hello%20Sisters%20Design%20Boutique%2C%20I%20would%20like%20to%20book%20a%20fitting." target="_blank" rel="noreferrer">Message on WhatsApp</a>
          </div>
          <Picture art={crop('contact', 797, 397, 191, 164)}/>
        </div>

        <div className="panel contact-details">{[[Mail, 'Email', <><a href="mailto:sisdesing2020@gmail.com">sisdesing2020@gmail.com</a><small>We typically reply within a few days.</small></>], [Phone, 'Phone', <><a href="tel:+12149410300">+1 214-941-0300</a><small>Call or message to book an appointment.</small></>], [MapPin, 'Location', <><a href="https://www.google.com/maps/search/?api=1&query=Sister's%20Design%20Boutique&query_place_id=ChIJqTphT46ZToYR-BJZKau1AZw" target="_blank" rel="noreferrer">215 W Jefferson Blvd Suite B, Dallas, TX 75208</a></>], [Clock, 'Opening Hours', <>{['Monday: 11 AM to 7 PM','Tuesday: 11 AM to 7 PM','Wednesday: 11 AM to 7 PM','Thursday: 11 AM to 7 PM','Friday: 11 AM to 7 PM','Saturday: 11 AM to 6 PM','Sunday: 11 AM to 5 PM'].map(d => <div key={d}>{d}</div>)}</>]].map(([Icon, title, content]: any) => <div key={title}><Icon /><span><h3>{title}</h3>{content}</span></div>)}</div>
      </aside>
    </div>

    <section id="faq">
      <SectionTitle href="#faq" label="View All FAQs">Frequently Asked Questions</SectionTitle>
      <div className="faq-layout">
        <Picture art={crop('contact', 36, 931, 345, 178)} label="Fittings and dresses"/>
        <div>{faqs.map(([q, a], i) => <div className="faq" key={q}><button aria-expanded={faq === i} onClick={() => setFaq(faq === i ? -1 : i)}>{q}{faq === i ? <Minus size={18}/> : <Plus size={18}/>}</button>{faq === i && <p>{a}</p>}</div>)}</div>
      </div>
    </section>

    <Newsletter />
    <Benefits />
  </div></div>;
}

// AccountPage and InfoPage are kept mostly as-is but with a localised default profile

type Address = {
    id: string;
    name: string;
    address: string;
    phone: string;
};
const defaultAddresses: Address[] = [{ id: 'studio', name: 'Studio', address: '215 W Jefferson Blvd Suite B\nDallas, TX 75208', phone: '+1 214-941-0300' }];

export function AccountPage() {
    const params = useSearchParams();
    const { user, update, wishlist, wish, add, orders, notify } = useStore();
    const [tab, setTab] = useState(params.get('tab') || 'dashboard');
    const [addresses, setAddresses] = useState(defaultAddresses);
    const [prefs, setPrefs] = useState([true, false, true]);
    const [loaded, setLoaded] = useState(false);
    const [edit, setEdit] = useState<Address | null>(null);
    const [orderId, setOrderId] = useState('');
    const [signedOut, setSignedOut] = useState(false);
    useEffect(() => { setTab(params.get('tab') || 'dashboard'); }, [params]);
    useEffect(() => { try {
        const saved = JSON.parse(localStorage.getItem('shopfinity-account') || 'null');
        if (saved) {
            setAddresses(saved.addresses || defaultAddresses);
            setPrefs(saved.prefs || [true, false, true]);
        }
    }
    catch { } setLoaded(true); }, []);
    useEffect(() => { if (loaded) {
        try {
            localStorage.setItem('shopfinity-account', JSON.stringify({ addresses, prefs }));
        }
        catch { }
    } }, [addresses, prefs, loaded]);
    const visible = (id: string) => tab === 'dashboard' || tab === id;
    const tabs = [['dashboard', 'Dashboard', Home], ['orders', 'My Orders', Package], ['wishlist', 'Wishlist', Heart], ['addresses', 'Saved Addresses', MapPin], ['details', 'Account Details', User], ['settings', 'Account Settings', Settings], ['payments', 'Payment Methods', CreditCard], ['notifications', 'Notifications', Bell]] as const;
    if (signedOut)
        return <div className="container page"><div className="empty"><h2>You’re signed out of this demo</h2><p>Your shopping preferences remain saved in this browser.</p><button className="btn" onClick={() => setSignedOut(false)}>Return to Demo Account</button></div></div>;
    return <div className="container page account-page"><Breadcrumb name="My Account"/><section className="account-banner"><div className="profile-avatar"><Picture art={crop('account', 77, 156, 103, 103, 1199, 1312)} label="Profile avatar"/></div><div><h1>Welcome back, {user.name.split(' ')[0]}! 👋</h1><p>Manage your bookings, saved dresses, wishlist, and account preferences.</p></div><Picture className="account-art" art={crop('account', 804, 142, 375, 129, 1199, 1312)}/></section><div className="account-layout"><aside className="panel account-nav"><h3>My Account</h3>{tabs.map(([id, label, Icon]) => <button key={id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}><Icon size={20}/>{label}</button>)}<button onClick={() => setSignedOut(true)}><LogOut size={20}/>Log Out</button></aside><div className="account-main">{tab === 'dashboard' && <div className="account-stats">{[[Package, orders.length, 'Total Orders', 'View Orders', 'orders'], [Heart, wishlist.length, 'Wishlist Items', 'View Wishlist', 'wishlist'], [MapPin, addresses.length, 'Saved Addresses', 'Manage Addresses', 'addresses'], [Settings, 'Account', 'Profile & Settings', 'Update Details', 'details']].map(([Icon, count, label, action, id]: any) => <button key={id} onClick={() => setTab(id)}><Icon /><div><strong>{count}</strong><span>{label}</span><b>{action} →</b></div></button>)}</div>}<div className="dashboard-panels">{visible('orders') && <section className="panel recent-orders"><SectionTitle href="/account?tab=orders" label="View All Orders">Recent Orders</SectionTitle>{orders.length ? <div className="table-scroll"><table><thead><tr>{['Order #', 'Date', 'Items', 'Total', 'Status', 'Action'].map(t => <th key={t}>{t}</th>)}</tr></thead><tbody>{orders.slice(0, tab === 'dashboard' ? 3 : orders.length).map(o => <tr key={o.id}><td><b>#{o.id}</b></td><td>{new Date(o.date).toLocaleDateString()}</td><td>{o.lines.reduce((n, l) => n + l.quantity, 0)} items</td><td>{money(o.total)}</td><td><span className="pill">Confirmed</span></td><td><button className="small-outline" onClick={() => setOrderId(orderId === o.id ? '' : o.id)}>View Details</button></td></tr>)}</tbody></table></div> : <div className="account-empty"><Package /><p>You haven’t placed a demo order yet.</p><Link href="/shop">Start exploring our dresses →</Link></div>}{orderId && orders.filter(o => o.id === orderId).map(o => <div key={o.id} className="order-expanded"><h3>Order #{o.id}</h3><p>Confirmed · Demo order saved in this browser</p>{o.lines.map(l => <p key={l.key}>{findItem(l.id)?.name} × {l.quantity}</p>)}<p className="pre-line">{o.address}</p><p>{o.payment}</p><b>Total: {money(o.total)}</b></div>)}</section>}{visible('wishlist') && <section className="panel account-wishlist"><SectionTitle href="/wishlist" label="View All">Wishlist ({wishlist.length})</SectionTitle>{!wishlist.length && <p>Your wishlist is empty. Save a product with the heart button.</p>}{wishlist.slice(0, tab === 'dashboard' ? 3 : wishlist.length).map(id => { const p = findItem(id); return p && <div className="wishlist-line" key={id}><Link href={'/product/' + id}><Picture art={p.art} label={p.name}/></Link><div><Link href={'/product/' + id}><b>{p.name}</b></Link><div className="rating"><span className="stars">★</span> {p.rating} ({p.reviews})</div><strong>{money(p.price)}</strong> <del>{money(p.old)}</del></div><button className="btn" aria-label={'Add ' + p.name + ' to cart'} onClick={() => add(p)}><ShoppingBag size={16}/></button><button className="icon selected" aria-label={'Remove ' + p.name + ' from wishlist'} onClick={() => wish(id)}><Heart size={18}/></button></div>; })}</section>}{visible('addresses') && <section className="panel saved-addresses"><div className="section-title"><h2>Saved Addresses ({addresses.length})</h2><button onClick={() => setEdit({ id: Date.now().toString(), name: '', address: '', phone: '' })}>Add Address +</button></div><div className="address-pair">{addresses.map(a => <div className="address-card" key={a.id}><Home /><div><b>{a.name}</b><p className="pre-line">{a.address}</p><small>{a.phone}</small></div><button className="icon" aria-label={'Edit ' + a.name + ' address'} onClick={() => setEdit(a)}><Pencil size={15}/></button><button className="icon danger" aria-label={'Delete ' + a.name + ' address'} onClick={() => setAddresses(addresses.filter(x => x.id !== a.id))}><Trash2 size={15}/></button></div>)}</div></section>}{visible('details') && <section className="panel account-details"><h2>Account Details</h2><p>Update your personal information.</p><form key={user.email} onSubmit={e => { e.preventDefault(); const f = new FormData(e.currentTarget); update({ user: { name: String(f.get('name')), email: String(f.get('email')), phone: String(f.get('phone')) } }); notify('Account details saved in this browser'); }}>{[['Full Name', 'name', user.name, 'text'], ['Email Address', 'email', user.email, 'email'], ['Phone Number', 'phone', user.phone, 'tel']].map(([label, name, value, type]) => <label className="field" key={name}>{label}<input name={name} type={type} defaultValue={value} required/></label>)}<button className="btn">Save Changes</button></form></section>}{(visible('settings') || tab === 'notifications') && <section className="panel account-settings"><h2>{tab === 'notifications' ? 'Notifications' : 'Account Settings'}</h2><p>Manage your account preferences.</p>{['Email Notifications', 'SMS Notifications', 'Two-Factor Authentication'].map((name, i) => <div className="setting" key={name}><span><b>{name}</b><small>{['Get appointment updates and offers.', 'Receive booking confirmations via text.', 'Demo preference only; authentication is not connected.'][i]}</small></span><button role="switch" aria-checked={prefs[i]} aria-label={name} className={'switch ' + (prefs[i] ? 'on' : '')} onClick={() => setPrefs(prefs.map((p, j) => j === i ? !p : p))}><span /></button></div>)}</section>}{tab === 'payments' && <section className="panel"><h2>Payment Methods</h2><p>In-person payments and quotes are handled in-store. This demo does not process real payments.</p><Link className="btn outline" href="/info/payments">Learn more</Link></section>}</div></div></div><Benefits dark/>{edit && <div className="modal-backdrop"><form className="panel address-modal" role="dialog" aria-modal="true" aria-label="Edit address" onSubmit={e => { e.preventDefault(); setAddresses(a => a.some(x => x.id === edit.id) ? a.map(x => x.id === edit.id ? edit : x) : [...a, edit]); setEdit(null); notify('Address saved'); }}><div className="spread"><h2>Save Address</h2><button className="icon" type="button" aria-label="Close address editor" onClick={() => setEdit(null)}><X /></button></div><label className="field">Label<input autoFocus required value={edit.name} onChange={e => setEdit({ ...edit, name: e.target.value })}/></label><label className="field">Address<textarea required rows={3} value={edit.address} onChange={e => setEdit({ ...edit, address: e.target.value })}/></label><label className="field">Phone<input type="tel" required value={edit.phone} onChange={e => setEdit({ ...edit, phone: e.target.value })}/></label><button className="btn">Save Address</button></form></div>}</div>;
}

const info: Record<string, [
    string,
    string[]
]> = { shipping: ['Shipping & Returns', ['This boutique provides in-person sales and alterations. No online shipping information is provided in this demo.']], payments: ['Payment Methods', ['Payments are handled in-store. This demo does not process payments.']], warranty: ['Warranty', ['Contact the boutique with your purchase details for any questions about service or alterations.']], careers: ['Careers at Sister\'s Design Boutique', ['Opportunities and hiring information are not listed in this demo. Contact the shop for enquiries.']], press: ['Press & Media', ['For press inquiries, contact the boutique directly via email.']], privacy: ['Privacy Policy', ['This frontend demo stores preferences locally in your browser. No account backend is connected. Form submissions are not sent.']], terms: ['Terms & Conditions', ['This is an unofficial demonstration website. Products, pricing, and orders shown are examples.']], social: ['Find Sister\'s Design Boutique', ['Official social profiles have not been provided for this demo.']], 'account-security': ['Account Security', ['This frontend demo has no password or authentication backend. Account details are saved only in this browser.']] };

export function InfoPage({ slug }: {
    slug: string;
}) { const content = info[slug] || ['Page not found', ['Explore our products or contact us for help.']]; return <div className="container page info-page"><Breadcrumb name={content[0]}/><div className="panel"><h1>{content[0]}</h1>{content[1].map(p => <p key={p}>{p}</p>)}<Link className="btn" href="/contact">Contact Us <ArrowRight size={17}/></Link></div></div>; }
