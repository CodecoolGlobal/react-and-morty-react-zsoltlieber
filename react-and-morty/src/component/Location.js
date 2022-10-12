import React from 'react'
import { useLocations } from "../api/useData";
import LocationCard from "./LocationCard";
import "./Location.css";

function Location() {
  const locations = useLocations(1);

  return locations.results !== undefined ? (
    <>
    <h1 className='location-title'>LOCATIONS</h1>
    <div className="locations"> 
      {locations.results.map((location) => (
        <LocationCard location={location} />
      ))}
    </div>
    </>
  )
  : (
    console.log('loading...')
  )
}

export default Location