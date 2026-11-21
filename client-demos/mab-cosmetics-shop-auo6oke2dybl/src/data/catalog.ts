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
    price: number; // 0 means price on request in this demo
    old: number;
    rating: number;
    reviews: string;
    art: Crop;
    colors?: string[];
    sizes?: string[];
    description?: string;
};
export const crop = (file: string, x: number, y: number, width: number, height: number, w = 1024, h = 1536): Crop => ({ file, x, y, width, height, w, h });
const art = (x: number, y: number) => ({ ...crop('catalog', x, y, 177, y >= 900 ? 96 : 116), clean: true });
export const items: Item[] = [
    { id: 'foundation-face-makeup', name: 'Foundation & Face Makeup', category: 'Makeup', price: 0, old: 0, rating: 4.5, reviews: '—', art: art(258, 478), description: 'Selection of foundations, concealers, powders and face makeup products covering common skin tones.' },
    { id: 'skincare-essentials', name: 'Skincare Essentials', category: 'Skincare', price: 0, old: 0, rating: 4.6, reviews: '—', art: art(450, 478), description: 'Cleansers, moisturisers and serums for daily skincare routines.' },
    { id: 'hair-care-products', name: 'Hair Care Products', category: 'Hair care', price: 0, old: 0, rating: 4.4, reviews: '—', art: art(643, 478), description: 'Shampoos, conditioners and styling products for common haircare needs.' },
    { id: 'bath-body', name: 'Bath & Body', category: 'Bath & body', price: 0, old: 0, rating: 4.3, reviews: '—', art: art(835, 478), description: 'Body washes, lotions and personal care items.' },
    { id: 'beauty-tools', name: 'Beauty Tools', category: 'Beauty tools', price: 0, old: 0, rating: 4.2, reviews: '—', art: art(258, 715), description: 'Brushes, sponges and basic beauty tools.' },
    { id: 'natural-specialty-products', name: 'Natural & Specialty Products', category: 'Natural products', price: 0, old: 0, rating: 4.5, reviews: '—', art: art(450, 715), description: 'A selection of natural and specialty personal care items.' }
];
export const categories = [
    { id: 'Makeup', name: 'Makeup', art: crop('catalog', 151, 302, 120, 62) },
    { id: 'Skincare', name: 'Skincare', art: crop('catalog', 280, 302, 116, 62) },
    { id: 'Hair care', name: 'Hair care', art: crop('catalog', 405, 302, 116, 62) },
    { id: 'Bath & body', name: 'Bath & body', art: crop('catalog', 531, 302, 110, 62) },
    { id: 'Fragrance', name: 'Fragrance', art: crop('catalog', 650, 302, 111, 62) },
    { id: 'Beauty tools', name: 'Beauty tools', art: crop('catalog', 771, 302, 114, 62) },
    { id: 'Natural products', name: 'Natural products', art: crop('catalog', 896, 302, 110, 62) },
    { id: 'Accessories', name: 'Accessories', art: crop('catalog', 896, 302, 110, 62) }
];
export const money = (n: number) => {
    if (n === 0) return 'Ask for price';
    return '$' + n.toFixed(2);
};
export const findItem = (id: string) => items.find(p => p.id === id);
