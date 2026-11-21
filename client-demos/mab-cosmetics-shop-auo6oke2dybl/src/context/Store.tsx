'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Item, findItem } from '@/data/catalog';
export type Line = {
    key: string;
    id: string;
    quantity: number;
    color: string;
    size: string;
};
export type Order = {
    id: string;
    date: string;
    lines: Line[];
    subtotal: number;
    discount: number;
    tax: number;
    shipping: number;
    total: number;
    email: string;
    address: string;
    payment: string;
};
const initial: Line[] = [];
type State = {
    cart: Line[];
    wishlist: string[];
    orders: Order[];
    user: {
        name: string;
        email: string;
        phone: string;
    };
    promo: string;
};
const defaults: State = { cart: initial, wishlist: [], orders: [], user: { name: 'Local Customer', email: '', phone: '+233208820928' }, promo: '' };
const Context = createContext<any>(null);
export function StoreProvider({ children }: {
    children: React.ReactNode;
}) {
    const [state, setState] = useState<State>(defaults);
    const [ready, setReady] = useState(false);
    const [toast, setToast] = useState('');
    useEffect(() => { try {
        const current = localStorage.getItem('mab-store-v1');
        const saved = JSON.parse(current || 'null');
        if (saved) {
            setState({ ...defaults, ...saved, cart: (saved.cart || []).filter((l: Line) => findItem(l.id) && Number.isInteger(l.quantity) && l.quantity > 0) });
        }
    }
    catch { } setReady(true); }, []);
    useEffect(() => { if (ready) {
        try {
            localStorage.setItem('mab-store-v1', JSON.stringify(state));
        }
        catch { }
    } }, [state, ready]);
    useEffect(() => { if (!toast) return; const timer = setTimeout(() => setToast(''), 3200); return () => clearTimeout(timer); }, [toast]);
    const update = (patch: Partial<State>) => setState(s => ({ ...s, ...patch }));
    const add = (p: Item, quantity = 1, color = p.colors?.[0] || '', size = p.sizes?.[0] || '') => { const key = [p.id, color, size].join('|'); setState(s => { const found = s.cart.find(l => l.id === p.id && l.color === color && l.size === size); return { ...s, cart: found ? s.cart.map(l => l.key === found.key ? { ...l, quantity: Math.min(99, l.quantity + quantity) } : l) : [...s.cart, { key, id: p.id, quantity, color, size }] }; }); setToast(p.name + ' added to cart'); };
    const quantity = (key: string, n: number) => setState(s => ({ ...s, cart: n <= 0 ? s.cart.filter(l => l.key !== key) : s.cart.map(l => l.key === key ? { ...l, quantity: Math.min(99, Math.floor(n)) } : l) }));
    const wish = (id: string) => setState(s => ({ ...s, wishlist: s.wishlist.includes(id) ? s.wishlist.filter(x => x !== id) : [...s.wishlist, id] }));
    const subtotal = Math.round(state.cart.reduce((n, l) => n + Math.round((findItem(l.id)?.price || 0) * 100) * l.quantity, 0)) / 100;
    const discount = state.promo === 'WELCOME10' ? Math.round(subtotal * 10) / 100 : 0;
    const tax = Math.round((subtotal - discount) * 7) / 100;
    const total = Math.round((subtotal - discount + tax) * 100) / 100;
    const placeOrder = (details: Pick<Order, 'email' | 'address' | 'payment'>, shipping: number) => { const order: Order = { ...details, id: 'MAB-' + Date.now().toString().slice(-7), date: new Date().toISOString(), lines: state.cart.map(l => ({ ...l })), subtotal, discount, tax, shipping, total: Math.round((total + shipping) * 100) / 100 }; setState(s => ({ ...s, orders: [order, ...s.orders], cart: [], promo: '' })); return order; };
    return <Context.Provider value={{ ...state, ready, update, add, quantity, wish, subtotal, discount, tax, total, placeOrder, notify: setToast, count: state.cart.reduce((n, l) => n + l.quantity, 0) }}>{children}{toast && <div className="toast" role="status">{toast}<button aria-label="Dismiss notification" onClick={() => setToast('')}>×</button></div>}</Context.Provider>;
}
export const useStore = () => useContext(Context) as State & {
    ready: boolean;
    update: (p: Partial<State>) => void;
    add: (p: Item, q?: number, c?: string, s?: string) => void;
    quantity: (k: string, n: number) => void;
    wish: (id: string) => void;
    subtotal: number;
    discount: number;
    tax: number;
    total: number;
    count: number;
    notify: (s: string) => void;
    placeOrder: (d: Pick<Order, 'email' | 'address' | 'payment'>, shipping: number) => Order;
};
