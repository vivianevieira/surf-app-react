import styles from '../styles/components/FavoritesModal.module.css';

export default function FavoritesModal(props) {

const { closeFavModal, favoriteClicked } = props;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <p>Rename surf spot:</p>
        <form>
          <input required type="text" placeholder={favoriteClicked.formatted} />
          <div className={styles.btnContainer}>
            <button type="submit">
              Save
            </button>
          </div>
        </form>

        <button type="button" className={styles.closeModal} onClick={props.closeFavModal}>
          <img src="images/icons/close.svg" alt="Close modal" />
        </button>
      </div>
    </div>
  )
}
