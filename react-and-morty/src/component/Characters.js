import React from "react";
import { useState } from "react";
import { useCharacters } from "../api/useData";
import CharacterCard from "./CharacterCard";
import "./character.css";

function Characters() {
  let [pageComp, setPageComp] = useState(1)
  let characters = useCharacters(pageComp);
  let maxPage = (characters.info?.pages)

  if (!maxPage) {return null} else {console.log(maxPage)}
  return characters.results !== undefined ? (
    <>
    <img id="logoSmall" src={require("../Rick-and-Morty.png")} alt=""></img>
    <button onClick={()=> {if (pageComp > 1) setPageComp(pageComp - 1)}}>Back</button>
    <p> Current page is : {pageComp} </p>
    <button onClick={()=> {if (pageComp < 42) setPageComp(pageComp + 1)}}>Forward</button>
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
