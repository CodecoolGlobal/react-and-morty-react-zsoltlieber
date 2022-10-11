import React from "react";
import { useCharacters } from "..//api/useData";
import "./character.css";

function Characters() {
  const characters = useCharacters(1);
  console.log(characters.results)

  return characters.results !== undefined ? (
    <div>
      {characters.results.map((character) => (
        <div className="character" key={character.id}>
          <img src={character.image} alt="" />
          <p>name: {character.name}</p>
          <p>species: {character.species}</p>
          <p>location: {character.location.name}</p>
          <p className="status">status: {character.status}</p>
        </div>
      ))}
    </div>
  ) : (
    console.log("loading...")
  );
}

export default Characters;
