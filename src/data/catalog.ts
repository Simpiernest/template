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
const art = (x: number, y: number) => ({ ...crop('catalog', x, y, 177, y >= 900 ? 96 : 116), clean: true });
export const items: Item[] = [
    { id: 'wireless-headphones', name: 'Wireless Headphones', category: 'electronics', price: 59.99, old: 79.99, rating: 4.8, reviews: '1.2k', art: art(258, 478), colors: ['Black', 'Navy', 'Pink', 'Silver'], description: 'Experience rich, immersive sound with noise cancellation, all-day comfort, and long-lasting battery life.' },
    { id: 'eau-de-parfum', name: 'Eau de Parfum 100ml', category: 'beauty', price: 39.99, old: 49.99, rating: 4.7, reviews: '934', art: art(450, 478), sizes: ['50ml', '100ml'] },
    { id: 'smart-watch-series-9', name: 'Smart Watch Series 9', category: 'electronics', price: 199.99, old: 249.99, rating: 4.9, reviews: '2.1k', art: art(643, 478), colors: ['Black', 'Silver'] },
    { id: 'classic-sneakers', name: 'Classic Sneakers', category: 'fashion', price: 69.99, old: 89.99, rating: 4.8, reviews: '1.4k', art: art(835, 478), colors: ['White', 'Black'], sizes: ['39', '40', '41', '42', '43', '44'] },
    { id: 'essential-hoodie', name: 'Essential Hoodie', category: 'fashion', price: 39.99, old: 59.99, rating: 4.7, reviews: '626', art: art(258, 715), sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 'leather-handbag', name: 'Leather Handbag', category: 'accessories', price: 89.99, old: 119.99, rating: 4.8, reviews: '312', art: art(450, 715) },
    { id: 'skincare-set', name: 'Skincare Set (3 Pcs)', category: 'beauty', price: 49.99, old: 69.99, rating: 4.9, reviews: '740', art: art(643, 715) },
    { id: 'dumbbell-set-10kg', name: 'Dumbbell Set (10kg)', category: 'sports', price: 29.99, old: 39.99, rating: 4.6, reviews: '421', art: art(835, 715) },
    { id: 'modern-accent-chair', name: 'Modern Accent Chair', category: 'home', price: 149.99, old: 199.99, rating: 4.9, reviews: '284', art: art(258, 945) },
    { id: 'plush-teddy-bear', name: 'Plush Teddy Bear', category: 'toys', price: 24.99, old: 34.99, rating: 4.8, reviews: '638', art: art(450, 945) },
    { id: 'premium-headphones', name: 'Premium Headphones', category: 'electronics', price: 89.99, old: 119.99, rating: 4.7, reviews: '513', art: art(643, 945) },
    { id: 'table-lamp', name: 'Table Lamp', category: 'home', price: 34.99, old: 49.99, rating: 4.8, reviews: '295', art: art(835, 945) },
    { id: 'renewing-face-serum', name: 'Renewing Face Serum', category: 'skincare', price: 39.99, old: 49.99, rating: 4.8, reviews: '1.2k', art: crop('serum', 127, 151, 394, 428), sizes: ['30 ml', '50 ml', '100 ml'], description: 'A potent, natural serum infused with Vitamin C and Hyaluronic Acid to brighten, hydrate, and visibly rejuvenate your skin.' },
    ...['Hydrating Face Cream', 'Vitamin C Face Serum', 'Gentle Cleanser', 'Night Repair Cream', 'Face Nourishing Oil', 'Exfoliating Face Scrub', 'Hydrating Sheet Mask (5 Pack)', 'Revitalizing Eye Cream', 'Daily Sunscreen SPF 50', 'Soothing Toner', 'Purifying Clay Mask', 'Hydrating Face Mist'].map((name, i) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'), name, category: 'skincare', price: [39.99, 29.99, 19.99, 44.99, 34.99, 24.99, 14.99, 29.99, 22.99, 18.99, 27.99, 16.99][i], old: [49.99, 39.99, 24.99, 59.99, 44.99, 29.99, 19.99, 36.99, 29.99, 24.99, 34.99, 21.99][i], rating: [4.8, 4.7, 4.9, 4.6][i % 4], reviews: ['1.2k', '934', '2.1k', '720'][i % 4], art: { ...crop('beauty', 246 + (i % 4) * 192, [550,792,1019][Math.floor(i/4)], 179, [126,114,108][Math.floor(i/4)]), clean: true } })),
];
export const categories = [
    { id: 'fashion', name: 'Fashion', art: crop('catalog', 151, 302, 120, 62) },
    { id: 'beauty', name: 'Beauty', art: crop('catalog', 280, 302, 116, 62) },
    { id: 'electronics', name: 'Electronics', art: crop('catalog', 405, 302, 116, 62) },
    { id: 'home', name: 'Home & Living', art: crop('catalog', 531, 302, 110, 62) },
    { id: 'accessories', name: 'Accessories', art: crop('catalog', 650, 302, 111, 62) },
    { id: 'sports', name: 'Sports & Outdoors', art: crop('catalog', 771, 302, 114, 62) },
    { id: 'toys', name: 'Toys & Kids', art: crop('catalog', 896, 302, 110, 62) },
];
export const money = (n: number) => '$' + n.toFixed(2);
export const findItem = (id: string) => items.find(p => p.id === id);
