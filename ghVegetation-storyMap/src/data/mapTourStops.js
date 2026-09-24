/**
 * mapTourStops.js — Ghana Vegetation Map Tour
 *
 * Six geographic stops tracing Ghana from south to north,
 * visiting each major vegetation zone in sequence.
 * Used by the interactive Leaflet map tour component.
 */

const mapTourStops = [
  {
    id: 'ankasa',
    name: 'Ankasa Conservation Area',
    coords: [5.27, -2.69],
    description:
      'Covering 509 km² of pristine wet evergreen rainforest in the Western Region, Ankasa is Ghana\'s last true wilderness. Annual rainfall exceeds 2,000 mm. The forest holds over 800 plant species, 600 butterfly species, and rare mammals including the forest elephant and white-bellied pangolin.',
    zone: 'Wet Evergreen Forest',
    zoneColor: '#0d5c32',
    zoom: 11,
  },
  {
    id: 'kakum',
    name: 'Kakum National Park',
    coords: [5.35, -1.39],
    description:
      'A 375 km² tract of moist semi-deciduous forest in the Central Region, famous for its 350-metre elevated canopy walkway — one of only a few in Africa. The park shelters over 400 bird species, forest buffaloes, bongo antelopes, and 40 species of large mammals.',
    zone: 'Moist Semi-Deciduous Forest',
    zoneColor: '#1a7a45',
    zoom: 12,
  },
  {
    id: 'brong-ahafo',
    name: 'Brong-Ahafo Transition Zone',
    coords: [7.48, -2.01],
    description:
      'This broad zone spans the watershed between forest and savanna Ghana. Cocoa farms intermix with remnant dry semi-deciduous forest patches. The area is critical for maintaining ecological connectivity between the southern forests and the northern savannas.',
    zone: 'Dry Semi-Deciduous Forest',
    zoneColor: '#4a9a55',
    zoom: 9,
  },
  {
    id: 'mole',
    name: 'Mole National Park',
    coords: [9.26, -1.86],
    description:
      'Ghana\'s largest wildlife refuge at 4,577 km², Mole protects a vast landscape of Guinea savanna woodland. Shea trees, Néré, and Burkea africana dot the rolling terrain above the Black Volta. Over 90 mammal species roam here, including Africa\'s most accessible elephant population.',
    zone: 'Guinea Savanna Woodland',
    zoneColor: '#8b7355',
    zoom: 10,
  },
  {
    id: 'navrongo',
    name: 'Navrongo, Upper East Region',
    coords: [10.89, -1.09],
    description:
      'Near Ghana\'s northern border, this Sudan savanna landscape endures the harshest dry season in the country. Ancient baobab trees — some estimated over 2,000 years old — anchor a sparse, drought-resistant vegetation. The region is the cultural heartland of the Frafra and Kasena peoples.',
    zone: 'Sudan Savanna',
    zoneColor: '#c4a265',
    zoom: 11,
  },
  {
    id: 'accra-coast',
    name: 'Accra Coastal Strip',
    coords: [5.56, -0.20],
    description:
      'Despite lying on the equator, the Accra coast is paradoxically dry — annual rainfall is under 730 mm. Cold upwelling of the Benguela current cools onshore air, suppressing rainfall. Unique coastal grasses, succulent shrubs, and pockets of mangrove at the Korle and Densu estuaries define this distinctive biome.',
    zone: 'Coastal Savanna',
    zoneColor: '#b8a67a',
    zoom: 11,
  },
];

export default mapTourStops;
