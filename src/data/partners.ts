export interface Partner {
  name: string;
  url: string;
  logo?: string;
}

// Mirrors the "合作夥伴" (Partners) section of the old site. Logos pulled
// from public/images/partners/. No booking logic here — just outbound links.
export const partners: Partner[] = [
  { name: 'Jstyle 北海道旅行社', url: 'https://www.jstylehokkaido.co.jp/', logo: '/images/partners/JStyle1.png' },
  { name: 'Aya Niseko', url: 'https://www.ayaniseko.com/', logo: '/images/partners/Aya-Niseko.png' },
  { name: 'Sansui Niseko', url: 'https://sansuiniseko.com/ja/', logo: '/images/partners/Sansui_Niseko4.png' },
  { name: 'Setsu Niseko', url: 'https://setsuniseko.com/ja/', logo: '/images/partners/setsu.png' },
  { name: 'Chalet IVY Hirafu', url: 'https://chaletivy.com/hirafu/', logo: '/images/partners/Chalet-IVY.png' },
  { name: 'H2 Group', url: 'https://www.h2life.com/jp/', logo: '/images/partners/H2.png' },
  { name: 'Park Hyatt Niseko', url: 'https://www.hyatt.com/ja-JP/hotel/japan/park-hyatt-niseko-hanazono/ctsph', logo: '/images/partners/Park-Hyatt-Niseko5.png' },
  { name: 'Muwa Niseko', url: 'https://www.muwaniseko.com/', logo: '/images/partners/Muwa.png' },
  { name: 'Yu Kiroro', url: 'https://yukiroro.com/', logo: '/images/partners/Yu-Kiroro.png' },
  { name: 'Wheels Transfers Hokkaido', url: 'https://wheelshokkaido.com/', logo: '/images/partners/WheelsTransfersHokkaido.png' },
  { name: 'Rhythm Niseko', url: 'https://www.rhythmjapan.com/', logo: '/images/partners/Rhythm-Niseko.png' },
  { name: 'Raku Snow', url: 'https://rakuoutdoor.com/rental/', logo: '/images/partners/Raku.png' },
  { name: 'JOI (CASI 課程供應商)', url: 'https://japanoutdoorinstitute.com/zh-hant/', logo: '/images/partners/joi.png' },
  { name: '北海道國際滑雪學校', url: 'https://jhiss.com/', logo: '/images/partners/jhiss.png' },
];

export interface LiftStatusLink {
  name: string;
  url: string;
}

export const liftStatusLinks: LiftStatusLink[] = [
  { name: 'Niseko United', url: 'https://www.niseko.ne.jp/en/niseko-lift-status/' },
  { name: 'Rusutsu', url: 'https://rusutsu.com/lift-and-trail-status/' },
  { name: 'Kiroro', url: 'https://www.kiroro.co.jp/ja/dashboard/#course-anim-map' },
];
