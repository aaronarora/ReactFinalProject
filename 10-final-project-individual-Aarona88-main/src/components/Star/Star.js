import React, { useState, useEffect } from "react";
import { checkIsFavorite, updateIsFavorite } from "utils";

import './Star.css';


function Star({ olid, onFavoriteChange }) {
  const [selected, setSelected] = useState(null);

  // Initialize the "selected" status to the current
  // status from local storage about whether the item
  // is favorited.
  useEffect(() => {
    setSelected(checkIsFavorite(olid));
  }, [olid]);

  function handleLinkClick(event) {
    event.preventDefault();

    // Flip "favorited" to the opposite of the current value
    // update both React state and value in local storage.
    // Also, if the outside component has provided a callback
    // to call when the value is updated, call it to report
    // the new change.

    const newValue = !selected;
    updateIsFavorite(olid, newValue);
    setSelected(!selected);

    if (typeof onFavoriteChange !== 'undefined') {
      onFavoriteChange({
        olid: olid,
        isFavorite: newValue
      });
    }
  }

  return (
    selected === null
      ? null
      : (
        <div>
          <a href="#" className={"Star-star" + (selected ? " favorited" : "")} onClick={handleLinkClick}>{'\u2605'}</a>
        </div>
      )
  );
}

export default Star;