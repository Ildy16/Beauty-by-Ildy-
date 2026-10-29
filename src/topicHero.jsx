import React,{useEffect,useState} from "react";
import {ArrowLeft,ArrowRight} from "lucide-react";
import "./topicHero.css";

export function TopicHero({
  eyebrow,
  title,
  lead,
  backLabel,
  backHref="#top",
  images=[],
  items=[],
  ariaLabel="Témák"
}){
  const [active,setActive]=useState(0);
  useEffect(()=>{
    if(images.length<2)return;
    const motion=window.matchMedia("(prefers-reduced-motion: reduce)");
    let id;
    const stop=()=>{if(id){window.clearInterval(id);id=undefined;}};
    const sync=()=>{
      stop();
      if(!motion.matches && !document.hidden){
        id=window.setInterval(()=>setActive(v=>(v+1)%images.length),6500);
      }
    };
    sync();
    document.addEventListener("visibilitychange",sync);
    motion.addEventListener?.("change",sync);
    return()=>{
      stop();
      document.removeEventListener("visibilitychange",sync);
      motion.removeEventListener?.("change",sync);
    };
  },[images.length]);

  return <section className="topicHero" aria-label={title}>
    <div className="topicHeroSlides" aria-hidden="true">
      {images.map((src,i)=><div
        key={src}
        className={"topicHeroSlide "+(i===active?"isActive":"")}
        style={{backgroundImage:`linear-gradient(90deg,rgba(6,24,49,.18),rgba(6,24,49,.04)),url("${src}")`}}
      />)}
    </div>

    <div className="topicHeroRail">
      <a className="topicHeroBack" href={backHref}><ArrowLeft size={14}/>{backLabel}</a>
      <p className="topicHeroEyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {lead&&<p className="topicHeroLead">{lead}</p>}
      <nav className="topicHeroNav" aria-label={ariaLabel}>
        {items.map(item=><a key={item.label} href={item.href}>
          <span>{item.label}</span><ArrowRight size={14}/>
        </a>)}
      </nav>
    </div>

    <div className="topicHeroDots" aria-hidden="true">
      {images.map((_,i)=><span key={i} className={i===active?"isActive":""}/>)}
    </div>
  </section>;
}
