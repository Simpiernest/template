import { ProductPage } from '@/components/ShoppingPages';
import { items } from '@/data/catalog';
import { notFound } from 'next/navigation';
export function generateStaticParams(){return items.map(p=>({id:p.id}))}
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;if(!items.some(p=>p.id===id))notFound();return <ProductPage id={id}/>}
