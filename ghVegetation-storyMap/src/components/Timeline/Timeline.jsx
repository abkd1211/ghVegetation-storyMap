/**
 * Timeline.jsx — Vegetation Zones Explorer
 *
 * Vertical alternating timeline of Ghana's six vegetation zones,
 * with glassmorphism cards, a green-gold-red gradient spine,
 * and scroll-reveal via IntersectionObserver.
 */

import React, { useEffect, useRef, useState } from 'react';
import vegetationZones from '../../data/vegetationZones.js';
import styles from './Timeline.module.css';

function TimelineEvent({ event, index }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const isLeft = index % 2 === 0;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const eventClass = [
    isLeft ? styles.eventLeft : styles.eventRight,
    isVisible ? styles.visible : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={eventClass} ref={ref}>
      <div className={styles.dot} aria-hidden="true" />
      <div className={styles.connector} aria-hidden="true" />

      <article className={styles.card}>
        <p className={styles.zone}>{event.year}</p>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.description}>{event.description}</p>

        {event.image && (
          <img
            className={styles.thumbnail}
            src={event.image}
            alt={`${event.title}`}
            loading="lazy"
          />
        )}
      </article>
    </div>
  );
}

function Timeline() {
  return (
    <section className={styles.section} aria-label="Vegetation zones timeline">
      <header className={styles.header}>
        <h2 className={styles.heading}>Six Zones, One Nation</h2>
        <p className={styles.subheading}>
          From equatorial rainforest to semi-arid savanna — Ghana&rsquo;s vegetation follows a dramatic north-south rainfall gradient
        </p>
      </header>

      <div className={styles.timeline} role="list">
        {vegetationZones.map((event, index) => (
          <TimelineEvent key={event.year + index} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Timeline;
