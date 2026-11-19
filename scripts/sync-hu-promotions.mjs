import {readFile,writeFile} from 'node:fs/promises';
// Fail-closed promotion monitoring: only source-verified offers remain visible.
// The site itself hides expired offers even when a scheduled sync has not run.
const file=new URL('../src/promotions-data.json',import.meta.url);
const data=JSON.parse(await readFile(file,'utf8'));
const now=Date.now();
const sources=[{brand:'Nu Skin',url:'https://www.nuskin.com/content/nuskin/hu_HU/products/nu-skin-offers/nu-skin-special-offers.html'},{brand:'doTERRA',url:'https://shop.doterra.com/HU/hu_HU/shop/special-offer'}];
const status=[];
for(const source of sources){try{const response=await fetch(source.url,{headers:{'User-Agent':'BeautyByIldy-HU-Promotions-Monitor/1.0'},signal:AbortSignal.timeout(15000)});if(!response.ok)throw Error('HTTP '+response.status);const html=await response.text();if(html.length<400)throw Error('short response');status.push({brand:source.brand,sourceUrl:source.url,reachable:true,checkedAt:new Date().toISOString()});}catch(e){status.push({brand:source.brand,sourceUrl:source.url,reachable:false,error:String(e.message),checkedAt:new Date().toISOString()});}}
// Revalidate the known official Hungarian Nu Skin Black Friday offer on every run.
// If the product page no longer confirms the promotion, remove the card rather than display a stale claim.
const known='nuskin-hu-galvanic-black-friday-2026';
const current=data.offers.find(o=>o.id===known);
if(current){
 try{
  const response=await fetch(current.sourceUrl,{signal:AbortSignal.timeout(15000)});
  if(!response.ok)throw Error('HTTP '+response.status);
  const page=(await response.text()).replace(/<[^>]*>/g,' ').replace(/\\s+/g,' ');
  if(!/30%\\s*(?:Black Friday|kedvezm[eé]ny|discount)/i.test(page)&&!/Black Friday.{0,200}30%/i.test(page))throw Error('promotion no longer verifiable');
 }catch(error){data.offers=data.offers.filter(o=>o.id!==known);console.log('Removed unverified offer:',String(error.message));}
}
// Never infer prices, deadlines, eligibility, or product links from unstructured pages.
// New offers must pass verified source and date checks before being published.
data.offers=(data.offers||[]).filter(o=>o.market==='HU'&&o.verified===true&&/^https:\/\/(www\.nuskin\.com|shop\.doterra\.com)\//.test(o.sourceUrl)&&Number.isFinite(Date.parse(o.end))&&Date.parse(o.end)>now);
data.updatedAt=new Date().toISOString();
await writeFile(file,JSON.stringify(data,null,2)+'\n');
await writeFile(new URL('../src/promotions-monitor.json',import.meta.url),JSON.stringify({checkedAt:data.updatedAt,sources:status},null,2)+'\n');
console.log('Hungarian promotion sources:',JSON.stringify(status));
