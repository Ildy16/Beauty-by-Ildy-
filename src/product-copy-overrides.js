const productLeadCopy={
  hu:'30 gondosan kiválasztott termék, átlátható kategóriákba rendezve. Nem egyetlen márkára építünk: a választásnál a formula minőségét, a várható eredményt és hatékonyságot, a használhatóságot, valamint a rendelkezésre álló tudományos bizonyítékokat egyaránt figyelembe vesszük.',
  en:'30 carefully selected products, organised into clear categories. We do not build the selection around a single brand: we consider formula quality, expected results and efficacy, usability, and the available scientific evidence together.',
  de:'30 sorgfältig ausgewählte Produkte, übersichtlich nach Kategorien geordnet. Unsere Auswahl ist nicht an eine einzelne Marke gebunden: Wir berücksichtigen die Qualität der Formulierung, die zu erwartenden Ergebnisse und Wirksamkeit, die Anwendbarkeit sowie die verfügbare wissenschaftliche Evidenz gleichermaßen.'
};

const hubislabIntroCopy={
  hu:'A HUBISLAB Premium Active Eternal Eye & Face Cream professzionális arc- és szemkörnyékápoló készítmény a HUBISLAB Human Bio Science alapú bőrápolási rendszeréből. Összetett formulája a hidratálást, a bőr komfortérzetének támogatását és az age-well hatóanyagokat egyesíti.',
  en:'HUBISLAB Premium Active Eternal Eye & Face Cream is a professional face and eye-area treatment within HUBISLAB’s Human Bio Science-based skincare system. Its complex formula combines hydration, support for skin comfort and age-well actives.',
  de:'Die HUBISLAB Premium Active Eternal Eye & Face Cream ist eine professionelle Gesichts- und Augenpflege aus dem auf Human Bio Science basierenden Hautpflegesystem von HUBISLAB. Ihre komplexe Formulierung verbindet Feuchtigkeit, Unterstützung des Hautkomforts und Age-Well-Wirkstoffe.'
};

function updateProductLead(){
  if(location.hash!=='#products')return;
  requestAnimationFrame(()=>{
    const lead=document.querySelector('.productsHero > div > p:not(.eyebrow)');
    if(!lead)return;
    const lang=document.documentElement.lang||'hu';
    lead.textContent=productLeadCopy[lang]||productLeadCopy.hu;
  });
}

function updateHubislabIntro(){
  if(location.hash!=='#product-hubislab-eternal')return;
  setTimeout(()=>{
    const lead=document.querySelector('.hubiHeroLead');
    if(!lead)return;
    const lang=document.documentElement.lang||'hu';
    lead.textContent=hubislabIntroCopy[lang]||hubislabIntroCopy.hu;
  },120);
}

function updateCopy(){
  updateProductLead();
  updateHubislabIntro();
}

window.addEventListener('hashchange',updateCopy);
new MutationObserver(updateCopy).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['lang']});
updateCopy();
