import styles from './Separator.module.css';

/**
 * Separator — Decorative horizontal rule with leaf ornament.
 */
function Separator() {
  return (
    <div className={styles.wrapper} role="separator" aria-hidden="true">
      <div className={styles.line}>
        <span className={styles.leaf}>🌿</span>
      </div>
    </div>
  );
}

export default Separator;
