# JD Niseko Website

Static marketing site for JD Ski Snowboard School, built with [Astro](https://astro.build).
Bilingual (中文 / English), expandable to Cantonese & Japanese. Hands off booking
to RoomBoss — no on-site inventory or payment.

## Quick start
```bash
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # static output -> dist/
```

## Structure
```
src/
  content/
    config.ts            # lesson schema (the data model)
    lessons/zh/*.md      # Chinese lesson entries
    lessons/en/*.md      # English lesson entries (mirror of zh)
  i18n/
    zh.json, en.json     # UI strings
    utils.ts             # translator + path helpers
  layouts/Base.astro     # shared shell, header, lang switch, hreflang
  components/
    LessonCard.astro     # lesson display + RoomBoss booking handoff
  pages/
    index.astro          # zh homepage (default locale, served at /)
    lessons.astro        # zh lessons
    en/                  # English pages (served at /en/)
public/
  _redirects             # 301s for SEO migration from old site
  images/                # lesson images
CLAUDE.md                # read this — how to maintain the site
```

## Maintaining
See `CLAUDE.md`. Most edits are content-only (markdown frontmatter), no code
needed. For non-technical staff edits later, consider adding a headless CMS
(Sanity/Strapi) on top of this same content model.

## Deploy
Connect the repo to Netlify or Vercel. Build command `npm run build`, publish
directory `dist`. Pushes to main auto-deploy.
