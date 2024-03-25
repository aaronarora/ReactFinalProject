import { useState, useEffect, useRef } from 'react';

import { olWorksApiCall, olAuthorsApiCall, keyToOlid, retrieveFavorites } from 'utils';

import Book from 'components/Book/Book';

import 'components/TopBooks/TopBooks.css';

import config from 'config';

// Note: despite the name, we use this component for the
// front page as well as search (the front page is effectively
// the same as the search page search page with nothing entered).
function TopBooks() {
  const [books, setBooks] = useState(null);
  const [curSlideNum, setCurSlideNum] = useState(0);

  const animIntervalRef = useRef(null);

  const booksRef = useRef(null);

  booksRef.current = books;

  useEffect(async () => {
    let newBooks = [];
    for (let olid of config.topBookOlids) {
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

    setBooks(newBooks);

    // Start the interval to run the animation.
    // The page will start by displaying slide 0 on its own
    // and then this interval is responsible for updating it
    // from there. 
    animIntervalRef.current = setInterval(() => {
      setCurSlideNum((curSlideNum) => {
        // Wrap around to item 0 if we're about to go past the end.
        return curSlideNum < config.topBookOlids.length - 1 ? curSlideNum + 1 : 0;
      });
    }, config.topShowsTimePerSlide);



    return () => {
      // Animation interval cleanup logic.
      //
      // We also check to confirm that the animation doesn't exist yet.
      // That should only happen if this page was unmounted before the
      // animation started (which is definitely something that will
      // come up occasionally, because the load isn't instant).

      if (animIntervalRef.current !== null) {
        clearInterval(animIntervalRef.current);
      }
    }
  }, []);


  return (
    <div className="TopBooks-container">
      <h2>Top books</h2>
      {books === null
        ? null
        : (
          <Book compact book={books[curSlideNum]} />
        )}
    </div>
  );
}

export default TopBooks;