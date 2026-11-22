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
const entries = [
    { id: 'vintage-hoodie', name: 'Vintage Hoodie', category: 'apparel', price: 35, art: crop('catalog',258,715,160,105) },
    { id: 'vintage-sneakers', name: 'Retro Sneakers', category: 'vintage', price: 40, art: crop('catalog',835,478,161,105) },
    { id: 'leather-handbag', name: 'Leather Handbag', category: 'bags', price: 30, art: crop('catalog',450,715,160,105) },
    { id: 'everyday-hoodie', name: 'Casual Sweatshirt', category: 'vintage', price: 28, art: crop('catalog',258,715,160,105) },
];
export const items: Item[] = entries.map(item => ({
    ...item, old: item.price, rating: 0, reviews: '0',
    description: 'Sample styling example. The retailer can supply actual products, availability and prices.',
}));
export const categories = [
    { id: 'apparel', name: 'Apparel', art: entries[0].art },
    { id: 'vintage', name: 'Vintage Styles', art: entries[1].art },
    { id: 'bags', name: 'Bags & Accessories', art: entries[2].art },
];
export const money = (n: number) => '$' + n.toFixed(2) + ' demo';
export const findItem = (id: string) => items.find(p => p.id === id);
