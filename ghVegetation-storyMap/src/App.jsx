import Hero from './components/Hero/Hero'
import NarrativeText from './components/NarrativeText/NarrativeText'
import Separator from './components/Separator/Separator'
import InteractiveMap from './components/InteractiveMap/InteractiveMap'
import Timeline from './components/Timeline/Timeline'
import VegetationKey from './components/VegetationKey/VegetationKey'
import Sidecar from './components/Sidecar/Sidecar'
import PhotoGallery from './components/PhotoGallery/PhotoGallery'
import QuoteBlock from './components/QuoteBlock/QuoteBlock'
import MapTour from './components/MapTour/MapTour'
import ConservationCTA from './components/ConservationCTA/ConservationCTA'
import Credits from './components/Credits/Credits'
import ProgressBar from './components/ui/ProgressBar'

/**
 * App — Root component for the Ghana Vegetation StoryMap.
 *
 * Narrative arc:
 *   §1  Hero cover
 *   §2  Introduction
 *   §3  Vegetation Key (unique zone strip)
 *   §4  Interactive Web GIS Map
 *   §5  Six Zones Timeline
 *   §6  Sidecar — Threats & Conservation
 *   §7  Flora & Fauna Gallery
 *   §8  Pull-quote
 *   §9  North-South Map Tour (transect)
 *   §10 Conservation CTA
 *   §11 Credits
 */
function App() {
  return (
    <>
      {/* ── Scroll progress indicator ─────────────────────────── */}
      <ProgressBar />

      {/* ── §1  HERO COVER ────────────────────────────────────── */}
      <Hero />

      {/* ── §2  INTRODUCTION ─────────────────────────────────── */}
      <NarrativeText
        heading="A Nation Draped in Green"
        headingLevel={1}
        theme="light"
      >
        <div style={{
          display: 'inline-block',
          fontFamily: 'var(--font-caption)',
          fontSize: '0.72rem',
          textTransform: 'uppercase',
          letterSpacing: '0.16em',
          color: 'var(--color-forest)',
          border: '1px solid rgba(26, 74, 46, 0.3)',
          padding: '4px 14px',
          borderRadius: '20px',
          marginBottom: '1.25rem',
          fontWeight: 600,
        }}>
          5°N – 11°N Latitude &middot; 0.2°W – 3.2°W Longitude
        </div>

        <p>
          Stretching from the equatorial Gulf of Guinea to the edge of the
          Sahel, Ghana occupies a remarkable position on the planet&rsquo;s surface
          — one that gives rise to extraordinary ecological diversity within a
          relatively small area of 238,533 km². Its vegetation is not simply
          a backdrop to human life but its very foundation.
        </p>
        <p>
          Six distinct vegetation zones unfold like a living atlas across the
          country, each shaped by rainfall, temperature, soils, and millennia
          of human interaction. From the ancient rainforests of Ankasa to the
          baobab-studded savannas of Navrongo, Ghana&rsquo;s plant cover supports
          tens of millions of people, thousands of species, and the climate
          systems of the entire sub-region.
        </p>
        <div style={{
          fontFamily: 'var(--font-caption)',
          fontSize: '0.82rem',
          color: 'var(--color-forest)',
          opacity: 0.8,
          marginTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}>
          <span>🌍 <strong>Surface Area:</strong> 238,533 km²</span>
          <span>&middot;</span>
          <span>☁️ <strong>Rainfall range:</strong> 500 – 2,100 mm/yr</span>
          <span>&middot;</span>
          <span>🌳 <strong>Forest cover:</strong> ~21% (c. 2020)</span>
        </div>
      </NarrativeText>

      {/* ── §3  VEGETATION KEY (unique strip) ────────────────── */}
      <VegetationKey />

      <Separator />

      {/* ── §4  INTERACTIVE WEB GIS MAP ──────────────────────── */}
      <InteractiveMap />

      {/* ── §5  SIX ZONES TIMELINE ───────────────────────────── */}
      <Timeline />

      <Separator />

      {/* ── §6  SIDECAR — Threats & Conservation ─────────────── */}
      <Sidecar />

      {/* ── §7  FLORA & FAUNA GALLERY ────────────────────────── */}
      <PhotoGallery />

      {/* ── §8  PULL-QUOTE ───────────────────────────────────── */}
      <QuoteBlock
        quote="In the forest, every tree is a library. Every root is a memory. To destroy the forest is to erase the history of life itself."
        attribution="— Kofi Agyemang, Ghanaian Ecologist &amp; Writer"
      />

      <Separator />

      {/* ── §9  MAP TOUR — North-South Transect ──────────────── */}
      <MapTour />

      {/* ── §10  CONSERVATION CTA ────────────────────────────── */}
      <ConservationCTA />

      {/* ── §11  CREDITS ─────────────────────────────────────── */}
      <Credits />
    </>
  )
}

export default App
