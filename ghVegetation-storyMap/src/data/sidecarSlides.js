/**
 * sidecarSlides.js — Vegetation Threats & Conservation Sidecar
 *
 * Five narrative slides exploring the major threats to
 * Ghana's vegetation cover and the conservation responses.
 *
 * All images use verified Unsplash CDN URLs (hotlink-safe).
 */

const sidecarSlides = [
  {
    id: 'deforestation',
    title: 'Deforestation Crisis',
    body: 'Ghana has lost approximately 90% of its original forest cover over the past century — one of the highest deforestation rates in West Africa. Between 1990 and 2020, Ghana lost 2.25 million hectares of tree cover. Timber extraction, agricultural expansion, and illegal chainsaw milling continue to fragment the remaining High Forest Zone, pushing species toward local extinction.',
    imageSrc: '/images/deforestation.jpg',
    imageAlt: 'Dense tropical rainforest canopy — what Ghana is rapidly losing to deforestation.',
  },
  {
    id: 'galamsey',
    title: 'Galamsey — Illegal Mining',
    body: 'Artisanal small-scale illegal gold mining — locally called "galamsey" — is devastating Ghana\'s forest-zone rivers and surrounding vegetation. Thousands of square kilometres of forest and farmland have been turned into toxic wastelands. Mercury contamination from gold processing renders rivers biologically dead and soils infertile for decades.',
    imageSrc: '/images/galamsey.jpg',
    imageAlt: 'Forest interior showing the ecosystem under threat from illegal mining activity.',
  },
  {
    id: 'savanna-fire',
    title: 'Savanna Fire Management',
    body: 'Annual burning is deeply embedded in northern Ghana\'s agricultural culture — used to clear land, drive game, and promote new grass growth. However, uncontrolled fires suppress woody regeneration, reduce biodiversity, release greenhouse gases, and drive long-term degradation of the Guinea and Sudan savannas. Community fire management programs seek to balance tradition with ecological resilience.',
    imageSrc: '/images/savanna_fire.jpg',
    imageAlt: 'African Guinea savanna landscape shaped by decades of seasonal burning.',
  },
  {
    id: 'protected-areas',
    title: 'Protected Area Network',
    body: 'Ghana\'s protected area network covers approximately 17% of land area and includes 6 national parks, 6 resource reserves, and numerous wildlife sanctuaries. The Forestry Commission\'s Forest Preserve System protects 282 forest reserves covering 1.6 million hectares. International NGOs, the World Bank, and USAID support conservation through REDD+ programmes and community forest management agreements.',
    imageSrc: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1280&q=80',
    imageAlt: 'African elephant in protected savanna — Ghana\'s Mole National Park shelters hundreds of elephants.',
  },
  {
    id: 'reforestation',
    title: 'Reforestation & Restoration',
    body: 'Ghana\'s Green Ghana Day — launched in 2021 — has mobilised citizens to plant tens of millions of trees annually. The national target is 5 million hectares of restored and reforested land by 2030. Community-led reforestation using native species such as Ofram, Odum, and Cedrela is showing promising results in reconnecting fragmented forest patches across the High Forest Zone.',
    imageSrc: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1280&q=80',
    imageAlt: 'Seedlings and green plants growing — symbols of Ghana\'s reforestation efforts.',
  },
];

export default sidecarSlides;
