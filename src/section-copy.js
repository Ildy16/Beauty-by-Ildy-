const sectionCopy={
  hu:{routines:'RUTINOK, LÉPÉSRŐL LÉPÉSRE',standards:'A VÁLASZTÁS SZEMPONTJAI',brands:'MÁRKÁK A FÓKUSZBAN',brandSub:'Innováció, minőség és valódi hozzáadott érték alapján kerülnek a fókuszba.'},
  en:{routines:'ROUTINES, STEP BY STEP',standards:'WHAT GUIDES OUR CHOICES',brands:'BRANDS IN FOCUS',brandSub:'Brands brought into focus for innovation, quality and meaningful added value.'},
  de:{routines:'ROUTINEN, SCHRITT FÜR SCHRITT',standards:'UNSERE AUSWAHLKRITERIEN',brands:'MARKEN IM FOKUS',brandSub:'Marken, die durch Innovation, Qualität und echten Mehrwert in den Fokus rücken.'}
};

function applySectionCopy(){
  const lang=document.documentElement.lang||'hu';
  const t=sectionCopy[lang]||sectionCopy.hu;
  const routines=document.querySelector('.routines h2');
  const standards=document.querySelector('.standards h2');
  const brands=document.querySelector('.brands h2');
  const brandSub=document.querySelector('.brands .brandIntro');
  if(routines&&routines.textContent!==t.routines) routines.textContent=t.routines;
  if(standards&&standards.textContent!==t.standards) standards.textContent=t.standards;
  if(brands&&brands.textContent!==t.brands) brands.textContent=t.brands;
  if(brandSub&&brandSub.textContent!==t.brandSub) brandSub.textContent=t.brandSub;
}

requestAnimationFrame(applySectionCopy);
window.addEventListener('hashchange',()=>setTimeout(applySectionCopy,0));
new MutationObserver(applySectionCopy).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
