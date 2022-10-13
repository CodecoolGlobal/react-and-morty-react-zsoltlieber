import React, { useState } from "react";
import { useLocations } from "../api/useData";
import LocationCard from "./LocationCard";
import "./Location.css";

function Location() {
  let [startPageNr, setStartPageNer] = useState(1);
  let [actualPageNr, setActualPageNr] = useState(1);
  const locations = useLocations(startPageNr);
  let maxPage = locations.info?.pages;

  function pageChanger(e) {
    setStartPageNer(e.target.innerText);
    console.log(e.target.innerText);
  }

  function decrementPageNr() {
    if (actualPageNr > 6) {
      setActualPageNr(actualPageNr - 5);
    } else setActualPageNr(1);
  }
  function incrementPageNr() {
    if (actualPageNr < maxPage - 6) {
      setActualPageNr(actualPageNr + 5);
    } else setActualPageNr(maxPage - 4);
  }

  if (!maxPage) {return null;}

  return locations.results !== undefined ? (
      <>
      <div className="pagination">
        <div className="page" onClick={decrementPageNr}>
          prev
        </div>
        <div className="page" onClick={pageChanger}>
          {Number(actualPageNr)}
        </div>
        <div className="page" onClick={pageChanger}>
          {Number(actualPageNr) + 1}
        </div>
        <div className="page" onClick={pageChanger}>
          {Number(actualPageNr) + 2}
        </div>
        <div className="page" onClick={pageChanger}>
          {Number(actualPageNr) + 3}
        </div>
        <div className="page" onClick={pageChanger}>
          {Number(actualPageNr) + 4}
        </div>
        <div className="page">...</div>
        <div className="page">{maxPage}</div>
        <div className="page" onClick={incrementPageNr}>
          next
        </div>
      </div>
  
      <h1 className="location-title">LOCATIONS</h1>
      <div className="locations">
        {locations.results.map((location) => (
          <LocationCard location={location} />
        ))}
      </div>
    </>
  ) : (
    console.log("loading...")
  );
}

export default Location;
