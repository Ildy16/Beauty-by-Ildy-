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
  videoSrc=null,
  videoPoster=null,
  items=[],
  ariaLabel="Témák"
}){
  const [active,setActive]=useState(0);
  const [videoFailed,setVideoFailed]=useState(false);
  const [reduceMotion,setReduceMotion]=useState(false);
  useEffect(()=>{
    const query=window.matchMedia("(prefers-reduced-motion: reduce)");
    const update=()=>setReduceMotion(query.matches);
    update();
    query.addEventListener?.("change",update);
    return()=>query.removeEventListener?.("change",update);
  },[]);
  const showVideo=Boolean(videoSrc)&&!videoFailed&&!reduceMotion;
  useEffect(()=>setVideoFailed(false),[videoSrc]);
  useEffect(()=>{
    if(showVideo||reduceMotion||images.length<2)return;
    const id=window.setInterval(()=>setActive(v=>(v+1)%images.length),5200);
    return()=>window.clearInterval(id);
  },[images.length,showVideo,reduceMotion]);

  return <section className="topicHero">
    {showVideo&&<video className="topicHeroVideo" autoPlay muted loop playsInline preload="metadata" poster={videoPoster||images[0]||undefined} aria-hidden="true" onError={()=>setVideoFailed(true)}>
      <source src={videoSrc} type="video/mp4" onError={()=>setVideoFailed(true)}/>
    </video>}
    <div className="topicHeroSlides" aria-hidden="true">
      {images.map((src,i)=><div
        key={src}
        className={"topicHeroSlide "+(!showVideo&&i===active?"isActive":"")}
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

    {!showVideo&&!reduceMotion&&images.length>1&&<div className="topicHeroDots" aria-hidden="true">
      {images.map((_,i)=><span key={i} className={i===active?"isActive":""}/>)}
    </div>}
  </section>;
}
