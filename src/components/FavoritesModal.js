import { useState } from 'react';
import styles from '../styles/components/FavoritesModal.module.css';

export default function FavoritesModal(props) {
const { closeFavModal, favoriteClicked, favorites, setFavorites } = props;

const [rename, setRename]= useState('');

function handleRenameChange(e) {
  setRename(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  const result = favorites.filter(fav => fav.annotations.geohash !== favoriteClicked.annotations.geohash);
  setFavorites([...result, {...favoriteClicked, formatted: rename}]);
  closeFavModal();
}

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <p>Rename surf spot:</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            required
            type="text"
            placeholder={favoriteClicked.formatted}
            onChange={(e) => handleRenameChange(e)}
          />
          <div className={styles.btnContainer}>
            <button type="submit">
              Save
            </button>
          </div>
        </form>

        <button type="button" className={styles.closeModal} onClick={closeFavModal}>
          <img src="images/icons/close.svg" alt="Close modal" />
        </button>
      </div>
    </div>
  )
}
