import React,{useEffect,useRef} from 'react';
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

const itemsEn=[
['Retinol & retinal','Vitamin A derivatives; retinal is one conversion step closer to retinoic acid.','Retinoids are among the best-studied cosmetic active groups for photoaging.','Concentration, stability, packaging, irritation potential and the complete formula.','STRONGER EVIDENCE BASE'],
['PDRN / Sodium DNA / Hydrolyzed DNA','DNA-derived polynucleotide fragments that may appear under several INCI names in cosmetics.','Human evidence for topical PDRN is developing, but cannot be generalized to every PDRN product.','Source, molecular size, concentration, delivery system and finished-product studies.','PROMISING • PRODUCT-DEPENDENT'],
['Ceramides','Naturally occurring lipids of the stratum corneum.','Together with cholesterol and fatty acids, ceramides are important components of the skin barrier.','Ceramide types, lipid environment and formulation.','STRONG BIOLOGICAL BASIS'],
['Cholesterol + phytosphingosine','Important components of the skin-barrier lipid system.','Used with ceramides, they may form a more complete barrier-supporting lipid system than when used alone.','Ratios, total lipid environment and formulation.','STRONG BIOLOGICAL BASIS'],
['Niacinamide','A form of vitamin B3.','A widely used active with evidence across several skincare goals.','Concentration, tolerability and accompanying actives.','WELL-ESTABLISHED ACTIVE'],
['Hyaluronic acid','A water-binding glycosaminoglycan.','Its hydrating role is well established; molecular-weight and delivery claims need separate evaluation.','INCI form, molecular size and formulation.','WELL-ESTABLISHED • FORMULA-DEPENDENT'],
['Peptides','Short amino-acid chains; they should not be treated as one uniform active category.','Evidence varies substantially from one peptide to another.','Exact INCI, concentration, stability and human data.','ASSESS PEPTIDE BY PEPTIDE'],
['Panthenol','A provitamin B5 derivative commonly used for hydration and soothing.','Well established in barrier-supportive and hydrating formulas.','Concentration and the complete formula.','WELL ESTABLISHED'],
['Beta-glucan','A polysaccharide used in hydrating and soothing formulas.','Promising, but effects are strongly formulation-dependent.','Source, concentration and finished-product data.','PROMISING • FORMULA-DEPENDENT'],
['Allantoin','A soothing, skin-conditioning cosmetic ingredient.','Long used in formulas intended for more sensitive skin.','Concentration and accompanying potentially irritating ingredients.','WELL ESTABLISHED'],
['Adenosine','A biologically active nucleoside commonly used in Korean age-well formulas.','There is human cosmetic evidence, but results remain finished-product dependent.','Concentration and finished-product studies.','MODERATE EVIDENCE'],
['Centella asiatica','A botanical used both as an extract and through isolated components.','Common in soothing and barrier-supporting formulas.','Extract type, percentage and active constituents.','FORMULA-DEPENDENT'],
['Squalane','A stable emollient lipid.','Generally well tolerated and potentially useful for dry or barrier-compromised skin.','Source and complete formula.','WELL ESTABLISHED'],
['Ginseng / ginsenosides','Bioactive components derived from Panax ginseng.','A promising antioxidant and age-well research area, though evidence depends on the extract and product.','Extract standardisation, concentration and human data.','PROMISING'],
['Vitamin C derivatives','More stable or lipophilic derivatives of ascorbic acid.','Performance and conversion differ by derivative.','Exact INCI, concentration and stability.','ASSESS BY FORM'],
['Glutathione','An endogenous antioxidant tripeptide.','Topical cosmetic use is interesting, but human evidence is more limited.','Stability, concentration and finished-product evidence.','LIMITED / PROMISING'],
['NAD+','A cellular coenzyme central to energy metabolism.','Topical cosmetic use is currently an early research and marketing area.','Stability, skin penetration and meaningful human data.','EARLY RESEARCH AREA'],
['Aloe vera','A botanical ingredient often used in hydrating and soothing formulas.','Effects depend on the type and concentration of the extract.','Extract quality, fragrance, alcohol and the complete formula.','WELL ESTABLISHED • FORMULA-DEPENDENT'],
['Argan oil','A plant oil containing fatty acids and antioxidant compounds.','Mainly useful as an emollient and hair-conditioning ingredient.','Oil quality, oxidation and combination with silicones or other emollients.','WELL ESTABLISHED'],
['Acmella oleracea / BOTALIX-type complexes','Cosmetic complexes based on Acmella oleracea botanical extract.','“Botox-like” marketing claims should not automatically be treated as clinically proven.','Exact composition, concentration and independent human evidence.','LIMITED • PRODUCT-DEPENDENT'],
['EGF / sh-Oligopeptide-1','A recombinant growth-factor-like cosmetic ingredient.','Biologically interesting, but topical cosmetic efficacy and penetration depend heavily on the finished product.','Stability, delivery, concentration and safety data.','EARLY / PRODUCT-DEPENDENT'],
['Exosomes / extracellular vesicles','Membrane-bound vesicles released by cells.','2026 reviews describe a promising but heterogeneous field that is not yet uniformly standardised.','Source, characterisation, stability, safety and human studies.','EARLY / PROMISING'],
['Spicules / microneedle-like particles','Tiny needle-like structures, often sponge-derived.','They are not the same as professional microneedling; marketing has moved faster than independent human evidence.','Irritation, barrier condition and combination with other actives.','LIMITED EVIDENCE']
];

const itemsDe=[
['Retinol & Retinal','Vitamin-A-Derivate; Retinal liegt in der Umwandlung einen Schritt näher an Retinsäure.','Retinoide gehören zu den am besten untersuchten kosmetischen Wirkstoffgruppen bei lichtbedingter Hautalterung.','Konzentration, Stabilität, Verpackung, Reizpotenzial und Gesamtformulierung.','STÄRKERE EVIDENZBASIS'],
['PDRN / Sodium DNA / Hydrolyzed DNA','DNA-abgeleitete Polynukleotid-Fragmente, die in Kosmetika unter verschiedenen INCI-Namen erscheinen können.','Die Human-Evidenz für topisches PDRN entwickelt sich, lässt sich aber nicht auf jedes PDRN-Produkt übertragen.','Quelle, Molekülgröße, Konzentration, Delivery-System und Studien am Fertigprodukt.','VIELVERSPRECHEND • PRODUKTABHÄNGIG'],
['Ceramide','Natürliche Lipide der Hornschicht.','Zusammen mit Cholesterin und Fettsäuren sind Ceramide wichtige Bestandteile der Hautbarriere.','Ceramidtypen, Lipidumfeld und Formulierung.','STARKE BIOLOGISCHE GRUNDLAGE'],
['Cholesterin + Phytosphingosin','Wichtige Bestandteile des Lipidsystems der Hautbarriere.','Zusammen mit Ceramiden können sie ein vollständigeres Barrierelipid-System bilden als einzeln.','Verhältnisse, gesamtes Lipidumfeld und Formulierung.','STARKE BIOLOGISCHE GRUNDLAGE'],
['Niacinamid','Eine Form von Vitamin B3.','Ein breit eingesetzter Wirkstoff mit Evidenz für mehrere Hautpflegeziele.','Konzentration, Verträglichkeit und kombinierte Wirkstoffe.','GUT ETABLIERTER WIRKSTOFF'],
['Hyaluronsäure','Ein wasserbindendes Glykosaminoglykan.','Die hydratisierende Wirkung ist gut bekannt; Aussagen zu Molekülgröße und Delivery müssen separat bewertet werden.','INCI-Form, Molekülgröße und Formulierung.','GUT ETABLIERT • FORMULIERUNGSABHÄNGIG'],
['Peptide','Kurze Aminosäureketten; sie sollten nicht als einheitliche Wirkstoffgruppe behandelt werden.','Die Evidenz unterscheidet sich deutlich von Peptid zu Peptid.','Exakte INCI, Konzentration, Stabilität und Humandaten.','PEPTID FÜR PEPTID BEWERTEN'],
['Panthenol','Ein Provitamin-B5-Derivat, häufig zur Hydratisierung und Beruhigung eingesetzt.','Gut etabliert in barrierestützenden und hydratisierenden Formulierungen.','Konzentration und Gesamtformulierung.','GUT ETABLIERT'],
['Beta-Glucan','Ein Polysaccharid, das in hydratisierenden und beruhigenden Formeln eingesetzt wird.','Vielversprechend, aber stark von der Formulierung abhängig.','Quelle, Konzentration und Daten zum Fertigprodukt.','VIELVERSPRECHEND • FORMULIERUNGSABHÄNGIG'],
['Allantoin','Ein beruhigender, hautpflegender kosmetischer Inhaltsstoff.','Seit Langem in Formulierungen für empfindlichere Haut im Einsatz.','Konzentration und begleitende potenziell reizende Inhaltsstoffe.','GUT ETABLIERT'],
['Adenosin','Ein biologisch aktives Nukleosid, häufig in koreanischen Age-Well-Formulierungen.','Es gibt humane kosmetische Daten, die Aussagekraft bleibt jedoch produktabhängig.','Konzentration und Studien am Fertigprodukt.','MODERATE EVIDENZ'],
['Centella asiatica','Ein Pflanzenstoff, der als Extrakt und in isolierten Bestandteilen eingesetzt wird.','Häufig in beruhigenden und barrierestützenden Formulierungen.','Extraktart, Prozentsatz und aktive Bestandteile.','FORMULIERUNGSABHÄNGIG'],
['Squalan','Ein stabiles, rückfettendes Lipid.','Meist gut verträglich und potenziell hilfreich bei trockener oder barriereschwacher Haut.','Quelle und Gesamtformulierung.','GUT ETABLIERT'],
['Ginseng / Ginsenoside','Bioaktive Bestandteile aus Panax ginseng.','Ein vielversprechendes antioxidatives und Age-Well-Forschungsfeld, wobei die Evidenz extrakt- und produktabhängig ist.','Standardisierung des Extrakts, Konzentration und Humandaten.','VIELVERSPRECHEND'],
['Vitamin-C-Derivate','Stabilere oder lipophilere Derivate der Ascorbinsäure.','Wirkung und Umwandlung unterscheiden sich je nach Derivat.','Exakte INCI, Konzentration und Stabilität.','JE NACH FORM BEWERTEN'],
['Glutathion','Ein körpereigenes antioxidatives Tripeptid.','Die topische kosmetische Anwendung ist interessant, die Human-Evidenz jedoch begrenzter.','Stabilität, Konzentration und Daten zum Fertigprodukt.','BEGRENZT / VIELVERSPRECHEND'],
['NAD+','Ein zelluläres Coenzym mit zentraler Rolle im Energiestoffwechsel.','Die topische kosmetische Anwendung ist derzeit ein frühes Forschungs- und Marketingfeld.','Stabilität, Hautpenetration und belastbare Humandaten.','FRÜHES FORSCHUNGSFELD'],
['Aloe vera','Ein Pflanzenextrakt, häufig in hydratisierenden und beruhigenden Formulierungen.','Die Wirkung hängt von Art und Konzentration des Extrakts ab.','Extraktqualität, Duftstoffe, Alkohol und Gesamtformulierung.','GUT ETABLIERT • FORMULIERUNGSABHÄNGIG'],
['Arganöl','Ein Pflanzenöl mit Fettsäuren und antioxidativen Bestandteilen.','Vor allem als Emolliens und haarpflegender Inhaltsstoff relevant.','Ölqualität, Oxidation und Kombination mit Silikonen oder anderen Emollienzien.','GUT ETABLIERT'],
['Acmella oleracea / BOTALIX-artige Komplexe','Kosmetische Komplexe auf Basis von Acmella-oleracea-Pflanzenextrakt.','„Botox-ähnliche“ Marketingaussagen sollten nicht automatisch als klinisch belegt gelten.','Exakte Zusammensetzung, Konzentration und unabhängige Humandaten.','BEGRENZT • PRODUKTABHÄNGIG'],
['EGF / sh-Oligopeptide-1','Ein rekombinanter wachstumsfaktorähnlicher kosmetischer Inhaltsstoff.','Biologisch interessant, doch topische Wirksamkeit und Penetration hängen stark vom Fertigprodukt ab.','Stabilität, Delivery, Konzentration und Sicherheitsdaten.','FRÜH / PRODUKTABHÄNGIG'],
['Exosomen / extrazelluläre Vesikel','Membranvesikel, die von Zellen freigesetzt werden.','Reviews aus 2026 beschreiben ein vielversprechendes, aber heterogenes und noch nicht einheitlich standardisiertes Feld.','Quelle, Charakterisierung, Stabilität, Sicherheit und Humanstudien.','FRÜH / VIELVERSPRECHEND'],
['Spicules / mikronadelartige Partikel','Winzige nadelartige Strukturen, häufig aus Schwämmen gewonnen.','Sie sind nicht mit professionellem Microneedling gleichzusetzen; das Marketing ist schneller gewachsen als die unabhängige Human-Evidenz.','Irritation, Zustand der Hautbarriere und Kombination mit anderen Wirkstoffen.','BEGRENZTE EVIDENZ']
];

const mapItems=(lang)=>{
 if(lang==='en') return itemsEn;
 if(lang==='de') return itemsDe;
 return itemsHu;
};

const copy={
 hu:{back:'Vissza a főoldalra',eye:'BEAUTY BY ILDY • TUDÁSTÁR',title:'Kozmetikai összetevők, érthetően.',lead:'Nem csak azt nézzük, mi szerepel az INCI-listán. A formát, koncentrációt — ha ismert —, formulát, tolerálhatóságot és tudományos hátteret is külön értékeljük.',updated:'Utoljára szakmailag frissítve: 2026. augusztus',labels:['MIT JELENT?','MIT TUDUNK RÓLA?','MIRE FIGYELÜNK?']},
 en:{back:'Back to home',eye:'BEAUTY BY ILDY • KNOWLEDGE BASE',title:'Cosmetic ingredients, explained.',lead:'We look beyond the INCI list and assess form, disclosed concentration, formulation, tolerability and scientific evidence separately.',updated:'Last scientifically reviewed: August 2026',labels:['WHAT IS IT?','WHAT DO WE KNOW?','WHAT DO WE CHECK?']},
 de:{back:'Zurück zur Startseite',eye:'BEAUTY BY ILDY • WISSENSBASIS',title:'Kosmetische Inhaltsstoffe, verständlich erklärt.',lead:'Wir betrachten mehr als die INCI-Liste und bewerten Form, bekannte Konzentration, Formulierung, Verträglichkeit und wissenschaftliche Evidenz getrennt.',updated:'Zuletzt wissenschaftlich geprüft: August 2026',labels:['WAS IST DAS?','WAS WISSEN WIR?','WORAUF ACHTEN WIR?']}
};

export function IngredientsPage({lang='hu'}){
 const t=copy[lang]||copy.hu; const items=mapItems(lang);
 const cards=useRef([]); useEffect(()=>{const target=window.location.hash.split('/')[1];const targets=['ingredient-retinol','ingredient-pdrn'];const index=targets.indexOf(target);if(index>=0)cards.current[index]?.scrollIntoView()},[]);
 return <main className="ingredientsPage"><section className="ingredientHero"><div><a className="guideBack" href="#top"><ArrowLeft size={14}/>{t.back}</a><p className="eyebrow">{t.eye}</p><h1>{t.title}</h1><p className="ingredientLead">{t.lead}</p><p className="reviewed">{t.updated}</p></div></section><section className="ingredientGrid">{items.map(([name,a,b,c,status],i)=><article className="ingredientCard" id={i===0?'ingredient-retinol':i===1?'ingredient-pdrn':undefined} ref={i<2?node=>cards.current[i]=node:undefined} key={name}><div className="ingredientTop"><h2>{name}</h2><span>{status}</span></div><h3>{t.labels[0]}</h3><p>{a}</p><h3>{t.labels[1]}</h3><p>{b}</p><h3>{t.labels[2]}</h3><p>{c}</p></article>)}</section></main>;
}
