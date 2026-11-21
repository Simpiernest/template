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
    { id: 'bridal-dresses', name: 'Bridal dresses', category: 'bridal', price: 0, old: 0, rating: 4.9, reviews: '—', art: art(258, 478), description: 'Selection of bridal gowns available for fittings and purchase; in-store consultation and package options available.' },
    { id: 'quinceanera-dresses', name: 'Quinceañera dresses', category: 'quinceanera', price: 0, old: 0, rating: 4.8, reviews: '—', art: art(450, 478), description: 'Quinceañera gowns with sizing and styling assistance; request a full package quote in-store.' },
    { id: 'formal-dresses', name: 'Formal dresses', category: 'formal-dresses', price: 0, old: 0, rating: 4.7, reviews: '—', art: art(643, 478), description: 'Evening and prom dresses for formal occasions, with on-site help to choose styles and fit.' },
    { id: 'complete-dress-packages', name: 'Complete dress packages', category: 'packages', price: 0, old: 0, rating: 4.6, reviews: '—', art: art(835, 478), description: 'All-in-one dress packages (dress plus coordinated items) offered in-store; confirm package contents before purchase.' },
    { id: 'alterations', name: 'Alterations and tailoring', category: 'alterations', price: 0, old: 0, rating: 4.9, reviews: '—', art: art(258, 715), description: 'In-house alterations to adjust fit and finish for purchased dresses.' },
    { id: 'accessories', name: 'Accessories', category: 'accessories', price: 0, old: 0, rating: 4.5, reviews: '—', art: art(450, 715), description: 'Complementary accessories to complete bridal and formal looks.' },
    { id: 'floral-decorations', name: 'Floral decorations', category: 'floral-decorations', price: 0, old: 0, rating: 4.4, reviews: '—', art: art(643, 715), description: 'Coordinated floral pieces offered as part of packages or add-ons; confirm colour and style during purchase.' }
];
export const categories = [
    { id: 'bridal', name: 'Bridal', art: crop('catalog', 151, 302, 120, 62) },
    { id: 'quinceanera', name: 'Quinceañera', art: crop('catalog', 280, 302, 116, 62) },
    { id: 'formal-dresses', name: 'Formal Dresses', art: crop('catalog', 405, 302, 116, 62) },
    { id: 'packages', name: 'Packages', art: crop('catalog', 531, 302, 110, 62) },
    { id: 'alterations', name: 'Alterations', art: crop('catalog', 650, 302, 111, 62) },
    { id: 'accessories', name: 'Accessories', art: crop('catalog', 771, 302, 114, 62) },
    { id: 'floral-decorations', name: 'Floral Decorations', art: crop('catalog', 896, 302, 110, 62) },
];
export const money = (n: number) => {
    if (n === 0) return 'Ask for price';
    return '$' + n.toFixed(2);
};
export const findItem = (id: string) => items.find(p => p.id === id);
