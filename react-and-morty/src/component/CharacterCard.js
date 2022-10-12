import { useState } from "react";

function CharacterCard(props) {
  const [showMore, setShowMore] = useState(false);

  function showInfo() {
    setShowMore(!showMore)
  }

  console.log(props);
  if (props !== undefined) {
    return (
      <div className="character" key={props.character.id}>
        <img src={props.character.image} alt="" onClick={showInfo} />
        {showMore && <p>name: {props.character.name}</p>}
        {showMore && <p>species: {props.character.species}</p>}
        {showMore && <p>location: {props.character.location.name}</p>}
        <p className="status">status: {props.character.status}</p>
      </div>
    );
  }
}

export default CharacterCard;
