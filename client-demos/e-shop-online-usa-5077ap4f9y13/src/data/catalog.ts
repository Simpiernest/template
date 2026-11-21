export type Crop = {
    clean?: boolean;
    file: string;
    w?: number;
    h?: number;
    x: number;
    y: number;
    width: number;
    height: number;
};
export type Item = {
    id: string;
    name: string;
    category: string;
    price: number;
    old: number;
    rating: number;
    reviews: string;
    art: Crop;
    colors?: string[];
    sizes?: string[];
    description?: string;
};
export const crop = (file: string, x: number, y: number, width: number, height: number, w = 1024, h = 1536): Crop => ({ file, x, y, width, height, w, h });
const art = (url: string, w = 600, h = 400) => ({ ...crop(url + `?w=${w}&h=${h}`, 0, 0, w, h), w, h });

// Products reflect the business brief. Prices are unknown — price fields set to 0 and money() will show "Ask for price".
export const items: Item[] = [
    { id: 'portable-electronics', name: 'Portable Electronics', category: 'electronics', price: 0, old: 0, rating: 4.5, reviews: '—', art: art('https://placehold.co/600x400?text=Portable+Electronics'), description: 'Basic consumer electronics and accessories suitable for everyday use.' },
    { id: 'casual-clothing', name: 'Casual Clothing', category: 'clothing', price: 0, old: 0, rating: 4.4, reviews: '—', art: art('https://placehold.co/600x400?text=Casual+Clothing'), description: 'Everyday apparel and casual wear.' },
    { id: 'fashion-accessories', name: 'Fashion Accessories', category: 'accessories', price: 0, old: 0, rating: 4.3, reviews: '—', art: art('https://placehold.co/600x400?text=Accessories'), description: 'Belts, hats, scarves and other small accessories.' },
    { id: 'household-essentials', name: 'Household Essentials', category: 'household-goods', price: 0, old: 0, rating: 4.2, reviews: '—', art: art('https://placehold.co/600x400?text=Household+Essentials'), description: 'Everyday household items and practical goods for home use.' },
    { id: 'gift-items', name: 'Gift Items', category: 'gifts', price: 0, old: 0, rating: 4.1, reviews: '—', art: art('https://placehold.co/600x400?text=Gifts'), description: 'Small gifts and seasonal items suitable for local shoppers.' },
    { id: 'personal-care-beauty', name: 'Personal Care & Beauty', category: 'beauty-products', price: 0, old: 0, rating: 4.2, reviews: '—', art: art('https://placehold.co/600x400?text=Beauty'), description: 'Basic beauty and personal care products.' },
    { id: 'phone-accessories', name: 'Phone Accessories', category: 'phone-accessories', price: 0, old: 0, rating: 4.3, reviews: '—', art: art('https://placehold.co/600x400?text=Phone+Accessories'), description: 'Chargers, cables and simple phone accessories.' },
    { id: 'toys-small-games', name: 'Toys & Small Games', category: 'toys', price: 0, old: 0, rating: 4.0, reviews: '—', art: art('https://placehold.co/600x400?text=Toys'), description: 'Basic toys and games for children.' }
];

export const categories = [
    { id: 'electronics', name: 'Electronics', art: crop('https://placehold.co/300x160?text=Electronics', 0, 0, 300, 160) },
    { id: 'clothing', name: 'Clothing', art: crop('https://placehold.co/300x160?text=Clothing', 0, 0, 300, 160) },
    { id: 'accessories', name: 'Accessories', art: crop('https://placehold.co/300x160?text=Accessories', 0, 0, 300, 160) },
    { id: 'household-goods', name: 'Household goods', art: crop('https://placehold.co/300x160?text=Household', 0, 0, 300, 160) },
    { id: 'gifts', name: 'Gifts', art: crop('https://placehold.co/300x160?text=Gifts', 0, 0, 300, 160) },
    { id: 'beauty-products', name: 'Beauty products', art: crop('https://placehold.co/300x160?text=Beauty', 0, 0, 300, 160) },
    { id: 'phone-accessories', name: 'Phone accessories', art: crop('https://placehold.co/300x160?text=Phone+Accessories', 0, 0, 300, 160) },
    { id: 'toys', name: 'Toys', art: crop('https://placehold.co/300x160?text=Toys', 0, 0, 300, 160) }
];

export const money = (n: number) => n === 0 ? 'Ask for price' : '$' + n.toFixed(2);
export const findItem = (id: string) => items.find(p => p.id === id);
