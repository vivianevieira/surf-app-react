import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SurfDataContext } from '../contexts/SurfDataContext';
import styles from '../styles/components/SuggestedSpots.module.css';

const locationsList = [
  {
    formatted: 'Jeffreys Bay, South Africa',
    geometry: {
      lat: -34.0297919,
      lng: 24.8960619
    },
    annotations: {
      timezone: {
        offset_sec: 7200
      }
    },
    countryFlag: 'za'
  },
  {
    formatted: 'Sunset Beach, Hawaii USA',
    geometry: {
      lat: 21.6707387,
      lng: -158.0455857
    },
    annotations: {
      timezone: {
        offset_sec: -36000
      }
    },
    countryFlag: 'us'
  },
  {
    formatted: 'Gold Coast, Queensland, Australia',
    geometry: {
      lat: -28.0023731,
      lng: 153.4145987
    },
    annotations: {
      timezone: {
        offset_sec: 36000
      }
    },
    countryFlag: 'au'
  },
    {
    formatted: 'Trestles Beach, CA USA',
    geometry: {
      lat: 33.5111848,
      lng: -117.6849323
    },
    annotations: {
      timezone: {
        offset_sec: -28800
      }
    },
    countryFlag: 'us'
  },
   {
    formatted: 'Swamis Beach, CA USA',
    geometry: {
      lat: 33.0466108,
      lng: -117.2563856
    },
    annotations: {
      timezone: {
        offset_sec: -28800
      }
    },
    countryFlag: 'us'
  }

]

export default function SuggestedSpots() {
  const { handleLocationClicked } = useContext(SurfDataContext);

  const [location, setLocation] = useState({});

  const handleSuggestedSpotClicked = async (props) => {
    const { formatted, geometry } = props;

    const lat = geometry.lat;
    const lng = geometry.lng;

    const url = 'https://api.opencagedata.com/geocode/v1/json';
    const apiKey = '2338c18f4b274400b9a2969d91cba7c7';

    try {
      const searchUrl = `${url}?q=${lat}+${lng}&key=${apiKey}`;
      const response = await fetch(searchUrl);
      const data = await response.json();
      console.log('data', data.results[0]);
      const locationData =  data.results[0];
      setLocation({ ...locationData, formatted: formatted});
      console.log(location);
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <div className={styles.SuggestedSpotsContainer}>
      <p>Suggestions of famous surf spots:</p>
      <ul>
        {locationsList.map((loc, index) => (
          <li key={`loc-${index}`}>
            <NavLink to="/" onClick={() => handleSuggestedSpotClicked(loc)}>
              <img className={styles.SuggestedSpotsFlag} src={`https://www.countryflags.io/${loc.countryFlag}/flat/24.png`} />
              {loc.formatted}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>

  );
}
