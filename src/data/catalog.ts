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
const samples = [
    ['japanese-vinyl-record','Japanese Vinyl Record','vinyl',28],
    ['music-cd','Music CD','cds',15],
    ['little-tokyo-souvenir','Little Tokyo Souvenir','accessories',12],
    ['gift-bag','Gift Bag','accessories',9],
] as const;
export const items: Item[] = samples.map(([id,name,category,price], index) => ({
    id,name,category,price,old:price,rating:0,reviews:'0',
    art:crop('ginza-' + index,0,0,600,400,600,400),
    description:'Sample listing with original illustrative artwork. The retailer can supply real products and prices.',
}));
export const categories = [
    { id:'vinyl', name:'Vinyl Records', art:items[0].art },
    { id:'cds', name:'Music CDs', art:items[1].art },
    { id:'accessories', name:'Gifts & Souvenirs', art:items[2].art },
];
export const money = (n: number) => '$' + n.toFixed(2) + ' demo';
export const findItem = (id: string) => items.find(p => p.id === id);
