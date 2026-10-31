import React from "react";
import { ExternalLink } from "lucide-react";
import "./brandPages.css";
import {TopicHero} from './topicHero.jsx';
import {subpageMedia} from './subpage-media.js';

const NUSKIN = [
  ["ageLOC LumiSpa iO System","BEAUTY TECH","A Nu Skin Vera alkalmazással összekapcsolható, személyre szabható arctisztító és bőrápoló rendszer.","https://mysite.mynuskin.com/catalog/hu/hu/product/97139603?store=beautybyildy"],
  ["ageLOC WellSpa iO System","BEAUTY TECH","Otthoni szépség- és wellnesskészülék a testápolási rutin támogatására.","https://mysite.mynuskin.com/catalog/hu/hu/product/97139757?store=beautybyildy"],
  ["ageLOC Boost System","BEAUTY TECH","Váltakozó pulzáló mikroáram-technológiát és Activating Serumot egyesítő, napi kétperces arcápoló rendszer a ragyogóbb, teltebb és rugalmasabb megjelenésű bőrért.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001951?store=beautybyildy"],
  ["ageLOC Galvanic Spa","BEAUTY TECH","Galvánáramos otthoni készülékrendszer arc-, test- és fejbőrápolási alkalmazásokhoz, a hozzá kifejlesztett Nu Skin termékekkel használva.","https://mysite.mynuskin.com/catalog/hu/hu/product/97310060?store=beautybyildy"],
  ["Galvanic Spa Facial Gels with ageLOC","SKINCARE","A Galvanic Spa arckezelő fejével történő használatra kifejlesztett kétlépéses arcápoló gél.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004433?store=beautybyildy"],
  ["ageLOC Tru Face Future Serum","TRU FACE","Prémium arcápoló szérum a bőr feszesebb, simább és egységesebb megjelenésének támogatására.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004260?store=beautybyildy"],
  ["ageLOC Tru Face Line Corrector","TRU FACE","Célzott arcápoló a finom vonalak megjelenésére, különösen a szem és a száj környékén.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004263?store=beautybyildy"],
  ["ageLOC Tru Face Radiant Day","TRU FACE","Nappali hidratáló ápolás a ragyogóbb és egységesebb megjelenésű bőrért.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004268?store=beautybyildy"],
  ["ageLOC Tru Face Transforming Gel Cream","TRU FACE","Könnyű gélkrém hidratálásra, simább bőrképre és a pórusok láthatóságának finomítására.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004266?store=beautybyildy"],
  ["ageLOC Tru Face Uplifting Rich Cream","TRU FACE","Gazdag hidratálókrém a feszesebb bőrérzet és a látható vonalak ápolására.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004291?store=beautybyildy"],
  ["ageLOC Tru Face Refining Toner","TRU FACE","Előkészítő arctonik, amely tisztítás után támogatja a bőrápolási rutin következő lépéseit.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004294?store=beautybyildy"],
  ["ageLOC Tru Face Peptide Retinol Complex","TRU FACE","Retinolkomplexet és peptidet tartalmazó, többfunkciós arcápoló szérum.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004312?store=beautybyildy"],
  ["ageLOC Tru Face Essence Ultra","TRU FACE","Feszesítő fókuszú arcápoló a határozottabbnak tűnő arckontúrért.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004293?store=beautybyildy"],
  ["Nutricentials Pumps Vitamin C + Collagen","NUTRICENTIALS","C-vitamin- és kollagénfókuszú Nutricentials Pumps termék a jelenlegi magyar kínálatból.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002527?store=beautybyildy"],
  ["HydraClean Creamy Cleansing Lotion","NUTRICENTIALS","Krémes arctisztító a bőr kíméletes megtisztítására.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001780?store=beautybyildy"],
  ["To Be Clear Pure Cleansing Gel","NUTRICENTIALS","Frissítő gél állagú arctisztító.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001781?store=beautybyildy"],
  ["Nutricentials Here You Glow","NUTRICENTIALS","Hámlasztó és bőrmegújító fókuszú Nutricentials termék a jelenlegi magyar kínálatból.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001783?store=beautybyildy"],
  ["In Balance pH Balance Toner","NUTRICENTIALS","pH-kiegyensúlyozó arctonik a jelenlegi magyar Nutricentials kínálatból.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001784?store=beautybyildy"],
  ["Nutricentials Eye Love Bright Eyes Illuminating Eye Cream","NUTRICENTIALS","Szemkörnyékápoló krém a jelenlegi magyar Nutricentials kínálatból.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001795?store=beautybyildy"],
  ["Nutricentials Ceramides + Postbiotics Pump","NUTRICENTIALS","Ceramid- és posztbiotikum-fókuszú booster a jelenlegi magyar Nutricentials kínálatból.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002405?store=beautybyildy"],
  ["Nutricentials Celltrex Always Right Recovery Fluid","NUTRICENTIALS","Regeneráló szérum/folyadék a jelenlegi magyar Nutricentials kínálatból.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001791?store=beautybyildy"],
  ["Day Dream Protective Cream SPF 30","NUTRICENTIALS","Krémes nappali hidratáló SPF 30 fényvédelemmel.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001785?store=beautybyildy"],
  ["Day Dream Protective Lotion SPF 30","NUTRICENTIALS","Könnyű nappali hidratáló SPF 30 fényvédelemmel.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001786?store=beautybyildy"],
  ["Thirst Fix Hydrating Gel Cream","NUTRICENTIALS","Könnyű, hidratáló gélkrém.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001787?store=beautybyildy"],
  ["Moisturize Me Intense Hydrating Cream","NUTRICENTIALS","Gazdag, intenzíven hidratáló arckrém.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001793?store=beautybyildy"],
  ["Nutricentials Dew All Day Moisture Restore Cream","NUTRICENTIALS","A bőr hidratáltságát támogató arcápoló krém.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001788?store=beautybyildy"],
  ["Pillow Glow Sleeping Mask","NUTRICENTIALS","Éjszakai hidratáló arcmaszk.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001796?store=beautybyildy"],
  ["Brighter Day Exfoliant Scrub","NUTRICENTIALS","Arcradír a bőr kíméletes hámlasztására.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001789?store=beautybyildy"],
  ["Spa Day Creamy Hydrating Masque","NUTRICENTIALS","Krémes, hidratáló arcmaszk.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001790?store=beautybyildy"],
  ["ageLOC Nutriol Scalp & Hair System","HAIR & SCALP","Komplex fejbőr- és hajápoló rendszer az ageLOC termékcsaládból.","https://mysite.mynuskin.com/catalog/hu/hu/product/97139428?store=beautybyildy"],
  ["ageLOC Nutriol Scalp & Hair Shampoo","HAIR & SCALP","Sampon vékony szálú, sérült és öregedő hajra és fejbőrre.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002106?store=beautybyildy"],
  ["ageLOC Nutriol Scalp & Hair Conditioner","HAIR & SCALP","Fejbőr- és hajápoló kondicionáló az ageLOC Nutriol rendszerből.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002107?store=beautybyildy"],
  ["ageLOC Nutriol Intensive Scalp & Hair Serum","HAIR & SCALP","Intenzív fejbőr- és hajszérum az ageLOC Nutriol rendszerből.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002149?store=beautybyildy"],
  ["ageLOC LumiSpa IdealEyes","SKINCARE","Ragyogásfokozó szemkörnyékápoló krém a sötét karikák és a fáradt megjelenés célzott ápolására.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001567?store=beautybyildy"],
  ["ageLOC LumiSpa Activating Face Cleanser – Normal to Combination","SKINCARE","Az ageLOC LumiSpa készülékhez készült arctisztító normál és vegyes bőrre.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004386?store=beautybyildy"],
  ["Rejuvenating Cream","SKINCARE","Gazdag hidratálókrém aloe verával, nátrium-hialuronáttal és E-vitaminnal a puha, hidratált bőrért.","https://mysite.mynuskin.com/catalog/hu/hu/product/97110258?store=beautybyildy"],
  ["Nu Skin 180º AHA Facial Peel and Neutraliser","NU SKIN 180°","10% tejsavat tartalmazó, kétlépéses AHA hámlasztó és neutralizáló arcápoló.","https://mysite.mynuskin.com/catalog/hu/hu/product/97101249?store=beautybyildy"],
  ["Nu Skin 180° Face Wash","NU SKIN 180°","10% aktív C-vitamint tartalmazó arctisztító az üdébb és ragyogóbb megjelenésű bőrért.","https://mysite.mynuskin.com/catalog/hu/hu/product/97101251?store=beautybyildy"],
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
  ["Body Cleansing Gel","BODY CARE","Szappanmentes, aloe verát és növényi kivonatokat tartalmazó gyengéd tusfürdő zselé.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004450?store=beautybyildy"],
  ["ageLOC Body Serum","BODY CARE","Az ageLOC WellSpa iO készülékkel használható testszérum a feszesebb és üdébb bőrmegjelenésért.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004431?store=beautybyildy"],
  ["ageLOC Body Polish","BODY CARE","Fizikai, kémiai és enzimatikus hámlasztást egyesítő testápoló radír.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002489?store=beautybyildy"],
  ["ageLOC Body Activating Gel","BODY CARE","Az ageLOC WellSpa iO Restore és Relax rutinjaihoz tervezett frissítő testápoló gél.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002889?store=beautybyildy"],
  ["Hair Mask","HAIR CARE","Intenzív hajpakolás, amely simítja és regenerálja a töredezett hajvégeket, és támogatja a haj kezelhetőségét.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002374?store=beautybyildy"],
  ["Smoothing Shampoo","HAIR CARE","Hajsimító sampon, amely gyengéden tisztít, és puha, fényes megjelenést kölcsönöz a hajnak.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002366?store=beautybyildy"],
  ["Smoothing Conditioner","HAIR CARE","Hajsimító kondicionáló a könnyebb kifésülésért és a selymes, kezelhető hajért.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004472?store=beautybyildy"],
  ["Volumizing Shampoo","HAIR CARE","Könnyed dúsító sampon, amely eltávolítja a szennyeződéseket és a felesleges faggyút.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004476?store=beautybyildy"],
  ["Volumizing Conditioner","HAIR CARE","Könnyed kondicionáló, amely kibontja és hidratálja a hajat anélkül, hogy elnehezítené.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002371?store=beautybyildy"],
  ["AP 24 Whitening Fluoride Toothpaste","ORAL CARE","Fluoridos fogkrém fehérítő fókuszú formulával.","https://mysite.mynuskin.com/catalog/hu/hu/product/97001647?store=beautybyildy"],
  ["AP 24 Anti-Plaque Fluoride Toothpaste","ORAL CARE","Korábbi, lepedék elleni fluoridos fogkrém; a magyar piacon már kivezetett státuszú.","https://www.nuskin.com/content/products/97/00/16/97001648/hu.html"],
  ["Pharmanex LifePak+","PHARMANEX · VITAMINOK","Komplex étrend-kiegészítő 13 vitaminnal, 9 ásványi anyaggal és növényi kivonatokkal.","https://mysite.mynuskin.com/catalog/hu/hu/product/85433743?store=beautybyildy"],
  ["LifePak+ & Marine Omega ADR-csomag","PHARMANEX · OMEGA-3","LifePak+ és Marine Omega termékeket tartalmazó magyar ADR-csomag. A Nu Skin magyar ADR-oldala jelenleg készlethiányosként jelzi.","https://www.nuskin.com/hu_HU/adr_packages.html"],
  ["MarineOmega","PHARMANEX · OMEGA-3","Hal- és krillolajból származó EPA- és DHA-tartalmú omega-3 étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85542991?store=beautybyildy"],
  ["Pharmanex Tēgreen","PHARMANEX · ANTIOXIDÁNS","Zöldtea-kivonatot tartalmazó étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85493529?store=beautybyildy"],
  ["JVi","PHARMANEX · VITAMINITAL","12 gyümölcs és zöldség keveréke; C-vitamin-forrás.","https://mysite.mynuskin.com/catalog/hu/hu/product/97003762?store=beautybyildy"],
  ["Beauty Focus MultiBeauty","PHARMANEX · BEAUTY","Többféle tápanyagot tartalmazó szépségápolási étrend-kiegészítő haj, köröm és bőr támogatására.","https://mysite.mynuskin.com/catalog/hu/hu/product/85432267?store=beautybyildy"],
  ["Beauty Focus Collagen+","PHARMANEX · BEAUTY","Kollagénhidrolizátumot, búzaolaj-kivonatot és luteint tartalmazó szépségápolási étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85892208?store=beautybyildy"],
  ["R² Day","PHARMANEX · VITALITÁS","Cordyceps sinensis, gránátalma és Panax ginseng alapú nappali étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85433895?store=beautybyildy"],
  ["R² Night","PHARMANEX · VITALITÁS","Szelént és növényi kivonatokat tartalmazó esti étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85433894?store=beautybyildy"],
  ["R² Day + Night","PHARMANEX · VITALITÁS","A korábbi kombinált R² Day + Night összeállítás; a magyar piacon kivezetett státuszú. Az R² Day és R² Night külön termékként szerepel.","https://www.nuskin.com/products/85/43/39/85433901.html"],
  ["ReishiMax GLp","PHARMANEX · WELLNESS","Reishigomba-kivonatot tartalmazó étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85433519?store=beautybyildy"],
  ["ageLOC Vitality","PHARMANEX · VITALITÁS","Cordyceps, gránátalma és Panax ginseng alapú vitalitásfókuszú étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/97137705?store=beautybyildy"],
  ["LifePak elements","PHARMANEX · VITAMINOK","Prysm-kvalifikált, napi vitamin- és ásványianyag-kiegészítés 22 esszenciális vitaminnal és ásványi anyaggal, valamint hat növényi kivonattal.","https://mysite.mynuskin.com/catalog/hu/hu/product/85434550?store=beautybyildy"],
  ["CordyMax CS-4","PHARMANEX · VITALITÁS","Korábbi Cordyceps sinensis micéliumot tartalmazó étrend-kiegészítő; az EU-ban 2025 januárjában kivezetésre került.","https://www.nuskin.com/content/dam/eu-library/office/documents/product-discontinuation-overview/nu-skin-product-discontinuation-overview-2025-q1.pdf"],
  ["Pro-B","PHARMANEX · EMÉSZTÉS","Korábbi Lactobacillus fermentum PCC™ probiotikus kultúrát tartalmazó étrend-kiegészítő; az EU-ban 2024 októberében kivezetésre került.","https://www.nuskin.com/content/dam/eu-library/office/documents/product-discontinuation-overview/nu-skin-product-discontinuation-overview-2024-q4.pdf"],
  ["TRME MyGOAL","TRME · BODY BALANCE","A Nu Skin aktuális TRME Body Balance rendszerének egyik étrend-kiegészítője.","https://mysite.mynuskin.com/catalog/hu/hu/product/85542536?store=beautybyildy"],
  ["TRME MyEDGE","TRME · BODY BALANCE","A Nu Skin aktuális TRME Body Balance rendszerének egyik étrend-kiegészítője.","https://mysite.mynuskin.com/catalog/hu/hu/product/97139804?store=beautybyildy"],
  ["TRME InnerNU","TRME · BODY BALANCE","Gyömbér- és articsóka-kivonatot tartalmazó TRME étrend-kiegészítő.","https://mysite.mynuskin.com/catalog/hu/hu/product/85552525?store=beautybyildy"],
  ["TRME REALMe","TRME · BODY BALANCE","A Nu Skin aktuális TRME Body Balance rendszerének egyik étrend-kiegészítője.","https://mysite.mynuskin.com/catalog/hu/hu/product/85542537?store=beautybyildy"],
  ["TRME M-Bar","TRME · BODY BALANCE","A TRME rendszerhez tartozó étkezéshelyettesítő szelet.","https://mysite.mynuskin.com/catalog/hu/hu/product/97139726?store=beautybyildy"],
  ["TRME Weight Management Kit","TRME · BODY BALANCE","InnerNU, MyEDGE, MyGOAL és REALMe termékeket tartalmazó hivatalos TRME csomag.","https://mysite.mynuskin.com/catalog/hu/hu/product/97139798?store=beautybyildy"],
  ["ageLOC TRMe","WELLNESS","A Nu Skin magyar oldalán bemutatott, személyre szabható Body Balance rendszer, amely a MyGOAL, InnerNU, REALMe, MyEDGE és M-Bar termékeket, valamint TRME csomagokat foglalja össze.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-trme-landing-page"],
  ["Nu Colour Lash + Brow Serum","NU COLOUR","Szempilla- és szemöldökápoló szérum, amely kondicionálja, hidratálja és erősebb megjelenésűvé teszi a szálakat.","https://mysite.mynuskin.com/catalog/hu/hu/product/97002663?store=beautybyildy"],
  ["Nu Colour Multicoloured Bronzing Pearls","NU COLOUR","Többszínű bronzosító púdergyöngyök a természetes, napcsókolta megjelenésért.","https://mysite.mynuskin.com/catalog/hu/hu/product/97161501?store=beautybyildy"],
  ["Nu Colour Curling Mascara – Black","NU COLOUR","Fekete göndörítő szempillaspirál a hangsúlyosabb, íveltebb szempillákért.","https://mysite.mynuskin.com/catalog/hu/hu/product/97102851?store=beautybyildy"],
  ["Prysm iO","WELLNESS TECH","A Nu Skin magyar oldalán bemutatott, nem invazív wellness mérőeszköz, amely 15 másodperc alatt követi a bőr karotinoidszintjét és Prysm-pontszámot ad.","https://www.nuskin.com/hu/hu/site/product/eua-meet-prysm-io-the-future-of-measurable-nutritional-wellness"],
];

const NUSKIN_IMAGES = Object.freeze({
  "ageLOC LumiSpa IdealEyes": "https://media.nuskin.com/transform/57fee0b2-1f84-440e-9ef5-4a1d2cc4c3cd/ageloc-lumispa-io-ideal-eyes-packshot-1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ageLOC LumiSpa Activating Face Cleanser – Normal to Combination": "https://media.nuskin.com/transform/c220025a-79cd-4582-a4cf-8574e5eaba50/EUA-lumispa-activating-cleanser-normal-combo-slide-1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "Rejuvenating Cream": "https://media.nuskin.com/m/5ca3b1fc8a16be08/webimage-Nu-Skin-Rejuvenating-Cream-Carousel-1.png?width=",
  "Nu Skin 180° Face Wash": "https://media.nuskin.com/transform/456f0f02-32a6-4482-b9f2-c45c2a1e232e/180_Face_Wash_PDP_slide-1.webp?quality=95&io=transform:fit,width:600,height:600&width=",
  "Body Cleansing Gel": "https://media.nuskin.com/transform/befbb771-c110-4ac8-a856-b5bbcdfdb1f6/nuskin_body_cleansing_gel_500ml_EU_PDP_slide_01.webp?quality=95&io=transform:fit,width:600,height:600&width=",
  "ageLOC Body Serum": "https://media.nuskin.com/transform/6196870c-3a26-4741-a959-3296124a4f19/eua-ageloc-body-serum-carousel-pdp.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ageLOC Body Polish": "https://media.nuskin.com/m/154582e0c25e385b/webimage-nuskin-wellspa-io-body-polish-packshot.png?width=",
  "ageLOC Body Activating Gel": "https://media.nuskin.com/transform/bb671d9e-387e-4c27-a40b-21625ca456c4/ageloc_body_activating_gel_EU_PDP_slide_01.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "Smoothing Shampoo": "https://media.nuskin.com/m/780dd3e2c46c454e/webimage-nu-skin-renu-smoothing-shampoo-packshot-image.png?width=",
  "Smoothing Conditioner": "https://media.nuskin.com/transform/747b9731-bbe5-425a-ab13-33e1170d8105/renu_smoothing_conditioner_EU_PDP_slide_01.webp?quality=95&io=transform:fit,width:600,height:600&width=",
  "Volumizing Shampoo": "https://media.nuskin.com/transform/e3c7747a-d2b2-44bb-8bfb-7c1a401e42cc/nu-skin-renu-voluminzing-shampoo-main.webp?quality=95&io=transform:fit,width:600,height:600&width=",
  "Volumizing Conditioner": "https://media.nuskin.com/m/74a1cb4c07fcbd42/webimage-nu-skin-renu-volumizing-conditioner-packshot-image.png?width=",
  "MarineOmega": "https://media.nuskin.com/transform/063a4ceb-3429-46b1-9932-3f6c0469cfa0/Pharmanex_MarineOmega_PDP_carrousel_img-1.webp?quality=95&io=transform:fit,width:600,height:600&width=",
  "Nu Colour Multicoloured Bronzing Pearls": "https://media.nuskin.com/transform/4b40ec5b-8301-4c69-aaa7-6525f2070cf4/nu-skin-nu-colour-bronzing-pearls-jpg.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "Nu Colour Curling Mascara – Black": "https://media.nuskin.com/m/69b308d9ae1df135/webimage-curl-and-lash-mascara-alt01.png?width=",
  "Day Dream Protective Lotion SPF 30": "https://media.nuskin.com/m/54598521ff23cb1/webimage-nu-skin-nutricentials-day-dream-protective-lotion-lightweight-moisturizer-packshot-image.png?width=",
  "ageLOC Nutriol Scalp & Hair Shampoo": "https://media.nuskin.com/m/514be8989a6edfdf/webimage-nu-skin-ageloc-nutriol-scalp-and-hair-shampoo-packshot.png?width=",
  "Nu Skin 180º AHA Facial Peel and Neutraliser": "https://media.nuskin.com/m/e13cac3c9f7bca7/webimage-nu-skin-180-product-pictures-12-jpg.png?width=",
  "Epoch Baobab Body Butter": "https://media.nuskin.com/m/f9e8f2e5366a47b/webimage-epoch-baobab-body-butter-1.png?width=",
  "Sunright Insta Glow": "https://media.nuskin.com/transform/66af696f-ac20-4307-bd6b-1656a1154bc4/nu-skin-sunright-insta-glow-self-tanning-gel-packshot-pdp-1-jpg.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "Perennial Body Lotion": "https://media.nuskin.com/transform/1110644e-0a92-4e99-b449-5682b3ba0f0e/nu-skin-body-lotion-perennial-jpg.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "Pharmanex LifePak+": "https://media.nuskin.com/transform/5323dcd1-601d-4e2a-a03f-87ab07b83bca/nu-skin-pharmanex-nutritionals-lifepak-product-packshot.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "LifePak+ & Marine Omega ADR-csomag": "https://media.nuskin.com/transform/d2c0765b-10fb-4a09-bcdc-2490b1e7a83a/lifepak_marineomega_ADR_package_packshot.webp?quality=95&io=transform:fit,width:600,height:600&width=",
  "Pharmanex Tēgreen": "https://media.nuskin.com/m/2940384fdde6b2d8/webimage-fullImage-imgw-1280-1280.png?width=",
  "TRME MyGOAL": "https://media.nuskin.com/m/5d23b9234fe8ddcb/webimage-trme-my-goal-eu-1.png?width=",
  "TRME MyEDGE": "https://media.nuskin.com/m/7ade170ad04d12c9/webimage-trme-edge-eu-1.png?width=",
  "TRME M-Bar": "https://media.nuskin.com/m/1d6929986444b40b/webimage-trme-m-bars-chocolate-crips.png?width=",
  "Day Dream Protective Cream SPF 30": "https://media.nuskin.com/m/2dd688298f6da037/webimage-nu-skin-nutricentials-day-dream-protective-cream-creamy-moisturizer-packshot-image.png?width=",
  "Nutricentials Dew All Day Moisture Restore Cream": "https://media.nuskin.com/m/240b0f77c9b61615/webimage-nu-skin-nutricentials-product-images-51-jpg.png?width=",
  "Spa Day Creamy Hydrating Masque": "https://media.nuskin.com/m/157eca5c180b8b5/webimage-nu-skin-nutricentials-spa-day-creamy-hydrating-masque-packshot-pdp-1.png?width=",
  "Epoch Glacial Marine Mud": "https://media.nuskin.com/transform/98e7da6d-5857-42d8-8a01-ab8aa336c047/Epoch_Glacial_Marine_Mud_PDP_slide-1-20260326-105556.webp?quality=95&io=transform:fit,width:600,height:600&width=",
  "Epoch Polishing Bar": "https://media.nuskin.com/transform/cc98bd67-ea09-4c8b-b437-abcef1cb5448/epoch-polishing-bar-new-packshot.webp?quality=95&io=transform:fit,width:600,height:600&width=",
  "Epoch Sole Solution": "https://media.nuskin.com/transform/1789433b-6078-4049-8606-cf4934d38a50/Epoch-Sole-Solution.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "Hair Mask": "https://media.nuskin.com/transform/2990b1a9-3ce8-4b9c-8a3f-540dde5a7271/IMG25072300115-Renu-Hair-Mask-Silo-2K.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ageLOC LumiSpa iO System": "https://media.nuskin.com/transform/e4d01ed0-4ced-44be-a2b1-b0e2386bbf02/lumispa_io_blue_device-only_EU_PDP_slide_01.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ageLOC WellSpa iO System": "https://media.nuskin.com/transform/15d54d04-292f-408b-abbb-a11c64efdd7c/wellspa_io_device-only-EU-PDP-slide-01.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ageLOC Boost System": "https://media.nuskin.com/transform/3bed53e9-71cf-4b11-8c2c-4ade2a1c32d1/nu-skin-ageloc-boost-system-world-1-brand-beauty-device-packshot-image.webp?quality=95&io=transform:fit,width:600,height:600&width=",
  "ageLOC Galvanic Spa": "https://media.nuskin.com/transform/16e4cf9c-599f-4264-b742-e7255c9473cc/ageLOC_galvanic_spa_device_EU_PDP_slide_01.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "Galvanic Spa Facial Gels with ageLOC": "https://media.nuskin.com/transform/09d595bc-6159-4e2b-bc47-344272cf7c76/ageloc-galvanic-spa-facial-gels-1box-image1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ageLOC Tru Face Future Serum": "https://media.nuskin.com/transform/a77a45d5-5271-44bd-993b-421d29b00426/ageLOC_TruFace_Future_Serum_PDP_carrousel_img-1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ageLOC Tru Face Radiant Day": "https://media.nuskin.com/transform/53e76964-8c7f-4852-b7d2-bf91eb2be9dc/ageloc-truface-radiant-day?io=transform:fill,width:555,height:505&focuspoint=0.48,0.47&format=webp&quality=95&io=transform:scale,width:500,height:500",
  "ageLOC Tru Face Line Corrector": "https://media.nuskin.com/transform/7d867497-dae2-452c-a3f4-0870c182d0e5/ageLOC_TruFace_Line_Corrector_PDP_carrousel_img-1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ageLOC Tru Face Transforming Gel Cream": "https://media.nuskin.com/transform/8655f176-fbb7-4a72-823b-f286e0c0419f/ageLOC_TruFace_Transforming_Gel_Cream_PDP_carrousel_img-1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ageLOC Tru Face Uplifting Rich Cream": "https://media.nuskin.com/transform/56bddec0-70f5-440f-866a-66d1fcb9b29d/ageLOC_TruFace_Uplifting_Gel_Cream_PDP_carrousel_img-1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ageLOC Tru Face Refining Toner": "https://media.nuskin.com/transform/f021ab22-9c77-4297-a3b2-b1cbf39cc352/ageLOC_TruFace_Refining_Toner_PDP_carrousel_img-1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ageLOC Tru Face Essence Ultra": "https://media.nuskin.com/transform/bbec1775-4db2-40cd-acf3-ccfce4e1fddf/ageloc-truface-essence-ultra?io=transform:fill,width:555,height:505&focuspoint=0.38,0.55&format=webp&quality=95&io=transform:scale,width:500,height:500",
  "ageLOC Tru Face Peptide Retinol Complex": "https://media.nuskin.com/transform/ad9405c2-bd0a-4b85-bf3f-2c5029b54f24/ageloc-trueface-peptide-retinol-carrousel-1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "Nutricentials Pumps Vitamin C + Collagen": "https://media.nuskin.com/transform/57d74927-f1a0-487d-b429-e4737e759711/nutricentials-vitaminc-collagen-pump-image-1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "HydraClean Creamy Cleansing Lotion": "https://media.nuskin.com/m/f762153fd8cb8d7/webimage-nu-skin-nutricentials-hydraclean-creamy-cleansing-lotion-carousel-1-product.png?width=",
  "To Be Clear Pure Cleansing Gel": "https://media.nuskin.com/m/41ede0353a16a19f/webimage-Nu-Skin-Nutricentials-To-Be-Clear-Pure-Cleansing-Gel-carousel-1-product.png?width=",
  "Nutricentials Here You Glow": "https://media.nuskin.com/m/49d5e02db1a1645f/webimage-nu-skin-nutricentials-here-you-glow-exfoliating-toner-packshot-image.png?width=",
  "In Balance pH Balance Toner": "https://media.nuskin.com/asset/761c3ecb-b26e-47dd-8130-4c95c32be35e/thumbnail/webimage-nu-skin-nutricentials-in-balance-ph-blance-toner-packshot-pdp-1-jpg?width=",
  "Nutricentials Eye Love Bright Eyes Illuminating Eye Cream": "https://media.nuskin.com/m/647a18dcf5ac0250/webimage-37001795-eye-love-bright-eyes.png?width=",
  "Nutricentials Ceramides + Postbiotics Pump": "https://media.nuskin.com/m/2d951c10d3f919f6/webimage-nu-skin-nutricentials-ceramides-and-postbiotics-pump-packshot-image.png?width=",
  "Nutricentials Celltrex Always Right Recovery Fluid": "https://media.nuskin.com/m/7afa0ab1c3cca5cd/webimage-nu-skin-nutricentials-celltrex-always-right-recovery-fluid-packshot-pdp-1.png?width=",
  "Thirst Fix Hydrating Gel Cream": "https://media.nuskin.com/m/4fb69038e41a559a/webimage-Nutricentials-Thirst-Fix-Hydrating-Gel-Cream-Carousel-1-product.png?width=",
  "Moisturize Me Intense Hydrating Cream": "https://media.nuskin.com/m/19baf1347883dae9/webimage-Nutricentials-Moisturize-Me-Intense-Hydrating-Cream-Carousel-1-product.png?width=",
  "Pillow Glow Sleeping Mask": "https://media.nuskin.com/m/299365fac5be85c2/webimage-nu-skin-nutricentials-pillow-glow-sleeping-mask-product.png?width=",
  "Brighter Day Exfoliant Scrub": "https://media.nuskin.com/m/7609cd21b299eae5/webimage-nu-skin-nutricentials-product-brighter-day-exfoliant-scrub-packshot.png?width=",
  "ageLOC Nutriol Scalp & Hair System": "https://www.nuskin.com/content/dam/eu-library/2019/web/products/nuskin/ageLOC/nutriol/nu-skin-ageloc-nutriol-scalp-and-hair-system-ingredients-600.png",
  "ageLOC Nutriol Scalp & Hair Conditioner": "https://media.nuskin.com/transform/1a82d44f-595b-497d-a4e5-2afac8385564/nu-skin-ageloc-nutriol-scalp-and-hair-conditioner-packshot-jpg.webp?quality=95&io=transform:fit,width:600,height:600&width=",
  "ageLOC Nutriol Intensive Scalp & Hair Serum": "https://media.nuskin.com/m/772409f6975a069d/webimage-nu-skin-ageloc-nutriol-scalp-and-hair-serum-packshot.png?width=",
  "ageLOC Body Shaping Gel": "https://media.nuskin.com/transform/c837cba7-9d57-4af9-be4c-d2e9b42651e8/nu-skin-ageloc-body-shaping-gel-packshot-1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ageLOC Dermatic Effects": "https://media.nuskin.com/transform/c3ef6db7-b559-40b7-b366-6e781054ad9d/nu-skin-ageLOC-dermatic-effects-packshot-carousel-1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "AP 24 Whitening Fluoride Toothpaste": "https://media.nuskin.com/transform/ce15a54d-4c05-40fd-a9e3-5c1a53527314/ap24-pdp-1.webp?quality=95&io=transform:fit,width:600,height:600&width=",
  "JVi": "https://media.nuskin.com/transform/c1c84dd9-c413-4d14-88f4-ab0e47c6a21e/nu-skin-pharmanex-nutritional-rich-beverage-jvi-product-image.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "Beauty Focus MultiBeauty": "https://media.nuskin.com/transform/253fd55c-76d3-4293-857f-329752f6de71/pharmanex-beauty-focus-multibeauty-packshot.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "Beauty Focus Collagen+": "https://media.nuskin.com/transform/035a85cb-bce9-4855-bcf4-2a376017173a/Collagen-_PDP_carousel_img_1_certified.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "R² Day": "https://media.nuskin.com/transform/d8f09b17-98a7-4da3-8274-ee54acda8f9d/pharmanex-ageloc-r2-day-png.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "R² Night": "https://media.nuskin.com/transform/3ba7739d-9182-4a55-ac1b-576e2bcbbf1e/pharmanex-ageloc-r2-night-png.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "ReishiMax GLp": "https://media.nuskin.com/transform/6a236640-d175-4089-8daf-7ecef98b373d/pharmanex-reishimax-glp-food-supplement-packshot.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "LifePak elements": "https://media.nuskin.com/transform/6cad95fb-7075-4a22-b775-f20d2d91230a/eua-lifepak-elements-pdp-carousel-1.webp?quality=95&io=transform:fit,width:980,height:980&width=",
  "TRME InnerNU": "https://media.nuskin.com/transform/8a622332-ee85-46a8-a319-bfc0922496ba/trme-InnerNu-carousel-img-1.webp?quality=95&io=transform:fit,width:600,height:600&width=",
  "TRME REALMe": "https://media.nuskin.com/m/25af56c4098e920/webimage-trme-realme-eu-1.png?width=",
  "TRME Weight Management Kit": "https://media.nuskin.com/m/698b0f0fcd6eb034/webimage-rme-kit-eu-1.png?width=",
  "Nu Colour Lash + Brow Serum": "https://media.nuskin.com/m/d0b12220f9d53ad/webimage-nu-colour-lash-brow-serum-main.png?width=",
  "Prysm iO": "https://media.nuskin.com/transform/1e2c0972-4655-4cb1-8059-6df6f550ed08/eua-prysm-io-lifepak-elements-kit-1.webp?quality=95&io=transform:fit,width:600,height:600&width=",
});

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
const archivedNuSkin=new Set(["Epoch Hand Cream","Epoch IceDancer","Epoch Ava Puhi Moni Shampoo","Epoch Ava Puhi Moni Light Conditioner","Liquid Body Lufra","AP 24 Anti-Plaque Fluoride Toothpaste","R² Day + Night","ageLOC Vitality","CordyMax CS-4","Pro-B","NaPCA Moisture Mist"]);
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
              const image=NUSKIN_IMAGES[name];
              const productDescription=lang==="hu"?desc:(localGroupDescription(group,lang)||desc);
              return <article className={`brandProductCard nuskinCard ${direct&&!special?"isPurchasable":"isInfo"}`} key={name}>
                <div className="nuskinProductImage">{image?<><img src={image} alt={name} loading="lazy" decoding="async" onError={event=>{event.currentTarget.hidden=true;event.currentTarget.nextElementSibling.hidden=false}}/><span hidden aria-hidden="true">NU SKIN</span></>:<span aria-hidden="true">NU SKIN</span>}</div>
                <div className="brandCardTopline"><span>{localGroup(group,lang)}</span><em>{direct&&!special?t.available:t.infoOnly}</em></div>
                <h2>{name}</h2><p>{productDescription}</p>
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

