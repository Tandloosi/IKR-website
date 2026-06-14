import { CASE_CHANNEL_VIDEOS, CASE_GRID_PREVIEW, VIDEO_PATHS } from './videos'

// ─── Overview grid (cases met detailpagina) ───────────────────────────────────

export type CaseGridItem = {
  id: string
  slug: string
  clientName: string
  video: string
  logo?: string
}

export const caseGridItems: CaseGridItem[] = [
  {
    id: 'tempus',
    slug: 'tempus',
    clientName: 'Tempus',
    video: CASE_GRID_PREVIEW.tempus,
    logo: '/images/client_logos/tempus logo.png',
  },
  {
    id: 'maison-slash',
    slug: 'maison-slash',
    clientName: 'Maison Slash',
    video: CASE_GRID_PREVIEW.maisonSlash,
  },
  {
    id: 'anneke-govaerts',
    slug: 'anneke-govaerts',
    clientName: 'Anneke Govaerts',
    video: CASE_GRID_PREVIEW.annekeGovaerts,
  },
]

// ─── Food werk (influencer-opdrachten, geen detailpagina) ─────────────────────

export type FoodWorkItem = {
  id: string
  clientName: string
  video: string
  views: string
  highlight: string
  logo?: string
}

/** Influencer-opdrachten binnen food — tonen als werk, geen volledige case study. */
export const foodWorkItems: FoodWorkItem[] = [
  {
    id: 'aiki',
    clientName: 'Aïki',
    video: VIDEO_PATHS.foodWorkAiki,
    views: '50K',
    highlight: 'Grootste noodlemerk van België — 1.500+ likes',
  },
  {
    id: 'otacos',
    clientName: "O'Tacos",
    video: VIDEO_PATHS.foodWorkOtacos,
    views: '16K',
    highlight: 'Fastfoodketen — 16K+ organische views',
  },
  {
    id: 'panos',
    clientName: 'Panos',
    video: VIDEO_PATHS.foodWorkPanos,
    views: '—',
    highlight: 'Bakkerijketen — influencer-opdracht',
  },
]

// ─── Case detail ─────────────────────────────────────────────────────────────

export type CaseDetailVideo = {
  src: string
  stat: string
  tiktokUrl?: string
}

export type CaseDetailStoryBlock = {
  title: string
  body: string
  image?: string
}

export type CaseDetail = {
  slug: string
  bedrijf: string
  logo?: string
  tags: string[]
  heroImage: string
  outcomeLine?: string
  summary: string[]
  results: { label: string; value: string }[]
  videos: CaseDetailVideo[]
  story: CaseDetailStoryBlock[]
  testimonial: {
    name: string
    role: string
    quote: string
  }
}

/** Baseplate — kopieer en pas aan per klant (niet live op de site). */
export const caseDetailTemplate: CaseDetail = {
  slug: 'template',
  bedrijf: '{bedrijf}',
  logo: '/images/client_logos/wasbar logo2.jpg',
  tags: ['Social Media', '{jaar}'],
  heroImage: '/images/freelancer-cta.jpg',
  outcomeLine: '{bedrijf} groeide naar {views} views in {periode}',
  summary: [
    '{bedrijf} wilde meer zichtbaarheid op TikTok bij een jongere doelgroep, maar miste de tijd en expertise om consistente content te maken.',
    'IKnowRight ontwikkelde een contentstrategie op maat, kwam op locatie filmen en leverde scroll-stoppende video\'s die pasten bij het merk van {bedrijf}.',
    'Het resultaat: meetbaar meer bereik, hogere engagement en een social feed waar {bedrijf} trots op is.',
  ],
  results: [
    { label: 'Views', value: '{views}' },
    { label: 'Engagement', value: '{engagement}' },
    { label: 'Volgers', value: '{volgers}' },
    { label: 'Video\'s', value: '{aantal}' },
  ],
  videos: [
    { src: VIDEO_PATHS.wasbarTiktok, stat: '33K' },
    { src: VIDEO_PATHS.puretoTheelepels, stat: '1.9M' },
    { src: VIDEO_PATHS.ikrShowcase2, stat: '78K' },
    { src: VIDEO_PATHS.puretoBrandoefening, stat: '12K' },
  ],
  story: [
    {
      title: 'DE UITDAGING',
      body: '{bedrijf} had een sterk product, maar hun social media bereikte niet de doelgroep die ze wilde aanspreken. Bestaande content voelde te gepolijst en haakte niet op TikTok.',
      image: '/images/contact-team.jpg',
    },
    {
      title: 'ONZE AANPAK VOOR {bedrijf}',
      body: 'We startten met een intake om het merk en de doelen van {bedrijf} te begrijpen. Daarna ontwikkelden we een contentkalender met formats die bewezen werken — en gingen op locatie filmen met een creator die het merk begrijpt.',
    },
  ],
  testimonial: {
    name: '{naam}',
    role: '{functie} — {bedrijf}',
    quote:
      'Ik ben super tevreden over de groei van mijn sociale media dankzij IKnowRight! {bedrijf} ziet eindelijk resultaat op TikTok.',
  },
}

/** Bron: https://iknowright.be/cases/tempus */
export const caseDetailTempus: CaseDetail = {
  slug: 'tempus',
  bedrijf: 'Tempus',
  logo: '/images/client_logos/tempus logo.png',
  tags: ['HR Marketing', 'TikTok'],
  heroImage: '/images/cases/tempus/hero.jpg',
  outcomeLine: '650.000+ unieke kijkers in de eerste vier maanden',
  summary: [
    'Tempus Thuisverpleging werkt al bijna een jaar op vaste basis met IKnowRight. Hun grootste uitdaging: zoveel mogelijk jonge verpleegkundigen aantrekken via TikTok — HR-marketing, geen productpromo.',
    'We maakten content die jonge zorgprofessionals aanspreekt: herkenbare situaties, authentieke formats en een consistente aanwezigheid op @tempusverpleging.',
    'Het resultaat: massaal bereik, gesprekken op jobbeurzen en video\'s die niet alleen views opleveren, maar ook concrete websitebezoeken.',
  ],
  results: [
    { label: 'Unieke kijkers', value: '650K+' },
    { label: 'Gem. views/video', value: '25K' },
    { label: 'Topvideo views', value: '142K' },
    { label: 'Websitebezoeken', value: '90+' },
  ],
  videos: [...CASE_CHANNEL_VIDEOS.tempus],
  story: [
    {
      title: 'DE UITDAGING',
      body: 'Tempus moest opvallen in een krappe arbeidsmarkt voor verpleegkundigen. Klassieke jobposts bereikten de jonge doelgroep niet — ze zitten op TikTok, niet op vacaturesites.',
      image: '/images/cases/tempus/story-challenge.jpg',
    },
    {
      title: 'ONZE AANPAK VOOR TEMPUS',
      body: 'We bouwden een contentlijn rond HR-marketing: video\'s die het werk bij Tempus tonen zoals jonge verpleegkundigen het beleven. Consistente output, formats die delen stimuleren, en metrics die verder gaan dan likes — zoals websitebezoeken en gesprekken op jobbeurzen.',
      image: '/images/cases/tempus/story-approach.jpg',
    },
  ],
  testimonial: {
    name: 'Tempus',
    role: 'Thuisverpleging',
    quote:
      'Op jobbeurzen voor verpleegkundigen is Tempus hét bedrijf waar jonge verpleegkundigen vandaag de dag het meeste over praten.',
  },
}

/** Bron: https://iknowright.be/cases/maison-slash */
export const caseDetailMaisonSlash: CaseDetail = {
  slug: 'maison-slash',
  bedrijf: 'Maison Slash',
  tags: ['Media', 'TikTok', 'Ouderschap'],
  heroImage:
    'https://iknowright.be/wp-content/uploads/2025/11/8413f8bc-e817-4357-9da3-e9970562e494-1024x427.jpeg',
  outcomeLine: '170K+ organische views op topvideo — na één maand',
  summary: [
    'Maison Slash België verkoopt magazines voor ouders. Hun doel op TikTok: ouders aanspreken met content die herkenbaar en deelbaar is.',
    'Het account bestond al, maar de cijfers explodeerden pas toen IKnowRight erbij kwam. Na slechts één maand lieten we een video organisch viraal gaan.',
    'Het resultaat: een account dat plots relevant werd voor hun doelgroep — met een virale hit die het merk op de kaart zette bij jonge ouders.',
  ],
  results: [
    { label: 'Topvideo', value: '170K' },
    { label: 'Video views', value: '+28.000%' },
    { label: 'Likes', value: '+96.000%' },
    { label: 'Shares', value: '+749.000%' },
  ],
  videos: [...CASE_CHANNEL_VIDEOS.maisonSlash],
  story: [
    {
      title: 'DE UITDAGING',
      body: 'Maison Slash had een TikTok-account, maar het bereikte niet de jonge ouder-doelgroep op schaal. Ze zochten content die past bij een magazine-merk zonder corporate te voelen.',
      image: '/images/contact-team.jpg',
    },
    {
      title: 'ONZE AANPAK VOOR MAISON SLASH',
      body: 'We maakten scroll-stoppende video\'s voor @maisonslashbelgie — formats die ouders herkennen en delen. Binnen een maand ging een video organisch viraal met meer dan 170.000 weergaven. De groei kwam vooral door die hit, maar die video hebben we zelf gemaakt en gelanceerd.',
    },
  ],
  testimonial: {
    name: 'Maison Slash',
    role: 'Magazines voor ouders',
    quote:
      'Ons TikTok-account bestond al — maar onze cijfers explodeerden pas met IKnowRight. Eén video ging viraal en zette alles in beweging.',
  },
}

/** Bron: https://iknowright.be/cases/anneke-govaerts */
export const caseDetailAnnekeGovaerts: CaseDetail = {
  slug: 'anneke-govaerts',
  bedrijf: 'Anneke Govaerts',
  tags: ['Healthcare', 'TikTok', 'Awareness'],
  heroImage: '/images/contact-team.jpg',
  outcomeLine: '1.300+ volgers en landelijke PR in anderhalve maand',
  summary: [
    'Dr. Anneke Govaerts is migraine-specialist en auteur. Haar doelen op TikTok: meer awareness rond migraine én meer verkoop van haar boeken.',
    'We bouwden een contentlijn die medische expertise toegankelijk maakt — video\'s die educeren, herkenning geven en vertrouwen opbouwen bij @anneke_govaerts.',
    'Het resultaat: snelle audience-groei, consistent bereik per video én PR buiten TikTok: VRT, Radio 1 en een repost door uitgeverij Pelckmans.',
  ],
  results: [
    { label: 'Volgers', value: '1.300+' },
    { label: 'Gem. views/video', value: '26K' },
    { label: 'Gem. likes', value: '415' },
    { label: 'Topvideo views', value: '82K' },
  ],
  videos: [...CASE_CHANNEL_VIDEOS.annekeGovaerts],
  story: [
    {
      title: 'DE UITDAGING',
      body: 'Anneke had expertise en een boek, maar miste het bereik om migraine-bewustzijn op te bouwen bij een jong publiek. Klassieke medical marketing voelde te afstandelijk voor TikTok.',
      image: '/images/contact-team.jpg',
    },
    {
      title: 'ONZE AANPAK VOOR ANNEKE GOVAERTS',
      body: 'We vertaalden complexe migraine-kennis naar herkenbare, deelbare video\'s. Consistente output leverde gemiddeld 26.000 organische views per video — en trok aandacht van VRT, Radio 1 en uitgeverij Pelckmans.',
    },
  ],
  testimonial: {
    name: 'Dr. Anneke Govaerts',
    role: 'Migraine-specialist & auteur',
    quote:
      'In anderhalve maand meer dan 1.300 volgers, gemiddeld 26.000 views per video — en media-aandacht van VRT en Radio 1. TikTok werkt voor awareness.',
  },
}

export const caseDetails: Record<string, CaseDetail> = {
  [caseDetailTempus.slug]: caseDetailTempus,
  [caseDetailMaisonSlash.slug]: caseDetailMaisonSlash,
  [caseDetailAnnekeGovaerts.slug]: caseDetailAnnekeGovaerts,
}

export const caseDetailSlugs = Object.keys(caseDetails)
