import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import './SearchBox.css';

// Note: despite the name, we use this component for the
// front page as well as search (the front page is effectively
// the same as the search page with nothing entered).
function SearchBox() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [inputText, setInputText] = useState('');

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleSearchFormSubmit(event) {
    event.preventDefault();

    setSearchParams({ q: inputText });
  }

  return (
    <form onSubmit={handleSearchFormSubmit}>
      <input className="SearchBox-search-input" value={inputText} onChange={handleInputChange} />{' '}
      <button className="SearchBox-search-button" type="submit">Search</button>
    </form >
  );
}

export default SearchBox;