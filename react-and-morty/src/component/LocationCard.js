import {useState} from 'react'
import "./Location.css";

function LocationCard(props) {
  const [showMore, setShowMore] = useState(false);

  function showInfo() {
    setShowMore(true)
  }

  function hideInfo() {
    setShowMore(false)
  }

  if (props !== undefined) {
    return (
      
        <div className="location-card" key={props.location.id} onMouseEnter={showInfo} onMouseLeave={hideInfo}>
          <p className="location-name">{props.location.name}</p>
          {<p>type:</p>}
          {<p>{props.location.type} </p>}
          <p className='space'></p>
          {showMore && <p>Dimension:</p>} 
          {showMore && <p>{props.location.dimension} </p>}
        </div>
      
    );
  }
}

export default LocationCard;
