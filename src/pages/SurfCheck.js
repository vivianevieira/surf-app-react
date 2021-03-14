import { useContext } from 'react';
import SurfData from '../components/SurfData';
import SunlightTimes from '../components/SunlightTimes'
import Loader from '../components/Loader';
import { SurfDataContext } from '../contexts/SurfDataContext';
import styles from '../styles/pages/SurfCheck.module.css'

export default function SurfCheck () {
  const { location, loading, surfData } = useContext(SurfDataContext);
  return (
    <>
    {loading ? <Loader /> :
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
