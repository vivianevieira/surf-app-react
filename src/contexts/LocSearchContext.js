import React, { useState } from 'react';

export const LocSearchContext = React.createContext();

export function LocSearchProvider(props) {
  let url = 'https://api.opencagedata.com/geocode/v1/json';
  const apiKey = '2338c18f4b274400b9a2969d91cba7c7';

  const [locations, setLocations] = useState([])
  const [search, setSearch] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const searchUrl = `${url}?q=${search}&key=${apiKey}&language=en&pretty=1`;
      const response = await fetch(searchUrl);
      const data = await response.json();
      setLocations(data.results);
    } catch (e) {
      console.log(e);
    }
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <LocSearchContext.Provider value={{
      search,
      locations,
      handleSubmit,
      handleSearchChange,
    }}>
      { props.children }
    </LocSearchContext.Provider>
  );
}
