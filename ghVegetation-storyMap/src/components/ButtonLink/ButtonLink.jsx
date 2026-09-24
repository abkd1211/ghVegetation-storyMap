import styles from './ButtonLink.module.css';

/**
 * ButtonLink — Styled CTA anchor.
 *
 * @param {string} href — Destination URL
 * @param {React.ReactNode} children — Button label
 * @param {'green'|'gold'|'outline'} variant — Visual style
 */
function ButtonLink({ href, children, variant = 'green' }) {
  const variantClass =
    variant === 'gold'
      ? styles.gold
      : variant === 'outline'
      ? styles.outline
      : styles.green;

  return (
    <a
      href={href}
      className={`${styles.button} ${variantClass}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default ButtonLink;
