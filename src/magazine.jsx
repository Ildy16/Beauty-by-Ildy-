import React from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import "./magazine.css";

const ARTICLES = {
  hu: [
    {
      tag:"FRISS TUDOMÁNY · 2026. SZEPTEMBER",
      title:"Exoszóma-hype után: most jön a minőségellenőrzés korszaka?",
      dek:"Egy 2026. szeptember 9-én megjelent szakirodalmi áttekintés szerint a bőrre szánt mikrobiom-eredetű vezikulák körül a marketingnyelv gyorsabban fejlődött, mint az egységes azonosítási és minőségbiztosítási szabályok.",
      body:[
        "Az „exoszóma” szó 2026-ban már nem csak laboratóriumi kifejezés: egyre több kozmetikai kommunikációban jelenik meg. A friss koreai szakirodalmi áttekintés azonban arra figyelmeztet, hogy a különböző eredetű extracelluláris vezikulákat nem lehet automatikusan egyetlen kategóriaként kezelni.",
        "A valódi kérdés ezért nem az, hogy szerepel-e az „exosome” szó a csomagoláson, hanem az, hogy pontosan miből származik az anyag, hogyan azonosították, hogyan standardizálták a gyártást, és milyen minőségellenőrzést végeztek.",
        "Beauty by Ildy-szempontból ez fontos váltás: a következő időszakban az exoszóma-jellegű termékeknél nem a trendi kulcsszó lesz az első szűrő, hanem a forrás, a gyártási minőség, az alkalmazott technológia és az állítások bizonyítékszintje."
      ],
      source:"PubMed / Genes & Genomics · 2026.09.09",
      url:"https://pubmed.ncbi.nlm.nih.gov/42714753/"
    },
    {
      tag:"INTELLIGENS WELLNESS · 2026",
      title:"Prysm iO: 15 másodperc alatt bőrkarotinoid-mérés — mire jó valójában?",
      dek:"A Nu Skin 2026-ban fogyasztói piacra vitte a Prysm iO platformot, amely ujjbegyen végzett, nem invazív méréssel 15 másodperc alatt becsüli a bőr karotinoidszintjét.",
      body:[
        "A Prysm iO a beauty tech és a wellness tech határán mozog. A gyártó közlése szerint a készülék a bőr karotinoidszintjét méri, majd az eredményt digitális platformon keresztül követhetővé teszi.",
        "Ez nem vérvizsgálat és nem diagnosztikai eszköz. Inkább egy trendkövető mérés: arra lehet érdekes, hogy ugyanazon embernél időben hogyan változik egy biomarker-jellegű érték a táplálkozás, életmód és kiegészítők mellett.",
        "A technológia azért különösen érdekes, mert jól mutatja, merre tart a wellness: egyszeri termékajánlás helyett folyamatos mérés, visszajelzés és személyre szabottabb digitális élmény felé."
      ],
      source:"Nu Skin Enterprises · 2026.04.02 / 2026.09.03",
      url:"https://ir.nuskin.com/news-releases/news-release-details/nu-skin-launches-prysmiotm-revolutionary-ai-powered-platform"
    },
    {
      tag:"BEAUTY TECH RADAR · 2026. SZEPTEMBER",
      title:"LED és mikroáram már nem rétegtermék: ezt mutatják a 2026-os beauty díjak",
      dek:"Az Allure 2026-os Best of Beauty bőrápolási válogatásában külön beauty-device kategória is hangsúlyos, többek között LED- és mikroáramos készülékekkel.",
      body:[
        "Az otthoni beauty eszközök néhány éve még különleges kiegészítőnek számítottak; 2026-ban már a mainstream bőrápolási válogatások részei. Az Allure idei listáján például LED-es maszk és mikroáramos eszköz is szerepel.",
        "Ez önmagában nem klinikai bizonyíték — egy szerkesztőségi díj nem helyettesít kontrollált vizsgálatot. Viszont jól jelzi a fogyasztói irányt: a bőrápolás egyre inkább formula + eszköz + rutin kombinációvá válik.",
        "A Beauty by Ildy ezért külön kezeli majd a technológiákat: mire van valódi evidencia, milyen teljesítményt lehet otthoni használattól reálisan várni, és hol kezdődik a túlzó marketing."
      ],
      source:"Allure Best of Beauty 2026 · Skin Care Winners",
      url:"https://www.allure.com/story/best-of-beauty-2026-skin-care-product-winners"
    }
  ],
  en: [
    {
      tag:"NEW SCIENCE · SEPTEMBER 2026",
      title:"After the exosome hype: is quality control becoming the real story?",
      dek:"A review published on September 9, 2026 argues that terminology around microbiome-derived vesicles in skin-directed cosmetics has moved faster than harmonised identity and quality standards.",
      body:[
        "In 2026, “exosome” is no longer confined to the laboratory; it has entered cosmetic marketing. The new review warns that extracellular vesicles from different biological sources should not automatically be treated as one uniform category.",
        "The useful question is therefore not simply whether a product says “exosome”, but what the material is derived from, how it was identified, how manufacturing was standardised and what quality controls were applied.",
        "For Beauty by Ildy, this changes the filter: source, manufacturing quality, delivery technology and evidence behind claims matter more than the fashionable keyword itself."
      ],
      source:"PubMed / Genes & Genomics · 2026-09-09",
      url:"https://pubmed.ncbi.nlm.nih.gov/42714753/"
    },
    {
      tag:"INTELLIGENT WELLNESS · 2026",
      title:"Prysm iO: a 15-second skin carotenoid scan — what does it actually tell you?",
      dek:"Nu Skin brought Prysm iO to consumers in 2026, using a non-invasive fingertip scan to estimate skin carotenoid levels in about 15 seconds.",
      body:[
        "Prysm iO sits between beauty tech and wellness tech. According to Nu Skin, the device measures skin carotenoid levels and turns the result into a trackable digital wellness signal.",
        "It is not a blood test and it is not a diagnostic device. Its more realistic role is longitudinal tracking: observing how the same person’s reading changes over time alongside diet, lifestyle and supplementation.",
        "The bigger story is the direction of wellness technology: from one-off product recommendations toward repeated measurement, feedback loops and more personalised digital experiences."
      ],
      source:"Nu Skin Enterprises · 2026-04-02 / 2026-09-03",
      url:"https://ir.nuskin.com/news-releases/news-release-details/nu-skin-launches-prysmiotm-revolutionary-ai-powered-platform"
    },
    {
      tag:"BEAUTY TECH RADAR · SEPTEMBER 2026",
      title:"LED and microcurrent are going mainstream — the 2026 beauty awards show the shift",
      dek:"Allure’s 2026 Best of Beauty skincare selection gives visible space to at-home devices, including LED and microcurrent technology.",
      body:[
        "Only a few years ago at-home devices felt like a niche extra. In 2026 they are increasingly presented as part of mainstream skincare, with LED and microcurrent devices appearing in major editorial selections.",
        "An editorial award is not clinical proof. It does, however, signal a consumer shift: skincare is increasingly becoming a formula + device + routine ecosystem.",
        "Beauty by Ildy will separate excitement from evidence: what a technology can realistically do at home, what parameters matter, and where marketing begins to overpromise."
      ],
      source:"Allure Best of Beauty 2026 · Skin Care Winners",
      url:"https://www.allure.com/story/best-of-beauty-2026-skin-care-product-winners"
    }
  ],
  de: [
    {
      tag:"NEUE FORSCHUNG · SEPTEMBER 2026",
      title:"Nach dem Exosomen-Hype: Wird Qualitätskontrolle jetzt zum wichtigsten Thema?",
      dek:"Ein am 9. September 2026 veröffentlichter Review zeigt, dass die Terminologie rund um mikrobiom-abgeleitete Vesikel in Kosmetik schneller gewachsen ist als einheitliche Identitäts- und Qualitätsstandards.",
      body:[
        "2026 ist „Exosom“ längst nicht mehr nur ein Laborbegriff, sondern Teil des Kosmetikmarketings. Der neue Review warnt davor, extrazelluläre Vesikel unterschiedlicher Herkunft automatisch als eine einheitliche Kategorie zu behandeln.",
        "Die entscheidende Frage lautet deshalb nicht nur, ob „Exosome“ auf der Verpackung steht, sondern woher das Material stammt, wie es identifiziert wurde, wie die Herstellung standardisiert ist und welche Qualitätskontrollen angewendet wurden.",
        "Für Beauty by Ildy bedeutet das: Herkunft, Herstellungsqualität, Technologie und Evidenz hinter den Claims sind wichtiger als das Trendwort selbst."
      ],
      source:"PubMed / Genes & Genomics · 09.09.2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/42714753/"
    },
    {
      tag:"INTELLIGENT WELLNESS · 2026",
      title:"Prysm iO: Haut-Carotinoide in 15 Sekunden — was sagt der Scan wirklich aus?",
      dek:"Nu Skin brachte Prysm iO 2026 für Verbraucher auf den Markt. Ein nicht invasiver Fingerscan schätzt den Carotinoidwert der Haut in etwa 15 Sekunden.",
      body:[
        "Prysm iO liegt zwischen Beauty Tech und Wellness Tech. Laut Nu Skin misst das Gerät Carotinoidwerte der Haut und macht den Messwert digital über die Zeit verfolgbar.",
        "Es ist weder Bluttest noch Diagnosegerät. Sinnvoller ist es als Verlaufswert zu verstehen: Wie verändert sich der Messwert derselben Person im Zeitverlauf zusammen mit Ernährung, Lebensstil und Supplementierung?",
        "Das Spannende ist die Richtung der Branche: weg von einmaligen Produktempfehlungen, hin zu wiederholter Messung, Feedback und stärker personalisierten digitalen Wellness-Erlebnissen."
      ],
      source:"Nu Skin Enterprises · 02.04.2026 / 03.09.2026",
      url:"https://ir.nuskin.com/news-releases/news-release-details/nu-skin-launches-prysmiotm-revolutionary-ai-powered-platform"
    },
    {
      tag:"BEAUTY TECH RADAR · SEPTEMBER 2026",
      title:"LED und Mikrostrom werden Mainstream — Beauty Awards 2026 zeigen den Wandel",
      dek:"In Allures Best-of-Beauty-Hautpflegeauswahl 2026 spielen Home-Devices sichtbar mit, darunter LED- und Mikrostrom-Technologien.",
      body:[
        "Vor wenigen Jahren galten Home-Devices noch als Nischenprodukt. 2026 werden sie zunehmend als Teil normaler Hautpflege präsentiert; LED- und Mikrostrom-Geräte erscheinen in großen redaktionellen Auswahlen.",
        "Ein redaktioneller Award ist kein klinischer Wirksamkeitsnachweis. Er zeigt aber deutlich den Konsumententrend: Hautpflege entwickelt sich zu einem System aus Formulierung + Gerät + Routine.",
        "Beauty by Ildy trennt deshalb Trend von Evidenz: Was kann eine Technologie zu Hause realistisch leisten, welche Parameter sind wichtig und wo beginnt überzogenes Marketing?"
      ],
      source:"Allure Best of Beauty 2026 · Skin Care Winners",
      url:"https://www.allure.com/story/best-of-beauty-2026-skin-care-product-winners"
    }
  ]
};

const COPY={
 hu:{back:"Vissza a főoldalra",eyebrow:"BEAUTY BY ILDY · MAGAZIN",title:"Friss beauty radar",lead:"Új technológiák, friss kutatások és valóban érdekes piaci mozgások — nem sajtóközleményként, hanem értelmezve.",source:"FORRÁS"},
 en:{back:"Back to home",eyebrow:"BEAUTY BY ILDY · MAGAZINE",title:"Fresh beauty radar",lead:"New technology, fresh research and market shifts worth watching — interpreted rather than repeated.",source:"SOURCE"},
 de:{back:"Zurück zur Startseite",eyebrow:"BEAUTY BY ILDY · MAGAZIN",title:"Fresh Beauty Radar",lead:"Neue Technologien, aktuelle Forschung und relevante Marktbewegungen — eingeordnet statt nur wiederholt.",source:"QUELLE"}
};

export function MagazinePage({lang="hu"}){
  const t=COPY[lang]||COPY.hu;
  const articles=ARTICLES[lang]||ARTICLES.hu;
  return <main className="magPage">
    <section className="magHero">
      <div>
        <a className="magBack" href="#top"><ArrowLeft size={14}/>{t.back}</a>
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p>{t.lead}</p>
      </div>
    </section>
    <section className="magBody">
      {articles.map((a,i)=><article className="magArticle" key={a.title} id={`mag-${i+1}`}>
        <div className="magArticleHead"><span>{a.tag}</span><span>0{i+1}</span></div>
        <h2>{a.title}</h2>
        <p className="magDek">{a.dek}</p>
        <div className="magArticleText">{a.body.map((p,idx)=><p key={idx}>{p}</p>)}</div>
        <a className="magSource" href={a.url} target="_blank" rel="noopener noreferrer">{t.source}: {a.source}<ExternalLink size={13}/></a>
      </article>)}
    </section>
  </main>;
}
