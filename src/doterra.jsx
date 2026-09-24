import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import "./brandPages.css";

const DOTERRA_SITE = "https://office.doterra.com/beautybyildy/#/";

const FEATURED = [
  ["Lavender / Levendula","SINGLE OIL",
    "Lágy, virágos aromájú alapolaj esti és otthoni aromás rutinokhoz.",
    "A soft, floral essential oil for evening and at-home aromatic routines.",
    "Ein sanftes, blumiges ätherisches Öl für abendliche und aromatische Routinen zu Hause."],
  ["Lemon / Citrom","SINGLE OIL",
    "Friss, citrusos illatprofil a könnyed, tiszta hangulatú aromás rutinokhoz.",
    "A bright citrus aroma for fresh, light-feeling aromatic routines.",
    "Ein frisches Zitrusaroma für leichte, klare Duft-Routinen."],
  ["Peppermint / Borsmenta","SINGLE OIL",
    "Élénk, mentás aromájú klasszikus a frissítő illatélményhez.",
    "A vivid mint aroma for a crisp, refreshing scent experience.",
    "Ein lebendiges Minzaroma für ein klares, erfrischendes Dufterlebnis."],
  ["Wild Orange / Vadnarancs","SINGLE OIL",
    "Meleg, édes-citrusos illatprofil otthoni diffúzoros rutinokhoz.",
    "A warm, sweet-citrus aroma for at-home diffuser routines.",
    "Ein warmes, süß-zitrisches Aroma für Diffuser-Routinen zu Hause."],
  ["Tea Tree / Teafa","SINGLE OIL",
    "Karakteres, gyógynövényes illatú esszenciális olaj aromás és kozmetikai rutinokhoz.",
    "A distinctive herbal essential oil for aromatic and cosmetic routines.",
    "Ein markant kräuteriges ätherisches Öl für aromatische und kosmetische Routinen."],
  ["Copaiba","SINGLE OIL",
    "Meleg, fás-balzsamos aromájú olaj nyugodt hangulatú rituálékhoz.",
    "A warm, woody-balsamic aroma for calm-feeling rituals.",
    "Ein warmes, holzig-balsamisches Aroma für ruhige Rituale."],
  ["dōTERRA Air™","BLEND",
    "Friss, mentás-eukaliptuszos aromájú keverék könnyed otthoni illatélményhez.",
    "A fresh mint-and-eucalyptus aromatic blend for a light at-home scent experience.",
    "Eine frische Minz-Eukalyptus-Aromamischung für ein leichtes Dufterlebnis zu Hause."],
  ["dōTERRA Serenity™","BLEND",
    "Lágy, nyugodt hangulatú aromás keverék esti rutinokhoz.",
    "A soft aromatic blend suited to calm-feeling evening routines.",
    "Eine sanfte Aromamischung für ruhige Abendroutinen."],
  ["On Guard™","BLEND",
    "Meleg, fűszeres-citrusos illatú aromás keverék.",
    "A warm, spicy-citrus aromatic blend.",
    "Eine warme, würzig-zitrische Aromamischung."],
  ["Deep Blue™ Rub","BODY CARE",
    "Hűsítő érzetű masszázskrém testápolási és masszázsrutinokhoz.",
    "A cooling-feel massage rub for body-care and massage routines.",
    "Eine Massagecreme mit kühlendem Hautgefühl für Körperpflege- und Massageroutinen."],
  ["Essential Skin Care Hydrating Cream","SKINCARE",
    "Gazdagabb hidratálókrém a doTERRA Essential Skin Care termékcsaládból.",
    "A richer moisturising cream from the doTERRA Essential Skin Care range.",
    "Eine reichhaltigere Feuchtigkeitscreme aus der doTERRA Essential Skin Care Linie."],
  ["Essential Skin Care Firming Serum","SKINCARE",
    "Feszességfókuszú arcszérum az Essential Skin Care termékcsaládból.",
    "A firming-focused facial serum from the Essential Skin Care range.",
    "Ein auf Festigkeit ausgerichtetes Gesichtsserum aus der Essential Skin Care Linie."]
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
    groupNames: {"SINGLE OIL":"EGYEDI ILLÓOLAJOK","BLEND":"OLAJKEVERÉKEK","BODY CARE":"TESTÁPOLÁS","SKINCARE":"BŐRÁPOLÁS"},
    cards: [
      ["AROMÁS RUTINOK", "Illatok és egyszerű otthoni rituálék relaxáló, frissítő vagy fókuszált hangulathoz."],
      ["DIFFÚZOR & OTTHON", "Diffúzorok és illatélmények a lakótér személyes hangulatának kialakításához."],
      ["TESTÁPOLÁS & MASSZÁZS", "Kozmetikai és masszázsrutinokhoz illeszthető, megfelelően hígított aromás megoldások."],
      ["NŐI WELLNESS", "Szerkesztői wellness-tartalmak és mindennapi rituálék túlzó egészségügyi ígéretek nélkül."]
    ],
    safety: "Használat előtt mindig kövesd a hivatalos termékcímke és a doTERRA használati útmutatójának előírásait; az illóolajok alkalmazása termékenként eltérhet.",
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
    groupNames: {"SINGLE OIL":"SINGLE ESSENTIAL OILS","BLEND":"ESSENTIAL OIL BLENDS","BODY CARE":"BODY CARE","SKINCARE":"SKINCARE"},
    cards: [
      ["AROMATIC ROUTINES", "Scents and simple at-home rituals for a relaxing, refreshing or focused atmosphere."],
      ["DIFFUSERS & HOME", "Diffusers and aromatic experiences for shaping the mood of your space."],
      ["BODY CARE & MASSAGE", "Aromatic options suitable for cosmetic and massage routines when used as directed and appropriately diluted."],
      ["WOMEN'S WELLNESS", "Editorial wellbeing content and everyday rituals without exaggerated health claims."]
    ],
    safety: "Always follow the official product label and doTERRA directions for use; essential-oil use can differ by product.",
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
    groupNames: {"SINGLE OIL":"ÄTHERISCHE EINZELÖLE","BLEND":"ÖLMISCHUNGEN","BODY CARE":"KÖRPERPFLEGE","SKINCARE":"HAUTPFLEGE"},
    cards: [
      ["AROMATISCHE ROUTINEN", "Düfte und einfache Rituale für zu Hause für eine entspannte, frische oder fokussierte Atmosphäre."],
      ["DIFFUSER & ZUHAUSE", "Diffuser und Dufterlebnisse für die persönliche Atmosphäre in deinen Räumen."],
      ["KÖRPERPFLEGE & MASSAGE", "Aromatische Optionen für Kosmetik- und Massageroutinen bei sachgemäßer Anwendung und Verdünnung."],
      ["WELLNESS FÜR FRAUEN", "Redaktionelle Wellbeing-Inhalte und Alltagsrituale ohne übertriebene Gesundheitsversprechen."]
    ],
    safety: "Befolge immer das offizielle Produktetikett und die doTERRA-Anwendungshinweise; die Verwendung ätherischer Öle kann je nach Produkt unterschiedlich sein.",
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
          {[...new Set(FEATURED.map(([,group])=>group))].map(group => (
            <section className="doterraGroup" key={group}>
              <div className="doterraGroupHead">
                <h3>{t.groupNames[group] || group}</h3>
                <span>{FEATURED.filter(([,g])=>g===group).length}</span>
              </div>
              <div className="brandProductGrid">
                {FEATURED.filter(([,g])=>g===group).map(([name,,huDesc,enDesc,deDesc]) => {
                  const desc=lang==="de"?deDesc:lang==="en"?enDesc:huDesc;
                  return (
                    <article className="brandProductCard doterraCard isInfo" key={name}>
                      <div className="brandCardTopline"><span>{t.groupNames[group] || group}</span><em>CURATED</em></div>
                      <h2>{name}</h2>
                      <p>{desc}</p>
                      <div className="brandCardActions">
                        <a href={DOTERRA_SITE} target="_blank" rel="sponsored noopener noreferrer">
                          {t.productCta}<ExternalLink size={12}/>
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
        <p className="brandPageNote">{t.safety}</p>
        <p className="brandPageNote">{t.pending}</p>
      </section>
    </main>
  );
}
