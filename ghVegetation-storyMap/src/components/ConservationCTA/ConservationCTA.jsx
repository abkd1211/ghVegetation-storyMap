import ButtonLink from '../ButtonLink/ButtonLink';
import styles from './ConservationCTA.module.css';

/**
 * ConservationCTA — Conservation Call to Action section.
 *
 * Features a lush forest background, narrative about Ghana's
 * conservation future, and links to key organisations.
 */
function ConservationCTA() {
  return (
    <section className={styles.section} id="conservation">
      <div className={styles.bgImage} aria-hidden="true" />
      <div className={styles.bgOverlay} aria-hidden="true" />

      <div className={styles.container}>
        <span className={styles.badge}>Conservation &middot; Ecology &middot; Future</span>

        <h2 className={styles.heading}>Protecting the Living Canopy</h2>
        <div className={styles.greenLine} aria-hidden="true" />

        <div className={styles.textBlock}>
          <p>
            Ghana&rsquo;s forests are among the most biologically diverse ecosystems
            in West Africa, yet they face existential pressure from deforestation,
            illegal mining, and climate change. The{' '}
            <strong>Forestry Commission of Ghana</strong> manages 282 forest
            reserves covering 1.6 million hectares, and enforces regulations
            under the Forest and Wildlife Policy.
          </p>
          <p>
            International programmes like <strong>REDD+</strong> (Reducing
            Emissions from Deforestation and Forest Degradation) provide financial
            incentives for community-based forest stewardship. Ghana has signed
            a Voluntary Partnership Agreement with the EU to improve timber
            governance and combat illegal logging.
          </p>
          <blockquote className={styles.quote}>
            &ldquo;The forest is not a resource for us to use. It is our home,
            and it shelters all life.&rdquo;
          </blockquote>
          <p>
            Ghana&rsquo;s annual{' '}
            <strong>Green Ghana Day</strong> initiative — launched in 2021 by
            President Akufo-Addo — mobilises millions of citizens to plant trees
            every June. By 2026 over 100 million trees have been planted,
            representing a critical step toward healing the nation&rsquo;s
            degraded landscapes.
          </p>
        </div>

        <div className={styles.buttonGroup}>
          <ButtonLink href="https://www.fc.gov.gh/" variant="green">
            Forestry Commission of Ghana
          </ButtonLink>
          <ButtonLink
            href="https://www.ghanawildlifesociety.org/"
            variant="outline"
          >
            Ghana Wildlife Society
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default ConservationCTA;
