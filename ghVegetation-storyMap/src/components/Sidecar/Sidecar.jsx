/**
 * Sidecar.jsx — Threats & Conservation Scroll-Pinned Section
 *
 * LEFT  → scrolling narrative cards about threats & conservation
 * RIGHT → sticky image panel crossfading per scroll position
 *
 * Uses IntersectionObserver to detect the most-visible card.
 */

import React, { useEffect, useRef, useState } from 'react';
import sidecarSlides from '../../data/sidecarSlides.js';
import styles from './Sidecar.module.css';

function Sidecar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  if (cardRefs.current.length !== sidecarSlides.length) {
    cardRefs.current = sidecarSlides.map(
      (_, i) => cardRefs.current[i] || React.createRef()
    );
  }

  useEffect(() => {
    const nodes = cardRefs.current.map((r) => r.current).filter(Boolean);
    if (nodes.length === 0) return;

    const ratioMap = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap.set(entry.target, entry.intersectionRatio);
        });

        let bestRatio = -1;
        let bestNode = null;

        ratioMap.forEach((ratio, node) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestNode = node;
          }
        });

        if (bestNode) {
          const idx = nodes.indexOf(bestNode);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-label="Threats and Conservation">
      <header className={styles.header}>
        <h2 className={styles.heading}>Under Threat — Fighting Back</h2>
        <hr className={styles.headerRule} />
      </header>

      <div className={styles.container}>
        {/* LEFT — scrolling narrative cards */}
        <div className={styles.narrativeColumn}>
          {sidecarSlides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={slide.id}
                ref={cardRefs.current[index]}
                className={`${styles.narrativeCard} ${isActive ? styles.cardActive : ''}`}
              >
                {/* Mobile-only inline image */}
                <img
                  className={styles.mobileImage}
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  loading="lazy"
                />

                <div className={styles.cardInner}>
                  <h3 className={styles.cardTitle}>{slide.title}</h3>
                  <p className={styles.cardBody}>{slide.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT — sticky image panel (desktop only) */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageOverlay} aria-hidden="true" />

            {sidecarSlides.map((slide, index) => (
              <img
                key={slide.id}
                className={`${styles.sidecarImage} ${
                  index === activeIndex ? styles.sidecarImageActive : ''
                }`}
                src={slide.imageSrc}
                alt={slide.imageAlt}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidecar;
