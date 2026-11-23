import React from "react";
import { ExternalLink } from "lucide-react";
import "./brandPages.css";
import {TopicHero} from './topicHero.jsx';
import {subpageMedia} from './subpage-media.js';

// Reviewed, product-specific copy; remaining catalogue entries retain their original
// descriptions until individually translated and verified.
const NUSKIN_LOCALIZED_DESCRIPTIONS = {
  "ageLOC LumiSpa iO System": {
    "hu": "A Nu Skin Vera alkalmazással összekapcsolható, otthoni arctisztító készülékrendszer. A készülék és a hozzá tartozó tisztítótermék együtt használható.",
    "en": "A connected facial cleansing system designed for home use with the Nu Skin Vera app and a compatible cleanser.",
    "de": "Ein vernetztes Gesichtsreinigungssystem für zu Hause, das mit der Nu Skin Vera App und einem passenden Reinigungsprodukt verwendet wird."
  },
  "ageLOC WellSpa iO System": {
    "hu": "Otthoni testápolásra és wellnessrutinra tervezett, alkalmazással összekapcsolható Nu Skin készülékrendszer.",
    "en": "A connected Nu Skin device system designed for at-home body care and wellness routines.",
    "de": "Ein vernetztes Nu-Skin-Gerätesystem für die Körperpflege und Wellnessroutine zu Hause."
  },
  "ageLOC Boost System": {
    "hu": "Otthoni arcápoló készülék és a hozzá tartozó bőrápolási rutin; a gyártó a bőr megjelenésének támogatására ajánlja.",
    "en": "An at-home facial care device system intended to complement a skincare routine and support the appearance of the skin.",
    "de": "Ein Gesichtspflegesystem für zu Hause, das die tägliche Pflegeroutine ergänzt und das Hautbild unterstützen soll."
  },
  "ageLOC Galvanic Spa": {
    "hu": "Otthoni galvanikus szépségápolási készülék, amely különböző kezelőfejekkel arc-, test- és fejbőrápolási rutinokhoz használható.",
    "en": "An at-home galvanic beauty device with attachments for facial, body and scalp care routines.",
    "de": "Ein galvanisches Beauty-Gerät für zu Hause mit Aufsätzen für Gesichts-, Körper- und Kopfhautpflege."
  },
  "Galvanic Spa Facial Gels with ageLOC": {
    "hu": "A Galvanic Spa arckezelő fejéhez készült, egymást követő lépésekben alkalmazható arczselék.",
    "en": "Facial gels designed for sequential use with the Galvanic Spa facial attachment.",
    "de": "Gesichtsgele, die in aufeinanderfolgenden Schritten mit dem Gesichtsaufsatz des Galvanic Spa verwendet werden."
  },
  "ageLOC Tru Face Future Serum": {
    "hu": "Prémium arcszérum, amelynek célja a hidratáltabb, simább és feszesebbnek látszó bőr megjelenésének támogatása.",
    "en": "A premium facial serum formulated to support the appearance of smoother, firmer-looking and hydrated skin.",
    "de": "Ein hochwertiges Gesichtsserum zur Pflege eines glatter, straffer und hydratisierter wirkenden Hautbilds."
  },
  "ageLOC Tru Face Line Corrector": {
    "hu": "Célzott arcápoló a finom vonalak megjelenésére, különösen a száj és a szem körüli területeken.",
    "en": "Targeted skincare for the appearance of fine lines, especially around the mouth and eyes.",
    "de": "Gezielte Pflege für das Erscheinungsbild feiner Linien, insbesondere im Mund- und Augenbereich."
  },
  "ageLOC Tru Face Radiant Day": {
    "hu": "Nappali arcápoló a hidratáltabb, ragyogóbb és egyenletesebbnek látszó bőrképért.",
    "en": "A daytime facial moisturiser focused on radiance, hydration and a more even-looking complexion.",
    "de": "Eine Tagespflege für Feuchtigkeit, Ausstrahlung und ein ebenmäßiger wirkendes Hautbild."
  },
  "ageLOC Tru Face Transforming Gel Cream": {
    "hu": "Könnyű gélkrém az arc hidratálására, a bőr simább megjelenésének és a pórusok kevésbé feltűnő látványának támogatására.",
    "en": "A lightweight gel cream focused on hydration, smoother-looking skin and the appearance of pores.",
    "de": "Eine leichte Gelcreme für Feuchtigkeit, ein glatter wirkendes Hautbild und optisch weniger auffällige Poren."
  },
  "ageLOC Tru Face Uplifting Rich Cream": {
    "hu": "Gazdag textúrájú arckrém a szárazabb bőr hidratálására, valamint a feszesebbnek látszó arckontúrok támogatására.",
    "en": "A rich facial cream for moisturising dry-feeling skin and supporting firmer-looking facial contours.",
    "de": "Eine reichhaltige Gesichtscreme zur Feuchtigkeitspflege und für straffer wirkende Gesichtskonturen."
  },
  "ageLOC Tru Face Refining Toner": {
    "hu": "Arcápoló tonik, amely a tisztítás után előkészíti a bőrt a következő ápolási lépésekre.",
    "en": "A facial toner intended to prepare the skin for the next steps after cleansing.",
    "de": "Ein Gesichtstoner, der die Haut nach der Reinigung auf die nächsten Pflegeschritte vorbereitet."
  },
  "ageLOC Tru Face Peptide Retinol Complex": {
    "hu": "Peptideket és retinolt tartalmazó, az öregedés látható jeleire összpontosító arcápoló. Retinolos terméknél a használati útmutatót és a fényvédelmet is figyelembe kell venni.",
    "en": "A peptide- and retinol-focused facial treatment for visible signs of skin ageing. Follow the product directions and consider sun protection when using retinol.",
    "de": "Eine Gesichtspflege mit Peptiden und Retinol für sichtbare Zeichen der Hautalterung. Anwendungshinweise und Sonnenschutz bei Retinol beachten."
  },
  "ageLOC Tru Face Essence Ultra": {
    "hu": "Az arckontúrok és a feszesebbnek látszó bőr megjelenésére összpontosító célzott arcápoló.",
    "en": "A targeted facial treatment focused on firmer-looking skin and more defined-looking facial contours.",
    "de": "Eine gezielte Gesichtspflege für straffer wirkende Haut und definierter erscheinende Gesichtskonturen."
  },
"Nutricentials Pumps Vitamin C + Collagen": {"hu":"C-vitamint és kollagént középpontba helyező Nutricentials termék a bőrápolási kínálatban.","en":"A Nutricentials product centred on vitamin C and collagen within the brand's beauty range.","de":"Ein Nutricentials-Produkt mit Vitamin C und Kollagen aus dem Beauty-Sortiment."},
"HydraClean Creamy Cleansing Lotion": {"hu":"Krémes arctisztító tej, amely a napi arctisztítás során segít eltávolítani a szennyeződéseket.","en":"A creamy cleansing lotion for removing everyday impurities during a facial cleansing routine.","de":"Eine cremige Reinigungslotion zur Entfernung alltäglicher Verunreinigungen bei der Gesichtsreinigung."},
"To Be Clear Pure Cleansing Gel": {"hu":"Géles arctisztító a bőr mindennapi megtisztítására és a friss bőrérzet támogatására.","en":"A gel facial cleanser designed for everyday cleansing and a fresh skin feel.","de":"Ein Reinigungsgel für die tägliche Gesichtsreinigung und ein frisches Hautgefühl."},
"Nutricentials Here You Glow": {"hu":"Hámlasztó, bőrmegújító fókuszú arcápoló a Nutricentials termékcsaládból.","en":"An exfoliating facial care product in the Nutricentials range, focused on skin renewal.","de":"Ein exfolierendes Gesichtspflegeprodukt aus der Nutricentials-Serie mit Fokus auf Hauterneuerung."},
"In Balance pH Balance Toner": {"hu":"Arctonik a tisztítás utáni ápolási lépéshez, a bőr pH-egyensúlyának támogatására.","en":"A facial toner for use after cleansing, designed to support the skin's pH balance.","de":"Ein Gesichtstoner nach der Reinigung, der das pH-Gleichgewicht der Haut unterstützen soll."},
"Nutricentials Eye Love Bright Eyes Illuminating Eye Cream": {"hu":"Szemkörnyékápoló krém, amely a hidratáltabb, frissebb és ragyogóbbnak látszó szemkörnyéket célozza.","en":"An eye cream focused on hydration and a fresher, brighter-looking eye area.","de":"Eine Augencreme für Feuchtigkeit und eine frischer und strahlender wirkende Augenpartie."},
"Nutricentials Ceramides + Postbiotics Pump": {"hu":"Ceramidokra és posztbiotikumokra épülő bőrápoló booster, amely a bőr ápolását és komfortérzetét egészíti ki.","en":"A skincare booster featuring ceramides and postbiotics to complement a daily skin-comfort routine.","de":"Ein Hautpflege-Booster mit Ceramiden und Postbiotika als Ergänzung der täglichen Pflegeroutine."},
"Nutricentials Celltrex Always Right Recovery Fluid": {"hu":"Könnyű regeneráló arcápoló fluid a mindennapi bőrápolási rutin kiegészítésére.","en":"A lightweight recovery-focused facial fluid for everyday skincare.","de":"Ein leichtes Gesichtsfluid mit regenerierendem Pflegefokus für die tägliche Routine."},
"Day Dream Protective Cream SPF 30": {"hu":"Krémes állagú nappali hidratáló SPF 30 fényvédelemmel; a megfelelő mennyiségű felvitel és újrakenés fontos.","en":"A creamy daytime moisturiser with SPF 30 sun protection; apply an adequate amount and reapply as directed.","de":"Eine cremige Tagespflege mit Lichtschutzfaktor 30; ausreichend auftragen und gemäß Anleitung nachcremen."},
"Day Dream Protective Lotion SPF 30": {"hu":"Könnyedebb állagú nappali hidratáló SPF 30 fényvédelemmel, a napi arcrutin részeként.","en":"A lightweight daytime moisturising lotion with SPF 30 protection for a daily facial routine.","de":"Eine leichte feuchtigkeitsspendende Tageslotion mit Lichtschutzfaktor 30 für die tägliche Gesichtspflege."},
"Thirst Fix Hydrating Gel Cream": {"hu":"Könnyű hidratáló gélkrém a vízhiányosnak érződő arcbőr ápolására.","en":"A lightweight hydrating gel cream for skin that feels in need of moisture.","de":"Eine leichte feuchtigkeitsspendende Gelcreme für Haut mit Feuchtigkeitsbedarf."},
"Moisturize Me Intense Hydrating Cream": {"hu":"Gazdagabb hidratáló arckrém a száraznak érződő bőr komfortérzetének támogatására.","en":"A rich facial moisturiser designed to comfort skin that feels dry.","de":"Eine reichhaltige Gesichtscreme für mehr Pflegekomfort bei trocken wirkender Haut."},
"Nutricentials Dew All Day Moisture Restore Cream": {"hu":"Hidratáló arckrém a bőr nedvességérzetének megőrzésére és a napi ápolási rutin kiegészítésére.","en":"A facial moisturiser focused on maintaining a comfortable, hydrated skin feel throughout the day.","de":"Eine Gesichtscreme für ein angenehmes, mit Feuchtigkeit versorgtes Hautgefühl im Tagesverlauf."},
"Pillow Glow Sleeping Mask": {"hu":"Éjszakára alkalmazható hidratáló arcmaszk, amely az esti arcápolási rutint egészíti ki.","en":"An overnight hydrating facial mask designed to complement an evening skincare routine.","de":"Eine feuchtigkeitsspendende Gesichtsmaske für die Nacht als Ergänzung der Abendpflege."},
"Brighter Day Exfoliant Scrub": {"hu":"Arcradír az elhalt hámsejtek mechanikus eltávolítására és a simábbnak látszó bőrfelszínért.","en":"A facial exfoliating scrub for removing dead surface skin cells and promoting a smoother-looking complexion.","de":"Ein Gesichtspeeling zum Entfernen abgestorbener Hautschüppchen für ein glatter wirkendes Hautbild."},
"Spa Day Creamy Hydrating Masque": {"hu":"Krémes hidratáló arcmaszk az alkalmi, intenzívebb arcápolási rutin részeként.","en":"A creamy hydrating face mask for an occasional, more indulgent skincare routine.","de":"Eine cremige feuchtigkeitsspendende Gesichtsmaske für die ergänzende Pflege zwischendurch."},
  "ageLOC Nutriol Scalp & Hair System": {"hu":"A fejbőr és a haj ápolására összeállított, több lépésből álló ageLOC Nutriol rendszer.","en":"A multi-step ageLOC Nutriol system for scalp and hair care.","de":"Ein mehrstufiges ageLOC-Nutriol-System zur Pflege von Kopfhaut und Haar."},
  "ageLOC Nutriol Scalp & Hair Shampoo": {"hu":"Sampon a vékony szálú, sérült vagy érett haj és a fejbőr tisztítására.","en":"A shampoo for cleansing fine, damaged or ageing hair and the scalp.","de":"Ein Shampoo zur Reinigung von feinem, strapaziertem oder reiferem Haar und der Kopfhaut."},
  "ageLOC Nutriol Scalp & Hair Conditioner": {"hu":"Kondicionáló a haj ápolására és könnyebb kifésülhetőségére az ageLOC Nutriol rutinban.","en":"A conditioner for hair care and easier detangling within the ageLOC Nutriol routine.","de":"Eine Pflegespülung für geschmeidiges, leichter kämmbares Haar im Rahmen der ageLOC-Nutriol-Routine."},
  "ageLOC Nutriol Intensive Scalp & Hair Serum": {"hu":"Intenzív fejbőr- és hajápoló szérum az ageLOC Nutriol termékcsaládból.","en":"An intensive scalp and hair serum from the ageLOC Nutriol range.","de":"Ein intensives Kopfhaut- und Haarserum aus der ageLOC-Nutriol-Serie."},
  "Nu Skin 180° Anti-Aging Skin Therapy System": {"hu":"Korábbi, több lépésből álló arcápolási rendszer; az EU-ban 2024 októberében kivezették, ezért csak tájékoztató jelleggel szerepel.","en":"A former multi-step facial skincare system, discontinued in the EU in October 2024; listed for information only.","de":"Ein früheres mehrstufiges Gesichtspflegesystem, das in der EU im Oktober 2024 eingestellt wurde; nur zur Information aufgeführt."},
  "Epoch Glacial Marine Mud": {"hu":"Ásványi iszapot tartalmazó, lemosható test- és bőrápoló pakolás.","en":"A rinse-off mineral mud mask for skin and body care.","de":"Eine abwaschbare Mineral-Schlammmaske für die Haut- und Körperpflege."},
  "Epoch Baobab Body Butter": {"hu":"Gazdag, baobabfókuszú testvaj a száraz bőr tápláló ápolására.","en":"A rich baobab-focused body butter for nourishing dry-feeling skin.","de":"Eine reichhaltige Körperbutter mit Baobab für die Pflege trockener Haut."},
  "Epoch IceDancer": {"hu":"Frissítő lábápoló gél; a termék elérhetőségét a hivatalos oldalon érdemes ellenőrizni.","en":"A refreshing foot-care gel; check availability on the official product page.","de":"Ein erfrischendes Fußgel; die Verfügbarkeit sollte auf der offiziellen Produktseite geprüft werden."},
  "Epoch Hand Cream": {"hu":"Korábbi kéz- és körömápoló krém, amelyet a magyar piacról kivezettek; tájékoztató termékadat.","en":"A former hand and nail cream discontinued in Hungary; retained as product information.","de":"Eine frühere Hand- und Nagelcreme, die in Ungarn eingestellt wurde; nur zur Produktinformation."},
  "Epoch Polishing Bar": {"hu":"Szappanmentes, bőrradírozó tisztítótömb a testápolási rutinhoz.","en":"A soap-free exfoliating cleansing bar for body care.","de":"Ein seifenfreies Peeling-Reinigungsstück für die Körperpflege."},
  "Epoch Sole Solution": {"hu":"Célzott krém a száraz, érdes lábfej és sarok ápolására.","en":"A targeted cream for dry, rough feet and heels.","de":"Eine gezielte Creme zur Pflege trockener, rauer Füße und Fersen."},
  "Epoch Ava Puhi Moni Shampoo": {"hu":"Korábbi Epoch sampon; az EU-ban 2025 februárjában kivezették, ezért csak tájékoztató jelleggel szerepel.","en":"A former Epoch shampoo discontinued in the EU in February 2025; listed for information only.","de":"Ein früheres Epoch-Shampoo, das in der EU im Februar 2025 eingestellt wurde; nur zur Information aufgeführt."},
  "Epoch Ava Puhi Moni Light Conditioner": {"hu":"Korábbi Epoch hajkondicionáló; az EU-ban 2024 januárjában kivezették.","en":"A former Epoch hair conditioner discontinued in the EU in January 2024.","de":"Eine frühere Epoch-Haarspülung, die in der EU im Januar 2024 eingestellt wurde."},
  "Sunright Insta Glow": {"hu":"Önbarnító gél arcra és testre a napbarnított bőr megjelenéséért, UV-sugárzás nélkül.","en":"A self-tanning gel for face and body that creates a sun-kissed look without UV exposure.","de":"Ein Selbstbräunungsgel für Gesicht und Körper für einen gebräunten Look ohne UV-Strahlung."},
  "Liquid Body Lufra": {"hu":"Korábbi hámlasztó testtisztító termék; az EU-ban 2026 márciusában kivezették.","en":"A former exfoliating body cleanser discontinued in the EU in March 2026.","de":"Ein früheres exfolierendes Körperreinigungsprodukt, das in der EU im März 2026 eingestellt wurde."},
  "Perennial Body Lotion": {"hu":"Mindennapi hidratáló testápoló a puhább és komfortosabb bőrérzetért.","en":"An everyday moisturising body lotion for softer, more comfortable-feeling skin.","de":"Eine feuchtigkeitsspendende Körperlotion für den Alltag und ein geschmeidiges Hautgefühl."},
  "NaPCA Moisture Mist": {"hu":"Hidratáló permet arcra és testre a bőr felfrissítésére.","en":"A hydrating mist for refreshing the face and body.","de":"Ein feuchtigkeitsspendender Sprühnebel zur Erfrischung von Gesicht und Körper."},
  "ageLOC Body Shaping Gel": {"hu":"Testápoló gél az ageLOC testápolási rutin részeként; a kozmetikai állítások nem jelentenek igazolt zsírcsökkentést.","en":"A body-care gel for the ageLOC routine; cosmetic claims do not establish fat reduction.","de":"Ein Körperpflegegel für die ageLOC-Routine; kosmetische Aussagen belegen keine Fettreduktion."},
  "ageLOC Dermatic Effects": {"hu":"Hidratáló testápoló a bőr simább és feszesebbnek látszó megjelenésének támogatására.","en":"A moisturising body lotion focused on smoother, firmer-looking skin.","de":"Eine feuchtigkeitsspendende Körperlotion für ein glatter und straffer wirkendes Hautbild."},
  "ReNu Hair Mask": {"hu":"Korábbi intenzív hajpakolás, amelynek EU-változata a magyar piacon kivezetett státuszú.","en":"A former intensive hair mask whose EU version is discontinued in Hungary.","de":"Eine frühere intensive Haarmaske, deren EU-Version in Ungarn nicht mehr angeboten wird."},
  "AP 24 Whitening Fluoride Toothpaste": {"hu":"Fluoridos fogkrém a napi szájápoláshoz, a fogak tisztítására és a felületi elszíneződések megjelenésének csökkentésére.","en":"A fluoride toothpaste for daily oral care, cleaning teeth and addressing the appearance of surface stains.","de":"Eine fluoridhaltige Zahnpasta zur täglichen Mundpflege, Zahnreinigung und Reduzierung oberflächlicher Verfärbungen."},
  "AP 24 Anti-Plaque Fluoride Toothpaste": {"hu":"Korábbi, fluoridos, lepedék elleni fogkrém; a magyar piacon már kivezették.","en":"A former anti-plaque fluoride toothpaste, now discontinued in Hungary.","de":"Eine frühere fluoridhaltige Anti-Plaque-Zahnpasta, die in Ungarn eingestellt wurde."},
  "Pharmanex LifePak+": {"hu":"Vitaminokat, ásványi anyagokat és növényi összetevőket tartalmazó komplex étrend-kiegészítő; nem helyettesíti a változatos étrendet.","en":"A multi-nutrient supplement containing vitamins, minerals and botanical ingredients; not a substitute for a varied diet.","de":"Ein Nahrungsergänzungsmittel mit Vitaminen, Mineralstoffen und Pflanzenbestandteilen; kein Ersatz für eine abwechslungsreiche Ernährung."},
  "LifePak+ & Marine Omega ADR-csomag": {"hu":"LifePak+ és Marine Omega termékeket tartalmazó magyar előfizetéses csomag; a készlethelyzetet a hivatalos oldalon kell ellenőrizni.","en":"A Hungarian subscription package combining LifePak+ and Marine Omega; check current stock on the official website.","de":"Ein ungarisches Abonnementpaket mit LifePak+ und Marine Omega; die aktuelle Verfügbarkeit ist auf der offiziellen Website zu prüfen."},
  "Pharmanex Tēgreen": {"hu":"Zöldtea-kivonatot tartalmazó étrend-kiegészítő a Pharmanex kínálatából.","en":"A Pharmanex food supplement containing green tea extract.","de":"Ein Nahrungsergänzungsmittel von Pharmanex mit Grüntee-Extrakt."},
  "JVi": {"hu":"Gyümölcs- és zöldségösszetevőket tartalmazó italtermék, C-vitamin-forrásként bemutatva.","en":"A fruit-and-vegetable blend presented as a source of vitamin C.","de":"Eine Mischung aus Obst- und Gemüsebestandteilen, die als Vitamin-C-Quelle angeboten wird."},
  "Beauty Focus MultiBeauty": {"hu":"A haj, bőr és köröm tápanyagellátását célzó, több összetevős szépségápolási étrend-kiegészítő.","en":"A multi-ingredient beauty supplement focused on nutrients for hair, skin and nails.","de":"Ein Beauty-Nahrungsergänzungsmittel mit mehreren Nährstoffen für Haare, Haut und Nägel."},
  "Beauty Focus Collagen+": {"hu":"Kollagénhidrolizátumot, búzaolaj-kivonatot és luteint tartalmazó szépségápolási étrend-kiegészítő.","en":"A beauty supplement containing hydrolysed collagen, wheat oil extract and lutein.","de":"Ein Beauty-Nahrungsergänzungsmittel mit Kollagenhydrolysat, Weizenölextrakt und Lutein."},
  "R² Day": {"hu":"Cordyceps-, gránátalma- és ginzengösszetevőket tartalmazó, nappali használatra szánt étrend-kiegészítő.","en":"A daytime supplement containing cordyceps, pomegranate and ginseng ingredients.","de":"Ein Nahrungsergänzungsmittel für den Tag mit Cordyceps-, Granatapfel- und Ginsengbestandteilen."},
  "R² Night": {"hu":"Szelént és növényi összetevőket tartalmazó, esti használatra szánt étrend-kiegészítő.","en":"An evening supplement containing selenium and botanical ingredients.","de":"Ein Nahrungsergänzungsmittel für den Abend mit Selen und pflanzlichen Bestandteilen."},
  "R² Day + Night": {"hu":"Korábbi kombinált csomag, amelyet Magyarországon kivezettek; a Day és Night termékek külön szerepelnek.","en":"A former combined package discontinued in Hungary; the Day and Night products are listed separately.","de":"Ein früheres Kombinationspaket, das in Ungarn eingestellt wurde; Day und Night sind separat aufgeführt."},
  "ReishiMax GLp": {"hu":"Reishigomba-kivonatot tartalmazó Pharmanex étrend-kiegészítő.","en":"A Pharmanex supplement containing reishi mushroom extract.","de":"Ein Pharmanex-Nahrungsergänzungsmittel mit Reishi-Pilzextrakt."},
  "ageLOC Vitality": {"hu":"Cordyceps-, gránátalma- és ginzengösszetevőkre épülő étrend-kiegészítő a vitalitásfókuszú kínálatból.","en":"A vitality-focused supplement featuring cordyceps, pomegranate and ginseng ingredients.","de":"Ein auf Vitalität ausgerichtetes Nahrungsergänzungsmittel mit Cordyceps, Granatapfel und Ginseng."},
  "LifePak elements": {"hu":"Napi vitamin- és ásványianyag-kiegészítésre szolgáló termék, amelyet a Nu Skin a Prysm iO programhoz is kapcsol.","en":"A daily vitamin and mineral supplement also referenced by Nu Skin in connection with its Prysm iO programme.","de":"Ein tägliches Vitamin- und Mineralstoffpräparat, das Nu Skin auch im Zusammenhang mit dem Prysm-iO-Programm nennt."},
  "CordyMax CS-4": {"hu":"Korábbi Cordyceps sinensis micéliumot tartalmazó étrend-kiegészítő; az EU-ban 2025 januárjában kivezették.","en":"A former supplement containing Cordyceps sinensis mycelium, discontinued in the EU in January 2025.","de":"Ein früheres Nahrungsergänzungsmittel mit Cordyceps-sinensis-Myzel, das in der EU im Januar 2025 eingestellt wurde."},
  "Pro-B": {"hu":"Korábbi, Lactobacillus fermentum PCC™ kultúrát tartalmazó probiotikus étrend-kiegészítő; az EU-ban 2024 októberében kivezették.","en":"A former probiotic supplement with Lactobacillus fermentum PCC™, discontinued in the EU in October 2024.","de":"Ein früheres probiotisches Nahrungsergänzungsmittel mit Lactobacillus fermentum PCC™, das in der EU im Oktober 2024 eingestellt wurde."},
  "TRME MyGOAL": {"hu":"A TRME Body Balance rendszerhez tartozó étrend-kiegészítő; a pontos alkalmazást a gyártói útmutató szerint kell megválasztani.","en":"A supplement within the TRME Body Balance range; follow the manufacturer's instructions for use.","de":"Ein Nahrungsergänzungsmittel aus der TRME-Body-Balance-Serie; die Anwendung richtet sich nach den Herstellerangaben."},
  "TRME MyEDGE": {"hu":"A TRME Body Balance termékcsalád étrend-kiegészítője, a rendszer egyéb elemeivel kombinálható a gyártói útmutató szerint.","en":"A TRME Body Balance supplement intended for use within the manufacturer's programme.","de":"Ein Nahrungsergänzungsmittel der TRME-Body-Balance-Serie zur Anwendung im Rahmen des Herstellerprogramms."},
  "TRME InnerNU": {"hu":"Gyömbér- és articsóka-kivonatot tartalmazó étrend-kiegészítő a TRME termékcsaládból.","en":"A TRME supplement containing ginger and artichoke extracts.","de":"Ein TRME-Nahrungsergänzungsmittel mit Ingwer- und Artischockenextrakten."},
  "TRME REALMe": {"hu":"A TRME Body Balance programhoz tartozó étrend-kiegészítő; a termékspecifikus összetételt a hivatalos címke tartalmazza.","en":"A supplement in the TRME Body Balance programme; consult the official label for its specific ingredients.","de":"Ein Nahrungsergänzungsmittel des TRME-Body-Balance-Programms; die genaue Zusammensetzung steht auf dem offiziellen Etikett."},
  "TRME M-Bar": {"hu":"A TRME program étkezéshelyettesítő szelete; az alkalmazást és az allergéneket a termékcímke alapján kell ellenőrizni.","en":"A meal-replacement bar in the TRME range; check the product label for use instructions and allergens.","de":"Ein Mahlzeitenersatzriegel der TRME-Serie; Anwendungshinweise und Allergene stehen auf dem Produktetikett."},
  "TRME Weight Management Kit": {"hu":"A TRME program több elemét – InnerNU, MyEDGE, MyGOAL és REALMe – egyesítő termékcsomag.","en":"A TRME kit combining InnerNU, MyEDGE, MyGOAL and REALMe products.","de":"Ein TRME-Set mit den Produkten InnerNU, MyEDGE, MyGOAL und REALMe."},
  "ageLOC TRMe": {"hu":"A Nu Skin testegyensúlyra összpontosító programja, amely több étrend-kiegészítőt, szeletet és csomagot fog össze.","en":"Nu Skin's Body Balance programme bringing together several supplements, bars and kits.","de":"Das Body-Balance-Programm von Nu Skin, das mehrere Nahrungsergänzungsmittel, Riegel und Sets umfasst."},
  "Prysm iO": {"hu":"Nem invazív wellnessmérő készülék, amely a gyártó szerint körülbelül 15 másodperc alatt becsli a bőr karotinoidszintjét; nem orvosi diagnosztikai eszköz.","en":"A non-invasive wellness scanner that, according to the manufacturer, estimates skin carotenoid levels in about 15 seconds; it is not a medical diagnostic device.","de":"Ein nicht invasiver Wellness-Scanner, der laut Hersteller den Carotinoidgehalt der Haut in etwa 15 Sekunden einschätzt; kein medizinisches Diagnosegerät."}
};

const NUSKIN = [
  ["ageLOC LumiSpa iO System","BEAUTY TECH","Connected cleansing system designed to pair with the Nu Skin Vera app.","https://mysite.mynuskin.com/catalog/hu/hu/product/97139603?store=beautybyildy"],
  ["ageLOC WellSpa iO System","BEAUTY TECH","Nu Skin beauty and wellness device system.","https://mysite.mynuskin.com/catalog/hu/hu/product/97139757?store=beautybyildy"],
  ["ageLOC Boost System","BEAUTY TECH","At-home skin-vitalising device system.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001951?store=beautybyildy"],
  ["ageLOC Galvanic Spa","BEAUTY TECH","Galvanic at-home beauty device with face, body and scalp applications.","https://mysite.mynuskin.com/catalog/hu/hu/product/97310060?store=beautybyildy"],
  ["Galvanic Spa Facial Gels with ageLOC","SKINCARE","Facial gels developed for use with the Galvanic Spa facial conductor.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004433?store=beautybyildy"],
  ["ageLOC Tru Face Future Serum","TRU FACE","Premium age-well serum focused on firmness, smoothness, tone and hydration.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004260?store=beautybyildy"],
  ["ageLOC Tru Face Line Corrector","TRU FACE","Targeted care for the appearance of fine lines, especially around the mouth and eyes.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004263?store=beautybyildy"],
  ["ageLOC Tru Face Radiant Day","TRU FACE","Daytime moisturising care focused on radiance and uneven-looking tone.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004268?store=beautybyildy"],
  ["ageLOC Tru Face Transforming Gel Cream","TRU FACE","Gel-cream moisturiser focused on hydration, smoothness and visible pores.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004266?store=beautybyildy"],
  ["ageLOC Tru Face Uplifting Rich Cream","TRU FACE","Rich moisturising cream focused on firmness and visible lines.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004291?store=beautybyildy"],
  ["ageLOC Tru Face Refining Toner","TRU FACE","Preparatory toner designed to support the next steps of the skincare routine.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004294?store=beautybyildy"],
  ["ageLOC Tru Face Peptide Retinol Complex","TRU FACE","Retinol and peptide-focused age-well serum.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004312?store=beautybyildy"],
  ["ageLOC Tru Face Essence Ultra","TRU FACE","Firming-focused treatment for a more defined-looking facial contour.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004293?store=beautybyildy"],
  ["Nutricentials Pumps Vitamin C + Collagen","NUTRICENTIALS","Current Nutricentials supplement-style beauty product listed in the Hungarian range.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002527?store=beautybyildy"],
  ["HydraClean Creamy Cleansing Lotion","NUTRICENTIALS","Creamy facial cleanser.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001780?store=beautybyildy"],
  ["To Be Clear Pure Cleansing Gel","NUTRICENTIALS","Gel facial cleanser.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001781?store=beautybyildy"],
  ["Nutricentials Here You Glow","NUTRICENTIALS","Current Nutricentials exfoliating/renewal product in the Hungarian range.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001783?store=beautybyildy"],
  ["In Balance pH Balance Toner","NUTRICENTIALS","pH-kiegyensúlyozó arctonik a jelenlegi magyar Nutricentials kínálatból.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001784?store=beautybyildy"],
  ["Nutricentials Eye Love Bright Eyes Illuminating Eye Cream","NUTRICENTIALS","Szemkörnyékápoló krém a jelenlegi magyar Nutricentials kínálatból.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001795?store=beautybyildy"],
  ["Nutricentials Ceramides + Postbiotics Pump","NUTRICENTIALS","Ceramid- és posztbiotikum-fókuszú booster a jelenlegi magyar Nutricentials kínálatból.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002405?store=beautybyildy"],
  ["Nutricentials Celltrex Always Right Recovery Fluid","NUTRICENTIALS","Regeneráló szérum/folyadék a jelenlegi magyar Nutricentials kínálatból.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001791?store=beautybyildy"],
  ["Day Dream Protective Cream SPF 30","NUTRICENTIALS","Creamy daytime moisturiser with SPF 30.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001785?store=beautybyildy"],
  ["Day Dream Protective Lotion SPF 30","NUTRICENTIALS","Lightweight daytime moisturiser with SPF 30.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001786?store=beautybyildy"],
  ["Thirst Fix Hydrating Gel Cream","NUTRICENTIALS","Light hydrating gel cream.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001787?store=beautybyildy"],
  ["Moisturize Me Intense Hydrating Cream","NUTRICENTIALS","Rich moisturising cream.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001793?store=beautybyildy"],
  ["Nutricentials Dew All Day Moisture Restore Cream","NUTRICENTIALS","Moisture-restoring facial cream.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001788?store=beautybyildy"],
  ["Pillow Glow Sleeping Mask","NUTRICENTIALS","Overnight moisturising mask.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001796?store=beautybyildy"],
  ["Brighter Day Exfoliant Scrub","NUTRICENTIALS","Exfoliating facial scrub.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001789?store=beautybyildy"],
  ["Spa Day Creamy Hydrating Masque","NUTRICENTIALS","Creamy hydrating facial mask.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001790?store=beautybyildy"],
  ["ageLOC Nutriol Scalp & Hair System","HAIR & SCALP","Scalp and hair care system in the ageLOC range.","https://mysite.mynuskin.com/catalog/hu/hu/product/97139428?store=beautybyildy"],
  ["ageLOC Nutriol Scalp & Hair Shampoo","HAIR & SCALP","Sampon vékony szálú, sérült és öregedő hajra és fejbőrre.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002106?store=beautybyildy"],
  ["ageLOC Nutriol Scalp & Hair Conditioner","HAIR & SCALP","Fejbőr- és hajápoló kondicionáló az ageLOC Nutriol rendszerből.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002107?store=beautybyildy"],
  ["ageLOC Nutriol Intensive Scalp & Hair Serum","HAIR & SCALP","Intenzív fejbőr- és hajszérum az ageLOC Nutriol rendszerből.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002149?store=beautybyildy"],
  ["Nu Skin 180° Anti-Aging Skin Therapy System","NU SKIN 180°","Korábbi, több lépéses Nu Skin 180° arcápolási rendszer; az EU-ban 2024 októberében kivezetésre került.","https://www.nuskin.com/content/dam/eu-library/office/documents/product-discontinuation-overview/nu-skin-product-discontinuation-overview-2024-q4.pdf"],
  ["Epoch Glacial Marine Mud","EPOCH","Etnobotanikai ihletésű iszappakolás.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001987?store=beautybyildy"],
  ["Epoch Baobab Body Butter","EPOCH","Gazdag, baobabfókuszú testvaj.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001985?store=beautybyildy"],
  ["Epoch IceDancer","EPOCH","Frissítő lábápoló zselé.","https://www.nuskin.com/content/products/02/10/28/02102803/en.html"],
  ["Epoch Hand Cream","EPOCH","Korábbi Epoch kéz- és körömápoló krém; a magyar piacon kivezetett státuszú.","https://www.nuskin.com/products/97/00/25/97002592.html"],
  ["Epoch Polishing Bar","EPOCH","Szappanmentes testradírozó tömb.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001994?store=beautybyildy"],
  ["Epoch Sole Solution","EPOCH","Célzott lábfejápoló krém.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001988?store=beautybyildy"],
  ["Epoch Ava Puhi Moni Shampoo","EPOCH · HAIR","Korábbi Epoch hajápoló sampon; az EU-ban 2025 februárjában kivezetésre került.","https://www.nuskin.com/content/dam/eu-library/office/documents/product-discontinuation-overview/nu-skin-product-discontinuation-overview-2025-q1.pdf"],
  ["Epoch Ava Puhi Moni Light Conditioner","EPOCH · HAIR","Korábbi Epoch hajkondicionáló; az EU-ban 2024 januárjában kivezetésre került.","https://www.nuskin.com/content/dam/eu-library/office/documents/product-discontinuation-overview/nu-skin-product-discontinuation-overview-2024-q1.pdf"],
  ["Sunright Insta Glow","SUNRIGHT","Önbarnító gél arcra és testre.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002009?store=beautybyildy"],
  ["Liquid Body Lufra","BODY CARE","Korábbi testradírozó tusolóformula; az EU-ban 2026 márciusában kivezetésre került.","https://www.nuskin.com/content/dam/eu-library/office/documents/product-discontinuation-overview/nu-skin-product-discontinuation-overview-2026-q1.pdf"],
  ["Perennial Body Lotion","BODY CARE","Mindennapi testápoló és hidratáló lotion.","https://mysite.mynuskin.com/catalog/hu/hu/product/97100875?store=beautybyildy"],
  ["NaPCA Moisture Mist","BODY CARE","Hidratáló permet arcra és testre.","https://mysite.mynuskin.com/catalog/hu/hu/product/97138860?store=beautybyildy"],
  ["ageLOC Body Shaping Gel","BODY CARE","Testápoló gél az ageLOC testápolási rendszerhez.","https://mysite.mynuskin.com/catalog/hu/hu/product/97003902?store=beautybyildy"],
  ["ageLOC Dermatic Effects","BODY CARE","Hidratáló testápoló az ageLOC testápolási rendszerhez.","https://mysite.mynuskin.com/catalog/hu/hu/product/97003903?store=beautybyildy"],
  ["ReNu Hair Mask","HAIR CARE","Korábbi intenzív hajpakolás. A Nu Skin terméktörzse a magyar piacon kivezetett státuszt jelez a ReNu Hair Mask EU-változatára.","https://www.nuskin.com/products/97/10/13/97101356.html"],
  ["AP 24 Whitening Fluoride Toothpaste","ORAL CARE","Fluoridos fogkrém fehérítő fókuszú formulával.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001647?store=beautybyildy"],
  ["AP 24 Anti-Plaque Fluoride Toothpaste","ORAL CARE","Korábbi, lepedék elleni fluoridos fogkrém; a magyar piacon már kivezetett státuszú.","https://www.nuskin.com/content/products/97/00/16/97001648/hu.html"],
  ["Pharmanex LifePak+","PHARMANEX · VITAMINOK","Komplex étrend-kiegészítő 13 vitaminnal, 9 ásványi anyaggal és növényi kivonatokkal.","https://mysite.mynuskin.com/catalog/hu/hu/product/85433743?store=beautybyildy"],
  ["LifePak+ & Marine Omega ADR-csomag","PHARMANEX · OMEGA-3","LifePak+ és Marine Omega termékeket tartalmazó magyar ADR-csomag. A Nu Skin magyar ADR-oldala jelenleg készlethiányosként jelzi.","https://www.nuskin.com/hu_HU/adr_packages.html"],
  ["Pharmanex Tēgreen","PHARMANEX · ANTIOXIDÁNS","Zöldtea-kivonatot tartalmazó étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85493529?store=beautybyildy"],
  ["JVi","PHARMANEX · VITAMINITAL","12 gyümölcs és zöldség keveréke; C-vitamin-forrás.","https://mysite.mynuskin.com/catalog/hu/hu/product/97003762?store=beautybyildy"],
  ["Beauty Focus MultiBeauty","PHARMANEX · BEAUTY","Többféle tápanyagot tartalmazó szépségápolási étrend-kiegészítő haj, köröm és bőr támogatására.","https://mysite.mynuskin.com/catalog/hu/hu/product/85432267?store=beautybyildy"],
  ["Beauty Focus Collagen+","PHARMANEX · BEAUTY","Kollagénhidrolizátumot, búzaolaj-kivonatot és luteint tartalmazó szépségápolási étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85892208?store=beautybyildy"],
  ["R² Day","PHARMANEX · VITALITÁS","Cordyceps sinensis, gránátalma és Panax ginseng alapú nappali étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85433895?store=beautybyildy"],
  ["R² Night","PHARMANEX · VITALITÁS","Szelént és növényi kivonatokat tartalmazó esti étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85433894?store=beautybyildy"],
  ["R² Day + Night","PHARMANEX · VITALITÁS","A korábbi kombinált R² Day + Night összeállítás; a magyar piacon kivezetett státuszú. Az R² Day és R² Night külön termékként szerepel.","https://www.nuskin.com/products/85/43/39/85433901.html"],
  ["ReishiMax GLp","PHARMANEX · WELLNESS","Reishigomba-kivonatot tartalmazó étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85433519?store=beautybyildy"],
  ["ageLOC Vitality","PHARMANEX · VITALITÁS","Cordyceps, gránátalma és Panax ginseng alapú vitalitásfókuszú étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/97137705?store=beautybyildy"],
  ["LifePak elements","PHARMANEX · VITAMINOK","Prysm-kvalifikált, napi vitamin- és ásványianyag-kiegészítés. A Nu Skin magyar Prysm iO pénzvisszafizetési garancia oldalán külön, név szerint szerepel LifePak elements termékként.","https://www.nuskin.com/content/nuskin/hu_HU/opportunity/business-tools/prysm-io/prysm-io-money-back-guarantee/prysm-io-guarantee-form/prysm-io-refund-form.html"],
  ["CordyMax CS-4","PHARMANEX · VITALITÁS","Korábbi Cordyceps sinensis micéliumot tartalmazó étrend-kiegészítő; az EU-ban 2025 januárjában kivezetésre került.","https://www.nuskin.com/content/dam/eu-library/office/documents/product-discontinuation-overview/nu-skin-product-discontinuation-overview-2025-q1.pdf"],
  ["Pro-B","PHARMANEX · EMÉSZTÉS","Korábbi Lactobacillus fermentum PCC™ probiotikus kultúrát tartalmazó étrend-kiegészítő; az EU-ban 2024 októberében kivezetésre került.","https://www.nuskin.com/content/dam/eu-library/office/documents/product-discontinuation-overview/nu-skin-product-discontinuation-overview-2024-q4.pdf"],
  ["TRME MyGOAL","TRME · BODY BALANCE","A Nu Skin aktuális TRME Body Balance rendszerének egyik étrend-kiegészítője.","https://mysite.mynuskin.com/catalog/hu/hu/product/85542536?store=beautybyildy"],
  ["TRME MyEDGE","TRME · BODY BALANCE","A Nu Skin aktuális TRME Body Balance rendszerének egyik étrend-kiegészítője.","https://mysite.mynuskin.com/catalog/hu/hu/product/97139804?store=beautybyildy"],
  ["TRME InnerNU","TRME · BODY BALANCE","Gyömbér- és articsóka-kivonatot tartalmazó TRME étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85552525?store=beautybyildy"],
  ["TRME REALMe","TRME · BODY BALANCE","A Nu Skin aktuális TRME Body Balance rendszerének egyik étrend-kiegészítője.","https://mysite.mynuskin.com/catalog/hu/hu/product/85542537?store=beautybyildy"],
  ["TRME M-Bar","TRME · BODY BALANCE","A TRME rendszerhez tartozó étkezéshelyettesítő szelet.","https://mysite.mynuskin.com/catalog/hu/hu/product/97139726?store=beautybyildy"],
  ["TRME Weight Management Kit","TRME · BODY BALANCE","InnerNU, MyEDGE, MyGOAL és REALMe termékeket tartalmazó hivatalos TRME csomag.","https://mysite.mynuskin.com/catalog/hu/hu/product/97139798?store=beautybyildy"],
  ["ageLOC TRMe","WELLNESS","A Nu Skin magyar oldalán bemutatott, személyre szabható Body Balance rendszer, amely a MyGOAL, InnerNU, REALMe, MyEDGE és M-Bar termékeket, valamint TRME csomagokat foglalja össze.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-trme-landing-page"],
  ["Prysm iO","WELLNESS TECH","A Nu Skin magyar oldalán bemutatott, nem invazív wellness mérőeszköz, amely 15 másodperc alatt követi a bőr karotinoidszintjét és Prysm-pontszámot ad.","https://www.nuskin.com/hu/hu/site/product/eua-meet-prysm-io-the-future-of-measurable-nutritional-wellness"],
];

const copy = {
  hu: {
    back:"Vissza a főoldalra",
    nuskinTitle:"NU SKIN",
    nuskinLead:"Külön Nu Skin válogatás: beauty tech, bőrápolás, hajápolás, vitaminok és Pharmanex wellness egy helyen. A termékadatokat a hivatalos magyar és EMEA Nu Skin források alapján építjük fel.",
    nuskinNote:"A vásárlás minden esetben a Nu Skin hivatalos rendszerében történik. A vásárolható termékek közvetlenül a megfelelő Nu Skin termékoldalra vezetnek; a rendszer-, információs vagy már nem forgalmazott tételeknél külön jelöljük, ha nincs közvetlen vásárlás.",
    official:"HIVATALOS TERMÉKOLDAL",
    buyOfficial:"VÁSÁRLÁS A NU SKIN OLDALÁN",
    system:"RENDSZER MEGTEKINTÉSE",
    archive:"HIVATALOS INFORMÁCIÓ",
    details:"RÉSZLETES ADATLAP",
    verified:"Hivatalos termékforrások alapján · folyamatosan frissítve",
    localeNote:"HU · Magyarország · HUF  |  DE · Ausztria · EUR  |  EN · Írország · EUR",
    products:"termék",
    available:"KÖZVETLEN VÁSÁRLÁS",
    infoOnly:"INFORMÁCIÓ",
  },
  en: {
    back:"Back to home",
    nuskinTitle:"NU SKIN",
    nuskinLead:"A dedicated Nu Skin edit covering beauty tech, skincare, haircare, vitamins and Pharmanex wellness, built from current official Hungarian and EMEA Nu Skin sources.",
    nuskinNote:"Purchases are completed entirely within Nu Skin’s official system. Products available for purchase open the relevant Nu Skin product page directly; system, informational or discontinued items are clearly marked when direct purchase is not available.",
    official:"OFFICIAL PRODUCT PAGE",
    buyOfficial:"SHOP ON NU SKIN",
    system:"VIEW SYSTEM",
    archive:"OFFICIAL INFORMATION",
    details:"DETAILED PROFILE",
    verified:"Based on official product sources · continuously updated",
    localeNote:"HU · Hungary · HUF  |  DE · Austria · EUR  |  EN · Ireland · EUR",
    products:"products",
    available:"DIRECT PURCHASE",
    infoOnly:"INFORMATION",
  },
  de: {
    back:"Zurück zur Startseite",
    nuskinTitle:"NU SKIN",
    nuskinLead:"Eine eigene Nu-Skin-Auswahl mit Beauty Tech, Hautpflege, Haarpflege, Vitaminen und Pharmanex-Wellness auf Basis aktueller offizieller ungarischer und EMEA-Nu-Skin-Quellen.",
    nuskinNote:"Der Kauf erfolgt vollständig im offiziellen Nu-Skin-System. Kaufbare Produkte führen direkt zur jeweiligen Nu-Skin-Produktseite; System-, Informations- oder nicht mehr verfügbare Artikel werden klar gekennzeichnet, wenn kein direkter Kauf möglich ist.",
    official:"OFFIZIELLE PRODUKTSEITE",
    buyOfficial:"BEI NU SKIN KAUFEN",
    system:"SYSTEM ANSEHEN",
    archive:"OFFIZIELLE INFORMATION",
    details:"DETAILPROFIL",
    verified:"Auf Basis offizieller Produktquellen · laufend aktualisiert",
    localeNote:"HU · Ungarn · HUF  |  DE · Österreich · EUR  |  EN · Irland · EUR",
    products:"Produkte",
    available:"DIREKT KAUFEN",
    infoOnly:"INFORMATION",
  }
};

const groupLabels={
  hu:{
    "BEAUTY TECH":"BEAUTY TECH","SKINCARE":"BŐRÁPOLÁS","TRU FACE":"TRU FACE","NUTRICENTIALS":"NUTRICENTIALS",
    "HAIR & SCALP":"HAJ & FEJBŐR","NU SKIN 180°":"NU SKIN 180°","EPOCH":"EPOCH","EPOCH · HAIR":"EPOCH · HAJ",
    "SUNRIGHT":"SUNRIGHT","BODY CARE":"TESTÁPOLÁS","HAIR CARE":"HAJÁPOLÁS","ORAL CARE":"SZÁJÁPOLÁS",
    "PHARMANEX · VITAMINOK":"PHARMANEX · VITAMINOK","PHARMANEX · OMEGA-3":"PHARMANEX · OMEGA-3",
    "PHARMANEX · ANTIOXIDÁNS":"PHARMANEX · ANTIOXIDÁNS","PHARMANEX · VITAMINITAL":"PHARMANEX · VITAMINITAL",
    "PHARMANEX · BEAUTY":"PHARMANEX · BEAUTY","PHARMANEX · VITALITÁS":"PHARMANEX · VITALITÁS",
    "PHARMANEX · WELLNESS":"PHARMANEX · WELLNESS","PHARMANEX · EMÉSZTÉS":"PHARMANEX · EMÉSZTÉS",
    "TRME · BODY BALANCE":"TRME · BODY BALANCE","WELLNESS":"WELLNESS","WELLNESS TECH":"WELLNESS TECH"
  },
  en:{
    "BEAUTY TECH":"BEAUTY TECH","SKINCARE":"SKINCARE","TRU FACE":"TRU FACE","NUTRICENTIALS":"NUTRICENTIALS",
    "HAIR & SCALP":"HAIR & SCALP","NU SKIN 180°":"NU SKIN 180°","EPOCH":"EPOCH","EPOCH · HAIR":"EPOCH · HAIR",
    "SUNRIGHT":"SUNRIGHT","BODY CARE":"BODY CARE","HAIR CARE":"HAIR CARE","ORAL CARE":"ORAL CARE",
    "PHARMANEX · VITAMINOK":"PHARMANEX · VITAMINS","PHARMANEX · OMEGA-3":"PHARMANEX · OMEGA-3",
    "PHARMANEX · ANTIOXIDÁNS":"PHARMANEX · ANTIOXIDANT","PHARMANEX · VITAMINITAL":"PHARMANEX · NUTRITION",
    "PHARMANEX · BEAUTY":"PHARMANEX · BEAUTY","PHARMANEX · VITALITÁS":"PHARMANEX · VITALITY",
    "PHARMANEX · WELLNESS":"PHARMANEX · WELLNESS","PHARMANEX · EMÉSZTÉS":"PHARMANEX · DIGESTIVE",
    "TRME · BODY BALANCE":"TRME · BODY BALANCE","WELLNESS":"WELLNESS","WELLNESS TECH":"WELLNESS TECH"
  },
  de:{
    "BEAUTY TECH":"BEAUTY TECH","SKINCARE":"HAUTPFLEGE","TRU FACE":"TRU FACE","NUTRICENTIALS":"NUTRICENTIALS",
    "HAIR & SCALP":"HAAR & KOPFHAUT","NU SKIN 180°":"NU SKIN 180°","EPOCH":"EPOCH","EPOCH · HAIR":"EPOCH · HAAR",
    "SUNRIGHT":"SUNRIGHT","BODY CARE":"KÖRPERPFLEGE","HAIR CARE":"HAARPFLEGE","ORAL CARE":"MUNDPFLEGE",
    "PHARMANEX · VITAMINOK":"PHARMANEX · VITAMINE","PHARMANEX · OMEGA-3":"PHARMANEX · OMEGA-3",
    "PHARMANEX · ANTIOXIDÁNS":"PHARMANEX · ANTIOXIDANTIEN","PHARMANEX · VITAMINITAL":"PHARMANEX · NÄHRSTOFFE",
    "PHARMANEX · BEAUTY":"PHARMANEX · BEAUTY","PHARMANEX · VITALITÁS":"PHARMANEX · VITALITÄT",
    "PHARMANEX · WELLNESS":"PHARMANEX · WELLNESS","PHARMANEX · EMÉSZTÉS":"PHARMANEX · VERDAUUNG",
    "TRME · BODY BALANCE":"TRME · BODY BALANCE","WELLNESS":"WELLNESS","WELLNESS TECH":"WELLNESS TECH"
  }
};

const groupDescriptions={
  hu:{
    "BEAUTY TECH":"Otthoni beauty technológia és a hozzá kapcsolódó rendszerek.",
    "SKINCARE":"Célzott Nu Skin bőrápolás.","TRU FACE":"Prémium age-well bőrápolás.","NUTRICENTIALS":"Mindennapi arctisztítás, hidratálás és célzott kiegészítő ápolás.",
    "HAIR & SCALP":"Célzott haj- és fejbőrápolás.","NU SKIN 180°":"Komplex, több lépéses age-well arcápolási rendszer.",
    "EPOCH":"Etnobotanikai ihletésű bőr- és testápolás.","EPOCH · HAIR":"Etnobotanikai ihletésű hajápolás.",
    "SUNRIGHT":"Napfényhez és barnított megjelenéshez kapcsolódó bőrápolás.","BODY CARE":"Testápolás és hidratálás.",
    "HAIR CARE":"Hajápolás és intenzív kondicionálás.","ORAL CARE":"Mindennapi szájápolás.",
    "PHARMANEX · VITAMINOK":"Vitamin- és ásványianyag-alapú étrend-kiegészítés.","PHARMANEX · OMEGA-3":"Omega-3 zsírsavakat tartalmazó étrend-kiegészítés.",
    "PHARMANEX · ANTIOXIDÁNS":"Antioxidáns fókuszú étrend-kiegészítés.","PHARMANEX · VITAMINITAL":"Növényi és vitaminfókuszú étrend-kiegészítés.",
    "PHARMANEX · BEAUTY":"Szépségápolást belülről támogató étrend-kiegészítők.","PHARMANEX · VITALITÁS":"Vitalitásfókuszú étrend-kiegészítés.",
    "PHARMANEX · WELLNESS":"Általános wellnessfókuszú étrend-kiegészítés.","PHARMANEX · EMÉSZTÉS":"Emésztőrendszeri wellnessfókuszú étrend-kiegészítés.",
    "TRME · BODY BALANCE":"A TRME Body Balance rendszer termékei.","WELLNESS":"Nu Skin wellnessrendszer.","WELLNESS TECH":"Okos wellness technológia."
  },
  en:{
    "BEAUTY TECH":"At-home beauty technology and its supporting systems.","SKINCARE":"Targeted Nu Skin skincare.","TRU FACE":"Premium age-well skincare.",
    "NUTRICENTIALS":"Daily cleansing, hydration and targeted skincare support.","HAIR & SCALP":"Targeted hair and scalp care.",
    "NU SKIN 180°":"A multi-step age-well facial care system.","EPOCH":"Ethnobotanical-inspired skin and body care.","EPOCH · HAIR":"Ethnobotanical-inspired haircare.",
    "SUNRIGHT":"Sun and sunless-tanning focused skincare.","BODY CARE":"Body cleansing, smoothing and hydration.","HAIR CARE":"Haircare and intensive conditioning.",
    "ORAL CARE":"Everyday oral care.","PHARMANEX · VITAMINOK":"Vitamin and mineral supplementation.","PHARMANEX · OMEGA-3":"Omega-3 supplementation.",
    "PHARMANEX · ANTIOXIDÁNS":"Antioxidant-focused supplementation.","PHARMANEX · VITAMINITAL":"Plant- and vitamin-focused supplementation.",
    "PHARMANEX · BEAUTY":"Beauty-focused supplements from within.","PHARMANEX · VITALITÁS":"Vitality-focused supplementation.",
    "PHARMANEX · WELLNESS":"General wellness supplementation.","PHARMANEX · EMÉSZTÉS":"Digestive wellness supplementation.",
    "TRME · BODY BALANCE":"Products from the TRME Body Balance system.","WELLNESS":"Nu Skin wellness system.","WELLNESS TECH":"Smart wellness technology."
  },
  de:{
    "BEAUTY TECH":"Beauty-Technologie für zu Hause und die dazugehörigen Systeme.","SKINCARE":"Gezielte Nu-Skin-Hautpflege.","TRU FACE":"Premium-Age-Well-Hautpflege.",
    "NUTRICENTIALS":"Tägliche Reinigung, Feuchtigkeit und gezielte Hautpflege.","HAIR & SCALP":"Gezielte Haar- und Kopfhautpflege.",
    "NU SKIN 180°":"Mehrstufiges Age-Well-Gesichtspflegesystem.","EPOCH":"Ethnobotanisch inspirierte Haut- und Körperpflege.","EPOCH · HAIR":"Ethnobotanisch inspirierte Haarpflege.",
    "SUNRIGHT":"Hautpflege rund um Sonne und sonnenlose Bräune.","BODY CARE":"Körperreinigung, Glättung und Feuchtigkeitspflege.","HAIR CARE":"Haarpflege und intensive Konditionierung.",
    "ORAL CARE":"Tägliche Mundpflege.","PHARMANEX · VITAMINOK":"Vitamin- und Mineralstoffergänzung.","PHARMANEX · OMEGA-3":"Omega-3-Ergänzung.",
    "PHARMANEX · ANTIOXIDÁNS":"Antioxidativ ausgerichtete Nahrungsergänzung.","PHARMANEX · VITAMINITAL":"Pflanzen- und vitaminorientierte Nahrungsergänzung.",
    "PHARMANEX · BEAUTY":"Beauty-Nahrungsergänzung von innen.","PHARMANEX · VITALITÁS":"Vitalitätsorientierte Nahrungsergänzung.",
    "PHARMANEX · WELLNESS":"Allgemeine Wellness-Nahrungsergänzung.","PHARMANEX · EMÉSZTÉS":"Verdauungsorientierte Wellness-Nahrungsergänzung.",
    "TRME · BODY BALANCE":"Produkte des TRME Body-Balance-Systems.","WELLNESS":"Nu-Skin-Wellness-System.","WELLNESS TECH":"Smarte Wellness-Technologie."
  }
};
const localGroup=(group,lang)=>(groupLabels[lang]||groupLabels.hu)[group]||group;
const archivedNuSkin=new Set(["Nu Skin 180° Anti-Aging Skin Therapy System","Epoch Hand Cream","Epoch IceDancer","Epoch Ava Puhi Moni Shampoo","Epoch Ava Puhi Moni Light Conditioner","Liquid Body Lufra","ReNu Hair Mask","AP 24 Anti-Plaque Fluoride Toothpaste","R² Day + Night","CordyMax CS-4","Pro-B","LifePak+ & Marine Omega ADR-csomag"]);
const localGroupDescription=(group,lang)=>(groupDescriptions[lang]||groupDescriptions.hu)[group]||"";
// Purchase-route audit: 2026-09-23. Direct My Site links are retained only for current products; known discontinued/unstable routes are information-only.
const localizedNuSkinUrl=(url,lang)=>{
  if(!url.includes("mysite.mynuskin.com")) return url;
  if(lang==="de") return url.replace("/catalog/hu/hu/","/catalog/at/de/");
  if(lang==="en") return url.replace("/catalog/hu/hu/","/catalog/ie/en/");
  return url;
};
const localizedNuSkinCta=(name,url,lang,t)=>{
  if(archivedNuSkin.has(name)) return t.archive;
  if(name==="ageLOC TRMe") return t.system;
  if(["hu","de","en"].includes(lang) && url.includes("mysite.mynuskin.com")) return t.buyOfficial;
  return t.official;
};


// Supplementary guidance is deliberately category-specific, not a substitute for
// manufacturer-verified INCI, dosage, contraindications or clinical evidence.
const nuskinGuidance=(group,name,lang)=>{
  const archived=archivedNuSkin.has(name);
  const supplement=group.startsWith("PHARMANEX")||group.startsWith("TRME")||name==="ageLOC TRMe";
  const device=group==="BEAUTY TECH"||group==="WELLNESS TECH";
  const sun=group==="SUNRIGHT"||name.includes("SPF 30");
  const oral=group==="ORAL CARE";
  const translations={
    hu:{
      archive:"Korábbi vagy tájékoztató termék: vásárlás előtt ellenőrizd a hivatalos forgalmazási státuszt.",
      supplement:"Étrend-kiegészítő: az összetevőket, napi adagot, allergéneket és ellenjavallatokat a termék aktuális hivatalos címkéje alapján ellenőrizd. Nem helyettesíti a változatos étrendet.",
      device:"Készülék: az alkalmazás módját, a kompatibilis tartozékokat és az ellenjavallatokat a hivatalos használati útmutató határozza meg. A kozmetikai ígéretek nem jelentenek igazolt gyógyhatást.",
      sun:"Napfényhez kapcsolódó termék: az önbarnító nem fényvédő. SPF-terméknél kövesd a megfelelő felvitelre és újrakenésre vonatkozó útmutatót.",
      oral:"Szájápoló termék: a használat és az életkori ajánlás a hivatalos termékcímke szerint követendő.",
      cosmetic:"Kozmetikai termék: az aktuális összetevőlistát, használati módot és az esetleges érzékenységet a hivatalos termékoldalon vagy a csomagoláson ellenőrizd.",
      title:"Használat és fontos tudnivalók",source:"Összetétel, alkalmazás és hivatalos termékadatok"
    },
    en:{
      archive:"Former or information-only product: check its current market status with Nu Skin before considering a purchase.",
      supplement:"Food supplement: check ingredients, daily serving, allergens and precautions on the current official label. Not a substitute for a varied diet.",
      device:"Device: consult the official instructions for use, compatible attachments and contraindications. Cosmetic marketing claims do not establish medical efficacy.",
      sun:"Sun-related product: self-tanner does not provide sun protection. For SPF products, follow the directions for adequate application and reapplication.",
      oral:"Oral-care product: follow the official label for directions and age guidance.",
      cosmetic:"Cosmetic product: check the current ingredient list, directions and potential sensitivities on the official product page or packaging.",
      title:"Use and important information",source:"Ingredients, directions and official product information"
    },
    de:{
      archive:"Früheres oder rein informatives Produkt: vor einem Kauf den aktuellen Vertriebsstatus bei Nu Skin prüfen.",
      supplement:"Nahrungsergänzungsmittel: Inhaltsstoffe, Tagesportion, Allergene und Vorsichtsmaßnahmen anhand des aktuellen offiziellen Etiketts prüfen. Kein Ersatz für eine abwechslungsreiche Ernährung.",
      device:"Gerät: Anwendung, kompatible Aufsätze und Gegenanzeigen stehen in der offiziellen Gebrauchsanweisung. Kosmetische Werbeaussagen belegen keine medizinische Wirksamkeit.",
      sun:"Produkt rund um Bräunung und Sonne: Selbstbräuner bieten keinen Sonnenschutz. Bei LSF-Produkten die Hinweise zum ausreichenden Auftragen und Nachcremen beachten.",
      oral:"Mundpflegeprodukt: Anwendung und Altersempfehlung gemäß offiziellem Etikett beachten.",
      cosmetic:"Kosmetisches Produkt: aktuelle Inhaltsstoffe, Anwendung und mögliche Unverträglichkeiten auf der offiziellen Produktseite oder Verpackung prüfen.",
      title:"Anwendung und wichtige Hinweise",source:"Inhaltsstoffe, Anwendung und offizielle Produktangaben"
    }
  };
  const t=translations[lang]||translations.hu;
  return {title:t.title,source:t.source,note:archived?t.archive:supplement?t.supplement:device?t.device:sun?t.sun:oral?t.oral:t.cosmetic};
};

function BrandHero({title,lead,note,t,media}) {
  return <TopicHero eyebrow="BEAUTY BY ILDY · BRAND EDIT" title={title} lead={lead} note={note} backLabel={t.back} videoSrc={media?.video} videoPoster={media?.poster}/>;
}

export function NuSkinPage({lang="hu"}) {
  const t=copy[lang]||copy.hu;
  return <main className="brandPage">
    <BrandHero title={t.nuskinTitle} lead={t.nuskinLead} note={t.nuskinNote} t={t} media={subpageMedia.nuskin}/>
    <section className="brandPageBody">
      <div className="brandPageMeta"><span>{NUSKIN.length} {t.products}</span><small>{t.verified}</small></div><p className="brandPageNote">{t.localeNote}</p>
      <div className="brandGroups">
        {[...new Set(NUSKIN.map(([,group])=>group))].map(group=><section className="brandGroup" key={group}>
          <div className="brandGroupHead"><h2>{localGroup(group,lang)}</h2><span>{NUSKIN.filter(([,g])=>g===group).length}</span></div>
          <div className="brandProductGrid">
            {NUSKIN.filter(([,g])=>g===group).map(([name,,desc,url])=>{
              const direct=url.includes("mysite.mynuskin.com");
              const special=archivedNuSkin.has(name)||name==="ageLOC TRMe"||!direct;
              return <article className={`brandProductCard nuskinCard ${direct&&!special?"isPurchasable":"isInfo"}`} key={name}>
                <div className="brandCardTopline"><span>{localGroup(group,lang)}</span><em>{direct&&!special?t.available:t.infoOnly}</em></div>
                <h2>{name}</h2><p>{NUSKIN_LOCALIZED_DESCRIPTIONS[name]?.[lang] || (lang==="en" ? desc : localGroupDescription(group,lang))}</p>
                <details className="nuskinProductDetails">
                  <summary>{t.details}</summary>
                  <h3>{nuskinGuidance(group,name,lang).title}</h3>
                  <p>{nuskinGuidance(group,name,lang).note}</p>
                  <a href={localizedNuSkinUrl(url,lang)} target="_blank" rel="noopener noreferrer">{nuskinGuidance(group,name,lang).source}<ExternalLink size={12}/></a>
                </details>
                <div className="brandCardActions">
                  <a className={direct&&!special?"brandShopLink":""} href={localizedNuSkinUrl(url,lang)} target="_blank" rel={direct&&!special?"sponsored noopener noreferrer":"noopener noreferrer"}>{localizedNuSkinCta(name,url,lang,t)}<ExternalLink size={13}/></a>
                </div>
              </article>
            })}
          </div>
        </section>)}
      </div>
    </section>
  </main>;
}
