const labels={hu:'FEDEZD FEL',en:'DISCOVER',de:'ENTDECKEN'};

function ensureHairLink(){
  const box=document.querySelector('.featureBand>div:first-child');
  if(!box)return;
  let link=box.querySelector('.hairExploreLink');
  if(!link){
    link=document.createElement('a');
    link.className='hairExploreLink';
    link.href='#products';
    link.innerHTML='<span></span><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    box.appendChild(link);
  }
  const lang=document.documentElement.lang||'hu';
  link.querySelector('span').textContent=labels[lang]||labels.hu;
}

ensureHairLink();
window.addEventListener('hashchange',()=>setTimeout(ensureHairLink,0));
new MutationObserver(ensureHairLink).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
