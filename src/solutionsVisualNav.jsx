import React,{useEffect,useState} from 'react';
import {ArrowRight} from 'lucide-react';

const visualCopy={
  hu:[
    ['Tudatos bőrápolás','Hatóanyagok, formulák és célzott megoldások.','#ingredients','https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/8f9395b6-86de-4be2-87a9-70ae2c61990c.jpg'],
    ['Technológia otthon','LED, RF, lézer, mikroáram és más beauty tech.','#beauty-tech-guide','https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/0203e2ce-86a7-4da2-b45f-b1fb12349321.jpg'],
    ['Belső egyensúly','Wellness, vitalitás és mindennapi jóllét.','#wellness','https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/9689b0cd-b452-44e3-9100-6cc7cbf00708.jpg'],
    ['Healthy aging','Tudatos öregedés, hosszú élet és életminőség.','#longevity','https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/f7890fb7-667b-4401-80ce-f2bf3700cfef.jpg'],
  ],
  en:[
    ['Intentional skincare','Actives, formulas and targeted solutions.','#ingredients','https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/8f9395b6-86de-4be2-87a9-70ae2c61990c.jpg'],
    ['Technology at home','LED, RF, laser, microcurrent and more.','#beauty-tech-guide','https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/0203e2ce-86a7-4da2-b45f-b1fb12349321.jpg'],
    ['Inner balance','Wellness, vitality and everyday wellbeing.','#wellness','https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/9689b0cd-b452-44e3-9100-6cc7cbf00708.jpg'],
    ['Healthy aging','Longevity, aging well and quality of life.','#longevity','https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/f7890fb7-667b-4401-80ce-f2bf3700cfef.jpg'],
  ],
  de:[
    ['Bewusste Hautpflege','Wirkstoffe, Formulierungen und gezielte Lösungen.','#ingredients','https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/8f9395b6-86de-4be2-87a9-70ae2c61990c.jpg'],
    ['Technologie zu Hause','LED, RF, Laser, Mikrostrom und mehr.','#beauty-tech-guide','https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/0203e2ce-86a7-4da2-b45f-b1fb12349321.jpg'],
    ['Innere Balance','Wellness, Vitalität und tägliches Wohlbefinden.','#wellness','https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/9689b0cd-b452-44e3-9100-6cc7cbf00708.jpg'],
    ['Healthy Aging','Longevity, gesundes Altern und Lebensqualität.','#longevity','https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/f7890fb7-667b-4401-80ce-f2bf3700cfef.jpg'],
  ]
};

export function SolutionsVisualNav({lang='hu'}){
  const items=visualCopy[lang]||visualCopy.hu;
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);

  useEffect(()=>{
    if(paused)return;
    const id=window.setInterval(()=>setActive(i=>(i+1)%items.length),4200);
    return()=>window.clearInterval(id);
  },[paused,items.length]);

  return <section className="solutionsVisualNav" aria-label={lang==='hu'?'Megoldások vizuális navigáció':lang==='de'?'Visuelle Navigation Lösungen':'Solutions visual navigation'}>
    <div className="solutionsVisualPanels" onMouseLeave={()=>setPaused(false)}>
      {items.map(([title,desc,href,image],i)=><a
        key={title}
        href={href}
        className={'solutionsVisualPanel '+(active===i?'isActive':'')}
        style={{backgroundImage:`url(${image})`}}
        onMouseEnter={()=>{setActive(i);setPaused(true)}}
        onFocus={()=>{setActive(i);setPaused(true)}}
        onBlur={()=>setPaused(false)}
        aria-label={title}
      >
        <span className="solutionsVisualShade"/>
        <span className="solutionsVisualContent">
          <strong>{title}</strong>
          <small>{desc}</small>
          <span className="solutionsVisualLink">{lang==='hu'?'MEGNÉZEM':lang==='de'?'ANSEHEN':'EXPLORE'} <ArrowRight size={13}/></span>
        </span>
      </a>)}
    </div>
    <div className="solutionsVisualDots" aria-hidden="true">
      {items.map((item,i)=><button key={item[0]} className={active===i?'isActive':''} onClick={()=>setActive(i)} tabIndex="-1"/>) }
    </div>
  </section>;
}
