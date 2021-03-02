import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
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
        <div className={styles.locationSearchBtn}>
          <button type="submit" id="locationSearchBtn">
            <FontAwesomeIcon icon={faCompass} className={styles.locationSearchBtnMargin} />
            Search
          </button>
        </div>
      </form>
    </>
  );
}
