const productLeadCopy={
  hu:'30 gondosan kiválasztott termék, átlátható kategóriákba rendezve. Nem egyetlen márkára építünk: a választásnál a formula minőségét, a várható eredményt és hatékonyságot, a használhatóságot, valamint a rendelkezésre álló tudományos bizonyítékokat egyaránt figyelembe vesszük.',
  en:'30 carefully selected products, organised into clear categories. We do not build the selection around a single brand: we consider formula quality, expected results and efficacy, usability, and the available scientific evidence together.',
  de:'30 sorgfältig ausgewählte Produkte, übersichtlich nach Kategorien geordnet. Unsere Auswahl ist nicht an eine einzelne Marke gebunden: Wir berücksichtigen die Qualität der Formulierung, die zu erwartenden Ergebnisse und Wirksamkeit, die Anwendbarkeit sowie die verfügbare wissenschaftliche Evidenz gleichermaßen.'
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
window.addEventListener('hashchange',updateProductLead);
new MutationObserver(updateProductLead).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['lang']});
updateProductLead();
