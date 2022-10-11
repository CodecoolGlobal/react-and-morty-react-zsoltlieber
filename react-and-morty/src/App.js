import React, { useState } from "react";
import "./App.css";
import { useLocations } from "./api/useData";
import Characters from './component/Characters'
import Location from "./component/Location";
function App() {

  const locations = useLocations(1);
  const [isDisplayed, setIsDisplayed] = useState(true)
  const [isCharactersDisplayed, setIsCharactersDisplayed] = useState(false)
  const [isLocationDisplayed, setIsLocationDisplayed] = useState(false)

  function showLocations() {
    setIsDisplayed(false)
    setIsLocationDisplayed(!isLocationDisplayed)
  }

  function showCharacters() {
    setIsDisplayed(false)
    setIsCharactersDisplayed(!isCharactersDisplayed)
  }

  console.log("Locations data: ");
  console.log(locations);

  return (
    <div className="App">
      <img id="logo" src={require("./Rick-and-Morty.png")} alt="" />
      <div>
        <button onClick={showLocations} className="buttons">
          Locations
        </button>
        <button onClick={showCharacters} className="buttons">
          Characters
        </button>
      </div>
      <p style={{ display: isDisplayed ? "block" : "none" }}>
        Placeholder Placeholder Placeholder Placeholder Placeholder
      </p>
      <Characters style={{ display: isCharactersDisplayed ? "flex" : "none" }} />
      <Location style={{ display: isLocationDisplayed ? "flex" : "none" }} />
    </div>
  );
}

export default App;
