import { useState, useEffect } from 'react';
import styles from '../styles/components/SunlightTimes.module.css';

export default function SunlightTimes({ location }) {
  const [sunlightData, setsunlightData] = useState({
    firstLight: '',
    sunriseTime: '',
    sunsetTime: '',
    lastLight: ''
  });
  const [showInfo, setShowInfo] = useState(false);

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
      const jsonData = await response.json();

      let dawn = new Date(jsonData.data[0].civilDawn);
      let dusk = new Date(jsonData.data[0].civilDusk);
      let sunrise = new Date(jsonData.data[0].sunrise);
      let sunset = new Date(jsonData.data[0].sunset);

      const dawnDateObj = new Date(dawn.getTime() + (dawn.getTimezoneOffset() * 60000) + (timeOffset * 1000));
      const duskDateObj = new Date(dusk.getTime() + (dusk.getTimezoneOffset() * 60000) + (timeOffset * 1000));
      const sunriseDateObj = new Date(sunrise.getTime() + (sunrise.getTimezoneOffset() * 60000) + (timeOffset * 1000));
      const sunsetDateObj = new Date(sunset.getTime() + (sunset.getTimezoneOffset() * 60000) + (timeOffset * 1000));

      const firstLight = `${dawnDateObj.getHours()}:${dawnDateObj.getMinutes() > 9 ? dawnDateObj.getMinutes() : '0'
      + dawnDateObj.getMinutes()} am`;
      const sunriseTime = `${sunriseDateObj.getHours()}:${sunriseDateObj.getMinutes() > 9 ? sunriseDateObj.getMinutes() : '0'
      + sunriseDateObj.getMinutes()} am`;
      const sunsetTime = `${sunsetDateObj.getHours() - 12}:${sunsetDateObj.getMinutes() > 9 ? sunsetDateObj.getMinutes() : '0'
      + sunsetDateObj.getMinutes()} pm`;
      const lastLight = `${duskDateObj.getHours() - 12}:${duskDateObj.getMinutes() > 9 ? duskDateObj.getMinutes() : '0'
      + duskDateObj.getMinutes()} pm`;

      setsunlightData({
        firstLight: firstLight,
        sunriseTime: sunriseTime,
        sunsetTime: sunsetTime,
        lastLight: lastLight
      })

      setShowInfo(!showInfo);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getSunlightData();
  }, []);

  return (
    <>
    {showInfo ?
    <div className={styles.SunlightTimesCont}>
      <div className={styles.SunlightTimesDateHeader}>{dateHeader}</div>
      <div className={styles.SunlightTimesSunrise}>
        <div className={styles.SunlightTimesIcon}>
          <img src="../images/sunrise.png" alt="" width="35px" />
        </div>
        <div>
          <div>First light: <span className={styles.SunlightTimesValue}>{sunlightData.firstLight}</span></div>
          <div>Sunrise: <span className={styles.SunlightTimesValue}>{sunlightData.sunriseTime}</span></div>
        </div>
      </div>
      <div className={styles.SunlightTimesSunrise}>
        <div className={styles.SunlightTimesIcon}>
          <img src="../images/sunset.png" alt="" width="35px" />
        </div>
        <div>
          <div>Sunset: <span className={styles.SunlightTimesValue}>{sunlightData.sunsetTime}</span></div>
          <div>Last light: <span className={styles.SunlightTimesValue}>{sunlightData.lastLight}</span></div>
        </div>
      </div>
    </div>
    : null}
    </>
  );
}
