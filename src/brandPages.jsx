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
  ["ageLOC Tru Face Essence Ultra","TRU FACE","Firming-focused treatment for a more defined-looking facial contour.","https://mysite.mynuskin.com/catalog/hu/hu/product/97004293?store=beautybyildy"],
  ["Nutricentials Pumps Vitamin C + Collagen","NUTRICENTIALS","Current Nutricentials supplement-style beauty product listed in the Hungarian range.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["HydraClean Creamy Cleansing Lotion","NUTRICENTIALS","Creamy facial cleanser.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["To Be Clear Pure Cleansing Gel","NUTRICENTIALS","Gel facial cleanser.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Nutricentials Here You Glow","NUTRICENTIALS","Current Nutricentials exfoliating/renewal product in the Hungarian range.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["In Balance pH Balance Toner","NUTRICENTIALS","pH-kiegyensúlyozó arctonik a jelenlegi magyar Nutricentials kínálatból.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Nutricentials Eye Love Bright Eyes Illuminating Eye Cream","NUTRICENTIALS","Szemkörnyékápoló krém a jelenlegi magyar Nutricentials kínálatból.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Nutricentials Ceramides + Postbiotics Pump","NUTRICENTIALS","Ceramid- és posztbiotikum-fókuszú booster a jelenlegi magyar Nutricentials kínálatból.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Nutricentials Celltrex Always Right Recovery Fluid","NUTRICENTIALS","Regeneráló szérum/folyadék a jelenlegi magyar Nutricentials kínálatból.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Day Dream Protective Cream SPF 30","NUTRICENTIALS","Creamy daytime moisturiser with SPF 30.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Day Dream Protective Lotion SPF 30","NUTRICENTIALS","Lightweight daytime moisturiser with SPF 30.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Thirst Fix Hydrating Gel Cream","NUTRICENTIALS","Light hydrating gel cream.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Moisturize Me Intense Hydrating Cream","NUTRICENTIALS","Rich moisturising cream.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Nutricentials Dew All Day Moisture Restore Cream","NUTRICENTIALS","Moisture-restoring facial cream.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Pillow Glow Sleeping Mask","NUTRICENTIALS","Overnight moisturising mask.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Brighter Day Exfoliant Scrub","NUTRICENTIALS","Exfoliating facial scrub.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["Spa Day Creamy Hydrating Masque","NUTRICENTIALS","Creamy hydrating facial mask.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/nutricentials.html"],
  ["ageLOC Nutriol Scalp & Hair System","HAIR & SCALP","Scalp and hair care system in the ageLOC range.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products.html"],
  ["ageLOC Nutriol Scalp & Hair Shampoo","HAIR & SCALP","Sampon vékony szálú, sérült és öregedő hajra és fejbőrre.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products.html"],
  ["ageLOC Nutriol Scalp & Hair Conditioner","HAIR & SCALP","Fejbőr- és hajápoló kondicionáló az ageLOC Nutriol rendszerből.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products.html"],
  ["ageLOC Nutriol Intensive Scalp & Hair Serum","HAIR & SCALP","Intenzív fejbőr- és hajszérum az ageLOC Nutriol rendszerből.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products.html"],
  ["Nu Skin 180° Anti-Aging Skin Therapy System","NU SKIN 180°","Komplex Nu Skin 180° arcápolási rendszer.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/face_care.html"],
  ["Epoch Glacial Marine Mud","EPOCH","Etnobotanikai ihletésű iszappakolás.","https://www.nuskin.com/content/nuskin/hu_HU/products/nuskin/shop_all_products/epoch/epoch-sustainably-minded-ethnobotanical-skin-care.html"],
  ["Epoch Baobab Body Butter","EPOCH","Gazdag, baobabfókuszú testvaj.","https://www.nuskin.com/content/products/97/00/19/97001985/hu.html"],
  ["Epoch IceDancer","EPOCH","Frissítő lábápoló zselé.","https://www.nuskin.com/content/nuskin/hu_HU/products/nuskin/shop_all_products/epoch/epoch-sustainably-minded-ethnobotanical-skin-care.html"],
  ["Epoch Hand Cream","EPOCH","Kéz- és körömápoló krém.","https://www.nuskin.com/content/nuskin/hu_HU/products/nuskin/shop_all_products/epoch/epoch-sustainably-minded-ethnobotanical-skin-care.html"],
  ["Epoch Polishing Bar","EPOCH","Szappanmentes testradírozó tömb.","https://www.nuskin.com/content/nuskin/hu_HU/products/nuskin/shop_all_products/epoch/epoch-sustainably-minded-ethnobotanical-skin-care.html"],
  ["Epoch Sole Solution","EPOCH","Célzott lábfejápoló krém.","https://www.nuskin.com/content/nuskin/hu_HU/products/nuskin/shop_all_products/epoch/epoch-sustainably-minded-ethnobotanical-skin-care.html"],
  ["Epoch Ava Puhi Moni Shampoo","EPOCH · HAIR","Epoch hajápoló sampon.","https://www.nuskin.com/content/nuskin/hu_HU/products/nuskin/shop_all_products/epoch/epoch-sustainably-minded-ethnobotanical-skin-care.html"],
  ["Epoch Ava Puhi Moni Light Conditioner","EPOCH · HAIR","Epoch könnyű hajbalzsam.","https://www.nuskin.com/content/nuskin/hu_HU/products/nuskin/shop_all_products/epoch/epoch-sustainably-minded-ethnobotanical-skin-care.html"],
  ["Sunright Insta Glow","SUNRIGHT","Önbarnító gél arcra és testre.","https://www.nuskin.com/hu_HU/products/nuskin/shop_all_products/face_care.html"],
  ["Liquid Body Lufra","BODY CARE","Testradírozó tusolóformula.","https://www.nuskin.com/content/nuskin/en_HU/products/nuskin/shop_all_products/body_care.html"],
  ["Perennial Intense Body Moisturizer","BODY CARE","Intenzív testhidratáló.","https://www.nuskin.com/content/nuskin/en_HU/products/nuskin/shop_all_products/body_care.html"],
  ["NaPCA Moisture Mist","BODY CARE","Hidratáló permet arcra és testre.","https://www.nuskin.com/content/nuskin/en_HU/products/nuskin/shop_all_products/body_care.html"],
  ["ageLOC Body Shaping Gel","BODY CARE","Testápoló gél az ageLOC testápolási rendszerhez.","https://www.nuskin.com/content/nuskin/en_HU/products/nuskin/shop_all_products/body_care.html"],
  ["ageLOC Dermatic Effects","BODY CARE","Hidratáló testápoló az ageLOC testápolási rendszerhez.","https://www.nuskin.com/content/nuskin/en_HU/products/nuskin/shop_all_products/body_care.html"],
  ["ReNu Hair Mask","HAIR CARE","Intenzív hajpakolás.","https://www.nuskin.com/content/products/97/13/88/97138862/en.html"],
  ["AP 24 Whitening Fluoride Toothpaste","ORAL CARE","Fluoridos fogkrém fehérítő fókuszú formulával.","https://www.nuskin.com/content/products/97/00/16/97001647/hu.html"],
  ["AP 24 Anti-Plaque Fluoride Toothpaste","ORAL CARE","Fluoridos fogkrém lepedék elleni fókuszú formulával.","https://www.nuskin.com/content/products/97/00/16/97001648/hu.html"],
  ["Pharmanex LifePak+","PHARMANEX · VITAMINOK","Komplex étrend-kiegészítő 13 vitaminnal, 9 ásványi anyaggal és növényi kivonatokkal.","https://www.nuskin.com/content/products/85/43/37/85433743/hu.html"],
  ["Pharmanex Marine Omega","PHARMANEX · OMEGA-3","Hal- és krillolajból származó omega-3 zsírsavakat tartalmazó étrend-kiegészítő.","https://www.nuskin.com/content/products/97/13/72/97137249/hu.html"],
  ["Pharmanex Tēgreen","PHARMANEX · ANTIOXIDÁNS","Zöldtea-kivonatot tartalmazó étrend-kiegészítő.","https://www.nuskin.com/content/products/85/49/35/85493529/hu.html"],
  ["JVi","PHARMANEX · VITAMINITAL","12 gyümölcs és zöldség keveréke; C-vitamin-forrás.","https://www.nuskin.com/content/products/97/00/37/97003762/hu.html"],
  ["Beauty Focus MultiBeauty","PHARMANEX · BEAUTY","Többféle tápanyagot tartalmazó szépségápolási étrend-kiegészítő haj, köröm és bőr támogatására.","https://www.nuskin.com/hu/hu/site/product/beauty-focus-landing-pages-eua"],
  ["Beauty Focus Collagen+","PHARMANEX · BEAUTY","Kollagénhidrolizátumot, búzaolaj-kivonatot és luteint tartalmazó szépségápolási étrend-kiegészítő.","https://www.nuskin.com/content/products/85/89/22/85892208/hu.html"],
  ["R² Day","PHARMANEX · VITALITÁS","Cordyceps sinensis, gránátalma és Panax ginseng alapú nappali étrend-kiegészítő.","https://www.nuskin.com/content/products/85/43/38/85433895/hu.html"],
  ["R² Night","PHARMANEX · VITALITÁS","Szelént és növényi kivonatokat tartalmazó esti étrend-kiegészítő.","https://www.nuskin.com/content/products/85/43/38/85433894/hu.html"],
  ["R² Day + Night","PHARMANEX · VITALITÁS","A nappali és esti R² rendszer együttes, hivatalos Nu Skin összeállítása.","https://www.nuskin.com/content/products/85/43/39/85433901/hu.html"],
  ["ReishiMax GLp","PHARMANEX · WELLNESS","Reishigomba-kivonatot tartalmazó étrend-kiegészítő.","https://www.nuskin.com/content/products/85/43/35/85433519/hu.html"],
  ["ageLOC Vitality","PHARMANEX · VITALITÁS","Cordyceps, gránátalma és Panax ginseng alapú vitalitásfókuszú étrend-kiegészítő.","https://www.nuskin.com/hu_HU/products/pharmanex/shop_all_categories.html"],
  ["LifePak elements","PHARMANEX · VITAMINOK","Több vitaminból, ásványi anyagból és növényi eredetű összetevőből álló napi tápanyag-kiegészítés.","https://www.nuskin.com/hu_HU/products/pharmanex/shop_all_categories/prysm-io-products.html"],
  ["CordyMax CS-4","PHARMANEX · VITALITÁS","Cordyceps sinensis micéliumot tartalmazó étrend-kiegészítő.","https://www.nuskin.com/products/85/43/34/85433441.html"],
  ["Pro-B","PHARMANEX · EMÉSZTÉS","Lactobacillus fermentum PCC™ probiotikus kultúrát tartalmazó étrend-kiegészítő.","https://www.nuskin.com/hu_HU/products/pharmanex/shop_all_categories.html"],
  ["TRME MyGOAL","TRME · BODY BALANCE","A Nu Skin aktuális TRME Body Balance rendszerének egyik étrend-kiegészítője.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-trme-landing-page"],
  ["TRME MyEDGE","TRME · BODY BALANCE","A Nu Skin aktuális TRME Body Balance rendszerének egyik étrend-kiegészítője.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-trme-landing-page"],
  ["TRME InnerNU","TRME · BODY BALANCE","Gyömbér- és articsóka-kivonatot tartalmazó TRME étrend-kiegészítő.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-trme-landing-page"],
  ["TRME REALMe","TRME · BODY BALANCE","A Nu Skin aktuális TRME Body Balance rendszerének egyik étrend-kiegészítője.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-trme-landing-page"],
  ["TRME M-Bar","TRME · BODY BALANCE","A TRME rendszerhez tartozó étkezéshelyettesítő szelet.","https://www.nuskin.com/hu/hu/site/product/eua-ageloc-trme-landing-page"],
  ["TRME Weight Management Kit","TRME · BODY BALANCE","InnerNU, MyEDGE, MyGOAL és REALMe termékeket tartalmazó hivatalos TRME csomag.","https://www.nuskin.com/content/products/97/13/97/97139798/hu.html"],
  ["ageLOC TRMe","WELLNESS","Body-balance system highlighted by Nu Skin Science.","https://www.nuskin.com/hu/hu/site/science/nu-skin-science"],
  ["Prysm iO","WELLNESS TECH","2026 smart wellness device for at-home carotenoid tracking.","https://www.nuskin.com/hu/hu/site/science/nu-skin-science"],
];

const copy = {
  hu: {
    back:"Vissza a főoldalra",
    nuskinTitle:"NU SKIN",
    nuskinLead:"Külön Nu Skin válogatás: beauty tech, bőrápolás, hajápolás, vitaminok és Pharmanex wellness egy helyen. A termékadatokat a hivatalos magyar és EMEA Nu Skin források alapján építjük fel.",
    nuskinNote:"A Nu Skin My Site vásárlói útvonalát ellenőriztük. A már tesztelt termékek közvetlenül a Beauty by Ildy My Site termékoldalára vezetnek; a többi terméknél addig a hivatalos Nu Skin információs oldal marad, amíg a konkrét vásárlói linket külön nem ellenőriztük.",
    neumiTitle:"NEUMI",
    neumiLead:"A Beauty by Ildy Neumi válogatása külön márkaoldalon, a jelenlegi nyolc termékkel. A vásárlás továbbra is a hivatalos Neumi oldalon történik.",
    official:"HIVATALOS TERMÉKOLDAL",
    buyOfficial:"VÁSÁRLÁS A NU SKIN OLDALÁN",
    details:"RÉSZLETES ADATLAP",
    verified:"Hivatalos termékforrások alapján · folyamatosan frissítve",
    products:"termék",
  },
  en: {
    back:"Back to home",
    nuskinTitle:"NU SKIN",
    nuskinLead:"A dedicated Nu Skin edit covering beauty tech, skincare, haircare, vitamins and Pharmanex wellness, built from current official Hungarian and EMEA Nu Skin sources.",
    nuskinNote:"The Nu Skin My Site customer purchase flow has been verified for the Hungarian market. Products with a tested direct link open the Beauty by Ildy My Site product page; other products remain on official Nu Skin information pages until their direct purchase link is separately verified.",
    neumiTitle:"NEUMI",
    neumiLead:"A dedicated Beauty by Ildy Neumi page with the current eight products. Purchases continue on the official Neumi website.",
    official:"OFFICIAL PRODUCT PAGE",
    buyOfficial:"SHOP ON NU SKIN",
    details:"DETAILED PROFILE",
    verified:"Based on official product sources · continuously updated",
    products:"products",
  },
  de: {
    back:"Zurück zur Startseite",
    nuskinTitle:"NU SKIN",
    nuskinLead:"Eine eigene Nu-Skin-Auswahl mit Beauty Tech, Hautpflege, Haarpflege, Vitaminen und Pharmanex-Wellness auf Basis aktueller offizieller ungarischer und EMEA-Nu-Skin-Quellen.",
    nuskinNote:"Der Nu-Skin-My-Site-Kaufablauf wurde für den ungarischen Markt geprüft. Produkte mit getestetem Direktlink führen zur Beauty-by-Ildy-My-Site-Produktseite; andere Produkte bleiben auf offiziellen Nu-Skin-Informationsseiten, bis ihr direkter Kauflink separat geprüft wurde.",
    neumiTitle:"NEUMI",
    neumiLead:"Eine eigene Beauty-by-Ildy-Neumi-Seite mit den aktuellen acht Produkten. Der Kauf erfolgt weiterhin auf der offiziellen Neumi-Website.",
    official:"OFFIZIELLE PRODUKTSEITE",
    buyOfficial:"BEI NU SKIN KAUFEN",
    details:"DETAILPROFIL",
    verified:"Auf Basis offizieller Produktquellen · laufend aktualisiert",
    products:"Produkte",
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
const localGroupDescription=(group,lang)=>(groupDescriptions[lang]||groupDescriptions.hu)[group]||"";
const neumiCategoryLabels={
  hu:{agewell:"AGE-WELL / BŐRÁPOLÁS",hair:"HAJ & FEJBŐR",wellness:"WELLNESS"},
  en:{agewell:"AGE-WELL / SKINCARE",hair:"HAIR & SCALP",wellness:"WELLNESS"},
  de:{agewell:"AGE-WELL / HAUTPFLEGE",hair:"HAAR & KOPFHAUT",wellness:"WELLNESS"}
};
const neumiCategoryText={
  hu:{agewell:"Célzott, hidratáló és age-well bőrápolás.",hair:"Leave-in haj- és fejbőrápolás.",wellness:"Neumi wellness- és étrend-kiegészítő termék."},
  en:{agewell:"Targeted hydrating and age-well skincare.",hair:"Leave-in hair and scalp care.",wellness:"Neumi wellness and supplement product."},
  de:{agewell:"Gezielte feuchtigkeitsspendende Age-Well-Hautpflege.",hair:"Leave-in-Haar- und Kopfhautpflege.",wellness:"Neumi Wellness- und Nahrungsergänzungsprodukt."}
};
const localNeumiCategory=(cat,lang)=>(neumiCategoryLabels[lang]||neumiCategoryLabels.hu)[cat]||cat.toUpperCase();
const localNeumiText=(cat,lang)=>(neumiCategoryText[lang]||neumiCategoryText.hu)[cat]||"";

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
      <div className="brandGroups">
        {[...new Set(NUSKIN.map(([,group])=>group))].map(group=><section className="brandGroup" key={group}>
          <div className="brandGroupHead"><h2>{localGroup(group,lang)}</h2><span>{NUSKIN.filter(([,g])=>g===group).length}</span></div>
          <div className="brandProductGrid">
            {NUSKIN.filter(([,g])=>g===group).map(([name,,desc,url])=><article className="brandProductCard" key={name}>
              <span>{localGroup(group,lang)}</span><h2>{name}</h2><p>{localGroupDescription(group,lang)}</p>
              <a href={url} target="_blank" rel="noopener noreferrer">{url.includes("mysite.mynuskin.com")?t.buyOfficial:t.official}<ExternalLink size={13}/></a>
            </article>)}
          </div>
        </section>)}
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
          <span>{localNeumiCategory(p.category,lang)}</span><h2>{p.name}</h2><p>{localNeumiText(p.category,lang)}</p>
          <a href={`#product-${p.slug}`}>{t.details}<ArrowRight size={13}/></a>
        </article>)}
      </div>
    </section>
  </main>;
}
