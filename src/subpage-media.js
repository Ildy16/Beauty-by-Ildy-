/* Media registry for rebuilt pages. Do not replace approved homepage media.
   Empty video values intentionally preserve the existing image fallback until
   user-supplied photos have been cleared and assembled into licensed videos. */
export const subpageMedia = Object.freeze({
  beautytech: { video: null, poster: null, status: "awaiting-photos" },
  wellness: { video: null, poster: null, status: "awaiting-photos" },
  longevity: { video: null, poster: null, status: "awaiting-photos" },
  ingredients: { video: null, poster: null, status: "awaiting-photos" },
  products: { video: null, poster: null, status: "awaiting-photos" },
  beautyFinder: { video: null, poster: null, status: "awaiting-photos" },
  nuskin: { video: null, poster: null, status: "awaiting-photos" },
  doterra: { video: null, poster: null, status: "awaiting-photos" },
  magazine: { video: null, poster: null, status: "awaiting-photos" }
});
