import { useState } from "react";

function CharacterCard(props) {
  const [showMore, setShowMore] = useState(true);

  function handleClick() {
    setShowMore(!showMore);
    console.log("clicked");
    console.log(showMore)
  }

  console.log(props);
  if (props !== undefined) {
    return (
      <div onClick={handleClick} className="character" key={props.character.id}>
        <img src={props.character.image} alt="" />
        <p>name: {props.character.name}</p>
        <p>species: {props.character.species}</p>
        <p>location: {props.character.location.name}</p>
        <p className="status">status: {props.character.status}</p>
      </div>
    );
  }
}

export default CharacterCard;
