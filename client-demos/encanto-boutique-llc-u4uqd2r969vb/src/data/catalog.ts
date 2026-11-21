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
    { id: 'eau-de-parfum', name: 'Eau de Parfum (Assorted)', category: 'Perfumes', price: 0, old: 0, rating: 4.7, reviews: '—', art: art(450, 478), sizes: ['50ml','100ml'], description: 'Assorted perfumes and signature fragrances for everyday and special occasions.' },
    { id: 'womens-fragrances', name: "Women's Fragrances (Selection)", category: "Women's fragrances", price: 0, old: 0, rating: 4.6, reviews: '—', art: art(643, 478), description: 'Selection of women\'s scents across floral, oriental and fresh fragrance families.' },
    { id: 'mens-fragrances', name: "Men's Fragrances (Selection)", category: "Men's fragrances", price: 0, old: 0, rating: 4.6, reviews: '—', art: art(258, 478), description: 'Masculine scents including woody, spicy and aquatic options.' },
    { id: 'designer-inspired', name: 'Designer-inspired Perfumes', category: 'Designer-inspired perfumes', price: 0, old: 0, rating: 4.5, reviews: '—', art: art(835, 478), description: 'Designer-inspired and popular fragrance alternatives at value prices.' },
    { id: 'gift-sets', name: 'Perfume Gift Sets', category: 'Perfume gift sets', price: 0, old: 0, rating: 4.8, reviews: '—', art: art(450, 715), description: 'Curated gift sets for special occasions and holidays.' },
    { id: 'samplers', name: 'Fragrance Samplers', category: 'Fragrance samplers', price: 0, old: 0, rating: 4.7, reviews: '—', art: art(643, 715), description: 'Sample vials and testers to try multiple scents before buying.' },
    { id: 'wholesale-clothing', name: 'Wholesale Clothing (Catalogue)', category: 'Wholesale clothing', price: 0, old: 0, rating: 4.4, reviews: '—', art: art(258, 715), description: 'Bulk clothing options for retailers and resellers. Contact us for catalogue and pricing.' },
    { id: 'accessories', name: 'Accessories & Gift Items', category: 'Accessories', price: 0, old: 0, rating: 4.5, reviews: '—', art: art(835, 715), description: 'Complementary accessories and gift items to pair with fragrances.' },
];
export const categories = [
    { id: 'Perfumes', name: 'Perfumes', art: crop('catalog', 151, 302, 120, 62) },
    { id: "Women's fragrances", name: "Women's fragrances", art: crop('catalog', 280, 302, 116, 62) },
    { id: "Men's fragrances", name: "Men's fragrances", art: crop('catalog', 405, 302, 116, 62) },
    { id: 'Designer-inspired perfumes', name: 'Designer-inspired perfumes', art: crop('catalog', 531, 302, 110, 62) },
    { id: 'Perfume gift sets', name: 'Perfume gift sets', art: crop('catalog', 650, 302, 111, 62) },
    { id: 'Fragrance samplers', name: 'Fragrance samplers', art: crop('catalog', 771, 302, 114, 62) },
    { id: 'Wholesale clothing', name: 'Wholesale clothing', art: crop('catalog', 896, 302, 110, 62) },
    { id: 'Accessories', name: 'Accessories', art: crop('catalog', 920, 302, 110, 62) },
];
export const money = (n: number) => {
    // Per project brief: show prices as "Ask for price" unless known
    if (!n || n <= 0) return 'Ask for price';
    return '$' + n.toFixed(2);
};
export const findItem = (id: string) => items.find(p => p.id === id);
