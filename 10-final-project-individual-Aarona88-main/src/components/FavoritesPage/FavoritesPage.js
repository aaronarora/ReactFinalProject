import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchBox from 'components/SearchBox/SearchBox';
import BooksList from 'components/BooksList/BooksList';

import { olWorksApiCall, olAuthorsApiCall, keyToOlid, retrieveFavorites } from 'utils';

// Note: despite the name, we use this component for the
// front page as well as search (the front page is effectively
// the same as the search page search page with nothing entered).
function FavoritesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [books, setBooks] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const favoriteOlids = retrieveFavorites();

  function handleFavoriteChange({ olid, isFavorite }) {
    // If a favorited book has been changed to no longer be
    // the list of favorites (because the user removed a
    // favorite while viewing this page), filter it out of the books
    // we're displaying.
    if (!isFavorite) {
      const newBooks = books.filter((book) => book.olid !== olid);

      setBooks(newBooks);
    }
  }

  useEffect(async () => {
    let newBooks = [];
    for (let olid of favoriteOlids) {
      const worksResult = await olWorksApiCall(olid);

      // Look up authors for this book and add their names
      // to the list of authors.
      let authorNames = [];

      for (let author of worksResult.authors) {
        let authorResult = await olAuthorsApiCall(keyToOlid(author.author.key));
        authorNames.push(authorResult.name);
      }

      newBooks.push({
        authorNames: authorNames,
        description: worksResult.description,
        title: worksResult.title,
        covers: worksResult.covers,
        olid: olid
      });

    }
    setIsLoading(false);
    setBooks(newBooks);
  }, []);


  return (
    <div>
      <h2>Favorites</h2>
      {/* If there's no query in the address bar (not even an empty
        * one), that means no search has ever been entered, so display
        * nothing. */}
      {
        isLoading
          ? null
          : (
            books.length === 0
              ? <em>No saved favorites</em>
              : <BooksList books={books} onFavoriteChange={handleFavoriteChange} />
          )
      }
    </div>
  );
}

export default FavoritesPage;