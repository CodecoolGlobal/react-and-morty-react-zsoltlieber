import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return (
    <div className="App">
      <img id="logo" src={require('./Rick-and-Morty.png')} />
      <div>
        <button className="buttons">Locations</button>
        <button className="buttons">Characters</button>
      </div>
      <p>Placeholder Placeholder Placeholder Placeholder Placeholder</p>
    </div>
  );
}

export default App;
