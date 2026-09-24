import { useRef, useState, useEffect, createElement } from 'react';
import styles from './NarrativeText.module.css';

/**
 * NarrativeText — Reusable rich-text narrative section.
 *
 * @param {string}   heading      — Section heading text
 * @param {number}   headingLevel — 1, 2, or 3 (renders h1–h3)
 * @param {React.ReactNode} children — Body content
 * @param {'dark'|'light'|'sage'} theme — Color scheme
 */
function NarrativeText({
  heading,
  headingLevel = 2,
  children,
  theme = 'light',
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.05, rootMargin: '150px 0px' }
    );

    observer.observe(node);

    const safetyTimer = setTimeout(() => setIsVisible(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, []);

  const tag = `h${Math.min(Math.max(headingLevel, 1), 3)}`;
  const themeClass = styles[theme] ?? styles.light;

  return (
    <section
      ref={sectionRef}
      className={[
        styles.section,
        themeClass,
        isVisible ? styles.visible : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.container}>
        {heading &&
          createElement(tag, { className: styles.heading }, heading)}
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}

export default NarrativeText;
