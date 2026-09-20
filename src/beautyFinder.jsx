import React,{useMemo,useState} from 'react';
import {ArrowLeft,ArrowRight,Check,Info,RotateCcw,ShieldCheck,Sparkles} from 'lucide-react';
import {products,localIngredient} from './products.jsx';
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
  goal:'Mi a legfontosabb célod?',goalSub:'Ezt tekinti a Finder elsődleges prioritásnak.',secondaryGoal:'Van még másik fontos célod?',secondaryGoalSub:'Opcionális. Legfeljebb kettőt jelölj meg.',price:'Melyik szempont fontosabb?',priceOptions:{best:['BEST MATCH','Elsősorban azt mutasd, ami a legjobban illik hozzám.'],smart:['SMART','A jó ár–érték arány fontos.'],premium:['PREMIUM','A prémium opciók is érdekelnek.']},
  profile:'Milyen a profilod?',skinType:'Milyennek érzed általában a bőrödet?',age:'Melyik korosztályba tartozol?',ageSub:'Opcionális. Az életkor önmagában nem dönt el ajánlást.',ageBands:{'20-29':'20–29','30-39':'30–39','40-49':'40–49','50-59':'50–59','60+':'60+','skip':'Inkább nem adom meg'},skinTypes:{dry:'Száraz',normal:'Normál',combination:'Kombinált',oily:'Zsíros',sensitive:'Érzékeny / könnyen irritálódik'},
  routine:'Milyen rutint szeretnél?',routineOptions:{essential:['ESSENTIAL','2–3 jól megválasztott lépés.'],balanced:['BALANCED','Hatékony, de kezelhető rutin.'],advanced:['ADVANCED','Komplexebb rutin és több aktív is szóba jöhet.']},
  safety:'Rövid biztonsági ellenőrzés',safetySub:'Ezek a válaszok csak azt döntik el, mit ne tegyünk automatikusan az ajánlások közé.',
  currentRetinoid:'Használok retinolt / retinalt / retinoidot',multipleAcids:'Többféle AHA/BHA/PHA hámlasztót használok',sensitive:'A bőröm érzékeny',eyeSensitive:'A szemkörnyékem különösen érzékeny',irritated:'Most csíp, ég, hámlik vagy erősen irritált',prescription:'Bőrgyógyász által felírt kezelést használok',pregnancy:'Várandós vagyok / fennállhat terhesség',
  sunscreen:'Rendszeresen használok fényvédőt',adult:'18 éves vagy idősebb vagy?',yes:'IGEN',no:'NEM',medication:'Rendszeresen szedek gyógyszert',wellnessPregnancy:'Várandós vagyok vagy szoptatok',caffeine:'Kerülöm / rosszul tolerálom a koffeint',hormonal:'Hormonális/endokrin betegség vagy kezelés érint',
  next:'TOVÁBB',prev:'VISSZA',result:'MUTASD AZ ÚTVONALAMAT',restart:'ÚJRAKEZDEM',modify:'VÁLASZAIM MÓDOSÍTÁSA',
  resultTitle:'A TE BEAUTY ÚTVONALAD',resultLead:'Nem egy „nyertes” terméket választunk. A Finder szerepek szerint épít rutint, és a partneri jutalék nem része a rangsorolásnak.',summaryTitle:'A VÁLASZAID RÖVIDEN',summary:{journey:'Terület',primary:'Fő cél',secondary:'További célok',skin:'Bőrprofil',age:'Korosztály',routine:'Rutin',price:'Preferencia',safety:'Figyelembe vett szempontok'},noExtra:'MOST NEM SZÜKSÉGES EXTRA LÉPÉS',noExtraText:'A válaszaid alapján nem látunk olyan kiegészítő lépést, amely érdemben javítaná a rutint.',recoveryTitle:'MOST NEM ÚJ AKTÍV A PRIORITÁS',recoveryText:'Az irritáció és a jelenlegi kezelés/aktívhasználat együtt azt jelzi, hogy most a barrier és a komfort az első. A Finder ezért nem épít mellé automatikusan új célzott vagy extra aktív lépést.',whyNotTitle:'MIÉRT NEM KERÜLT ELŐRÉBB?',whyNotLead:'Ezek a termékek relevánsak lehetnek a célodhoz, de a megadott biztonsági vagy tolerálhatósági szempontok miatt nem kerültek a fő ajánlások közé.',disclaimer:'A Beauty Finder kozmetikai és wellness tájékoztató eszköz, nem diagnózis és nem helyettesít orvosi vagy gyógyszerészi tanácsot.',
  roles:{base:'1. ALAP',targeted:'2. CÉLZOTT LÉPÉS',extra:'3. EXTRA – CSAK HA SZERETNÉD'},
  why:'MIÉRT EZT?',details:'RÉSZLETES ADATLAP',alternatives:'TOVÁBBI RELEVÁNS LEHETŐSÉGEK',
  empty:'A megadott válaszok alapján most nem adunk automatikus termékajánlást.',emptySub:'Ez tudatos eredmény: bizonytalan vagy biztonsági szempontból összetettebb helyzetben inkább nem találunk ki választ.',emptySafety:'A megadott biztonsági válaszok miatt a releváns termékek közül egyik sem maradt olyan, amelyet automatikusan jó szívvel előre tennénk.',
  deviceTitle:'A készülékág következő modulja',deviceText:'A technológiai célod alapján később külön készülék-szintű ellenjavallat-ellenőrzést végzünk. Addig a Beauty Tech útmutatóban hasonlíthatod össze az RF, LED, mikroáram és más technológiákat.',deviceCta:'BEAUTY TECH ÚTMUTATÓ',
  warnings:{AMBER:'Külön figyelmet igényel',GREEN:'Jó illeszkedés'},confidence:{high:'Nagyon jól illeszkedik',good:'Jó lehetőség',explore:'Érdemes megismerni'},attention:'FONTOS TUDNI',
  education:{spf_first:'Pigmentációs cél mellett a következetes nappali fényvédelem az alap.',barrier_first:'Irritált bőrnél most a barrier és a komfort kerül előre.',avoid_unnecessary_retinoid_stacking:'Már használsz retinoidot, ezért nem adunk hozzá szükségtelenül újabbat.'},
  whyNotReasons:{pregnancy_retinoid:'retinoidot tartalmaz, és várandósságot jelöltél',prescription_active:'vényköteles bőrgyógyászati kezelés mellett nem adunk automatikusan új erős aktívot',irritated_retinoid:'irritált bőrnél most nem javaslunk új retinoidot',retinoid_stack_sensitive:'már használsz retinoidot és érzékenységet is jelöltél',active_overload:'több erős aktív és irritáció együtt túl nagy terhelést jelenthet',under_18_supplement:'18 év alatt nem adunk automatikus étrend-kiegészítő ajánlást',pregnancy_supplement:'várandósság/szoptatás mellett nem adunk automatikus étrend-kiegészítő ajánlást',caffeine_avoidance:'koffeint szeretnél kerülni',herbal_hormonal_context:'a gyógyszeres vagy hormonális/endokrin helyzet miatt nem automatizáljuk ezt az ajánlást'},reasons:{primary_goal_match:'egyezik a fő céloddal',secondary_goal_match:'további céljaidhoz is illeszkedik',profile_match:'illeszkedik a megadott profilhoz',routine_fit:'belefér a választott rutinba',retinoid_stack:'már használsz retinoidot',sensitive_retinoid:'érzékenységet jelöltél',verification_pending:'egy fontos termékadat még utóellenőrzést igényel',eye_sensitivity:'érzékeny szemkörnyék esetén óvatosság kell',fragrance_sensitivity:'érzékeny bőrnél az illatanyag miatt óvatosabb besorolást kap',mechanical_irritation:'érzékeny bőrnél a mechanikai dörzsölés irritálhat',medication_interaction_check:'gyógyszerszedés mellett külön interakció-ellenőrzés szükséges',partner_link_ignored_for_ranking:'a partnerkapcsolat nem befolyásolta a rangsort'}
 },
 en:{
  back:'Back to home',eyebrow:'BEAUTY BY ILDY · SMART JOURNEY',title:'FIND WHAT FITS YOU',
  lead:'Answer a few short questions. The Finder organises relevant options around your goals, routine and safety context.',
  start:'START BEAUTY FINDER',note:'About 1–2 minutes · free · no sign-up',privacy:'Answers stay in browser state in this version; they are not placed in the URL or used to create a health profile.',
  journey:'What would you like help with?',journeySub:'Choose the area that matters most right now.',
  journeys:{skin:['SKINCARE & SLOW-AGING','Lines, firmness, hydration, pigmentation and barrier.'],hair:['HAIR & SCALP','Lengths, smoothing, scalp and conditioning.'],wellness:['WELLNESS','Wellness products with a separate safety gate.'],device:['BEAUTY DEVICES','LED, microcurrent, RF, galvanic and other at-home technologies.']},
  goal:'What is your main goal?',goalSub:'The Finder uses this as the primary priority.',secondaryGoal:'Do you have another important goal?',secondaryGoalSub:'Optional. Choose up to two.',price:'What matters more to you?',priceOptions:{best:['BEST MATCH','Show what fits me best first.'],smart:['SMART','Good value matters.'],premium:['PREMIUM','I am open to premium options.']},
  profile:'Your profile',skinType:'How would you describe your skin?',age:'Which age group are you in?',ageSub:'Optional. Age alone never determines a recommendation.',ageBands:{'20-29':'20–29','30-39':'30–39','40-49':'40–49','50-59':'50–59','60+':'60+','skip':'Prefer not to say'},skinTypes:{dry:'Dry',normal:'Normal',combination:'Combination',oily:'Oily',sensitive:'Sensitive / easily irritated'},
  routine:'What kind of routine do you want?',routineOptions:{essential:['ESSENTIAL','2–3 well-chosen steps.'],balanced:['BALANCED','Effective but manageable.'],advanced:['ADVANCED','A more complex routine can be considered.']},
  safety:'Quick safety check',safetySub:'These answers only help decide what should not be automatically recommended.',
  currentRetinoid:'I use retinol / retinal / another retinoid',multipleAcids:'I use several AHA/BHA/PHA exfoliants',sensitive:'My skin is sensitive',eyeSensitive:'My eye area is especially sensitive',irritated:'My skin is currently burning, stinging, peeling or very irritated',prescription:'I use prescription dermatology treatment',pregnancy:'I am pregnant / pregnancy may be possible',
  sunscreen:'I regularly use sunscreen',adult:'Are you 18 or older?',yes:'YES',no:'NO',medication:'I regularly take medication',wellnessPregnancy:'I am pregnant or breastfeeding',caffeine:'I avoid / poorly tolerate caffeine',hormonal:'An endocrine/hormonal condition or treatment is relevant',
  next:'NEXT',prev:'BACK',result:'SHOW MY ROUTE',restart:'START AGAIN',modify:'EDIT MY ANSWERS',
  resultTitle:'YOUR BEAUTY ROUTE',resultLead:'We do not pick a single “winner”. The Finder builds roles into a routine, and partner commission is not part of ranking.',summaryTitle:'YOUR ANSWERS AT A GLANCE',summary:{journey:'Area',primary:'Main goal',secondary:'Other goals',skin:'Skin profile',age:'Age group',routine:'Routine',price:'Preference',safety:'Factors considered'},noExtra:'NO EXTRA STEP NEEDED RIGHT NOW',noExtraText:'Based on your answers, we do not see an additional step that meaningfully improves the routine.',recoveryTitle:'A NEW ACTIVE IS NOT THE PRIORITY RIGHT NOW',recoveryText:'Active irritation together with current treatment or active use makes barrier support and comfort the priority. The Finder therefore does not automatically add a new targeted or extra active step.',whyNotTitle:'WHY WASN’T THIS PRIORITISED?',whyNotLead:'These products may relate to your goal, but your safety or tolerance answers kept them out of the main recommendations.',disclaimer:'Beauty Finder is a cosmetic and wellness information tool, not a diagnosis and not a substitute for medical or pharmacist advice.',
  roles:{base:'1. BASE',targeted:'2. TARGETED STEP',extra:'3. EXTRA – ONLY IF YOU WANT IT'},
  why:'WHY THIS?',details:'DETAILED PROFILE',alternatives:'OTHER RELEVANT OPTIONS',
  empty:'We are not making an automatic product recommendation from these answers.',emptySub:'That is intentional: where the context is uncertain or safety-sensitive, the Finder should not guess.',emptySafety:'Your safety answers removed all relevant products from automatic recommendation.',
  deviceTitle:'The device module comes next',deviceText:'Device-level recommendations need model-specific contraindication checks. Until then, use the Beauty Tech guide to compare RF, LED, microcurrent and other technologies.',deviceCta:'BEAUTY TECH GUIDE',
  warnings:{AMBER:'Needs extra attention',GREEN:'Good fit'},confidence:{high:'Very strong fit',good:'Good option',explore:'Worth exploring'},attention:'IMPORTANT TO KNOW',education:{spf_first:'Consistent daytime sun protection is foundational for pigmentation care.',barrier_first:'With active irritation, barrier and comfort come first.',avoid_unnecessary_retinoid_stacking:'You already use a retinoid, so the Finder avoids adding another without need.'},whyNotReasons:{pregnancy_retinoid:'it contains a retinoid and pregnancy was indicated',prescription_active:'we do not automatically add another strong active alongside prescription dermatology treatment',irritated_retinoid:'we do not add a new retinoid to actively irritated skin',retinoid_stack_sensitive:'you already use a retinoid and also marked sensitivity',active_overload:'multiple strong actives plus irritation may create excessive load',under_18_supplement:'we do not automatically recommend supplements under 18',pregnancy_supplement:'we do not automatically recommend supplements during pregnancy or breastfeeding',caffeine_avoidance:'you prefer to avoid caffeine',herbal_hormonal_context:'the medication or endocrine/hormonal context makes automated recommendation inappropriate'},reasons:{primary_goal_match:'matches your main goal',secondary_goal_match:'also fits additional goals',profile_match:'fits the profile you gave',routine_fit:'fits your preferred routine',retinoid_stack:'you already use a retinoid',sensitive_retinoid:'you marked sensitivity',verification_pending:'an important product detail still needs verification',eye_sensitivity:'eye sensitivity requires extra care',fragrance_sensitivity:'fragrance lowers priority for sensitive skin',mechanical_irritation:'mechanical wiping may irritate sensitive skin',medication_interaction_check:'medication use requires a separate interaction check',partner_link_ignored_for_ranking:'partner status did not influence ranking'}
 },
 de:{
  back:'Zurück zur Startseite',eyebrow:'BEAUTY BY ILDY · SMART JOURNEY',title:'FINDE, WAS ZU DIR PASST',
  lead:'Beantworte einige kurze Fragen. Der Finder ordnet passende Optionen nach Ziel, Routine und Sicherheitsaspekten.',
  start:'BEAUTY FINDER STARTEN',note:'Ca. 1–2 Minuten · kostenlos · ohne Anmeldung',privacy:'Die Antworten bleiben in dieser Version nur im Browser-State; sie werden nicht in die URL geschrieben und nicht zu einem Gesundheitsprofil zusammengeführt.',
  journey:'Wobei möchtest du Hilfe?',journeySub:'Wähle den Bereich, der dich jetzt am meisten interessiert.',
  journeys:{skin:['HAUTPFLEGE & SLOW-AGING','Falten, Festigkeit, Feuchtigkeit, Pigmentierung und Barriere.'],hair:['HAAR & KOPFHAUT','Haarlängen, Glättung, Kopfhaut und Pflege.'],wellness:['WELLNESS','Wellness-Produkte mit separatem Sicherheitsfilter.'],device:['BEAUTY-GERÄTE','LED, Mikrostrom, RF, Galvanic und weitere Technologien.']},
  goal:'Was ist dein wichtigstes Ziel?',goalSub:'Dies ist die Hauptpriorität des Finders.',secondaryGoal:'Gibt es noch ein weiteres wichtiges Ziel?',secondaryGoalSub:'Optional. Wähle höchstens zwei.',price:'Was ist dir wichtiger?',priceOptions:{best:['BEST MATCH','Zeige zuerst, was am besten zu mir passt.'],smart:['SMART','Ein gutes Preis-Leistungs-Verhältnis ist wichtig.'],premium:['PREMIUM','Premium-Optionen kommen ebenfalls infrage.']},
  profile:'Dein Profil',skinType:'Wie würdest du deine Haut beschreiben?',age:'Zu welcher Altersgruppe gehörst du?',ageSub:'Optional. Das Alter allein entscheidet nie über eine Empfehlung.',ageBands:{'20-29':'20–29','30-39':'30–39','40-49':'40–49','50-59':'50–59','60+':'60+','skip':'Möchte ich nicht angeben'},skinTypes:{dry:'Trocken',normal:'Normal',combination:'Mischhaut',oily:'Fettig',sensitive:'Sensibel / leicht reizbar'},
  routine:'Welche Routine möchtest du?',routineOptions:{essential:['ESSENTIAL','2–3 gut ausgewählte Schritte.'],balanced:['BALANCED','Wirksam, aber überschaubar.'],advanced:['ADVANCED','Eine komplexere Routine ist möglich.']},
  safety:'Kurzer Sicherheitscheck',safetySub:'Diese Antworten entscheiden nur, was nicht automatisch empfohlen werden sollte.',
  currentRetinoid:'Ich verwende Retinol / Retinal / ein anderes Retinoid',multipleAcids:'Ich verwende mehrere AHA/BHA/PHA-Peelings',sensitive:'Meine Haut ist sensibel',eyeSensitive:'Meine Augenpartie ist besonders sensibel',irritated:'Meine Haut brennt, sticht, schuppt oder ist stark gereizt',prescription:'Ich verwende eine verschreibungspflichtige dermatologische Behandlung',pregnancy:'Ich bin schwanger / eine Schwangerschaft ist möglich',
  sunscreen:'Ich verwende regelmäßig Sonnenschutz',adult:'Bist du 18 oder älter?',yes:'JA',no:'NEIN',medication:'Ich nehme regelmäßig Medikamente',wellnessPregnancy:'Ich bin schwanger oder stille',caffeine:'Ich meide / vertrage Koffein schlecht',hormonal:'Eine hormonelle/endokrine Erkrankung oder Behandlung ist relevant',
  next:'WEITER',prev:'ZURÜCK',result:'MEINE ROUTE ZEIGEN',restart:'NEU STARTEN',modify:'ANTWORTEN ÄNDERN',
  resultTitle:'DEINE BEAUTY-ROUTE',resultLead:'Wir wählen keinen einzelnen „Sieger“. Der Finder baut Rollen in eine Routine ein; Partnerprovisionen beeinflussen das Ranking nicht.',summaryTitle:'DEINE ANTWORTEN AUF EINEN BLICK',summary:{journey:'Bereich',primary:'Hauptziel',secondary:'Weitere Ziele',skin:'Hautprofil',age:'Altersgruppe',routine:'Routine',price:'Präferenz',safety:'Berücksichtigte Punkte'},noExtra:'AKTUELL IST KEIN EXTRA-SCHRITT NÖTIG',noExtraText:'Aus deinen Antworten ergibt sich derzeit kein zusätzlicher Schritt mit klarem Mehrwert.',recoveryTitle:'EIN NEUER WIRKSTOFF IST AKTUELL NICHT DIE PRIORITÄT',recoveryText:'Aktive Reizung zusammen mit bestehender Behandlung oder Wirkstoffnutzung macht Barriere und Komfort zur Priorität. Der Finder ergänzt deshalb nicht automatisch einen neuen gezielten oder zusätzlichen Wirkstoffschritt.',whyNotTitle:'WARUM NICHT WEITER VORN?',whyNotLead:'Diese Produkte können zu deinem Ziel passen, wurden aber aufgrund deiner Sicherheits- oder Verträglichkeitsangaben nicht priorisiert.',disclaimer:'Der Beauty Finder ist ein kosmetisches und Wellness-Informationswerkzeug, keine Diagnose und kein Ersatz für ärztlichen oder pharmazeutischen Rat.',
  roles:{base:'1. BASIS',targeted:'2. GEZIELTER SCHRITT',extra:'3. EXTRA – NUR WENN DU MÖCHTEST'},
  why:'WARUM DIESES?',details:'DETAILPROFIL',alternatives:'WEITERE PASSENDE OPTIONEN',
  empty:'Aus diesen Antworten geben wir aktuell keine automatische Produktempfehlung.',emptySub:'Das ist bewusst so: Bei Unsicherheit oder erhöhtem Sicherheitsbedarf soll der Finder nicht raten.',emptySafety:'Aufgrund deiner Sicherheitsangaben bleibt aktuell kein relevantes Produkt für eine automatische Empfehlung übrig.',
  deviceTitle:'Das Gerätemodul folgt als nächstes',deviceText:'Geräteempfehlungen brauchen modellbezogene Kontraindikationsprüfungen. Bis dahin kannst du im Beauty-Tech-Guide RF, LED, Mikrostrom und weitere Technologien vergleichen.',deviceCta:'BEAUTY-TECH-GUIDE',
  warnings:{AMBER:'Besondere Aufmerksamkeit',GREEN:'Gute Passung'},confidence:{high:'Sehr gute Passung',good:'Gute Option',explore:'Kennenlernen lohnt sich'},attention:'WICHTIG ZU WISSEN',education:{spf_first:'Konsequenter Sonnenschutz ist die Basis bei Pigmentierung.',barrier_first:'Bei gereizter Haut stehen Barriere und Komfort zuerst.',avoid_unnecessary_retinoid_stacking:'Du verwendest bereits ein Retinoid; der Finder fügt nicht unnötig ein weiteres hinzu.'},whyNotReasons:{pregnancy_retinoid:'es enthält ein Retinoid und du hast eine Schwangerschaft angegeben',prescription_active:'zu einer verschreibungspflichtigen dermatologischen Behandlung fügen wir nicht automatisch einen weiteren starken Wirkstoff hinzu',irritated_retinoid:'bei aktuell gereizter Haut wird kein neues Retinoid automatisch empfohlen',retinoid_stack_sensitive:'du verwendest bereits ein Retinoid und hast Sensibilität angegeben',active_overload:'mehrere starke Wirkstoffe plus Reizung können die Haut zu stark belasten',under_18_supplement:'unter 18 empfehlen wir Nahrungsergänzung nicht automatisch',pregnancy_supplement:'in Schwangerschaft oder Stillzeit empfehlen wir Nahrungsergänzung nicht automatisch',caffeine_avoidance:'du möchtest Koffein vermeiden',herbal_hormonal_context:'bei Medikamenten oder hormonellem/endokrinem Kontext automatisieren wir diese Empfehlung nicht'},reasons:{primary_goal_match:'passt zu deinem Hauptziel',secondary_goal_match:'passt auch zu weiteren Zielen',profile_match:'passt zu deinem Profil',routine_fit:'passt zur gewünschten Routine',retinoid_stack:'du verwendest bereits ein Retinoid',sensitive_retinoid:'du hast Sensibilität angegeben',verification_pending:'ein wichtiges Produktdetail muss noch verifiziert werden',eye_sensitivity:'sensible Augenpartie erfordert besondere Vorsicht',fragrance_sensitivity:'Duftstoffe senken die Priorität bei sensibler Haut',mechanical_irritation:'mechanisches Wischen kann sensible Haut reizen',medication_interaction_check:'bei Medikamenteneinnahme ist eine separate Interaktionsprüfung nötig',partner_link_ignored_for_ranking:'eine Partnerbeziehung hat das Ranking nicht beeinflusst'}
 }
};

const GOALS={
 skin:['firmness','lines','hydration','barrier','pigmentation','glow','texture','eye'],
 hair:['dry_hair','smoothing','shine','scalp_care'],
 wellness:['general_wellness','focus_support','womens_wellness','energy_support','relaxation_support']
};

function Toggle({active,onClick,children}){return <button type="button" aria-pressed={active} className={'finderChoice '+(active?'active':'')} onClick={onClick}>{active&&<Check size={16}/>}<span>{children}</span></button>}

function AnswerSummary({a,t,lang}){
 const journey=t.journeys[a.journey]?.[0]||a.journey;
 const primary=goalLabels[lang]?.[a.primaryGoal]||a.primaryGoal;
 const secondary=(a.secondaryGoals||[]).map(x=>goalLabels[lang]?.[x]||x).join(' · ');
 const skin=a.skinType?t.skinTypes[a.skinType]:null;
 const age=a.ageBand?t.ageBands[a.ageBand]:null;
 const routine=t.routineOptions[a.routineLevel]?.[0]||a.routineLevel;
 const priceKey=a.pricePreference==='best-match'?'best':a.pricePreference;
 const price=t.priceOptions?.[priceKey]?.[0]||a.pricePreference;
 const safety=[];
 if(a.currentRetinoid)safety.push(t.currentRetinoid);
 if(a.multipleAcids)safety.push(t.multipleAcids);
 if(a.sensitive)safety.push(t.sensitive);
 if(a.eyeSensitive)safety.push(t.eyeSensitive);
 if(a.irritated)safety.push(t.irritated);
 if(a.prescription)safety.push(t.prescription);
 if(a.pregnancy)safety.push(t.pregnancy);
 if(a.caffeineSensitive)safety.push(t.caffeine);
 if(a.medication)safety.push(t.medication);
 if(a.wellnessPregnancy)safety.push(t.wellnessPregnancy);
 if(a.hormonalConcern)safety.push(t.hormonal);
 return <section className="finderSummary"><h2>{t.summaryTitle}</h2><div className="finderSummaryGrid">
  <div><span>{t.summary.journey}</span><strong>{journey}</strong></div>
  <div><span>{t.summary.primary}</span><strong>{primary}</strong></div>
  {!!secondary&&<div><span>{t.summary.secondary}</span><strong>{secondary}</strong></div>}
  {!!skin&&<div><span>{t.summary.skin}</span><strong>{skin}</strong></div>}
  {!!age&&a.ageBand!=='skip'&&<div><span>{t.summary.age}</span><strong>{age}</strong></div>}
  {a.journey!=='wellness'&&<div><span>{t.summary.routine}</span><strong>{routine}</strong></div>}
  {a.journey!=='wellness'&&<div><span>{t.summary.price}</span><strong>{price}</strong></div>}
  {!!safety.length&&<div className="wide"><span>{t.summary.safety}</span><strong>{safety.join(' · ')}</strong></div>}
 </div></section>
}

function WhyNot({items,t}){
 if(!items?.length)return null;
 return <section className="finderWhyNot"><h2>{t.whyNotTitle}</h2><p>{t.whyNotLead}</p><div className="finderWhyNotGrid">{items.map(item=><article key={item.product.slug}><small>{item.product.brand}</small><h3>{item.product.name}</h3><p>{item.reasons.map(x=>t.whyNotReasons?.[x]).filter(Boolean).join(' · ')}</p><a href={'#product-'+item.product.slug}>{t.details}<ArrowRight size={14}/></a></article>)}</div></section>
}

function ProductResult({item,t,lang}){
 const why=item.reasons.filter(x=>t.reasons[x]&&!['partner_link_ignored_for_ranking','medication_interaction_check','verification_pending','eye_sensitivity','fragrance_sensitivity','mechanical_irritation'].includes(x)).slice(0,3);
 const cautions=item.reasons.filter(x=>['medication_interaction_check','verification_pending','eye_sensitivity','fragrance_sensitivity','mechanical_irritation','retinoid_stack','sensitive_retinoid'].includes(x)&&t.reasons[x]).slice(0,2);
 const confidence=item.score>=70?'high':item.score>=45?'good':'explore';
 return <article className="finderResultCard">
  <div className="finderResultTop"><div><small>{item.product.brand}</small><h3>{item.product.name}</h3></div><div className="finderResultBadges"><span className="finderConfidence">{t.confidence[confidence]}</span><span className={'finderStatus '+item.status.toLowerCase()}>{t.warnings[item.status]}</span></div></div>
  <p className="finderWhy"><strong>{t.why}</strong> {why.map(x=>t.reasons[x]).join(' · ')||t.reasons.profile_match}</p>
  {!!cautions.length&&<div className="finderCaution"><strong>{t.attention}</strong><span>{cautions.map(x=>t.reasons[x]).join(' · ')}</span></div>}
  <div className="finderIngredients">{item.product.ingredients.slice(0,4).map(x=><span key={x}>{localIngredient(x,lang)}</span>)}</div>
  <a className="finderLink" href={'#product-'+item.product.slug}>{t.details}<ArrowRight size={14}/></a>
 </article>
}

export function BeautyFinder({lang='hu'}){
 const t=C[lang]||C.hu;
 const [started,setStarted]=useState(false),[step,setStep]=useState(0),[showResult,setShowResult]=useState(false);
 const [a,setA]=useState({journey:null,primaryGoal:null,secondaryGoals:[],skinType:null,ageBand:null,routineLevel:'balanced',pricePreference:'best-match',currentRetinoid:false,sensitive:false,irritated:false,prescription:false,pregnancy:false,sunscreen:false,adult:null,medication:false,wellnessPregnancy:false,caffeineSensitive:false,hormonalConcern:false,eyeSensitive:false,multipleAcids:false});
 const goals=a.journey&&GOALS[a.journey]?GOALS[a.journey]:[];
 const results=useMemo(()=>showResult?recommend(products,a):null,[showResult,a]);
 const maxStep=a.journey==='device'?0:(a.journey==='wellness'||a.journey==='hair')?2:3;
 const canNext=step===0?!!a.journey:step===1?!!a.primaryGoal:step===2?(a.journey==='skin'?!!a.skinType:(a.journey==='wellness'?a.adult!==null:true)):true;
 const patch=(x)=>setA(v=>({...v,...x}));
 const selectJourney=(journey)=>setA(v=>({
   ...v,
   journey,
   primaryGoal:null,
   secondaryGoals:[],
   skinType:null,
   ageBand:null,
   routineLevel:'balanced',
   pricePreference:'best-match',
   currentRetinoid:false,
   sensitive:false,
   irritated:false,
   prescription:false,
   pregnancy:false,
   sunscreen:false,
   adult:null,
   medication:false,
   wellnessPregnancy:false,
   caffeineSensitive:false,
   hormonalConcern:false,
   eyeSensitive:false,
   multipleAcids:false
 }));
 const restart=()=>{setStarted(false);setStep(0);setShowResult(false);setA({journey:null,primaryGoal:null,secondaryGoals:[],skinType:null,routineLevel:'balanced',pricePreference:'best-match',currentRetinoid:false,sensitive:false,irritated:false,prescription:false,pregnancy:false,sunscreen:false,adult:null,medication:false,wellnessPregnancy:false,caffeineSensitive:false,hormonalConcern:false,eyeSensitive:false,multipleAcids:false})};

 if(!started)return <main className="finderPage"><section className="finderHero"><a href="#top" className="finderBack"><ArrowLeft size={14}/>{t.back}</a><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.lead}</p><button className="finderPrimary" onClick={()=>setStarted(true)}>{t.start}<ArrowRight size={16}/></button><small>{t.note}</small><div className="finderPrivacy"><ShieldCheck size={18}/><span>{t.privacy}</span></div></section></main>;

 if(showResult){
  if(a.journey==='device')return <main className="finderPage"><section className="finderResultHero"><p className="eyebrow">{t.eyebrow}</p><h1>{t.deviceTitle}</h1><p>{t.deviceText}</p><a className="finderPrimary" href="#beauty-tech-guide">{t.deviceCta}<ArrowRight size={16}/></a><button className="finderGhost" onClick={restart}><RotateCcw size={15}/>{t.restart}</button></section></main>;
  return <main className="finderPage">
   <section className="finderResultHero"><p className="eyebrow">{t.eyebrow}</p><h1>{t.resultTitle}</h1><p>{t.resultLead}</p><button className="finderGhost" onClick={()=>{setShowResult(false);setStep(maxStep)}}><ArrowLeft size={15}/>{t.modify}</button><button className="finderGhost" onClick={restart}><RotateCcw size={15}/>{t.restart}</button></section>
   <section className="finderResults">
    <AnswerSummary a={a} t={t} lang={lang}/>
    {results?.education?.map(x=><div className="finderEducation" key={x}><Info size={18}/><span>{t.education[x]}</span></div>)}
    {results?.primary?.length?results.primary.map(item=><div className="finderRole" key={item.product.slug}><h2>{t.roles[item.recommendationRole]}</h2><ProductResult item={item} t={t} lang={lang}/></div>):<div className="finderEmpty"><ShieldCheck size={28}/><h2>{t.empty}</h2><p>{results?.whyNot?.length?t.emptySafety:t.emptySub}</p></div>}
    {results?.recoveryOnly&&<div className="finderRecovery"><ShieldCheck size={19}/><div><strong>{t.recoveryTitle}</strong><p>{t.recoveryText}</p></div></div>}
    {a.journey!=='wellness'&&!results?.recoveryOnly&&results?.primary?.length&&!results.primary.some(x=>x.recommendationRole==='extra')&&<div className="finderNoExtra"><Check size={18}/><div><strong>{t.noExtra}</strong><p>{t.noExtraText}</p></div></div>}
    {!!results?.alternatives?.length&&<div className="finderAlt"><h2>{t.alternatives}</h2><div className="finderAltGrid">{results.alternatives.map(item=><ProductResult key={item.product.slug} item={item} t={t} lang={lang}/>)}</div></div>}
    <WhyNot items={results?.whyNot} t={t}/>
    <div className="finderDisclaimer"><ShieldCheck size={16}/><span>{t.disclaimer}</span></div>
   </section>
  </main>
 }

 return <main className="finderPage"><section className="finderFlow">
  <div className="finderProgress" role="progressbar" aria-valuemin="1" aria-valuemax={maxStep+1} aria-valuenow={step+1}><span style={{width:((step+1)/(maxStep+1))*100+'%'}}></span></div>
  {step===0&&<><p className="eyebrow">{t.eyebrow}</p><h1>{t.journey}</h1><p className="finderSub">{t.journeySub}</p><div className="finderJourneyGrid">{Object.entries(t.journeys).map(([key,v])=><button key={key} className={'finderJourney '+(a.journey===key?'active':'')} aria-pressed={a.journey===key} onClick={()=>selectJourney(key)}><Sparkles size={20}/><strong>{v[0]}</strong><span>{v[1]}</span></button>)}</div></>}
  {step===1&&<><h1>{t.goal}</h1><p className="finderSub">{t.goalSub}</p><div className="finderChoiceGrid">{goals.map(g=><Toggle key={g} active={a.primaryGoal===g} onClick={()=>patch({primaryGoal:g,secondaryGoals:(a.secondaryGoals||[]).filter(x=>x!==g)})}>{goalLabels[lang]?.[g]||g}</Toggle>)}</div>{a.primaryGoal&&<><h2 className="finderMiniTitle">{t.secondaryGoal}</h2><p className="finderSub">{t.secondaryGoalSub}</p><div className="finderChoiceGrid">{goals.filter(g=>g!==a.primaryGoal).map(g=>{const active=(a.secondaryGoals||[]).includes(g);return <Toggle key={g} active={active} onClick={()=>{const cur=a.secondaryGoals||[];patch({secondaryGoals:active?cur.filter(x=>x!==g):(cur.length<2?[...cur,g]:cur)})}}>{goalLabels[lang]?.[g]||g}</Toggle>})}</div></>}</>}
  {step===2&&a.journey==='skin'&&<><h1>{t.skinType}</h1><div className="finderChoiceGrid">{Object.entries(t.skinTypes).map(([k,v])=><Toggle key={k} active={a.skinType===k} onClick={()=>patch({skinType:k,sensitive:k==='sensitive'})}>{v}</Toggle>)}</div><h2 className="finderMiniTitle">{t.age}</h2><p className="finderSub">{t.ageSub}</p><div className="finderChoiceGrid">{Object.entries(t.ageBands).map(([k,v])=><Toggle key={k} active={a.ageBand===k} onClick={()=>patch({ageBand:k})}>{v}</Toggle>)}</div><h2 className="finderMiniTitle">{t.routine}</h2><div className="finderJourneyGrid three">{Object.entries(t.routineOptions).map(([k,v])=><button key={k} className={'finderJourney '+(a.routineLevel===k?'active':'')} onClick={()=>patch({routineLevel:k})}><strong>{v[0]}</strong><span>{v[1]}</span></button>)}</div><h2 className="finderMiniTitle">{t.price}</h2><div className="finderJourneyGrid three">{Object.entries(t.priceOptions).map(([k,v])=><button key={k} className={'finderJourney '+((k==='best'&&a.pricePreference==='best-match')||a.pricePreference===k?'active':'')} onClick={()=>patch({pricePreference:k==='best'?'best-match':k})}><strong>{v[0]}</strong><span>{v[1]}</span></button>)}</div></>}
  {step===2&&a.journey==='hair'&&<><h1>{t.routine}</h1><div className="finderJourneyGrid three">{Object.entries(t.routineOptions).map(([k,v])=><button key={k} className={'finderJourney '+(a.routineLevel===k?'active':'')} onClick={()=>patch({routineLevel:k})}><strong>{v[0]}</strong><span>{v[1]}</span></button>)}</div><h2 className="finderMiniTitle">{t.price}</h2><div className="finderJourneyGrid three">{Object.entries(t.priceOptions).map(([k,v])=><button key={k} className={'finderJourney '+((k==='best'&&a.pricePreference==='best-match')||a.pricePreference===k?'active':'')} onClick={()=>patch({pricePreference:k==='best'?'best-match':k})}><strong>{v[0]}</strong><span>{v[1]}</span></button>)}</div></>}
  {step===2&&a.journey==='wellness'&&<><h1>{t.safety}</h1><p className="finderSub">{t.safetySub}</p><h2 className="finderMiniTitle">{t.adult}</h2><div className="finderYesNo"><button type="button" className={a.adult===true?'active':''} onClick={()=>patch({adult:true})}>{t.yes}</button><button type="button" className={a.adult===false?'active':''} onClick={()=>patch({adult:false})}>{t.no}</button></div><div className="finderCheckList"><label><input type="checkbox" checked={a.medication} onChange={e=>patch({medication:e.target.checked})}/>{t.medication}</label><label><input type="checkbox" checked={a.wellnessPregnancy} onChange={e=>patch({wellnessPregnancy:e.target.checked})}/>{t.wellnessPregnancy}</label><label><input type="checkbox" checked={a.caffeineSensitive} onChange={e=>patch({caffeineSensitive:e.target.checked})}/>{t.caffeine}</label><label><input type="checkbox" checked={a.hormonalConcern} onChange={e=>patch({hormonalConcern:e.target.checked})}/>{t.hormonal}</label></div></>}
  {step===3&&a.journey==='skin'&&<><h1>{t.safety}</h1><p className="finderSub">{t.safetySub}</p><div className="finderCheckList"><label><input type="checkbox" checked={a.currentRetinoid} onChange={e=>patch({currentRetinoid:e.target.checked})}/>{t.currentRetinoid}</label><label><input type="checkbox" checked={a.multipleAcids} onChange={e=>patch({multipleAcids:e.target.checked})}/>{t.multipleAcids}</label><label><input type="checkbox" checked={a.sensitive} onChange={e=>patch({sensitive:e.target.checked})}/>{t.sensitive}</label><label><input type="checkbox" checked={a.eyeSensitive} onChange={e=>patch({eyeSensitive:e.target.checked})}/>{t.eyeSensitive}</label><label><input type="checkbox" checked={a.irritated} onChange={e=>patch({irritated:e.target.checked})}/>{t.irritated}</label><label><input type="checkbox" checked={a.prescription} onChange={e=>patch({prescription:e.target.checked})}/>{t.prescription}</label><label><input type="checkbox" checked={a.pregnancy} onChange={e=>patch({pregnancy:e.target.checked})}/>{t.pregnancy}</label>{a.primaryGoal==='pigmentation'&&<label><input type="checkbox" checked={a.sunscreen} onChange={e=>patch({sunscreen:e.target.checked})}/>{t.sunscreen}</label>}</div></>}
  <div className="finderActions">{step>0?<button className="finderGhost" onClick={()=>setStep(x=>x-1)}><ArrowLeft size={15}/>{t.prev}</button>:<a className="finderGhost" href="#top"><ArrowLeft size={15}/>{t.back}</a>}{step<maxStep?<button className="finderPrimary" disabled={!canNext} onClick={()=>a.journey==='device'?setShowResult(true):setStep(x=>x+1)}>{t.next}<ArrowRight size={15}/></button>:<button className="finderPrimary" disabled={!canNext} onClick={()=>setShowResult(true)}>{t.result}<ArrowRight size={15}/></button>}</div>
 </section></main>
}
