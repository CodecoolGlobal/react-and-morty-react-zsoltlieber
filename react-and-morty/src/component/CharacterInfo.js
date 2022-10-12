import React from "react";
import { useCharacters } from "../api/useData";


function CharactersInfo(props) {
  const character = useCharacters
  console.log(character)
  const characters = useCharacters.characters
  return characters.results !== undefined ? (
    <>
    <img id="logoSmall" src={require("../Rick-and-Morty.png")} alt="" />
    <div className="cardList">
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
    </>
  ) : (
    console.log("loading...")
  );
}

export default CharactersInfo;
