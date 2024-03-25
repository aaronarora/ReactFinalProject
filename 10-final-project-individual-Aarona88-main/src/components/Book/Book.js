import Star from 'components/Star/Star';

import './Book.css';

// Takes a book JSON object in the format
function Book({ book, compact = false, onFavoriteChange }) {
  function truncateDescIfNeeded(text) {
    if (!compact || text.length <= 500) {
      return text;
    } else {
      return text.substr(0, 300) + '...';
    }
  }

  const { title, authorNames, olid, description, covers } = book;

  // Description sometimes comes as an object with keys "type" and
  // "value" (type is content type), and sometimes as a pure string.
  // The key can also be totally absent (this gets passed down to here
  // as undefined)
  let descriptionContent;
  if (typeof description === 'undefined') {
    descriptionContent = <em>No description</em>;
  } else if (typeof description === 'object' && description !== null) {
    descriptionContent = truncateDescIfNeeded(description.value);
  } else {
    descriptionContent = truncateDescIfNeeded(description);
  }

  // The APIs return a list of cover art (probably just all the cover
  // art for all the different editions of the book). It can be absent,
  // in which case it ends up getting passed here as undefined. Possibly
  // it can also be empty. In the undefined or empty case, display a
  // placeholder div.
  let coverEl;
  if (typeof covers === 'undefined' || covers.length === 0) {
    coverEl = <div className="Book-cover-placeholder">Cover art missing</div>
  } else {
    coverEl = <img className="Book-cover" src={'https://covers.openlibrary.org/b/id/' + covers[0] + '-M.jpg'} alt={"Cover for " + title} />;
  }

  let authorNamesEl;
  if (typeof authorNames === 'undefined') {
    authorNamesEl = <div>No author information</div>
  } else {
    authorNamesEl = (
      <div>
        by{' '}
        {[...authorNames.entries()].map(([i, authorName]) => {
          return (
            <>
              {i > 0 && i == authorNames.length - 1 ? ' and ' : null}
              {i > 0 && i !== authorNames.length - 1 ? ', ' : null}
              <span className="Book-author">{authorName}</span>
            </>
          );
        })}
      </div>
    );
  }

  return (
    <article className={'Book-container' + (compact ? ' compact' : '')}>
      <div className="Book-header-and-star">
        <h3><a className="Book-title" href={"https://openlibrary.org/works/" + olid}>{title}</a></h3>
        <Star olid={olid} onFavoriteChange={onFavoriteChange} />
      </div>
      {authorNamesEl}
      <div className="book-cover-container">
        {coverEl}
      </div>
      <div className="Book-description">{descriptionContent}</div>
    </article>
  );
}

export default Book;