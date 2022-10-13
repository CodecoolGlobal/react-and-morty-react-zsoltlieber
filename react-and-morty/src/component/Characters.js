import React from "react";
import { useState } from "react";
import { useCharacters } from "../api/useData";
import CharacterCard from "./CharacterCard";
import "./character.css";

function Characters() {
  let [startPageNr, setStartPageNer] = useState(1);
  let [actualPageNr, setActualPageNr] = useState(1);
  let characters = useCharacters(startPageNr);
  let maxPage = characters.info?.pages;

  function pageChanger(e) {
    setStartPageNer(e.target.innerText);
  }

  function decrementPageNr() {
    if (actualPageNr > 6) {
      setActualPageNr(actualPageNr - 5);
    } else setActualPageNr(1);
  }
  function incrementPageNr() {
    if (actualPageNr < maxPage - 6) {
      setActualPageNr(actualPageNr + 5);
    } else setActualPageNr(maxPage - 4);
  }

  if (!maxPage) {
    return null;
  }
  return characters.results !== undefined ? (
    <>
      <div className="pagination">
        <div className="page" onClick={decrementPageNr}>
          prev
        </div>
        <div className="page" onClick={pageChanger}>
          {Number(actualPageNr)}
        </div>
        <div className="page" onClick={pageChanger}>
          {Number(actualPageNr) + 1}
        </div>
        <div className="page" onClick={pageChanger}>
          {Number(actualPageNr) + 2}
        </div>
        <div className="page" onClick={pageChanger}>
          {Number(actualPageNr) + 3}
        </div>
        <div className="page" onClick={pageChanger}>
          {Number(actualPageNr) + 4}
        </div>
        <div className="page">...</div>
        <div className="page">{maxPage}</div>
        <div className="page" onClick={incrementPageNr}>
          next
        </div>
      </div>

      <img id="logoSmall" src={require("../Rick-and-Morty.png")} alt=""></img>
      <h1 className="character-title">CHARACTERS</h1>
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
