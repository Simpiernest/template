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
const beautyArt = (i: number) => crop('beauty', 246 + (i % 4) * 192, [550,792,1019][Math.floor(i/4)], 179, [126,114,108][Math.floor(i/4)]);
const samples = [
  ['Hydrating Face Cream', 'skincare', 18],
  ['Vitamin C Face Serum', 'skincare', 22],
  ['Gentle Face Cleanser', 'skincare', 14],
  ['Night Moisturizer', 'skincare', 24],
  ['Face Oil', 'skincare', 19],
  ['Exfoliating Scrub', 'skincare', 15],
  ['Sheet Masks', 'skincare', 9],
  ['Eye Cream', 'skincare', 18],
  ['Daily Sunscreen', 'skincare', 16],
  ['Face Toner', 'skincare', 13],
  ['Face Gel', 'skincare', 12],
  ['Face Mist', 'skincare', 10],
] as const;

export const items: Item[] = [
  ...samples.map(([name, category, price], index) => ({
    id: name.toLowerCase().replace(/ /g, '-'),
    name, category, price, old: price, rating: 0, reviews: '0',
    art: beautyArt(index),
    description: 'Illustrative product. Actual selection, price and availability are supplied by the retailer.',
  })),
  { id: 'eau-de-parfum', name: 'Eau de Parfum', category: 'fragrance', price: 11, old: 11, rating: 0, reviews: '0', art: crop('catalog', 450, 478, 177, 104), description: 'Sample fragrance listing.' },
  { id: 'makeup-brushes', name: 'Makeup Brush Set', category: 'makeup', price: 16, old: 16, rating: 0, reviews: '0', art: crop('tablet', 275, 624, 256, 179, 1086, 1448), description: 'Illustrative beauty listing. Art is a category visual.' },
  { id: 'handbag', name: 'Handbag', category: 'accessories', price: 12, old: 12, rating: 0, reviews: '0', art: crop('catalog', 450, 715, 177, 104), description: 'Sample accessories listing.' },
];
export const categories = [
  { id: 'skincare', name: 'Skincare', art: beautyArt(0) },
  { id: 'fragrance', name: 'Fragrance', art: items[12].art },
  { id: 'makeup', name: 'Makeup', art: items[13].art },
  { id: 'accessories', name: 'Accessories', art: items[14].art },
];
export const money = (n: number) => '$' + n.toFixed(2) + ' demo';
export const findItem = (id: string) => items.find(p => p.id === id);
