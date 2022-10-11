import React from "react";
import { useCharacters } from "..//api/useData";

function Characters() {
  const characters = useCharacters(1);

  return characters.results !== undefined ? (
    <div>
      {characters.results.map((character) => (
        <div>
          <img src={character.image} alt="" />
          <p>{character.name}</p>
          <p>{character.species}</p>
        </div>
      ))}
    </div>
  ) : (
    console.log("loding")
  );
}

export default Characters;
