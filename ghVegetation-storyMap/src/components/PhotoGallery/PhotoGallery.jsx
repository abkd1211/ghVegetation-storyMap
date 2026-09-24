/**
 * PhotoGallery.jsx — Flora & Fauna horizontal photo slideshow
 *
 * Touch/pointer swipe, keyboard navigation, dot indicators,
 * and arrow buttons. Showcases Ghana's plant life and wildlife.
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import galleryImages from '../../data/galleryImages.js';
import styles from './PhotoGallery.module.css';

const SWIPE_THRESHOLD = 40;

function ChevronLeft() {
  return (
    <svg className={styles.arrowIcon} viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className={styles.arrowIcon} viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const galleryRef = useRef(null);
  const pointerStartX = useRef(0);
  const pointerCurrentX = useRef(0);

  const total = galleryImages.length;

  const goTo = useCallback((index) => {
    if (index < 0 || index >= total) return;
    setCurrent(index);
  }, [total]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!galleryRef.current?.contains(document.activeElement)) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  const onPointerDown = useCallback((e) => {
    if (e.target.closest('button')) return;
    if (!e.isPrimary) return;
    pointerStartX.current = e.clientX;
    pointerCurrentX.current = e.clientX;
    setIsDragging(true);
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* ignore */ }
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!isDragging || !e.isPrimary) return;
    pointerCurrentX.current = e.clientX;
  }, [isDragging]);

  const onPointerUp = useCallback((e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = pointerCurrentX.current - pointerStartX.current;
    if (delta < -SWIPE_THRESHOLD) goNext();
    else if (delta > SWIPE_THRESHOLD) goPrev();
    pointerStartX.current = 0;
    pointerCurrentX.current = 0;
  }, [isDragging, goNext, goPrev]);

  const onPointerCancel = useCallback(() => {
    setIsDragging(false);
    pointerStartX.current = 0;
    pointerCurrentX.current = 0;
  }, []);

  const trackTransform = `translateX(-${current * 100}%)`;
  const trackClassName = [styles.track, isDragging ? styles.trackDragging : '']
    .filter(Boolean).join(' ');

  return (
    <section className={styles.section} aria-label="Flora and fauna photo gallery">
      <header className={styles.header}>
        <h2 className={styles.heading}>Flora, Fauna &amp; Landscapes</h2>
        <hr className={styles.headerRule} />
      </header>

      <div
        className={styles.gallery}
        ref={galleryRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Photo slideshow"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div
          className={trackClassName}
          style={{ transform: trackTransform }}
          aria-live="polite"
        >
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${total}`}
              aria-hidden={index !== current}
            >
              <img
                className={styles.slideImage}
                src={img.src}
                alt={img.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                draggable="false"
              />
              {img.caption && (
                <div className={styles.captionOverlay}>
                  <p className={styles.caption}>{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          className={styles.arrowPrev}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Previous photo"
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          className={styles.arrowNext}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Next photo"
        >
          <ChevronRight />
        </button>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Slide navigation">
        {galleryImages.map((img, index) => (
          <button
            key={img.id}
            type="button"
            className={index === current ? styles.dotActive : styles.dot}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); goTo(index); }}
            role="tab"
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={styles.srOnly}>Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default PhotoGallery;
