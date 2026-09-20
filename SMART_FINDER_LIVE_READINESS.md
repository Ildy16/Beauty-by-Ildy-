# Beauty by Ildy — Smart Finder live-readiness checklist

Status: **PREVIEW-READY CANDIDATE, NOT APPROVED FOR PRODUCTION YET**

## Already implemented
- Smart Finder HU / EN / DE
- Skin, hair and device routes
- Wellness route is enabled and remains part of the four public Finder journeys
- Safety Gate, recovery-only mode and explainability
- Routine builder: base / targeted / optional extra
- Brand-diverse alternatives
- Quick comparison
- Mobile step flow and swipe result cards
- Accessibility improvements
- Product/catalog integrity checks
- Finder engine + UI structure tests, including guards that keep all four journeys and the full product catalog available

## Partner/compliance review
### Neumi
Current implementation intentionally keeps all 8 Neumi products in the multi-brand Beauty by Ildy catalog and Smart Finder, with purchases routed to the verified personal Neumi shopping page.

Written Neumi Compliance approval has been requested for this exact multi-brand setup. While awaiting the response, development continues with all 8 Neumi products retained and the external Neumi checkout route preserved.

### Nu Skin
Do not activate Nu Skin product/business integration until:
1. Brand Affiliate status is restored;
2. the official personal shopping/sharing route is confirmed;
3. current EMEA/Hungary internet/social-sharing rules are checked against the intended implementation.

## Required before production
1. Run `npm run build`.
2. Run `npm run test:finder`.
3. Open a real preview deployment.
4. Desktop visual QA: header, Finder flow, product detail routes, results.
5. Mobile visual QA: iPhone-width screens, sticky controls, swipe cards, safe areas.
6. Test HU / EN / DE end-to-end.
7. Test representative safety scenarios:
   - retinoid + sensitive skin
   - irritation + prescription treatment
   - pregnancy + retinoid
   - pigmentation + no SPF
   - under-18 wellness
   - caffeine avoidance
8. Confirm no production-only analytics collect health-sensitive Finder answers.
9. Recheck current partner/compliance rules against the intended public implementation.
10. Only then consider merge/push to `main`.

## Production rule
No merge or deployment to `main` without explicit approval.


## Vercel preview trigger

Recovery-branch preview validation trigger after reconnecting the dedicated Vercel recovery project. This note does not authorize production deployment or changes to `main`.
