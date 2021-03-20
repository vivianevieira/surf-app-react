import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LocSearchContext } from '../contexts/LocSearchContext';
import { SurfDataContext } from '../contexts/SurfDataContext';
import styles from '../styles/components/SearchResults.module.css';

export default function SearchResults() {
  const appContext = useContext(LocSearchContext);
  const { locations } = appContext;

  const { handleLocationClicked } = useContext(SurfDataContext);

  return (
    <div className={styles.SearchResultsContainer}>
      Search Results
      <ul>
        {locations.map(loc => (
          <li key={loc.annotations.geohash}>
            <NavLink to="/surfcheck" onClick={() => handleLocationClicked(loc)}>
              {loc.annotations.flag}   {loc.formatted}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
