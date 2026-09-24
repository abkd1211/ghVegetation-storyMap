import { useState, useEffect } from 'react';
import styles from './ProgressBar.module.css';

/**
 * ProgressBar — Fixed top scroll-progress indicator.
 * Forest-green to savanna-gold gradient fill.
 */
function ProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        setScrollPercent(0);
        return;
      }

      const percent = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollPercent(percent);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={styles.track}
      role="progressbar"
      aria-valuenow={Math.round(scrollPercent)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className={styles.bar}
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
}

export default ProgressBar;
