export type Crop = { clean?: boolean; file: string; w?: number; h?: number; x: number; y: number; width: number; height: number; };
export type Item = { id: string; name: string; category: string; price: number; old: number; rating: number; reviews: string; art: Crop; colors?: string[]; sizes?: string[]; description?: string; };
export const crop = (file: string, x: number, y: number, width: number, height: number, w = 1024, h = 1536): Crop => ({ file, x, y, width, height, w, h });
const art = (x: number, y: number) => ({ ...crop('catalog', x, y, 177, y >= 900 ? 96 : 116), clean: true });

// Products: prices set to 0 indicate "Ask for price" in this demo
export const items: Item[] = [
    { id: 'womens-dresses', name: "Women's Dresses", category: 'dresses', price: 0, old: 0, rating: 0, reviews: '', art: art(258, 478), description: 'A selection of casual and dressy women\'s dresses in multiple styles. Ask the boutique for sizes and availability.' },
    { id: 'casual-tops', name: 'Casual Tops', category: 'tops', price: 0, old: 0, rating: 0, reviews: '', art: art(450, 478), description: 'Everyday tops and blouses suitable for casual and work wardrobes. Message us on WhatsApp to check stock.' },
    { id: 'denim-pieces', name: 'Denim', category: 'denim', price: 0, old: 0, rating: 0, reviews: '', art: art(643, 478), description: 'Jeans and denim pieces in classic and contemporary cuts. Ask for fitting availability.' },
    { id: 'outerwear-collection', name: 'Outerwear', category: 'outerwear', price: 0, old: 0, rating: 0, reviews: '', art: art(835, 478), description: 'Light jackets and coats for season-to-season layering. Inquire for colours and sizes.' },
    { id: 'accessories-collection', name: 'Accessories', category: 'accessories', price: 0, old: 0, rating: 0, reviews: '', art: art(258, 715), description: 'Bags, scarves and other accessories to complete outfits. Contact the boutique for details.' },
    { id: 'formalwear-collection', name: 'Formalwear', category: 'formalwear', price: 0, old: 0, rating: 0, reviews: '', art: art(450, 715), description: 'Select formal pieces suitable for events and special occasions. Appointment recommended for fittings.' }
];

export const categories = [
    { id: 'dresses', name: 'Dresses', art: crop('catalog', 151, 302, 120, 62) },
    { id: 'tops', name: 'Tops', art: crop('catalog', 280, 302, 116, 62) },
    { id: 'denim', name: 'Denim', art: crop('catalog', 405, 302, 116, 62) },
    { id: 'outerwear', name: 'Outerwear', art: crop('catalog', 531, 302, 110, 62) },
    { id: 'accessories', name: 'Accessories', art: crop('catalog', 650, 302, 111, 62) },
    { id: 'formalwear', name: 'Formalwear', art: crop('catalog', 771, 302, 114, 62) }
];

export const money = (n: number) => {
    // Prices of 0 are shown as "Ask for price" per brief rules
    if (n === 0) return 'Ask for price';
    return '$' + n.toFixed(2);
};
export const findItem = (id: string) => items.find(p => p.id === id);
