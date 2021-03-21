import styles from '../styles/components/FavoritesModal.module.css';

export default function FavoritesModal(props) {

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>Header</header>

        <strong>Congratulations!</strong>
        <p>You have reached a new level.</p>

        <button type="button" >
          {/* <img src="/icons/close.svg" alt="Close modal" /> */}
        </button>
      </div>
    </div>
  )
}
