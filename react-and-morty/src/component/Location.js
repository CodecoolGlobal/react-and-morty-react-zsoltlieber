import React from 'react'
import { useLocations } from "../api/useData";
import "./Location.css";

function Location() {
  const locations = useLocations(1);

  return locations.results !== undefined ? (
    <div>
      {locations.results.map((location) => (
        <div className='location-card' key={location.id}>
          <p>{location.name}</p>
          <p>{location.type}</p>
        </div>
      ))}
    </div>
  )
  : (
    console.log('loading...')
  )
}

export default Location