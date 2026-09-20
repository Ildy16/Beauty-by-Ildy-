import React,{useMemo,useState} from 'react';
import {ArrowLeft,ArrowRight,Check,Info,RotateCcw,ShieldCheck,Sparkles} from 'lucide-react';
import {products} from './products.jsx';
import {goalLabels} from './finderData.js';
import {recommend} from './finderEngine.js';
import './beautyFinder.css';

const C={
 hu:{
  back:'Vissza a főoldalra',eyebrow:'BEAUTY BY ILDY · SMART JOURNEY',title:'TALÁLD MEG, AMI NEKED VALÓ',
  lead:'Válaszolj néhány rövid kérdésre. A Finder a céljaid, rutinod és biztonsági szempontok alapján rendezi a releváns lehetőségeket.',
  start:'INDÍTOM A BEAUTY FINDERT',note:'Kb. 1–2 perc · ingyenes · regisztráció nélkül',privacy:'A válaszok ebben a verzióban csak a böngészőben élnek, nem kerülnek URL-be és nem hozunk létre belőlük egészségprofilt.',
  journey:'Miben szeretnél segítséget?',journeySub:'Válaszd ki azt a területet, ami most a leginkább érdekel.',
  journeys:{skin:['ARCÁPOLÁS & SLOW-AGING','Ráncok, feszesség, hidratálás, pigmentáció és barrier.'],hair:['HAJ & FEJBŐR','Hajhossz, simaság, fejbőr és kondicionálás.'],wellness:['WELLNESS','Külön biztonsági szűréssel kezelt wellness-termékek.'],device:['BEAUTY KÉSZÜLÉKEK','LED, mikroáram, RF, galvanic és más otthoni technológiák.']},
  goal:'Mi a legfontosabb célod?',goalSub:'Ezt tekinti a Finder elsődleges prioritásnak.',
  profile:'Milyen a profilod?',skinType:'Milyennek érzed általában a bőrödet?',skinTypes:{dry:'Száraz',normal:'Normál',combination:'Kombinált',oily:'Zsíros',sensitive:'Érzékeny / könnyen irritálódik'},
  routine:'Milyen rutint szeretnél?',routineOptions:{essential:['ESSENTIAL','2–3 jól megválasztott lépés.'],balanced:['BALANCED','Hatékony, de kezelhető rutin.'],advanced:['ADVANCED','Komplexebb rutin és több aktív is szóba jöhet.']},
  safety:'Rövid biztonsági ellenőrzés',safetySub:'Ezek a válaszok csak azt döntik el, mit ne tegyünk automatikusan az ajánlások közé.',
  currentRetinoid:'Használok retinolt / retinalt / retinoidot',sensitive:'A bőröm érzékeny',irritated:'Most csíp, ég, hámlik vagy erősen irritált',prescription:'Bőrgyógyász által felírt kezelést használok',pregnancy:'Várandós vagyok / fennállhat terhesség',
  sunscreen:'Rendszeresen használok fényvédőt',adult:'18 éves vagy idősebb vagyok',medication:'Rendszeresen szedek gyógyszert',wellnessPregnancy:'Várandós vagyok vagy szoptatok',caffeine:'Kerülöm / rosszul tolerálom a koffeint',hormonal:'Hormonális/endokrin betegség vagy kezelés érint',
  next:'TOVÁBB',prev:'VISSZA',result:'MUTASD AZ ÚTVONALAMAT',restart:'ÚJRAKEZDEM',
  resultTitle:'A TE BEAUTY ÚTVONALAD',resultLead:'Nem egy „nyertes” terméket választunk. A Finder szerepek szerint épít rutint, és a partneri jutalék nem része a rangsorolásnak.',
  roles:{base:'1. ALAP',targeted:'2. CÉLZOTT LÉPÉS',extra:'3. EXTRA – CSAK HA SZERETNÉD'},
  why:'MIÉRT EZT?',details:'RÉSZLETES ADATLAP',alternatives:'TOVÁBBI RELEVÁNS LEHETŐSÉGEK',
  empty:'A megadott válaszok alapján most nem adunk automatikus termékajánlást.',emptySub:'Ez tudatos eredmény: bizonytalan vagy biztonsági szempontból összetettebb helyzetben inkább nem találunk ki választ.',
  deviceTitle:'A készülékág következő modulja',deviceText:'A technológiai célod alapján később külön készülék-szintű ellenjavallat-ellenőrzést végzünk. Addig a Beauty Tech útmutatóban hasonlíthatod össze az RF, LED, mikroáram és más technológiákat.',deviceCta:'BEAUTY TECH ÚTMUTATÓ',
  warnings:{AMBER:'Külön figyelmet igényel',GREEN:'Jó illeszkedés'},
  education:{spf_first:'Pigmentációs cél mellett a következetes nappali fényvédelem az alap.',barrier_first:'Irritált bőrnél most a barrier és a komfort kerül előre.',avoid_unnecessary_retinoid_stacking:'Már használsz retinoidot, ezért nem adunk hozzá szükségtelenül újabbat.'},
  reasons:{primary_goal_match:'egyezik a fő céloddal',secondary_goal_match:'további céljaidhoz is illeszkedik',profile_match:'illeszkedik a megadott profilhoz',routine_fit:'belefér a választott rutinba',retinoid_stack:'már használsz retinoidot',sensitive_retinoid:'érzékenységet jelöltél',verification_pending:'egy fontos termékadat még utóellenőrzést igényel',eye_sensitivity:'érzékeny szemkörnyék esetén óvatosság kell',fragrance_sensitivity:'érzékeny bőrnél az illatanyag miatt óvatosabb besorolást kap'}
 },
 en:{
  back:'Back to home',eyebrow:'BEAUTY BY ILDY · SMART JOURNEY',title:'FIND WHAT FITS YOU',
  lead:'Answer a few short questions. The Finder organises relevant options around your goals, routine and safety context.',
  start:'START BEAUTY FINDER',note:'About 1–2 minutes · free · no sign-up',privacy:'Answers stay in browser state in this version; they are not placed in the URL or used to create a health profile.',
  journey:'What would you like help with?',journeySub:'Choose the area that matters most right now.',
  journeys:{skin:['SKINCARE & SLOW-AGING','Lines, firmness, hydration, pigmentation and barrier.'],hair:['HAIR & SCALP','Lengths, smoothing, scalp and conditioning.'],wellness:['WELLNESS','Wellness products with a separate safety gate.'],device:['BEAUTY DEVICES','LED, microcurrent, RF, galvanic and other at-home technologies.']},
  goal:'What is your main goal?',goalSub:'The Finder uses this as the primary priority.',
  profile:'Your profile',skinType:'How would you describe your skin?',skinTypes:{dry:'Dry',normal:'Normal',combination:'Combination',oily:'Oily',sensitive:'Sensitive / easily irritated'},
  routine:'What kind of routine do you want?',routineOptions:{essential:['ESSENTIAL','2–3 well-chosen steps.'],balanced:['BALANCED','Effective but manageable.'],advanced:['ADVANCED','A more complex routine can be considered.']},
  safety:'Quick safety check',safetySub:'These answers only help decide what should not be automatically recommended.',
  currentRetinoid:'I use retinol / retinal / another retinoid',sensitive:'My skin is sensitive',irritated:'My skin is currently burning, stinging, peeling or very irritated',prescription:'I use prescription dermatology treatment',pregnancy:'I am pregnant / pregnancy may be possible',
  sunscreen:'I regularly use sunscreen',adult:'I am 18 or older',medication:'I regularly take medication',wellnessPregnancy:'I am pregnant or breastfeeding',caffeine:'I avoid / poorly tolerate caffeine',hormonal:'An endocrine/hormonal condition or treatment is relevant',
  next:'NEXT',prev:'BACK',result:'SHOW MY ROUTE',restart:'START AGAIN',
  resultTitle:'YOUR BEAUTY ROUTE',resultLead:'We do not pick a single “winner”. The Finder builds roles into a routine, and partner commission is not part of ranking.',
  roles:{base:'1. BASE',targeted:'2. TARGETED STEP',extra:'3. EXTRA – ONLY IF YOU WANT IT'},
  why:'WHY THIS?',details:'DETAILED PROFILE',alternatives:'OTHER RELEVANT OPTIONS',
  empty:'We are not making an automatic product recommendation from these answers.',emptySub:'That is intentional: where the context is uncertain or safety-sensitive, the Finder should not guess.',
  deviceTitle:'The device module comes next',deviceText:'Device-level recommendations need model-specific contraindication checks. Until then, use the Beauty Tech guide to compare RF, LED, microcurrent and other technologies.',deviceCta:'BEAUTY TECH GUIDE',
  warnings:{AMBER:'Needs extra attention',GREEN:'Good fit'},education:{spf_first:'Consistent daytime sun protection is foundational for pigmentation care.',barrier_first:'With active irritation, barrier and comfort come first.',avoid_unnecessary_retinoid_stacking:'You already use a retinoid, so the Finder avoids adding another without need.'},reasons:{primary_goal_match:'matches your main goal',secondary_goal_match:'also fits additional goals',profile_match:'fits the profile you gave',routine_fit:'fits your preferred routine',retinoid_stack:'you already use a retinoid',sensitive_retinoid:'you marked sensitivity',verification_pending:'an important product detail still needs verification',eye_sensitivity:'eye sensitivity requires extra care',fragrance_sensitivity:'fragrance lowers priority for sensitive skin'}
 },
 de:{
  back:'Zurück zur Startseite',eyebrow:'BEAUTY BY ILDY · SMART JOURNEY',title:'FINDE, WAS ZU DIR PASST',
  lead:'Beantworte einige kurze Fragen. Der Finder ordnet passende Optionen nach Ziel, Routine und Sicherheitsaspekten.',
  start:'BEAUTY FINDER STARTEN',note:'Ca. 1–2 Minuten · kostenlos · ohne Anmeldung',privacy:'Die Antworten bleiben in dieser Version nur im Browser-State; sie werden nicht in die URL geschrieben und nicht zu einem Gesundheitsprofil zusammengeführt.',
  journey:'Wobei möchtest du Hilfe?',journeySub:'Wähle den Bereich, der dich jetzt am meisten interessiert.',
  journeys:{skin:['HAUTPFLEGE & SLOW-AGING','Falten, Festigkeit, Feuchtigkeit, Pigmentierung und Barriere.'],hair:['HAAR & KOPFHAUT','Haarlängen, Glättung, Kopfhaut und Pflege.'],wellness:['WELLNESS','Wellness-Produkte mit separatem Sicherheitsfilter.'],device:['BEAUTY-GERÄTE','LED, Mikrostrom, RF, Galvanic und weitere Technologien.']},
  goal:'Was ist dein wichtigstes Ziel?',goalSub:'Dies ist die Hauptpriorität des Finders.',
  profile:'Dein Profil',skinType:'Wie würdest du deine Haut beschreiben?',skinTypes:{dry:'Trocken',normal:'Normal',combination:'Mischhaut',oily:'Fettig',sensitive:'Sensibel / leicht reizbar'},
  routine:'Welche Routine möchtest du?',routineOptions:{essential:['ESSENTIAL','2–3 gut ausgewählte Schritte.'],balanced:['BALANCED','Wirksam, aber überschaubar.'],advanced:['ADVANCED','Eine komplexere Routine ist möglich.']},
  safety:'Kurzer Sicherheitscheck',safetySub:'Diese Antworten entscheiden nur, was nicht automatisch empfohlen werden sollte.',
  currentRetinoid:'Ich verwende Retinol / Retinal / ein anderes Retinoid',sensitive:'Meine Haut ist sensibel',irritated:'Meine Haut brennt, sticht, schuppt oder ist stark gereizt',prescription:'Ich verwende eine verschreibungspflichtige dermatologische Behandlung',pregnancy:'Ich bin schwanger / eine Schwangerschaft ist möglich',
  sunscreen:'Ich verwende regelmäßig Sonnenschutz',adult:'Ich bin 18 oder älter',medication:'Ich nehme regelmäßig Medikamente',wellnessPregnancy:'Ich bin schwanger oder stille',caffeine:'Ich meide / vertrage Koffein schlecht',hormonal:'Eine hormonelle/endokrine Erkrankung oder Behandlung ist relevant',
  next:'WEITER',prev:'ZURÜCK',result:'MEINE ROUTE ZEIGEN',restart:'NEU STARTEN',
  resultTitle:'DEINE BEAUTY-ROUTE',resultLead:'Wir wählen keinen einzelnen „Sieger“. Der Finder baut Rollen in eine Routine ein; Partnerprovisionen beeinflussen das Ranking nicht.',
  roles:{base:'1. BASIS',targeted:'2. GEZIELTER SCHRITT',extra:'3. EXTRA – NUR WENN DU MÖCHTEST'},
  why:'WARUM DIESES?',details:'DETAILPROFIL',alternatives:'WEITERE PASSENDE OPTIONEN',
  empty:'Aus diesen Antworten geben wir aktuell keine automatische Produktempfehlung.',emptySub:'Das ist bewusst so: Bei Unsicherheit oder erhöhtem Sicherheitsbedarf soll der Finder nicht raten.',
  deviceTitle:'Das Gerätemodul folgt als nächstes',deviceText:'Geräteempfehlungen brauchen modellbezogene Kontraindikationsprüfungen. Bis dahin kannst du im Beauty-Tech-Guide RF, LED, Mikrostrom und weitere Technologien vergleichen.',deviceCta:'BEAUTY-TECH-GUIDE',
  warnings:{AMBER:'Besondere Aufmerksamkeit',GREEN:'Gute Passung'},education:{spf_first:'Konsequenter Sonnenschutz ist die Basis bei Pigmentierung.',barrier_first:'Bei gereizter Haut stehen Barriere und Komfort zuerst.',avoid_unnecessary_retinoid_stacking:'Du verwendest bereits ein Retinoid; der Finder fügt nicht unnötig ein weiteres hinzu.'},reasons:{primary_goal_match:'passt zu deinem Hauptziel',secondary_goal_match:'passt auch zu weiteren Zielen',profile_match:'passt zu deinem Profil',routine_fit:'passt zur gewünschten Routine',retinoid_stack:'du verwendest bereits ein Retinoid',sensitive_retinoid:'du hast Sensibilität angegeben',verification_pending:'ein wichtiges Produktdetail muss noch verifiziert werden',eye_sensitivity:'sensible Augenpartie erfordert besondere Vorsicht',fragrance_sensitivity:'Duftstoffe senken die Priorität bei sensibler Haut'}
 }
};

const GOALS={
 skin:['firmness','lines','hydration','barrier','pigmentation','glow','texture','eye'],
 hair:['dry_hair','smoothing','shine','scalp_care'],
 wellness:['general_wellness','focus_support','womens_wellness','energy_support','relaxation_support']
};

function Toggle({active,onClick,children}){return <button type="button" className={'finderChoice '+(active?'active':'')} onClick={onClick}>{active&&<Check size={16}/>}<span>{children}</span></button>}

function ProductResult({item,t,lang}){
 const why=item.reasons.filter(x=>t.reasons[x]).slice(0,3);
 return <article className="finderResultCard">
  <div className="finderResultTop"><div><small>{item.product.brand}</small><h3>{item.product.name}</h3></div><span className={'finderStatus '+item.status.toLowerCase()}>{t.warnings[item.status]}</span></div>
  <p className="finderWhy"><strong>{t.why}</strong> {why.map(x=>t.reasons[x]).join(' · ')||t.reasons.profile_match}</p>
  <div className="finderIngredients">{item.product.ingredients.slice(0,4).map(x=><span key={x}>{x}</span>)}</div>
  <a className="finderLink" href={'#product-'+item.product.slug}>{t.details}<ArrowRight size={14}/></a>
 </article>
}

export function BeautyFinder({lang='hu'}){
 const t=C[lang]||C.hu;
 const [started,setStarted]=useState(false),[step,setStep]=useState(0),[showResult,setShowResult]=useState(false);
 const [a,setA]=useState({journey:null,primaryGoal:null,secondaryGoals:[],skinType:null,routineLevel:'balanced',currentRetinoid:false,sensitive:false,irritated:false,prescription:false,pregnancy:false,sunscreen:false,adult:true,medication:false,wellnessPregnancy:false,caffeineSensitive:false,hormonalConcern:false,eyeSensitive:false,multipleAcids:false});
 const goals=a.journey&&GOALS[a.journey]?GOALS[a.journey]:[];
 const results=useMemo(()=>showResult?recommend(products,a):null,[showResult,a]);
 const maxStep=a.journey==='device'?0:3;
 const canNext=step===0?!!a.journey:step===1?!!a.primaryGoal:step===2?(a.journey==='skin'?!!a.skinType:true):true;
 const patch=(x)=>setA(v=>({...v,...x}));
 const restart=()=>{setStarted(false);setStep(0);setShowResult(false);setA({journey:null,primaryGoal:null,secondaryGoals:[],skinType:null,routineLevel:'balanced',currentRetinoid:false,sensitive:false,irritated:false,prescription:false,pregnancy:false,sunscreen:false,adult:true,medication:false,wellnessPregnancy:false,caffeineSensitive:false,hormonalConcern:false,eyeSensitive:false,multipleAcids:false})};

 if(!started)return <main className="finderPage"><section className="finderHero"><a href="#top" className="finderBack"><ArrowLeft size={14}/>{t.back}</a><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.lead}</p><button className="finderPrimary" onClick={()=>setStarted(true)}>{t.start}<ArrowRight size={16}/></button><small>{t.note}</small><div className="finderPrivacy"><ShieldCheck size={18}/><span>{t.privacy}</span></div></section></main>;

 if(showResult){
  if(a.journey==='device')return <main className="finderPage"><section className="finderResultHero"><p className="eyebrow">{t.eyebrow}</p><h1>{t.deviceTitle}</h1><p>{t.deviceText}</p><a className="finderPrimary" href="#beauty-tech-guide">{t.deviceCta}<ArrowRight size={16}/></a><button className="finderGhost" onClick={restart}><RotateCcw size={15}/>{t.restart}</button></section></main>;
  return <main className="finderPage">
   <section className="finderResultHero"><p className="eyebrow">{t.eyebrow}</p><h1>{t.resultTitle}</h1><p>{t.resultLead}</p><button className="finderGhost" onClick={restart}><RotateCcw size={15}/>{t.restart}</button></section>
   <section className="finderResults">
    {results?.education?.map(x=><div className="finderEducation" key={x}><Info size={18}/><span>{t.education[x]}</span></div>)}
    {results?.primary?.length?results.primary.map(item=><div className="finderRole" key={item.product.slug}><h2>{t.roles[item.recommendationRole]}</h2><ProductResult item={item} t={t} lang={lang}/></div>):<div className="finderEmpty"><ShieldCheck size={28}/><h2>{t.empty}</h2><p>{t.emptySub}</p></div>}
    {!!results?.alternatives?.length&&<div className="finderAlt"><h2>{t.alternatives}</h2><div className="finderAltGrid">{results.alternatives.map(item=><ProductResult key={item.product.slug} item={item} t={t} lang={lang}/>)}</div></div>}
   </section>
  </main>
 }

 return <main className="finderPage"><section className="finderFlow">
  <div className="finderProgress"><span style={{width:((step+1)/(maxStep+1))*100+'%'}}></span></div>
  {step===0&&<><p className="eyebrow">{t.eyebrow}</p><h1>{t.journey}</h1><p className="finderSub">{t.journeySub}</p><div className="finderJourneyGrid">{Object.entries(t.journeys).map(([key,v])=><button key={key} className={'finderJourney '+(a.journey===key?'active':'')} onClick={()=>patch({journey:key,primaryGoal:null})}><Sparkles size={20}/><strong>{v[0]}</strong><span>{v[1]}</span></button>)}</div></>}
  {step===1&&<><h1>{t.goal}</h1><p className="finderSub">{t.goalSub}</p><div className="finderChoiceGrid">{goals.map(g=><Toggle key={g} active={a.primaryGoal===g} onClick={()=>patch({primaryGoal:g})}>{goalLabels[lang]?.[g]||g}</Toggle>)}</div></>}
  {step===2&&a.journey==='skin'&&<><h1>{t.skinType}</h1><div className="finderChoiceGrid">{Object.entries(t.skinTypes).map(([k,v])=><Toggle key={k} active={a.skinType===k} onClick={()=>patch({skinType:k,sensitive:k==='sensitive'||a.sensitive})}>{v}</Toggle>)}</div><h2 className="finderMiniTitle">{t.routine}</h2><div className="finderJourneyGrid three">{Object.entries(t.routineOptions).map(([k,v])=><button key={k} className={'finderJourney '+(a.routineLevel===k?'active':'')} onClick={()=>patch({routineLevel:k})}><strong>{v[0]}</strong><span>{v[1]}</span></button>)}</div></>}
  {step===2&&a.journey==='hair'&&<><h1>{t.routine}</h1><div className="finderJourneyGrid three">{Object.entries(t.routineOptions).map(([k,v])=><button key={k} className={'finderJourney '+(a.routineLevel===k?'active':'')} onClick={()=>patch({routineLevel:k})}><strong>{v[0]}</strong><span>{v[1]}</span></button>)}</div></>}
  {step===2&&a.journey==='wellness'&&<><h1>{t.safety}</h1><p className="finderSub">{t.safetySub}</p><div className="finderCheckList"><label><input type="checkbox" checked={a.adult} onChange={e=>patch({adult:e.target.checked})}/>{t.adult}</label><label><input type="checkbox" checked={a.medication} onChange={e=>patch({medication:e.target.checked})}/>{t.medication}</label><label><input type="checkbox" checked={a.wellnessPregnancy} onChange={e=>patch({wellnessPregnancy:e.target.checked})}/>{t.wellnessPregnancy}</label><label><input type="checkbox" checked={a.caffeineSensitive} onChange={e=>patch({caffeineSensitive:e.target.checked})}/>{t.caffeine}</label><label><input type="checkbox" checked={a.hormonalConcern} onChange={e=>patch({hormonalConcern:e.target.checked})}/>{t.hormonal}</label></div></>}
  {step===3&&a.journey==='skin'&&<><h1>{t.safety}</h1><p className="finderSub">{t.safetySub}</p><div className="finderCheckList"><label><input type="checkbox" checked={a.currentRetinoid} onChange={e=>patch({currentRetinoid:e.target.checked})}/>{t.currentRetinoid}</label><label><input type="checkbox" checked={a.sensitive} onChange={e=>patch({sensitive:e.target.checked})}/>{t.sensitive}</label><label><input type="checkbox" checked={a.irritated} onChange={e=>patch({irritated:e.target.checked})}/>{t.irritated}</label><label><input type="checkbox" checked={a.prescription} onChange={e=>patch({prescription:e.target.checked})}/>{t.prescription}</label><label><input type="checkbox" checked={a.pregnancy} onChange={e=>patch({pregnancy:e.target.checked})}/>{t.pregnancy}</label>{a.primaryGoal==='pigmentation'&&<label><input type="checkbox" checked={a.sunscreen} onChange={e=>patch({sunscreen:e.target.checked})}/>{t.sunscreen}</label>}</div></>}
  {step===3&&a.journey==='hair'&&<><h1>{t.safety}</h1><p className="finderSub">{t.safetySub}</p><div className="finderPrivacy"><ShieldCheck size={18}/><span>{t.privacy}</span></div></>}
  <div className="finderActions">{step>0?<button className="finderGhost" onClick={()=>setStep(x=>x-1)}><ArrowLeft size={15}/>{t.prev}</button>:<a className="finderGhost" href="#top"><ArrowLeft size={15}/>{t.back}</a>}{step<maxStep?<button className="finderPrimary" disabled={!canNext} onClick={()=>a.journey==='device'?setShowResult(true):setStep(x=>x+1)}>{t.next}<ArrowRight size={15}/></button>:<button className="finderPrimary" disabled={!canNext} onClick={()=>setShowResult(true)}>{t.result}<ArrowRight size={15}/></button>}</div>
 </section></main>
}
