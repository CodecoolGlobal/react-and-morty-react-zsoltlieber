import "./Location.css";

function LocationCard(props) {

  function handleClick() {
    console.log("clicked")
  }

  if (props !== undefined) {
    return (
      
        <div className="location-card" key={props.location.id} onClick={handleClick} >
          <p className="location-name">{props.location.name}</p>
          <p>type:</p>
          <p>{props.location.type} </p>
        </div>
      
    );
  }
}

export default LocationCard;
