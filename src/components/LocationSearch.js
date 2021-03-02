import React from 'react';
import styles from '../styles/components/LocationSearch.module.css';

export default function LocationSearch() {
  return (
    <>
      <form>
        <div className={styles.locationSearchContainer}>
          <input
            required
            id="searchInput"
            name="searchInput"
            type="text"
            className={styles.locationSearchInput}
            placeholder="Search for surf spot or city"
           />
        </div>
      </form>
      <div>Search Bar</div>
    </>
  );
}
