import { useContext } from 'react';
import SurfData from '../components/SurfData';
import { SurfDataContext } from '../contexts/SurfDataContext';

export default function SurfCheck () {
  const { location, loading, surfData } = useContext(SurfDataContext);
  return (
    <>
    {loading ? <h1>Fetching data...</h1> :
      <SurfData surfData={surfData} location={location} loading={loading} />}
    </>
  );
}
