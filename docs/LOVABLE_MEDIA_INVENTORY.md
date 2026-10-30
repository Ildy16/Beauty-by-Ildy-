# Külső tárhelyről (feltehetően Lovable) betöltött médiák – leltár

Felvétel: 2026-10-30, ág: `claude/zealous-tesla-onovaa`.
Módszer: a teljes `src/`, `index.html` és `public/` átkeresése; HTTP-fejlécek lekérése (`curl -I`); a tárhely letiltása böngészőben (Playwright) a kiesés hatásának méréséhez.

## Eredet

Mind az öt fájl ugyanarról a tárhelyről jön:
`https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/…`
(Amazon S3 + CloudFront, `user_…` feltöltési mappa).

- A fejlécek és a git-előzmény **nem igazolja**, hogy ez a Lovable tárhelye. A hivatkozásokat a tulajdonos GitHub-fiókja vitte be (`86fe0e1`, 2026-10-01; `a6ed016`, 2026-10-03). A feltöltési mappa szerkezete egy AI-szerkesztő (Lovable) feltöltési tárhelyére utal.
- **Helyi másolat egyikről sincs** a repóban. A `public/` mappában csak a `redhair-hero.mp4` (a főoldali videó) van, ami helyben tárolt, tehát nem függ a Lovable-től.

## Fájlok

| # | Fájl | Típus | Méret | Utolsó módosítás | Oldal (komponens) | Kódban |
|---|---|---|---|---|---|---|
| 1 | `8927072e-ebfb-4f0a-84d4-4a644cb8dece.jpg` | image/jpeg | 57 270 B (56 KB) | 2026-10-03 | Megoldások – „Tudatos bőrápolás” panel | `src/solutionsVisualNav.jsx` |
| 2 | `88b8f9d9-ff20-4486-9fd4-9d353462d782.jpg` | image/jpeg | 71 748 B (70 KB) | 2026-10-03 | Megoldások – „Technológia otthon” panel | `src/solutionsVisualNav.jsx` |
| 3 | `694bfd8b-1593-4a01-9cde-db421b4e35ef.jpg` | image/jpeg | 94 421 B (92 KB) | 2026-10-03 | Megoldások – „Belső egyensúly” panel | `src/solutionsVisualNav.jsx` |
| 4 | `f33174ea-e281-4eba-ab17-e86ea151af49.jpg` | image/jpeg | 164 328 B (160 KB) | 2026-10-03 | Megoldások – „Healthy aging” panel | `src/solutionsVisualNav.jsx` |
| 5 | `371a20fb-4453-4d2f-8256-952842b2db99.mp4` | video/mp4 | 2 907 959 B (2,8 MB) | 2026-10-01 | Hatóanyagok – hero háttérvideó | `src/subpage-media.js` (`ingredients.video`) |

Teljes URL-ek: `https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/<fájlnév>`

## Mi történik, ha az URL megszűnik (böngészőben mérve)

- **Megoldások (1–4):** a négy panel képek nélkül, sötétkék háttéren jelenik meg. A címek, leírások és „MEGNÉZEM” linkek olvashatók és működnek, vízszintes túlcsordulás nincs. Az oldal felső része viszont kép nélkül üresnek, kevésbé prémiumnak hat.
- **Hatóanyagok (5):** a videó betöltési hibájakor a hero automatikusan média nélküli állapotra vált (`topicHero isMedialess`). Ilyenkor sötétkék színátmenet jelenik meg az áttetsző hasábbal, a teljes szöveggel és navigációval. Hibás lejátszó vagy üres keret nem marad.

## Tervezett csere (a végleges médiák kiválasztása után, indulás előtti teljes teszt előtt)

- **Hatóanyagok videó:** új, jogtiszta videó → `public/media/` alá vagy saját tárhelyre, majd egyetlen sor módosítása a `src/subpage-media.js`-ben (`ingredients.video`, `ingredients.poster`).
- **Megoldások képek:** a végleges képek → `public/media/solutions/` (WebP, ~1600 px széles), majd a `src/solutionsVisualNav.jsx` `assets` objektumának cseréje. Ajánlott ezeket is a `subpage-media.js` nyilvántartásba áthelyezni.
- Minden új médiánál rögzíteni kell a forrást és a felhasználási jogot.

## Nem Lovable, de külső médiák (tájékoztatásul)

- A Beauty-Tech, Hosszú élet és Jóllét hero képei az `images.unsplash.com` oldalról jönnek.
- 28 termékkép különböző webshopokról töltődik be (`src/products.css`); ezekből 9 jelenleg nem tölt be. Részletes terv: `docs/PRODUCT_IMAGES_PLAN.md` a `0b155dd` commitban.
