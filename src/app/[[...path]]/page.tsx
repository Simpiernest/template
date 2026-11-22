import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footprints, Gem, Shirt } from 'lucide-react';

const maps = 'https://www.google.com/maps/search/?api=1&query=Broadway%20Bazaar%20Vintage%20Denver&query_place_id=ChIJhyXOut1_bIcRnp020Ufw0jQ';
const social = 'https://linktr.ee/broadwaybazaarvtg';
const categories = [
  { id: 'clothing', name: 'Vintage clothing', icon: Shirt, copy: 'Explore how a rotating collection of secondhand apparel could be organized online.' },
  { id: 'accessories', name: 'Accessories', icon: Gem, copy: 'A sample collection page for styling pieces and finishing touches.' },
  { id: 'footwear', name: 'Vintage footwear', icon: Footprints, copy: 'A sample collection page for vintage shoes and boots.' },
];

function Collection() {
  return <section className="collection">
    <h2>Browse the collection concept</h2>
    <p>Sample categories. Product listings and pricing are placeholders.</p>
    <div className="product-grid preview-grid">{categories.map(({ id, name, icon: Icon }) =>
      <Link className="product-card collection-card" href={'/product/' + id} key={id}>
        <span className="collection-art" aria-hidden="true"><Icon size={64} strokeWidth={1.25}/></span>
        <strong>{name}</strong>
      </Link>
    )}</div>
  </section>;
}

export default async function Page({ params }: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await params;
  const route = path.join('/');
  if (route === '') return <main>
    <section className="container hero-preview">
      <div><p className="location">200 S Broadway · Denver, Colorado</p>
      <h1>Vintage with character.</h1>
      <p>A storefront concept for Broadway Bazaar Vintage’s secondhand clothing and accessories.</p>
      <Link className="btn" href="/shop">Browse collections</Link></div>
      <div className="hero-pattern" aria-hidden="true"><Shirt size={120} strokeWidth={1}/></div>
    </section>
    <div className="container"><Collection/></div>
  </main>;
  if (route === 'shop') return <main className="container page"><h1>Vintage collections</h1><Collection/></main>;
  if (route === 'about') return <main className="container page prose-preview"><h1>About the shop</h1>
    <p>Broadway Bazaar Vintage is a women-owned vintage clothing shop on South Broadway in Denver. Local listings describe a selection of vintage clothing and accessories.</p>
    <Link className="btn" href="/contact">Find the shop</Link>
  </main>;
  if (route === 'contact') return <main className="container page prose-preview"><h1>Visit Broadway Bazaar Vintage</h1>
    <p>200 S Broadway, Denver, CO 80209</p>
    <div className="actions"><a className="btn" href={maps}>Google Maps</a><a href={social}>Shop social profiles</a></div>
  </main>;
  const item = route.startsWith('product/') && categories.find(category => route === 'product/' + category.id);
  if (!item) notFound();
  return <main className="container page">
    <Link className="breadcrumb" href="/shop">← Back to collections</Link>
    <div className="product-detail">
      <div className="collection-art" aria-hidden="true"><item.icon size={112} strokeWidth={1}/></div>
      <div className="product-info"><p>Sample collection</p><h1>{item.name}</h1><p>{item.copy}</p><p>Price and availability to be supplied by the shop.</p><Link href="/contact">Visit the shop</Link></div>
    </div>
  </main>;
}
