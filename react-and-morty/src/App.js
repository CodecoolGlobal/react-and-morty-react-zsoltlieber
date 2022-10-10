import React, { useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);
  const [isDisplayed, setIsDisplayed] = useState(true)

  function hideDescription() {
    setIsDisplayed(!isDisplayed)
  }

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return (
    <div className="App">
      <img id="logo" src={require('./Rick-and-Morty.png')} />
      <div>
        <button onClick={hideDescription} className="buttons">Locations</button>
        <button onClick={hideDescription} className="buttons">Characters</button>
      </div>
      <p style={{display: isDisplayed ? 'block' : 'none'}} >Placeholder Placeholder Placeholder Placeholder Placeholder</p>
    </div>
  );
}

export default App;
