import React from "react";

import { useCharacters } from "../api/useData";
import CharacterCard from "./CharacterCard";
import "./character.css";

function Characters() {
  let characters = useCharacters(1);
  console.log(characters.results);
  let firstPage = 1;
  let secondPage = 2;
  let thirdPage = 3;

  function handlePaginationChange(e) {
    console.log(e.target);
  }

  return characters.results !== undefined ? (
    <>
    <img id="logoSmall" src={require("../Rick-and-Morty.png")} alt=""></img>
    <h1 className="character-title" >CHARACTERS</h1>
    <div className="cardList">
      {characters.results.map((chara) => (
        <CharacterCard character={chara} />
      ))}
    </div>
    </>
  ) : (
    console.log("loading...")
  );
}

export default Characters;
