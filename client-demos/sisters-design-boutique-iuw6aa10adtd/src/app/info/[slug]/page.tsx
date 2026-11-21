import { InfoPage } from '@/components/ContentPages';
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <InfoPage slug={slug}/>}
