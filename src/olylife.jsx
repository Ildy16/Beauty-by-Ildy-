import React from "react";
import "./olylife.css";
import { olyDetails } from "./olylifeDetails.js";

const olyDetailsTranslated = {
  "OlyLife THZ Tera-P90+": {
    "en": {
      "intro": "A three-part system combining wellness, massage and cosmetic functions.",
      "technology": "The main unit uses pulsed electromagnetic fields (PEMF) and terahertz technology. The Frost Age attachment combines radiofrequency (RF) and electrical muscle stimulation (EMS). The Revitaluxe massager combines pulsed, static and rotating magnetic fields, EMS/TENS and red light.",
      "features": "The manufacturer lists 20 intensity settings, an enlarged foot panel designed for shoe sizes up to EU 47, an infrared remote, fuse protection and two additional handheld units.",
      "claims": "The manufacturer promotes relaxation, general wellbeing, skin-firming and scalp-care benefits. These are not independently established clinical outcomes for this device."
    },
    "de": {
      "intro": "Ein dreiteiliges Gerätesystem, das Wellness-, Massage- und kosmetische Anwendungen kombiniert.",
      "technology": "Das Hauptgerät nutzt gepulste elektromagnetische Felder (PEMF) und Terahertz-Technologie. Der Frost-Age-Aufsatz kombiniert Radiofrequenz (RF) und elektrische Muskelstimulation (EMS). Das Revitaluxe-Massagegerät verbindet gepulste, statische und rotierende Magnetfelder mit EMS/TENS und Rotlicht.",
      "features": "Der Hersteller nennt 20 Intensitätsstufen, ein vergrößertes Fußpanel für Schuhgrößen bis EU 47, eine Infrarot-Fernbedienung, Sicherungsschutz und zwei zusätzliche Handgeräte.",
      "claims": "Der Hersteller bewirbt Entspannung, allgemeines Wohlbefinden, Hautstraffung und Kopfhautpflege. Klinisch belegte Wirkungen speziell dieses Geräts sind damit nicht nachgewiesen."
    }
  },
  "OlyLife Tera-P90": {
    "en": {
      "intro": "A foot-panel wellness device presented by the manufacturer as combining PEMF and terahertz technologies.",
      "technology": "The manufacturer refers to bioelectromagnetic and terahertz energy. Its description mentions both 1 MHz and 1 Hz in different places; these figures require clarification in the technical documentation. The stated 3–3,000 µm wavelength range and 4–5 cm penetration depth have not been independently verified.",
      "features": "Two energy modes, an energy-transfer foot panel and straightforward home operation are described.",
      "claims": "Claims about microcirculation, metabolism, pain, inflammation, fatigue and body contouring are manufacturer claims, not established therapeutic benefits."
    },
    "de": {
      "intro": "Ein Wellnessgerät mit Fußpanel, das laut Hersteller PEMF- und Terahertz-Technologien kombiniert.",
      "technology": "Der Hersteller nennt bioelektromagnetische und Terahertz-Energie. An verschiedenen Stellen stehen 1 MHz und 1 Hz; die Bedeutung dieser Angaben muss anhand technischer Unterlagen geklärt werden. Der angegebene Wellenlängenbereich von 3–3.000 µm und die Eindringtiefe von 4–5 cm sind nicht unabhängig bestätigt.",
      "features": "Beschrieben werden zwei Energiemodi, ein Fußpanel zur Energieübertragung und eine einfache Anwendung zu Hause.",
      "claims": "Aussagen zu Mikrozirkulation, Stoffwechsel, Schmerzen, Entzündungen, Müdigkeit und Körperformung stammen vom Hersteller und sind keine nachgewiesenen therapeutischen Wirkungen."
    }
  },
  "OlyLife Galaxy G-One": {
    "en": {
      "intro": "A portable, foldable eye-area massager operated with a single button.",
      "technology": "According to the manufacturer, it combines low-frequency PEMF, six-zone 3D air-pressure massage, intermittent vibration and a graphene-based warm compress at 42 °C. Four additional proprietary technology names are mentioned without clear public technical definitions.",
      "features": "The manufacturer describes seven eye-care modes combining massage, vibration and warmth. The device is designed to be lightweight and foldable.",
      "claims": "The manufacturer claims relief of eye fatigue, dryness, dark circles and under-eye puffiness. Independent device-specific ophthalmic or cosmetic evidence has not been established."
    },
    "de": {
      "intro": "Ein tragbares, faltbares Augenmassagegerät mit Ein-Knopf-Bedienung.",
      "technology": "Laut Hersteller kombiniert es niederfrequente PEMF, eine 3D-Luftdruckmassage mit sechs Zonen, intermittierende Vibration und eine graphenbasierte Wärmekompresse bei 42 °C. Vier weitere herstellereigene Technologien werden genannt, jedoch öffentlich nicht eindeutig technisch erklärt.",
      "features": "Der Hersteller beschreibt sieben Augenpflegeprogramme mit Massage, Vibration und Wärme. Das Gerät ist leicht und zusammenklappbar.",
      "claims": "Der Hersteller verspricht eine Linderung von Augenmüdigkeit, Trockenheit, Augenringen und Schwellungen. Unabhängige augenmedizinische oder kosmetische Nachweise für dieses konkrete Gerät liegen uns nicht vor."
    }
  },
  "OlyLife Shaken Massager": {
    "en": {
      "intro": "A foldable device for seated body massage, marketed for massage and body contouring.",
      "technology": "The manufacturer lists ultrasound, red light, vibration, radiofrequency (RF), massage, heat and PEMF. The named modes are Sculpt, Massage, Thermal and AI Personalized.",
      "features": "A dual-display control panel, foldable construction and skin-friendly materials are described. The manufacturer says an Oly Watch can enable personalised settings and data synchronisation; compatibility details still require verification.",
      "claims": "Fat-burning, body-shaping and core-muscle-strengthening claims have not been substantiated by independent clinical evidence for this particular device."
    },
    "de": {
      "intro": "Ein faltbares Gerät für die Körpermassage im Sitzen, das auch zur Körperkonturierung beworben wird.",
      "technology": "Der Hersteller nennt Ultraschall, Rotlicht, Vibration, Radiofrequenz (RF), Massage, Wärme und PEMF. Die Programme heißen Sculpt, Massage, Thermal und AI Personalized.",
      "features": "Beschrieben werden ein Bedienfeld mit zwei Displays, eine faltbare Konstruktion und hautfreundliche Materialien. Laut Hersteller ermöglicht die Verbindung mit einer Oly Watch personalisierte Einstellungen und Datensynchronisation; Einzelheiten zur Kompatibilität sind noch zu prüfen.",
      "claims": "Behauptungen über Fettverbrennung, Körperformung und Stärkung der Rumpfmuskulatur sind für dieses konkrete Gerät nicht durch unabhängige klinische Nachweise belegt."
    }
  },
  "OlyLife Vitality Wand": {
    "en": {
      "intro": "A handheld wellness device combining several energy and massage functions.",
      "technology": "The manufacturer describes terahertz waves, low-frequency PEMF, heat transfer and air massage using controlled airflow intended to deliver relatively even pressure.",
      "features": "Single-button operation, selectable temperature and a smart stand for hands-free use are described.",
      "claims": "Claims concerning improved microcirculation, relief of fatigue or pain, detoxification and anti-inflammatory effects have not been independently established for this device."
    },
    "de": {
      "intro": "Ein handgeführtes Wellnessgerät, das mehrere Energie- und Massagefunktionen verbindet.",
      "technology": "Der Hersteller beschreibt Terahertz-Wellen, niederfrequente PEMF, Wärmeübertragung und Luftmassage mit kontrolliertem Luftstrom für möglichst gleichmäßigen Druck.",
      "features": "Genannt werden Ein-Knopf-Bedienung, einstellbare Temperatur und ein intelligenter Ständer zur freihändigen Anwendung.",
      "claims": "Aussagen zur Mikrozirkulation, zur Linderung von Müdigkeit oder Schmerzen sowie zu Entgiftung und entzündungshemmenden Wirkungen sind für dieses Gerät nicht unabhängig belegt."
    }
  },
  "OlyLife H+ Bar": {
    "en": {
      "intro": "A portable device for producing hydrogen-enriched water, supplemented by what the manufacturer calls MRET resonance technology.",
      "technology": "The manufacturer describes a two-chamber hydrogen generation and dissolution process, a proton-exchange membrane, pressurised hydrogen dissolution and low-frequency MRET technology.",
      "features": "The product is described as heat-resistant, slip-resistant and water-resistant. Suitable beverages must be confirmed against the manufacturer's instructions.",
      "claims": "Claims of antioxidant or skincare benefits, changes in water-molecule clusters and improved cellular absorption have not been established as health benefits of this device."
    },
    "de": {
      "intro": "Ein tragbares Gerät zur Herstellung von wasserstoffangereichertem Wasser, ergänzt durch eine vom Hersteller als MRET bezeichnete Resonanztechnologie.",
      "technology": "Der Hersteller beschreibt eine Zweikammertechnik zur Wasserstofferzeugung und -lösung, eine Protonenaustauschmembran, eine Wasserstofflösung unter Druck und niederfrequente MRET-Technologie.",
      "features": "Beschrieben werden hitzebeständige, rutschhemmende und wasserbeständige Eigenschaften. Welche Getränke geeignet sind, muss anhand der Herstelleranleitung geprüft werden.",
      "claims": "Behauptungen über antioxidative oder hautpflegende Vorteile, Veränderungen von Wassermolekül-Clustern und eine verbesserte zelluläre Aufnahme sind als gesundheitliche Wirkungen dieses Geräts nicht belegt."
    }
  },
  "OlyLife A9 Smart Anion BamaAir": {
    "en": {
      "intro": "A home air purifier combining HEPA filtration with negative-ion emission and additional comfort features.",
      "technology": "The manufacturer specifies HEPA filtration and a negative-ion concentration of 200 million per cm³. Actual filtration performance, measurement conditions and potential ozone emissions require independent verification.",
      "features": "Three modes (automatic, sleep and mosquito-repellent), seven nature-light programmes, fourteen music tracks, time and temperature displays, a simple control panel and smartphone-app control are described.",
      "claims": "The manufacturer associates negative ions with stress relief, better sleep, cognitive benefits and longevity. These should not be presented as proven health benefits of this purifier."
    },
    "de": {
      "intro": "Ein Luftreiniger für zu Hause, der HEPA-Filterung mit Negativionenabgabe und zusätzlichen Komfortfunktionen kombiniert.",
      "technology": "Der Hersteller nennt einen HEPA-Filter und eine Negativionenkonzentration von 200 Millionen pro cm³. Die tatsächliche Filterleistung, Messbedingungen und mögliche Ozonemissionen müssen unabhängig geprüft werden.",
      "features": "Beschrieben werden drei Modi (Automatik, Schlaf und Mückenabwehr), sieben Naturlichtprogramme, vierzehn Musikstücke, Zeit- und Temperaturanzeige, ein einfaches Bedienfeld und App-Steuerung.",
      "claims": "Der Hersteller verbindet Negativionen mit Stressabbau, besserem Schlaf, kognitiven Vorteilen und Langlebigkeit. Diese Wirkungen dürfen nicht als nachgewiesene Gesundheitsvorteile des Luftreinigers dargestellt werden."
    }
  }
};

const products = [
  {name:"OlyLife THZ Tera-P90+",image:"https://www.olylifeint.com/Res/img/product/OLY-HCA002A.png",category:"wellness",tech:"PEMF · terahertz · RF · EMS · TENS",desc:{hu:"Komplex készülékrendszer főegységgel, Frost Age szépségápolási fejjel és Revitaluxe masszírozóval.",en:"Multi-device system with a main unit, Frost Age beauty attachment and Revitaluxe massager.",de:"Gerätesystem mit Haupteinheit, Frost-Age-Beauty-Aufsatz und Revitaluxe-Massagegerät."}},
  {name:"OlyLife Tera-P90",image:"https://www.olylifeint.com/Main/assets/product/OLY-HCA002.png",category:"wellness",tech:"PEMF · terahertz",desc:{hu:"Elektromágneses és terahertz-technológiát alkalmazó wellnesskészülék.",en:"Wellness device using electromagnetic and terahertz technologies.",de:"Wellnessgerät mit elektromagnetischer und Terahertz-Technologie."}},
  {name:"OlyLife Galaxy G-One",image:"https://www.olylifeint.com/Main/assets/product/OLY-PKG004.png",category:"beauty",tech:"Szemkörnyéki masszázs · melegítés · PEMF",desc:{hu:"Hordozható szemkörnyéki masszírozó, többféle üzemmóddal. A jelenlegi modell.",en:"Portable eye massager with multiple modes. Current model.",de:"Tragbares Augenmassagegerät mit mehreren Modi. Aktuelles Modell."}},
  {name:"OlyLife Shaken Massager",category:"beauty",tech:"Masszázs · vibráció · RF · fény",desc:{hu:"Több technológiát kombináló testmasszírozó és kozmetikai készülék.",en:"Body massager combining several cosmetic technologies.",de:"Körpermassagegerät mit mehreren kosmetischen Technologien."}},
  {name:"OlyLife Vitality Wand",image:"https://www.olylifeint.com/Res/img/product/OLY-TPC003.png",category:"wellness",tech:"Kézi wellnesskészülék",desc:{hu:"Kézi készülék a márka wellness-kínálatából; a részletes műszaki adatokat még ellenőrizzük.",en:"Handheld wellness device; detailed specifications pending verification.",de:"Handgerät für Wellness; technische Details werden noch geprüft."}},
  {name:"OlyLife H+ Bar",image:"https://www.olylifeint.com/Res/img/product/OLY-TPC002.png",category:"wellness",tech:"Wellnesskészülék",desc:{hu:"A márka wellness-termékcsaládjának készüléke; részletes műszaki adatok ellenőrzés alatt.",en:"Wellness product; detailed specifications pending verification.",de:"Wellnessprodukt; technische Details werden noch geprüft."}},
  {name:"OlyLife A9 Smart Anion BamaAir",image:"https://www.olylifeint.com/Res/img/product/OLY-HCA005.png",category:"home",tech:"Levegőtisztítás · iontechnológia",desc:{hu:"Levegőtisztító és negatívion-kibocsátó készülék.",en:"Air purifier with negative-ion technology.",de:"Luftreiniger mit Negativionen-Technologie."}},
];
const labels={
  hu:{eyebrow:"BEAUTY BY ILDY · KÉSZÜLÉKEK",lead:"Innovatív beauty és wellness technológiák az OlyLife kínálatából.",notice:"Fedezd fel az OlyLife különleges wellness- és szépségápolási készülékeit, technológiáit és felhasználási lehetőségeit.",button:"Vásárlás hamarosan",source:"Hivatalos OlyLife terméklista",disclaimer:"A bemutatott technológiák leírása nem igazolja az egyes egészségügyi vagy fogyasztó hatásokat. A használati útmutató, ellenjavallatok és az EU-s megfelelőség ellenőrzése folyamatban van.",categories:{beauty:"Szépségápolás",wellness:"Wellness",home:"Otthoni környezet"}},
  en:{eyebrow:"BEAUTY BY ILDY · DEVICES",lead:"Discover OlyLife's beauty and wellness technologies.",notice:"Explore OlyLife wellness and beauty devices, their technologies and everyday applications.",button:"Purchasing coming soon",source:"Official OlyLife product list",disclaimer:"Technology descriptions do not substantiate medical or weight-loss claims. Instructions, contraindications and EU compliance remain under review.",categories:{beauty:"Beauty",wellness:"Wellness",home:"Home environment"}},
  de:{eyebrow:"BEAUTY BY ILDY · GERÄTE",lead:"Entdecke Beauty- und Wellness-Technologien von OlyLife.",notice:"Entdecke OlyLife Wellness- und Beauty-Geräte, ihre Technologien und Anwendungsmöglichkeiten.",button:"Kauf bald verfügbar",source:"Offizielle OlyLife-Produktliste",disclaimer:"Die Technologiebeschreibungen belegen keine medizinischen oder gewichtsreduzierenden Wirkungen. Anleitung, Gegenanzeigen und EU-Konformität werden noch geprüft.",categories:{beauty:"Beauty",wellness:"Wellness",home:"Wohnumfeld"}}
};
const brandStory = {
 hu:{
  title:"Amikor a technológia találkozik a jólléttel",
  tagline:"Innovatív technológiák. Új lehetőségek. Tudatos életminőség.",
  sections:[
   ["Az OlyLife története és filozófiája","Az OlyLife 2022-ben azzal a vízióval jött létre, hogy a modern technológia lehetőségeit közelebb hozza a mindennapi jólléthez és az életminőség tudatos támogatásához. A márka filozófiájának középpontjában az a gondolat áll, hogy az egészség és a jóllét nem csupán egy-egy életmódbeli döntés eredménye, hanem a fizikai, mentális és társas egyensúly összetett rendszere.","Az OlyLife olyan technológiai megoldások fejlesztésére és elérhetővé tételére törekszik, amelyek a modern életvitel részévé válhatnak – az otthoni relaxációtól és szépségápolástól kezdve a személyes komforton át a lakókörnyezet minőségéig."],
   ["A technológia új dimenziói","Az OlyLife készülékcsalád különböző technológiai megközelítéseket egyesít. A kínálatban többek között impulzusos elektromágneses mezőt (PEMF), terahertz-technológiát, rádiófrekvenciát (RF), elektromos izomstimulációt (EMS), valamint intelligens masszázs- és hőtechnológiákat alkalmazó készülékek találhatók.","A márka koncepciója túlmutat az egyes eszközökön: olyan integrált wellness- és szépségápolási élményt kíván kialakítani, amelyben a technológia a mindennapi rutinok kiegészítőjévé válik."],
   ["Egy készülékcsalád, többféle élethelyzetre","A THZ Tera-P90 és a THZ Tera-P90+ az OlyLife wellnesskínálatának meghatározó készülékei. A P90+ rendszer a Frost Age Beauty Device és a Revitaluxe Massager kiegészítőkkel a kozmetikai és masszázsfunkciókat is egyesíti.","A Galaxy G-One szemkörnyéki masszírozó a hordozható, személyes komfortot szolgáló eszközök világát képviseli, míg az A9 Smart Anion BamaAir a lakókörnyezet levegőminőségére összpontosít. A termékcsalád további készülékei az otthoni wellness és a technológiával támogatott személyes ápolás különböző területeit fedik le."],
   ["Innováció és folyamatos fejlődés","Az OlyLife hosszabb távú elképzeléseiben a hálózatba kapcsolt eszközök, az adatvezérelt megoldások és a mesterséges intelligencia is szerepet kapnak.","A márka célja egy olyan technológiai ökoszisztéma kialakítása, amelyben a különböző készülékek és digitális megoldások egymást kiegészítve járulhatnak hozzá a személyre szabott felhasználói élményhez."],
   ["OlyLife a Beauty by Ildy világában","A Beauty by Ildy olyan szépségápolási és wellnessmegoldásokat mutat be, amelyek új technológiai megközelítéseket kínálnak a hagyományos rutinok mellett.","Az OlyLife készülékcsalád ebbe a szemléletbe illeszkedik: a szépségápolás, a relaxáció, a személyes komfort és a modern technológia találkozását képviseli."]
  ],
  closing:"Fedezd fel az OlyLife készülékeit, és ismerd meg a mögöttük álló technológiákat.",
  collection:"Az OlyLife készülékcsalád"
 },
 en:{title:"Where technology meets well-being",tagline:"Innovative technologies. New possibilities. Mindful quality of life.",sections:[["The OlyLife story","Founded in 2022, OlyLife aims to bring modern technology into everyday wellness and quality-of-life routines."],["New dimensions of technology","The range includes devices using PEMF, terahertz, RF, EMS, massage and heat technologies."],["Devices for different routines","From the Tera-P90 series to Galaxy G-One and A9 BamaAir, the range spans personal care, relaxation and the home environment."],["Innovation and development","The brand's longer-term vision includes connected devices, data-driven systems and artificial intelligence."],["OlyLife at Beauty by Ildy","We feature OlyLife as part of our editorial selection of technology-led beauty and wellness devices."]],closing:"Explore the OlyLife collection and its technologies.",collection:"The OlyLife collection"},
 de:{title:"Wo Technologie auf Wohlbefinden trifft",tagline:"Innovative Technologien. Neue Möglichkeiten. Bewusste Lebensqualität.",sections:[["Die Geschichte von OlyLife","OlyLife wurde 2022 gegründet und möchte moderne Technologien für Wellness und alltägliche Lebensqualität zugänglich machen."],["Neue Dimensionen der Technologie","Das Sortiment umfasst Geräte mit PEMF-, Terahertz-, RF-, EMS-, Massage- und Wärmetechnologien."],["Geräte für unterschiedliche Routinen","Von der Tera-P90-Serie über Galaxy G-One bis zum A9 BamaAir reicht das Angebot von persönlicher Pflege bis zum Wohnumfeld."],["Innovation und Entwicklung","Zur langfristigen Vision der Marke gehören vernetzte Geräte, datengestützte Systeme und künstliche Intelligenz."],["OlyLife bei Beauty by Ildy","Wir präsentieren OlyLife als Teil unserer Auswahl technologieorientierter Beauty- und Wellnessgeräte."]],closing:"Entdecke die OlyLife-Geräte und ihre Technologien.",collection:"Die OlyLife Geräte"}
};
export function OlyLifePage({lang="hu"}){
 const t=labels[lang]||labels.hu;
 return <main className="olyPage">
  <header className="olyHero"><p>{t.eyebrow}</p><h1>OLYLIFE</h1><div className="olyGoldRule"/><p className="olyLead">{t.lead}</p></header>
  <div className="olyContent"><section className="olyStory" aria-labelledby="olyStoryTitle"><p className="olyStoryKicker">OLYLIFE · BEAUTY BY ILDY</p><h2 id="olyStoryTitle">{brandStory[lang]?.title||brandStory.hu.title}</h2><p className="olyStoryTagline">{brandStory[lang]?.tagline||brandStory.hu.tagline}</p><div className="olyStorySections">{(brandStory[lang]?.sections||brandStory.hu.sections).map(([heading,...paragraphs])=><section key={heading} className="olyStorySection"><h3>{heading}</h3>{paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</section>)}</div><p className="olyStoryClosing">{brandStory[lang]?.closing||brandStory.hu.closing}</p></section><h2 className="olyCollectionTitle">{brandStory[lang]?.collection||brandStory.hu.collection}</h2>
   <div className="olyGrid">{products.map((p)=><article className="olyCard" key={p.name}>
    <div className="olyVisual">{p.image?<img src={p.image} alt={p.name} loading="lazy" decoding="async" onError={(event)=>{event.currentTarget.hidden=true;event.currentTarget.nextElementSibling.hidden=false}}/>:null}<div className="olyVisualFallback" hidden={Boolean(p.image)} aria-hidden="true"><span>OLYLIFE</span><strong>{p.name}</strong></div></div>
    <div className="olyCardBody"><small>{t.categories[p.category]}</small><h2>{p.name}</h2><p>{p.desc[lang]||p.desc.hu}</p><p className="olyTech">{p.tech}</p>
    <details className="olyDetails"><summary>{lang==="hu"?"Részletes termékismertető":lang==="de"?"Ausführliche Produktinformationen":"Detailed product information"}</summary>
    {(()=>{const detail=lang==="hu"?olyDetails[p.name]:olyDetailsTranslated[p.name]?.[lang]||olyDetails[p.name];const headings=lang==="de"?["Technologien und Funktionsweise","Funktionen und Ausstattung","Vom Hersteller beworbene Vorteile"]:lang==="en"?["Technologies and operation","Features and design","Benefits claimed by the manufacturer"]:["Technológiák és működés","Funkciók és kialakítás","A gyártó által kommunikált előnyök"];return <><p>{detail.intro}</p><h3>{headings[0]}</h3><p>{detail.technology}</p><h3>{headings[1]}</h3><p>{detail.features}</p><h3>{headings[2]}</h3><p>{detail.claims}</p></>;})()}
    <a href={olyDetails[p.name].source} target="_blank" rel="noopener noreferrer">{lang==="hu"?"Hivatalos gyártói termékadatlap":lang==="de"?"Offizielle Herstellerseite":"Official manufacturer page"} ↗</a>
    </details><span className="olyDisabled">{t.button}</span></div>
   </article>)}</div>
   <p className="olyDisclaimer">{t.disclaimer}</p>
   <a className="olySource" href="https://www.olylifeint.com/Main/En/products.php" target="_blank" rel="noopener noreferrer">{t.source} ↗</a>
  </div>
 </main>;
}
