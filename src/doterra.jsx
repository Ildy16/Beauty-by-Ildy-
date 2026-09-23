import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import "./brandPages.css";

const DOTERRA_SITE = "https://office.doterra.com/beautybyildy/#/";

const copy = {
  hu: {
    back: "Vissza a főoldalra",
    eyebrow: "WELLNESS • AROMATERÁPIA • OTTHONI RITUÁLÉK",
    title: "doTERRA",
    lead: "Illóolajok és aromaterápiás wellness-rutinok a Beauty by Ildy szerkesztői válogatásában.",
    note: "A Beauty by Ildy független, többmárkás szerkesztőségi oldal. Nem a doTERRA hivatalos vállalati weboldala. A vásárlás és a rendelés kezelése a doTERRA hivatalos rendszerében történik.",
    shop: "HIVATALOS DOTERRA OLDAL MEGNYITÁSA",
    heading: "MIRE HASZNÁLNÁD?",
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
    title: "doTERRA",
    lead: "Essential oils and aromatherapy-inspired wellness routines in the Beauty by Ildy editorial edit.",
    note: "Beauty by Ildy is an independent multi-brand editorial website and is not an official doTERRA corporate website. Purchases and orders are completed in doTERRA’s official system.",
    shop: "OPEN OFFICIAL DOTERRA SITE",
    heading: "WHAT ARE YOU LOOKING FOR?",
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
    title: "doTERRA",
    lead: "Ätherische Öle und aromatherapeutisch inspirierte Wellness-Routinen in der redaktionellen Beauty-by-Ildy-Auswahl.",
    note: "Beauty by Ildy ist eine unabhängige, markenübergreifende redaktionelle Website und keine offizielle Unternehmenswebsite von doTERRA. Käufe und Bestellungen werden im offiziellen doTERRA-System abgeschlossen.",
    shop: "OFFIZIELLE DOTERRA-SEITE ÖFFNEN",
    heading: "WONACH SUCHST DU?",
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
        <div className="brandPageMeta"><span>{t.heading}</span><small>Beauty by Ildy × doTERRA</small></div>
        <div className="brandProductGrid">
          {t.cards.map(([name, desc]) => (
            <article className="brandProductCard isInfo" key={name}>
              <div className="brandCardTopline"><span>doTERRA</span><em>EDITORIAL</em></div>
              <h2>{name}</h2>
              <p>{desc}</p>
              <div className="brandCardActions">
                <a href={DOTERRA_SITE} target="_blank" rel="sponsored noopener noreferrer">{t.shop}<ExternalLink size={13}/></a>
              </div>
            </article>
          ))}
        </div>
        <p className="brandPageNote">{t.pending}</p>
      </section>
    </main>
  );
}
