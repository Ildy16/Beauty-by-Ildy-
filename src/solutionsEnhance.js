import './solutionsEnhance.css';

const assets={
  skincare:'https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/8927072e-ebfb-4f0a-84d4-4a644cb8dece.jpg',
  tech:'https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/88b8f9d9-ff20-4486-9fd4-9d353462d782.jpg',
  wellness:'https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/694bfd8b-1593-4a01-9cde-db421b4e35ef.jpg',
  longevity:'https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/f33174ea-e281-4eba-ab17-e86ea151af49.jpg'
};

const copy={
  hu:[
    ['Tudatos bőrápolás','Hatóanyagok, formulák és célzott megoldások.','#ingredients',assets.skincare],
    ['Technológia otthon','LED, RF, lézer, mikroáram és más beauty tech.','#beauty-tech-guide',assets.tech],
    ['Belső egyensúly','Wellness, vitalitás és mindennapi jóllét.','#wellness',assets.wellness],
    ['Healthy aging','Tudatos öregedés, hosszú élet és életminőség.','#longevity',assets.longevity]
  ],
  en:[
    ['Intentional skincare','Actives, formulas and targeted solutions.','#ingredients',assets.skincare],
    ['Technology at home','LED, RF, laser, microcurrent and more.','#beauty-tech-guide',assets.tech],
    ['Inner balance','Wellness, vitality and everyday wellbeing.','#wellness',assets.wellness],
    ['Healthy aging','Longevity, aging well and quality of life.','#longevity',assets.longevity]
  ],
  de:[
    ['Bewusste Hautpflege','Wirkstoffe, Formulierungen und gezielte Lösungen.','#ingredients',assets.skincare],
    ['Technologie zu Hause','LED, RF, Laser, Mikrostrom und mehr.','#beauty-tech-guide',assets.tech],
    ['Innere Balance','Wellness, Vitalität und tägliches Wohlbefinden.','#wellness',assets.wellness],
    ['Healthy Aging','Longevity, gesundes Altern und Lebensqualität.','#longevity',assets.longevity]
  ]
};

let timer=null;
let active=0;
let lastLang='';

function labelFor(lang){return lang==='de'?'ANSEHEN':lang==='en'?'EXPLORE':'MEGNÉZEM'}

function mount(){
  if(!location.hash.startsWith('#solutions'))return;
  const page=document.querySelector('.solutionsPage');
  if(!page)return;
  const lang=document.documentElement.lang||'hu';
  const existing=page.querySelector('.solutionsVisualNav');
  if(existing&&lastLang===lang)return;
  if(existing)existing.remove();
  lastLang=lang;
  active=0;
  const items=copy[lang]||copy.hu;
  const section=document.createElement('section');
  section.className='solutionsVisualNav';
  section.setAttribute('aria-label',lang==='de'?'Visuelle Navigation Lösungen':lang==='en'?'Solutions visual navigation':'Megoldások vizuális navigáció');
  const panels=document.createElement('div');
  panels.className='solutionsVisualPanels';
  items.forEach(([title,desc,href,image],i)=>{
    const a=document.createElement('a');
    a.href=href;
    a.className='solutionsVisualPanel'+(i===0?' isActive':'');
    a.style.backgroundImage=`url("${image}")`;
    a.innerHTML=`<span class="solutionsVisualShade"></span><span class="solutionsVisualContent"><strong>${title}</strong><small>${desc}</small><span class="solutionsVisualLink">${labelFor(lang)} <span aria-hidden="true">→</span></span></span>`;
    a.addEventListener('mouseenter',()=>{active=i;update();pause()});
    a.addEventListener('focus',()=>{active=i;update();pause()});
    a.addEventListener('mouseleave',resume);
    a.addEventListener('blur',resume);
    panels.appendChild(a);
  });
  section.appendChild(panels);
  page.prepend(section);
  function update(){[...panels.children].forEach((el,i)=>el.classList.toggle('isActive',i===active))}
  function pause(){if(timer){clearInterval(timer);timer=null}}
  function resume(){if(timer)return;timer=setInterval(()=>{active=(active+1)%items.length;update()},4300)}
  window.__solutionsResume=resume;
  window.__solutionsPause=pause;
  resume();
}

function cleanup(){
  if(timer){clearInterval(timer);timer=null}
}

window.addEventListener('hashchange',()=>{cleanup();requestAnimationFrame(()=>requestAnimationFrame(mount))});
const observer=new MutationObserver(()=>requestAnimationFrame(mount));
observer.observe(document.getElementById('root'),{childList:true,subtree:true});
requestAnimationFrame(()=>requestAnimationFrame(mount));
