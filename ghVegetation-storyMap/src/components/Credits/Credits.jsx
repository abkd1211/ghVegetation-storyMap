import Separator from '../Separator/Separator';
import styles from './Credits.module.css';

/**
 * Credits — Footer with university attribution, image credits, and data sources.
 */
function Credits() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Separator />

        <div className={styles.grid}>
          {/* University attribution */}
          <div className={styles.block}>
            <h3 className={styles.heading}>University of Ghana</h3>
            <p className={styles.text}>Department of Geography &amp; Resource Development</p>
            <p className={styles.text}>Student ID: 11015437</p>
          </div>

          {/* Image credits */}
          <div className={styles.block}>
            <h4 className={styles.subheading}>Image Credits</h4>
            <ul className={styles.list}>
              <li>
                <a
                  href="https://commons.wikimedia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Wikimedia Commons
                </a>
              </li>
              <li>
                <a
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Unsplash
                </a>
              </li>
            </ul>
          </div>

          {/* Data sources */}
          <div className={styles.block}>
            <h4 className={styles.subheading}>Data Sources</h4>
            <ul className={styles.list}>
              <li>
                <a
                  href="https://www.fc.gov.gh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Forestry Commission of Ghana
                </a>
              </li>
              <li>
                <a
                  href="https://www.fao.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  FAO — Global Forest Resources Assessment
                </a>
              </li>
              <li>
                <a
                  href="https://www.iucn.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  IUCN Red List
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.copyright}>
          &copy; {currentYear} Ghana Vegetation StoryMap. University of Ghana,
          Department of Geography. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Credits;
