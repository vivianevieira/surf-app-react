import React, { useContext, useEffect } from 'react';
import { LocSearchContext } from '../contexts/LocSearchContext';
import LocationSearch from '../components/LocationSearch';
import SearchResults from '../components/SearchResults';
import SuggestedSpotsList from '../components/SuggestedSpotsList';

export default function Home() {
  const appContext = useContext(LocSearchContext);
  const { searchLoading, setSearchLoading } = appContext;

  useEffect(() => {
    setSearchLoading(false);
  }, []);

  return (
    <>
      <LocationSearch />
      {searchLoading === true ? (
        <SearchResults />
      ) : (
        <SuggestedSpotsList />
      )}
    </>
  )
};
