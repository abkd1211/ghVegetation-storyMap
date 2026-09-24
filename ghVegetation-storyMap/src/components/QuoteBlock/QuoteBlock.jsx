import { useRef, useState, useEffect } from 'react';
import styles from './QuoteBlock.module.css';

/**
 * QuoteBlock — Dramatic botanical pull-quote section.
 *
 * @param {string} quote       — The quote text
 * @param {string} attribution — Who said / wrote it
 */
function QuoteBlock({ quote, attribution }) {
  const blockRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = blockRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={blockRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      aria-label="Quote"
    >
      <div className={styles.inner}>
        <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>

        <blockquote className={styles.quote}>
          <p>{quote}</p>
        </blockquote>

        {attribution && (
          <cite className={styles.attribution}>{attribution}</cite>
        )}
      </div>
    </section>
  );
}

export default QuoteBlock;
