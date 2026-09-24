import { useRef, useMemo, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './InteractiveMap.module.css';

/**
 * Ensures Leaflet properly measures its container.
 */
function MapResizeHandler() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
    const t1 = setTimeout(() => map.invalidateSize(), 250);
    const t2 = setTimeout(() => map.invalidateSize(), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [map]);
  return null;
}

/**
 * Creates a custom vegetation-zone coloured divIcon marker.
 */
function createVegIcon(color = '#2d6a4f', size = 13, isPrimary = false) {
  const diameter = isPrimary ? size * 1.7 : size;
  return L.divIcon({
    className: styles.customMarker,
    html: `
      <div style="
        width: ${diameter}px;
        height: ${diameter}px;
        background: ${color};
        border: 2.5px solid #f5f0e6;
        border-radius: 50%;
        box-shadow: 0 0 ${isPrimary ? 14 : 7}px ${color}cc;
        cursor: pointer;
      "></div>
    `,
    iconSize: [diameter + 5, diameter + 5],
    iconAnchor: [(diameter + 5) / 2, (diameter + 5) / 2],
    popupAnchor: [0, -(diameter + 5) / 2],
  });
}

/* Key vegetation locations across Ghana */
const GHANA_CENTER = [7.95, -1.02];

const VEG_LOCATIONS = [
  {
    name: 'Ankasa Conservation Area',
    coords: [5.27, -2.69],
    description: 'Ghana\'s last intact wet evergreen rainforest — 509 km² of pristine primary forest.',
    zone: 'Wet Evergreen Forest',
    color: '#0d5c32',
    isPrimary: false,
  },
  {
    name: 'Kakum National Park',
    coords: [5.35, -1.39],
    description: 'Moist semi-deciduous forest famous for its 350-m elevated canopy walkway.',
    zone: 'Moist Semi-Deciduous Forest',
    color: '#1a7a45',
    isPrimary: false,
  },
  {
    name: 'Bobiri Forest Reserve',
    coords: [6.72, -1.28],
    description: 'A 54 km² butterfly sanctuary within dry semi-deciduous forest.',
    zone: 'Dry Semi-Deciduous Forest',
    color: '#4a9a55',
    isPrimary: false,
  },
  {
    name: 'Mole National Park',
    coords: [9.26, -1.86],
    description: 'Ghana\'s largest wildlife reserve — 4,577 km² of Guinea savanna woodland.',
    zone: 'Guinea Savanna',
    color: '#8b7355',
    isPrimary: true,
  },
  {
    name: 'Bui National Park',
    coords: [8.28, -2.25],
    description: 'Savanna woodland and riverine forest along the Black Volta.',
    zone: 'Guinea Savanna',
    color: '#8b7355',
    isPrimary: false,
  },
  {
    name: 'Navrongo (Sudan Savanna)',
    coords: [10.89, -1.09],
    description: 'Semi-arid Sudan savanna with scattered baobabs and acacia scrub.',
    zone: 'Sudan Savanna',
    color: '#c4a265',
    isPrimary: false,
  },
  {
    name: 'Accra Coastal Strip',
    coords: [5.56, -0.20],
    description: 'Anomalously dry coastal savanna and mangrove patches at river mouths.',
    zone: 'Coastal Savanna',
    color: '#b8a67a',
    isPrimary: false,
  },
];

const BASEMAPS = {
  esriImagery: {
    name: 'Satellite',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Esri, i-cubed, USDA, USGS, AEX, GeoEye',
    maxZoom: 18,
  },
  esriTopo: {
    name: 'Topographic',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri',
    maxZoom: 18,
  },
  esriDark: {
    name: 'Dark Canvas',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri',
    maxZoom: 16,
  },
  osm: {
    name: 'OpenStreetMap',
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  },
};

/**
 * InteractiveMap — Leaflet map showing Ghana's vegetation zone locations.
 */
function InteractiveMap() {
  const [activeBasemapKey, setActiveBasemapKey] = useState('esriImagery');
  const activeBasemap = BASEMAPS[activeBasemapKey];

  const icons = useMemo(() => {
    return VEG_LOCATIONS.map((loc) =>
      createVegIcon(loc.color, 12, loc.isPrimary)
    );
  }, []);

  return (
    <section className={styles.section} id="location">
      <div className={styles.header}>
        <div className={styles.tag}>Web GIS &middot; Spatial Distribution</div>
        <h2 className={styles.heading}>Mapping Ghana&rsquo;s Green Geography</h2>
        <p className={styles.intro}>
          Ghana&rsquo;s vegetation follows the north-south rainfall gradient, transitioning
          from closed-canopy rainforest in the southwest to open Sudan savanna near the
          Burkina Faso border. Explore key protected areas and vegetation sites below.
          Toggle basemaps to inspect satellite imagery, topography, or the dark canvas.
        </p>

        <div className={styles.basemapSwitcher} role="group" aria-label="Select Basemap">
          <span className={styles.switcherLabel}>Basemap:</span>
          {Object.entries(BASEMAPS).map(([key, bm]) => (
            <button
              key={key}
              type="button"
              className={`${styles.switcherBtn} ${activeBasemapKey === key ? styles.switcherBtnActive : ''}`}
              onClick={() => setActiveBasemapKey(key)}
            >
              {bm.name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.mapWrapper}>
        <MapContainer
          center={GHANA_CENTER}
          zoom={6}
          scrollWheelZoom={false}
          className={styles.map}
          attributionControl={true}
          zoomControl={true}
        >
          <TileLayer
            key={activeBasemapKey}
            url={activeBasemap.url}
            attribution={activeBasemap.attribution}
            maxZoom={activeBasemap.maxZoom}
          />

          <MapResizeHandler />

          {VEG_LOCATIONS.map((loc, index) => (
            <Marker key={loc.name} position={loc.coords} icon={icons[index]}>
              <Popup className={styles.popup}>
                <strong className={styles.popupTitle}>{loc.name}</strong>
                <span className={styles.popupDesc}>{loc.description}</span>
                <span className={styles.popupZone}>📍 {loc.zone}</span>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={styles.legendDotPrimary} />
          <span>Major national park</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDotSecondary} />
          <span>Key vegetation site / protected area</span>
        </div>
      </div>
    </section>
  );
}

export default InteractiveMap;
