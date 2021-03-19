import { useState, useEffect, useContext } from "react"
import { SurfDataContext } from '../contexts/SurfDataContext';
import { NavLink } from 'react-router-dom';
import styles from '../styles/pages/Favorites.module.css';

export default function Favorites() {
  const { handleLocationClicked } = useContext(SurfDataContext);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favSurfSpots'));
    if (favorites) {
      setFavorites(favorites);
      console.log('favorites saved')
      console.log(favorites)
    }
  }, []);

  return (
    <>
      <div className={styles.FavoritesTitle}>
        <h2>Favorite spots</h2>
      </div>
      <div className={styles.FavoritesList}>
        {favorites.length > 0 ? (
          <ul>
            {favorites.map(fav => (
              <li key={fav.annotations.geohash}>
                <NavLink to="/surfcheck" onClick={() => handleLocationClicked(fav)}>
                  {fav.formatted}
                </NavLink>
              </li>
            ))}
          </ul>
        )
        :(
          <p>No surf spots saved to favorites yet.</p>
        )}
      </div>
    </>
  )
};
