/* Media registry for rebuilt pages. Do not replace approved homepage media.
   Empty video values intentionally preserve the existing image fallback until
   user-supplied photos have been cleared and assembled into licensed videos. */
export const subpageMedia = Object.freeze({
  beautytech: { video: null, poster: null, status: "awaiting-photos" },
  wellness: { video: null, poster: null, status: "awaiting-photos" },
  longevity: { video: null, poster: null, status: "awaiting-photos" },
  // Current video is hosted on the Lovable CDN; replace before detaching Lovable.
  ingredients: { video: "https://d2ol7oe51mr4n9.cloudfront.net/user_3IAvy8LbGnFWbZ9I7IYXDS4wsOc/371a20fb-4453-4d2f-8256-952842b2db99.mp4", poster: null, status: "current-lovable-cdn" },
  products: { video: null, poster: null, status: "awaiting-photos" },
  beautyFinder: { video: null, poster: null, status: "awaiting-photos" },
  nuskin: { video: null, poster: null, status: "awaiting-photos" },
  doterra: { video: null, poster: null, status: "awaiting-photos" },
  magazine: { video: null, poster: null, status: "awaiting-photos" }
});
