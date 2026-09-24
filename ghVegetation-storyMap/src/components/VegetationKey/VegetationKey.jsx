/**
 * VegetationKey.jsx — Horizontal Biome Legend Strip
 *
 * A unique component (not in the Cape Coast map) that shows
 * Ghana's six vegetation zones as a colour-coded horizontal
 * strip with rainfall data and location hints.
 */

import styles from './VegetationKey.module.css';

const ZONES = [
  {
    name: 'Wet Evergreen Forest',
    color: '#0d5c32',
    bg: 'rgba(13,92,50,0.25)',
    rainfall: '>2,000 mm/yr',
    location: 'Southwest (Ankasa)',
  },
  {
    name: 'Moist Semi-Deciduous',
    color: '#1a7a45',
    bg: 'rgba(26,122,69,0.25)',
    rainfall: '1,500–2,000 mm/yr',
    location: 'Ashanti / Kakum',
  },
  {
    name: 'Dry Semi-Deciduous',
    color: '#4a9a55',
    bg: 'rgba(74,154,85,0.22)',
    rainfall: '1,200–1,500 mm/yr',
    location: 'Eastern / Brong-Ahafo',
  },
  {
    name: 'Guinea Savanna',
    color: '#8b7355',
    bg: 'rgba(139,115,85,0.22)',
    rainfall: '900–1,200 mm/yr',
    location: 'Northern / Volta',
  },
  {
    name: 'Sudan Savanna',
    color: '#c4a265',
    bg: 'rgba(196,162,101,0.22)',
    rainfall: '700–900 mm/yr',
    location: 'Upper East / West',
  },
  {
    name: 'Coastal Savanna',
    color: '#b8a67a',
    bg: 'rgba(184,166,122,0.2)',
    rainfall: '500–730 mm/yr',
    location: 'Accra Coast',
  },
];

function VegetationKey() {
  return (
    <section className={styles.section} aria-label="Vegetation zone key">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Reference</p>
        <h2 className={styles.heading}>Vegetation Zone Colour Key</h2>
      </header>

      <div className={styles.strip}>
        {ZONES.map((zone) => (
          <div
            key={zone.name}
            className={styles.zoneCard}
            style={{ background: zone.bg }}
          >
            <div
              className={styles.colorBar}
              style={{ background: zone.color }}
            />
            <p className={styles.zoneName}>{zone.name}</p>
            <p className={styles.rainfall}>{zone.rainfall}</p>
            <p className={styles.location}>{zone.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VegetationKey;
