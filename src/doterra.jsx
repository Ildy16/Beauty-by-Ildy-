import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import "./brandPages.css";

const DOTERRA_SITE = "https://office.doterra.com/beautybyildy/#/";

const FEATURED = [
  ["Lavender / Levendula","SINGLE OIL","Lágy, virágos aromájú alapolaj esti és otthoni aromás rutinokhoz."],
  ["Lemon / Citrom","SINGLE OIL","Friss, citrusos illatprofil a könnyed, tiszta hangulatú aromás rutinokhoz."],
  ["Peppermint / Borsmenta","SINGLE OIL","Élénk, mentás aromájú klasszikus a frissítő illatélményhez."],
  ["Wild Orange / Vadnarancs","SINGLE OIL","Meleg, édes-citrusos illatprofil otthoni diffúzoros rutinokhoz."],
  ["Tea Tree / Teafa","SINGLE OIL","Karakteres, gyógynövényes illatú esszenciális olaj többféle kozmetikai és aromás rutinban."],
  ["Copaiba","SINGLE OIL","Meleg, fás-balzsamos aromájú olaj nyugodt, kiegyensúlyozott hangulatú rituálékhoz."],
  ["dōTERRA Air™","BLEND","Friss, mentás-eukaliptuszos aromájú keverék a könnyedebb otthoni illatélményhez."],
  ["dōTERRA Serenity™","BLEND","Lágy, nyugtató hangulatú aromás keverék esti rutinokhoz."],
  ["On Guard™","BLEND","Meleg, fűszeres-citrusos illatú keverék és az egyik legismertebb doTERRA termékcsalád."],
  ["Deep Blue™ Rub","BODY CARE","Hűsítő érzetű masszázskrém sportolás vagy megterhelő nap utáni testápolási rutinhoz."],
  ["Essential Skin Care Hydrating Cream","SKINCARE","Gazdagabb hidratálókrém a doTERRA Essential Skin Care termékcsaládból."],
  ["Essential Skin Care Firming Serum","SKINCARE","Feszességfókuszú arcszérum az Essential Skin Care termékcsaládból."]
];

const copy = {
  hu: {
    back: "Vissza a főoldalra",
    eyebrow: "WELLNESS • AROMATERÁPIA • OTTHONI RITUÁLÉK",
    title: "Illóolajok & aromás wellness",
    lead: "Illóolajok és aromás wellness-rutinok a Beauty by Ildy szerkesztői válogatásában. A kínálatban doTERRA termékekhez is adunk hivatalos vásárlási útvonalat.",
    note: "A Beauty by Ildy független, többmárkás szerkesztőségi oldal. Nem a doTERRA hivatalos vállalati weboldala. A vásárlás és a rendelés kezelése a doTERRA hivatalos rendszerében történik.",
    shop: "HIVATALOS DOTERRA OLDAL MEGNYITÁSA",
    heading: "MIRE HASZNÁLNÁD?",
    featured: "KIEMELT TERMÉKEK",
    productCta: "MEGNÉZEM A HIVATALOS KÍNÁLATBAN",
    cards: [
      ["AROMÁS RUTINOK", "Illatok és egyszerű otthoni rituálék relaxáló, frissítő vagy fókuszált hangulathoz."],
      ["DIFFÚZOR & OTTHON", "Diffúzorok és illatélmények a lakótér személyes hangulatának kialakításához."],
      ["TESTÁPOLÁS & MASSZÁZS", "Kozmetikai és masszázsrutinokhoz illeszthető, megfelelően hígított aromás megoldások."],
      ["NŐI WELLNESS", "Szerkesztői wellness-tartalmak és mindennapi rituálék túlzó egészségügyi ígéretek nélkül."]
    ],
    pending: "A termékspecifikus doTERRA vásárlási linkeket külön ellenőrizzük, mielőtt közvetlen termékgombokat teszünk ki."
  },
  en: {
    back: "Back to home",
    eyebrow: "WELLNESS • AROMATHERAPY • AT-HOME RITUALS",
    title: "Essential oils & aromatic wellness",
    lead: "Essential oils and aromatherapy-inspired wellness routines in the Beauty by Ildy editorial edit, including an official purchase route for doTERRA products.",
    note: "Beauty by Ildy is an independent multi-brand editorial website and is not an official doTERRA corporate website. Purchases and orders are completed in doTERRA’s official system.",
    shop: "OPEN OFFICIAL DOTERRA SITE",
    heading: "WHAT ARE YOU LOOKING FOR?",
    featured: "FEATURED PRODUCTS",
    productCta: "VIEW IN THE OFFICIAL SHOP",
    cards: [
      ["AROMATIC ROUTINES", "Scents and simple at-home rituals for a relaxing, refreshing or focused atmosphere."],
      ["DIFFUSERS & HOME", "Diffusers and aromatic experiences for shaping the mood of your space."],
      ["BODY CARE & MASSAGE", "Aromatic options suitable for cosmetic and massage routines when used as directed and appropriately diluted."],
      ["WOMEN'S WELLNESS", "Editorial wellbeing content and everyday rituals without exaggerated health claims."]
    ],
    pending: "Product-specific doTERRA purchase links will be verified separately before direct product buttons are published."
  },
  de: {
    back: "Zurück zur Startseite",
    eyebrow: "WELLNESS • AROMATHERAPIE • RITUALE FÜR ZU HAUSE",
    title: "Ätherische Öle & aromatisches Wellness",
    lead: "Ätherische Öle und aromatherapeutisch inspirierte Wellness-Routinen in der redaktionellen Beauty-by-Ildy-Auswahl, einschließlich eines offiziellen Kaufwegs für doTERRA-Produkte.",
    note: "Beauty by Ildy ist eine unabhängige, markenübergreifende redaktionelle Website und keine offizielle Unternehmenswebsite von doTERRA. Käufe und Bestellungen werden im offiziellen doTERRA-System abgeschlossen.",
    shop: "OFFIZIELLE DOTERRA-SEITE ÖFFNEN",
    heading: "WONACH SUCHST DU?",
    featured: "AUSGEWÄHLTE PRODUKTE",
    productCta: "IM OFFIZIELLEN SHOP ANSEHEN",
    cards: [
      ["AROMATISCHE ROUTINEN", "Düfte und einfache Rituale für zu Hause für eine entspannte, frische oder fokussierte Atmosphäre."],
      ["DIFFUSER & ZUHAUSE", "Diffuser und Dufterlebnisse für die persönliche Atmosphäre in deinen Räumen."],
      ["KÖRPERPFLEGE & MASSAGE", "Aromatische Optionen für Kosmetik- und Massageroutinen bei sachgemäßer Anwendung und Verdünnung."],
      ["WELLNESS FÜR FRAUEN", "Redaktionelle Wellbeing-Inhalte und Alltagsrituale ohne übertriebene Gesundheitsversprechen."]
    ],
    pending: "Produktspezifische doTERRA-Kauflinks werden separat geprüft, bevor direkte Produktbuttons veröffentlicht werden."
  }
};

export function DoterraPage({ lang = "hu" }) {
  const t = copy[lang] || copy.hu;
  return (
    <main className="brandPage">
      <section className="brandPageHero">
        <div>
          <a className="brandPageBack" href="#top"><ArrowLeft size={14}/>{t.back}</a>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="brandPageLead">{t.lead}</p>
          <p className="brandPageNote">{t.note}</p>
        </div>
      </section>
      <div className="brandShopBar">
        <a href={DOTERRA_SITE} target="_blank" rel="sponsored noopener noreferrer">
          {t.shop}<ExternalLink size={13}/>
        </a>
      </div>
      <section className="brandPageBody">
        <div className="brandPageMeta"><span>{t.heading}</span><small>Independent wellness edit</small></div>
        <div className="brandProductGrid">
          {t.cards.map(([name, desc]) => (
            <article className="brandProductCard isInfo" key={name}>
              <div className="brandCardTopline"><span>BEAUTY BY ILDY</span><em>EDITORIAL</em></div>
              <h2>{name}</h2>
              <p>{desc}</p>
              <div className="brandCardActions">
                <a href={DOTERRA_SITE} target="_blank" rel="sponsored noopener noreferrer">{t.shop}<ExternalLink size={13}/></a>
              </div>
            </article>
          ))}
        </div>
        <div className="brandGroup doterraFeatured">
          <div className="brandGroupHead"><h2>{t.featured}</h2><span>{FEATURED.length}</span></div>
          <div className="brandProductGrid">
            {FEATURED.map(([name, group, desc]) => (
              <article className="brandProductCard isInfo" key={name}>
                <div className="brandCardTopline"><span>{group}</span><em>CURATED</em></div>
                <h2>{name}</h2>
                <p>{desc}</p>
                <div className="brandCardActions">
                  <a href={DOTERRA_SITE} target="_blank" rel="sponsored noopener noreferrer">
                    {t.productCta}<ExternalLink size={13}/>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="brandPageNote">{t.pending}</p>
      </section>
    </main>
  );
}
