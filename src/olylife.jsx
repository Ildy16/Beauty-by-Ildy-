import React from "react";
import "./olylife.css";
import { olyDetails } from "./olylifeDetails.js";

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
export function OlyLifePage({lang="hu"}){
 const t=labels[lang]||labels.hu;
 return <main className="olyPage">
  <header className="olyHero"><p>{t.eyebrow}</p><h1>OLYLIFE</h1><div className="olyGoldRule"/><p className="olyLead">{t.lead}</p></header>
  <div className="olyContent"><p className="olyNotice">{t.notice}</p>
   <div className="olyGrid">{products.map((p)=><article className="olyCard" key={p.name}>
    <div className="olyVisual">{p.image?<img src={p.image} alt={p.name} loading="lazy" decoding="async" onError={(event)=>{event.currentTarget.hidden=true;event.currentTarget.nextElementSibling.hidden=false}}/>:null}<div className="olyVisualFallback" hidden={Boolean(p.image)} aria-hidden="true"><span>OLYLIFE</span><strong>{p.name}</strong></div></div>
    <div className="olyCardBody"><small>{t.categories[p.category]}</small><h2>{p.name}</h2><p>{p.desc[lang]||p.desc.hu}</p><p className="olyTech">{p.tech}</p>
    <details className="olyDetails"><summary>{lang==="hu"?"Részletes termékismertető":lang==="de"?"Ausführliche Produktinformationen":"Detailed product information"}</summary>
    {lang==="hu"?<><p>{olyDetails[p.name].intro}</p><h3>Technológiák és működés</h3><p>{olyDetails[p.name].technology}</p><h3>Funkciók és kialakítás</h3><p>{olyDetails[p.name].features}</p><h3>A gyártó által kommunikált előnyök</h3><p>{olyDetails[p.name].claims}</p></>:<><p>{p.desc[lang]}</p><p>{lang==="de"?"Ausführliche technische Informationen derzeit auf Ungarisch verfügbar.":"Detailed technical information currently available in Hungarian."}</p></>}
    <a href={olyDetails[p.name].source} target="_blank" rel="noopener noreferrer">{lang==="hu"?"Hivatalos gyártói termékadatlap":lang==="de"?"Offizielle Herstellerseite":"Official manufacturer page"} ↗</a>
    </details><span className="olyDisabled">{t.button}</span></div>
   </article>)}</div>
   <p className="olyDisclaimer">{t.disclaimer}</p>
   <a className="olySource" href="https://www.olylifeint.com/Main/En/products.php" target="_blank" rel="noopener noreferrer">{t.source} ↗</a>
  </div>
 </main>;
}
