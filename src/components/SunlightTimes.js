import { useState, useContext, useEffect } from 'react';
import { SurfDataContext } from '../contexts/SurfDataContext';
import styles from '../styles/components/SunlightTimes.module.css';

export default function SunlightTimes() {
  const [sunlightData, setsunlightData] = useState({
    firstLight: '',
    sunriseTime: '',
    sunsetTime: '',
    lastLight: ''
  });
  const [showInfo, setShowInfo] = useState(false);
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
    console.log('timeOffset', timeOffset);

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

      const dawnTimeObj = new Date(dawn.getTime() + (dawn.getTimezoneOffset() * 60000) + (timeOffset * 1000));
      const duskTimeObj = new Date(dusk.getTime() + (dusk.getTimezoneOffset() * 60000) + (timeOffset * 1000));
      const sunriseTimeObj = new Date(sunrise.getTime() + (sunrise.getTimezoneOffset() * 60000) + (timeOffset * 1000));
      const sunsetTimeObj = new Date(sunset.getTime() + (sunset.getTimezoneOffset() * 60000) + (timeOffset * 1000));

      const firstLight = `${dawnTimeObj.getHours()}:${dawnTimeObj.getMinutes()} am`;
      const sunriseTime = `${sunriseTimeObj.getHours()}:${sunriseTimeObj.getMinutes() > 9 ? sunriseTimeObj.getMinutes() : '0'
      + sunriseTimeObj.getMinutes()} am`;
      const sunsetTime = `${sunsetTimeObj.getHours() - 12}:${sunsetTimeObj.getMinutes()} pm`;
      const lastLight = `${duskTimeObj.getHours() - 12}:${duskTimeObj.getMinutes()} pm`;

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

  useEffect(() => {
  console.log(sunlightData);
}, [sunlightData]);

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
