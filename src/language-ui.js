function enhanceFooterLanguageSelector(){
  const footer=document.querySelector('footer');
  if(!footer)return;
  const current=footer.querySelector(':scope > p');
  if(!current||current.dataset.enhanced==='true')return;

  const wrap=document.createElement('div');
  wrap.className='footerLangs';
  wrap.setAttribute('aria-label','Language selector');

  ['hu','en','de'].forEach((lang,index)=>{
    if(index>0){
      const sep=document.createElement('span');
      sep.className='footerLangSep';
      sep.textContent='·';
      wrap.appendChild(sep);
    }
    const btn=document.createElement('button');
    btn.type='button';
    btn.textContent=lang.toUpperCase();
    btn.dataset.lang=lang;
    btn.addEventListener('click',()=>{
      const headerBtn=[...document.querySelectorAll('.langs button')].find(b=>b.textContent.trim().toLowerCase()===lang);
      if(headerBtn)headerBtn.click();
      setTimeout(enhanceFooterLanguageSelector,0);
    });
    wrap.appendChild(btn);
  });

  const activeHeader=document.querySelector('.langs button.active');
  if(activeHeader){
    const active=activeHeader.textContent.trim().toLowerCase();
    wrap.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.lang===active));
  }

  current.replaceWith(wrap);
}

const observer=new MutationObserver(()=>enhanceFooterLanguageSelector());
observer.observe(document.documentElement,{childList:true,subtree:true});
window.addEventListener('DOMContentLoaded',enhanceFooterLanguageSelector);
setTimeout(enhanceFooterLanguageSelector,0);
