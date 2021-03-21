import { useState, useEffect, useContext } from "react"
import { SurfDataContext } from '../contexts/SurfDataContext';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import FavoritesModal from '../components/FavoritesModal';
import styles from '../styles/pages/Favorites.module.css';

export default function Favorites() {
  const { handleLocationClicked } = useContext(SurfDataContext);

  const [favorites, setFavorites] = useState([]);
  const [isFavModalOpen, setIsFavModalOpen] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favSurfSpots'));
    if (favorites) {
      setFavorites(favorites);
      console.log('favorites saved')
      console.log(favorites)
    }
  }, []);

  function openFavModal() {
    setIsFavModalOpen(true);
  }

  function closeFavModal() {
    setIsFavModalOpen(false);
  }


  return (
    <>
      <div className={styles.FavoritesTitle}>
        <h2>Favorite spots</h2>
      </div>
      <div className={styles.FavoritesList}>
        {favorites.length > 0 ? (
          <table className={styles.FavoritesListTable}>
            <tbody>
              {favorites.map(fav => (
                <tr key={fav.annotations.geohash}>
                  <td>
                    <NavLink to="/surfcheck" onClick={() => handleLocationClicked(fav)}>
                      {fav.formatted}
                    </NavLink>
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faEllipsisV}
                      size="lg"
                      onClick={() => openFavModal()}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
        :(
          <p>No surf spots saved to favorites yet.</p>
        )}
      </div>
      {isFavModalOpen && <FavoritesModal />}
    </>
  )
};
