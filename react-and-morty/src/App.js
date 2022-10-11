import React, { useState } from "react";
import "./App.css";
import { useLocations } from "./api/useData";
import Characters from "./conponent/Characters";
import Location from "./conponent/Location";

function App() {
  const locations = useLocations(1);
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [isDisplayedCharacter, setisDisplayedCharacter] = useState(true);
  const [isDisplayedLocation, setisDisplayedLocation] = useState(true);

  function hideDescription() {
    setIsDisplayed(!isDisplayed);
  }

  console.log("Locations data: ");
  console.log(locations);

  return (
    <div className="App">
      <img id="logo" src={require("./Rick-and-Morty.png")} alt="" />
      <div>
        <button onClick={hideDescription} className="buttons">
          Locations
        </button>
        <button onClick={hideDescription} className="buttons">
          Characters
        </button>
      </div>
      <p style={{ display: isDisplayed ? "block" : "none" }}>
        Placeholder Placeholder Placeholder Placeholder Placeholder
      </p>
      {isDisplayedCharacter && <Characters />}
      {isDisplayedLocation && <Location />}
    </div>
  );
}

export default App;
