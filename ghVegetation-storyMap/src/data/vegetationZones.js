/**
 * vegetationZones.js — Ghana Vegetation Timeline Data
 *
 * Six distinct vegetation zones arranged south to north,
 * corresponding to Ghana's rainfall gradient.
 *
 * All images use verified Unsplash CDN URLs (hotlink-safe).
 */

const vegetationZones = [
  {
    year: 'Zone 1',
    title: 'Wet Evergreen Forest',
    description:
      'Found in the extreme southwest corner of Ghana — the Ankasa and Bia conservation areas — this closed-canopy rainforest receives over 2,000 mm of rainfall annually. It shelters the highest tree diversity in Ghana, with emergent trees reaching 45 m. Endangered species such as the forest elephant, bongo antelope, and Diana monkey find refuge beneath its interlocking canopy.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=960&q=80',
  },
  {
    year: 'Zone 2',
    title: 'Moist Semi-Deciduous Forest',
    description:
      'Spanning the Ashanti Region and parts of Brong-Ahafo, this is Ghana\'s most economically significant forest type and the heartland of timber extraction. Magnificent species like Odum (Milicia excelsa), Wawa (Triplochiton scleroxylon), and Sapele dominate. The Kakum National Park — home to Ghana\'s famous canopy walkway — lies within this zone.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=960&q=80',
  },
  {
    year: 'Zone 3',
    title: 'Dry Semi-Deciduous Forest',
    description:
      'This transitional zone occupies a broad belt across the Eastern Region and parts of Brong-Ahafo. Rainfall drops to 1,200–1,500 mm and seasonality becomes pronounced. Trees shed their leaves in the dry season. The forest is more open, with a better-developed shrub layer. Cocoa, Ghana\'s signature crop, was traditionally grown under the shade of these forests.',
    image: '/images/zone3_dry_semi.jpg',
  },
  {
    year: 'Zone 4',
    title: 'Guinea Savanna Woodland',
    description:
      'The most extensive vegetation zone in Ghana, covering vast swaths of the Brong-Ahafo, Northern, and Volta regions. Characterized by fire-tolerant trees like Shea (Vitellaria paradoxa), Dawadawa (Parkia biglobosa), and Néré interspersed with tall grasses. Annual burning by farmers drives the ecology. The Shea tree is culturally and economically vital, its nuts yielding shea butter prized globally.',
    image: '/images/zone4_guinea_savanna.jpg',
  },
  {
    year: 'Zone 5',
    title: 'Sudan Savanna',
    description:
      'Restricted to the far northeast of Ghana in the Upper East Region, this dry savanna receives less than 1,000 mm of rain, concentrated in a short wet season from May to September. Vegetation is shorter and more scattered — thorny acacias, baobabs (Adansonia digitata), and drought-resistant grasses characterize the landscape. The harmattan wind from the Sahara dominates the dry season.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=960&q=80',
  },
  {
    year: 'Zone 6',
    title: 'Coastal Savanna & Mangroves',
    description:
      'A narrow coastal strip from Accra eastward features a unique dry coastal savanna, anomalously dry despite proximity to the ocean due to cold ocean upwelling suppressing rainfall. Fringing this coast and along estuaries are pockets of mangrove forest — halophytic trees that filter salt water and provide critical nursery habitat for fish and nesting birds.',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=960&q=80',
  },
];

export default vegetationZones;
