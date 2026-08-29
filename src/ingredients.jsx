import React from 'react';
import {ArrowLeft} from 'lucide-react';

const itemsHu=[
['Retinol & retinal','A-vitamin-származékok; a retinal egy átalakulási lépéssel közelebb van a retinsavhoz.','A retinoidok a photoaging legjobban kutatott kozmetikai hatóanyagcsoportjai közé tartoznak.','Koncentráció, stabilitás, csomagolás, irritáció és a teljes formula.','ERŐSEBB TUDOMÁNYOS HÁTTÉR'],
['PDRN / Sodium DNA / Hydrolyzed DNA','DNS-eredetű polinukleotid-fragmentumok; kozmetikumokban többféle INCI-néven jelenhetnek meg.','A topikális PDRN humán bizonyítéka fejlődik, de nem általánosítható minden PDRN-termékre.','Forrás, molekulaméret, koncentráció, delivery és késztermék-vizsgálat.','ÍGÉRETES • TERMÉKFÜGGŐ'],
['Ceramidok','A szaruréteg természetes lipidjei.','Koleszterinnel és zsírsavakkal együtt a barrier fontos építőelemei.','Ceramidtípusok, lipidkörnyezet és formulázás.','ERŐS BIOLÓGIAI ALAP'],
['Koleszterin + fitoszfingozin','A bőr barrier-lipid rendszerének fontos komponensei.','Ceramidokkal együtt értékesebb barrier-rendszert alkothatnak, mint önmagukban.','Arányok, teljes lipidkörnyezet és formula.','ERŐS BIOLÓGIAI ALAP'],
['Niacinamide','A B3-vitamin egyik formája.','Széles körben használt hatóanyag többféle bőrápolási célra.','Koncentráció, tolerálhatóság és társított hatóanyagok.','JÓL ISMERT HATÓANYAG'],
['Hialuronsav','Vízmegkötő glükózaminoglikán.','Hidratáló szerepe jól ismert; a molekulaméret- és delivery-állításokat külön ellenőrizzük.','INCI-forma, molekulaméret, formula.','JÓL ISMERT • FORMULAFÜGGŐ'],
['Peptidek','Rövid aminosavláncok; nem egyetlen hatóanyagcsoportként kezelendők.','A bizonyíték peptidenként eltérő.','Pontos INCI, koncentráció, stabilitás és humán adatok.','PEPTIDENKÉNT ÉRTÉKELENDŐ'],
['Panthenol','B5-provitamin-származék, gyakori hidratáló és nyugtató összetevő.','Barrier-támogató, hidratáló formulákban jól ismert.','Koncentráció és teljes formula.','JÓL ISMERT HATÓANYAG'],
['Béta-glükán','Poliszacharid, amelyet hidratáló és nyugtató formulákban használnak.','Ígéretes, de a hatás erősen formulafüggő.','Forrás, koncentráció és késztermék-adatok.','ÍGÉRETES • FORMULAFÜGGŐ'],
['Allantoin','Nyugtató, bőrkondicionáló kozmetikai összetevő.','Hosszú ideje használják érzékenyebb bőrre szánt formulákban.','Koncentráció és társított irritáló összetevők.','JÓL ISMERT'],
['Adenozin','Biológiailag aktív nukleozid, amely koreai anti-aging formulákban gyakori.','Van humán kozmetikai háttér, de késztermékfüggő.','Koncentráció és késztermék-vizsgálat.','MÉRSÉKELT BIZONYÍTÉK'],
['Centella asiatica','Ázsiai gázló; kivonatként és izolált komponensek formájában is használják.','Nyugtató/barrier-támogató formulák gyakori összetevője.','Kivonattípus, százalék és aktív komponensek.','FORMULAFÜGGŐ'],
['Szkvalán','Stabil, bőrpuhító lipid.','Jól tolerálható emolliens, száraz és barrier-gyenge bőrben hasznos lehet.','Forrás és teljes formula.','JÓL ISMERT'],
['Ginseng / ginszenozidok','A Panax ginseng növény bioaktív komponensei.','Ígéretes antioxidáns és age-well kutatási terület, de a bizonyíték termék- és kivonatfüggő.','Kivonat standardizálása, koncentráció, humán adatok.','ÍGÉRETES'],
['C-vitamin-származékok','Az aszkorbinsav stabilabb vagy lipofilebb származékai.','Hatásuk és átalakulásuk formánként eltérő.','Pontos INCI, koncentráció, stabilitás.','FORMÁNKÉNT ÉRTÉKELENDŐ'],
['Glutation','Endogén antioxidáns tripeptid.','Topikális kozmetikai alkalmazása érdekes, de a humán bizonyíték korlátozottabb.','Stabilitás, koncentráció és késztermék-adat.','KORLÁTOZOTT / ÍGÉRETES'],
['NAD+','Sejtes koenzim, amely az energia-anyagcserében fontos.','Kozmetikai topikális alkalmazása jelenleg korai kutatási és marketingterület.','Stabilitás, bőrpenetráció és valódi humán adatok.','KORAI KUTATÁSI TERÜLET'],
['Aloe vera','Növényi kivonat, hidratáló és nyugtató formulák gyakori összetevője.','A hatás függ a kivonat típusától és koncentrációjától.','Kivonatminőség, illatanyagok, alkohol és teljes formula.','JÓL ISMERT • FORMULAFÜGGŐ'],
['Argánolaj','Növényi olaj zsírsavakkal és antioxidáns komponensekkel.','Főként emolliens és hajkondicionáló szerepben hasznos.','Olajminőség, oxidáció és szilikonokkal/egyéb emolliensekkel való kombináció.','JÓL ISMERT'],
['Acmella oleracea / BOTALIX-típusú komplexek','Az Acmella oleracea növényi kivonatára épülő kozmetikai komplexek.','A botox-szerű marketingállításokat nem tekintjük automatikusan klinikailag bizonyítottnak.','Pontos összetétel, koncentráció és független humán adat.','KORLÁTOZOTT • TERMÉKFÜGGŐ'],
['EGF / sh-Oligopeptide-1','Rekombináns növekedési faktor jellegű kozmetikai összetevő.','Biológiailag érdekes, de topikális kozmetikai hatásossága és penetrációja késztermékfüggő.','Stabilitás, delivery, koncentráció és biztonsági adatok.','KORAI / TERMÉKFÜGGŐ'],
['Exoszómák / extracelluláris vezikulák','Sejtek által kibocsátott membránhólyagok.','2026-os áttekintések szerint ígéretes, de heterogén és még nem egységesen standardizált terület.','Forrás, karakterizálás, stabilitás, biztonság, humán vizsgálatok.','KORAI / ÍGÉRETES'],
['Spicule / mikrotűszerű részecskék','Apró tűszerű struktúrák, gyakran szivacseredetűek.','Nem azonosak a professzionális microneedlinggel; a marketing gyorsabb, mint a független humán bizonyíték.','Irritáció, barrier állapota, más aktívokkal való kombináció.','KORLÁTOZOTT BIZONYÍTÉK']
];

const mapItems=(lang)=>itemsHu.map(([n,a,b,c,d])=>{
 if(lang==='hu') return [n,a,b,c,d];
 if(lang==='en') return [n,'Plain-language ingredient overview.','We assess current evidence separately from marketing claims.','Exact INCI, concentration when known, formulation quality and finished-product evidence.',d];
 return [n,'Verständliche Erklärung des Inhaltsstoffs.','Wissenschaftliche Evidenz wird getrennt von Marketingaussagen bewertet.','Exakte INCI, bekannte Konzentration, Formulierungsqualität und Daten zum Fertigprodukt.',d];
});

const copy={
 hu:{back:'Vissza a főoldalra',eye:'BEAUTY BY ILDY • TUDÁSTÁR',title:'Kozmetikai összetevők, érthetően.',lead:'Nem csak azt nézzük, mi szerepel az INCI-listán. A formát, koncentrációt — ha ismert —, formulát, tolerálhatóságot és tudományos hátteret is külön értékeljük.',updated:'Utoljára szakmailag frissítve: 2026. augusztus',labels:['MIT JELENT?','MIT TUDUNK RÓLA?','MIRE FIGYELÜNK?']},
 en:{back:'Back to home',eye:'BEAUTY BY ILDY • KNOWLEDGE BASE',title:'Cosmetic ingredients, explained.',lead:'We look beyond the INCI list and assess form, disclosed concentration, formulation, tolerability and scientific evidence separately.',updated:'Last scientifically reviewed: August 2026',labels:['WHAT IS IT?','WHAT DO WE KNOW?','WHAT DO WE CHECK?']},
 de:{back:'Zurück zur Startseite',eye:'BEAUTY BY ILDY • WISSENSBASIS',title:'Kosmetische Inhaltsstoffe, verständlich erklärt.',lead:'Wir betrachten mehr als die INCI-Liste und bewerten Form, bekannte Konzentration, Formulierung, Verträglichkeit und wissenschaftliche Evidenz getrennt.',updated:'Zuletzt wissenschaftlich geprüft: August 2026',labels:['WAS IST DAS?','WAS WISSEN WIR?','WORAUF ACHTEN WIR?']}
};

export function IngredientsPage({lang='hu'}){
 const t=copy[lang]||copy.hu; const items=mapItems(lang);
 return <main><section className="ingredientHero"><div><a className="guideBack" href="#top"><ArrowLeft size={14}/>{t.back}</a><p className="eyebrow">{t.eye}</p><h1>{t.title}</h1><p className="ingredientLead">{t.lead}</p><p className="reviewed">{t.updated}</p></div></section><section className="ingredientGrid">{items.map(([name,a,b,c,status])=><article className="ingredientCard" key={name}><div className="ingredientTop"><h2>{name}</h2><span>{status}</span></div><h3>{t.labels[0]}</h3><p>{a}</p><h3>{t.labels[1]}</h3><p>{b}</p><h3>{t.labels[2]}</h3><p>{c}</p></article>)}</section></main>;
}
