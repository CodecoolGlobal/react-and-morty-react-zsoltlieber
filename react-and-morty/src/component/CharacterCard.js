import { useState } from "react";

function CharacterCard(props) {
  const [showMore, setShowMore] = useState(false);

  function showInfo() {
    setShowMore(true)
  }

  function hideInfo() {
    setShowMore(false)
  }

  if (props !== undefined) {
    return (
      <div className="character" key={props.character.id} onMouseEnter={showInfo} onMouseLeave={hideInfo}>
        <img src={props.character.image} alt="" className="character-img"/>
        <p className="character-name">{props.character.name}</p>
        {showMore && <p>species: {props.character.species}</p>}
        {showMore && <p>location: {props.character.location.name}</p>}
        {showMore && <p className="status">status: {props.character.status}</p>}
      </div>
    );
  }
}

export default CharacterCard;
