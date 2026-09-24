import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import "./brandPages.css";

const DOTERRA_SITE = "https://office.doterra.com/beautybyildy/#/";

const PRODUCTS = [
  [
    "Lavender / Levendula",
    "SINGLE OIL",
    "https://doterra.me/plmkGJ"
  ],
  [
    "Lemon / Citrom",
    "SINGLE OIL",
    "https://doterra.me/1FfT19"
  ],
  [
    "Peppermint / Borsmenta",
    "SINGLE OIL",
    "https://doterra.me/L1Z49P"
  ],
  [
    "Wild Orange / Vadnarancs",
    "SINGLE OIL",
    "https://doterra.me/RxSoR_"
  ],
  [
    "Tea Tree (Melaleuca) / Teafa",
    "SINGLE OIL",
    "https://doterra.me/8SH0An"
  ],
  [
    "Copaiba",
    "SINGLE OIL",
    "https://doterra.me/0T6sfJ"
  ],
  [
    "dōTERRA Air™",
    "BLEND",
    "https://doterra.me/NeInyo"
  ],
  [
    "dōTERRA Serenity™",
    "BLEND",
    "https://doterra.me/hh0cjq"
  ],
  [
    "On Guard™",
    "BLEND",
    "https://doterra.me/__dAa-"
  ],
  [
    "Deep Blue™ Rub / enyhítő krém",
    "BODY CARE",
    "https://doterra.me/dKzfHf"
  ],
  [
    "Frankincense / Tömjén",
    "SINGLE OIL",
    "https://doterra.me/OqsTf9"
  ],
  [
    "Eucalyptus / Eukaliptusz",
    "SINGLE OIL",
    "https://doterra.me/kNx2_q"
  ],
  [
    "Lemongrass / Indiai citromfű",
    "SINGLE OIL",
    "https://doterra.me/XUE-t7"
  ],
  [
    "Basil / Bazsalikom / Tulsi",
    "SINGLE OIL",
    "https://doterra.me/0qtihq"
  ],
  [
    "Bergamot / Bergamott",
    "SINGLE OIL",
    "https://doterra.me/6k6zqG"
  ],
  [
    "Black Pepper / Fekete bors",
    "SINGLE OIL",
    "https://doterra.me/WAbfh6"
  ],
  [
    "Black Spruce / Kanadai fekete luc",
    "SINGLE OIL",
    "https://doterra.me/FcxHN8"
  ],
  [
    "Blue Lotus Touch / Kék Lótusz Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/aFt3D3"
  ],
  [
    "Blue Tansy / Kék varádics",
    "SINGLE OIL",
    "https://doterra.me/qZhaXK"
  ],
  [
    "Cardamom / Kardamom",
    "SINGLE OIL",
    "https://doterra.me/zU6XAu"
  ],
  [
    "Cassia / Kasszia",
    "SINGLE OIL",
    "https://doterra.me/1rv-JG"
  ],
  [
    "Cedarwood / Vörös cédrus",
    "SINGLE OIL",
    "https://doterra.me/VKAA-n"
  ],
  [
    "Celery Seed / Zellermag",
    "SINGLE OIL",
    "https://doterra.me/-jU_Qr"
  ],
  [
    "Citronella",
    "SINGLE OIL",
    "https://doterra.me/ZPW4AF"
  ],
  [
    "Air-X™",
    "BLEND",
    "https://doterra.me/J0Vk9U"
  ],
  [
    "AromaTouch™",
    "BLEND",
    "https://doterra.me/ZzkLN6"
  ],
  [
    "dōTERRA Brave™",
    "BLEND",
    "https://doterra.me/k9DtBy"
  ],
  [
    "dōTERRA Calmer™",
    "BLEND",
    "https://doterra.me/UQjCI3"
  ],
  [
    "dōTERRA Cheer™",
    "BLEND",
    "https://doterra.me/TgTV8B"
  ],
  [
    "Citrus Bliss™",
    "BLEND",
    "https://doterra.me/2H03ok"
  ],
  [
    "ClaryCalm™",
    "BLEND",
    "https://doterra.me/0Tnaas"
  ],
  [
    "DDR Prime™",
    "BLEND",
    "https://doterra.me/CSk612"
  ],
  [
    "DDR Prime™ lágyzselatin kapszula",
    "SUPPLEMENT",
    "https://doterra.me/MLuH7G"
  ],
  [
    "Deep Blue™",
    "BLEND",
    "https://doterra.me/RaEmDM"
  ],
  [
    "Deep Blue™ Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/-TUFFd"
  ],
  [
    "Deep Blue™ golyós kiszerelés",
    "ROLL-ON / TOUCH",
    "https://doterra.me/0tyohB"
  ],
  [
    "dōTERRA Balance™",
    "BLEND",
    "https://doterra.me/8TU62c"
  ],
  [
    "dōTERRA Anchor™",
    "BLEND",
    "https://doterra.me/pkKYwy"
  ],
  [
    "Purify™",
    "BLEND",
    "https://doterra.me/9zAiyF"
  ],
  [
    "ZenGest™",
    "BLEND",
    "https://doterra.me/kj3fxV"
  ],
  [
    "MetaPWR™",
    "BLEND",
    "https://doterra.me/QjrueH"
  ],
  [
    "Deep Blue™ enyhítő krém minta",
    "BODY CARE",
    "https://doterra.me/1945Gx"
  ],
  [
    "dōTERRA Balance™ dezodor",
    "PERSONAL CARE",
    "https://doterra.me/uf3Wqp"
  ],
  [
    "Citrus Bliss™ dezodor",
    "PERSONAL CARE",
    "https://doterra.me/5hyP4u"
  ],
  [
    "Correct-X™",
    "SKINCARE",
    "https://doterra.me/dLmbaf"
  ],
  [
    "dōTERRA dezodor duglászfenyő + görög narancs",
    "PERSONAL CARE",
    "https://doterra.me/D8m-V8"
  ],
  [
    "Tömjén stift + Naiofa",
    "SKINCARE",
    "https://doterra.me/kpPYMQ"
  ],
  [
    "Ajakbalzsam – Eredeti",
    "PERSONAL CARE",
    "https://doterra.me/0ko22w"
  ],
  [
    "On Guard™ gyöngyöcskék",
    "ON GUARD",
    "https://doterra.me/41czPj"
  ],
  [
    "On Guard™ cukorka",
    "ON GUARD",
    "https://doterra.me/_XzB6S"
  ],
  [
    "On Guard™ szájvíz",
    "ON GUARD",
    "https://doterra.me/GabI_7"
  ],
  [
    "On Guard™ Toothpaste",
    "ON GUARD",
    "https://doterra.me/t2E3KM"
  ],
  [
    "CP+ lágyzselatin kapszula",
    "SUPPLEMENT",
    "https://doterra.me/dgY5fI"
  ],
  [
    "PB Restore™",
    "SUPPLEMENT",
    "https://doterra.me/tYPPr3"
  ],
  [
    "dōTERRA Rostkeverék",
    "SUPPLEMENT",
    "https://doterra.me/667p7M"
  ],
  [
    "VMG+™",
    "SUPPLEMENT",
    "https://doterra.me/ZDwTZn"
  ],
  [
    "Fractionated Coconut Oil",
    "ACCESSORY",
    "https://doterra.me/296_lO"
  ],
  [
    "Yarrow|Pom testmegújító szérum",
    "BODY CARE",
    "https://doterra.me/-hTEoF"
  ],
  [
    "Levendula Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/fCQl7S"
  ],
  [
    "Vietnámi eukaliptusz",
    "SINGLE OIL",
    "https://doterra.me/wwcycA"
  ],
  [
    "Óriás tuja",
    "SINGLE OIL",
    "https://doterra.me/-uypYZ"
  ],
  [
    "Copaiba Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/SKuLJu"
  ],
  [
    "Tömjén Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/a8l5kF"
  ],
  [
    "HD Clear™ helyi használatra való keverék",
    "ROLL-ON / TOUCH",
    "https://doterra.me/LAAuoA"
  ],
  [
    "Olasz szalmagyopár Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/WO8KVP"
  ],
  [
    "InTune™",
    "ROLL-ON / TOUCH",
    "https://doterra.me/lNsquJ"
  ],
  [
    "Jázmin Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/b-aGGB"
  ],
  [
    "dōTERRA Cheer™ Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/r9E8NO"
  ],
  [
    "dōTERRA Passion™ Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/U54pAg"
  ],
  [
    "dōTERRA Forgive™ Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/waru66"
  ],
  [
    "dōTERRA Peace™ Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/Lvro9v"
  ],
  [
    "dōTERRA Adaptiv™ Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/bzb3Ru"
  ],
  [
    "dōTERRA Hope™ Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/AJjT5y"
  ],
  [
    "Thinker™",
    "KIDS",
    "https://doterra.me/nqd4fu"
  ],
  [
    "dōTERRA Rescuer™",
    "KIDS",
    "https://doterra.me/51sZEu"
  ],
  [
    "dōTERRA Steady™",
    "KIDS",
    "https://doterra.me/puMAS5"
  ],
  [
    "Stronger™",
    "KIDS",
    "https://doterra.me/2xpIaN"
  ],
  [
    "Tamer™",
    "KIDS",
    "https://doterra.me/lhrJzO"
  ],
  [
    "dōTERRA popsikenőcs babáknak",
    "KIDS & BABY",
    "https://doterra.me/7BubBo"
  ],
  [
    "dōTERRA a2z Chewable™ rágótabletta",
    "KIDS SUPPLEMENT",
    "https://doterra.me/vZu_u-"
  ],
  [
    "IQ Mega™",
    "KIDS SUPPLEMENT",
    "https://doterra.me/7qjCuQ"
  ],
  [
    "Öregedésgátló szemkrém",
    "SKINCARE",
    "https://doterra.me/3lDins"
  ],
  [
    "Öregedésgátló hidratálókrém",
    "SKINCARE",
    "https://doterra.me/7wNnqs"
  ],
  [
    "Arctisztító",
    "SKINCARE",
    "https://doterra.me/Lg1zvN"
  ],
  [
    "Hidratálókrém",
    "SKINCARE",
    "https://doterra.me/7wNnqs"
  ],
  [
    "dōTERRA™ sun ajakbalzsam SPF 15",
    "SUN CARE",
    "https://doterra.me/CyL46h"
  ],
  [
    "dōTERRA SPA tápláló testvaj",
    "BODY CARE",
    "https://doterra.me/OLFvDc"
  ],
  [
    "dōTERRA védősampon",
    "HAIR CARE",
    "https://doterra.me/ESWcnB"
  ],
  [
    "dōTERRA napi kondicionáló",
    "HAIR CARE",
    "https://doterra.me/Q68l5e"
  ],
  [
    "Alpha CRS™+",
    "SUPPLEMENT",
    "https://doterra.me/FwDnTR"
  ],
  [
    "Microplex VMz™",
    "SUPPLEMENT",
    "https://doterra.me/6kjONB"
  ],
  [
    "dōTERRA™ Csokoládés növényi fehérje",
    "SUPPLEMENT",
    "https://doterra.me/VASlW9"
  ],
  [
    "Deep Blue™ Polyphenol Complex",
    "SUPPLEMENT",
    "https://doterra.me/kMCwb0"
  ],
  [
    "ZenGest DigestTab™",
    "SUPPLEMENT",
    "https://doterra.me/0uZm8k"
  ],
  [
    "ZenGest™ lágyzselatin kapszula",
    "SUPPLEMENT",
    "https://doterra.me/-CpdZ8"
  ],
  [
    "ZenGest™ Touch",
    "ROLL-ON / TOUCH",
    "https://doterra.me/W_uovf"
  ],
  [
    "TriEase™ lágyzselatin kapszula",
    "SUPPLEMENT",
    "https://doterra.me/43zTrq"
  ],
  [
    "PB Assist+™",
    "SUPPLEMENT",
    "https://doterra.me/w0dt0T"
  ],
  [
    "MetaPWR™ Mito2Max™",
    "SUPPLEMENT",
    "https://doterra.me/VdwDI6"
  ],
  [
    "MetaPWR™ Advantage",
    "SUPPLEMENT",
    "https://doterra.me/spwOcC"
  ],
  [
    "Esszenciális csont tápanyag komplex",
    "WOMEN",
    "https://doterra.me/TlKNkR"
  ],
  [
    "Esszenciális fitoösztrogén komplex",
    "WOMEN",
    "https://doterra.me/JsAARp"
  ],
  [
    "dōTERRA™ Gyömbéres cukorka",
    "TARGETED",
    "https://doterra.me/6POU7c"
  ],
  [
    "Lumo párologtató + dōTERRA Serenity™",
    "DIFFUSER",
    "https://doterra.me/e7LzCS"
  ],
  [
    "Petal 2.0 párologtató",
    "DIFFUSER",
    "https://doterra.me/4QRNz9"
  ],
  [
    "Hármas csomag Petal™ párologtatóval",
    "DIFFUSER",
    "https://doterra.me/qd3YfW"
  ],
  [
    "10 ml-es borostyánszínű golyós üvegek – 6 db",
    "ACCESSORY",
    "https://doterra.me/ov3Gdc"
  ],
  [
    "30 ml-es szórófejes flakon – 3 db",
    "ACCESSORY",
    "https://doterra.me/13EACX"
  ],
  [
    "2 ml-es mintaüvegek – 72 db",
    "ACCESSORY",
    "https://doterra.me/xldFbm"
  ]
];


const copy = {
  hu: {
    back: "Vissza a főoldalra",
    eyebrow: "WELLNESS • AROMATERÁPIA • OTTHONI RITUÁLÉK",
    title: "Illóolajok & aromás wellness",
    lead: "Illóolajok és aromás wellness-rutinok a Beauty by Ildy szerkesztői válogatásában. A kínálatban doTERRA termékekhez is adunk hivatalos vásárlási útvonalat.",
    note: "A Beauty by Ildy független, többmárkás szerkesztőségi oldal. Nem a doTERRA hivatalos vállalati weboldala. A vásárlás és a rendelés kezelése a doTERRA hivatalos rendszerében történik.",
    shop: "FEDEZD FEL A TELJES DOTERRA KÍNÁLATOT",
    heading: "MIRE HASZNÁLNÁD?",
    featured: "DOTERRA TERMÉKEK",
    productCta: "TERMÉK MEGNYITÁSA",
    productDesc: "Közvetlen doTERRA referral link a kiválasztott termékhez.",
    groupNames: {"SINGLE OIL":"EGYEDI ILLÓOLAJOK","BLEND":"OLAJKEVERÉKEK","ROLL-ON / TOUCH":"TOUCH / GOLYÓS","BODY CARE":"TESTÁPOLÁS","SKINCARE":"BŐRÁPOLÁS","PERSONAL CARE":"SZEMÉLYES ÁPOLÁS","ON GUARD":"ON GUARD TERMÉKEK","SUPPLEMENT":"ÉTREND-KIEGÉSZÍTŐK","ACCESSORY":"KIEGÉSZÍTŐK","KIDS":"GYEREK TERMÉKEK","KIDS & BABY":"BABA & GYEREK","KIDS SUPPLEMENT":"GYEREK ÉTREND-KIEGÉSZÍTŐK","SUN CARE":"NAPVÉDELEM","HAIR CARE":"HAJÁPOLÁS","WOMEN":"NŐI WELLNESS","TARGETED":"CÉLZOTT TERMÉKEK","DIFFUSER":"PÁROLOGTATÓK"},
    cards: [
      ["AROMÁS RUTINOK", "Illatok és egyszerű otthoni rituálék relaxáló, frissítő vagy fókuszált hangulathoz."],
      ["DIFFÚZOR & OTTHON", "Diffúzorok és illatélmények a lakótér személyes hangulatának kialakításához."],
      ["TESTÁPOLÁS & MASSZÁZS", "Kozmetikai és masszázsrutinokhoz illeszthető, megfelelően hígított aromás megoldások."],
      ["NŐI WELLNESS", "Szerkesztői wellness-tartalmak és mindennapi rituálék túlzó egészségügyi ígéretek nélkül."]
    ],
    safety: "Használat előtt mindig kövesd a hivatalos termékcímke és a doTERRA használati útmutatójának előírásait; az illóolajok alkalmazása termékenként eltérhet.",
    routeNote: "A termékgombok az általad kiválasztott termékhez tartozó doTERRA referral linkre vezetnek. A teljes kínálat gomb továbbra is a doTERRA által biztosított saját oldaladra visz."
  },
  en: {
    back: "Back to home",
    eyebrow: "WELLNESS • AROMATHERAPY • AT-HOME RITUALS",
    title: "Essential oils & aromatic wellness",
    lead: "Essential oils and aromatherapy-inspired wellness routines in the Beauty by Ildy editorial edit, including an official purchase route for doTERRA products.",
    note: "Beauty by Ildy is an independent multi-brand editorial website and is not an official doTERRA corporate website. Purchases and orders are completed in doTERRA’s official system.",
    shop: "EXPLORE THE FULL DOTERRA RANGE",
    heading: "WHAT ARE YOU LOOKING FOR?",
    featured: "DOTERRA PRODUCTS",
    productCta: "OPEN PRODUCT",
    productDesc: "Direct doTERRA referral link for the selected product.",
    groupNames: {"SINGLE OIL":"SINGLE ESSENTIAL OILS","BLEND":"ESSENTIAL OIL BLENDS","ROLL-ON / TOUCH":"TOUCH / ROLL-ON","BODY CARE":"BODY CARE","SKINCARE":"SKINCARE","PERSONAL CARE":"PERSONAL CARE","ON GUARD":"ON GUARD PRODUCTS","SUPPLEMENT":"SUPPLEMENTS","ACCESSORY":"ACCESSORIES","KIDS":"KIDS","KIDS & BABY":"BABY & KIDS","KIDS SUPPLEMENT":"KIDS SUPPLEMENTS","SUN CARE":"SUN CARE","HAIR CARE":"HAIR CARE","WOMEN":"WOMEN’S WELLNESS","TARGETED":"TARGETED PRODUCTS","DIFFUSER":"DIFFUSERS"},
    cards: [
      ["AROMATIC ROUTINES", "Scents and simple at-home rituals for a relaxing, refreshing or focused atmosphere."],
      ["DIFFUSERS & HOME", "Diffusers and aromatic experiences for shaping the mood of your space."],
      ["BODY CARE & MASSAGE", "Aromatic options suitable for cosmetic and massage routines when used as directed and appropriately diluted."],
      ["WOMEN'S WELLNESS", "Editorial wellbeing content and everyday rituals without exaggerated health claims."]
    ],
    safety: "Always follow the official product label and doTERRA directions for use; essential-oil use can differ by product.",
    routeNote: "Product buttons use direct doTERRA referral links for the selected products. The full-range button still opens Beauty by Ildy’s doTERRA-provided replicated site."
  },
  de: {
    back: "Zurück zur Startseite",
    eyebrow: "WELLNESS • AROMATHERAPIE • RITUALE FÜR ZU HAUSE",
    title: "Ätherische Öle & aromatisches Wellness",
    lead: "Ätherische Öle und aromatherapeutisch inspirierte Wellness-Routinen in der redaktionellen Beauty-by-Ildy-Auswahl, einschließlich eines offiziellen Kaufwegs für doTERRA-Produkte.",
    note: "Beauty by Ildy ist eine unabhängige, markenübergreifende redaktionelle Website und keine offizielle Unternehmenswebsite von doTERRA. Käufe und Bestellungen werden im offiziellen doTERRA-System abgeschlossen.",
    shop: "DAS GESAMTE DOTERRA-SORTIMENT ENTDECKEN",
    heading: "WONACH SUCHST DU?",
    featured: "DOTERRA PRODUKTE",
    productCta: "PRODUKT ÖFFNEN",
    productDesc: "Direkter doTERRA-Empfehlungslink zum ausgewählten Produkt.",
    groupNames: {"SINGLE OIL":"ÄTHERISCHE EINZELÖLE","BLEND":"ÖLMISCHUNGEN","ROLL-ON / TOUCH":"TOUCH / ROLL-ON","BODY CARE":"KÖRPERPFLEGE","SKINCARE":"HAUTPFLEGE","PERSONAL CARE":"KÖRPER- & ALLTAGSPFLEGE","ON GUARD":"ON GUARD PRODUKTE","SUPPLEMENT":"NAHRUNGSERGÄNZUNG","ACCESSORY":"ZUBEHÖR","KIDS":"KINDER","KIDS & BABY":"BABY & KINDER","KIDS SUPPLEMENT":"NAHRUNGSERGÄNZUNG FÜR KINDER","SUN CARE":"SONNENSCHUTZ","HAIR CARE":"HAARPFLEGE","WOMEN":"WELLNESS FÜR FRAUEN","TARGETED":"GEZIELTE PRODUKTE","DIFFUSER":"DIFFUSER"},
    cards: [
      ["AROMATISCHE ROUTINEN", "Düfte und einfache Rituale für zu Hause für eine entspannte, frische oder fokussierte Atmosphäre."],
      ["DIFFUSER & ZUHAUSE", "Diffuser und Dufterlebnisse für die persönliche Atmosphäre in deinen Räumen."],
      ["KÖRPERPFLEGE & MASSAGE", "Aromatische Optionen für Kosmetik- und Massageroutinen bei sachgemäßer Anwendung und Verdünnung."],
      ["WELLNESS FÜR FRAUEN", "Redaktionelle Wellbeing-Inhalte und Alltagsrituale ohne übertriebene Gesundheitsversprechen."]
    ],
    safety: "Befolge immer das offizielle Produktetikett und die doTERRA-Anwendungshinweise; die Verwendung ätherischer Öle kann je nach Produkt unterschiedlich sein.",
    routeNote: "Die Produktbuttons verwenden direkte doTERRA-Empfehlungslinks. Der Button für das Gesamtsortiment öffnet weiterhin die von doTERRA bereitgestellte Beauty-by-Ildy-Seite."
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
          <div className="brandGroupHead"><h2>{t.featured}</h2><span>{PRODUCTS.length}</span></div>
          {[...new Set(PRODUCTS.map(([,group])=>group))].map(group => (
            <section className="doterraGroup" key={group}>
              <div className="doterraGroupHead">
                <h3>{t.groupNames[group] || group}</h3>
                <span>{PRODUCTS.filter(([,g])=>g===group).length}</span>
              </div>
              <div className="brandProductGrid">
                {PRODUCTS.filter(([,g])=>g===group).map(([name,,url]) => (
                  <article className="brandProductCard doterraCard isInfo" key={name}>
                    <div className="brandCardTopline"><span>{t.groupNames[group] || group}</span><em>DIRECT LINK</em></div>
                    <h2>{name}</h2>
                    <p>{t.productDesc}</p>
                    <div className="brandCardActions">
                      <a href={url} target="_blank" rel="sponsored noopener noreferrer">
                        {t.productCta}<ExternalLink size={12}/>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="brandPageNote">{t.safety}</p>
        <p className="brandPageNote">{t.routeNote}</p>
      </section>
    </main>
  );
}
