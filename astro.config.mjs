// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jdnisekosss.com',

  // i18n: ship zh + en for v1. Add 'yue' (Cantonese) or 'ja' later by
  // adding the code here AND creating the matching src/i18n/<code>.json
  // and src/content/pages/<code>/ files. Nothing else needs to change.
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      // zh is the default and lives at "/" (inherits old site's traffic).
      // en lives at "/en/". This keeps Chinese URLs clean for the 301
      // redirects migrating the old site's SEO.
      prefixDefaultLocale: false,
    },
  },
});
