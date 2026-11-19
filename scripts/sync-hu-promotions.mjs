import {readFile,writeFile} from 'node:fs/promises';
const file=new URL('../src/promotions-data.json',import.meta.url);
const data=JSON.parse(await readFile(file,'utf8'));
const now=Date.now(), checkedAt=new Date(now).toISOString();
const HOUR=3600000;
const sources=[
 {brand:'Nu Skin',url:'https://www.nuskin.com/hu/hu/black-friday-2026'},
 {brand:'doTERRA',url:'https://shop.doterra.com/HU/hu_HU/shop/special-offer'}
];
const status=[];
const fetchHtml=async url=>{const r=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0 (compatible; BeautyByIldyPromotions/1.0)'},signal:AbortSignal.timeout(18000)});if(!r.ok)throw Error('HTTP '+r.status);const html=await r.text();if(html.length<500)throw Error('empty or blocked page');return html;};
const clean=s=>s.replace(/<script\\b[^>]*>[\\s\\S]*?<\\/script>/gi,' ').replace(/<style\\b[^>]*>[\\s\\S]*?<\\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/&amp;/g,'&').replace(/\\s+/g,' ').trim();
const future=hours=>new Date(now+hours*HOUR).toISOString();
const discovered=[];
for(const source of sources){
 try{
  const html=await fetchHtml(source.url),plain=clean(html);
  if(source.brand==='doTERRA'){
   // The live Hungarian special-offers catalogue is the authority; never infer a discount from retail/wholesale prices.
   const hasOffers=/Különleges ajánlatok/i.test(plain)&&/Hozzáadás a kosárhoz/i.test(plain);
   if(!hasOffers)throw Error('No verifiable Hungarian offer catalogue');
   discovered.push({id:'doterra-hu-official-special-offers',brand:'doTERRA',market:'HU',verified:true,sourceUrl:source.url,start:checkedAt,end:future(6),title:{hu:'doTERRA – aktuális különleges ajánlatok',en:'doTERRA – current special offers',de:'doTERRA – aktuelle Sonderangebote'},description:{hu:'A hivatalos magyar doTERRA áruház aktuális különleges ajánlatai. Az egyes termékek árát és feltételeit a hivatalos oldalon ellenőrizheted.',en:'Current special offers in the official Hungarian doTERRA shop. Check product prices and conditions on the official website.',de:'Aktuelle Sonderangebote im offiziellen ungarischen doTERRA-Shop. Preise und Bedingungen bitte auf der offiziellen Website prüfen.'}});
  }else{
   // Publish the Nu Skin promotion landing page only if the official Hungarian page explicitly says Black Friday and 2026.
   if(!/Black Friday/i.test(plain)||!/2026/.test(plain))throw Error('No verified current HU campaign');
   // No discount percentage or date is inferred from a general landing page.
   discovered.push({id:'nuskin-hu-official-campaign',brand:'Nu Skin',market:'HU',verified:true,sourceUrl:source.url,start:checkedAt,end:future(6),title:{hu:'Nu Skin – hivatalos magyar akciók',en:'Nu Skin – official Hungarian offers',de:'Nu Skin – offizielle Angebote für Ungarn'},description:{hu:'A Nu Skin magyar kampányoldalán elérhető ajánlatok. A konkrét kedvezményeket és feltételeket a hivatalos oldalon ellenőrizd.',en:'Offers on the official Nu Skin Hungarian campaign page. Verify individual discounts and terms on the official website.',de:'Angebote auf der offiziellen ungarischen Nu-Skin-Aktionsseite. Rabatte und Bedingungen auf der offiziellen Website prüfen.'}});
  }
  status.push({brand:source.brand,sourceUrl:source.url,reachable:true,verified:true,checkedAt});
 }catch(error){status.push({brand:source.brand,sourceUrl:source.url,reachable:false,verified:false,error:String(error.message),checkedAt});}
}
// Preserve only current, individually source-verified offers. Fail closed on outages.
const existing=(data.offers||[]).filter(o=>o.id!=='doterra-hu-official-special-offers'&&o.id!=='nuskin-hu-official-campaign'&&o.market==='HU'&&o.verified===true&&Date.parse(o.end)>now);
const verifiedExisting=[];
for(const offer of existing){
 try{
  if(!/^https:\\/\\/(www\\.nuskin\\.com|shop\\.doterra\\.com)\\//.test(offer.sourceUrl))continue;
  const page=clean(await fetchHtml(offer.sourceUrl));
  if(offer.id==='nuskin-hu-galvanic-black-friday-2026'){
   if(!/30%\\s*Black Friday/i.test(page)&&!/Black Friday.{0,180}30%/i.test(page))continue;
  }else continue; // No general automatic trust of previously hand-entered offers.
  verifiedExisting.push(offer);
 }catch(error){status.push({brand:offer.brand,sourceUrl:offer.sourceUrl,reachable:false,verified:false,error:String(error.message),checkedAt});}
}
data.offers=[...verifiedExisting,...discovered];data.updatedAt=checkedAt;
await writeFile(file,JSON.stringify(data,null,2)+'\\n');
await writeFile(new URL('../src/promotions-monitor.json',import.meta.url),JSON.stringify({checkedAt,sources:status},null,2)+'\\n');
console.log('Hungarian verified promotions:',data.offers.length,JSON.stringify(status));
