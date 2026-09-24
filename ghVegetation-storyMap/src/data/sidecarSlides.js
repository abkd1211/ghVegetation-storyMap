/**
 * sidecarSlides.js — Vegetation Threats & Conservation Sidecar
 *
 * Five narrative slides exploring the major threats to
 * Ghana's vegetation cover and the conservation responses,
 * paired with representative imagery.
 */

const sidecarSlides = [
  {
    id: 'deforestation',
    title: 'Deforestation Crisis',
    body: 'Ghana has lost approximately 90% of its original forest cover over the past century — one of the highest deforestation rates in West Africa. Between 1990 and 2020, Ghana lost 2.25 million hectares of tree cover. Timber extraction, agricultural expansion, and illegal chainsaw milling continue to fragment the remaining High Forest Zone, pushing species toward local extinction.',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Deforestation_in_Ghana.jpg/960px-Deforestation_in_Ghana.jpg',
    imageAlt: 'Deforested hillside in Ghana showing bare red laterite soil after timber extraction.',
  },
  {
    id: 'galamsey',
    title: 'Galamsey — Illegal Mining',
    body: 'Artisanal small-scale illegal gold mining — locally called "galamsey" — is devastating Ghana\'s forest-zone rivers and surrounding vegetation. Thousands of square kilometres of forest and farmland have been turned into toxic wastelands. Mercury contamination from gold processing renders rivers biologically dead and soils infertile for decades.',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Small-scale_gold_mining_Ghana.jpg/960px-Small-scale_gold_mining_Ghana.jpg',
    imageAlt: 'Aerial view of illegal artisanal gold mining pits and turbid orange rivers in Ghana.',
  },
  {
    id: 'savanna-fire',
    title: 'Savanna Fire Management',
    body: 'Annual burning is deeply embedded in northern Ghana\'s agricultural culture — used to clear land, drive game, and promote new grass growth. However, uncontrolled fires suppress woody regeneration, reduce biodiversity, release greenhouse gases, and drive long-term degradation of the Guinea and Sudan savannas. Community fire management programs seek to balance tradition with ecological resilience.',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Savanna_fire%2C_Ghana.jpg/960px-Savanna_fire%2C_Ghana.jpg',
    imageAlt: 'Wildfire burning through dry Guinea savanna in northern Ghana at dusk.',
  },
  {
    id: 'protected-areas',
    title: 'Protected Area Network',
    body: 'Ghana\'s protected area network covers approximately 17% of land area and includes 6 national parks, 6 resource reserves, and numerous wildlife sanctuaries. The Forestry Commission\'s Forest Preserve System protects 282 forest reserves covering 1.6 million hectares. International NGOs, the World Bank, and USAID support conservation through REDD+ programmes and community forest management agreements.',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bui_National_Park.jpg/960px-Bui_National_Park.jpg',
    imageAlt: 'Tranquil river landscape within Bui National Park, Ghana.',
  },
  {
    id: 'reforestation',
    title: 'Reforestation & Restoration',
    body: 'Ghana\'s Green Ghana Day — launched in 2021 — has mobilised citizens to plant tens of millions of trees annually. The national target is 5 million hectares of restored and reforested land by 2030. Community-led reforestation using native species such as Ofram, Odum, and Cedrela is showing promising results in reconnecting fragmented forest patches across the High Forest Zone.',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Reforestation_in_Ghana.jpg/960px-Reforestation_in_Ghana.jpg',
    imageAlt: 'Young tree seedlings planted in rows during a reforestation programme in Ghana.',
  },
];

export default sidecarSlides;
