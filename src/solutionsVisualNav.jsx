import React, { useEffect, useRef, useState } from "react";
import "./solutionsVisualNav.css";

const assets = {
  skincare: "https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/8927072e-ebfb-4f0a-84d4-4a644cb8dece.jpg",
  tech: "https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/88b8f9d9-ff20-4486-9fd4-9d353462d782.jpg",
  wellness: "https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/694bfd8b-1593-4a01-9cde-db421b4e35ef.jpg",
  longevity: "https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/f33174ea-e281-4eba-ab17-e86ea151af49.jpg",
};

const copy = {
  hu: {
    label: "MEGNÉZEM",
    aria: "Megoldások vizuális navigáció",
    items: [
      ["Tudatos bőrápolás", "Hatóanyagok, formulák és célzott megoldások.", "#ingredients", assets.skincare],
      ["Technológia otthon", "LED, RF, lézer, mikroáram és más beauty tech.", "#beauty-tech-guide", assets.tech],
      ["Belső egyensúly", "Wellness, vitalitás és mindennapi jóllét.", "#wellness", assets.wellness],
      ["Healthy aging", "Tudatos öregedés, hosszú élet és életminőség.", "#longevity", assets.longevity],
    ],
  },
  en: {
    label: "EXPLORE",
    aria: "Solutions visual navigation",
    items: [
      ["Intentional skincare", "Actives, formulas and targeted solutions.", "#ingredients", assets.skincare],
      ["Technology at home", "LED, RF, laser, microcurrent and more.", "#beauty-tech-guide", assets.tech],
      ["Inner balance", "Wellness, vitality and everyday wellbeing.", "#wellness", assets.wellness],
      ["Healthy aging", "Longevity, aging well and quality of life.", "#longevity", assets.longevity],
    ],
  },
  de: {
    label: "ANSEHEN",
    aria: "Visuelle Navigation Lösungen",
    items: [
      ["Bewusste Hautpflege", "Wirkstoffe, Formulierungen und gezielte Lösungen.", "#ingredients", assets.skincare],
      ["Technologie zu Hause", "LED, RF, Laser, Mikrostrom und mehr.", "#beauty-tech-guide", assets.tech],
      ["Innere Balance", "Wellness, Vitalität und tägliches Wohlbefinden.", "#wellness", assets.wellness],
      ["Healthy Aging", "Longevity, gesundes Altern und Lebensqualität.", "#longevity", assets.longevity],
    ],
  },
};

const ROTATE_MS = 4300;

// Four image panels at the top of the Solutions page. The active panel
// widens on desktop and cross-fades on mobile; rotation pauses on hover,
// keyboard focus, hidden tabs and for visitors who prefer reduced motion.
export function SolutionsVisualNav({ lang = "hu" }) {
  const t = copy[lang] || copy.hu;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (paused || reduceMotion.current) return undefined;
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setActive((i) => (i + 1) % t.items.length);
      }
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused, t.items.length]);

  const focusPanel = (i) => {
    setActive(i);
    setPaused(true);
  };

  return (
    <section className="solutionsVisualNav" aria-label={t.aria}>
      <div className="solutionsVisualPanels">
        {t.items.map(([title, desc, href, image], i) => (
          <a
            key={href}
            href={href}
            className={"solutionsVisualPanel" + (i === active ? " isActive" : "")}
            style={{ backgroundImage: `url("${image}")` }}
            onMouseEnter={() => focusPanel(i)}
            onFocus={() => focusPanel(i)}
            onMouseLeave={() => setPaused(false)}
            onBlur={() => setPaused(false)}
          >
            <span className="solutionsVisualShade" />
            <span className="solutionsVisualContent">
              <strong>{title}</strong>
              <small>{desc}</small>
              <span className="solutionsVisualLink">
                {t.label} <span aria-hidden="true">→</span>
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
