import {readFile,writeFile} from 'node:fs/promises';
const dataFile=new URL('../src/promotions-data.json',import.meta.url);
const monitorFile=new URL('../src/promotions-monitor.json',import.meta.url);
const now=new Date(), nowMs=now.getTime(), checkedAt=now.toISOString();
const data=JSON.parse(await readFile(dataFile,'utf8'));
const sources=[
 {brand:'Nu Skin',url:'https://www.nuskin.com/hu/hu/product/ageloc-galvanic-spa'},
 {brand:'Nu Skin',url:'https://www.nuskin.com/content/nuskin/hu_HU/products/nu-skin-offers/nu-skin-special-offers.html'},
 {brand:'doTERRA',url:'https://www.doterra.com/ME/hu_ME/promotions-monthly-promo'},
 {brand:'doTERRA',url:'https://www.doterra.com/ME/hu_ME/promotions'}
];
const status=[], offers=[];
const decode=s=>String(s).replace(/&nbsp;|&#160;/gi,' ').replace(/&amp;/gi,'&').replace(/&quot;/gi,'"').replace(/&#39;|&apos;/gi,"'").replace(/&lt;/gi,'<').replace(/&gt;/gi,'>');
const clean=s=>decode(s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();
const allowed=url=>{try{const u=new URL(url);return u.protocol==='https:'&&['www.nuskin.com','www.doterra.com','shop.doterra.com'].includes(u.hostname)}catch{return false}};
const fetchHtml=async url=>{if(!allowed(url))throw Error('Unapproved source');const r=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0 (compatible; BeautyByIldyPromotions/2.0)'},signal:AbortSignal.timeout(20000)});if(!r.ok)throw Error('HTTP '+r.status);const html=await r.text();if(html.length<500)throw Error('Empty or blocked page');return html};
const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'];
const budapestParts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Budapest',year:'numeric',month:'numeric'}).formatToParts(now);
const month=Number(budapestParts.find(x=>x.type==='month').value)-1, year=Number(budapestParts.find(x=>x.type==='year').value);
const currentMonth=new RegExp(months[month]+'(?:i|ban|ben)?','i');
const temporaryExpiry=()=>new Date(nowMs+6*3600000).toISOString(); // freshness TTL, NOT the campaign's official end date
const extractNuSkin=(html,url)=>{
 const text=clean(html);
 if(!/30%\s*Black Friday\s*Discount/i.test(text))return null;
 const end=temporaryExpiry();
 const sku=text.match(/SKU\s*:\s*(\d{5,})/i)?.[1];
 const heading=clean(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]||'').slice(0,110);
 if(!sku||!heading)return null;
 const price=text.match(/Akciós ár\s*Ft\s*([\d\s.,]+)/i)?.[1]?.trim();
 const id='nuskin-hu-black-friday-'+sku;
 const detail=price?' Akciós ár: '+price+' Ft.':'';
 return {id,brand:'Nu Skin',market:'HU',verified:true,sourceUrl:url,start:checkedAt,end,expiryType:'verification-ttl',sku,discountPercent:30,...(price?{priceText:price+' Ft'}:{}),title:{hu:heading+' – Black Friday',en:heading+' – Black Friday',de:heading+' – Black Friday'},description:{hu:'30% Black Friday kedvezmény a hivatalos magyar Nu Skin termékoldalon.'+detail+' A készlet erejéig, a hivatalos feltételekkel.',en:'30% Black Friday discount on the official Hungarian Nu Skin product page. Subject to stock and terms.',de:'30 % Black-Friday-Rabatt auf der offiziellen ungarischen Nu-Skin-Produktseite. Solange der Vorrat reicht.'}};
};
const seen=new Set();
for(const source of sources){
 try{
  const html=await fetchHtml(source.url),text=clean(html);
  if(source.brand==='Nu Skin'){
   const item=extractNuSkin(html,source.url);
   if(item&&!seen.has(item.id)){offers.push(item);seen.add(item.id)}
   // A campaign index is a discovery hint, not proof that individual products are discounted.
   if(/special-offers\.html/.test(source.url)){
    const urls=[...html.matchAll(/href=["']([^"']+)["']/gi)].map(x=>{try{return new URL(decode(x[1]),source.url).href}catch{return ''}}).filter(u=>allowed(u)&&/\/hu\/hu\/product\//.test(u));
    for(const url of [...new Set(urls)].slice(0,80)){
     try{const page=await fetchHtml(url),candidate=extractNuSkin(page,url);if(candidate&&!seen.has(candidate.id)){offers.push(candidate);seen.add(candidate.id)}}catch(e){status.push({brand:'Nu Skin',sourceUrl:url,verified:false,error:String(e.message),checkedAt})}
    }
   }
   status.push({brand:source.brand,sourceUrl:source.url,reachable:true,verified:!!item,checkedAt,note:item?'Individual product offer verified':'No individually verified live offer on this page'});
  }else{
   // Never publish an evergreen category page or last month's promotions as a current offer.
   const monthVerified=currentMonth.test(text)&&/promóció|ajánlat/i.test(text)&&text.includes(String(year));
   status.push({brand:source.brand,sourceUrl:source.url,reachable:true,verified:monthVerified,checkedAt,note:monthVerified?'Current month mentioned; individual offer extraction not verified':'Current month/year not verified; no offer published'});
  }
 }catch(e){status.push({brand:source.brand,sourceUrl:source.url,reachable:false,verified:false,error:String(e.message),checkedAt})}
}
offers.sort((a,b)=>a.brand.localeCompare(b.brand)||a.id.localeCompare(b.id));
const next={...data,offers};
const prior=JSON.stringify({offers:data.offers||[]});
if(JSON.stringify({offers:next.offers})!==prior){
 next.updatedAt=checkedAt;
 await writeFile(dataFile,JSON.stringify(next,null,2)+'\n');
}
await writeFile(monitorFile,JSON.stringify({checkedAt,sources:status,offerCount:offers.length},null,2)+'\n');
console.log(JSON.stringify({checkedAt,offerCount:offers.length,status},null,2));
