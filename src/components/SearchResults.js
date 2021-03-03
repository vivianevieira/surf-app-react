import React, { useContext } from 'react';
import { LocSearchContext } from '../contexts/LocSearchContext';
import styles from '../styles/components/SearchResults.module.css';

export default function SearchResults() {
  const appContext = useContext(LocSearchContext);
  const { locations } = appContext;
  console.log(locations)

  return (
    <div className={styles.SearchResultsContainer}>
      Search Results
      <ul>
        {locations.map(loc => (
          <li key={loc.annotations.geohash}>
            {loc.annotations.flag}   {loc.formatted}
          </li>
        ))}
      </ul>
    </div>
  )
}
