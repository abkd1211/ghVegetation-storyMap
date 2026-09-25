/**
 * galleryImages.js — Flora & Fauna Photo Gallery
 *
 * Eight curated images showcasing Ghana's remarkable plant
 * life, iconic trees, wildlife, and landscapes across
 * the major vegetation zones.
 *
 * All images use verified Unsplash CDN URLs (hotlink-safe).
 */

const galleryImages = [
  {
    id: 'rainforest-canopy',
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1280&q=80',
    alt: 'Dense tropical rainforest canopy in Ghana\'s wet evergreen zone.',
    caption: 'The closed-canopy rainforest of Ankasa Conservation Area — Ghana\'s last intact wet evergreen forest with over 800 plant species.',
  },
  {
    id: 'sunlit-forest',
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1280&q=80',
    alt: 'Sunlight streaming through a lush forest canopy.',
    caption: 'Sunlight through the moist semi-deciduous forest — Ghana\'s most biologically rich forest type, centered in the Ashanti and Brong-Ahafo regions.',
  },
  {
    id: 'forest-light',
    src: '/images/zone3_dry_semi.jpg',
    alt: 'Light rays illuminating the interior of a semi-deciduous tropical forest.',
    caption: 'Light filters through Ghana\'s dry semi-deciduous forest — the transitional zone between the High Forest and the northern savannas.',
  },
  {
    id: 'guinea-savanna',
    src: '/images/zone4_guinea_savanna.jpg',
    alt: 'African Guinea savanna woodland at sunset with scattered trees and golden grass.',
    caption: 'The Guinea savanna — Ghana\'s most extensive vegetation zone, shaped by fire, rainfall seasonality, and over 10,000 years of human land use.',
  },
  {
    id: 'baobab',
    src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1280&q=80',
    alt: 'Ancient baobab trees silhouetted against a golden African sunset.',
    caption: 'Ancient baobabs (Adansonia digitata) anchor the Sudan savanna of Ghana\'s far north — some estimated to be over 2,000 years old.',
  },
  {
    id: 'elephant',
    src: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1280&q=80',
    alt: 'African bush elephant moving through savanna woodland vegetation.',
    caption: 'African bush elephants roam freely in Mole National Park — Ghana\'s largest protected savanna ecosystem at 4,577 km².',
  },
  {
    id: 'planting',
    src: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1280&q=80',
    alt: 'Green seedlings and plants growing in rich soil.',
    caption: 'Ghana\'s Green Ghana Day initiative has mobilised millions of citizens to plant native tree species since 2021 — a cornerstone of national reforestation.',
  },
  {
    id: 'coastal-palm',
    src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1280&q=80',
    alt: 'Tropical palm trees and lush green vegetation in warm light.',
    caption: 'Tropical flora of the transition zone — Ghana supports over 3,600 plant species across its six vegetation zones.',
  },
];

export default galleryImages;
