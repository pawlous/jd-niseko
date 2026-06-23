# JD Niseko — project guide for Claude Code

This is the static marketing site for JD Ski Snowboard School (JDsss), a Niseko
United–certified snowsports school. Built with **Astro**. The site holds **no
booking inventory** — it markets lessons and hands visitors off to RoomBoss's
hosted booking flow. RoomBoss owns availability, payment, and the coach calendar.

## The one rule that explains the architecture
We do NOT integrate RoomBoss or Square via API. Each lesson has a `roombossUrl`
that links out to RoomBoss's booking page. This keeps the site static, fast, and
maintenance-light, and means there's no oversell risk or payment-consistency
problem to manage. If someone asks to "add real-time availability" or "take
payment on-site," that's a v2 custom-integration project — flag it, don't quietly
build it.

## How to do the common tasks

**Add or edit a lesson** → edit/create markdown in `src/content/lessons/zh/`
AND `src/content/lessons/en/` (one file per language, same filename). The schema
is in `src/content/config.ts`. Both language files must exist or the listing
will be uneven across locales.

**Change a price or date** → edit the frontmatter (`priceFrom`, `availableFrom`,
etc.) in both language files for that lesson. Prices are strings like "¥77,000"
so they display exactly.

**Update UI text (buttons, nav)** → `src/i18n/zh.json` and `src/i18n/en.json`.
Keys must match across both files.

**Add a language (e.g. Cantonese `yue` or Japanese `ja`)** →
1. add the code to `i18n.locales` in `astro.config.mjs`
2. add it to `locales` in `src/i18n/utils.ts`
3. create `src/i18n/<code>.json` (copy en.json, translate)
4. create `src/content/lessons/<code>/` with translated lesson files
5. create `src/pages/<code>/` pages (copy from `src/pages/en/`)

**The booking handoff** lives in `src/components/LessonCard.astro`. The "Book"
button uses each lesson's `roombossUrl`. B2B/trade lessons (`tradeEnquiryOnly:
true`) show a contact link instead of the booking button.

## Things to verify manually (Claude Code can't test these)
- That each `roombossUrl` actually resolves to a working RoomBoss booking page.
  RoomBoss URLs/products change each season — re-check before each season opens.
- That RoomBoss's hosted checkout supports the languages we advertise
  (Mandarin/Cantonese matter most for JD's audience).

## Deploy
Git push → Netlify/Vercel auto-builds. `npm run build` produces static output in
`dist/`. There is no server to run in production.

## Migration note (SEO)
The old Chinese site's traffic is being inherited. zh is the default locale and
lives at `/` (no prefix) on purpose, to preserve URL structure. 301 redirects
from old URLs go in `public/_redirects` (Netlify) — keep these when restructuring.
