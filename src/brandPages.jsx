import React from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { products } from "./products.jsx";
import "./brandPages.css";

const NUSKIN = [
  ["ageLOC LumiSpa iO System","BEAUTY TECH","Connected cleansing system designed to pair with the Nu Skin Vera app.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/ageloc-lumispa-io.html"],
  ["ageLOC WellSpa iO System","BEAUTY TECH","Nu Skin beauty and wellness device system.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/ageloc-wellspa-io.html"],
  ["ageLOC Boost System","BEAUTY TECH","At-home skin-vitalising device system.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products.html"],
  ["ageLOC Galvanic Spa","BEAUTY TECH","Galvanic at-home beauty device with face, body and scalp applications.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/galvanic_spa/discover-the-benefits.html"],
  ["Galvanic Spa Facial Gels with ageLOC","SKINCARE","Facial gels developed for use with the Galvanic Spa facial conductor.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/galvanic_spa/discover-the-benefits.html"],
  ["ageLOC Tru Face Future Serum","TRU FACE","Premium age-well serum focused on firmness, smoothness, tone and hydration.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-tru-face-landing-page"],
  ["ageLOC Tru Face Line Corrector","TRU FACE","Targeted care for the appearance of fine lines, especially around the mouth and eyes.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-tru-face-landing-page"],
  ["ageLOC Tru Face Radiant Day","TRU FACE","Daytime moisturising care focused on radiance and uneven-looking tone.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-tru-face-landing-page"],
  ["ageLOC Tru Face Transforming Gel Cream","TRU FACE","Gel-cream moisturiser focused on hydration, smoothness and visible pores.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-tru-face-landing-page"],
  ["ageLOC Tru Face Uplifting Rich Cream","TRU FACE","Rich moisturising cream focused on firmness and visible lines.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-tru-face-landing-page"],
  ["ageLOC Tru Face Refining Toner","TRU FACE","Preparatory toner designed to support the next steps of the skincare routine.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-tru-face-landing-page"],
  ["ageLOC Tru Face Peptide Retinol Complex","TRU FACE","Retinol and peptide-focused age-well serum.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-tru-face-landing-page"],
  ["ageLOC Tru Face Essence Ultra","TRU FACE","Firming-focused treatment for a more defined-looking facial contour.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-tru-face-landing-page"],
  ["Nutricentials Pumps Vitamin C + Collagen","NUTRICENTIALS","Current Nutricentials supplement-style beauty product listed in the Hungarian range.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["HydraClean Creamy Cleansing Lotion","NUTRICENTIALS","Creamy facial cleanser.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["To Be Clear Pure Cleansing Gel","NUTRICENTIALS","Gel facial cleanser.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Nutricentials Here You Glow","NUTRICENTIALS","Current Nutricentials exfoliating/renewal product in the Hungarian range.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Day Dream Protective Cream SPF 30","NUTRICENTIALS","Creamy daytime moisturiser with SPF 30.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Day Dream Protective Lotion SPF 30","NUTRICENTIALS","Lightweight daytime moisturiser with SPF 30.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Thirst Fix Hydrating Gel Cream","NUTRICENTIALS","Light hydrating gel cream.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Moisturize Me Intense Hydrating Cream","NUTRICENTIALS","Rich moisturising cream.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Nutricentials Dew All Day Moisture Restore Cream","NUTRICENTIALS","Moisture-restoring facial cream.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Pillow Glow Sleeping Mask","NUTRICENTIALS","Overnight moisturising mask.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Brighter Day Exfoliant Scrub","NUTRICENTIALS","Exfoliating facial scrub.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Spa Day Creamy Hydrating Masque","NUTRICENTIALS","Creamy hydrating facial mask.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["ageLOC Nutriol Scalp & Hair System","HAIR & SCALP","Scalp and hair care system in the ageLOC range.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products.html"],
  ["Beauty Focus Collagen+","WELLNESS","Beauty supplement innovation highlighted by Nu Skin Science.","https://www.nuskin.com/hu_HU/products/pharmanex/shop_all_categories/beauty-focus.html"],
  ["ageLOC TRMe","WELLNESS","Body-balance system highlighted by Nu Skin Science.","https://www.nuskin.com/hu/hu/site/science/nu-skin-science"],
  ["Prysm iO","WELLNESS TECH","2026 smart wellness device for at-home carotenoid tracking.","https://www.nuskin.com/hu/hu/site/science/nu-skin-science"],
];

const copy = {
  hu: {
    back:"Vissza a főoldalra",
    nuskinTitle:"NU SKIN",
    nuskinLead:"Külön Nu Skin válogatás: beauty tech, bőrápolás, hajápolás és wellness egy helyen. A termékadatokat a hivatalos magyar Nu Skin források alapján építjük fel.",
    nuskinNote:"A személyes Nu Skin vásárlási linket csak akkor kapcsoljuk be, amikor a Brand Affiliate státusz és a hivatalos megosztási link visszaigazolása megérkezik. Addig az információs linkek a Nu Skin hivatalos oldalára vezetnek.",
    neumiTitle:"NEUMI",
    neumiLead:"A Beauty by Ildy Neumi válogatása külön márkaoldalon, a jelenlegi nyolc termékkel. A vásárlás továbbra is a hivatalos Neumi oldalon történik.",
    official:"HIVATALOS OLDAL",
    details:"RÉSZLETES ADATLAP",
    verified:"Hivatalos termékforrások alapján · folyamatosan frissítve",
    products:"termék",
  },
  en: {
    back:"Back to home",
    nuskinTitle:"NU SKIN",
    nuskinLead:"A dedicated Nu Skin edit covering beauty tech, skincare, haircare and wellness, built from current official Hungarian Nu Skin sources.",
    nuskinNote:"The personal Nu Skin shopping link will only be connected after Brand Affiliate status and the official sharing link are confirmed. Until then, information links lead to official Nu Skin pages.",
    neumiTitle:"NEUMI",
    neumiLead:"A dedicated Beauty by Ildy Neumi page with the current eight products. Purchases continue on the official Neumi website.",
    official:"OFFICIAL SITE",
    details:"DETAILED PROFILE",
    verified:"Based on official product sources · continuously updated",
    products:"products",
  },
  de: {
    back:"Zurück zur Startseite",
    nuskinTitle:"NU SKIN",
    nuskinLead:"Eine eigene Nu-Skin-Auswahl mit Beauty Tech, Hautpflege, Haarpflege und Wellness auf Basis aktueller offizieller ungarischer Nu-Skin-Quellen.",
    nuskinNote:"Der persönliche Nu-Skin-Einkaufslink wird erst nach Bestätigung des Brand-Affiliate-Status und des offiziellen Sharing-Links eingebunden. Bis dahin führen Informationslinks zu offiziellen Nu-Skin-Seiten.",
    neumiTitle:"NEUMI",
    neumiLead:"Eine eigene Beauty-by-Ildy-Neumi-Seite mit den aktuellen acht Produkten. Der Kauf erfolgt weiterhin auf der offiziellen Neumi-Website.",
    official:"OFFIZIELLE SEITE",
    details:"DETAILPROFIL",
    verified:"Auf Basis offizieller Produktquellen · laufend aktualisiert",
    products:"Produkte",
  }
};

function BrandHero({title,lead,note,t}) {
  return <section className="brandPageHero"><div>
    <a className="brandPageBack" href="#top"><ArrowLeft size={14}/>{t.back}</a>
    <p className="eyebrow">BEAUTY BY ILDY · BRAND EDIT</p>
    <h1>{title}</h1>
    <p className="brandPageLead">{lead}</p>
    {note && <p className="brandPageNote">{note}</p>}
  </div></section>;
}

export function NuSkinPage({lang="hu"}) {
  const t=copy[lang]||copy.hu;
  return <main className="brandPage">
    <BrandHero title={t.nuskinTitle} lead={t.nuskinLead} note={t.nuskinNote} t={t}/>
    <section className="brandPageBody">
      <div className="brandPageMeta"><span>{NUSKIN.length} {t.products}</span><small>{t.verified}</small></div>
      <div className="brandProductGrid">
        {NUSKIN.map(([name,group,desc,url])=><article className="brandProductCard" key={name}>
          <span>{group}</span><h2>{name}</h2><p>{desc}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">{t.official}<ExternalLink size={13}/></a>
        </article>)}
      </div>
    </section>
  </main>;
}

export function NeumiPage({lang="hu"}) {
  const t=copy[lang]||copy.hu;
  const neumi=products.filter(p=>p.brand==="NEUMI");
  return <main className="brandPage">
    <BrandHero title={t.neumiTitle} lead={t.neumiLead} t={t}/>
    <section className="brandPageBody">
      <div className="brandPageMeta"><span>{neumi.length} {t.products}</span><small>{t.verified}</small></div>
      <div className="brandProductGrid">
        {neumi.map(p=><article className="brandProductCard" key={p.slug}>
          <span>{p.category.toUpperCase()}</span><h2>{p.name}</h2><p>{p.ingredients.slice(0,4).join(" · ")}</p>
          <a href={`#product-${p.slug}`}>{t.details}<ArrowRight size={13}/></a>
        </article>)}
      </div>
    </section>
  </main>;
}
