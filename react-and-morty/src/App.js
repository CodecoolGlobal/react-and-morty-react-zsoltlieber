import React, { useState } from "react";
import "./App.css";
import { useLocations } from "./api/useData";
import Characters from './component/Characters'
import Location from "./component/Location";

function App() {
  const locations = useLocations(1);
  const [showCharacters, setShowCharacters] = useState(false)
  const [showLocations, setShowLocations] = useState(false)

  function locSwitch() {
    if (showCharacters === true) {
      setShowCharacters(!showCharacters)
    }
  setShowLocations(!showLocations)
  }
  function charSwitch() {
    if (showLocations === true) {
      setShowLocations(!showLocations)
    }
  setShowCharacters(!showCharacters)
  }

  return (
    <div className="App">
      <img id="logo" src={require("./Rick-and-Morty.png")} alt="" />
      <div>
        <button onClick={locSwitch} className="buttons">
          Locations
        </button>
        <button onClick={charSwitch} className="buttons">
          Characters
        </button>
      </div>
      {!showLocations && !showCharacters && <p>
        Placeholder Placeholder Placeholder Placeholder Placeholder
      </p>}
      {showCharacters && <Characters/>}
      {showLocations && <Location />}
    </div>
  );
}

export default App;