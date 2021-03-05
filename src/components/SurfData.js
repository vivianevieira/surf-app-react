import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faWater, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import { SurfDataContext } from '../contexts/SurfDataContext'
import styles from '../styles/components/SurfData.module.css';

export default function SurfData() {
  const { location, surfData } = useContext(SurfDataContext);

  const { formatted } = location;
  // const {
  //   waveHeight,
  //   wavePeriod,
  //   waveDirection,
  //   secondarySwellHeight,
  //   secondarySwellPeriod,
  //   secondarySwellDirection,
  //   waterTemperature,
  //   airTemperature,
  //   windSpeed,
  //   windDirection
  // } = surfData;

  console.log('surfData', surfData)

  const [SurfDataValues, setSurfDataValues] = useState({})

  useEffect(() => {
    setSurfDataValues(surfData);
  }, []);

  console.log('SurfDataValues', SurfDataValues)

    const {
    waveHeight,
    wavePeriod,
    waveDirection,
    secondarySwellHeight,
    secondarySwellPeriod,
    secondarySwellDirection,
    waterTemperature,
    airTemperature,
    windSpeed,
    windDirection
  } = SurfDataValues;

  const waveHeight1 = Math.round(waveHeight.noaa * 3.281);



  return (
    <>
      <div className={styles.SurfDataTitle}>
        <div>
          <h3>{formatted}</h3>
        </div>
        <div>
          <button type="button" className={styles.SurfDataFavBtn}>
            <FontAwesomeIcon icon={faHeart} size="lg" className={styles.SurfDataFavIcon} />
          </button>
        </div>
      </div>
      <div>
        <img src="/globe.png" alt="" className={styles.SurfDataMapImage} />
      </div>
      <div className={styles.SurfDataCont}>
        <div>
          <div className={styles.SurfDataWaveHeightTitle}>Wave Height</div>
          <div className={styles.SurfDataWaveHeightvalue}>{waveHeight1}ft</div>
          <div className={styles.SurfDataPrimarySwell}>{wavePeriod.noaa}s {waveDirection.noaa}°</div>
          <div className={styles.SurfDataPrimarySwellTitle}>Secondary Swell</div>
          <div>1.1ft at 14s 290°</div>
        </div>
        <div>
          <div className={styles.SurfDataTempCont}>
            <div className={styles.SurfDataWaterTemp}>
              <div>
                <FontAwesomeIcon icon={faWater} size="lg" className={styles.SurfDataWaterTempIcon} />
              </div>
              <div>58°F</div>
            </div>
            <div className={styles.SurfDataAirTemp}>
              <div>
                <FontAwesomeIcon icon={faThermometerHalf} size="lg" className={styles.SurfDataAirTempIcon} />
              </div>
              <div>57°F</div>
            </div>
          </div>
          <div className={styles.SurfDataWindCont}>
            <div className={styles.SurfDataWindTitle}>Wind</div>
            <div>13kts 164 °</div>
            <div className={styles.SurfDataWindGust}>(16kts gusts)</div>
          </div>
        </div>
      </div>
    </>
  );
}
