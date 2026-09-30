import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import "./redesign-preview.css";

const heroImages = [
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=88",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9aa908?auto=format&fit=crop&w=1800&q=88",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1800&q=88",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1800&q=88"
];

const editorialImage =
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1800&q=86";

export function RedesignPreview({ t }) {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setHeroIndex((value) => (value + 1) % heroImages.length),
      5200,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <main className="studyPage">
      <section className="studyHero">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={"studyHeroBg " + (index === heroIndex ? "isActive" : "")}
            style={{
              backgroundImage:
                `linear-gradient(90deg, rgba(7,23,44,.54), rgba(7,23,44,.08)), url("${src}")`,
            }}
          />
        ))}

        <div className="studyHeroCopy">
          <p className="studyEyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="studyLead">{t.sub}</p>
          <div className="studyActions">
            <a href="#products">{t.cta}<ArrowRight size={14} /></a>
            <a href="#beauty-finder">{t.finderCta}<ArrowRight size={14} /></a>
          </div>
        </div>

        <div className="studyPager" aria-hidden="true">
          {heroImages.map((_, index) => (
            <span key={index} className={index === heroIndex ? "isActive" : ""} />
          ))}
        </div>
      </section>

      <section className="studyEditorial">
        <div className="studyEditorialWhitespace">
          <p className="studyEyebrow">{t.pillars[0][0]}</p>
          <h2>{t.pillars[0][1]}</h2>
        </div>

        <div className="studyEditorialComposition">
          <div
            className="studyEditorialImage"
            style={{ backgroundImage: `url("${editorialImage}")` }}
          />
          <div className="studyEditorialText">
            <p>{t.pillars[0][2]}</p>
            <a href="#ingredients">{t.discover}<ArrowRight size={14} /></a>
          </div>
        </div>
      </section>

      <section className="studyNavy">
        <div className="studyNavyLead">
          <p className="studyEyebrow">{t.standards}</p>
          <h2>{t.standardCards[0][0]}</h2>
          <p>{t.standardCards[0][1]}</p>
        </div>

        <div className="studyNavyRail">
          {t.standardCards.slice(1).map((card, index) => (
            <article key={card[0]}>
              <span>0{index + 2}</span>
              <div>
                <h3>{card[0]}</h3>
                <p>{card[1]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
