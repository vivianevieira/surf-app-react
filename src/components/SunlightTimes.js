
import styles from '../styles/components/SunlightTimes.module.css';

export default function SunlightTimes() {
  const dateNow = new Date();
  const options = { month: 'long' };
  const year = dateNow.getFullYear();
  const day = dateNow.getDate();
  const month = new Intl.DateTimeFormat('en-US', options).format(dateNow);
  const dateHeader = `${month} ${day}, ${year}`;

  return (
    <div className={styles.SunlightTimesCont}>
      <div className={styles.SunlightTimesDateHeader}>{dateHeader}</div>
      <div className={styles.SunlightTimesSunrise}>
        <div className={styles.SunlightTimesIcon}>
          <img src="../images/sunrise.png" alt="" width="35px" />
        </div>
        <div>
          <div>First light: <span className={styles.SunlightTimesValue}>5:45 am</span></div>
          <div>Sunrise: <span className={styles.SunlightTimesValue}>6:10 am</span></div>
        </div>
      </div>
      <div className={styles.SunlightTimesSunrise}>
        <div className={styles.SunlightTimesIcon}>
          <img src="../images/sunset.png" alt="" width="35px" />
        </div>
        <div>
          <div>Sunset: <span className={styles.SunlightTimesValue}>5:52 pm</span></div>
          <div>Last light: <span className={styles.SunlightTimesValue}>6:16 pm</span></div>
        </div>
      </div>
    </div>
  );
}
