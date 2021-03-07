import { useState, useContext, useEffect } from 'react';
import { SurfDataContext } from '../contexts/SurfDataContext';
import styles from '../styles/components/SunlightTimes.module.css';

export default function SunlightTimes() {
  const [sunlightData, setsunlightData] = useState([]);
  console.log(sunlightData);

  const { location } = useContext(SurfDataContext);
  console.log('location', location);

  const dateNow = new Date();
  const options = { month: 'long' };
  const year = dateNow.getFullYear();
  const day = dateNow.getDate();
  const month = new Intl.DateTimeFormat('en-US', options).format(dateNow);
  const dateHeader = `${month} ${day}, ${year}`;

  const getSunlightData = async () => {
    const url = 'https://api.stormglass.io/v2/astronomy/';
    const apiKey = '66d9612a-22c0-11eb-a5a9-0242ac130002-66d961a2-22c0-11eb-a5a9-0242ac130002';

    const date = new Date();
    const startDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
    const isoDateString = startDate.toISOString();

    const lat = location.geometry.lat;
    const long = location.geometry.lng;
    const timeOffset = location.annotations.timezone.offset_sec;

    try {
      const searchUrl = `${url}point?lat=${lat}&lng=${long}&start=${isoDateString}`
      const response = await fetch(searchUrl, {
        headers: {
          'Authorization': apiKey
        }
      });
      const data = await response.json();
      console.log(data);
      setsunlightData(data);
      console.log('sunlightData', sunlightData);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getSunlightData();
  }, []);

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
