import React, { useState } from "react";
import "./App.css";
import Characters from "./component/Characters";
import Location from "./component/Location";
import background from "./background.png";

function App() {
  const [showCharacters, setShowCharacters] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

  function locSwitch() {
    if (showCharacters === true) {
      setShowCharacters(!showCharacters);
    }
    setShowLocations(!showLocations);
  }
  function charSwitch() {
    if (showLocations === true) {
      setShowLocations(!showLocations);
    }
    setShowCharacters(!showCharacters);
  }

  return (
    <div className="App" style={{
       backgroundImage : `url(${background})`,
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       backgroundAttachment: "fixed",
       height: "800vh"
       }}>
      {!showCharacters && !showLocations && (
        <img id="logo" src={require("./Rick-and-Morty.png")} alt="" />
      )}
      <div>
        <button onClick={locSwitch} className="buttons">
          Locations
        </button>
        <button onClick={charSwitch} className="buttons">
          Characters
        </button>
      </div>
      {!showLocations && !showCharacters && (
        <>
          <p>
            "Rick and Morty is an American adult animated science-fiction
            <br></br>
            sitcom created by Justin Roiland and Dan Harmon for Cartoon<br></br>
            Network's nighttime programming block Adult Swim."
            <a href="https://en.wikipedia.org/wiki/Rick_and_Morty"> © link</a>
          </p>
        </>
      )}
      <div className="container">
     
        {showCharacters && <Characters />}
        {showLocations && <Location />}
      </div>
    </div>
  );
}

export default App;
