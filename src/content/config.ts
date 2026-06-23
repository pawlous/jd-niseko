import { defineCollection, z } from 'astro:content';

/**
 * LESSONS — the core product.
 *
 * Each lesson is a content file. Pricing/dates/description live here so they
 * can be edited without touching layout code. The `roombossUrl` is the
 * handoff: clicking "Book" sends the visitor to RoomBoss's hosted booking
 * flow. We hold NO inventory — RoomBoss owns availability, payment, and the
 * coach calendar. That's the whole point of the static approach.
 *
 * When you move to a headless CMS (Sanity/Strapi) later, this schema is the
 * shape you replicate there. Keep them matched.
 */
const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    // Display
    title: z.string(),
    summary: z.string(),
    order: z.number().default(0), // controls display order on listing page

    // Categorisation
    discipline: z.enum(['ski', 'snowboard', 'both', 'other']),
    season: z.enum(['winter', 'summer']).default('winter'),
    audience: z.enum(['private', 'group']).default('private'),

    // Pricing — string so you can show "¥77,000~" exactly as the brand does.
    // Currency is JPY; if you ever show converted prices, do it client-side
    // at display time, never store a second currency here.
    priceFrom: z.string(),          // e.g. "¥77,000"
    priceNote: z.string().optional(), // e.g. "per group, up to 3 people"
    durationLabel: z.string(),       // e.g. "Full day (6h)" / "全日（6小時）"

    // Availability window (informational on the marketing site only —
    // RoomBoss is the source of truth for actual bookable slots)
    availableFrom: z.string().optional(), // "2026-12-01"
    availableTo: z.string().optional(),

    // THE HANDOFF. This is the only integration point in the whole site.
    // Verify this link works on RoomBoss's side each season. Optional because
    // some lessons (VIP, SUP, cycling, CASI) are quote/contact-only and have
    // no self-serve RoomBoss product yet.
    roombossUrl: z.string().url().optional(),

    // B2B vs B2C: consumer bookings go straight to roombossUrl; agency/hotel
    // bookings often don't self-serve. If true, also show a "contact for
    // trade rates" path instead of only the consumer button.
    tradeEnquiryOnly: z.boolean().default(false),

    // Media
    image: z.string().optional(), // path under /public/images/

    // Marketing attribution helper: tag lessons that a YouTube video drives
    // traffic to, so UTM links can be built consistently. Optional.
    campaignTag: z.string().optional(),
  }),
});

/**
 * INSTRUCTORS — team bios shown on the "team" section of the homepage.
 * One markdown file per instructor per locale, body = bio text.
 */
const instructors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(), // e.g. "執行長" / "資深滑雪教練"
    order: z.number().default(0),
    photo: z.string().optional(), // path under /public/images/coaches/
    certificates: z.array(z.string()).default([]), // e.g. ["CASI 2", "CSIA 1"]
  }),
});

export const collections = { lessons, instructors };
