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
  { id: 'accent-chair', name: 'Accent Chair', category: 'furnishings', price: 20, art: crop('catalog', 258, 945, 160, 98) },
  { id: 'table-lamp', name: 'Table Lamp', category: 'lighting', price: 25, art: crop('catalog', 835, 945, 160, 98) },
  { id: 'reading-lamp', name: 'Reading Lamp', category: 'lighting', price: 30, art: crop('catalog', 835, 945, 160, 98) },
  { id: 'vintage-lounge-chair', name: 'Vintage Lounge Chair', category: 'furnishings', price: 35, art: crop('catalog', 258, 945, 160, 98) },
];
export const items: Item[] = entries.map(item => ({...item, old:item.price, rating:0, reviews:"0", description:"Illustrative listing. Actual prices and availability to be supplied by the retailer."}));
export const categories = [...new Map(entries.map(item => [item.category, {id:item.category,name:item.category[0].toUpperCase()+item.category.slice(1),art:item.art}])).values()];
export const money = (n:number) => "$"+n.toFixed(2)+" demo";
export const findItem = (id:string) => items.find(item => item.id===id);
