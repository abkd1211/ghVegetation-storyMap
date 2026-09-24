import { motion } from 'framer-motion';
import styles from './Hero.module.css';

/**
 * Hero — Full-viewport cover for the Ghana Vegetation StoryMap.
 *
 * Features a lush rainforest background, left-aligned editorial layout
 * with eyebrow tag, split title, subtitle, stats row, and a vertical
 * scroll indicator on the right — distinct from the Cape Coast design.
 */
function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero cover">
      {/* Background image */}
      <div className={styles.backgroundImage} />

      {/* Gradient overlay */}
      <div className={styles.overlay} />

      {/* Vertical accent stripe */}
      <div className={styles.accentStripe} aria-hidden="true" />

      {/* Main content block */}
      <div className={styles.content}>
        {/* Eyebrow tag */}
        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className={styles.eyebrowDot} aria-hidden="true" />
          Web GIS &middot; Vegetation Geography &middot; Ghana
        </motion.div>

        {/* Main title */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
        >
          Ghana&rsquo;s
          <span className={styles.titleAccent}>Living Canopy</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.55 }}
        >
          A journey across six distinct vegetation zones — from the impenetrable
          rainforests of the Western Region to the ancient baobab-dotted
          savannas of the north.
        </motion.p>

        {/* Quick-stat counters */}
        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
        >
          <div className={styles.stat}>
            <span className={styles.statValue}>6</span>
            <span className={styles.statLabel}>Vegetation Zones</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>3,600+</span>
            <span className={styles.statLabel}>Plant Species</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>17%</span>
            <span className={styles.statLabel}>Land Protected</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>90%</span>
            <span className={styles.statLabel}>Forest Lost</span>
          </div>
        </motion.div>
      </div>

      {/* Vertical scroll indicator — right side */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}

export default Hero;
