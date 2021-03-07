
import styles from '../styles/components/SunlightTimes.module.css';

export default function SunlightTimes() {
  return (
    <div className={styles.SunlightTimesCont}>
      <div className={styles.SunlightTimesDateHeader}>March 6, 2021</div>
      <div className={styles.SunlightTimesSunrise}>
        <div className={styles.SunlightTimesIcon}>Icon</div>
        <div>
          <div>First light:</div>
          <div>Sunrise:</div>
        </div>
      </div>
      <div className={styles.SunlightTimesSunrise}>
        <div className={styles.SunlightTimesIcon}>Icon</div>
        <div>
          <div>Sunset:</div>
          <div>Last light:</div>
        </div>
      </div>
    </div>
  );
}
