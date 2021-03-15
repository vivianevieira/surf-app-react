import styles from '../styles/components/SuggestedSpots.module.css';

export default function SuggestedSpots() {
  return (
    <div className={styles.SuggestedSpotsContainer}>
      <ul>
        <li data-long="24.8960619" data-lat="-34.0297919" data-fullname="Jeffrey's Bay, South Africa" data-utcoffset="7200">
          <p>Suggestions of famous surf spots:</p>
          <br />
          Jeffreys Bay, South Africa
        </li>
        <li data-long="-158.0455857" data-lat="21.6707387" data-fullname="Sunset Beach, Hawaii USA" data-utcoffset="-36000">
          <img src="https://www.countryflags.io/us/flat/16.png" />
          Sunset Beach, Hawaii USA
        </li>
        <li data-long="153.4145987" data-lat="-28.0023731" data-fullname="Gold Coast, Queensland, Australia" data-utcoffset="36000">
          Gold Coast, Queensland, Australia
        </li>
        <li data-long="-117.6849323" data-lat="33.5111848" data-fullname="Trestles Beach, CA USA" data-utcoffset="-28800">
          Trestles Beach, CA USA
        </li>
        <li data-long="-117.2563856" data-lat="33.0466108" data-fullname="Swamis Beach, CA USA" data-utcoffset="-28800">
          Swamis Beach, CA USA
        </li>
      </ul>
    </div>

  );
}
