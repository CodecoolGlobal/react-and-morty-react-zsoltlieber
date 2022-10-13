import React, { useState } from "react";

export const Pagination = (props) => {
  const [startPageNr, setStartPageNer] = useState(1);

  function pageChanger(e) {
    console.log(e.target.innerText);
  }

  function decrementPageNr() {
    if (startPageNr > 6) {
      setStartPageNer(startPageNr - 5);
    } else setStartPageNer(1);
  }
  function incrementPageNr() {
    if (startPageNr < props.maxPage -6) {
      setStartPageNer(startPageNr + 5);
    } else setStartPageNer(props.maxPage-4);
  }

  return (
    <>
      <div className="pagination">
        <div className="page" onClick={decrementPageNr}>
          prev
        </div>
        <div className="page" onClick={pageChanger}>
          {startPageNr}
        </div>
        <div className="page" onClick={pageChanger} id="active">
          {startPageNr + 1}
        </div>
        <div className="page" onClick={pageChanger}>
          {startPageNr + 2}
        </div>
        <div className="page" onClick={pageChanger}>
          {startPageNr + 3}
        </div>
        <div className="page" onClick={pageChanger}>
          {startPageNr + 4}
        </div>
        <div className="page" onClick={pageChanger}>
          ...
        </div>
        <div className="page" onClick={pageChanger}>
          {props.maxPage}
        </div>
        <div className="page" onClick={incrementPageNr}>
          next
        </div>
      </div>
    </>
  );
};
