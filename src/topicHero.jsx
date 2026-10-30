import React,{useEffect,useState} from "react";
import {ArrowLeft,ArrowRight} from "lucide-react";
import "./topicHero.css";

function usePrefersReducedMotion(){
  const [reduce,setReduce]=useState(false);
  useEffect(()=>{
    const query=window.matchMedia("(prefers-reduced-motion: reduce)");
    const update=()=>setReduce(query.matches);
    update();
    query.addEventListener?.("change",update);
    return()=>query.removeEventListener?.("change",update);
  },[]);
  return reduce;
}

// Media comes from src/subpage-media.js (videoSrc/videoPoster) or the page's
// own images, so it can be replaced without touching the rail content.
export function TopicHero({
  eyebrow,
  title,
  lead,
  note,
  backLabel,
  backHref="#top",
  images=[],
  videoSrc=null,
  videoPoster=null,
  items=[],
  ariaLabel="Témák",
  navSize="regular",
  children
}){
  const [active,setActive]=useState(0);
  const [videoFailed,setVideoFailed]=useState(false);
  const reduceMotion=usePrefersReducedMotion();
  const showVideo=Boolean(videoSrc)&&!videoFailed&&!reduceMotion;
  useEffect(()=>setVideoFailed(false),[videoSrc]);
  useEffect(()=>{
    if(showVideo||reduceMotion||images.length<2)return;
    let id;
    const stop=()=>{if(id){window.clearInterval(id);id=undefined;}};
    const sync=()=>{
      stop();
      if(!document.hidden)id=window.setInterval(()=>setActive(v=>(v+1)%images.length),6500);
    };
    sync();
    document.addEventListener("visibilitychange",sync);
    return()=>{
      stop();
      document.removeEventListener("visibilitychange",sync);
    };
  },[images.length,showVideo,reduceMotion]);

  return <section className="topicHero" aria-label={title}>
    {showVideo&&<>
      <video className="topicHeroVideo" autoPlay muted loop playsInline preload="metadata" poster={videoPoster||images[0]||undefined} aria-hidden="true" onError={()=>setVideoFailed(true)}>
        <source src={videoSrc} type="video/mp4" onError={()=>setVideoFailed(true)}/>
      </video>
      <div className="topicHeroVideoShade" aria-hidden="true"/>
    </>}
    {images.length>0&&<div className="topicHeroSlides" aria-hidden="true">
      {images.map((src,i)=><div
        key={src}
        className={"topicHeroSlide "+(!showVideo&&i===active?"isActive":"")}
        style={{backgroundImage:`linear-gradient(90deg,rgba(6,24,49,.18),rgba(6,24,49,.04)),url("${src}")`}}
      />)}
    </div>}

    <div className="topicHeroRail">
      <a className="topicHeroBack" href={backHref}><ArrowLeft size={14}/>{backLabel}</a>
      <p className="topicHeroEyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {lead&&<p className="topicHeroLead">{lead}</p>}
      {note&&<p className="topicHeroNote">{note}</p>}
      {items.length>0&&<nav className={"topicHeroNav"+(navSize==="compact"?" isCompact":"")} aria-label={ariaLabel}>
        {items.map(item=><a key={item.href} href={item.href} onClick={item.onClick}>
          <span>{item.label}</span><ArrowRight size={14}/>
        </a>)}
      </nav>}
      {children}
    </div>

    {!showVideo&&images.length>1&&<div className="topicHeroDots" aria-hidden="true">
      {images.map((_,i)=><span key={i} className={i===active?"isActive":""}/>)}
    </div>}
  </section>;
}
