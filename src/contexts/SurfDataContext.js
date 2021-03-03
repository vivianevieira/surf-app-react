import React, { useState, createContext} from 'react';

export const SurfDataContext = React.createContext();

export function SurfDataProvider(props) {
  const [location, setLocation] = useState([]);

  function locationClicked(props) {
    setLocation(props);
    console.log('clickedlocations:', location);
  }

  return(
    <SurfDataContext.Provider value={{location, locationClicked}}>
      {props.children}
    </SurfDataContext.Provider>
  )
}
