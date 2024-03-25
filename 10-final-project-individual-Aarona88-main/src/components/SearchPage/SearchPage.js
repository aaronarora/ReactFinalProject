import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchBox from 'components/SearchBox/SearchBox';
import BooksList from 'components/BooksList/BooksList';
import TopBooks from 'components/TopBooks/TopBooks';

import './SearchPage.css';

import { olSearchApiCall, olBooksApiCall, keyToOlid, olWorksApiCall } from 'utils';

// Note: despite the name, we use this component for the
// front page as well as search (the front page is effectively
// the same as the search page search page with nothing entered).
function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [books, setBooks] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const urlQuery = searchParams.get('q');

  useEffect(() => {
    // Ignore search submission if search box is blank or there's no query
    // at all (the "no query at all" scenario happens when the user is
    // on the front page and hasn't searched anything yet).
    if (urlQuery == null || urlQuery.trim() === '') {
      return;
    }

    setIsLoading(true);

    olSearchApiCall({
      q: urlQuery,
      limit: 8,
    }).then(async (results) => {

      // "new" meaning this will be the new (total) set of books to show, not that we are adding some to an existing list.
      let newBooks = [];
      for (let searchResult of results.docs) {
        let olid = keyToOlid(searchResult.key);

        // Perform another API call to our other Open Library
        // API (the Works API) to get the complete info, including
        // description and cover thumbnail.
        let worksResult;

        // ignore results where the "works" API call fails --
        // can happen due to connection errors, etc.
        //
        // There are also some legitimate redirects that
        // currently cause errors that we're not handling,
        // but they're fairly rare.
        try {
          worksResult = await olWorksApiCall(olid);
        } catch {
          continue;
        }

        newBooks.push({
          authorNames: searchResult.author_name,
          description: worksResult.description,
          title: searchResult.title,
          covers: worksResult.covers,
          olid: olid
        });
      }

      setBooks(newBooks);
      setIsLoading(false);
    });
  }, [searchParams]);


  return (
    <div>
      <TopBooks />
      <div>
        <h2>Search books</h2>
        <SearchBox />
        {/* If there's no query in the address bar (not even an empty
        * one), that means no search has ever been entered, so display
        * nothing. */}
        {urlQuery === null
          ? null
          : (
            isLoading
              ? <div className="SearchPage-results-notice">Loading search results...</div>
              : (
                books.length === 0
                  ? <div className="SearchPage-results-notice">No results for <q>{urlQuery}</q></div>
                  : <BooksList books={books} />
              )
          )
        }
      </div></div>
  );
}

export default SearchPage;