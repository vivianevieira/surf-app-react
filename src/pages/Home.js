import React from 'react';
import LocationSearch from '../components/LocationSearch';
import SearchResults from '../components/SearchResults';
import SuggestedSpotsList from '../components/SuggestedSpotsList';

export default function Home() {
  return (
    <>
      <LocationSearch />
      <SuggestedSpotsList />
      <SearchResults />
    </>
  )
};
