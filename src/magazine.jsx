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
      source:"Nu Skin Enterprises · 2026.04.02",
      url:"https://ir.nuskin.com/news-releases/news-release-details/nu-skin-launches-prysm-iotm-revolutionary-ai-powered-platform"
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
,

    {
      tag:"LONGEVITY · 2026",
      title:"A bőr mint az öregedés egyik legláthatóbb biomarkere",
      dek:"Egy 2026-os EMBO Journal áttekintés a bőröregedést már nem pusztán kozmetikai kérdésként kezeli, hanem a szöveti öregedés és regeneráció egyik jól megfigyelhető modelljeként.",
      body:[
        "A friss áttekintés szerint a bőr öregedésében egyszerre vesz részt a sejtszeneszcencia, a mitokondriális működés változása, a mikrobiom, a hormonális szabályozás, a gyulladás és a környezeti exposzóma.",
        "Ez azért fontos, mert a longevity-szemlélet nem egyetlen „anti-aging” összetevőt keres. Inkább azt vizsgálja, hogyan tartható fenn hosszabb ideig a barrier, a regenerációs képesség, az immunvédelem és a szöveti rugalmasság.",
        "A Beauty by Ildy Longevity tartalmaiban ezért különválasztjuk a bizonyított bőrápolási lépéseket a még kísérleti, biológiai öregedést célzó megközelítésektől."
      ],
      source:"EMBO Journal / PubMed · 2026.07",
      url:"https://pubmed.ncbi.nlm.nih.gov/42168603/"
    },
    {
      tag:"LONGEVITY SCIENCE · 2026. AUGUSZTUS",
      title:"NAD+: az egyik legfelkapottabb longevity-téma — de mit tudunk emberben?",
      dek:"A NAD+ biológiája erős tudományos alapokon áll, de a 2026-os áttekintések szerint az emberi anti-aging eredmények jóval kevésbé egyértelműek, mint a marketing sugallja.",
      body:[
        "A NAD+ kulcsszereplő az energia-anyagcserében, a DNS-javításhoz kapcsolódó folyamatokban és több sejtes stresszválaszban. Szintje és anyagcseréje az életkorral változik, ezért az NR, NMN és más NAD+-fokozó stratégiák a longevity-ipar központi témájává váltak.",
        "Egy 2026-os szisztematikus áttekintés 33 humán intervenciós vizsgálatot azonosított, de az eredmények végpontonként és készítményenként heterogének. A biológiai plausibilitás tehát nem ugyanaz, mint a bizonyított klinikai fiatalító hatás.",
        "A legérdekesebb kérdés most nem az, hogy „emeli-e a NAD+-ot”, hanem hogy ez milyen emberi egészség- vagy funkcionális kimenetelben jelent valódi, tartós előnyt."
      ],
      source:"Ageing Research Reviews / PubMed · 2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/41655607/"
    },
    {
      tag:"SKIN LONGEVITY · 2026",
      title:"Alvás, mozgás, stressz, étrend: a skin longevity nem csak krém kérdése",
      dek:"Egy 2026-os életmód-orvostani áttekintés szerint több hétköznapi tényező is összefügg a barrierrel, kollagénnel, gyulladással és a látható bőröregedéssel.",
      body:[
        "A bőröregedést nem lehet teljesen leválasztani az életmódról. A friss review humán és preklinikai adatok alapján a táplálkozást, mozgást, alvást, stresszt, dohányzást és alkoholfogyasztást is értékelte.",
        "A rendszeres mozgás, megfelelő alvás és kedvezőbb étrendi mintázatok több mechanizmuson keresztül kapcsolódhatnak a bőr jobb működéséhez, míg a krónikus stressz és a rossz alvás ronthatja a barrier-helyreállást és fokozhatja a gyulladásos jelátvitelt.",
        "Ez nem azt jelenti, hogy egyetlen életmódtipp „megfiatalítja” a bőrt. A longevity itt inkább összeadódó, hosszú távú kockázatcsökkentést és funkciómegőrzést jelent."
      ],
      source:"American Journal of Lifestyle Medicine / PubMed · 2026.05.15",
      url:"https://pubmed.ncbi.nlm.nih.gov/42145807/"
    },
    {
      tag:"BEAUTY EVIDENCE · 2026",
      title:"Kollagénitalok: miért mondanak egymásnak ellent a friss elemzések?",
      dek:"2025–2026-ban egyszerre jelentek meg kedvező és jóval szkeptikusabb összegzések az orális kollagén bőrre gyakorolt hatásáról.",
      body:[
        "Egy 2026-os umbrella review több korábbi metaanalízist összesítve kedvező kapcsolatot talált a kollagénbevitel és több bőrparaméter között. Más, szigorúbb elemzés viszont azt találta, hogy a jobb minőségű vagy ipari finanszírozástól független vizsgálatokban a hatás jóval kevésbé meggyőző.",
        "A különbség egyik oka az eltérő vizsgálati minőség, a készítmények, dózisok és végpontok heterogenitása. A „kollagén működik / nem működik” típusú címek ezért túl egyszerűek.",
        "Beauty by Ildy-szempontból a helyes megközelítés: termékspecifikus adatok, dózis, vizsgálati minőség, finanszírozás és reális hatásméret — nem pusztán az, hogy a címkén szerepel-e a kollagén."
      ],
      source:"Aesthetic Surgery Journal Open Forum / PubMed · 2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/41809116/"
    },
    {
      tag:"MENOPAUSE & SKIN · 2026",
      title:"Menopauza és bőröregedés: miért lett újra kutatási fókusz az ösztrogén?",
      dek:"2026-ban több szakmai közlemény és áttekintés is újra előtérbe hozta az ösztrogén bőrre gyakorolt hatását és a lokális hormonális megközelítések kérdését.",
      body:[
        "Az ösztrogén szerepet játszik többek között a kollagén-, elasztin-, pigmentációs és sebgyógyulási folyamatokban. Menopauza után ezek közül több mechanizmus megváltozhat, ami hozzájárulhat a szárazsághoz, elvékonyodáshoz és rugalmasságvesztéshez.",
        "A 2026-os irodalom azonban nem azt jelenti, hogy a hormonális kezelés általános beauty-megoldás lenne. A biztonság, indikáció, készítményforma és egyéni kockázat miatt ez orvosi kérdés.",
        "A beauty trend szempontjából mégis fontos: a menopauzás bőr egyre kevésbé „életkori bőrtípusként”, és egyre inkább külön biológiai állapotként jelenik meg a kutatásban."
      ],
      source:"Journal of the American Academy of Dermatology / PubMed · 2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/40854497/"
    },
    {
      tag:"BEAUTY TECH EVIDENCE · 2026. AUGUSZTUS",
      title:"Otthoni beauty készülékek: mely technológiák mögött van most a legtöbb bizonyíték?",
      dek:"Egy 2026 augusztusi GRADE-alapú áttekintés látványos különbséget talált az otthoni lézer, LED, rádiófrekvencia és más eszköztípusok evidenciaszintje között.",
      body:[
        "A review szerint az otthoni frakcionált nem ablatív lézerek kapták a legerősebb, Level A evidenciát arcrejuvenációban. A LED és a rádiófrekvencia Level B, mérsékelt minőségű bizonyítékot kapott.",
        "Ez fontos ellenpontja annak az elképzelésnek, hogy minden otthoni beauty device lényegében ugyanazt tudja. A technológia neve önmagában sem elég: hullámhossz, energia, dózis, kialakítás és konkrét klinikai vizsgálat is számít.",
        "Ezért a Beauty by Ildy készülékértékeléseiben külön fogjuk jelölni a technológia általános evidenciáját és az adott konkrét készülék saját bizonyítékait."
      ],
      source:"Dermatologic Surgery / PubMed · 2026.08.04",
      url:"https://pubmed.ncbi.nlm.nih.gov/42545315/"
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
      source:"Nu Skin Enterprises · 2026-04-02",
      url:"https://ir.nuskin.com/news-releases/news-release-details/nu-skin-launches-prysm-iotm-revolutionary-ai-powered-platform"
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
,

    {
      tag:"LONGEVITY · 2026",
      title:"Skin as one of the most visible biomarkers of aging",
      dek:"A 2026 EMBO Journal review treats skin aging not only as a cosmetic issue, but as an observable model of tissue aging and regeneration.",
      body:[
        "The review describes skin aging as a convergence of cellular senescence, mitochondrial changes, microbiome shifts, hormonal signaling, inflammation and environmental exposome effects.",
        "That matters because a longevity framework does not look for one miracle anti-aging ingredient. It asks how barrier function, regeneration, immune defense and tissue resilience can be maintained for longer.",
        "Beauty by Ildy therefore separates established skin-care interventions from experimental approaches that aim to modify deeper biology of aging."
      ],
      source:"EMBO Journal / PubMed · 2026-07",
      url:"https://pubmed.ncbi.nlm.nih.gov/42168603/"
    },
    {
      tag:"LONGEVITY SCIENCE · AUGUST 2026",
      title:"NAD+: one of longevity’s hottest topics — what do human studies actually show?",
      dek:"NAD+ biology is scientifically compelling, but 2026 reviews show that human anti-aging outcomes are much less settled than the marketing often implies.",
      body:[
        "NAD+ is central to energy metabolism and multiple pathways linked to DNA repair and cellular stress responses. Because NAD+ metabolism changes with age, NR, NMN and other NAD+-boosting strategies have become major longevity topics.",
        "A 2026 systematic review identified 33 human intervention studies, yet outcomes remain heterogeneous across compounds and endpoints. Biological plausibility is not the same as proven clinical rejuvenation.",
        "The key question now is no longer simply whether a strategy raises NAD+-related markers, but whether it produces meaningful and durable improvements in human function or health."
      ],
      source:"Ageing Research Reviews / PubMed · 2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/41655607/"
    },
    {
      tag:"SKIN LONGEVITY · 2026",
      title:"Sleep, exercise, stress and diet: skin longevity is not only about creams",
      dek:"A 2026 lifestyle-medicine review links everyday behaviours with barrier function, collagen biology, inflammation and visible skin aging.",
      body:[
        "Skin aging cannot be completely separated from lifestyle. The review assessed nutrition, physical activity, sleep, psychological stress, smoking and alcohol across human and preclinical evidence.",
        "Regular activity, sufficient sleep and healthier dietary patterns may support skin function through several pathways, while chronic stress and poor sleep can impair barrier recovery and increase inflammatory signaling.",
        "This does not mean one lifestyle hack rejuvenates skin. In longevity terms, the value is cumulative: preserving function and reducing avoidable stressors over time."
      ],
      source:"American Journal of Lifestyle Medicine / PubMed · 2026-05-15",
      url:"https://pubmed.ncbi.nlm.nih.gov/42145807/"
    },
    {
      tag:"BEAUTY EVIDENCE · 2026",
      title:"Collagen drinks: why are recent reviews reaching different conclusions?",
      dek:"Recent 2025–2026 evidence includes both favorable syntheses and much more skeptical analyses of oral collagen for skin outcomes.",
      body:[
        "A 2026 umbrella review reported favorable associations across several skin outcomes, while another rigorous meta-analysis found that results weakened substantially in higher-quality or non-industry-funded studies.",
        "Differences in study quality, formulations, doses and endpoints help explain the disagreement. Simple headlines saying collagen either “works” or “doesn’t work” flatten a more complicated evidence base.",
        "Our filter is therefore product-specific: dose, trial quality, funding, comparator and realistic effect size matter more than the word collagen on the label."
      ],
      source:"Aesthetic Surgery Journal Open Forum / PubMed · 2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/41809116/"
    },
    {
      tag:"MENOPAUSE & SKIN · 2026",
      title:"Menopause and skin aging: why estrogen is back in the research spotlight",
      dek:"Several 2026 publications have renewed attention on estrogen’s role in skin physiology and the question of topical hormonal approaches.",
      body:[
        "Estrogen influences processes linked to collagen, elastin, pigmentation and wound repair. After menopause, changes in these pathways can contribute to dryness, thinning and loss of elasticity.",
        "That does not make hormonal treatment a general beauty recommendation. Safety, indication, formulation and individual risk make this a medical decision.",
        "The wider beauty shift is important: menopausal skin is increasingly being studied as a distinct biological context rather than simply an age bracket."
      ],
      source:"Journal of the American Academy of Dermatology / PubMed · 2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/40854497/"
    },
    {
      tag:"BEAUTY TECH EVIDENCE · AUGUST 2026",
      title:"At-home beauty devices: which technologies currently have the strongest evidence?",
      dek:"An August 2026 GRADE-based review found striking differences in evidence quality between home fractional lasers, LED, radiofrequency and other modalities.",
      body:[
        "Home fractional nonablative lasers received Level A evidence for facial rejuvenation in the review. LED and radiofrequency received Level B, moderate-quality evidence.",
        "This is a useful counterweight to treating every home device as equivalent. Technology labels are not enough: wavelength, energy, dose, design and device-specific clinical testing all matter.",
        "Beauty by Ildy will therefore distinguish between evidence for a technology class and evidence for a particular device."
      ],
      source:"Dermatologic Surgery / PubMed · 2026-08-04",
      url:"https://pubmed.ncbi.nlm.nih.gov/42545315/"
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
      source:"Nu Skin Enterprises · 02.04.2026",
      url:"https://ir.nuskin.com/news-releases/news-release-details/nu-skin-launches-prysm-iotm-revolutionary-ai-powered-platform"
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
,

    {
      tag:"LONGEVITY · 2026",
      title:"Die Haut als einer der sichtbarsten Biomarker des Alterns",
      dek:"Ein Review im EMBO Journal 2026 betrachtet Hautalterung nicht nur kosmetisch, sondern als gut beobachtbares Modell für Gewebealterung und Regeneration.",
      body:[
        "Der Review beschreibt Hautalterung als Zusammenspiel von Zellseneszenz, mitochondrialen Veränderungen, Mikrobiom, Hormonsignalen, Entzündung und Exposom.",
        "Das ist für Longevity wichtig: Statt nach einem einzigen Anti-Aging-Wirkstoff zu suchen, geht es darum, Barriere, Regeneration, Immunfunktion und Geweberesilienz möglichst lange zu erhalten.",
        "Beauty by Ildy trennt deshalb etablierte Hautpflege klar von experimentellen Ansätzen, die tiefer in die Biologie des Alterns eingreifen sollen."
      ],
      source:"EMBO Journal / PubMed · 07/2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/42168603/"
    },
    {
      tag:"LONGEVITY SCIENCE · AUGUST 2026",
      title:"NAD+: eines der größten Longevity-Themen — was zeigen Humanstudien wirklich?",
      dek:"Die NAD+-Biologie ist wissenschaftlich spannend, doch Reviews aus 2026 zeigen: Anti-Aging-Effekte beim Menschen sind deutlich weniger eindeutig als die Werbung vermuten lässt.",
      body:[
        "NAD+ spielt eine zentrale Rolle im Energiestoffwechsel sowie in Prozessen rund um DNA-Reparatur und zelluläre Stressantworten. Deshalb sind NR, NMN und andere NAD+-Strategien zu großen Longevity-Themen geworden.",
        "Ein systematischer Review von 2026 identifizierte 33 Humaninterventionsstudien, doch die Ergebnisse unterscheiden sich stark nach Substanz und Endpunkt. Biologische Plausibilität ist nicht gleich klinisch bewiesene Verjüngung.",
        "Die entscheidende Frage lautet inzwischen nicht mehr nur, ob NAD+-bezogene Marker steigen, sondern ob daraus relevante und anhaltende funktionelle Vorteile beim Menschen entstehen."
      ],
      source:"Ageing Research Reviews / PubMed · 2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/41655607/"
    },
    {
      tag:"SKIN LONGEVITY · 2026",
      title:"Schlaf, Bewegung, Stress und Ernährung: Skin Longevity ist mehr als Hautpflege",
      dek:"Ein Review aus 2026 verbindet alltägliche Lebensstilfaktoren mit Barrierefunktion, Kollagenbiologie, Entzündung und sichtbarer Hautalterung.",
      body:[
        "Hautalterung lässt sich nicht vollständig vom Lebensstil trennen. Der Review bewertet Ernährung, Bewegung, Schlaf, psychischen Stress, Rauchen und Alkohol anhand humaner und präklinischer Daten.",
        "Regelmäßige Bewegung, ausreichender Schlaf und günstigere Ernährungsmuster können die Hautfunktion über mehrere Mechanismen unterstützen; chronischer Stress und schlechter Schlaf können dagegen Barrierereparatur und Entzündungssignale ungünstig beeinflussen.",
        "Das bedeutet nicht, dass ein einzelner Lifestyle-Hack die Haut verjüngt. Longevity meint hier den langfristigen Erhalt von Funktion und die Reduktion vermeidbarer Belastungen."
      ],
      source:"American Journal of Lifestyle Medicine / PubMed · 15.05.2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/42145807/"
    },
    {
      tag:"BEAUTY EVIDENCE · 2026",
      title:"Kollagen-Drinks: Warum kommen neue Reviews zu unterschiedlichen Ergebnissen?",
      dek:"Die Evidenz aus 2025–2026 enthält sowohl positive Zusammenfassungen als auch deutlich skeptischere Analysen zu oralem Kollagen und Hautparametern.",
      body:[
        "Ein Umbrella Review 2026 fand günstige Zusammenhänge bei mehreren Hautparametern. Eine andere strengere Metaanalyse zeigte dagegen, dass Effekte in hochwertigeren oder nicht industrie-finanzierten Studien deutlich schwächer ausfielen.",
        "Unterschiede in Studienqualität, Produkten, Dosierungen und Endpunkten erklären einen Teil des Widerspruchs. Einfache Aussagen wie „Kollagen wirkt“ oder „wirkt nicht“ greifen daher zu kurz.",
        "Unser Maßstab bleibt produktspezifisch: Dosis, Studienqualität, Finanzierung, Vergleichsgruppe und realistische Effektgröße."
      ],
      source:"Aesthetic Surgery Journal Open Forum / PubMed · 2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/41809116/"
    },
    {
      tag:"MENOPAUSE & SKIN · 2026",
      title:"Menopause und Hautalterung: Warum Östrogen wieder stärker erforscht wird",
      dek:"Mehrere Publikationen aus 2026 rücken die Rolle von Östrogen in der Hautphysiologie und die Frage topischer hormoneller Ansätze wieder stärker in den Fokus.",
      body:[
        "Östrogen beeinflusst Prozesse rund um Kollagen, Elastin, Pigmentierung und Wundheilung. Nach der Menopause können Veränderungen dieser Signalwege zu Trockenheit, dünnerer Haut und Elastizitätsverlust beitragen.",
        "Das macht Hormontherapie nicht zu einer allgemeinen Beauty-Empfehlung. Sicherheit, Indikation, Formulierung und individuelles Risiko machen dies zu einer medizinischen Entscheidung.",
        "Der wichtige Trend ist ein anderer: Menopausale Haut wird zunehmend als eigener biologischer Kontext untersucht und nicht nur als Altersgruppe."
      ],
      source:"Journal of the American Academy of Dermatology / PubMed · 2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/40854497/"
    },
    {
      tag:"BEAUTY TECH EVIDENCE · AUGUST 2026",
      title:"Home-Beauty-Geräte: Welche Technologien haben derzeit die stärkste Evidenz?",
      dek:"Ein GRADE-basierter Review vom August 2026 zeigt deutliche Unterschiede zwischen fraktionierten Heimlasern, LED, Radiofrequenz und anderen Verfahren.",
      body:[
        "Fraktionierte nicht-ablative Heimlaser erhielten Level-A-Evidenz für Gesichtsrejuvenation. LED und Radiofrequenz wurden mit Level B, also moderater Evidenz, bewertet.",
        "Das ist ein wichtiger Gegenpol zur Annahme, alle Home-Devices seien vergleichbar. Wellenlänge, Energie, Dosis, Bauform und gerätespezifische klinische Daten bleiben entscheidend.",
        "Beauty by Ildy trennt deshalb die Evidenz einer Technologieklasse von der Evidenz eines konkreten Geräts."
      ],
      source:"Dermatologic Surgery / PubMed · 04.08.2026",
      url:"https://pubmed.ncbi.nlm.nih.gov/42545315/"
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
