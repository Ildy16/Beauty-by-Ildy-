import React, {useEffect,useState} from 'react';
import {ArrowLeft,ArrowRight} from 'lucide-react';

const content={
  hu:{back:'Vissza a főoldalra',eyebrow:'WELLNESS · EGYENSÚLY & ENERGIA',title:'Wellness, érthetően.',lead:'Táplálkozás, mikrotápanyagok és mindennapi szokások — túlzó ígéretek nélkül, átgondolt válogatással.',updated:'Tartalmi alapelvek szerint frissítve: 2026. szeptember',introTitle:'Mit jelent nálunk a wellness?',intro:'A wellness itt nem gyors megoldást vagy általános egészségígéretet jelent. Olyan, egymást kiegészítő szokásokat és termékeket vizsgálunk, amelyek reálisan támogathatják a mindennapi jóllétet, az energiaszintet és a hosszú távon fenntartható rutint.',areas:[['MINDENNAPI ENERGIA','A vitalitást befolyásoló alapok: táplálkozás, folyadékbevitel, mozgás, pihenés és következetes rutin.'],['MIKROTÁPANYAGOK','Vitaminok és ásványi anyagok szerepe, adagolása, forrása és az indokolatlan átfedések elkerülése.'],['ALVÁS & REGENERÁCIÓ','Az alvásminőség és a regeneráció helye a bőr, a közérzet és a mindennapi teljesítőképesség támogatásában.'],['STRESSZ & EGYENSÚLY','Fenntartható szokások, amelyek nem újabb terhet, hanem kiszámítható keretet adnak a hétköznapokhoz.']],standardsTitle:'Mire figyelünk?',standardsIntro:'Egy étrend-kiegészítő vagy wellness-termék nem attól értékes, hogy sok összetevőt sorol fel. A teljes formulát, a valós adagokat és a használat körülményeit együtt nézzük.',standards:[['ÖSSZETÉTEL','Pontosan mi van benne, milyen formában és mekkora napi adagban?'],['BIZONYÍTÉK','Van-e megfelelő humán kutatás az összetevőre és az alkalmazott mennyiségre?'],['BIZTONSÁG','Lehetséges kölcsönhatások, ellenjavallatok, felesleges duplázások és ésszerű használat.'],['VALÓDI ÉRTÉK','Minőség, átláthatóság, használhatóság és ár-érték arány — a partnerkapcsolatoktól függetlenül.']],topicsTitle:'Kiemelt területek',topics:[['ALAPVITAMINOK & ÁSVÁNYI ANYAGOK','A hiányállapotok és az egyéni szükséglet fontosabb, mint a minél hosszabb összetevőlista.'],['FEHÉRJE & KOLLAGÉN','Forrás, napi mennyiség, aminosavprofil és az, hogy mit támasztanak alá a vizsgálatok.'],['ANTIOXIDÁNSOK','Élelmiszerek, növényi kivonatok és kiegészítők — különválasztva az élettani szerepet a marketingtől.'],['ENERGIA & REGENERÁCIÓ','Komplex rutin, amelyben a kiegészítő csak egy elem az alvás, a táplálkozás és a mozgás mellett.']],brandsEyebrow:'VÁLOGATOTT PARTNER',brandsTitle:'Nu Skin & Pharmanex',brandsIntro:'A Beauty by Ildy külön Nu Skin márkaoldalon mutatja be a válogatott beauty- és wellness-termékeket. A bemutatás nem automatikus ajánlás: minden terméknél külön értékeljük az összetételt, a használati célt, a bizonyítékot és az ár-érték arányt.',brands:[['NU SKIN','A Nu Skin és Pharmanex válogatás elérhető. A közvetlenül vásárolható termékek a Beauty by Ildy My Site-on keresztül a Nu Skin hivatalos kosarába és fizetési rendszerébe vezetnek.']],partnerStatus:'HIVATALOS NU SKIN VÁSÁRLÁSI ÚTVONAL',partnerCta:'NU SKIN VÁLOGATÁS MEGNYITÁSA',noteTitle:'Fontos tudni',note:'Az étrend-kiegészítők nem helyettesítik a kiegyensúlyozott étrendet és az egészséges életmódot. Betegség, gyógyszerszedés, várandósság vagy tartós panasz esetén a használat előtt egészségügyi szakemberrel szükséges egyeztetni.'},
  en:{back:'Back to home',eyebrow:'WELLNESS · BALANCE & ENERGY',title:'Wellness, made clear.',lead:'Nutrition, micronutrients and everyday habits — thoughtfully curated without exaggerated promises.',updated:'Content principles reviewed: September 2026',introTitle:'What does wellness mean here?',intro:'Wellness here is not a quick fix or a broad health promise. We examine complementary habits and products that may realistically support everyday wellbeing, energy and a sustainable long-term routine.',areas:[['EVERYDAY ENERGY','The foundations that influence vitality: nutrition, hydration, movement, rest and a consistent routine.'],['MICRONUTRIENTS','The role, dose and source of vitamins and minerals, while avoiding unnecessary overlap.'],['SLEEP & RECOVERY','How sleep quality and recovery support skin, wellbeing and everyday performance.'],['STRESS & BALANCE','Sustainable habits that provide a reliable framework instead of adding another burden.']],standardsTitle:'What do we assess?',standardsIntro:'A supplement or wellness product is not valuable simply because it lists many ingredients. We consider the complete formula, meaningful doses and the context of use together.',standards:[['FORMULATION','What exactly is included, in which form and at what daily dose?'],['EVIDENCE','Is there suitable human evidence for the ingredient and the amount used?'],['SAFETY','Potential interactions, contraindications, unnecessary duplication and sensible use.'],['REAL VALUE','Quality, transparency, usability and value for money — independent of partner relationships.']],topicsTitle:'Key areas',topics:[['CORE VITAMINS & MINERALS','Deficiencies and individual needs matter more than the longest possible ingredient list.'],['PROTEIN & COLLAGEN','Source, daily amount, amino acid profile and what the research actually supports.'],['ANTIOXIDANTS','Foods, botanical extracts and supplements — physiology separated from marketing.'],['ENERGY & RECOVERY','A complete routine in which a supplement is only one element alongside sleep, nutrition and movement.']],brandsEyebrow:'SELECTED PARTNER',brandsTitle:'Nu Skin & Pharmanex',brandsIntro:'Beauty by Ildy presents selected beauty and wellness products on a dedicated Nu Skin brand page. Inclusion is not an automatic endorsement: formulation, intended use, evidence and value are reviewed product by product.',brands:[['NU SKIN','The Nu Skin and Pharmanex selection is available. Purchasable products open the official Nu Skin cart and checkout through the Beauty by Ildy My Site route.']],partnerStatus:'OFFICIAL NU SKIN PURCHASE ROUTE',partnerCta:'OPEN THE NU SKIN EDIT',noteTitle:'Important to know',note:'Food supplements do not replace a balanced diet and a healthy lifestyle. If you have a medical condition, take medication, are pregnant or have persistent symptoms, consult a qualified healthcare professional before use.'},
  de:{back:'Zurück zur Startseite',eyebrow:'WELLNESS · BALANCE & ENERGIE',title:'Wellness, verständlich.',lead:'Ernährung, Mikronährstoffe und tägliche Gewohnheiten — sorgfältig ausgewählt, ohne übertriebene Versprechen.',updated:'Inhaltliche Grundsätze geprüft: September 2026',introTitle:'Was bedeutet Wellness hier?',intro:'Wellness bedeutet hier weder eine schnelle Lösung noch ein allgemeines Gesundheitsversprechen. Wir betrachten sich ergänzende Gewohnheiten und Produkte, die Wohlbefinden, Energie und eine langfristig tragfähige Routine realistisch unterstützen können.',areas:[['TÄGLICHE ENERGIE','Grundlagen der Vitalität: Ernährung, Flüssigkeitszufuhr, Bewegung, Erholung und eine konsequente Routine.'],['MIKRONÄHRSTOFFE','Rolle, Dosierung und Quelle von Vitaminen und Mineralstoffen sowie das Vermeiden unnötiger Überschneidungen.'],['SCHLAF & REGENERATION','Die Bedeutung von Schlafqualität und Erholung für Haut, Wohlbefinden und Leistungsfähigkeit.'],['STRESS & BALANCE','Nachhaltige Gewohnheiten, die einen verlässlichen Rahmen schaffen, statt zusätzlichen Druck auszuüben.']],standardsTitle:'Worauf achten wir?',standardsIntro:'Ein Nahrungsergänzungs- oder Wellnessprodukt ist nicht allein deshalb wertvoll, weil es viele Inhaltsstoffe nennt. Wir bewerten die Gesamtformel, relevante Dosierungen und den Anwendungskontext gemeinsam.',standards:[['ZUSAMMENSETZUNG','Was ist genau enthalten, in welcher Form und in welcher Tagesdosis?'],['EVIDENZ','Gibt es geeignete Humanstudien zum Inhaltsstoff und zur verwendeten Menge?'],['SICHERHEIT','Mögliche Wechselwirkungen, Gegenanzeigen, unnötige Doppelungen und sinnvolle Anwendung.'],['ECHTER WERT','Qualität, Transparenz, Anwendbarkeit und Preis-Leistung — unabhängig von Partnerbeziehungen.']],topicsTitle:'Schwerpunkte',topics:[['BASISVITAMINE & MINERALSTOFFE','Mangelzustände und individueller Bedarf sind wichtiger als eine möglichst lange Zutatenliste.'],['PROTEIN & KOLLAGEN','Quelle, Tagesmenge, Aminosäureprofil und das, was Studien tatsächlich belegen.'],['ANTIOXIDANTIEN','Lebensmittel, Pflanzenextrakte und Ergänzungen — physiologische Rolle klar vom Marketing getrennt.'],['ENERGIE & REGENERATION','Eine umfassende Routine, in der ein Supplement nur ein Baustein neben Schlaf, Ernährung und Bewegung ist.']],brandsEyebrow:'AUSGEWÄHLTER PARTNER',brandsTitle:'Nu Skin & Pharmanex',brandsIntro:'Beauty by Ildy präsentiert ausgewählte Beauty- und Wellnessprodukte auf einer eigenen Nu-Skin-Markenseite. Die Aufnahme ist keine automatische Empfehlung: Zusammensetzung, Verwendungszweck, Evidenz und Preis-Leistung werden einzeln geprüft.',brands:[['NU SKIN','Die Nu-Skin- und Pharmanex-Auswahl ist verfügbar. Kaufbare Produkte führen über den Beauty-by-Ildy-My-Site-Weg zum offiziellen Nu-Skin-Warenkorb und Checkout.']],partnerStatus:'OFFIZIELLER NU-SKIN-KAUFWEG',partnerCta:'NU-SKIN-AUSWAHL ÖFFNEN',noteTitle:'Wichtig zu wissen',note:'Nahrungsergänzungsmittel ersetzen keine ausgewogene Ernährung und gesunde Lebensweise. Bei Erkrankungen, Medikamenteneinnahme, Schwangerschaft oder anhaltenden Beschwerden sollte vor der Anwendung medizinischer Rat eingeholt werden.'}
};

const focusContent={
  hu:{eyebrow:'KIEMELT TÉMA',title:'Női jóllét · Menopauza · Healthy aging',intro:'A női életközép változásait nem egyetlen termék oldja meg. Közérthetően vizsgáljuk a közérzetet befolyásoló változásokat, valamint azokat a szokásokat és kiegészítőket, amelyek mögött valódi szakmai háttér áll.',areas:[['NŐI JÓLLÉT','Alvás, stressz, hangulat, csont- és izomegészség, valamint a mindennapi közérzet összefüggései.'],['MENOPAUZA','Tünetek, életmódi lehetőségek és étrend-kiegészítők — biztonsági szempontokkal és túlzó ígéretek nélkül.'],['HEALTHY AGING','A bőr, a test és a vitalitás hosszú távú támogatása fenntartható, bizonyítékokra épülő rutinnal.']]},
  en:{eyebrow:'FEATURED TOPIC',title:'Women’s wellbeing · Menopause · Healthy aging',intro:'Midlife changes are not solved by a single product. We explain the factors that shape wellbeing and examine habits and supplements with a meaningful professional foundation.',areas:[['WOMEN’S WELLBEING','Connections between sleep, stress, mood, bone and muscle health, and everyday wellbeing.'],['MENOPAUSE','Symptoms, lifestyle options and supplements — with safety in mind and without exaggerated promises.'],['HEALTHY AGING','Long-term support for skin, body and vitality through a sustainable, evidence-informed routine.']]},
  de:{eyebrow:'SCHWERPUNKTTHEMA',title:'Wohlbefinden von Frauen · Menopause · Healthy Aging',intro:'Veränderungen in der Lebensmitte werden nicht durch ein einzelnes Produkt gelöst. Wir erklären verständlich die Faktoren, die das Wohlbefinden prägen, und betrachten Gewohnheiten und Ergänzungen mit fachlich fundiertem Hintergrund.',areas:[['WOHLBEFINDEN VON FRAUEN','Zusammenhänge zwischen Schlaf, Stress, Stimmung, Knochen- und Muskelgesundheit sowie täglichem Wohlbefinden.'],['MENOPAUSE','Symptome, Lebensstiloptionen und Nahrungsergänzung — mit Blick auf Sicherheit und ohne übertriebene Versprechen.'],['HEALTHY AGING','Langfristige Unterstützung für Haut, Körper und Vitalität durch eine nachhaltige, evidenzbasierte Routine.']]}
};

const wellnessHeroImages=[
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=88',
  'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=2200&q=88',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=88'
];

const topicRouteKeys=['women','menopause','healthy-aging'];
const topicRoutes={
  women:'#wellness-women',
  menopause:'#wellness-menopause',
  'healthy-aging':'#wellness-healthy-aging'
};

function WellnessVisualHero({t,focus,topic=null}){
  const [active,setActive]=useState(0);
  useEffect(()=>{
    const id=window.setInterval(()=>setActive(v=>(v+1)%wellnessHeroImages.length),5200);
    return()=>window.clearInterval(id);
  },[]);

  const focusIndex=topic?Math.max(0,topicRouteKeys.indexOf(topic)):null;
  const title=topic?focus.areas[focusIndex][0]:t.title;
  const lead=topic?focus.areas[focusIndex][1]:t.lead;

  return <section className="wellnessVisualHero">
    <div className="wellnessSlides" aria-hidden="true">
      {wellnessHeroImages.map((src,i)=><div key={src} className={'wellnessSlide '+(i===active?'isActive':'')} style={{backgroundImage:`linear-gradient(90deg,rgba(6,24,49,.24),rgba(6,24,49,.05)),url("${src}")`}} />)}
    </div>

    <div className="wellnessTopicPanel">
      <a className="wellnessBack" href={topic?'#wellness':'#top'}><ArrowLeft size={14}/>{topic?t.eyebrow:t.back}</a>
      <p className="panelEyebrow">{topic?focus.eyebrow:t.eyebrow}</p>
      <h1>{title}</h1>
      <p className="panelLead">{lead}</p>

      <nav className="wellnessTopicNav" aria-label="Wellness témák">
        {focus.areas.map((area,i)=>{
          const key=topicRouteKeys[i];
          return <a key={area[0]} className={topic===key?'active':''} href={topicRoutes[key]}>
            <span>{area[0]}</span><ArrowRight size={14}/>
          </a>;
        })}
      </nav>
    </div>

    <div className="wellnessSlideDots" aria-hidden="true">
      {wellnessHeroImages.map((_,i)=><span key={i} className={i===active?'isActive':''}/>)}
    </div>
  </section>
}

function WellnessTopicPage({t,focus,topic}){
  const focusIndex=Math.max(0,topicRouteKeys.indexOf(topic));
  const current=focus.areas[focusIndex];
  return <main className="wellnessPage wellnessTopicPage">
    <WellnessVisualHero t={t} focus={focus} topic={topic}/>
    <section className="wellnessFocus topicIntro" id="topic-intro">
      <div className="wellnessFocusHead">
        <p className="eyebrow">{focus.eyebrow}</p>
        <h2>{current[0]}</h2>
        <p>{current[1]}</p>
      </div>
    </section>
    <section className="wellnessIntro" id="topic-areas">
      <h2>{t.introTitle}</h2>
      <p>{t.intro}</p>
      <div className="wellnessGrid">{t.areas.map((a,index)=><article id={'topic-area-'+index} key={a[0]}><h3>{a[0]}</h3><p>{a[1]}</p></article>)}</div>
    </section>
    <section className="wellnessStandards" id="topic-standards">
      <h2>{t.standardsTitle}</h2>
      <p className="sectionIntro">{t.standardsIntro}</p>
      <div className="wellnessGrid">{t.standards.map(s=><article key={s[0]}><h3>{s[0]}</h3><p>{s[1]}</p></article>)}</div>
    </section>
    <section className="wellnessTopics" id="topic-focus">
      <h2>{t.topicsTitle}</h2>
      <div className="wellnessGrid">{t.topics.map(item=><article key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
    </section>
    <section className="wellnessPartners" id="topic-shopping">
      <div className="wellnessPartnerHead"><p className="eyebrow">{t.brandsEyebrow}</p><h2>{t.brandsTitle}</h2><p>{t.brandsIntro}</p></div>
      <div className="wellnessPartnerGrid">{t.brands.map(brand=><article key={brand[0]}><h3>{brand[0]}</h3><p>{brand[1]}</p><small>{t.partnerStatus}</small><a className="wellnessPartnerCta" href="#nuskin">{t.partnerCta}</a></article>)}</div>
    </section>
    <section className="wellnessNote"><h2>{t.noteTitle}</h2><p>{t.note}</p></section>
  </main>
}

export function WellnessPage({lang='hu',topic=null}){
  const t=content[lang]||content.hu;
  const focus=focusContent[lang]||focusContent.hu;
  if(topic)return <WellnessTopicPage t={t} focus={focus} topic={topic}/>;

  return <main className="wellnessPage">
    <WellnessVisualHero t={t} focus={focus}/>
    <section className="wellnessFocus"><div className="wellnessFocusHead"><p className="eyebrow">{focus.eyebrow}</p><h2>{focus.title}</h2><p>{focus.intro}</p></div><div className="wellnessFocusGrid">{focus.areas.map((area,i)=><a className="wellnessFocusCard" href={topicRoutes[topicRouteKeys[i]]} key={area[0]}><h3>{area[0]}</h3><p>{area[1]}</p><span>{t.back==='Vissza a főoldalra'?'MEGNYITÁS':t.back==='Back to home'?'OPEN':'ÖFFNEN'} <ArrowRight size={13}/></span></a>)}</div></section>
    <section className="wellnessIntro"><h2>{t.introTitle}</h2><p>{t.intro}</p><div className="wellnessGrid">{t.areas.map(a=><article key={a[0]}><h3>{a[0]}</h3><p>{a[1]}</p></article>)}</div></section>
    <section className="wellnessStandards"><h2>{t.standardsTitle}</h2><p className="sectionIntro">{t.standardsIntro}</p><div className="wellnessGrid">{t.standards.map(s=><article key={s[0]}><h3>{s[0]}</h3><p>{s[1]}</p></article>)}</div></section>
    <section className="wellnessTopics"><h2>{t.topicsTitle}</h2><div className="wellnessGrid">{t.topics.map(item=><article key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></section>
    <section className="wellnessPartners"><div className="wellnessPartnerHead"><p className="eyebrow">{t.brandsEyebrow}</p><h2>{t.brandsTitle}</h2><p>{t.brandsIntro}</p></div><div className="wellnessPartnerGrid">{t.brands.map(brand=><article key={brand[0]}><h3>{brand[0]}</h3><p>{brand[1]}</p><small>{t.partnerStatus}</small><a className="wellnessPartnerCta" href="#nuskin">{t.partnerCta}</a></article>)}</div></section>
    <section className="wellnessNote"><h2>{t.noteTitle}</h2><p>{t.note}</p></section>
  </main>;
}
