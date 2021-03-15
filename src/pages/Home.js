import React from 'react';
import LocationSearch from '../components/LocationSearch';
import SearchResults from '../components/SearchResults';
import SuggestedSpots from '../components/SuggestedSpots';

export default function Home() {
  return (
    <>
      <LocationSearch />
      <SuggestedSpots />
    </>
  )
};
