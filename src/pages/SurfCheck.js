import { useContext } from 'react';
import SurfData from '../components/SurfData';
import SunlightTimes from '../components/SunlightTimes'
import { SurfDataContext } from '../contexts/SurfDataContext';
import styles from '../styles/pages/SurfCheck.module.css'

export default function SurfCheck () {
  const { location, loading, surfData } = useContext(SurfDataContext);
  return (
    <>
    {loading ? <h1>Fetching data...</h1> :
    <>
      <SurfData surfData={surfData} location={location} loading={loading} />
      <div className={styles.SurfCheckLightTideCont}>
        <SunlightTimes />
      </div>
     </>
      }
    </>
  );
}
