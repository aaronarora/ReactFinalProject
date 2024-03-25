import Book from "components/Book/Book";

// Reusable component for displaying lists of books.
// Used on Search and Favorites pages.
function BooksList({ books, onFavoriteChange }) {
  return (
    <div>
      {books.map((book) => (
        <Book onFavoriteChange={onFavoriteChange} handlekey={book.olid} book={book} />
      ))}
    </div >
  )
}

export default BooksList;