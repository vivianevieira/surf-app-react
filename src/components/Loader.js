import styles from '../styles/components/Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.LoaderCont}>
      <h3>Fetching data...</h3>
      <img src="../images/loader.gif" alt="loader" />
    </div>
  );
}
