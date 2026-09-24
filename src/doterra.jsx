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
    "https://doterra.me/1LtLR-"
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

const DUPLICATE_PRODUCT_URLS = new Set(PRODUCTS.filter((p,i,a)=>a.findIndex(x=>x[2]===p[2])!==i || a.findLastIndex(x=>x[2]===p[2])!==i).map(p=>p[2]));

const PRODUCT_INFO_HU = {
  "Lavender / Levendula": ["Nyugodt esti, diffúzoros és bőrápolási rutinokhoz.", "Levendula esszenciális olaj.", "Aromásan és a címke szerint külsőleg használható; bőrön szükség szerint hígítva."],
  "Lemon / Citrom": ["Friss, tiszta illatélményhez és diffúzoros rutinokhoz.", "Citromhéjból nyert esszenciális olaj.", "Aromás használatra; bőrön a citrusolajokra vonatkozó fényérzékenységi előírásokat követni kell."],
  "Peppermint / Borsmenta": ["Frissítő, élénkítő aromás rutinokhoz.", "Borsmenta esszenciális olaj.", "Aromásan vagy a címke szerint külsőleg; érzékeny bőrön hígítva."],
  "Wild Orange / Vadnarancs": ["Meleg, édes citrusos illatélményhez és diffúzorba.", "Vadnarancshéjból nyert esszenciális olaj.", "Elsősorban aromás használatra; külső használatnál kövesd a címke fényérzékenységi útmutatását."],
  "Tea Tree (Melaleuca) / Teafa": ["Bőrápolási, fejbőr- és aromás rutinokhoz.", "Teafa esszenciális olaj.", "Kozmetikai célú külső használatra a címke szerint, szükség esetén hígítva."],
  "Copaiba": ["Fás-balzsamos aromás rutinokhoz és kozmetikai használathoz.", "Copaiba gyantából nyert esszenciális olaj.", "Aromásan vagy külsőleg a címke szerint."],
  "Frankincense / Tömjén": ["Prémium aromás és bőrápolási rutinokhoz.", "Tömjén gyantából nyert esszenciális olaj.", "Aromásan és a címke szerint külsőleg, bőrápolási rutinba keverve is használható."],
  "Eucalyptus / Eukaliptusz": ["Friss, tiszta illatú diffúzoros és aromás rutinokhoz.", "Eukaliptusz esszenciális olaj.", "Elsősorban aromás használatra; külső használatnál kövesd a címkét."],
  "Lemongrass / Indiai citromfű": ["Friss, citrusos-gyógynövényes aromás rutinokhoz.", "Indiai citromfű esszenciális olaj.", "Diffúzorban vagy külsőleg a címke szerint; bőrön általában hígítva."],
  "Bergamot / Bergamott": ["Lágy citrusos aromás rutinokhoz és személyes illatélményhez.", "Bergamott héjából nyert esszenciális olaj.", "Aromásan; bőrön csak a címke fényérzékenységi útmutatása szerint."],
  "Black Pepper / Fekete bors": ["Meleg, fűszeres aromás és masszázsrutinokhoz.", "Fekete bors esszenciális olaj.", "Aromásan vagy jól hígítva külsőleg a címke szerint."],
  "Black Spruce / Kanadai fekete luc": ["Fás, erdei aromás rutinokhoz.", "Kanadai fekete luc esszenciális olaj.", "Diffúzorban vagy hígítva külsőleg a címke szerint."],
  "Blue Tansy / Kék varádics": ["Prémium aromás és kozmetikai rutinokhoz.", "Kék varádics esszenciális olaj.", "Kis mennyiségben, a címke szerint; természetes kék színe miatt textíliát elszínezhet."],
  "Cardamom / Kardamom": ["Meleg, fűszeres aromás rutinokhoz.", "Kardamom esszenciális olaj.", "Aromásan vagy a címke szerint külsőleg."],
  "Cassia / Kasszia": ["Intenzív, meleg-fűszeres illatélményhez.", "Kasszia esszenciális olaj.", "Nagyon intenzív olaj; külső használatnál mindig erősen hígítva és a címke szerint."],
  "Cedarwood / Vörös cédrus": ["Fás, nyugodt hangulatú esti és diffúzoros rutinokhoz.", "Vörös cédrus esszenciális olaj.", "Aromásan vagy hígítva külsőleg."],
  "Citronella": ["Friss, citrusos-füves kültéri és diffúzoros illatrutinokhoz.", "Citronella esszenciális olaj.", "Aromásan vagy hígítva külsőleg a címke szerint."],
  "dōTERRA Air™": ["Friss, mentás-eukaliptuszos aromás keverék otthoni diffúzorhoz.", "Többféle menta-, eukaliptusz- és aromás esszenciális olajból álló keverék; a pontos összetétel a címkén.", "Diffúzorban vagy a címke szerint külsőleg."],
  "dōTERRA Serenity™": ["Esti, nyugodt hangulatú aromás rutinokhoz.", "Nyugtató illatprofilú esszenciális olajkeverék; a pontos összetétel a címkén.", "Elsősorban diffúzorban vagy a címke szerint külsőleg."],
  "On Guard™": ["Meleg, fűszeres-citrusos aromás keverék otthoni rutinokhoz.", "Citrusos és fűszeres esszenciális olajok szabadalmazott keveréke; a pontos összetétel a címkén.", "Aromás vagy a konkrét kiszerelés címkéje szerinti használatra."],
  "Deep Blue™": ["Sport utáni és masszázsrutinokhoz, hűsítő érzetre.", "Növényi kivonatok és esszenciális olajok keveréke, többek között copaiba és rozmaring; a teljes összetétel a címkén.", "Külsőleg, célzott masszázshoz a címke szerint."],
  "Deep Blue™ Touch": ["Praktikus, előhígított Deep Blue külsőleges használatra.", "Deep Blue keverék frakcionált kókuszolajban.", "Golyós adagolóval, külsőleg."],
  "Deep Blue™ golyós kiszerelés": ["Koncentráltabb Deep Blue golyós kiszerelés célzott külsőleges használatra.", "Deep Blue esszenciális olajkeverék; nem azonos a Touch előhígított változattal.", "Külsőleg, kis mennyiségben a címke szerint."],
  "Deep Blue™ Rub / enyhítő krém": ["Hűsítő érzetű testápoló és masszázskrém sport utáni vagy esti rutinokhoz.", "Krémalap Deep Blue esszenciális olajkeverékkel és növényi összetevőkkel.", "Csak külsőleg, az érintett testfelületre masszírozva."],
  "dōTERRA Balance™": ["Fás-földes aromás keverék nyugodt, kiegyensúlyozott hangulathoz.", "Többféle fás és aromás esszenciális olaj keveréke; pontos összetétel a címkén.", "Diffúzorban vagy a címke szerint külsőleg."],
  "ClaryCalm™": ["Női aromás wellness-rutinokhoz készült Touch jellegű keverék.", "Több esszenciális olaj és hordozóolaj kombinációja; pontos összetétel a címkén.", "Külsőleg, a címke szerint."],
  "Correct-X™": ["Célzott bőrápoló balzsam kisebb, száraz vagy igénybevett bőrterületekre.", "Kozmetikai balzsam esszenciális olajokkal és bőrápoló összetevőkkel.", "Csak külsőleg, kis területen."],
  "Yarrow|Pom testmegújító szérum": ["Tápláló, prémium testápolási rutinokhoz.", "Yarrow|Pom komplexet és bőrápoló olajokat tartalmazó testápoló szérum.", "Külsőleg, testápolóként."],
  "dōTERRA védősampon": ["Mindennapi haj- és fejbőrtisztításhoz.", "Samponalap növényi és aromás összetevőkkel; teljes INCI a termékcímkén.", "Nedves hajon habosítva, majd leöblítve."],
  "dōTERRA napi kondicionáló": ["Mindennapi hajkondicionáláshoz, a haj simább érzetéért.", "Kondicionáló alap növényi és aromás összetevőkkel; teljes INCI a termékcímkén.", "Samponozás után a hajhosszra, majd leöblítve."],
  "Öregedésgátló szemkrém": ["A szemkörnyék hidratálására és ápolására.", "Kozmetikai szemkörnyékápoló formula növényi és bőrápoló összetevőkkel.", "Kis mennyiségben a szemkörnyékre, a szembe jutást kerülve."],
  "Öregedésgátló hidratálókrém": ["Gazdagabb arckrém szárazabb, érettebb bőr napi ápolására.", "Hidratáló krémalap növényi és aromás összetevőkkel.", "Arctisztítás után, nappal vagy este."],
  "Arctisztító": ["Mindennapi arctisztításhoz.", "Lemosó alap bőrkondicionáló és növényi összetevőkkel.", "Nedves bőrön, majd alaposan leöblítve."],
  "Hidratálókrém": ["Mindennapi arcbőr-hidratáláshoz.", "Hidratáló krémalap bőrápoló összetevőkkel.", "Arctisztítás után."],
  "dōTERRA™ sun ajakbalzsam SPF 15": ["Ajakápolás és mindennapi fényvédelem kombinációja.", "Ajakbalzsam UV-szűrőkkel és ápoló összetevőkkel.", "A címke szerint, napozás előtt és szükség szerint újrakenve."],
  "dōTERRA SPA tápláló testvaj": ["Gazdag testápolás szárazabb bőrre.", "Testvaj alap növényi vajakkal/olajokkal és aromás összetevőkkel.", "Tiszta bőrre masszírozva."],
  "Alpha CRS™+": ["Napi étrend-kiegészítő formula a doTERRA vitalitási rendszerében.", "Többféle növényi kivonatot és mikrotápanyagot tartalmazó kapszulás formula; pontos hatóanyaglista a címkén.", "A napi adagolást kizárólag a címke szerint kövesd."],
  "Microplex VMz™": ["Napi vitamin- és ásványianyag-pótlást célzó étrend-kiegészítő.", "Vitaminokat, ásványi anyagokat és kapcsolódó tápanyagokat tartalmaz; pontos mennyiségek a címkén.", "A címke szerinti napi adagban."],
  "Deep Blue™ Polyphenol Complex": ["A Deep Blue termékcsalád belsőleges étrend-kiegészítője.", "Polifenolokat és növényi eredetű összetevőket tartalmazó kapszulás formula; pontos összetétel a címkén.", "Csak a címke szerinti adagolással."],
  "PB Restore™": ["Bélflóra-fókuszú étrend-kiegészítő formula.", "Probiotikus mikroorganizmusokat és kapcsolódó összetevőket tartalmazó kapszulás termék; pontos törzsek/mennyiségek a címkén.", "A címke szerinti adagolással."],
  "PB Assist+™": ["Probiotikus étrend-kiegészítő tasakos kiszerelésben.", "Probiotikus kultúrákat és kiegészítő összetevőket tartalmaz; pontos törzsek/mennyiségek a címkén.", "A címke szerinti napi adagban."],
  "dōTERRA Rostkeverék": ["Élelmirost-bevitel kiegészítésére.", "Oldható és/vagy növényi rostforrásokat tartalmazó por; pontos összetétel a címkén.", "Folyadékba vagy ételbe keverve a címke szerint."],
  "Esszenciális csont tápanyag komplex": ["Nők számára összeállított ásványianyag- és mikrotápanyag-kiegészítő.", "Csontanyagcserében szerepet játszó vitaminokat és ásványi anyagokat tartalmaz; pontos mennyiségek a címkén.", "A címke szerinti napi adagban."],
  "Esszenciális fitoösztrogén komplex": ["Női wellness célú növényi étrend-kiegészítő.", "Növényi eredetű fitoösztrogén-forrásokat és kiegészítő tápanyagokat tartalmaz; pontos összetétel a címkén.", "A címke szerinti adagban; hormonérzékeny állapot vagy gyógyszeres kezelés esetén orvossal egyeztetendő."],
  "Petal 2.0 párologtató": ["Ultrahangos illóolaj-párologtató otthoni aromás használathoz.", "Elektromos párologtató készülék víztartállyal.", "Víz és a címke szerint adagolt illóolaj használatával."],
  "Lumo párologtató + dōTERRA Serenity™": ["Párologtató és Serenity aromás keverék egy csomagban.", "Lumo párologtató + Serenity esszenciális olajkeverék.", "Otthoni aromás használatra a készülék útmutatója szerint."],
  "Basil / Bazsalikom / Tulsi": ["Fűszeres-zöld aromás rutinokhoz, diffúzorba vagy célzott külsőleges használatra.","Bazsalikom/Tulsi növényi forrásból származó esszenciális olaj.","Aromásan vagy erősen hígítva, a címke szerint."],
  "Blue Lotus Touch / Kék Lótusz Touch": ["Virágos, prémium személyes illatrutinhoz és nyugodt aromás pillanatokhoz.","Kék lótusz aromás kivonata frakcionált kókuszolajban, golyós kiszerelésben.","Pulzuspontokra, külsőleg."],
  "Celery Seed / Zellermag": ["Fűszeres, zöld aromás rutinokhoz.","Zellermagból nyert esszenciális olaj.","Aromásan vagy a címke szerint külsőleg."],
  "Air-X™": ["Friss, tiszta, citrusos-mentás illatélményhez.","Több citrusos és friss aromájú esszenciális olaj keveréke; pontos összetétel a címkén.","Diffúzorban vagy a címke szerint külsőleg."],
  "AromaTouch™": ["Masszázshoz és relaxáló testápolási rutinokhoz készült aromás keverék.","Több esszenciális olaj masszázscélú keveréke; pontos összetétel a címkén.","Hígítva, külsőleg, masszázshoz."],
  "dōTERRA Brave™": ["Gyermekeknek is használható, bátorító hangulatú aromás keverék.","Enyhe, előre összeállított esszenciális olajkeverék hordozóolajjal.","Külsőleg, a gyermekekre vonatkozó címkeutasítás szerint."],
  "dōTERRA Calmer™": ["Esti, megnyugtató gyermekrutinokhoz.","Gyermekbarát aromás keverék hordozóolajjal.","Külsőleg, a címke szerinti életkorban és módon."],
  "dōTERRA Cheer™": ["Derűs, citrusos-fűszeres aromás hangulathoz.","Több citrusos és fűszeres esszenciális olaj keveréke; pontos összetétel a címkén.","Diffúzorban vagy a címke szerint külsőleg."],
  "Citrus Bliss™": ["Vidám, édes-citrusos diffúzoros illatélményhez.","Több citrusos esszenciális olaj és aromás komponens keveréke.","Elsősorban aromásan; bőrön a citrusokra vonatkozó fényérzékenységi előírások szerint."],
  "DDR Prime™": ["Komplex, meleg-fűszeres aromás keverék.","Több esszenciális olajból álló szabadalmazott keverék; pontos összetétel a címkén.","Aromásan vagy a címke szerint külsőleg."],
  "DDR Prime™ lágyzselatin kapszula": ["A DDR Prime keverék belsőleges, kapszulás kiszerelése.","Esszenciális olajkeveréket tartalmazó lágyzselatin kapszula; pontos összetétel a címkén.","Kizárólag a címke szerinti adagolással."],
  "dōTERRA Anchor™": ["Földelő, nyugodt hangulatú aromás rutinokhoz.","Több fás és aromás esszenciális olaj keveréke.","Aromásan vagy a címke szerint külsőleg."],
  "Purify™": ["Friss, tiszta illatú otthoni és aromás rutinokhoz.","Tisztaságérzetet adó esszenciális olajkeverék; pontos összetétel a címkén.","Diffúzorban vagy a címke szerint külsőleg."],
  "ZenGest™": ["Fűszeres-mentás aromás keverék, étkezés körüli wellness-rutinokhoz.","Több fűszeres és mentás esszenciális olaj keveréke; pontos összetétel a címkén.","Aromás vagy a konkrét kiszerelés címkéje szerinti használatra."],
  "MetaPWR™": ["A MetaPWR életmódvonal aromás keveréke.","Citrusos és fűszeres esszenciális olajok keveréke; pontos összetétel a címkén.","A címke szerinti aromás/külsőleges használatra."],
  "Deep Blue™ enyhítő krém minta": ["A Deep Blue Rub kipróbálására szolgáló mintakiszerelés.","Ugyanaz a Deep Blue krémformula kis adagban.","Csak külsőleg, célzott testápolási/masszázsrutinban."],
  "dōTERRA Balance™ dezodor": ["Mindennapi dezodoráláshoz Balance aromaprofillal.","Dezodoralap Balance aromás keverékkel; teljes INCI a címkén.","Tiszta, száraz hónaljbőrre."],
  "Citrus Bliss™ dezodor": ["Mindennapi dezodoráláshoz citrusos illattal.","Dezodoralap Citrus Bliss aromás keverékkel; teljes INCI a címkén.","Tiszta, száraz hónaljbőrre."],
  "dōTERRA dezodor duglászfenyő + görög narancs": ["Mindennapi dezodoráláshoz friss, fás-citrusos illattal.","Dezodoralap duglászfenyő- és citrusos aromás összetevőkkel.","Tiszta, száraz hónaljbőrre."],
  "Tömjén stift + Naiofa": ["Praktikus, célzott bőrápoláshoz stiftes kiszerelésben.","Tömjén- és naiofa aromás összetevőket tartalmazó kozmetikai stift.","Csak külsőleg, kis bőrfelületen."],
  "Ajakbalzsam – Eredeti": ["Mindennapi ajakhidratáláshoz és komfortérzethez.","Ajakápoló viaszok/olajok és aromás összetevők; teljes INCI a címkén.","Szükség szerint az ajkakra."],
  "On Guard™ gyöngyöcskék": ["Az On Guard aromás keverék praktikus, kis gyöngyös kiszerelése.","On Guard esszenciális olajkeverék zselés gyöngyben.","Kizárólag a termékcímke szerint."],
  "On Guard™ cukorka": ["Citrusos-fűszeres aromájú torokcukorka/pasztilla.","On Guard aromás keveréket és pasztillaalapot tartalmaz.","A címke szerinti mennyiségben."],
  "On Guard™ szájvíz": ["Mindennapi szájhigiénés rutin kiegészítésére.","Szájvízalap On Guard aromás összetevőkkel; pontos INCI a címkén.","Öblögetésre; nem lenyelendő."],
  "On Guard™ Toothpaste": ["Mindennapi fogmosáshoz.","Fogkrémalap On Guard aromás keverékkel és tisztító összetevőkkel.","Fogmosásra a címke szerint."],
  "CP+ lágyzselatin kapszula": ["Napi wellness-rutinba illeszthető komplex étrend-kiegészítő.","Növényi/antioxidáns jellegű összetevőket tartalmazó lágyzselatin formula; pontos hatóanyaglista a címkén.","Csak a címke szerinti adagolással."],
  "VMG+™": ["Napi vitamin-, ásványianyag- és mikrotápanyag-kiegészítő rendszer.","Vitaminokat, ásványi anyagokat és kapcsolódó tápanyagokat tartalmazó formula.","A címke szerinti napi adagban."],
  "Fractionated Coconut Oil": ["Esszenciális olajok hígításához és masszázshoz használható hordozóolaj.","Frakcionált kókuszolaj.","Külsőleg, önmagában vagy esszenciális olajok hígítására."],
  "Levendula Touch": ["Előhígított levendula a gyors, célzott külsőleges használathoz.","Levendula esszenciális olaj frakcionált kókuszolajban.","Pulzuspontokra vagy kis bőrfelületre, külsőleg."],
  "Vietnámi eukaliptusz": ["Friss, tiszta aromájú diffúzoros rutinokhoz.","Vietnámi eukaliptuszból nyert esszenciális olaj.","Aromásan vagy a címke szerint külsőleg."],
  "Óriás tuja": ["Karakteres, fás aromás rutinokhoz.","Óriás tuja növényi forrásból származó esszenciális olaj.","Kizárólag a címke szerinti, óvatos aromás/külsőleges használatra."],
  "Copaiba Touch": ["Előhígított copaiba célzott külsőleges aromás rutinokhoz.","Copaiba esszenciális olaj frakcionált kókuszolajban.","Golyós adagolóval, külsőleg."],
  "Tömjén Touch": ["Előhígított tömjén bőrápolási és személyes aromás rutinokhoz.","Tömjén esszenciális olaj frakcionált kókuszolajban.","Golyós adagolóval, külsőleg."],
  "HD Clear™ helyi használatra való keverék": ["Célzott, problémásabb bőrfelületek kozmetikai ápolásához.","Bőrápolásra összeállított esszenciális olajkeverék hordozóolajban.","Csak külsőleg, célzottan."],
  "Olasz szalmagyopár Touch": ["Bőrápolási és prémium aromás rutinokhoz előhígítva.","Olasz szalmagyopár esszenciális olaj hordozóolajban.","Golyós adagolóval, külsőleg."],
  "InTune™": ["Fókuszált, összeszedett hangulatot támogató aromás rutinokhoz.","Több aromás esszenciális olaj előre összeállított golyós keveréke.","Pulzuspontokra vagy a címke szerint külsőleg."],
  "Jázmin Touch": ["Virágos személyes illatrutinhoz és külsőleges aromás használathoz.","Jázmin aromás kivonat frakcionált kókuszolajban.","Pulzuspontokra, külsőleg."],
  "dōTERRA Cheer™ Touch": ["A Cheer keverék praktikus, előhígított golyós változata.","Cheer esszenciális olajkeverék hordozóolajban.","Pulzuspontokra, külsőleg."],
  "dōTERRA Passion™ Touch": ["Meleg, fűszeres-virágos személyes aromás rutinhoz.","Passion esszenciális olajkeverék hordozóolajban.","Pulzuspontokra, külsőleg."],
  "dōTERRA Forgive™ Touch": ["Lágy, fás-gyógynövényes személyes aromás rutinhoz.","Forgive esszenciális olajkeverék hordozóolajban.","Pulzuspontokra, külsőleg."],
  "dōTERRA Peace™ Touch": ["Nyugodt, esti vagy személyes aromás rutinhoz.","Peace esszenciális olajkeverék hordozóolajban.","Pulzuspontokra, külsőleg."],
  "dōTERRA Adaptiv™ Touch": ["Stresszesebb napokra kialakított személyes aromás rutinokhoz.","Adaptiv esszenciális olajkeverék hordozóolajban.","Pulzuspontokra, külsőleg."],
  "dōTERRA Hope™ Touch": ["Virágos-vaníliás személyes aromás rutinhoz.","A Hope aromás keverék hordozóolajban.","Pulzuspontokra, külsőleg."],
  "Thinker™": ["Gyermekek számára kialakított, fókuszhoz kapcsolódó aromás rutinokhoz.","Gyermekbarát, előhígított esszenciális olajkeverék.","Csak a címkén megadott életkorban és külsőleg."],
  "dōTERRA Rescuer™": ["Gyermekeknek szánt, sport vagy aktív nap utáni külsőleges rutinokhoz.","Gyermekbarát, előhígított aromás keverék.","Külsőleg, a címke szerint."],
  "dōTERRA Steady™": ["Gyermekeknek szánt nyugodt, földelő aromás rutinokhoz.","Gyermekbarát, előhígított esszenciális olajkeverék.","Külsőleg, a címke szerint."],
  "Stronger™": ["Gyermekeknek készült friss aromás keverék mindennapi rutinokhoz.","Gyermekbarát, előhígított esszenciális olajkeverék.","Külsőleg, a címke szerint."],
  "Tamer™": ["Gyermekek étkezés körüli aromás rutinjaihoz készített keverék.","Gyermekbarát, előhígított aromás keverék.","Külsőleg, a címke szerint."],
  "dōTERRA popsikenőcs babáknak": ["Baba popsijának mindennapi védő és ápoló rutinjához.","Babaápoló krémalap kímélő bőrápoló összetevőkkel; teljes INCI a címkén.","Tisztára törölt bőrre, külsőleg."],
  "dōTERRA a2z Chewable™ rágótabletta": ["Gyermekek napi vitamin- és ásványianyag-bevitelének kiegészítésére.","Vitaminokat, ásványi anyagokat és kapcsolódó tápanyagokat tartalmazó rágótabletta.","Csak a címkén megadott életkorban és adagban."],
  "IQ Mega™": ["Gyermekek számára készült omega-3 alapú étrend-kiegészítő.","Omega-3 zsírsavakat és kapcsolódó tápanyagokat tartalmazó folyékony formula; pontos összetétel a címkén.","Csak a címke szerinti életkorban és adagban."],
  "dōTERRA™ Csokoládés növényi fehérje": ["Növényi fehérjebevitel kiegészítésére csokoládés ízben.","Növényi fehérjeforrásokat és ízesítő/technológiai összetevőket tartalmazó por; pontos összetétel a címkén.","Italba/ételbe keverve, a címke szerinti adagban."],
  "ZenGest DigestTab™": ["Étkezés körüli emésztési wellness-rutinokhoz készült rágótabletta.","A ZenGest termékcsaládhoz kapcsolódó növényi/aromás összetevők és tablettaalap; pontos összetétel a címkén.","A címke szerinti adagban."],
  "ZenGest™ lágyzselatin kapszula": ["A ZenGest keverék belsőleges, kapszulás változata.","ZenGest esszenciális olajkeveréket tartalmazó lágyzselatin kapszula.","Kizárólag a címke szerinti adagban."],
  "ZenGest™ Touch": ["A ZenGest keverék előhígított, külsőleges golyós változata.","ZenGest esszenciális olajkeverék hordozóolajban.","Has tájékára vagy a címke szerinti területre, külsőleg."],
  "TriEase™ lágyzselatin kapszula": ["Szezonális wellness-rutinokhoz összeállított kapszulás formula.","Három esszenciális olajból álló kapszulás keverék; pontos összetétel a címkén.","Kizárólag a címke szerinti adagban."],
  "MetaPWR™ Mito2Max™": ["Napi energia- és teljesítményfókuszú étrend-kiegészítő formula.","Növényi kivonatokat és mikrotápanyagokat tartalmazó kapszulás formula; pontos összetétel a címkén.","A címke szerinti adagban."],
  "MetaPWR™ Advantage": ["A MetaPWR életmódprogramhoz kapcsolódó tasakos étrend-kiegészítő.","Több tápanyagból és növényi összetevőből álló formula; pontos összetétel a címkén.","A címke szerinti napi adagban."],
  "dōTERRA™ Gyömbéres cukorka": ["Gyömbéres, praktikus pasztilla étkezés körüli wellness-rutinokhoz.","Gyömbéres aromás/növényi összetevőket és cukorkaalapot tartalmaz.","A címke szerinti mennyiségben."],
  "Hármas csomag Petal™ párologtatóval": ["Kezdő aromaterápiás csomag párologtatóval és két alapolajjal.","Petal 2.0 párologtató + vadnarancs 5 ml + levendula 5 ml.","A párologtató használati útmutatója szerint."],
  "10 ml-es borostyánszínű golyós üvegek – 6 db": ["Saját hígított golyós keverékek elkészítéséhez.","6 darab 10 ml-es borostyánszínű golyós üveg.","Esszenciális olaj + megfelelő hordozóolaj tárolására."],
  "30 ml-es szórófejes flakon – 3 db": ["Saját, megfelelően hígított aromás spray-k elkészítéséhez.","3 darab 30 ml-es szórófejes flakon.","Csak megfelelő, biztonságos hígítású keverékekhez."],
  "2 ml-es mintaüvegek – 72 db": ["Kis mennyiségű olajminták tárolásához és megosztásához.","72 darab 2 ml-es mintaüveg.","Esszenciális olajmintákhoz, megfelelő címkézéssel."],
};

const CATEGORY_INFO = {
  hu: {
    "SINGLE OIL": ["Aromás és – a címke szerint – külsőleges rutinokhoz.", "Egyetlen növényi forrásból származó esszenciális olaj.", "A pontos használati módot és hígítást mindig a termékcímke alapján kövesd."],
    "BLEND": ["Célzott aromás rutinokhoz összeállított doTERRA-keverék.", "Több esszenciális olaj szabadalmazott kombinációja; a pontos összetétel a címkén.", "Diffúzorban vagy a konkrét termék címkéje szerint."],
    "ROLL-ON / TOUCH": ["Praktikus, célzott külsőleges használatra.", "A megnevezett esszenciális olaj/keverék; Touch változatoknál jellemzően frakcionált kókuszolajjal hígítva.", "Golyós adagolóval, külsőleg, a címke szerint."],
    "BODY CARE": ["Testápolási vagy masszázsrutinokhoz.", "Kozmetikai alap és aromás/bőrápoló összetevők; teljes INCI a címkén.", "Csak külsőleg."],
    "SKINCARE": ["Mindennapi vagy célzott arcbőrápolási rutinokhoz.", "Kozmetikai formula bőrápoló és aromás összetevőkkel; teljes INCI a címkén.", "A termék típusának megfelelően, külsőleg."],
    "PERSONAL CARE": ["Mindennapi személyes ápolási rutinokhoz.", "Kozmetikai/higiéniai formula; pontos összetétel a címkén.", "Kizárólag a termékcímke szerint."],
    "ON GUARD": ["Az On Guard termékcsalád mindennapi ápolási és aromás rutinjaihoz.", "On Guard keveréket és a terméktípustól függő további összetevőket tartalmaz.", "A konkrét kiszerelés címkéje szerint."],
    "SUPPLEMENT": ["Étrend-kiegészítő, célja a napi tápanyag- vagy wellness-rutin kiegészítése.", "A pontos hatóanyagok és mennyiségek termékenként eltérnek; a címke az irányadó.", "Csak a címke szerinti adagolással."],
    "ACCESSORY": ["Aromaterápiás vagy termékhasználati kiegészítő.", "Nem fogyasztási célú kiegészítő termék.", "A rendeltetésének megfelelően."],
    "KIDS": ["Gyermekeknek kialakított aromás termék.", "Gyermekbarát, előre összeállított aromás formula; pontos összetétel a címkén.", "Csak a korosztályra vonatkozó címkeutasítás szerint."],
    "KIDS & BABY": ["Baba- és gyermekápolási rutinokhoz.", "Kímélő ápoló formula; teljes összetétel a címkén.", "Csak a címke szerinti életkorban és módon."],
    "KIDS SUPPLEMENT": ["Gyermekeknek készült étrend-kiegészítő.", "Vitaminokat, zsírsavakat vagy egyéb tápanyagokat tartalmazó formula; pontos összetétel a címkén.", "Csak a címke szerinti életkorban és adagban."],
    "SUN CARE": ["Mindennapi napvédelmi rutinokhoz.", "UV-szűrőket és ápoló összetevőket tartalmazó formula.", "A címke szerint, megfelelő mennyiségben és szükség szerinti újrakenéssel."],
    "HAIR CARE": ["Haj- és fejbőrápolási rutinokhoz.", "Hajápoló alap növényi és aromás összetevőkkel.", "A termékcímke szerint."],
    "WOMEN": ["Női wellness-rutinok kiegészítésére.", "Növényi kivonatokat, vitaminokat és/vagy ásványi anyagokat tartalmazó formula; pontos összetétel a címkén.", "A címke szerinti adagban."],
    "TARGETED": ["Célzott, praktikus mindennapi használatra.", "A terméktípustól függő aromás vagy wellness formula.", "A címke szerint."],
    "DIFFUSER": ["Otthoni aromás használatra szolgáló készülék vagy készlet.", "Párologtató készülék és/vagy aromás termék.", "A készülék használati útmutatója szerint."]
  },
  en: {
    default: ["Designed for the product category shown.", "See the current official doTERRA label for the exact ingredient list.", "Always follow the product label and directions for use."]
  },
  de: {
    default: ["Für die angegebene Produktkategorie entwickelt.", "Die genaue Zutatenliste findest du auf dem aktuellen offiziellen doTERRA-Etikett.", "Immer Etikett und Anwendungshinweise beachten."]
  }
};

function getProductInfo(name, group, lang){
  if(lang==="hu") return PRODUCT_INFO_HU[name] || CATEGORY_INFO.hu[group] || CATEGORY_INFO.hu["TARGETED"];
  return CATEGORY_INFO[lang]?.default || CATEGORY_INFO.en.default;
}

function getEditorialDescription(name, group, lang){
  const info=getProductInfo(name,group,lang);
  if(lang==="hu"){
    const intro={
      "SINGLE OIL": `${name} egy jellegzetes aromaprofilú doTERRA esszenciális olaj. `,
      "BLEND": `${name} több esszenciális olaj tudatosan összeállított keveréke. `,
      "ROLL-ON / TOUCH": `${name} praktikus, golyós kiszerelésű termék célzott külsőleges használatra. `,
      "BODY CARE": `${name} testápolási és masszázsrutinokba illeszthető doTERRA termék. `,
      "SKINCARE": `${name} a mindennapi vagy célzott bőrápolási rutin része lehet. `,
      "PERSONAL CARE": `${name} a mindennapi személyes ápolásra készült. `,
      "ON GUARD": `${name} az On Guard termékcsalád egyik célzott darabja. `,
      "SUPPLEMENT": `${name} a doTERRA étrend-kiegészítő kínálatának része. `,
      "KIDS": `${name} gyermekek számára kialakított aromás termék. `,
      "KIDS & BABY": `${name} baba- és gyermekápolási rutinokra készült. `,
      "KIDS SUPPLEMENT": `${name} gyermekeknek készült étrend-kiegészítő. `,
      "SUN CARE": `${name} napvédelmi és ajakápolási rutinokhoz készült. `,
      "HAIR CARE": `${name} haj- és fejbőrápolási rutinba illeszthető. `,
      "WOMEN": `${name} női wellness-rutinok kiegészítésére készült. `,
      "TARGETED": `${name} célzott, praktikus mindennapi használatra készült. `,
      "DIFFUSER": `${name} otthoni aromás használatra tervezett készülék vagy készlet. `,
      "ACCESSORY": `${name} a doTERRA aromaterápiás használatát segítő kiegészítő. `
    }[group] || "";
    return `${intro}${info[0]} ${info[1]} Használatakor mindig a konkrét termék aktuális címkéje és hivatalos doTERRA útmutatója az irányadó.`;
  }
  if(lang==="de") return `${name}: ${info[0]} ${info[1]} Bitte immer das aktuelle Produktetikett und die offiziellen doTERRA-Anwendungshinweise beachten.`;
  return `${name}: ${info[0]} ${info[1]} Always follow the current product label and official doTERRA directions for use.`;
}

function getExtraProductNote(group, lang){
  const notes={
    hu:{
      "SINGLE OIL":"Koncentrált esszenciális olaj: a hígítás, a bőrérzékenység és az adott olajra vonatkozó speciális előírások mindig számítanak.",
      "BLEND":"A keverékek több olaj tulajdonságait és illatprofilját egyesítik; az alkalmazási mód termékenként eltérhet.",
      "ROLL-ON / TOUCH":"A Touch/golyós forma kényelmes, célzott használatra készült; a szem és nyálkahártyák környékét kerülni kell.",
      "BODY CARE":"Kozmetikai termék: külsőleges használatra, ép bőrfelületen, az egyéni bőrtoleranciát figyelembe véve.",
      "SKINCARE":"Bőrápolásnál a teljes formula, a bőrtípus és az egyéni tolerancia fontosabb, mint egyetlen kiemelt összetevő.",
      "PERSONAL CARE":"Mindennapi használatra készült, de irritáció esetén a használatot abba kell hagyni.",
      "ON GUARD":"Az On Guard termékek eltérő formában és eltérő használati móddal készülnek, ezért mindig a konkrét kiszerelés útmutatója az irányadó.",
      "SUPPLEMENT":"Étrend-kiegészítő: nem helyettesíti a változatos étrendet vagy az orvosi ellátást; az adagolást mindig a címke szerint kövesd.",
      "KIDS":"Gyermekeknél különösen fontos az életkori ajánlás és a címkén jelzett használati mód pontos betartása.",
      "KIDS & BABY":"Baba- és gyermekterméknél csak a megadott életkorban, a címkén jelzett módon használd.",
      "KIDS SUPPLEMENT":"Gyermekeknek készült étrend-kiegészítőnél az életkor és az adagolás különösen fontos.",
      "SUN CARE":"A napvédelem hatékonyságához megfelelő mennyiség és szükség szerinti újrakenés kell.",
      "HAIR CARE":"A hajápoló kozmetikumok a haj és fejbőr komfortját támogatják; nem gyógyszeres hajhullás-kezelések.",
      "WOMEN":"Női wellness-kiegészítőknél hormonérzékeny állapot, gyógyszerszedés vagy várandósság esetén szakemberrel való egyeztetés indokolt lehet.",
      "TARGETED":"Célzott termék: a konkrét kiszerelés használati útmutatója és figyelmeztetései az irányadók.",
      "DIFFUSER":"Párologtatót jól szellőző térben, a készülék útmutatója szerint használj.",
      "ACCESSORY":"Kiegészítő termék; mindig az adott felhasználási célhoz illő, biztonságos módon használd."
    },
    en:{default:"Always follow the current label, age guidance and safety directions for the specific product."},
    de:{default:"Bitte immer die aktuellen Etikett-, Alters- und Sicherheitshinweise des konkreten Produkts beachten."}
  };
  return notes[lang]?.[group] || notes[lang]?.default || notes.hu[group] || "";
}



const copy = {
  hu: {
    back: "Vissza a főoldalra",
    eyebrow: "WELLNESS • AROMATERÁPIA • OTTHONI RITUÁLÉK",
    title: "Illóolajok & aromás wellness",
    lead: "Illóolajok és aromás wellness-rutinok a Beauty by Ildy szerkesztői válogatásában. A kínálatban doTERRA termékekhez is adunk hivatalos vásárlási útvonalat.",
    note: "A Beauty by Ildy független, többmárkás szerkesztőségi oldal. Nem a doTERRA hivatalos vállalati weboldala. A vásárlás és a rendelés kezelése a doTERRA hivatalos rendszerében történik.",
    shop: "BÖNGÉSSZ A DOTERRA TERMÉKEK KÖZÖTT",
    heading: "MIRE HASZNÁLNÁD?",
    featured: "DOTERRA TERMÉKEK",
    productCta: "TERMÉK MEGNYITÁSA",
    linkCheck: "LINK ELLENŐRZÉS ALATT",
    productDesc: "Közvetlen doTERRA referral link a kiválasztott termékhez.",
    infoLabels: ["MIRE VALÓ?", "FŐ ÖSSZETEVŐK / ÖSSZETÉTEL", "HASZNÁLAT"],
    descriptionLabel: "TERMÉKLEÍRÁS",
    extraLabel: "AMIT ÉRDEMES TUDNI",
    groupNames: {"SINGLE OIL":"EGYEDI ILLÓOLAJOK","BLEND":"OLAJKEVERÉKEK","ROLL-ON / TOUCH":"TOUCH / GOLYÓS","BODY CARE":"TESTÁPOLÁS","SKINCARE":"BŐRÁPOLÁS","PERSONAL CARE":"SZEMÉLYES ÁPOLÁS","ON GUARD":"ON GUARD TERMÉKEK","SUPPLEMENT":"ÉTREND-KIEGÉSZÍTŐK","ACCESSORY":"KIEGÉSZÍTŐK","KIDS":"GYEREK TERMÉKEK","KIDS & BABY":"BABA & GYEREK","KIDS SUPPLEMENT":"GYEREK ÉTREND-KIEGÉSZÍTŐK","SUN CARE":"NAPVÉDELEM","HAIR CARE":"HAJÁPOLÁS","WOMEN":"NŐI WELLNESS","TARGETED":"CÉLZOTT TERMÉKEK","DIFFUSER":"PÁROLOGTATÓK"},
    cards: [
      ["AROMÁS RUTINOK", "Illatok és egyszerű otthoni rituálék relaxáló, frissítő vagy fókuszált hangulathoz."],
      ["DIFFÚZOR & OTTHON", "Diffúzorok és illatélmények a lakótér személyes hangulatának kialakításához."],
      ["TESTÁPOLÁS & MASSZÁZS", "Kozmetikai és masszázsrutinokhoz illeszthető, megfelelően hígított aromás megoldások."],
      ["NŐI WELLNESS", "Szerkesztői wellness-tartalmak és mindennapi rituálék túlzó egészségügyi ígéretek nélkül."]
    ],
    safety: "Használat előtt mindig kövesd a hivatalos termékcímke és a doTERRA használati útmutatójának előírásait; az illóolajok alkalmazása termékenként eltérhet.",
    routeNote: "A felső böngészőgomb ezen az oldalon a doTERRA terméklistához görget. A konkrét termékgombok a kiválasztott termékhez tartozó doTERRA referral linkre vezetnek."
  },
  en: {
    back: "Back to home",
    eyebrow: "WELLNESS • AROMATHERAPY • AT-HOME RITUALS",
    title: "Essential oils & aromatic wellness",
    lead: "Essential oils and aromatherapy-inspired wellness routines in the Beauty by Ildy editorial edit, including an official purchase route for doTERRA products.",
    note: "Beauty by Ildy is an independent multi-brand editorial website and is not an official doTERRA corporate website. Purchases and orders are completed in doTERRA’s official system.",
    shop: "BROWSE DOTERRA PRODUCTS",
    heading: "WHAT ARE YOU LOOKING FOR?",
    featured: "DOTERRA PRODUCTS",
    productCta: "OPEN PRODUCT",
    linkCheck: "LINK UNDER REVIEW",
    productDesc: "Direct doTERRA referral link for the selected product.",
    infoLabels: ["WHAT IS IT FOR?", "MAIN INGREDIENTS / COMPOSITION", "HOW TO USE"],
    descriptionLabel: "PRODUCT DESCRIPTION",
    extraLabel: "GOOD TO KNOW",
    groupNames: {"SINGLE OIL":"SINGLE ESSENTIAL OILS","BLEND":"ESSENTIAL OIL BLENDS","ROLL-ON / TOUCH":"TOUCH / ROLL-ON","BODY CARE":"BODY CARE","SKINCARE":"SKINCARE","PERSONAL CARE":"PERSONAL CARE","ON GUARD":"ON GUARD PRODUCTS","SUPPLEMENT":"SUPPLEMENTS","ACCESSORY":"ACCESSORIES","KIDS":"KIDS","KIDS & BABY":"BABY & KIDS","KIDS SUPPLEMENT":"KIDS SUPPLEMENTS","SUN CARE":"SUN CARE","HAIR CARE":"HAIR CARE","WOMEN":"WOMEN’S WELLNESS","TARGETED":"TARGETED PRODUCTS","DIFFUSER":"DIFFUSERS"},
    cards: [
      ["AROMATIC ROUTINES", "Scents and simple at-home rituals for a relaxing, refreshing or focused atmosphere."],
      ["DIFFUSERS & HOME", "Diffusers and aromatic experiences for shaping the mood of your space."],
      ["BODY CARE & MASSAGE", "Aromatic options suitable for cosmetic and massage routines when used as directed and appropriately diluted."],
      ["WOMEN'S WELLNESS", "Editorial wellbeing content and everyday rituals without exaggerated health claims."]
    ],
    safety: "Always follow the official product label and doTERRA directions for use; essential-oil use can differ by product.",
    routeNote: "The browse button scrolls to the doTERRA product catalogue on this page. Individual product buttons use direct doTERRA referral links."
  },
  de: {
    back: "Zurück zur Startseite",
    eyebrow: "WELLNESS • AROMATHERAPIE • RITUALE FÜR ZU HAUSE",
    title: "Ätherische Öle & aromatisches Wellness",
    lead: "Ätherische Öle und aromatherapeutisch inspirierte Wellness-Routinen in der redaktionellen Beauty-by-Ildy-Auswahl, einschließlich eines offiziellen Kaufwegs für doTERRA-Produkte.",
    note: "Beauty by Ildy ist eine unabhängige, markenübergreifende redaktionelle Website und keine offizielle Unternehmenswebsite von doTERRA. Käufe und Bestellungen werden im offiziellen doTERRA-System abgeschlossen.",
    shop: "DOTERRA-PRODUKTE DURCHSUCHEN",
    heading: "WONACH SUCHST DU?",
    featured: "DOTERRA PRODUKTE",
    productCta: "PRODUKT ÖFFNEN",
    linkCheck: "LINK WIRD GEPRÜFT",
    productDesc: "Direkter doTERRA-Empfehlungslink zum ausgewählten Produkt.",
    infoLabels: ["WOFÜR?", "HAUPTINHALTSSTOFFE / ZUSAMMENSETZUNG", "ANWENDUNG"],
    descriptionLabel: "PRODUKTBESCHREIBUNG",
    extraLabel: "GUT ZU WISSEN",
    groupNames: {"SINGLE OIL":"ÄTHERISCHE EINZELÖLE","BLEND":"ÖLMISCHUNGEN","ROLL-ON / TOUCH":"TOUCH / ROLL-ON","BODY CARE":"KÖRPERPFLEGE","SKINCARE":"HAUTPFLEGE","PERSONAL CARE":"KÖRPER- & ALLTAGSPFLEGE","ON GUARD":"ON GUARD PRODUKTE","SUPPLEMENT":"NAHRUNGSERGÄNZUNG","ACCESSORY":"ZUBEHÖR","KIDS":"KINDER","KIDS & BABY":"BABY & KINDER","KIDS SUPPLEMENT":"NAHRUNGSERGÄNZUNG FÜR KINDER","SUN CARE":"SONNENSCHUTZ","HAIR CARE":"HAARPFLEGE","WOMEN":"WELLNESS FÜR FRAUEN","TARGETED":"GEZIELTE PRODUKTE","DIFFUSER":"DIFFUSER"},
    cards: [
      ["AROMATISCHE ROUTINEN", "Düfte und einfache Rituale für zu Hause für eine entspannte, frische oder fokussierte Atmosphäre."],
      ["DIFFUSER & ZUHAUSE", "Diffuser und Dufterlebnisse für die persönliche Atmosphäre in deinen Räumen."],
      ["KÖRPERPFLEGE & MASSAGE", "Aromatische Optionen für Kosmetik- und Massageroutinen bei sachgemäßer Anwendung und Verdünnung."],
      ["WELLNESS FÜR FRAUEN", "Redaktionelle Wellbeing-Inhalte und Alltagsrituale ohne übertriebene Gesundheitsversprechen."]
    ],
    safety: "Befolge immer das offizielle Produktetikett und die doTERRA-Anwendungshinweise; die Verwendung ätherischer Öle kann je nach Produkt unterschiedlich sein.",
    routeNote: "Der obere Button führt auf dieser Seite zum doTERRA-Produktkatalog. Einzelne Produktbuttons verwenden direkte doTERRA-Empfehlungslinks."
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
      <section className="brandPageBody">
        <div className="brandPageMeta"><span>{t.heading}</span><small>Independent wellness edit</small></div>
        <div className="brandProductGrid">
          {t.cards.map(([name, desc]) => (
            <article className="brandProductCard isInfo" key={name}>
              <div className="brandCardTopline"><span>BEAUTY BY ILDY</span><em>EDITORIAL</em></div>
              <h2>{name}</h2>
              <p>{desc}</p>
              <div className="brandCardActions">
                <button type="button" onClick={() => document.getElementById("doterra-products")?.scrollIntoView({ behavior: "smooth", block: "start" })}>{t.shop}</button>
              </div>
            </article>
          ))}
        </div>
        <div className="brandGroup doterraFeatured" id="doterra-products">
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
                    {(() => {
                      const info=getProductInfo(name,group,lang);
                      return <>
                        <div className="doterraDescription">
                          <span>{t.descriptionLabel}</span>
                          <p>{getEditorialDescription(name,group,lang)}</p>
                        </div>
                        <div className="doterraInfo">
                          <p><strong>{t.infoLabels[0]}</strong>{info[0]}</p>
                          <p><strong>{t.infoLabels[1]}</strong>{info[1]}</p>
                          <p><strong>{t.infoLabels[2]}</strong>{info[2]}</p>
                          <p className="doterraExtra"><strong>{t.extraLabel}</strong>{getExtraProductNote(group,lang)}</p>
                        </div>
                      </>;
                    })()}
                    <div className="brandCardActions">
                      {DUPLICATE_PRODUCT_URLS.has(url) ? (
                        <span className="doterraLinkCheck">{t.linkCheck}</span>
                      ) : (
                        <a href={url} target="_blank" rel="sponsored noopener noreferrer">
                          {t.productCta}<ExternalLink size={12}/>
                        </a>
                      )}
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
