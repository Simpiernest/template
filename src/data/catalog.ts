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
  { id: 'vintage-denim-jacket', name: "Vintage denim jacket", category: "vintage apparel", price: 24, art: crop('catalog', 258, 715, 160, 104) },
  { id: 'retro-belt', name: "Retro belt", category: "retro accessories", price: 32, art: crop('catalog', 450, 715, 160, 104) },
  { id: 'collector-s-pin', name: "Collector’s pin", category: "collectibles", price: 18, art: crop('catalog', 643, 478, 160, 104) },
];
export const items: Item[] = entries.map(item => ({...item, old:item.price, rating:0, reviews:"0", description:"Illustrative listing. Actual prices and availability to be supplied by the retailer."}));
export const categories = [...new Map(entries.map(item => [item.category, {id:item.category,name:item.category[0].toUpperCase()+item.category.slice(1),art:item.art}])).values()];
export const money = (n:number) => "$"+n.toFixed(2)+" demo";
export const findItem = (id:string) => items.find(item => item.id===id);
