import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mapTourStops from '../../data/mapTourStops';
import styles from './MapTour.module.css';

/* ── Zone-coloured marker ─────────────────────────────── */

function createStopIcon(color = '#2d6a4f', isActive = false) {
  const size = isActive ? 18 : 11;
  return L.divIcon({
    className: styles.markerIcon,
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background: ${isActive ? color : color + '99'};
        border: 2.5px solid ${isActive ? '#f5f0e6' : 'rgba(245,240,230,0.5)'};
        border-radius: 50%;
        box-shadow: 0 0 ${isActive ? 16 : 5}px ${color}${isActive ? 'cc' : '44'};
        transition: all 0.3s ease;
      "></div>
    `,
    iconSize: [size + 5, size + 5],
    iconAnchor: [(size + 5) / 2, (size + 5) / 2],
  });
}

function MapResizeHandler() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
    const t1 = setTimeout(() => map.invalidateSize(), 200);
    const t2 = setTimeout(() => map.invalidateSize(), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [map]);
  return null;
}

function MapController({ activeStop }) {
  const map = useMap();
  useEffect(() => {
    if (!activeStop) return;
    map.invalidateSize();
    map.flyTo(activeStop.coords, activeStop.zoom, {
      duration: 2.2,
      easeLinearity: 0.25,
    });
  }, [activeStop, map]);
  return null;
}

const routeCoords = mapTourStops.map((s) => s.coords);

/* ── MapTour Component ────────────────────────────────── */

function MapTour() {
  const [activeStopId, setActiveStopId] = useState(mapTourStops[0].id);
  const cardRefs = useRef([]);

  const activeStop = useMemo(
    () => mapTourStops.find((s) => s.id === activeStopId) || mapTourStops[0],
    [activeStopId]
  );

  const handleIntersection = useCallback((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const stopId = entry.target.dataset.stopId;
        if (stopId) setActiveStopId(stopId);
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.3,
    });

    const currentRefs = cardRefs.current;
    currentRefs.forEach((el) => { if (el) observer.observe(el); });

    return () => { currentRefs.forEach((el) => { if (el) observer.unobserve(el); }); };
  }, [handleIntersection]);

  return (
    <section className={styles.section} id="transect">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeading}>The North-South Transect</h2>
        <p className={styles.sectionSubtext}>
          Follow Ghana from its coastal lagoons and mangroves through the
          rainforests of the south, the cocoa belt, the Guinea savanna woodlands,
          and into the semi-arid Sudan savanna near the northern border.
        </p>
      </div>

      <div className={styles.sidecar}>
        {/* LEFT — scrolling narrative cards */}
        <div className={styles.narrativeColumn}>
          {mapTourStops.map((stop, index) => (
            <div
              key={stop.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              data-stop-id={stop.id}
              className={`${styles.card} ${
                activeStopId === stop.id ? styles.cardActive : ''
              }`}
            >
              <span className={styles.cardNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className={styles.cardTitle}>{stop.name}</h3>

              {/* Zone badge with colour dot */}
              <span className={styles.cardZone}>
                <span
                  className={styles.zoneColorDot}
                  style={{ background: stop.zoneColor }}
                />
                {stop.zone}
              </span>

              <p className={styles.cardDescription}>{stop.description}</p>
            </div>
          ))}

          <div className={styles.cardSpacer} aria-hidden="true" />
        </div>

        {/* RIGHT — sticky satellite map */}
        <div className={styles.mapColumn}>
          <div className={styles.mapContainer}>
            <MapContainer
              center={mapTourStops[0].coords}
              zoom={mapTourStops[0].zoom}
              scrollWheelZoom={false}
              zoomControl={false}
              dragging={false}
              doubleClickZoom={false}
              className={styles.map}
              attributionControl={false}
            >
              {/* Satellite imagery */}
              <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution="Tiles &copy; Esri"
                maxZoom={18}
              />

              <MapResizeHandler />
              <MapController activeStop={activeStop} />

              {/* Dotted transect route */}
              <Polyline
                positions={routeCoords}
                pathOptions={{
                  color: '#d4af7a',
                  weight: 2,
                  opacity: 0.65,
                  dashArray: '8 6',
                }}
              />

              {/* Zone-coloured stop markers */}
              {mapTourStops.map((stop) => (
                <Marker
                  key={stop.id}
                  position={stop.coords}
                  icon={createStopIcon(stop.zoneColor, activeStopId === stop.id)}
                />
              ))}
            </MapContainer>

            <div className={styles.mapOverlayTop} aria-hidden="true" />
            <div className={styles.mapOverlayBottom} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapTour;
