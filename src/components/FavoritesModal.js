import styles from '../styles/components/FavoritesModal.module.css';

export default function FavoritesModal(props) {

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <p>Rename surf spot:</p>
        <form>
          <input required type="text" placeholder="Surf spot name" />
          <div className={styles.btnContainer}>
            <button type="submit">
              Save
            </button>
          </div>
        </form>

        <button type="button" className={styles.closeModal}>
          <img src="images/icons/close.svg" alt="Close modal" />
        </button>
      </div>
    </div>
  )
}
