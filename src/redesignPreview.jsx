import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import "./redesign-preview.css";

const heroImages = [
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1800&q=85"
];

const sectionImages = [
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=1400&q=82"
];

export function RedesignPreview({ t, brands }) {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setHeroIndex((v) => (v + 1) % heroImages.length), 4800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <main className="rpPage">
      <section className="rpHero">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={"rpHeroImage " + (i === heroIndex ? "isActive" : "")}
            style={{ backgroundImage: `linear-gradient(90deg, rgba(6,20,41,.74), rgba(6,20,41,.18)), url("${src}")` }}
          />
        ))}
        <div className="rpHeroInner">
          <p className="rpEyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="rpLead">{t.sub}</p>
          <div className="rpHeroActions">
            <a href="#products">{t.cta}<ArrowRight size={15}/></a>
            <a href="#beauty-finder">{t.finderCta}<ArrowRight size={15}/></a>
          </div>
        </div>
        <div className="rpDots" aria-hidden="true">
          {heroImages.map((_,i)=><span key={i} className={i===heroIndex?"isActive":""}/>)}
        </div>
      </section>

      <section className="rpStatement">
        <p className="rpKicker">{t.choose}</p>
        <div className="rpNeeds">
          {t.needs.slice(0,4).map((n)=><a key={n} href="#products">{n}</a>)}
        </div>
      </section>

      <section className="rpStories">
        {t.pillars.map((p, i) => (
          <article key={p[0]} className={"rpStory rpStory"+i}>
            <div className="rpStoryImage" style={{backgroundImage:`url("${sectionImages[i]}")`}} />
            <div className="rpStoryCopy">
              <p className="rpKicker">{p[0]}</p>
              <h2>{p[1]}</h2>
              <p>{p[2]}</p>
              <a href={i===0?"#ingredients":i===1?"#beauty-tech-guide":"#wellness"}>
                {t.discover}<ArrowRight size={14}/>
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="rpNavy">
        <div className="rpNavyIntro">
          <p className="rpKicker">{t.standards}</p>
          <h2>{t.standardCards[0][0]}</h2>
          <p>{t.standardCards[0][1]}</p>
        </div>
        <div className="rpNavyCards">
          {t.standardCards.slice(1).map((s)=>(
            <article key={s[0]}>
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rpRoutines">
        <div className="rpSectionHead">
          <p className="rpKicker">{t.routines}</p>
          <h2>{t.routineSub}</h2>
        </div>
        <div className="rpRoutineList">
          {t.routineCards.map((r,i)=>(
            <article key={r[0]}>
              <span>0{i+1}</span>
              <div><h3>{r[0]}</h3><p>{r[1]}</p></div>
              <a href="#products">{t.explore}<ArrowRight size={13}/></a>
            </article>
          ))}
        </div>
      </section>

      <section className="rpHair">
        <div className="rpHairPhoto" />
        <div className="rpHairCopy">
          <p className="rpKicker">{t.hairTitle}</p>
          <h2>{t.hairTitle}</h2>
          <p>{t.hairText}</p>
          <a href="#products/hair">{t.discover}<ArrowRight size={14}/></a>
        </div>
      </section>

      <section className="rpBrands">
        <div className="rpSectionHead">
          <p className="rpKicker">{t.brands}</p>
          <h2>{t.brandSub}</h2>
        </div>
        <div className="rpBrandStrip">
          {brands.slice(0,6).map((b)=>(
            <article key={b[0]}>
              <strong>{b[0]}</strong>
              <small>{b[1]}</small>
              <p>{b[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rpMagazine">
        <div className="rpSectionHead light">
          <p className="rpKicker">{t.magTitle}</p>
        </div>
        <div className="rpMagList">
          {t.magCards.map((m, i)=>(
            <article key={m[0]}>
              <div className={"rpMagVisual v"+i}/>
              <div>
                <small>{t.editorial}</small>
                <h3>{m[0]}</h3>
                <p>{m[1]}</p>
                <a href="#magazine">{t.readGuide}<ArrowRight size={13}/></a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
