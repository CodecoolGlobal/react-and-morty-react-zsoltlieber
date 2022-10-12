import React from "react";
import { useCharacters } from "../api/useData";
import CharactersInfo from "./CharacterInfo";
import "./Character.css";

function Characters() {
  const characters = useCharacters(1);
  const cards = document.querySelectorAll('.character')
  console.log(cards)
  // cards.map(card => card.addEventListener('click', CharactersInfo))
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

export default Characters;
